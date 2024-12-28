import { DevStage } from "./common"

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

export type MissaePartes = {
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
