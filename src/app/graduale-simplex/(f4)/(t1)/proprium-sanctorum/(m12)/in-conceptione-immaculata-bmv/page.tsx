import RegularMain from "@/components/common/regular-main";
import WorkInProgress from "@/components/images/work-in-progess";

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
