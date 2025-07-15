"use client"
// TODO: check if this would ruin pre-fetching/pre-rendering, considering that data.json would be fetched from mongodb or whatever

import clsx from "clsx"
import React, { useState } from "react"
import { useRouter } from "next/navigation";
import { Footnotes, Index, LinkMap, ParallelPreces, SectionMap, SectionContents, Sections, SectionTypes, BadgeData, DownloadLink, ParallelPrecesContent, GregorianPngContent } from "./types/devocionarios";
import { replaceAllStyleTags, replaceBreakAndAsteriskAndFootnoteTags } from "./tags-replacing";
import DownloadLinksList from "@/components/common/downloadLinksList";
import Image from "next/image";

export function DevocionarioFile({
  file,
  badges,
} : {
  file: any,
  badges?: BadgeData[],
}) {

  const [selectedFootnotes, setSelectedFootnotes] = useState<boolean[]>(
    file.footnotes
      ? () => Array(file.footnotes.length).fill(false)
      : []
  );

  const router = useRouter();

  const handleNavigation = (id: number, sectionMap: SectionMap) => {
    const sectionName = sectionMap.filter(sectionIndex => sectionIndex.id === id)[0].title || "not-found";
    if (sectionName) {
      router.push(`#${sectionName}`);
    }
  };

  function renderIndex(
    index: Index,
    sectionMap: SectionMap,
    key: number | string | undefined,
    footnotes?: boolean,
    downloadLinks?: boolean,
  ) {

    const handleClick = (target: string) => {    
      return (e: React.MouseEvent) => {
        e.stopPropagation();
        router.push(target);
      };
    };

    const parsedKey = key !== undefined ? key : "main-index";
    const length = index.length;

    console.log(`➡️🧪 renderIndex: <ol /> key=${parsedKey}`) // TODO: remove testlog (DUPLICATE KEYS)
    return (
      <ol key={parsedKey} className="list-none space-y-1">

        {index.map((item, index) => {
          const parsedIndex = `${parsedKey}-li-${index}`
          console.log(`➡️🧪 renderIndex → map: <li /> key=${parsedIndex}`) // TODO: remove testlog (DUPLICATE KEYS)
          return <li
            key={parsedIndex}
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
              {replaceAllStyleTags(
                item.title,
                file.footnotes,
                file["link-map"],
                setSelectedFootnotes,
                parsedIndex,
              )}
            </span>
            {item.index && (
              <div className="grid grid-cols-[28px_1fr] mt-1 col-span-2">
                <span />
                {renderIndex(item.index, sectionMap, parsedIndex)}
              </div>
            )}
          </li>
        })}

        {footnotes && (() => {
          console.log(`➡️🧪 renderIndex → map: <li /> key=main-index-footnotes`); // TODO: remove testlog (DUPLICATE KEYS)
          return (
            <li key="main-index-footnotes" className="grid grid-cols-[28px_1fr]">
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
            </li>
          )
        })()}

        {/* {footnotes && <li key="index-footnotes" className="grid grid-cols-[28px_1fr]">
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
        </li>} */}

        {downloadLinks && (() => {
          console.log(`➡️🧪 renderIndex → map: <li /> key=main-index-download-links`); // TODO: remove testlog (DUPLICATE KEYS)
          return (
            <li key="main-index-download-links" className="grid grid-cols-[28px_1fr]">
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
            </li>
          )
        })()}

        {/* {downloadLinks && <li key="index-download-links" className="grid grid-cols-[28px_1fr]">
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
        </li>} */}

      </ol>
    )
  }

  function renderSections(
    sections: Sections,
    sectionMap: SectionMap,
    linkMap: LinkMap,
    badges?: BadgeData[],
  ) {
    return (
      <div className="mt-5 first">

        {sections.map((section, index) => {
          const parsedIndex = `section-${index}`
          console.log(`➡️🧪 renderSections → map: <div /> key=${parsedIndex}`) // TODO: remove testlog (DUPLICATE KEYS)
          return <div
            key={parsedIndex}
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
              {replaceBreakAndAsteriskAndFootnoteTags(
                [section.title],
                file.footnotes,
                file["link-map"],
                setSelectedFootnotes,
                parsedIndex,
              )}
            </h2>
            {renderSectionContents(
              section.type,
              section.contents,
              sectionMap,
              linkMap,
              parsedIndex,
              badges || undefined
            )}
          </div>
        })}

      </div>
    )
  }

  function renderSectionContents(
    sectionType: SectionTypes,
    contents: SectionContents,
    sectionMap: SectionMap,
    linkMap: LinkMap,
    key: string,
    badges?: BadgeData[],
  ) {
    switch(sectionType) {
      case "regular-text":
        return (
          contents.map((content, index) => {
            let parsedIndex = `${key}-content-${index}`
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
                console.log(`➡️🧪 renderSectionContents → map: header-1 <div /> key=${parsedIndex}`) // TODO: remove testlog (DUPLICATE KEYS)
                return <div key={parsedIndex} className="flex items-center gap-2.5 mt-3">
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
                    {replaceAllStyleTags(
                      content.content as string,
                      file.footnotes,
                      file["link-map"],
                      setSelectedFootnotes,
                      parsedIndex,
                    )}
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
                console.log(`➡️🧪 renderSectionContents → map: header-2 <h4 /> key=${parsedIndex}`) // TODO: remove testlog (DUPLICATE KEYS)
                return <h4
                  key={parsedIndex}
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
                  {replaceAllStyleTags(
                    content.content as string,
                    file.footnotes,
                    file["link-map"],
                    setSelectedFootnotes,
                    parsedIndex,
                  )}
                </h4>

              case "header-3":
                console.log(`➡️🧪 renderSectionContents → map: header-3 <h5 /> key=${parsedIndex}`) // TODO: remove testlog (DUPLICATE KEYS)
                return <h5
                  key={parsedIndex}
                  className={clsx(
                    content["id"] && "cursor-pointer hover:underline",
                    content["subsection-break"] && "mb-5",
                    "text-sm font-semibold uppercase mt-1.5 mb-0.5",
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
                  {replaceAllStyleTags(
                    content.content as string,
                    file.footnotes,
                    file["link-map"],
                    setSelectedFootnotes,
                    parsedIndex,
                  )}
                </h5>

              case "paragraph":
                console.log(`➡️🧪 renderSectionContents → map: paragraph <p /> key=${parsedIndex}`) // TODO: remove testlog (DUPLICATE KEYS)
                return <p
                  key={parsedIndex}
                  className={clsx(
                    content["end-break"] && "mb-1.5",
                    content["subsection-break"] && "mb-5",
                    "mt-0.5"
                  )}
                >
                  {replaceAllStyleTags(
                    content.content as string,
                    file.footnotes,
                    file["link-map"],
                    setSelectedFootnotes,
                    parsedIndex,
                  )}
                </p>

              case "indication":
                console.log(`➡️🧪 renderSectionContents → map: indication <div /> key=${parsedIndex}`) // TODO: remove testlog (DUPLICATE KEYS)
                return <div
                  key={parsedIndex}
                  className={clsx(
                    content["subsection-break"] && "mb-5",
                    content["increased-vertical-spacing"] === true ? "my-5" : "my-1",
                    "ml-[28px]",
                  )}
                >
                  <span className="text-base italic font-light">
                    {replaceAllStyleTags(
                      content.content as string,
                      file.footnotes,
                      file["link-map"],
                      setSelectedFootnotes,
                      parsedIndex,
                    )}
                  </span>
                </div>

              case "index":
                parsedIndex += "-index"
                return renderIndex(content.contents as Index, sectionMap, `${parsedIndex}`)

              case "parallel-preces":
                console.log(`➡️🧪 renderSectionContents → map: parallel-preces <div /> key=${parsedIndex}`) // TODO: remove testlog (DUPLICATE KEYS)
                return <div
                  key={parsedIndex}
                  className={clsx(content["subsection-break"] && "mb-5",)}
                >{
                  renderParallelPreces(content.contents as unknown as ParallelPreces, parsedIndex, sectionMap, linkMap)
                }</div>

              default:
                return
            }
          })
        )
      case "parallel-preces":
        return renderParallelPreces(contents as unknown as ParallelPreces, key, sectionMap, linkMap)

      default:
        return
    }
  }

  function renderParallelPreces(
    contents: ParallelPreces,
    index: string,
    sectionMap: SectionMap,
    linkMap: LinkMap,
  ) {
    return (
      contents.map((content, subindex) => {
        let parsedIndex = `${index}-pp-${subindex}`
        switch(content.type) {
          case "v": // TODO: don't render "℣." when the element from before is also type="v"
            console.log(`➡️🧪 renderParallelPreces → map: v <div /> key=${parsedIndex}`) // TODO: remove testlog (DUPLICATE KEYS)
            return <div
              key={`${parsedIndex}`}
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
                <span className="font-bold text-rubrics rubrics-font">℣.</span>
                <span>
                  {replaceAllStyleTags(
                    (content.content as ParallelPrecesContent)["pt-BR"],
                    file.footnotes,
                    file["link-map"],
                    setSelectedFootnotes,
                    `${parsedIndex}-vernacular`,
                  )}
                </span>
              </div>
              <div className={clsx(
                "grid grid-cols-[24px_1fr]",
                content["horizontal-line"] === "two-halves" && "border-b border-b-gray-400 pb-2.5 mb-1",
              )}>
                <span className="font-bold text-rubrics rubrics-font">℣.</span>
                <span>
                  {replaceAllStyleTags(
                    (content.content as ParallelPrecesContent)["latin"],
                    file.footnotes,
                    file["link-map"],
                    setSelectedFootnotes,
                    `${parsedIndex}-latin`
                  )}
                </span>
              </div>
            </div>

          case "r":
            console.log(`➡️🧪 renderParallelPreces → map: r <div /> key=${parsedIndex}`) // TODO: remove testlog (DUPLICATE KEYS)
            return <div
              key={`${parsedIndex}`}
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
                <span className="font-bold text-rubrics rubrics-font">℟.</span>
                <span>
                  {replaceAllStyleTags(
                    (content.content as ParallelPrecesContent)["pt-BR"],
                    file.footnotes,
                    file["link-map"],
                    setSelectedFootnotes,
                    `${parsedIndex}-vernacular`
                  )}
                </span>
              </div>
              <div className={clsx(
                "grid grid-cols-[24px_1fr]",
                content["horizontal-line"] === "two-halves" && "border-b border-b-gray-400 pb-2.5 mb-1",
              )}>
                <span className="font-bold text-rubrics rubrics-font">℟.</span>
                <span>
                  {replaceAllStyleTags(
                    (content.content as ParallelPrecesContent)["latin"],
                    file.footnotes,
                    file["link-map"],
                    setSelectedFootnotes,
                    `${parsedIndex}-latin`
                  )}
                </span>
              </div>
            </div>

          // TODO: make this component collapsible
          case "gregorian-png":
            console.log(`➡️🧪 renderParallelPreces → map: gregorian-png <div /> key=${parsedIndex}`) // TODO: remove testlog (DUPLICATE KEYS)
            return (<div key={`${parsedIndex}`} className="w-full flex flex-col items-center mb-4">

              <div className="w-full max-w-[400px] hidden min-[280px]:!block min-[400px]:!hidden">
                <Image
                  src={`/gregorian-chant/${(content.content as GregorianPngContent).light[400]}.png`}
                  alt={(content.content as GregorianPngContent).alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto dark:hidden"
                />
                <Image
                  src={`/gregorian-chant/${(content.content as GregorianPngContent).dark[400]}.png`}
                  alt={(content.content as GregorianPngContent).alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto hidden dark:block"
                />
              </div>

              <div className="w-full max-w-[450px] hidden min-[400px]:!block min-[450px]:!hidden">
                <Image
                  src={`/gregorian-chant/${(content.content as GregorianPngContent).light[450]}.png`}
                  alt={(content.content as GregorianPngContent).alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto dark:hidden"
                />
                <Image
                  src={`/gregorian-chant/${(content.content as GregorianPngContent).dark[450]}.png`}
                  alt={(content.content as GregorianPngContent).alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto hidden dark:block"
                />
              </div>

              <div className="w-full max-w-[500px] hidden min-[450px]:!block min-[500px]:!hidden">
                <Image
                  src={`/gregorian-chant/${(content.content as GregorianPngContent).light[500]}.png`}
                  alt={(content.content as GregorianPngContent).alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto dark:hidden"
                />
                <Image
                  src={`/gregorian-chant/${(content.content as GregorianPngContent).dark[500]}.png`}
                  alt={(content.content as GregorianPngContent).alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto hidden dark:block"
                />
              </div>

              <div className="w-full max-w-[578px] hidden min-[500px]:!block">
                <Image
                  src={`/gregorian-chant/${(content.content as GregorianPngContent).light[578]}.png`}
                  alt={(content.content as GregorianPngContent).alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto dark:hidden"
                />
                <Image
                  src={`/gregorian-chant/${(content.content as GregorianPngContent).dark[578]}.png`}
                  alt={(content.content as GregorianPngContent).alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto hidden dark:block"
                />
              </div>

            </div>);

          default:
            console.log(`➡️🧪 renderParallelPreces → map: default <div /> key=${parsedIndex}`) // TODO: remove testlog (DUPLICATE KEYS)
            return (<div
              key={`${parsedIndex}`}
              className={clsx(
                content["end-break"] && "mb-1.5",
                content["larger-break"] && "mb-2",
                content["subsection-break"] && "mb-5",
                content["horizontal-line"] === "full" && "after:content-[''] after:block after:h-[1px] after:bg-gray-400 after:mx-5 after:mb-2.5 after:col-span-2",
                "grid grid-cols-2 gap-3",
                content.type === "header-1" && "text-base font-semibold text-center",
                content.type === "header-2" && "text-lg font-medium",
                content.type === "header-3" && "text-sm font-semibold uppercase",
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
                  content.type === "header-3" && "mx-2 mt-1",
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
                  {replaceAllStyleTags(
                    (content.content as ParallelPrecesContent)["pt-BR"],
                    file.footnotes,
                    file["link-map"],
                    setSelectedFootnotes,
                    `${parsedIndex}-vernacular`,
                  )}
                </span>
              </div>
              <div
                className={clsx(
                  content.type === "header-2" && "mx-5",
                  content.type === "header-3" && "mx-2 mt-1",
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
                  {replaceAllStyleTags(
                    (content.content as ParallelPrecesContent)["latin"],
                    file.footnotes,
                    file["link-map"],
                    setSelectedFootnotes,
                    `${parsedIndex}-latin`,
                  )}
                </span>
              </div>
            </div>)
        }
      })
    )
  }

  function renderFootnotes(
    contents: Footnotes,
    linkMap: LinkMap,
    setStateFunction: React.Dispatch<React.SetStateAction<boolean[]>>,
  ) {

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
            const parsedIndex = `footnote-${index}`
            console.log(`➡️🧪 renderFootnotes → map: <li /> key=${parsedIndex}`) // TODO: remove testlog (DUPLICATE KEYS)
            return (
              <li
                key={parsedIndex}
                id={`rodape-conteudo-${content.id}`}
                className="grid grid-cols-[34px_1fr]"
              >
                <span>
                  <span
                    className={`
                      hover:bg-accent active:bg-black/10 transition-colors
                      w-full px-1.5 rounded-md
                      cursor-pointer
                      ${selectedFootnotes[content.id - 1] && "!bg-black/15 dark:!bg-white/20"}
                      transition-colors
                    `}
                    onClick={handleClick( "#rodape-origem-" + (content.id || "not-found") )}
                  >
                    {content.id}.
                  </span>
                </span>
                <span>
                  {
                    replaceAllStyleTags(
                      content.content,
                      contents,
                      linkMap,
                      setStateFunction,
                      parsedIndex,
                    )
                  }
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  function renderDownloadLinks(downloadLinks: DownloadLink[]) {
    return (
      <div id="download" className="border-t border-t-gray-400 mt-14 pt-8">
        <h2
          className="
            mb-3
            text-lg font-medium
            cursor-pointer hover:underline
          "
          onClick={ () => router.push(`#download`) }
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
        file.footnotes && true,
        file["download-links"] && true,
      )}
      {renderSections(
        file.sections,
        file["section-map"],
        file["link-map"],
        badges || undefined,
      )}
      {file.footnotes && renderFootnotes(
        file.footnotes,
        file["link-map"],
        setSelectedFootnotes,
      )}
      {file["download-links"] && renderDownloadLinks(
        file["download-links"],
      )}
    </div>
  )
}
