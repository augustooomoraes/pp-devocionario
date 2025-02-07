import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Missa pela Conservação da Paz e da Justiça – Necessidades – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Missas por Diversas Necessidades"
        subtitles={[
          "Missa pela Conservação da Paz e da Justiça",
        ]}
      />
    </RegularMain>
  );
}
