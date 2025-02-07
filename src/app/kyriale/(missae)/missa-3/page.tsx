import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Missa III – Kyriale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Kyriale"
        subtitles={[
          "Missa III",
          "Kyrie Deus sempiterne",
          "para festas de primeira classe (2)",
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
