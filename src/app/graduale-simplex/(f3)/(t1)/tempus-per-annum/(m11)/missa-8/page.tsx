import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

export const metadata = {
  title: "Missa VIII – Comum – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Tempo Comum"
        subtitles={[
          "Missa VIII",
        ]}
      />
    </RegularMain>
  );
}
