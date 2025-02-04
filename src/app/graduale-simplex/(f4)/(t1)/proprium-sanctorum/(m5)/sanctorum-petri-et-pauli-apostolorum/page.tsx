import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "São Pedro e São Paulo – Próprios – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Próprio dos Santos"
        subtitles={[
          "São Pedro e São Paulo, Apóstolos",
          "29 de junho",
          "Solenidade",
        ]}
      />
    </RegularMain>
  );
}
