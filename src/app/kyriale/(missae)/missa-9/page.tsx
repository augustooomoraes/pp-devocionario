import WorkInProgress from "@/components/workInProgress/work-in-progess";

export default function Page() {
  return (
    <main className="flex flex-col items-center pt-24 px-2">

        <WorkInProgress
          title="Kyriale"
          subtitles={[
            "Missa IX",
            "Cum jubilo",
            "para festas da Bem-Aventurada Virgem Maria (1)",
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
