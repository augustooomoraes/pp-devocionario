import RegularMain from "@/components/common/regular-main";
import WorkInProgress from "@/components/images/work-in-progess";

export const metadata = {
  title: "Epifania – Natal – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Tempo do Natal"
        subtitles={[
          "Epifania do Senhor",
          "6 de janeiro",
          "Solenidade",
        ]}
      />
    </RegularMain>
  );
}
