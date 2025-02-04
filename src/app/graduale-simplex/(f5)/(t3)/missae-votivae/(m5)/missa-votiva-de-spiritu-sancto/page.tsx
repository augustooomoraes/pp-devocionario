import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Espírito Santo – Votivas – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Missas Votivas"
        subtitles={[
          "Missa Votiva do Espírito Santo",
        ]}
      />
    </RegularMain>
  );
}
