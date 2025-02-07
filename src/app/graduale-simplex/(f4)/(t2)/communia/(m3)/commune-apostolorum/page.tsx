import RegularMain from "@/components/common/regularMain";
import WorkInProgress from "@/components/images/workInProgess";

export const metadata = {
  title: "Apóstolos – Comuns – Graduale",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress
        title="Comuns"
        subtitles={[
          "Comum dos Apóstolos",
        ]}
      />
    </RegularMain>
  );
}
