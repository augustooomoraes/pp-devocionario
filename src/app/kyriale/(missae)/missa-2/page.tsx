import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Kyriale"
        subtitles={[
          "Missa II",
          "Kyrie fons bonitatis",
          "para festas de primeira classe (1)",
          "1 Kyrie",
          "1 Gloria",
          "1 Sanctus",
          "1 Agnus",
          "2 Ite / 1 Benedicamus",
        ]}
      />
    </RegularMain>
  );
}
