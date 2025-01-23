import WorkInProgress from "@/components/workInProgress/work-in-progess";

export default function Page() {
  return (
    <main className="flex flex-col items-center pt-24 px-2">
      <WorkInProgress
        title="Próprio dos Santos"
        subtitles={[
          "São Pedro e São Paulo, Apóstolos",
          "29 de junho",
          "Solenidade",
        ]}
      />
    </main>
  );
}
