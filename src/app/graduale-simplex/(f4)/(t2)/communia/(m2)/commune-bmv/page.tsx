import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Virgem Maria – Comuns – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Comuns"
        subtitles={[
          "Comum da Bem-Aventurada Virgem Maria",
        ]}
      />
    </RegularMain>
  );
}
