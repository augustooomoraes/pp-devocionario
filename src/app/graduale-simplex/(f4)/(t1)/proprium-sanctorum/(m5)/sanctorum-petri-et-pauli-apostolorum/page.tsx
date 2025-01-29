import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Próprio dos Santos"
        subtitles={[
          "São Pedro e São Paulo, Apóstolos",
          "29 de junho",
          "Solenidade",
        ]}
      />
    </RegularMain>
  );
}
