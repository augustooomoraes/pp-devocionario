import RegularMain from "@/components/common/regular-main";
import WorkInProgress from "@/components/images/work-in-progess";

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
