import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Missa XVI – Kyriale",
};

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
