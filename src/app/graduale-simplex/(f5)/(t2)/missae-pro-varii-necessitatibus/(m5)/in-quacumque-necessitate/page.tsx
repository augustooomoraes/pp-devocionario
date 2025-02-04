import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Missa pro Alguma Necessidade – Necessidades – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Missas por Diversas Necessidades"
        subtitles={[
          "Missa por Alguma Necessidade",
        ]}
      />
    </RegularMain>
  );
}
