import { DownloadLink } from "@/lib/types/devocionarios"
import { BookOpenText, Download, FileText, SquareArrowUpRight, TabletSmartphone } from "lucide-react"

export default function DownloadLinksList({ downloadLinks } : { downloadLinks: DownloadLink[] }) {
  return (
      <ul className="list-none gap-4 flex flex-col">
        {downloadLinks.map( (downloadLink, index) => LinksRow(downloadLink, "DownloadLinksList", index) )}
      </ul>
  )
}

export function LinksRow(
  downloadLink: DownloadLink,
  component: "DownloadLinksList" | "SearchResultsList",
  index?: number,
) {
  if (!index) index = 0;

  return (
    <div
    key={component === "SearchResultsList" ? undefined :`download-link-${index + 1}`}
    className={
      component === "SearchResultsList"
      ? "flex flex-row justify-between items-center"
      : `
        rounded-lg border bg-card text-card-foreground shadow-sm
        flex flex-row justify-between items-center p-2 pl-4 h-full
      `
    }>
      <div className={`flex flex-row items-center pr-2 text-left ${component === "SearchResultsList" ? "gap-2" : "gap-3"}`}>
        {
          downloadLink.type === "pdf-booklet"
            ? <>
              <BookOpenText className={`${component === "SearchResultsList" && "w-4"}`} />
              <span className={component === "SearchResultsList" ? "text-sm" : ""}>{
                downloadLink.title ? downloadLink.title : "PDF: livreto"
              }</span>
            </>
            : downloadLink.type === "pdf-digital"
              ? <>
                <TabletSmartphone className={`${component === "SearchResultsList" && "w-4"}`} />
                <span className={component === "SearchResultsList" ? "text-sm" : ""}>{downloadLink.title ? downloadLink.title : "PDF: digital"}</span>
              </>
              : <>
                <FileText className={`${component === "SearchResultsList" && "w-4"}`} />
                <span className={component === "SearchResultsList" ? "text-sm" : ""}>{downloadLink.title ? downloadLink.title : "PDF: folhas"}</span>
              </>
        }
      </div>

      <span className={`flex flex-row ${component === "SearchResultsList" ? "gap-1" : "gap-2"}`}>
        {downloadLink["direct-link"] && <LinkButton component={component} type="direct-link" url={downloadLink["direct-link"]} />}
        {downloadLink.url            && <LinkButton component={component} type="url"         url={downloadLink.url} />}
      </span>
    </div>
  )
}

export function LinkButton({
  type,
  url,
  component,
} : {
  type: "url" | "direct-link",
  url: string,
  component: "DownloadLinksList" | "SearchResultsList",
}) {

  const title = type === "url" ? "Abrir no Google Drive" : "Fazer download"
  const target = type === "url" ? "_blank" : undefined

  return (
    <a
      href={url}
      target={target}
      className={`
        rounded-lg border bg-primary/10 text-card-foreground shadow-sm
        hover:bg-background transition-colors
        ${component === "SearchResultsList" ? "p-1" : "p-1.5"}
      `}
      title={title}
    >
      {
        type === "url"
          ? <SquareArrowUpRight className={`${component === "SearchResultsList" && "w-4 h-4"}`} />
          : <Download className={`${component === "SearchResultsList" && "w-4 h-4"}`} />
      }
    </a>
  )
}
