import { fetchSearchResults } from "@/lib/search-results/fetch-search-results";
import { SearchForm } from "@/components/common/searchForm";
import { Suspense } from "react";
import { SearchResultsList } from "./searchResultsList";

export async function SearchResults({ query }: { query: string }) {
  const results = await fetchSearchResults(query);

  return (
    <div className="w-prose flex flex-col gap-5">

      <SearchForm />

      <Suspense fallback={<p>Carregando...</p>}>
        <SearchResultsList results={results} />
      </Suspense>

    </div>
  );
}
