import RegularMain from "@/components/common/regular-main";
import WorkInProgress from "@/components/images/work-in-progess";

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
