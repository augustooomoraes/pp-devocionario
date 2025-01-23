import WorkInProgress from "@/components/workInProgress/work-in-progess";

export default function Page() {
  return (
    <main className="flex flex-col items-center pt-24 px-2">
      <WorkInProgress
        title="Próprio dos Santos"
        subtitles={[
          "São José, Esposo da Virgem Maria",
          "19 de março",
          "Solenidade",
          "Nos anos em que o dia 19 de março está situado dentro da Semana Santa, esta solenidade é transferida para o primeiro dia livre após a Oitava de Páscoa.",
        ]}
      />
    </main>
  );
}
