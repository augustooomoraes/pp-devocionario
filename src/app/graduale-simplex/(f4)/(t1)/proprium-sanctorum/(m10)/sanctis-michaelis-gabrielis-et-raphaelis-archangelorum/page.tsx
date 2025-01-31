import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

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
