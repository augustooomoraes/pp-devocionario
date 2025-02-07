import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Anunciação – Próprios – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Próprio dos Santos"
        subtitles={[
          "Anunciação do Senhor",
          "25 de março",
          "Solenidade",
          "Nos anos em que o dia 25 de março está situado dentro da Semana Santa ou da Oitava da Páscoa, esta solenidade é transferida para o primeiro dia livre após a Oitava da Páscoa.",
        ]}
      />
    </RegularMain>
  );
}
