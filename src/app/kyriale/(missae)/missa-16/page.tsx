import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Kyriale"
        subtitles={[
          "Missa XVI",
          "–",
          "para férias",
          "1 Kyrie",
          "–",
          "1 Sanctus",
          "1 Agnus",
          "1 Benedicamus",
        ]}
      />
    </RegularMain>
  );
}
