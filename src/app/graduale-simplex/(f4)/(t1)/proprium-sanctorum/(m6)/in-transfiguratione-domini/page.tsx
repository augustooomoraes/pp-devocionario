import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Transfiguração – Próprios – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Próprio dos Santos"
        subtitles={[
          "Transfiguração do Senhor",
          "6 de agosto",
          "Festa",
        ]}
      />
    </RegularMain>
  );
}
