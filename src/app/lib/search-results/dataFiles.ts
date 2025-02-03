import { BookOpen, Flame, FlameKindling, LucideProps, Music3 } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type DataFileMeta = {
  name: string,
  displayName: string,
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
}

export const dataFiles: DataFileMeta[] = [
  {
    name: "devocionarios",
    displayName: "Devocionários",
    icon: BookOpen,
  },
  {
    name: "musica-liturgica",
    displayName: "Música litúrgica",
    icon: Music3,
  },
  {
    name: "oracoes-compostas",
    displayName: "Orações compostas",
    icon: FlameKindling,
  },
  {
    name: "oracoes",
    displayName: "Orações",
    icon: Flame,
  }
]

export type TitleMeta = {
  title: string,
  displayName: string,
}

export const titles = [
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
    title: "coroa-angelica",
    displayName: "Coroa Angélica",
  },
  {
    title: "angelus",
    displayName: "Ángelus",
  },
  {
    title: "pequena-coroa-da-santissima-virgem",
    displayName: "Pequena Coroa da Santíssima Virgem",
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
