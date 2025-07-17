import { DevStage } from "../types/common"

type SidebarData = {
  navMain: {
    title: string,
    url: string,
    items: {
      title: string,
      url: string,
      devStage?: DevStage,
    }[]
  }[],
}

export const sidebarData: SidebarData = {
  navMain: [
    {
      title: "Devocionários",
      url: "#",
      items: [
        {
          title: "Da Devoção e da Consagração Total à Virgem Santíssima",
          url: "/consagracao-a-virgem-santissima",
          devStage: "mvp",
        },
        {
          title: "Da Ordem Terceira do Carmo",
          url: "/ordem-terceira-do-carmo",
          devStage: "notStarted",
        },
        {
          title: "Da Consagração a São José",
          url: "/consagracao-a-sao-jose",
          devStage: "notStarted",
        },
        {
          title: "Da Consagração a São Miguel Arcanjo",
          url: "/consagracao-a-sao-miguel-arcanjo",
          devStage: "notStarted",
        },
      ],
    },
    {
      title: "Orações compostas",
      url: "#",
      items: [
        {
          title: "Ángelus",
          url: "/angelus",
          devStage: "done",
        },
        {
          title: "Santo Rosário",
          url: "/santo-rosario",
          devStage: "mvp",
        },
        {
          title: "Pequena Coroa da Santíssima Virgem",
          url: "/pequena-coroa-da-santissima-virgem",
          devStage: "mvp",
        },
        {
          title: "Coroa Angélica",
          url: "/coroa-angelica",
          devStage: "mvp",
        },
        {
          title: "Coroa do Senhor",
          url: "/coroa-do-senhor",
          devStage: "notStarted",
        },
      ],
    },
    {
      title: "Orações",
      url: "#",
      items: [
        {
          title: "Pai Nosso",
          url: "/pater-noster",
          devStage: "mvp",
        },
        {
          title: "Ave Maria",
          url: "/ave-maria",
          devStage: "mvp",
        },
        {
          title: "Glória ao Pai",
          url: "/gloria-patri",
          devStage: "done",
        },
        {
          title: "Antífonas Marianas",
          url: "/antifonas-marianas",
          devStage: "mvp",
        },
        {
          title: "Santo Anjo",
          url: "/angele-dei",
          devStage: "done",
        },
      ],
    },
    {
      title: "Novenas e Quaresmas",
      url: "#",
      items: [
        {
          title: "Novena a São José",
          url: "/novena-a-sao-jose",
          devStage: "notStarted",
        },
        {
          title: "Novena a Santa Teresinha",
          url: "/novena-a-santa-teresinha",
          devStage: "notStarted",
        },
        {
          title: "Quaresma de São Miguel Arcanjo",
          url: "/quaresma-de-sao-miguel-arcanjo",
          devStage: "notStarted",
        },
      ],
    },
    {
      title: "Música litúrgica",
      url: "#",
      items: [
        {
          title: "Kyriale",
          url: "/kyriale",
          devStage: "notStarted",
        },
        {
          title: "Gradual Simples",
          url: "/graduale-simplex",
          devStage: "notStarted",
        },
        {
          title: "Outras músicas",
          url: "/outras-musicas",
          devStage: "notStarted",
        },
      ],
    },
  ],
}
