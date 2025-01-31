import KyrialeList from "@/components/kyrialeList/kyriale-list";
import file from "@/app/lib/data/musica-liturgica.json"
import RegularMain from "@/components/regularMain/regular-main";

export const metadata = {
  title: "Kyriale",
};

export default function Page() {
  return (
    <RegularMain>
      <KyrialeList file={file["kyriale"]} />
    </RegularMain>
  );
}
