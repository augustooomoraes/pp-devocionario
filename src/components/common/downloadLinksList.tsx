import { DownloadLinks } from "@/lib/types/devocionarios"
import { BookOpenText, Download, SquareArrowUpRight, TabletSmartphone } from "lucide-react"

export default function DownloadLinksList({ downloadLinks } : { downloadLinks: DownloadLinks }) {
  return (
      <ul className="list-none gap-4 flex flex-col">
        {downloadLinks.map((downloadLink, index) => {
          return (
            <div
              key={`download-link-${index + 1}`}
              className="
                rounded-lg border bg-card text-card-foreground shadow-sm
                flex flex-row justify-between items-center p-2 pl-4 h-full
              "
            >

              <div className="flex flex-row gap-3">
                {
                  downloadLink.type === "pdf-booklet"
                    ? <>
                      <BookOpenText />
                      <span>PDF: livreto</span>
                    </>
                    : <>
                      <TabletSmartphone />
                      <span>PDF: digital</span>
                    </>
                }
              </div>

              <span className="flex flex-row gap-2">
                <LinkButton type="direct-link" url={downloadLink["direct-link"]} />
                <LinkButton type="url" url={downloadLink.url} />
              </span>

            </div>
          )
        })}
      </ul>
  )
}

function LinkButton({
  type,
  url
} : {
  type: "url" | "direct-link",
  url: string
}) {

  const title = type === "url" ? "Abrir no Google Drive" : "Fazer download"
  const target = type === "url" ? "_blank" : undefined

  return (
    <a
      href={url}
      target={target}
      className="
        rounded-lg border bg-primary/10 text-card-foreground shadow-sm
        hover:bg-background transition-colors p-1.5
      "
      title={title}
    >
      {
        type === "url"
          ? <SquareArrowUpRight />
          : <Download />
      }
    </a>
  )
}
