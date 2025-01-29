import WorkInProgress from "@/components/workInProgress/work-in-progess";
import { DevocionarioFile } from "../../lib/file-rendering";
import RegularMain from "@/components/regularMain/regular-main";

export default function Page() {
  return (
    <RegularMain>
      {/* <DevocionarioFile file={file["ordem-terceira-do-carmo"]} /> */}

        <WorkInProgress title="Da Ordem Terceira do Carmo" />
    </RegularMain>
  );
}
