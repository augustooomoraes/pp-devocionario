import WorkInProgress from "@/components/workInProgress/work-in-progess";

export default function Page() {
  return (
    <main className="flex flex-col items-center pt-24 px-2">
      <WorkInProgress
        title="Tempo Comum"
        subtitles={[
          "Nosso Senhor Jesus Cristo, Rei do Universo",
          "Último domingo do Tempo Comum",
          "Solenidade",
        ]}
      />
    </main>
  );
}
