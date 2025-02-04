import { SearchResults } from "@/components/page-specific/buscar/searchResults";
import RegularMain from "@/components/common/regular-main";

export default function SearchPage({ searchParams }: { searchParams: { entrada?: string } }) {
  return (
    <RegularMain>

      <SearchResults query={searchParams.entrada || ""} />

    </RegularMain>
  );
}
