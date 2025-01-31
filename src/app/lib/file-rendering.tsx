"use client"
// TODO: check if this would ruin pre-fetching/pre-rendering, considering that data.json would be fetched from mongodb or whatever

import clsx from "clsx"
import React from "react"
import { useRouter } from "next/navigation";
import { Footnotes, Index, LinkMap, ParallelPreces, SectionMap, SectionContents, Sections, SectionTypes, BadgeData, DownloadLinks } from "./types/devocionarios";
import { replaceAllStyleTags, replaceBreakAndAsteriskAndFootnoteTags, replaceLinkTags } from "./tags-replacing";
import DownloadLinksList from "@/components/downloadLinksList/download-links-list";

export function DevocionarioFile({
  file,
  badges,
} : {
  file: any,
  badges?: BadgeData[],
}) {

  const router = useRouter();

  const handleNavigation = (id: number, sectionMap: SectionMap) => {
    const sectionName = sectionMap.filter(sectionIndex => sectionIndex.id === id)[0].title || "not-found";
    if (sectionName) {
      router.push(`#${sectionName}`);
    }
  };

  function renderIndex(index: Index, sectionMap: SectionMap, key?: number | string, footnotes?: boolean, downloadLinks?: boolean) {

    const handleClick = (target: string) => {    
      return (e: React.MouseEvent) => {
        e.stopPropagation();
        router.push(target);
      };
    };

    const parsedKey = key ? key : "main";
    const length = index.length;

    return (
      <ol className="list-none space-y-1">

        {index.map((item, index) => {
          return <li
            key={`${parsedKey}-${index}`}
            className="grid grid-cols-[28px_1fr]"
          >
            <span className="pl-1.5">{item["no-list-number"] ? "" : `${index + 1}.`}</span>
            <span
              className="
                hover:bg-accent active:bg-black/10 transition-colors
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
                {renderIndex(item.index, sectionMap, `${parsedKey}-${index}`)}
              </div>
            )}
          </li>
        })}

        {footnotes && <li key="index-footnotes" className="grid grid-cols-[28px_1fr]">
            <span className="pl-1.5">{length + 1}</span>
            <span
              className="
                hover:bg-accent active:bg-black/10 transition-colors
                px-1.5 rounded-md
                cursor-pointer
              "
              onClick={handleClick("#notas")}
            >
              Notas
            </span>
        </li>}

        {downloadLinks && <li key="index-download-links" className="grid grid-cols-[28px_1fr]">
            <span className="pl-1.5">{footnotes ? length + 2 : length + 1}</span>
            <span
              className="
                hover:bg-accent active:bg-black/10 transition-colors
                px-1.5 rounded-md
                cursor-pointer
              "
              onClick={handleClick("#download")}
            >
              Links para download
            </span>
        </li>}

      </ol>
    )
  }

  function renderSections(sections: Sections, sectionMap: SectionMap, linkMap: LinkMap, badges?: BadgeData[]) {
    return (
      <div className="mt-5 first">

        {sections.map((section, index) => {
          return <div
            key={index}
            id={sectionMap.filter(sectionIndex => sectionIndex.id === section.id)[0].title || "not-found"}
          >
            <h2
              onClick={ () => handleNavigation(section.id, sectionMap) }
              className="
                text-2xl text-center font-medium
                mb-3 mt-5
                cursor-pointer hover:underline
              "
            >
              {replaceBreakAndAsteriskAndFootnoteTags([section.title], file.footnotes, file["link-map"])}
            </h2>
            {renderSectionContents(
              section.type,
              section.contents,
              sectionMap,
              linkMap,
              index,
              badges || undefined
            )}
          </div>
        })}

      </div>
    )
  }

  function renderSectionContents(sectionType: SectionTypes, contents: SectionContents, sectionMap: SectionMap, linkMap: LinkMap, key: number, badges?: BadgeData[]) {
    switch(sectionType) {
      case "regular-text":
        return (
          contents.map((content, index) => {
            let badgeData;
            if (content["badge"] && badges) {
              badgeData = badges.filter(badge => badge.badge === content["badge"])[0]
            }

            // const getBadgeClasses = (badgeData: BadgeData) => {
            //   return [
            //     'w-4 h-4 rounded-full',
            //     `bg-${badgeData.surface}`,
            //     `text-${badgeData.text}`,
            //     `dark:bg-${badgeData.surfaceDark}`,
            //     `dark:text-${badgeData.textDark}`
            //   ].join(' ');
            // };

            switch(content.type) {
              case "header-1":
                return <div className="flex items-center gap-2.5 mt-3" key={index}>
                  <h3
                    
                    className={clsx(
                      content["id"] && "cursor-pointer hover:underline",
                      content["link-id"] && "",
                      content["subsection-break"] && "mb-5",
                      content["no-margin-bottom"] === true ? "" : "mb-1",
                      "text-xl font-medium",
                      content["badge"] && "inline",
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

                  {badgeData && <div className={`
                    w-4 h-4 rounded-full
                    bg-${badgeData.surface} text-${badgeData.text}
                    dark:bg-${badgeData.surfaceDark} dark:text-${badgeData.textDark}
                  `} />}

                  {/* {badgeData && <div className={clsx(
                    "w-4 h-4 rounded-full",
                    `bg-${badgeData.surface} text-${badgeData.text}`,
                    `dark:bg-${badgeData.surfaceDark} dark:text-${badgeData.textDark}`,
                  )}/>} */}

                  {/* {badgeData && <div className={getBadgeClasses(badgeData)} />} */}

                </div>

              case "header-2":
                return <h4
                  key={index}
                  className={clsx(
                    content["id"] && "cursor-pointer hover:underline",
                    content["subsection-break"] && "mb-5",
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
                return <p
                  key={index}
                  className={clsx(
                    content["end-break"] && "mb-1.5",
                    content["subsection-break"] && "mb-5",
                    "mt-0.5"
                  )}
                >
                  {replaceAllStyleTags(content.content as string, file.footnotes, file["link-map"])}
                </p>

              case "indication":
                return <div
                  key={index}
                  className={clsx(
                    content["subsection-break"] && "mb-5",
                    content["increased-vertical-spacing"] === true ? "my-5" : "my-1",
                    "ml-[28px]",
                  )}
                >
                  <span className="text-base italic font-light">{replaceAllStyleTags(content.content as string, file.footnotes, file["link-map"])}</span>
                </div>

              case "index":
                return renderIndex(content.contents as Index, sectionMap, `section-${key}-${index}`)

              case "parallel-preces":
              return <div
                key={index}
                className={clsx(content["subsection-break"] && "mb-5",)}
              >{
                renderParallelPreces(content.contents as unknown as ParallelPreces, index, sectionMap, linkMap)
              }</div>

              default:
                return
            }
          })
        )
      case "parallel-preces":
        return renderParallelPreces(contents as unknown as ParallelPreces, 0, sectionMap, linkMap)

      case "gregorian-chant":
        return <></>

      default:
        return
    }
  }

  function renderParallelPreces(contents: ParallelPreces, index: number, sectionMap: SectionMap, linkMap: LinkMap) {
    return (
      contents.map((content, subindex) => {
        switch(content.type) {
          case "v": // TODO: don't render "℣." when the element from before is also type="v"
            return <div
              key={`${index}-${subindex}`}
              className={clsx(
                content["end-break"] && "mb-1.5",
                content["larger-break"] && "mb-2",
                content["subsection-break"] && "mb-5",
                content["horizontal-line"] === "full" && "after:content-[''] after:block after:h-[1px] after:bg-gray-400 after:mx-5 after:mb-2.5 after:col-span-2",
                "grid grid-cols-2 gap-3",
              )}
            >
              <div className={clsx(
                "grid grid-cols-[24px_1fr]",
                content["horizontal-line"] === "two-halves" && "border-b border-b-gray-400 pb-2.5 mb-1",
              )}>
                <span className="font-bold text-rubrics">℣.</span>
                <span>{replaceAllStyleTags(content.content["pt-BR"], file.footnotes, file["link-map"])}</span>
              </div>
              <div className={clsx(
                "grid grid-cols-[24px_1fr]",
                content["horizontal-line"] === "two-halves" && "border-b border-b-gray-400 pb-2.5 mb-1",
              )}>
                <span className="font-bold text-rubrics">℣.</span>
                <span>{replaceAllStyleTags(content.content["latin"], file.footnotes, file["link-map"])}</span>
              </div>
            </div>

          case "r":
            return <div
              key={`${index}-${subindex}`}
              className={clsx(
                content["end-break"] && "mb-1.5",
                content["larger-break"] && "mb-2",
                content["subsection-break"] && "mb-5",
                content["horizontal-line"] === "full" && "after:content-[''] after:block after:h-[1px] after:bg-gray-400 after:mx-5 after:mb-2.5 after:col-span-2",
                "grid grid-cols-2 gap-3",
              )}
            >
              <div className={clsx(
                "grid grid-cols-[24px_1fr]",
                content["horizontal-line"] === "two-halves" && "border-b border-b-gray-400 pb-2.5 mb-1",
              )}>
                <span className="font-bold text-rubrics">℟.</span>
                <span>{replaceAllStyleTags(content.content["pt-BR"], file.footnotes, file["link-map"])}</span>
              </div>
              <div className={clsx(
                "grid grid-cols-[24px_1fr]",
                content["horizontal-line"] === "two-halves" && "border-b border-b-gray-400 pb-2.5 mb-1",
              )}>
                <span className="font-bold text-rubrics">℟.</span>
                <span>{replaceAllStyleTags(content.content["latin"], file.footnotes, file["link-map"])}</span>
              </div>
            </div>

          default:
            return <div
              key={`${index}-${subindex}`}
              className={clsx(
                content["end-break"] && "mb-1.5",
                content["larger-break"] && "mb-2",
                content["subsection-break"] && "mb-5",
                content["horizontal-line"] === "full" && "after:content-[''] after:block after:h-[1px] after:bg-gray-400 after:mx-5 after:mb-2.5 after:col-span-2",
                "grid grid-cols-2 gap-3",
                content.type === "header-1" && "text-base font-semibold text-center",
                content.type === "header-2" && "text-lg font-medium",
                content.type === "paragraph" && "mb-1.5 mt-1.5",
                content.type === "indication" && "my-1.5 leading-tight italic text-base font-light",
                content.type === "annotation" && "my-1 leading-tight italic text-ann font-light"
              )}
            // style={content.type === "header-2" ? { fontVariant: "small-caps"} : {}} // TODO: check if there's any next/font with true small caps
            // Possibility: use local fonts without losing Nextjs font optimization: https://youtu.be/DqGr8YwO52Q?si=7f3Cyjgu6xBe_ZAg&t=299
            >
              <div
                className={clsx(
                  content.type === "header-2" && "mx-5",
                  content.type === "indication" && "mx-5",
                  content["horizontal-line"] === "two-halves" && "border-b border-b-gray-400 pb-2.5 mb-1",
                )}
              >
                <span
                  className={clsx(content["id"] && "cursor-pointer hover:underline")}
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
                  {replaceAllStyleTags(content.content["pt-BR"], file.footnotes, file["link-map"])}
                </span>
              </div>
              <div
                className={clsx(
                  content.type === "header-2" && "mx-5",
                  content.type === "indication" && "mx-5",
                  content["horizontal-line"] === "two-halves" && "border-b border-b-gray-400 pb-2.5 mb-1",
                )}
              >
                <span
                  className={clsx(content["id"] && "cursor-pointer hover:underline")}
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
                  {replaceAllStyleTags(content.content["latin"], file.footnotes, file["link-map"])}
                </span>
              </div>
            </div>
        }
      })
    )
  }

  function renderFootnotes(contents: Footnotes, linkMap: LinkMap) {

    const handleClick = (target: string) => {    
      return (e: React.MouseEvent) => {
        e.stopPropagation();
        router.push(target);
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
          {contents.map((content, index) => {
            return (
              <li
                key={index}
                id={`rodape-conteudo-${content.id}`}
                className="grid grid-cols-[34px_1fr]"
              >
                <span>
                  <span
                    className="
                      hover:bg-accent active:bg-black/10 transition-colors
                      w-full px-1.5 rounded-md
                      cursor-pointer
                    "
                    onClick={handleClick( "#rodape-origem-" + (content.id || "not-found") )}
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

  function renderDownloadLinks(downloadLinks: DownloadLinks) {
    return (
      <div id="download" className="border-t border-t-gray-400 mt-14 pt-8">
        <h2
          className="
            mb-3
            text-lg font-medium
            cursor-pointer hover:underline
          "
          onClick={ () => router.push(`#notas`) }
        >
          Download
        </h2>
        <DownloadLinksList downloadLinks={downloadLinks} />
      </div>
    )
  }

  return (
    <div className="mb-2 max-w-prose text-justify hyphens-auto">
      <h1 className="text-3xl font-medium mb-12 mx-6 text-center">{file.title}</h1>
      {renderIndex(
        file.index,
        file["section-map"],
        undefined,
        file["footnotes"] && true,
        file["download-links"] && true,
      )}
      {renderSections(
        file.sections,
        file["section-map"],
        file["link-map"],
        badges || undefined
      )}
      {file.footnotes && renderFootnotes(file.footnotes, file["link-map"])}
      {file["download-links"] && renderDownloadLinks(file["download-links"])}
    </div>
  )
}
