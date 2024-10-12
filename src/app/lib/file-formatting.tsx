import React from "react"

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
}[]

type Sessions = {
  id: number,
  title: string,
  type: SessionTypes,
  contents: SessionContents,
}[]

type SessionContents = {
  type: SessionContentTypes | ParallelPrecesTypes,
  content: string | Index | ParallelPreces,
  "subsession-break"?: boolean, // Isso aqui não está no README.
}[]

type ParallelPreces = {
  type: ParallelPrecesTypes,
  content: ParallelPrecesContent,
  "larger-break"?: boolean,
  "horizontal-line"?: HorizontalLineTypes,
}

type ParallelPrecesContent = {
  latin: string,
  "pt-BR": string,
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

  // function replaceUnderline(text: string) {
  //   return text.split(/(<underline>.*?<\/underline>)/g).map((part, index) => {
  //     if (part.startsWith("<underline>")) {
  //       return (
  //         <span key={index} className="underline">
  //           {part.replace(/<\/?underline>/g, "")}
  //         </span>
  //       );
  //     }
  //     return part;
  //   });
  // }

  // function replaceBreak(text: string) {
  //   return text.split("<break>").map((part, index) => (
  //     <React.Fragment key={index}>
  //       {index > 0 && <br />}
  //       {part}
  //     </React.Fragment>
  //   ));
  // }

  function renderIndex(index: Index) {
    return (
      <ol className="list-none space-y-2">

        {index.map(item => {
          return <li key={item.id} className="grid grid-cols-[44px_1fr] mt-1 first:!mt-0">
            <span>{item.id}.</span>
            <span>{item.title}</span>
            {item.index && (
              <div className="grid grid-cols-[44px_1fr] mt-2.5 col-span-2">
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
      <div className="mt-5">

        {sessions.map(session => {
          return <div>
            <h2 className="text-2xl font-medium mb-3">{session.title}</h2>
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
          /*
              Considerar aqui:
              • subsession-break              
          */
          contents.map((content, index) => {
            switch(content.type) {
              case "header-1":
                return <></>
              case "header-2":
                return <></>
              case "paragraph":
                return <></>
              case "index":
                return <></>
              case "indication":
                return <></>
              default:
                return
            }
          })
        )
      case "parallel-preces":
        return (
          contents.map((content, index) => {
            /*
                Considerar aqui:
                • larger-break              
            */
            switch(content.type) {
              case "header-2":
                return <></>
              case "paragraph":
                return <></>
              case "v":
                return <></>
              case "r":
                return <></>
              case "annotation":
                return <></>
            }
          })
        )
      case "gregorian-chant":
        return <></>
      default:
        return
    }
  }

  return (
    <div className="mb-2">
      <h1 className="text-3xl font-medium mb-5">{file.title}</h1>
      {renderIndex(file.index)}
      {renderSessions(file.sessions)}

      {/* {list.items.map((item, subIndex) => {
        return (
          <ol key={subIndex} className="list-none space-y-2">
            {
              typeof item === "string"
                ? <li className="grid grid-cols-[44px_1fr] mt-1 !first:mt-0">
                  <span className="inline-block w-8">{index + 1}.{subIndex + 1}.</span>
                  <span>{
                    replaceUnderline(item).map(part => {
                      if (typeof part === "string") {
                        return replaceBreak(part)
                      }
                      return part;
                    })
                  }</span>
                </li>
                : <li className="grid grid-cols-[44px_1fr] mt-1 !first:mt-0">
                  <span className="inline-block w-8">{index + 1}.{subIndex + 1}.</span>
                  <span className="whitespace-pre-line">{item.text}</span>
                  <ol key={subIndex} className="list-none space-y-2 col-span-2">
                    {item.subItems.map((subItem, subSubIndex) => {
                      return (
                        <li key={subSubIndex} className={clsx(
                          "grid ml-[44px] !mt-1",
                          item.orderType === "letter"
                            ? "grid-cols-[24px_1fr]"
                            : "grid-cols-[60px_1fr]"
                        )}>
                          <span className="inline-block w-8">{
                            item.orderType === "letter"
                              ? String.fromCharCode(97 + subSubIndex)
                              : `${index + 1}.${subIndex + 1}.${subSubIndex + 1}`
                            }.</span>
                          <span className="whitespace-pre-line">{
                            replaceUnderline(subItem).map(part => {
                              if (typeof part === "string") {
                                return replaceBreak(part)
                              }
                              return part;
                            })
                          }</span>
                        </li>
                      )
                    })}
                  </ol>
                </li>
            }
          </ol>
        )
      })} */}
    </div>
  )
}