import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Pentecostes – Pascal – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Tempo Pascal"
        subtitles={[
          "Domingo de Pentecostes",
          "Solenidade",
        ]}
      />
    </RegularMain>
  );
}
