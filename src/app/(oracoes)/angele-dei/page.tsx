import RegularMain from "@/components/common/regular-main";
import { OracaoFile } from "@/app/lib/file-rendering-simple";
import file from "@/app/lib/data/oracoes.json"

export const metadata = {
  title: "Santo Anjo",
};

export default function Page() {
  return (
    <RegularMain>
      <OracaoFile file={file["angele-dei"]} />
    </RegularMain>
  );
}
