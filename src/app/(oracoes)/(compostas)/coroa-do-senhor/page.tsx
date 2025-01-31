import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

export const metadata = {
  title: "Coroa do Senhor",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress title="Coroa do Senhor" />
    </RegularMain>
  );
}
