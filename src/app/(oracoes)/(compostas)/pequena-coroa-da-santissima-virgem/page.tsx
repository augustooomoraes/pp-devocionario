import RegularMain from "@/components/common/regular-main";
import { DevocionarioFile } from "@/app/lib/file-rendering";
import file from "@/app/lib/data/oracoes-compostas.json"

export const metadata = {
  title: "Pequena Coroa de Nossa Senhora",
};

export default function Page() {
  return (
    <RegularMain>
      <DevocionarioFile file={file["pequena-coroa-da-santissima-virgem"]} />
    </RegularMain>
  );
}
