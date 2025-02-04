import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Missa pelas Vocações – Necessidades – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Missas por Diversas Necessidades"
        subtitles={[
          "Missa pelas Vocações",
        ]}
      />
    </RegularMain>
  );
}
