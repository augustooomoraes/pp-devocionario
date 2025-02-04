import RegularMain from "@/components/common/regular-main";
import WorkInProgress from "@/components/images/work-in-progess";

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
