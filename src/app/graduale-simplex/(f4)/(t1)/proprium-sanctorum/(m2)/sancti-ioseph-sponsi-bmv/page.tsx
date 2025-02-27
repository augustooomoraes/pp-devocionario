import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "São José – Próprios – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Próprio dos Santos"
        subtitles={[
          "São José, Esposo da Virgem Maria",
          "19 de março",
          "Solenidade",
          "Nos anos em que o dia 19 de março está situado dentro da Semana Santa, esta solenidade é transferida para o primeiro dia livre após a Oitava de Páscoa.",
        ]}
      />
    </RegularMain>
  );
}
