import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

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
