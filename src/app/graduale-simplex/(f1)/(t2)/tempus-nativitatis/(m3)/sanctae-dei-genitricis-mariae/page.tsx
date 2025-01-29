import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

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
