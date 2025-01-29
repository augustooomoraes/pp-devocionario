import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

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
