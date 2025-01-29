import WorkInProgress from "@/components/workInProgress/work-in-progess";
import { DevocionarioFile } from "../../lib/file-rendering";
import RegularMain from "@/components/regularMain/regular-main";

export default function Page() {
  return (
    <RegularMain>
      {/* <DevocionarioFile file={file["consagracao-a-sao-miguel"]} /> */}

        <WorkInProgress title="Da Consagração a São Miguel Arcanjo" />
    </RegularMain>
  );
}
