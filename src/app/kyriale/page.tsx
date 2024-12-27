import KyrialeList from "@/components/kyrialeList/kyriale-list";
import file from "@/app/lib/data/musica-liturgica.json"

export default function Page() {
  return (
    <main className="flex flex-col items-center pt-24 px-2">
      <KyrialeList file={file["kyriale"]} />
    </main>
  );
}
