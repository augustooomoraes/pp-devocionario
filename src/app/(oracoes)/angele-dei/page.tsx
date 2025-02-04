import RegularMain from "@/components/common/regularMain";
import { OracaoFile } from "@/lib/file-rendering-simple";
import file from "@/lib/data/oracoes.json"

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
