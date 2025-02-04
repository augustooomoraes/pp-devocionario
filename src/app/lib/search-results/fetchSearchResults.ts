// console.log(`\n🧪 items:\n${JSON.stringify(items)}\n`) // TODO: remove testlog
import fs from "fs";
import path from "path";
import { dataFiles, titles } from "./dataFiles";

const dataDir = path.join(process.cwd(), "src/app/lib/data");

function searchInObject(obj: any, query: string): boolean {
  if (typeof obj !== "object" || obj === null) return false;

  for (const key in obj) {
    if (key === "content" || key === "contents" || key === "title") {
      const value = obj[key];

      if (typeof value === "string" && value.toLowerCase().includes(query.toLowerCase())) {
        return true;
      }
      if (typeof value === "object") {
        if (Object.values(value).some((v) => 
          typeof v === "string" && v.toLowerCase().includes(query.toLowerCase())
        )) {
          return true;
        }
      }
    }

    if (typeof obj[key] === "object") {
      if (searchInObject(obj[key], query)) return true;
    }
  }

  return false;
}

export async function fetchSearchResults(query: string) {
  if (!query) return [];

  const files = fs.readdirSync(dataDir).filter((file) => file.endsWith(".json"));

  let results: {
    source: string,
    icon: any,
    title: string,
    url: string,
  }[] = [];

  for (const file of files) {
    const fileName = file.replace(".json", "");
    const filePath = path.join(dataDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const items = JSON.parse(fileContent);

    const matchingItems = Object.keys(items)
      .filter((key) => searchInObject(items[key], query))
      .map((key) => {
        const fileMeta = dataFiles.find((d) => d.name === fileName);
        const titleMeta = titles.find((d) => d.title === key);
        return {
          source: fileMeta?.displayName || fileName,
          icon: fileMeta?.icon || null,
          title: titleMeta?.displayName || key,
          url: `/${key}`
        };
      });

    results = results.concat(matchingItems);
  }

  return results;
}

/*
  TODO:
  - for "musica-liturgica.json", search for content inside "missae" instead of inside the first level objects
  - fuzzy search
  - pagination
  - searchbar on "busca" page
    - debouncing
  - cache results for better performance

  → highlight where the match ocurred: would be difficult (to make look good) because the data files are very different from the data displayed on the pages
*/
