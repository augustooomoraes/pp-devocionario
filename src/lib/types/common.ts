import { DownloadLink } from "./devocionarios"

export type DevStage = "done" | "mvp" | "started" | "notStarted"

export type SearchedItem = {
  source: string,
  icon: string | null,
  title: string,
  url: string,
  content?: string, // used on fetchSearchResults function ( on Fuse() ), but not passed to the SearchResult component.
  downloadLinks?: DownloadLink[],
}
