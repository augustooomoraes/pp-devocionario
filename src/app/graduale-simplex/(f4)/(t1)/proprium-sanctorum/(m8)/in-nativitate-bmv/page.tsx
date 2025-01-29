import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Próprio dos Santos"
        subtitles={[
          "Natividade da Bem-Aventurada Virgem Maria",
          "8 de setembro",
          "Festa",
        ]}
      />
    </RegularMain>
  );
}
