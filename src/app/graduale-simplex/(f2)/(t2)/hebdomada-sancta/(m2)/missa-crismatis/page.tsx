import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Missa do Crisma – Semana Santa – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Semana Santa"
        subtitles={[
          "Missa do Crisma",
        ]}
      />
    </RegularMain>
  );
}
