import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Sagrado Coração – Votivas – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Missas Votivas"
        subtitles={[
          "Missa Votiva do Sagrado Coração de Jesus",
        ]}
      />
    </RegularMain>
  );
}
