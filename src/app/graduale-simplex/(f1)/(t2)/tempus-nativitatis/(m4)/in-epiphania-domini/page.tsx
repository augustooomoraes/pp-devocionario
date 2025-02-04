import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Epifania – Natal – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Tempo do Natal"
        subtitles={[
          "Epifania do Senhor",
          "6 de janeiro",
          "Solenidade",
        ]}
      />
    </RegularMain>
  );
}
