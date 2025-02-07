import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Rei do Universo – Comum – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Tempo Comum"
        subtitles={[
          "Nosso Senhor Jesus Cristo, Rei do Universo",
          "Último domingo do Tempo Comum",
          "Solenidade",
        ]}
      />
    </RegularMain>
  );
}
