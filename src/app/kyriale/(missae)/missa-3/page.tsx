import WorkInProgress from "@/components/workInProgress/work-in-progess";

export default function Page() {
  return (
    <main className="flex flex-col items-center pt-24 px-2">

        <WorkInProgress
          title="Kyriale"
          subtitles={[
            "Missa III",
            "Kyrie Deus sempiterne",
            "para festas de primeira classe (2)",
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
