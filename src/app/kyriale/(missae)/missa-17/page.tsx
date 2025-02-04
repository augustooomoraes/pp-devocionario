import RegularMain from "@/components/common/regular-main";
import WorkInProgress from "@/components/images/work-in-progess";

export const metadata = {
  title: "Missa XVII – Kyriale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Kyriale"
        subtitles={[
          "Missa XVII",
          "–",
          "para domingos do Advento e da Quaresma",
          "3 Kyrie",
          "–",
          "1 Sanctus",
          "1 Agnus",
          "1 Ite / 2 Benedicamus",
        ]}
      />
    </RegularMain>
  );
}
