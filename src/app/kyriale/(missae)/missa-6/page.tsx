import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Missa VI – Kyriale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Kyriale"
        subtitles={[
          "Missa VI",
          "Kyrie Rex Genitor",
          "para festas de segunda classe (3)",
          "1 Kyrie",
          "1 Gloria",
          "1 Sanctus",
          "1 Agnus",
          "1 Ite",
        ]}
      />
    </RegularMain>
  );
}
