import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Mistério da Santa Cruz – Votivas – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Missas Votivas"
        subtitles={[
          "Missa Votiva do Mistério da Santa Cruz",
        ]}
      />
    </RegularMain>
  );
}
