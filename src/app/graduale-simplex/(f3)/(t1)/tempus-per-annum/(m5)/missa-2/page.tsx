import RegularMain from "@/components/common/regular-main";
import WorkInProgress from "@/components/images/work-in-progess";

export const metadata = {
  title: "Missa II – Comum – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Tempo Comum"
        subtitles={[
          "Missa II",
        ]}
      />
    </RegularMain>
  );
}
