import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Missa de Profissão Religiosa – Rituais – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Missas Rituais"
        subtitles={[
          "Missa de Profissão Religiosa",
        ]}
      />
    </RegularMain>
  );
}
