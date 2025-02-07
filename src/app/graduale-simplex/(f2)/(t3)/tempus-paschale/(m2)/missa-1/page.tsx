import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Missa I – Pascal – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Tempo Pascal"
        subtitles={[
          "Missa I",
        ]}
      />
    </RegularMain>
  );
}
