import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

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
