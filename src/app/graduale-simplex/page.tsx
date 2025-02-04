import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Graduale Simplex",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Gradual Simples"
        subtitles={[
          "Tudo...",
        ]}
      />
    </RegularMain>
  );
}
