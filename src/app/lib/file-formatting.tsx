"use client"
// TODO: check if this would ruin pre-fetching/pre-rendering, considering that data.json would be fetched from mongodb or whatever

import clsx from "clsx"
import React from "react"
import { useRouter } from "next/navigation";

type DevocionarioFile = {
  title: string,
  index: Index,
  sessions: Sessions,
  footnotes: Footnotes,
}

type Index = {
  id: number,
  title: string,
  index?: Index
  "no-list-number"?: boolean,
}[]

type Sessions = {
  id: number,
  title: string,
  type: SessionTypes,
  contents: SessionContents,
}[]

type SessionContents = {
  id?: number,
  type: SessionContentTypes | ParallelPrecesTypes,
  content?: string | MediaRelativeContent,
  contents?: Index | ParallelPreces,
  "end-break": true,
  "subsession-break"?: boolean, // Isso aqui não está no README.
  "increased-vertical-spacing"?: boolean, // Isso aqui não está no README.
  "no-margin-bottom"?: boolean, // Isso aqui não está no README.
}[]

type ParallelPreces = {
  type: ParallelPrecesTypes,
  content: ParallelPrecesContent,
  "end-break"?: boolean,
  "larger-break"?: boolean,
  "subsession-break"?: boolean, // Isso aqui não está no README.
  "horizontal-line"?: HorizontalLineTypes,
}[]

type ParallelPrecesContent = {
  latin: string,
  "pt-BR": string,
}

type MediaRelativeContent = {
  "print-only": string,
  "screen-only": string,
}

type HorizontalLineTypes = (
  "full" |
  "two-halves"
)

type SessionTypes = (
  "regular-text" |
  "gregorian-chant" |
  "parallel-preces"
)

type SessionContentTypes = (
  "header-1" |
  "header-2" |
  "paragraph" |
  "parallel-preces" | // Vide ~ l. 2554 (O Iesu, vivens in Maria) e outras depois
  "media-relative" |
  "indication" |
  "index"
)

type ParallelPrecesTypes = (
  "header-2" |
  "paragraph" |
  "v" |
  "r" |
  "indication" | // Vide ~ l. 3066 (próximo de Gloria tibi sit, hæresum et dǽmonum intereptrix) e outras depois
  "annotation"
)

type Footnotes = {
  id: number,
  content: string,
}[]

export function DevocionarioFile({ file } : { file: any }) {

  const router = useRouter();

  const handleNavigation = (id: string) => {
    router.push(`#${id}`);
  };

  // TODO: use human-like identifiers

  function replaceAllStyleTags(text: string) {
    return replaceBreakAndAsterisk(text
      .split(/(<paragraph>.*?<\/paragraph>|<i>.*?<\/i>|<b>.*?<\/b>|<u>.*?<\/u>)/g)
      .map((part, index) => {
        if (part.startsWith("<paragraph>")) {
          return (
            <span key={index} className="font-bold text-red-600">
              {"§ " + part.replace(/<\/?paragraph>/g, "") + ". "}
            </span>
          );
        }
        if (part.startsWith("<i>")) {
          return (
            <span key={index} className="italic">
              {part.replace(/<\/?i>/g, "")}
            </span>
          );
        }
        if (part.startsWith("<b>")) {
          return (
            <span key={index} className="font-semibold">
              {part.replace(/<\/?b>/g, "")}
            </span>
          );
        }
        if (part.startsWith("<u>")) {
          return (
            <span key={index} className="underline">
              {part.replace(/<\/?u>/g, "")}
            </span>
          );
        }
        return part; // Return plain text as-is
      }))
  }

  function replaceBreakAndAsterisk(parts: (string | React.JSX.Element)[]) {
    return parts.flatMap((part, index) => {
      if (typeof part === "string") {
        return part.split("<br>").flatMap((subPart, subIndex) => {
          const elements: (string | React.ReactNode)[] = [];
          if (subIndex > 0) elements.push(<br key={`${index}-${subIndex}-br`} />);
          
          const replaced = subPart.split("<*>").flatMap((segment, i) => 
            i > 0 ? [<span
              key={`${index}-${subIndex}-span-${i}`}
              className="font-bold text-red-600"
            >*</span>, segment] : [segment]
          );
          
          return elements.concat(replaced);
        });
      }
      return part;
    });
  }

  function renderIndex(index: Index) {
    return (
      <ol className="list-none space-y-1">

        {index.map((item, index) => {
          return <li key={index} className="grid grid-cols-[28px_1fr]">
            <span className="pl-1.5">{item["no-list-number"] ? "" : `${index + 1}.`}</span>
            <a
              href={`#${item.id}`}
              className="
                hover:bg-black/5 active:bg-black/10 transition-colors
                px-1.5 rounded-md
              "
            >
              {replaceAllStyleTags(item.title)}
            </a>
            {item.index && (
              <div className="grid grid-cols-[28px_1fr] mt-1 col-span-2">
                <span />
                {renderIndex(item.index)}
              </div>
            )}
          </li>
        })}
      </ol>
    )
  }

  function renderSessions(sessions: Sessions) {
    return (
      <div className="mt-5 first">

        {sessions.map(session => {
          return <div id={`${session.id}`}>
            <h2
              onClick={ () => handleNavigation(`${session.id}`) }
              className="
                text-2xl text-center font-medium
                mb-3 mt-5
                cursor-pointer hover:underline
              "
            >
              {session.title}
            </h2>
            {renderSessionContents(session.type, session.contents)}
          </div>
        })}

      </div>
    )
  }

  function renderSessionContents(sessionType: SessionTypes, contents: SessionContents) {
    switch(sessionType) {
      case "regular-text":
        return (
          contents.map((content, index) => {
            switch(content.type) {
              case "header-1":
                return <h3
                  className={clsx(
                    content["id"] && "cursor-pointer hover:underline",
                    content["subsession-break"] && "mb-5",
                    content["no-margin-bottom"] === true ? "" : "mb-1",
                    "text-xl font-medium mt-3",
                  )}
                  id={content["id"] ? `${content.id}` : undefined}
                  onClick={content["id"] ? () => handleNavigation(`${content.id}`) : undefined}
                >
                  {replaceAllStyleTags(content.content as string)}
                </h3>

              case "header-2":
                return <h4
                  className={clsx(
                    content["id"] && "cursor-pointer hover:underline",
                    content["subsession-break"] && "mb-5",
                    "text-lg font-semibold mt-2 mb-1",
                  )}
                  id={content["id"] ? `${content.id}` : undefined}
                  onClick={content["id"] ? () => handleNavigation(`${content.id}`) : undefined}
                >
                  {replaceAllStyleTags(content.content as string)}
                </h4>

              case "paragraph":
                return <p className={clsx(
                  content["end-break"] && "mb-1.5",
                  content["subsession-break"] && "mb-5",
                  "mt-0.5"
                )}>
                  {replaceAllStyleTags(content.content as string)}
                </p>

              case "indication":
                return <div className={clsx(
                  content["subsession-break"] && "mb-5",
                  content["increased-vertical-spacing"] === true ? "my-5" : "my-1",
                  "ml-[28px]",
                )}>
                  <span className="text-base italic font-light">{replaceAllStyleTags(content.content as string)}</span>
                </div>

              case "index": return renderIndex(content.contents as Index)

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
                <span>{replaceAllStyleTags(content.content["pt-BR"])}</span>
              </div>
              <div className={clsx(
                "grid grid-cols-[24px_1fr]",
                content["horizontal-line"] === "two-halves" && "border-b border-b-gray-400 pb-2.5 mb-1",
              )}>
                <span className="font-bold text-red-600">℣.</span>
                <span>{replaceAllStyleTags(content.content["latin"])}</span>
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
                <span>{replaceAllStyleTags(content.content["pt-BR"])}</span>
              </div>
              <div className={clsx(
                "grid grid-cols-[24px_1fr]",
                content["horizontal-line"] === "two-halves" && "border-b border-b-gray-400 pb-2.5 mb-1",
              )}>
                <span className="font-bold text-red-600">℟.</span>
                <span>{replaceAllStyleTags(content.content["latin"])}</span>
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
              )}>{replaceAllStyleTags(content.content["pt-BR"])}</div>
              <div className={clsx(
                content.type === "header-2" && "mx-5",
                content.type === "indication" && "mx-5",
                content["horizontal-line"] === "two-halves" && "border-b border-b-gray-400 pb-2.5 mb-1",
              )}>{replaceAllStyleTags(content.content["latin"])}</div>
            </div>
        }
      })
    )
  }

  return (
    <div className="mb-2 max-w-prose text-justify hyphens-auto">
      <h1 className="text-3xl font-medium mb-5">{file.title}</h1>
      {renderIndex(file.index)}
      {renderSessions(file.sessions)}
      {/* {renderFootnotes(file.footnotes)} // TODO: this. */}
    </div>
  )
}