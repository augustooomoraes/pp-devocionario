import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Missa da Ceia do Senhor – Semana Santa – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Semana Santa"
        subtitles={[
          "Missa da Ceia do Senhor",
        ]}
      />
    </RegularMain>
  );
}
