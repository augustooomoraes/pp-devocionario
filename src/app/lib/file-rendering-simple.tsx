"use client"
// TODO: check if this would ruin pre-fetching/pre-rendering, considering that data.json would be fetched from mongodb or whatever

import clsx from "clsx"
import React from "react"
import { replaceAllStyleTags } from "./tags-replacing-simple";
import { Contents, ParallelPreces } from "./types/oracoes";

// TODO: put these different funcionalities in the regular DevocionarioFile, so style updates don't have to be made on more than one file.
// TODO: with that, clean up all these comments.

export function OracaoFile({
  file,
} : {
  file: any,
}) {

  // function renderSections(contents: Contents) {
  //   contents.map((content, index) => {
  //     const contentType = content.type;
  //     switch(contentType) {
  //       case "regular-text":
  //         return (
  //           contents.map((content, index) => {
  //             switch(content.type) {
  //               case "header-1":
  //                 return <div className="flex items-center gap-2.5 mt-3" key={index}>
  //                   <h3
  //                     className={clsx(
  //                       content["id"] && "cursor-pointer hover:underline",
  //                       content["link-id"] && "",
  //                       content["subsection-break"] && "mb-5",
  //                       content["no-margin-bottom"] === true ? "" : "mb-1",
  //                       "text-xl font-medium",
  //                       content["badge"] && "inline",
  //                     )}
  //                   >
  //                     {replaceAllStyleTags(content.content as string)}
  //                   </h3>
  //                 </div>
  
  //               case "header-2":
  //                 return <h4
  //                   key={index}
  //                   className={clsx(
  //                     content["id"] && "cursor-pointer hover:underline",
  //                     content["subsection-break"] && "mb-5",
  //                     "text-lg font-semibold mt-2 mb-1",
  //                   )}
  //                 >
  //                   {replaceAllStyleTags(content.content as string)}
  //                 </h4>
  
  //               case "paragraph":
  //                 return <p
  //                   key={index}
  //                   className={clsx(
  //                     content["end-break"] && "mb-1.5",
  //                     content["subsection-break"] && "mb-5",
  //                     "mt-0.5"
  //                   )}
  //                 >
  //                   {replaceAllStyleTags(content.content as string)}
  //                 </p>
  
  //               case "indication":
  //                 return <div
  //                   key={index}
  //                   className={clsx(
  //                     content["subsection-break"] && "mb-5",
  //                     content["increased-vertical-spacing"] === true ? "my-5" : "my-1",
  //                     "ml-[28px]",
  //                   )}
  //                 >
  //                   <span className="text-base italic font-light">{replaceAllStyleTags(content.content as string)}</span>
  //                 </div>
  
  //               case "parallel-preces":
  //               return <div
  //                 key={index}
  //                 className={clsx(content["subsection-break"] && "mb-5",)}
  //               >{
  //                 renderParallelPreces(content.contents as unknown as ParallelPreces)
  //               }</div>
  
  //               default:
  //                 return
  //             }
  //           })
  //         )

  //       case "parallel-preces":
  //         return renderParallelPreces(contents as unknown as ParallelPreces)
  
  //       case "gregorian-chant":
  //         return <></>
  
  //       default:
  //         return
  //     }
  //   })
  // }

  // function renderSectionContents(sectionType: SectionTypes, contents: SectionContents) {
  //   switch(sectionType) {
  //     case "regular-text":
  //       return (
  //         contents.map((content, index) => {
  //           switch(content.type) {
  //             case "header-1":
  //               return <div className="flex items-center gap-2.5 mt-3" key={index}>
  //                 <h3
  //                   className={clsx(
  //                     content["id"] && "cursor-pointer hover:underline",
  //                     content["link-id"] && "",
  //                     content["subsection-break"] && "mb-5",
  //                     content["no-margin-bottom"] === true ? "" : "mb-1",
  //                     "text-xl font-medium",
  //                     content["badge"] && "inline",
  //                   )}
  //                 >
  //                   {replaceAllStyleTags(content.content as string)}
  //                 </h3>
  //               </div>

  //             case "header-2":
  //               return <h4
  //                 key={index}
  //                 className={clsx(
  //                   content["id"] && "cursor-pointer hover:underline",
  //                   content["subsection-break"] && "mb-5",
  //                   "text-lg font-semibold mt-2 mb-1",
  //                 )}
  //               >
  //                 {replaceAllStyleTags(content.content as string)}
  //               </h4>

  //             case "paragraph":
  //               return <p
  //                 key={index}
  //                 className={clsx(
  //                   content["end-break"] && "mb-1.5",
  //                   content["subsection-break"] && "mb-5",
  //                   "mt-0.5"
  //                 )}
  //               >
  //                 {replaceAllStyleTags(content.content as string)}
  //               </p>

  //             case "indication":
  //               return <div
  //                 key={index}
  //                 className={clsx(
  //                   content["subsection-break"] && "mb-5",
  //                   content["increased-vertical-spacing"] === true ? "my-5" : "my-1",
  //                   "ml-[28px]",
  //                 )}
  //               >
  //                 <span className="text-base italic font-light">{replaceAllStyleTags(content.content as string)}</span>
  //               </div>

  //             case "parallel-preces":
  //             return <div
  //               key={index}
  //               className={clsx(content["subsection-break"] && "mb-5",)}
  //             >{
  //               renderParallelPreces(content.contents as unknown as ParallelPreces)
  //             }</div>

  //             default:
  //               return
  //           }
  //         })
  //       )
  //     case "parallel-preces":
  //       return renderParallelPreces(contents as unknown as ParallelPreces)

  //     case "gregorian-chant":
  //       return <></>

  //     default:
  //       return
  //   }
  // }

  function renderParallelPreces(contents: Contents) {
    return (
      contents.map((content, index) => {
        switch(content.type) {
          case "v": // TODO: don't render "℣." when the element from before is also type="v"
            return <div key={index} className="grid grid-cols-2 gap-3">
              <div className="grid grid-cols-[24px_1fr]">
                <span className="font-bold text-rubrics">℣.</span>
                <span>{replaceAllStyleTags(content.content["pt-BR"])}</span>
              </div>
              <div className="grid grid-cols-[24px_1fr]">
                <span className="font-bold text-rubrics">℣.</span>
                <span>{replaceAllStyleTags(content.content["latin"])}</span>
              </div>
            </div>

          case "r":
            return <div key={index} className="grid grid-cols-2 gap-3">
              <div className="grid grid-cols-[24px_1fr]">
                <span className="font-bold text-rubrics">℟.</span>
                <span>{replaceAllStyleTags(content.content["pt-BR"])}</span>
              </div>
              <div className="grid grid-cols-[24px_1fr]">
                <span className="font-bold text-rubrics">℟.</span>
                <span>{replaceAllStyleTags(content.content["latin"])}</span>
              </div>
            </div>

          default:
            return <div
              key={index}
              className={clsx(
                content.type === "header-2" && "text-lg font-medium",
                content.type === "paragraph" && "mb-1.5 mt-1.5",
                content.type === "indication" && "my-1.5 leading-tight italic text-base font-light",
                content.type === "annotation" && "my-1 leading-tight italic text-ann font-light",
                "grid grid-cols-2 gap-3",
              )}
            // style={content.type === "header-2" ? { fontVariant: "small-caps"} : {}} // TODO: check if there's any next/font with true small caps
            // Possibility: use local fonts without losing Nextjs font optimization: https://youtu.be/DqGr8YwO52Q?si=7f3Cyjgu6xBe_ZAg&t=299
            >
              <div className={clsx(
                content.type === "header-2" && "mx-5",
                content.type === "indication" && "mx-5",
              )}>
                <span>
                  {replaceAllStyleTags(content.content["pt-BR"])}
                </span>
              </div>
              <div className={clsx(
                content.type === "header-2" && "mx-5",
                content.type === "indication" && "mx-5",
              )}>
                <span>
                  {replaceAllStyleTags(content.content["latin"])}
                </span>
              </div>
            </div>
        }
      })
    )
  }

  return (
    <div className="mb-2 max-w-prose text-justify hyphens-auto">
      <h1 className="text-3xl font-medium mb-12 mx-6 text-center">{file.title}</h1>
      {renderParallelPreces(file["parallel-preces"])}
    </div>
  )
}
