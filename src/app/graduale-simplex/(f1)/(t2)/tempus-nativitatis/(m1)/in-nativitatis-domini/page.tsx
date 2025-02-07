import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Natal – Natal – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Tempo do Natal"
        subtitles={[
          "Natal do Senhor",
          "25 de dezembro",
          "Solenidade",
        ]}
      />
    </RegularMain>
  );
}
