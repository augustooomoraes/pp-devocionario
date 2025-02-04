import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Assunção – Próprios – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Próprio dos Santos"
        subtitles={[
          "Assunção da Bem-Aventurada Virgem Maria",
          "15 de agosto",
          "Solenidade",
        ]}
      />
    </RegularMain>
  );
}
