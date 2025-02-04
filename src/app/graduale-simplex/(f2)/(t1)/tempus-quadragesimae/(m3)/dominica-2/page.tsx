import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "II Domingo – Quaresma – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Tempo da Quaresma"
        subtitles={[
          "II Domingo",
        ]}
      />
    </RegularMain>
  );
}
