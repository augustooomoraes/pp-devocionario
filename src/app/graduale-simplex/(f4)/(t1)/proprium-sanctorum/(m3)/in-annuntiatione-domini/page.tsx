import WorkInProgress from "@/components/workInProgress/work-in-progess";

export default function Page() {
  return (
    <main className="flex flex-col items-center pt-24 px-2">
      <WorkInProgress
        title="Próprio dos Santos"
        subtitles={[
          "Anunciação do Senhor",
          "25 de março",
          "Solenidade",
          "Nos anos em que o dia 25 de março está situado dentro da Semana Santa ou da Oitava da Páscoa, esta solenidade é transferida para o primeiro dia livre após a Oitava da Páscoa.",
        ]}
      />
    </main>
  );
}
