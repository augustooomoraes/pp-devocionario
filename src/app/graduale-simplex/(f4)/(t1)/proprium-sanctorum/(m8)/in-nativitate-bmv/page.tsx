import RegularMain from "@/components/common/regular-main";
import WorkInProgress from "@/components/images/work-in-progess";

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
