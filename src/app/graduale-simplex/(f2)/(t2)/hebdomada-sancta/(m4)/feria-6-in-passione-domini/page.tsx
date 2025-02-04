import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Sexta-Feira da Paixão – Semana Santa – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Semana Santa"
        subtitles={[
          "Sexta-Feira da Paixão do Senhor",
        ]}
      />
    </RegularMain>
  );
}
