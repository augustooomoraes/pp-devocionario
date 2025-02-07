import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Missa pelos Defuntos – Defuntos – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Liturgia dos Defuntos"
        subtitles={[
          "Missa pelos Defuntos",
        ]}
      />
    </RegularMain>
  );
}
