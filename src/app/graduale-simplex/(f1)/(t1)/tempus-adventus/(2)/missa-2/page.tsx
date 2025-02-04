import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Missa II – Advento – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Tempo do Advento"
        subtitles={[
          "Missa 2",
        ]}
      />
    </RegularMain>
  );
}
