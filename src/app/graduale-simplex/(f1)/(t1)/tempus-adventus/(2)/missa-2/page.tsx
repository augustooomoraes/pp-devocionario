import RegularMain from "@/components/common/regular-main";
import WorkInProgress from "@/components/images/work-in-progess";

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
