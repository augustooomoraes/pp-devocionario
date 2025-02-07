import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

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
