import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

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
