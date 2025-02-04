import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Batismo – Natal – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Tempo do Natal"
        subtitles={[
          "Batismo do Senhor",
          "Domingo após a Epifania do Senhor",
          "Festa",
        ]}
      />
    </RegularMain>
  );
}
