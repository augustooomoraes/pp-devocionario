import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

export const metadata = {
  title: "Novena a Santa Teresinha",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress title="Novena a Santa Teresinha" />
    </RegularMain>
  );
}
