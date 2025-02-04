// console.log(`\n🧪 items:\n${JSON.stringify(items)}\n`) // TODO: remove testlog
import fs from "fs";
import path from "path";
import Fuse from "fuse.js";
import { dataFiles, titles } from "./dataFiles";

const dataDir = path.join(process.cwd(), "src/app/lib/data");

function extractContentValues(obj: any): string[] {
  if (typeof obj !== "object" || obj === null) return [];

  let results: string[] = [];

  for (const key in obj) {
    if (key === "content" || key === "contents" || key === "title") {
      const value = obj[key];

      if (typeof value === "string") {
        results.push(value);
      } else if (typeof value === "object") {
        results = results.concat(Object.values(value).filter((v) => typeof v === "string") as string[]);
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

  let allItems: { source: string; icon: any; title: string; url: string; content: string }[] = [];

  for (const file of files) {
    const fileName = file.replace(".json", "");
    const filePath = path.join(dataDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const items = JSON.parse(fileContent);

    const fileMeta = dataFiles.find((d) => d.name === fileName);

    Object.keys(items).forEach((key) => {
      const contentTexts: string[] = extractContentValues(items[key]);
      const titleMeta = titles.find((d) => d.title === key);

      contentTexts.forEach((content) => {
        allItems.push({
          source: fileMeta?.displayName || fileName,
          icon: fileMeta?.icon || null,
          title: titleMeta?.displayName || key,
          url: `/${key}`,
          content
        });
      });
    });
  }

  // Configure Fuse.js for fuzzy search
  const fuse = new Fuse(allItems, {
    keys: ["title", "content"],
    threshold: 0.3, // Adjust for stricter or looser matching
    distance: 100, // How close words need to be
    findAllMatches: true
  });

  const fuzzyResults = fuse.search(query).map((result) => result.item);

  return Array.from(
    new Map(
      fuzzyResults.map(({ source, icon, title, url }) => [title, { source, icon, title, url }])
    ).values()
  ).sort((a, b) => {
    const orderA = dataFiles.find((d) => d.displayName === a.source)?.order ?? Infinity;
    const orderB = dataFiles.find((d) => d.displayName === b.source)?.order ?? Infinity;
    return orderA - orderB;
  });
}

/*
  TODO:
  - for "musica-liturgica.json", search for content inside "missae" instead of inside the first level objects
  - pagination
  - searchbar on "busca" page
    - debouncing
  - cache results for better performance

  → highlight where the match ocurred: would be difficult (to make look good) because the data files are very different from the data displayed on the pages
*/
