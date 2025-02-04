import RegularMain from "@/components/common/regular-main";
import WorkInProgress from "@/components/images/work-in-progess";

export const metadata = {
  title: "Missa Regia I – Kyriale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Kyriale"
        subtitles={[
          "–",
          "Missa Regia I",
          "–",
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
