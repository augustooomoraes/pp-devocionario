import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Tempo do Natal"
        subtitles={[
          "Natal do Senhor",
          "25 de dezembro",
          "Solenidade",
        ]}
      />
    </RegularMain>
  );
}
