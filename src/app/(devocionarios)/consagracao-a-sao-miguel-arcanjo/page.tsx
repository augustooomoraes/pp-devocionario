import WorkInProgress from "@/components/workInProgress/work-in-progess";
import { DevocionarioFile } from "../../lib/file-rendering";

export default function Page() {
  return (
    <main className="flex flex-col items-center pt-24 px-2">
      {/* <DevocionarioFile file={file["consagracao-a-sao-miguel"]} /> */}

        <WorkInProgress title="Da Consagração a São Miguel Arcanjo" />
    </main>
  );
}
