import WorkInProgress from "@/components/workInProgress/work-in-progess";

export default function Page() {
  return (
    <main className="flex flex-col items-center pt-24 px-2">
      <WorkInProgress
        title="Próprio dos Santos"
        subtitles={[
          "Exaltação da Santa Cruz",
          "14 de setembro",
          "Festa",
        ]}
      />
    </main>
  );
}
