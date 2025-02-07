import fs from "fs";
import path from "path";
import Fuse from "fuse.js";
import { dataFiles, titles } from "./metadata";

const dataDir = path.join(process.cwd(), "src/lib/data");

function extractContentValues(obj: any): string[] {
  if (typeof obj !== "object" || obj === null) return [];

  let results: string[] = [];

  for (const key in obj) {
    if (key === "content" || key === "contents" || key === "title") {
      const value = obj[key];

      if (typeof value === "string") {
        results.push(value);
      } else if (typeof value === "object") {
        results = results.concat(
          Object.values(value).filter((v) => typeof v === "string") as string[]
        );
      }
    }

    if (typeof obj[key] === "object") {
      results = results.concat(extractContentValues(obj[key]));
    }
  }

  return results;
}

export async function fetchSearchResults(query: string) {
  if (!query) return [];

  const files = fs.readdirSync(dataDir).filter((file) => file.endsWith(".json"));

  let allItems: {
    source: string,
    icon: string | null,
    title: string,
    url: string,
    content: string,
    hasDownloadLinks: boolean,
  }[] = [];

  for (const file of files) {
    const fileName = file.replace(".json", "");
    const filePath = path.join(dataDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const items = JSON.parse(fileContent);

    const fileMeta = dataFiles.find((d) => d.name === fileName);

    Object.keys(items).forEach((key) => {
      const contentTexts: string[] = extractContentValues(items[key]);
      const titleMeta = titles.find((d) => d.title === key);

      const hasDownloadLinks =
        Array.isArray(items[key]["download-links"]) &&
        items[key]["download-links"].length > 0;

      contentTexts.forEach((content) => {
        allItems.push({
          source: fileMeta?.displayName || fileName,
          icon: fileMeta?.icon || null,
          title: titleMeta?.displayName || key,
          url: `/${key}`,
          content,
          hasDownloadLinks,
        });
      });
    });
  }

  const fuse = new Fuse(allItems, {
    keys: ["title", "content"],
    threshold: 0.3,
    distance: 100,
    findAllMatches: true,
  });

  const fuzzyResults = fuse.search(query).map((result) => result.item);

  return Array.from(
    new Map(
      fuzzyResults.map(({ source, icon, title, url, hasDownloadLinks }) => [
        title,
        { source, icon, title, url, hasDownloadLinks },
      ])
    ).values()
  ).sort((a, b) => {
    const orderA = dataFiles.find((d) => d.displayName === a.source)?.order ?? Infinity;
    const orderB = dataFiles.find((d) => d.displayName === b.source)?.order ?? Infinity;

    if (orderA !== orderB) return orderA - orderB;
    return a.title.localeCompare(b.title, "pt-BR");
  });
}

/*
  TODO:
  → "- highlight where the match ocurred"
    → Would be difficult (to make look good) because the data files are very different from the data displayed on the pages.
  → "- for "musica-liturgica.json", search for content inside "missae" instead of inside the first level objects"
    → Kyriale missæ's text contents are gonna be all the same – it's enough to give "Música litúrgica – Kyriale" as a result; graduale missæ's contents, however, will need this differentiation.
  → "- pagination"
    → Not needed, at least for now, as there are so little possible results for any query.
  → "- cache results for better performance"
    → Same thing, i guess... no need for it now.
*/
