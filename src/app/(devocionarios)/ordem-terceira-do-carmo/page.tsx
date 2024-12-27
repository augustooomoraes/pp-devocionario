import WorkInProgress from "@/components/workInProgress/work-in-progess";
import { DevocionarioFile } from "../../lib/file-rendering";

export default function Page() {
  return (
    <main className="flex flex-col items-center pt-24 px-2">
      {/* <DevocionarioFile file={file["ordem-terceira-do-carmo"]} /> */}

        <WorkInProgress title="Da Ordem Terceira do Carmo" />
    </main>
  );
}
