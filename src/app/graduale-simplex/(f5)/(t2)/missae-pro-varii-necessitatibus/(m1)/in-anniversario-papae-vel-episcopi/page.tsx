import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Aniversário do Papa ou Bispo – Necessidades – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Missas por Diversas Necessidades"
        subtitles={[
          "Missa pelo Aniversário do Papa ou do Bispo",
        ]}
      />
    </RegularMain>
  );
}
