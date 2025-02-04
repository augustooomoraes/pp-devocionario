import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Sagrada Família – Natal – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Tempo do Natal"
        subtitles={[
          "Sagrada Família: Jesus, Maria e José",
          "Domingo dentro da Oitava de Natal",
          "Festa",
        ]}
      />
    </RegularMain>
  );
}
