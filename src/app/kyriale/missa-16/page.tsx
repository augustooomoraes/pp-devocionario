import WorkInProgress from "@/components/workInProgress/work-in-progess";

export default function Page() {
  return (
    <main className="flex flex-col items-center pt-24 px-2">

        <WorkInProgress
          title="Kyriale"
          subtitles={[
            "Missa XVI",
            "–",
            "para férias",
            "1 Kyrie",
            "–",
            "1 Sanctus",
            "1 Agnus",
            "1 Benedicamus",
          ]}
        />
    </main>
  );
}
