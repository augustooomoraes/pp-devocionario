import WorkInProgress from "@/components/workInProgress/work-in-progess";

export default function Page() {
  return (
    <main className="flex flex-col items-center pt-24 px-2">
      <WorkInProgress
        title="Tempo do Natal"
        subtitles={[
          "Natal do Senhor",
          "25 de dezembro",
          "Solenidade",
        ]}
      />
    </main>
  );
}
