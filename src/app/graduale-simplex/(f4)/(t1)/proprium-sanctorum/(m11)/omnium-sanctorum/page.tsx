import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Próprio dos Santos"
        subtitles={[
          "Todos os Santos",
          "1º de novembro",
          "Solenidade",
        ]}
      />
    </RegularMain>
  );
}
