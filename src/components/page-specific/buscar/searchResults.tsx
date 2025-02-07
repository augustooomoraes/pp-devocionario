import { fetchSearchResults } from "@/lib/search-results/fetch-search-results";
import { SearchForm } from "@/components/common/searchForm";
import { Suspense } from "react";
import { SearchResultsList } from "./searchResultsList";

export async function SearchResults({
  query,
  pdf,
} : {
  query: string,
  pdf: string,
}) {
  const results = await fetchSearchResults(query);

  return (
    <div className="w-full max-w-prose flex flex-col gap-5">

      <SearchForm />

      <Suspense fallback={<p>Carregando...</p>}>
        <SearchResultsList results={results} pdf={pdf} />
      </Suspense>

    </div>
  );
}
