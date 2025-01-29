import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Próprio dos Santos"
        subtitles={[
          "Apresentação do Senhor",
          "2 de fevereiro",
          "Festa",
        ]}
      />
    </RegularMain>
  );
}
