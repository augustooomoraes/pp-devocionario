import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

export const metadata = {
  title: "Santo Rosário",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress title="Santo Rosário" />
    </RegularMain>
  );
}
