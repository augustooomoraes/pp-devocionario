import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Dedicação de uma Igreja – Comuns – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Comuns"
        subtitles={[
          "Comum para Dedicação de uma Igreja",
        ]}
      />
    </RegularMain>
  );
}
