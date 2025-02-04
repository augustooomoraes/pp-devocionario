import RegularMain from "@/components/common/regular-main";
import WorkInProgress from "@/components/images/work-in-progess";

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
