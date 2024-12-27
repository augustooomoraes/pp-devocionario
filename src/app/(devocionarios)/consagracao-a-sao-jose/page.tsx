import WorkInProgress from "@/components/workInProgress/work-in-progess";
import { DevocionarioFile } from "../../lib/file-rendering";

export default function Page() {
  return (
    <main className="flex flex-col items-center pt-24 px-2">
      {/* <DevocionarioFile file={file["consagracao-a-sao-jose"]} /> */}

        <WorkInProgress title="Da Consagração a São José" />
    </main>
  );
}
