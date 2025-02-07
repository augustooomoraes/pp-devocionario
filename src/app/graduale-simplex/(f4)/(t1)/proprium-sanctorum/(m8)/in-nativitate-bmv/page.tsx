import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Natididade da Virgem Maria – Próprios – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Próprio dos Santos"
        subtitles={[
          "Natividade da Bem-Aventurada Virgem Maria",
          "8 de setembro",
          "Festa",
        ]}
      />
    </RegularMain>
  );
}
