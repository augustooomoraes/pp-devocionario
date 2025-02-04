import KyrialeList from "@/components/page-specific/kyriale/kyrialeList";
import file from "@/lib/data/musica-liturgica.json"
import RegularMain from "@/components/common/regularMain";

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
