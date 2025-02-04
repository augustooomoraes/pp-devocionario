import WorkInProgress from "@/components/images/work-in-progess";
import { DevocionarioFile } from "../../lib/file-rendering";
import RegularMain from "@/components/common/regular-main";

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
