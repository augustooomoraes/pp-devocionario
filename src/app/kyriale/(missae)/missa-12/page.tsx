import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

export const metadata = {
  title: "Missa XII – Kyriale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Kyriale"
        subtitles={[
          "Missa XII",
          "Pater cuncta",
          "para festas de terceira classe (1)",
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
