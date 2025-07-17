import RegularMain from "@/components/common/regularMain";
import { DevocionarioFile } from "@/lib/file-rendering";
import file from "@/lib/data/oracoes-compostas.json"

export const metadata = {
  title: "Mistérios do Santo Rosário",
};

export default function Page() {
  return (
    <RegularMain>
      <DevocionarioFile file={file["santo-rosario-misterios"]} />
    </RegularMain>
  );
}
