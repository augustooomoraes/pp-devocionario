import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Imaculada Conceição – Próprios – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Próprio dos Santos"
        subtitles={[
          "Imaculada Conceição da Bem-Aventurada Virgem Maria",
          "8 de dezembro",
          "Solenidade",
        ]}
      />
    </RegularMain>
  );
}
