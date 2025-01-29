import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Próprio dos Santos"
        subtitles={[
          "Assunção da Bem-Aventurada Virgem Maria",
          "15 de agosto",
          "Solenidade",
        ]}
      />
    </RegularMain>
  );
}
