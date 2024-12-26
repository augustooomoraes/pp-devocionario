import { DevocionarioFile } from "../lib/file-rendering";
import file from "./data.json"

export default function Page() {
  return (
    <main className="flex flex-col items-center pt-24 px-2">
      <DevocionarioFile file={file["consagracao-completa"]} />
    </main>
  );
}
