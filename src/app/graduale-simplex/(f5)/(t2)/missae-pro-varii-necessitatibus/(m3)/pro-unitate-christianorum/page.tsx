import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Missa pela Unidade dos Cristãos – Necessidades – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Missas por Diversas Necessidades"
        subtitles={[
          "Missa pela Unidade dos Cristãos",
        ]}
      />
    </RegularMain>
  );
}
