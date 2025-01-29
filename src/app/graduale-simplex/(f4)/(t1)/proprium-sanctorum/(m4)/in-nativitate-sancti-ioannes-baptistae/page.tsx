import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Próprio dos Santos"
        subtitles={[
          "Natividade de São João Batista",
          "24 de junho",
          "Solenidade",
        ]}
      />
    </RegularMain>
  );
}
