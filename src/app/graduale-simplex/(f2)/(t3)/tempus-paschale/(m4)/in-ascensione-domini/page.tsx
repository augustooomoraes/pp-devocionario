import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

export const metadata = {
  title: "Ascenção – Pascal – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Tempo Pascal"
        subtitles={[
          "Ascenção do Senhor",
          "Solenidade",
        ]}
      />
    </RegularMain>
  );
}
