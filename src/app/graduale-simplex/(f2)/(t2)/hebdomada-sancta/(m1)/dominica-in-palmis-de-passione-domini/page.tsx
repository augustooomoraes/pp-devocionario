import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Domingo de Ramos – Semana Santa – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Semana Santa"
        subtitles={[
          "Domingo de Ramos e da Paixão do Senhor",
        ]}
      />
    </RegularMain>
  );
}
