import WorkInProgress from "@/components/workInProgress/work-in-progess";

export default function Page() {
  return (
    <main className="flex flex-col items-center pt-24 px-2">
      <WorkInProgress
        title="Tempo da Quaresma"
        subtitles={[
          "Quarta-Feira de Cinzas",
          "Aplicável a todas as missas feriais do Tempo da Quaresma",
        ]}
      />
    </main>
  );
}
