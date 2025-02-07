import { SearchResults } from "@/components/page-specific/buscar/searchResults";
import RegularMain from "@/components/common/regularMain";

export default function Page({ searchParams }: { searchParams: { entrada?: string } }) {
  return (
    <RegularMain>
      <SearchResults query={searchParams.entrada || ""} />
    </RegularMain>
  );
}
