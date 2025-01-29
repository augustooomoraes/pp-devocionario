import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Tempo da Quaresma"
        subtitles={[
          "II Domingo",
        ]}
      />
    </RegularMain>
  );
}
