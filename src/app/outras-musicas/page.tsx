import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Outras músicas",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Outras músicas"
        subtitles={[
          "Tudo...",
        ]}
      />
    </RegularMain>
  );
}
