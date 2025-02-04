import RegularMain from "@/components/common/regular-main";
import WorkInProgress from "@/components/images/work-in-progess";

export const metadata = {
  title: "Batismo – Natal – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Tempo do Natal"
        subtitles={[
          "Batismo do Senhor",
          "Domingo após a Epifania do Senhor",
          "Festa",
        ]}
      />
    </RegularMain>
  );
}
