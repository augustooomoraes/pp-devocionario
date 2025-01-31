
export type OracoesFile = {
  title: string,
  "parallel-preces": ParallelPreces,
}

export type ParallelPreces = {
  type: SectionTypes,
  contents: Contents,
}[]

export type SectionTypes = (
  "regular-text" |
  "gregorian-chant" | // Will there ever be parallel gregorian chant sheets? (1) I'd have to write lots of pt-BR versions and (2) it wouldn't be good to read...
  "parallel-preces"
)

export type Contents = {
  type: ParallelPrecesTypes,
  content: ParallelPrecesContent,
}[]

export type ParallelPrecesTypes = (
  "header-2" |
  "paragraph" |
  "v" |
  "r" |
  "indication" |
  "annotation"
)

export type ParallelPrecesContent = {
  latin: string,
  "pt-BR": string,
}
