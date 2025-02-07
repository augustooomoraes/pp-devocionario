import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Missa pelos Esposos – Rituais – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Missas Rituais"
        subtitles={[
          "Missa pelos Esposos",
        ]}
      />
    </RegularMain>
  );
}
