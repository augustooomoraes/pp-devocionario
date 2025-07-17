import RegularMain from "@/components/common/regularMain";
import { DevocionarioFile } from "@/lib/file-rendering";
import file from "@/lib/data/oracoes-compostas.json"

export const metadata = {
  title: "Antífonas Marianas",
};

export default function Page() {
  return (
    <RegularMain>
      <DevocionarioFile file={file["antifonas-marianas"]} />
    </RegularMain>
  );
}
