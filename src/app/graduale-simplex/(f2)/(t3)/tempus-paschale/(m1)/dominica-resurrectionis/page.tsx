import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Tempo Pascal"
        subtitles={[
          "Domingo de Páscoa da Ressureição do Senhor",
        ]}
      />
    </RegularMain>
  );
}
