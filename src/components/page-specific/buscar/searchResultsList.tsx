"use client";
import { BookOpen, FileQuestion, Flame, FlameKindling, Music3 } from "lucide-react";
import { useState } from "react";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  BookOpen,
  Flame,
  FlameKindling,
  Music3,
};

export function SearchResultsList({
  results,
}: {
  results: {
    source: string;
    icon: string | null;
    title: string;
    url: string;
    hasDownloadLinks: boolean;
  }[];
}) {
  const [filterPdf, setFilterPdf] = useState(false);

  const filteredResults = filterPdf
    ? results.filter((item) => item.hasDownloadLinks)
    : results;

  return (
    <>
      <div className="flex flex-col gap-1 mx-2.5">

        <span className="text-sm font-semibold">Filtros:</span>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setFilterPdf((prev) => !prev)}
            className={`
              px-3 py-1 rounded-full
              text-sm
              hover:bg-accent border
              ${filterPdf && "bg-primary hover:bg-primary/90 text-primary-foreground border-primary"}
            `}
          >
            PDF disponível
          </button>
        </div>

      </div>

      <h1 className="text-2xl font-bold text-center">Resultados da busca:</h1>

      <ul className="list-none gap-2.5 flex flex-col w-full">
        {
          filteredResults.length > 0
            ? (
              filteredResults.map((item, index) => {
                const IconComponent = item.icon ? iconMap[item.icon] : FileQuestion;
                return (
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
                      <IconComponent />
                      <span className="font-semibold">{item.source}</span>
                    </div>

                    <span><a
                      href={item.url}
                      className="hover:text-linkHover active:text-linkActive hover:underline active:underline"
                    >{item.title}</a></span>
                  </div>
                )
              })
            )
            : (
              <li className="text-muted-foreground text-center">Sem resultados.</li>
            )
        }
      </ul>
    </>
  );
}
