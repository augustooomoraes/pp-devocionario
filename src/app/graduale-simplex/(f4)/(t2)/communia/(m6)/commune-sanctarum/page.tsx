import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Comuns"
        subtitles={[
          "Comum das Santas",
        ]}
      />
    </RegularMain>
  );
}
