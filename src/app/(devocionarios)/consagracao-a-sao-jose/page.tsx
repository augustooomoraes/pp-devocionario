import WorkInProgress from "@/components/workInProgress/work-in-progess";
import { DevocionarioFile } from "../../lib/file-rendering";
import RegularMain from "@/components/regularMain/regular-main";

export const metadata = {
  title: "Da Consagração a São José",
};

export default function Page() {
  return (
    <RegularMain>
      {/* <DevocionarioFile file={file["consagracao-a-sao-jose"]} /> */}

        <WorkInProgress title="Da Consagração a São José" />
    </RegularMain>
  );
}
