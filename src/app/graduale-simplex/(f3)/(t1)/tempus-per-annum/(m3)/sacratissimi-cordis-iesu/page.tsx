import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

export const metadata = {
  title: "Sagrado Coração – Comum – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Tempo Comum"
        subtitles={[
          "Sagrado Coração de Jesus",
          "Sexta-feira após o II Domingo após Pentecostes",
          "Solenidade",
        ]}
      />
    </RegularMain>
  );
}
