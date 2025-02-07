import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Missa Sancti Hildegardis – Kyriale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Kyriale"
        subtitles={[
          "–",
          "Missa Sancti Hildegardis",
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
