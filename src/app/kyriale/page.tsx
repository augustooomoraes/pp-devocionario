import KyrialeList from "@/components/page-specific/kyriale/kyriale-list";
import file from "@/app/lib/data/musica-liturgica.json"
import RegularMain from "@/components/common/regular-main";

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
