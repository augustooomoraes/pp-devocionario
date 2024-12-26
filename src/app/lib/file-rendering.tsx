"use client"
// TODO: check if this would ruin pre-fetching/pre-rendering, considering that data.json would be fetched from mongodb or whatever

import clsx from "clsx"
import React from "react"
import { useRouter } from "next/navigation";
import FootnoteTooltip from "@/components/tooltip/footnote-tooltip";
import { Footnotes, Index, LinkMap, ParallelPreces, SectionMap, SessionContents, Sessions, SessionTypes } from "./types";
import { replaceAllStyleTags, replaceBreakAndAsteriskAndFootnoteTags, replaceLinkTags } from "./tags-replacing";


export function DevocionarioFile({ file } : { file: any }) {

  const router = useRouter();

  const handleNavigation = (id: number, sectionMap: SectionMap) => {
    const sectionName = sectionMap.filter(sectionIndex => sectionIndex.id === id)[0].title || "not-found";
    if (sectionName) {
      router.push(`#${sectionName}`);
    }
  };

  function renderIndex(index: Index, sectionMap: SectionMap) {

    const handleClick = (target: string | undefined) => {
      const router = useRouter();
    
      return (e: React.MouseEvent) => {
        e.stopPropagation();
        if (target) {
          router.push(target);
        }
      };
    };

    return (
      <ol className="list-none space-y-1">

        {index.map((item, index) => {
          return <li key={index} className="grid grid-cols-[28px_1fr]">
            <span className="pl-1.5">{item["no-list-number"] ? "" : `${index + 1}.`}</span>
            <span
              className="
                hover:bg-black/5 active:bg-black/10 transition-colors
                px-1.5 rounded-md
                cursor-pointer
              "
              onClick={handleClick("#" + sectionMap.filter(sectionIndex => sectionIndex.id === item.id)[0]?.title || "not-found")}
            >
              {replaceAllStyleTags(item.title, file.footnotes, file["link-map"])}
            </span>
            {item.index && (
              <div className="grid grid-cols-[28px_1fr] mt-1 col-span-2">
                <span />
                {renderIndex(item.index, sectionMap)}
              </div>
            )}
          </li>
        })}
      </ol>
    )
  }

  function renderSessions(sessions: Sessions, sectionMap: SectionMap, linkMap: LinkMap) {
    return (
      <div className="mt-5 first">

        {sessions.map(session => {
          return <div id={sectionMap.filter(sectionIndex => sectionIndex.id === session.id)[0].title || "not-found"}>
            <h2
              onClick={ () => handleNavigation(session.id, sectionMap) }
              className="
                text-2xl text-center font-medium
                mb-3 mt-5
                cursor-pointer hover:underline
              "
            >
              {replaceBreakAndAsteriskAndFootnoteTags([session.title], file.footnotes, file["link-map"])}
            </h2>
            {renderSessionContents(session.type, session.contents, sectionMap, linkMap)}
          </div>
        })}

      </div>
    )
  }

  function renderSessionContents(sessionType: SessionTypes, contents: SessionContents, sectionMap: SectionMap, linkMap: LinkMap) {
    switch(sessionType) {
      case "regular-text":
        return (
          contents.map((content, index) => {
            switch(content.type) {
              case "header-1":
                return <h3
                  className={clsx(
                    content["id"] && "cursor-pointer hover:underline",
                    content["link-id"] && "",
                    content["subsession-break"] && "mb-5",
                    content["no-margin-bottom"] === true ? "" : "mb-1",
                    "text-xl font-medium mt-3",
                  )}
                  id={
                    content["id"]
                      ? sectionMap.filter(sectionIndex => sectionIndex.id === content.id)[0].title || "not-found"
                      : content["link-id"]
                        ? linkMap.filter(link => link.id === content["link-id"])[0].url.startsWith("#")
                          ? linkMap.filter(link => link.id === content["link-id"])[0].url.slice(1)
                          : "not-found"
                        : undefined
                  }
                  onClick={content["id"] ? () => handleNavigation(content.id || 0, sectionMap) : undefined}
                >
                  {replaceAllStyleTags(content.content as string, file.footnotes, file["link-map"])}
                </h3>

              case "header-2":
                return <h4
                  className={clsx(
                    content["id"] && "cursor-pointer hover:underline",
                    content["subsession-break"] && "mb-5",
                    "text-lg font-semibold mt-2 mb-1",
                  )}
                  id={
                    content["id"]
                      ? sectionMap.filter(sectionIndex => sectionIndex.id === content.id)[0].title || "not-found"
                      : content["link-id"]
                        ? linkMap.filter(link => link.id === content["link-id"])[0].url.startsWith("#")
                          ? linkMap.filter(link => link.id === content["link-id"])[0].url.slice(1)
                          : "not-found"
                        : undefined
                  }
                  onClick={content["id"] ? () => handleNavigation(content.id || 0, sectionMap) : undefined}
                >
                  {replaceAllStyleTags(content.content as string, file.footnotes, file["link-map"])}
                </h4>

              case "paragraph":
                return <p className={clsx(
                  content["end-break"] && "mb-1.5",
                  content["subsession-break"] && "mb-5",
                  "mt-0.5"
                )}>
                  {replaceAllStyleTags(content.content as string, file.footnotes, file["link-map"])}
                </p>

              case "indication":
                return <div className={clsx(
                  content["subsession-break"] && "mb-5",
                  content["increased-vertical-spacing"] === true ? "my-5" : "my-1",
                  "ml-[28px]",
                )}>
                  <span className="text-base italic font-light">{replaceAllStyleTags(content.content as string, file.footnotes, file["link-map"])}</span>
                </div>

              case "index": return renderIndex(content.contents as Index, sectionMap)

                case "parallel-preces":
                return <div className={clsx(
                  content["subsession-break"] && "mb-5",
                )}>{
                  renderParallelPreces(content.contents as unknown as ParallelPreces)
                }</div>

              case "media-relative":
                return <span className={clsx(
                  content["subsession-break"] && "mb-5",
                  "block",
                  "bg-red-800/20 py-1.5 italic"
                )}>
                  [media-relative]
                </span>

              default:
                return
            }
          })
        )
      case "parallel-preces":
        return renderParallelPreces(contents as unknown as ParallelPreces)
      case "gregorian-chant":
        return <></>
      default:
        return
    }
  }

  function renderParallelPreces(contents: ParallelPreces) {
    return (
      contents.map(content => {
        switch(content.type) {
          case "v": // TODO: don't render "℣." when the element from before is also type="v"
            return <div className={clsx(
              content["end-break"] && "mb-1.5",
              content["larger-break"] && "mb-2",
              content["subsession-break"] && "mb-5",
              content["horizontal-line"] === "full" && "after:content-[''] after:block after:h-[1px] after:bg-gray-400 after:mx-5 after:mb-2.5 after:col-span-2",
              "grid grid-cols-2 gap-3",
            )}>
              <div className={clsx(
                "grid grid-cols-[24px_1fr]",
                content["horizontal-line"] === "two-halves" && "border-b border-b-gray-400 pb-2.5 mb-1",
              )}>
                <span className="font-bold text-red-600">℣.</span>
                <span>{replaceAllStyleTags(content.content["pt-BR"], file.footnotes, file["link-map"])}</span>
              </div>
              <div className={clsx(
                "grid grid-cols-[24px_1fr]",
                content["horizontal-line"] === "two-halves" && "border-b border-b-gray-400 pb-2.5 mb-1",
              )}>
                <span className="font-bold text-red-600">℣.</span>
                <span>{replaceAllStyleTags(content.content["latin"], file.footnotes, file["link-map"])}</span>
              </div>
            </div>

          case "r":
            return <div className={clsx(
              content["end-break"] && "mb-1.5",
              content["larger-break"] && "mb-2",
              content["subsession-break"] && "mb-5",
              content["horizontal-line"] === "full" && "after:content-[''] after:block after:h-[1px] after:bg-gray-400 after:mx-5 after:mb-2.5 after:col-span-2",
              "grid grid-cols-2 gap-3",
            )}>
              <div className={clsx(
                "grid grid-cols-[24px_1fr]",
                content["horizontal-line"] === "two-halves" && "border-b border-b-gray-400 pb-2.5 mb-1",
              )}>
                <span className="font-bold text-red-600">℟.</span>
                <span>{replaceAllStyleTags(content.content["pt-BR"], file.footnotes, file["link-map"])}</span>
              </div>
              <div className={clsx(
                "grid grid-cols-[24px_1fr]",
                content["horizontal-line"] === "two-halves" && "border-b border-b-gray-400 pb-2.5 mb-1",
              )}>
                <span className="font-bold text-red-600">℟.</span>
                <span>{replaceAllStyleTags(content.content["latin"], file.footnotes, file["link-map"])}</span>
              </div>
            </div>

          default:
            return <div className={clsx(
              content["end-break"] && "mb-1.5",
              content["larger-break"] && "mb-2",
              content["subsession-break"] && "mb-5",
              content["horizontal-line"] === "full" && "after:content-[''] after:block after:h-[1px] after:bg-gray-400 after:mx-5 after:mb-2.5 after:col-span-2",
              "grid grid-cols-2 gap-3",
              content.type === "header-2" && "text-lg font-medium",
              "",
              content.type === "paragraph" && "mb-1.5 mt-1.5",
              content.type === "indication" && "my-1.5 leading-tight italic text-base font-light",
              content.type === "annotation" && "my-1 leading-tight italic text-ann font-light"
            )}
            // style={content.type === "header-2" ? { fontVariant: "small-caps"} : {}} // TODO: check if there's any next/font with true small caps
            >
              <div className={clsx(
                content.type === "header-2" && "mx-5",
                content.type === "indication" && "mx-5",
                content["horizontal-line"] === "two-halves" && "border-b border-b-gray-400 pb-2.5 mb-1",
              )}>{replaceAllStyleTags(content.content["pt-BR"], file.footnotes, file["link-map"])}</div>
              <div className={clsx(
                content.type === "header-2" && "mx-5",
                content.type === "indication" && "mx-5",
                content["horizontal-line"] === "two-halves" && "border-b border-b-gray-400 pb-2.5 mb-1",
              )}>{replaceAllStyleTags(content.content["latin"], file.footnotes, file["link-map"])}</div>
            </div>
        }
      })
    )
  }

  function renderFootnotes(contents: Footnotes, linkMap: LinkMap) {

    const handleClick = (target: string | undefined) => {
      const router = useRouter();
    
      return (e: React.MouseEvent) => {
        e.stopPropagation();
        if (target) {
          router.push(target);
        }
      };
    };

    return (
      <div id="notas" className="border-t border-t-gray-400 mt-14 pt-8">
        <h2
          className="
            mb-3
            text-lg font-medium
            cursor-pointer hover:underline
          "
          onClick={ () => router.push(`#notas`) }
        >
          Notas
        </h2>
        <ul className="list-none space-y-1">
          {contents.map( content => {
            return (
              <li
                key={content.id}
                id={`rodape-conteudo-${content.id}`}
                className="grid grid-cols-[34px_1fr]"
              >
                <span>
                  <span
                    className="
                      hover:bg-black/5 active:bg-black/10 transition-colors
                      w-full px-1.5 rounded-md
                      cursor-pointer
                    "
                    onClick={handleClick("#rodape-origem-" + content.id)}
                  >
                    {content.id}.
                  </span>
                </span>
                <span>
                  {replaceLinkTags([content.content], linkMap)}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  return (
    <div className="mb-2 max-w-prose text-justify hyphens-auto">
      <h1 className="text-3xl font-medium mb-5">{file.title}</h1>
      {renderIndex(file.index, file["section-map"])}
      {renderSessions(file.sessions, file["section-map"], file["link-map"])}
      {renderFootnotes(file.footnotes, file["link-map"])}
    </div>
  )
}
