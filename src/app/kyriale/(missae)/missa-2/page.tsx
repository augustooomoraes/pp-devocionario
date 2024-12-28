import WorkInProgress from "@/components/workInProgress/work-in-progess";

export default function Page() {
  return (
    <main className="flex flex-col items-center pt-24 px-2">
      <WorkInProgress
        title="Kyriale"
        subtitles={[
          "Missa II",
          "Kyrie fons bonitatis",
          "para festas de primeira classe (1)",
          "1 Kyrie",
          "1 Gloria",
          "1 Sanctus",
          "1 Agnus",
          "2 Ite / 1 Benedicamus",
        ]}
      />
    </main>
  );
}
