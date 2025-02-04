import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

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
