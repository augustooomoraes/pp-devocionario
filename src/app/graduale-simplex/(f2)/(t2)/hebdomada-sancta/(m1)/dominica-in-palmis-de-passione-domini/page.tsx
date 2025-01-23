import WorkInProgress from "@/components/workInProgress/work-in-progess";

export default function Page() {
  return (
    <main className="flex flex-col items-center pt-24 px-2">
      <WorkInProgress
        title="Semana Santa"
        subtitles={[
          "Domingo de Ramos e da Paixão do Senhor",
        ]}
      />
    </main>
  );
}
