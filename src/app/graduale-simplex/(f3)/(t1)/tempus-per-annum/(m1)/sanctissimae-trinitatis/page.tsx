import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

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
