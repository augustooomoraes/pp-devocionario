import WorkInProgress from "@/components/workInProgress/work-in-progess";

export default function Page() {
  return (
    <main className="flex flex-col items-center pt-24 px-2">
      <WorkInProgress
        title="Semana Santa"
        subtitles={[
          "Vigília Pascal na Noite Santa",
        ]}
      />
    </main>
  );
}
