import WorkInProgress from "@/components/images/work-in-progess";
import { DevocionarioFile } from "../../lib/file-rendering";
import RegularMain from "@/components/common/regular-main";

export const metadata = {
  title: "Da Consagração a São Miguel Arcanjo",
};

export default function Page() {
  return (
    <RegularMain>
      {/* <DevocionarioFile file={file["consagracao-a-sao-miguel"]} /> */}

        <WorkInProgress title="Da Consagração a São Miguel Arcanjo" />
    </RegularMain>
  );
}
