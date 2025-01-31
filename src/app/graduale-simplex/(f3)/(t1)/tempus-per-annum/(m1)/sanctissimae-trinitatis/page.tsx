import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

export const metadata = {
  title: "Santíssima Trindade – Comum – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Tempo Comum"
        subtitles={[
          "Santíssima Trindade",
          "Domingo após o de Pentecostes",
          "Solenidade",
        ]}
      />
    </RegularMain>
  );
}
