import { DevocionarioFile } from "../../lib/file-rendering";
import file from "./data.json"

export default function Page() {
  return (
    <main className="flex flex-col items-center pt-24 px-2">
      <DevocionarioFile file={file["consagracao-a-virgem-santissima"]} />
      {/* TODO: add badges, linked to the third section, below each prayer title, relative to the preparation steps they belong and which order, in that step, they occupy */}
    </main>
  );
}
