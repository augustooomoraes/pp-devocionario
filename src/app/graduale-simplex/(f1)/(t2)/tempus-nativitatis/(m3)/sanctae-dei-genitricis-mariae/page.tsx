import RegularMain from "@/components/common/regular-main";
import WorkInProgress from "@/components/images/work-in-progess";

export const metadata = {
  title: "Mãe de Deus – Natal – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Tempo do Natal"
        subtitles={[
          "Santa Maria, Mãe de Deus",
          "1º de janeiro",
          "Solenidade",
        ]}
      />
    </RegularMain>
  );
}
