import { DevStage } from "./common"

// =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=
// =x=x=x=x=x=x=x=x=x=x=x=x= Kyriale

export type KyrialeFile = {
  title: string,
  missae: Missa[],
}

export type Missa = {
  devStage: DevStage,
  id: number,
  number?: number,
  title?: string,
  indication?: string,
  url: string,
  parts: MissaePartes, // TODO: check pig latin
}[]

export type MissaePartes = { // I'm guessing the best thing would actually be strings for IDs referring to another file with the actual MissaePartes.
  kyrie: string[],
  gloria: string[],
  sanctus: string[],
  agnus: string[],
  ite: IteType,
}[]

export type IteType = {
  ite?: string[],
  benedicamus?: string[],
  requiescant?: string[],
}

// export type MissaePartes = {
//   kyrie: GregorianChant[],
//   gloria: GregorianChant[] | null,
//   sanctus: GregorianChant[],
//   agnus: GregorianChant[],
//   ite: IteType[],
// }[]

// export type IteType = {
//   ite?: GregorianChant[],
//   benedicamus?: GregorianChant[],
//   requiescant?: GregorianChant,
// }

export type GregorianChant = {
  name?: string,
  supertitle?: string,
  title?: string,
  subtitle?: string,
  textLeft?: string,
  textRight?: string,
  annotation?: string,
  sheetMusic: string,
}

// =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=
// =x=x=x=x=x=x=x=  Graduale Simplex

export type GradualeSimplexFile = {
  title: string,
  subtitle: string,
  missae: GradualisMissa[], // TODO: check pig latin
}

export type GradualisMissa = {
  devStage: DevStage,
  group: GradualisMissaGroup, // TODO: check pig latin
  id: number,
  title: string,
  url: string,
  parts: GradualisMissaePartes, // TODO: check pig latin
}

export type GradualisMissaGroup =
  "tempus-adventus" | // "Tempo do Advento"
  "tempus-nativitatis" | // "Tempo do Natal"
  "tempus-quadragesimae" | // "Tempo da Quaresma"
  "hebdomada-sancta" | // "Semana Santa" (que contém o "Tríduo Pascal")
  "tempus-paschale" | // "Tempo Pascal"
  "tempus-per-annum" | // "Tempo Comum"
  "liturgia-defunctorum" | // "Liturgia dos Defuntos"
  "proprium-sanctorum" | // "Próprio dos Santos"
  "communia" | // "Comuns"
  "missae-rituales" | // "Missas Rituais"
  "missae-pro-varii-necessitatibus" | // "Missas por Diversas Necessidades"
  "missae-votivae" // "Missas Votivas"

// TODO: a relation of the view names and the enum values for rendering purposes

export type GradualisMissaePartes = {
  "introitus": string[]
  "psalmus-responsorius": string[]
  "alleluia": string[]
  "psalmus-alleluiaticus": string[]
  "offertorium": string[]
  "communio": string[]

  /*

  - "introitus" (entrada)
    - antífona
    - versos

  - "psalmus-responsorius" (salmo responsorial)
    - (verso 1 && resposta) / verso 2 ............

  - "alleluia" (aleluia)
    - aleluia
    - versos

  - "psalmus-alleluiaticus" (salmo aleluiático)
    - (verso 1 && resposta) / verso 2 ............

  - "offertorium" (ofertório)
    - antífona
    - versos

  - "communio" (comunhão)
    - antífona
    - versos



  - casos especiais ............

  */
}
