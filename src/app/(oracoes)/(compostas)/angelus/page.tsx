import RegularMain from "@/components/regularMain/regular-main";
import { DevocionarioFile } from "@/app/lib/file-rendering";
import file from "@/app/lib/data/oracoes-compostas.json"

export const metadata = {
  title: "Ángelus",
};

export default function Page() {
  return (
    <RegularMain>
      <DevocionarioFile file={file["angelus"]} />
    </RegularMain>
  );
}
