
export type DevocionarioFile = {
  title: string,
  index: Index,
  sessions: Sessions,
  footnotes: Footnotes,
  "section-map": SectionMap,
}

export type Index = {
  id: number,
  title: string,
  index?: Index
  "no-list-number"?: boolean,
}[]

export type Sessions = {
  id: number,
  title: string,
  type: SessionTypes,
  contents: SessionContents,
}[]

export type SessionContents = {
  id?: number,
  "link-id"?: number,
  type: SessionContentTypes | ParallelPrecesTypes,
  content?: string | MediaRelativeContent,
  contents?: Index | ParallelPreces,
  "end-break": true,
  "subsession-break"?: boolean, // Isso aqui não está no README.
  "increased-vertical-spacing"?: boolean, // Isso aqui não está no README.
  "no-margin-bottom"?: boolean, // Isso aqui não está no README.
}[]

export type ParallelPreces = {
  type: ParallelPrecesTypes,
  content: ParallelPrecesContent,
  "end-break"?: boolean,
  "larger-break"?: boolean,
  "subsession-break"?: boolean, // Isso aqui não está no README.
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

export type SessionTypes = (
  "regular-text" |
  "gregorian-chant" |
  "parallel-preces"
)

export type SessionContentTypes = (
  "header-1" |
  "header-2" |
  "paragraph" |
  "parallel-preces" | // Vide ~ l. 2554 (O Iesu, vivens in Maria) e outras depois
  "media-relative" |
  "indication" |
  "index"
)

export type ParallelPrecesTypes = (
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