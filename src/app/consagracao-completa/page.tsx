import { DevocionarioFile } from "../lib/file-rendering";
import file from "./data.json"

export default function Page() {
  return (
    <main className="flex flex-col items-center p-24">
      <DevocionarioFile file={file["consagracao-completa"]} />
    </main>
  );
}
