import RegularMain from "@/components/regularMain/regular-main";
import { OracaoFile } from "@/app/lib/file-rendering-simple";
import file from "@/app/lib/data/oracoes.json"

export const metadata = {
  title: "Ave Maria",
};

export default function Page() {
  return (
    <RegularMain>
      <OracaoFile file={file["ave-maria"]} />
    </RegularMain>
  );
}
