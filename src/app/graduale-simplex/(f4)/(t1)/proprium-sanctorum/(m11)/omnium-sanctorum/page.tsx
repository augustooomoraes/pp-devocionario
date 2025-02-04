import RegularMain from "@/components/common/regular-main";
import WorkInProgress from "@/components/images/work-in-progess";

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
