
export type DevocionarioFile = {
  title: string,
  index: Index,
  sections: Sections,
  footnotes: Footnotes,
  "section-map": SectionMap,
}

export type Index = {
  id: number,
  title: string,
  index?: Index
  "no-list-number"?: boolean,
}[]

export type Sections = {
  id: number,
  title: string,
  type: SectionTypes,
  contents: SectionContents,
  badges?: { "badge": number, "content": string }[]
}[]

export type SectionContents = {
  id?: number,
  "link-id"?: number,
  type: SectionContentTypes | ParallelPrecesTypes,
  content?: string | MediaRelativeContent,
  contents?: Index | ParallelPreces,
  "end-break": true,
  "subsection-break"?: boolean, // Isso aqui não está no README.
  "increased-vertical-spacing"?: boolean, // Isso aqui não está no README.
  "no-margin-bottom"?: boolean, // Isso aqui não está no README.
  "badge"?: number,
}[]

export type ParallelPreces = {
  id?: number,
  "link-id"?: number,
  type: ParallelPrecesTypes,
  content: ParallelPrecesContent,
  "end-break"?: boolean,
  "larger-break"?: boolean,
  "subsection-break"?: boolean, // Isso aqui não está no README.
  "horizontal-line"?: HorizontalLineTypes,
}[]

export type ParallelPrecesContent = {
  latin: string,
  "pt-BR": string,
}

export type MediaRelativeContent = {
  "print-only": string,
  "screen-only": string,
}

export type HorizontalLineTypes = (
  "full" |
  "two-halves"
)

export type SectionTypes = (
  "regular-text" |
  "gregorian-chant" |
  "parallel-preces"
)

export type SectionContentTypes = (
  "header-1" |
  "header-2" |
  "paragraph" |
  "parallel-preces" | // Vide ~ l. 2554 (O Iesu, vivens in Maria) e outras depois
  "indication" |
  "index"
)

export type ParallelPrecesTypes = (
  "header-1" |
  "header-2" |
  "paragraph" |
  "v" |
  "r" |
  "indication" | // Vide ~ l. 3066 (próximo de Gloria tibi sit, hæresum et dǽmonum intereptrix) e outras depois
  "annotation"
)

export type Footnotes = {
  id: number,
  content: string,
}[]

export type SectionMap = {
  id: number,
  title: string,
}[]

export type LinkMap = {
  id: number,
  url: string,
  alt: string,
  title?: string,
}[]

export type DownloadLinks = {
  url: string,
  "direct-link": string,
  type: DownloadLinkTypes,
}[]

export type DownloadLinkTypes =
  "pdf-booklet" |
  "pdf-digital"

// =x=x=x=x=x=x=x=x=

export type BadgeData = {
  badge: number,
  surface: string,
  surfaceDark: string,
  text: string,
  textDark: string
}