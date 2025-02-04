import RegularMain from "@/components/common/regular-main";
import WorkInProgress from "@/components/images/work-in-progess";

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
