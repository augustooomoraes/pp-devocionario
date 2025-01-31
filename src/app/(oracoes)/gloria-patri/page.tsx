import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

export const metadata = {
  title: "Glória ao Pai",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress title="Glória ao Pai" />
    </RegularMain>
  );
}
