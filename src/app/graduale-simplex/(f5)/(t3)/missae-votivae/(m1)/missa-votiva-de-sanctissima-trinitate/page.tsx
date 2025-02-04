import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Santíssima Trindade – Votivas – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Missas Votivas"
        subtitles={[
          "Missa Votiva da Santíssima Trindade",
        ]}
      />
    </RegularMain>
  );
}
