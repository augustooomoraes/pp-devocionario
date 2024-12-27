import WorkInProgress from "@/components/workInProgress/work-in-progess";

export default function Page() {
  return (
    <main className="flex flex-col items-center pt-24 px-2">

        <WorkInProgress
          title="Kyriale"
          subtitles={[
            "Missa VIII",
            "De Angelis",
            "para festas de segunda classe (5)",
            "1 Kyrie",
            "1 Gloria",
            "1 Sanctus",
            "1 Agnus",
            "1 Ite / 1 Benedicamus",
          ]}
        />
    </main>
  );
}
