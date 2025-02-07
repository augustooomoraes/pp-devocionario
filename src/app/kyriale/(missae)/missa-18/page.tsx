import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Missa XVIII – Kyriale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Kyriale"
        subtitles={[
          "Missa XVIII",
          "Deus Genitor alme",
          "para férias do Advento e da Quaresma",
          "também para Vigílias, Têmporas e Rogações",
          "1 Kyrie",
          "–",
          "1 Sanctus",
          "1 Agnus",
          "1 Ite / 2 Benedicamus",
        ]}
      />
    </RegularMain>
  );
}
