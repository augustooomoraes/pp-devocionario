import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Todos os Santos – Próprios – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Próprio dos Santos"
        subtitles={[
          "Todos os Santos",
          "1º de novembro",
          "Solenidade",
        ]}
      />
    </RegularMain>
  );
}
