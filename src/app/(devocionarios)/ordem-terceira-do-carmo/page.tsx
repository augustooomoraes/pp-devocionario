import WorkInProgress from "@/components/images/workInProgess";
import { DevocionarioFile } from "../../../lib/file-rendering";
import RegularMain from "@/components/common/regularMain";

export const metadata = {
  title: "Da Ordem Terceira do Carmo",
};

export default function Page() {
  return (
    <RegularMain>
      {/* <DevocionarioFile file={file["ordem-terceira-do-carmo"]} /> */}

        <WorkInProgress title="Da Ordem Terceira do Carmo" />
    </RegularMain>
  );
}
