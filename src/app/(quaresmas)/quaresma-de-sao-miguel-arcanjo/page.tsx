import RegularMain from "@/components/regularMain/regular-main";
import WorkInProgress from "@/components/workInProgress/work-in-progess";

export const metadata = {
  title: "Quaresma de São Miguel Arcanjo",
};

export default function Page() {
  return (
    <RegularMain>
      <WorkInProgress title="Quaresma de São Miguel Arcanjo" />
    </RegularMain>
  );
}
