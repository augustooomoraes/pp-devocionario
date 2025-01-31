import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

export const metadata = {
  title: "Missa das Exéquias – Defuntos – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Liturgia dos Defuntos"
        subtitles={[
          "Celebração das Exéquias",
        ]}
      />
    </RegularMain>
  );
}
