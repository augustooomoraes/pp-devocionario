import { BadgeData } from "@/app/lib/types/devocionarios";
import { DevocionarioFile } from "../../lib/file-rendering";
import file from "@/app/lib/data/devocionarios.json"
import RegularMain from "@/components/regularMain/regular-main";

export const metadata = {
  title: "Da Devoção e da Consagração Total à Virgem Santíssima",
};

const badges: BadgeData[] = [
  {badge: 1, surface: "orange-400", surfaceDark: "orange-700", text: "black", textDark: "white"},
  {badge: 2, surface: "green-400", surfaceDark: "green-700", text: "black", textDark: "black"},
  {badge: 3, surface: "blue-400", surfaceDark: "blue-700", text: "white", textDark: "white"},
  {badge: 4, surface: "yellow-700", surfaceDark: "amber-500", text: "black", textDark: "black"},
]

export default function Page() {
  return (
    <RegularMain>
      <DevocionarioFile file={file["consagracao-a-virgem-santissima"]} badges={badges} />
      {/* TODO: add badges, linked to the third section, below each prayer title, relative to the preparation steps they belong and which order, in that step, they occupy */}
    </RegularMain>
  );
}
