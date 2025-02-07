import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Apresentação – Próprios – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Próprio dos Santos"
        subtitles={[
          "Apresentação do Senhor",
          "2 de fevereiro",
          "Festa",
        ]}
      />
    </RegularMain>
  );
}
