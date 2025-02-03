import { fetchSearchResults } from "@/app/lib/search-results/fetchSearchResults";
import { Suspense } from "react";

export async function SearchResults({ query }: { query: string }) {
  const results = await fetchSearchResults(query);

  return (
    <div className="w-full max-w-prose">
      <h1 className="text-2xl font-bold text-center mb-5">Resultados da busca:</h1>
      <Suspense fallback={<p>Carregando...</p>}>
        <ul className="list-none gap-2.5 flex flex-col w-full">
          {results.length > 0 ? (
            results.map((item, index) => (
              <div
                key={`download-link-${index + 1}`}
                className="
                  rounded-lg border bg-card text-card-foreground shadow-sm
                  pt-3 sm:pt-2 pb-2 px-4 h-full
                  flex justify-start
                  flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-5
                "
              >
        
                <div className="flex flex-row gap-3 shrink-0">
                  <item.icon />
                  <span className="font-semibold">{item.source}</span>
                </div>
        
                <span>{item.name}</span>
        
              </div>
          )))
          : (
            <li className="text-muted-foreground text-center">Sem resultados.</li>
          )}
        </ul>
      </Suspense>
    </div>
  );
}


