import { SearchResults } from "@/components/buscar/searchResults";
import RegularMain from "@/components/regularMain/regular-main";

export default function SearchPage({ searchParams }: { searchParams: { entrada?: string } }) {
  return (
    <RegularMain>

      <SearchResults query={searchParams.entrada || ""} />

    </RegularMain>
  );
}
