import RegularMain from "@/components/common/regular-main";
import WorkInProgress from "@/components/images/work-in-progess";

export const metadata = {
  title: "São Pedro e São Paulo – Próprios – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Próprio dos Santos"
        subtitles={[
          "São Pedro e São Paulo, Apóstolos",
          "29 de junho",
          "Solenidade",
        ]}
      />
    </RegularMain>
  );
}
