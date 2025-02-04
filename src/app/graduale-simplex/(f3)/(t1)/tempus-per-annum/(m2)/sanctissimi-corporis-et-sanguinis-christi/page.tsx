import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Corpus Christi – Comum – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Tempo Comum"
        subtitles={[
          "Santíssimo Corpo e Sangue de Cristo",
          "Quinta-feira após a Solenidade da Santíssima Trindade Pentecostes",
          "Solenidade",
        ]}
      />
    </RegularMain>
  );
}
