import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Santos Arcanjos – Próprios – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Próprio dos Santos"
        subtitles={[
          "Santos Miguel, Gabriel e Rafael, Arcanjos",
          "29 de setembro",
          "Festa",
        ]}
      />
    </RegularMain>
  );
}
