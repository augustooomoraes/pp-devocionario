import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "V Domingo – Quaresma – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Tempo da Quaresma"
        subtitles={[
          "V Domingo",
        ]}
      />
    </RegularMain>
  );
}
