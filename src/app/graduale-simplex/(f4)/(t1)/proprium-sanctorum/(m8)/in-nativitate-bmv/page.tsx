import WorkInProgress from "@/components/workInProgress/work-in-progess";

export default function Page() {
  return (
    <main className="flex flex-col items-center pt-24 px-2">
      <WorkInProgress
        title="Próprio dos Santos"
        subtitles={[
          "Natividade da Bem-Aventurada Virgem Maria",
          "8 de setembro",
          "Festa",
        ]}
      />
    </main>
  );
}
