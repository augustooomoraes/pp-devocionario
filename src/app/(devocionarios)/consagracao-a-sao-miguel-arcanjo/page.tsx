import WorkInProgress from "@/components/images/workInProgess";
import { DevocionarioFile } from "@/lib/file-rendering";
import RegularMain from "@/components/common/regularMain";

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
