import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Semana Santa"
        subtitles={[
          "Domingo de Ramos e da Paixão do Senhor",
        ]}
      />
    </RegularMain>
  );
}
