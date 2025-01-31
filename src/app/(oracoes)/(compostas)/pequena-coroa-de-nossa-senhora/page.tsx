import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

export const metadata = {
  title: "Pequena Coroa de Nossa Senhora",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress title="Pequena Coroa de Nossa Senhora" />
    </RegularMain>
  );
}
