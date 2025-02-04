import RegularMain from "@/components/common/regular-main";
import WorkInProgress from "@/components/images/work-in-progess";

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
