import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Exaltação da Santa Cruz – Próprios – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Próprio dos Santos"
        subtitles={[
          "Exaltação da Santa Cruz",
          "14 de setembro",
          "Festa",
        ]}
      />
    </RegularMain>
  );
}
