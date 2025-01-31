import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

export const metadata = {
  title: "Quarta-Feira de Cinzas – Quaresma – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Tempo da Quaresma"
        subtitles={[
          "Quarta-Feira de Cinzas",
          "Aplicável a todas as missas feriais do Tempo da Quaresma",
        ]}
      />
    </RegularMain>
  );
}
