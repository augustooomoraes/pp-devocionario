import WorkInProgress from "@/components/workInProgress/work-in-progess";

export default function Page() {
  return (
    <main className="flex flex-col items-center pt-24 px-2">
      <WorkInProgress
        title="Kyriale"
        subtitles={[
          "Missa I",
          "Lux et Origo",
          "para o Tempo Pascal",
          "1 Kyrie",
          "1 Gloria",
          "1 Sanctus",
          "1 Agnus",
          "2 Ite",
        ]}
      />
    </main>
  );
}
