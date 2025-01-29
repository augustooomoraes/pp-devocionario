import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Tempo do Natal"
        subtitles={[
          "Epifania do Senhor",
          "6 de janeiro",
          "Solenidade",
        ]}
      />
    </RegularMain>
  );
}
