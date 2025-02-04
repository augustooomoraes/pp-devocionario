import RegularMain from "@/components/common/regular-main";
import WorkInProgress from "@/components/images/work-in-progess";

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
