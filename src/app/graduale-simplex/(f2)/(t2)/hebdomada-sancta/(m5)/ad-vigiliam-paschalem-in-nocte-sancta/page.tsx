import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Vigília Pascal – Semana Santa – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Semana Santa"
        subtitles={[
          "Vigília Pascal na Noite Santa",
        ]}
      />
    </RegularMain>
  );
}
