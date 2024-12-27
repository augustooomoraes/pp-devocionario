import WorkInProgress from "@/components/workInProgress/work-in-progess";

export default function Page() {
  return (
    <main className="flex flex-col items-center pt-24 px-2">

        <WorkInProgress
          title="Kyriale"
          subtitles={[
            "Missa XVII",
            "–",
            "para domingos do Advento e da Quaresma",
            "3 Kyrie",
            "–",
            "1 Sanctus",
            "1 Agnus",
            "1 Ite / 2 Benedicamus",
          ]}
        />
    </main>
  );
}
