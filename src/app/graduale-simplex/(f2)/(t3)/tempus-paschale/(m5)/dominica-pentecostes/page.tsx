import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

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
