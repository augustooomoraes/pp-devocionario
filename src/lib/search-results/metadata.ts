
export type DataFileMeta = {
  name: string,
  displayName: string,
  icon: string,
  order: number,
}

export const dataFiles: DataFileMeta[] = [
  {
    name: "devocionarios",
    displayName: "Devocionários",
    icon: "BookOpen",
    order: 1,
  },
  {
    name: "oracoes-compostas",
    displayName: "Orações compostas",
    icon: "FlameKindling",
    order: 2,
  },
  {
    name: "oracoes",
    displayName: "Orações",
    icon: "Flame",
    order: 3,
  },
  {
    name: "musica-liturgica",
    displayName: "Música litúrgica",
    icon: "Music3",
    order: 4,
  },
]

export type TitleMeta = {
  title: string,
  displayName: string,
}

export const titles: TitleMeta[] = [
  // =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=
  // =x=x=x=x=x=x=x=x=x= Devocionários
  {
    title: "consagracao-a-virgem-santissima",
    displayName: "Da Devoção e da Consagração Total à Virgem Santíssima",
  },
  // =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=
  // =x=x=x=x=x=x=x=x=x=x=x=x= Orações
  {
    title: "ave-maria",
    displayName: "Ave Maria",
  },
  {
    title: "pater-noster",
    displayName: "Pai Nosso",
  },
  {
    title: "gloria-patri",
    displayName: "Glória ao Pai",
  },
  {
    title: "angele-dei",
    displayName: "Santo Anjo",
  },
  // =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=
  // =x=x=x=x=x=x=x= Orações compostas
  {
    title: "angelus",
    displayName: "Ángelus",
  },
  {
    title: "santo-rosario",
    displayName: "Santo Rosário",
  },
  {
    title: "santo-rosario-misterios",
    displayName: "Mistérios do Santo Rosário",
  },
  {
    title: "pequena-coroa-da-santissima-virgem",
    displayName: "Pequena Coroa da Santíssima Virgem",
  },
  {
    title: "coroa-angelica",
    displayName: "Coroa Angélica",
  },
  {
    title: "coroa-do-senhor",
    displayName: "Coroa do Senhor",
  },
  // =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=
  // =x=x=x=x=x=x=x=x=x=x=x=x= Kyriale
  {
    title: "",
    displayName: "",
  },
  // =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=
  // =x=x=x=x=x=x=x=  Graduale Simplex
]
