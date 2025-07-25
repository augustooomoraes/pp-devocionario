import FootnoteTooltip from "@/components/common/tooltip/footnoteTooltip";
import { Footnotes, LinkMap } from "./types/devocionarios";

export function replaceAllStyleTags(
  text: string,
  footnotes: Footnotes,
  links: LinkMap,
  setStateFunction: React.Dispatch<React.SetStateAction<boolean[]>>,
  key: string,
) {
  return replaceBreakAndAsteriskAndFootnoteTags(
    replaceLinkTags(text
      .split(/(<paragraph>.*?<\/paragraph>|<i>.*?<\/i>|<b>.*?<\/b>|<u>.*?<\/u>)/g)
      .map((part, index) => {
        if (part.startsWith("<paragraph>")) {
          return (
            <span key={`${index}-paragraph`} className="font-bold text-rubrics">
              {"§ " + part.replace(/<\/?paragraph>/g, "") + ". "}
            </span>
          );
        }
        if (part.startsWith("<i>")) {
          return (
            <span key={`${index}-italic`} className="italic">
              {part.replace(/<\/?i>/g, "")}
            </span>
          );
        }
        if (part.startsWith("<b>")) {
          return (
            <span key={`${index}-break`} className="font-semibold">
              {part.replace(/<\/?b>/g, "")}
            </span>
          );
        }
        if (part.startsWith("<u>")) {
          return (
            <span key={`${index}-underline`} className="underline">
              {part.replace(/<\/?u>/g, "")}
            </span>
          );
        }
        return part;
      }
    ),
    links,
    key,
  ),
    footnotes,
    links,
    setStateFunction,
    key,
  );
}

export function replaceBreakAndAsteriskAndFootnoteTags(
  parts: (string | React.JSX.Element)[],
  footnotes: Footnotes,
  links: LinkMap,
  setStateFunction: React.Dispatch<React.SetStateAction<boolean[]>>,
  baseIndex: string,
) {
  return parts.flatMap((part, index) => {
    if (typeof part === "string") {
      return part.split("<br>").flatMap((subPart, subIndex) => {
        const elements: (string | React.ReactNode)[] = [];
        const parsedKey = `${baseIndex}-${index}-${subIndex}`
        if (subIndex > 0) elements.push(<br key={`${parsedKey}-br`} />);

        const replaced = subPart.split("<*>").flatMap((segment, i) =>
          i > 0
            ? [
              <span
                key={`${parsedKey}-span-${i}`}
                className="font-bold text-rubrics"
              >
                *
              </span>,
              segment,
            ]
            : [segment]
        );

        const footnoteReplaced = replaced.flatMap((segment, i) =>
          typeof segment === "string"
            ? segment
              .split(/(<footnote id=\d+>)/g)
              .flatMap((footnotePart, footnoteIndex) => {
                if (footnotePart.startsWith("<footnote")) {
                  const match = footnotePart.match(/<footnote id=(\d+)>/);
                  if (match) {
                    const footnoteId = match[1];
                    return (
                      <FootnoteTooltip
                        key={`${parsedKey}-${i}-${footnoteIndex}-footnote`}
                        footnoteId={Number(footnoteId)}
                        footnotes={footnotes}
                        links={links}
                        setStateFunction={setStateFunction}
                      />
                    );
                  }
                }
                return footnotePart;
              })
            : [segment]
        );

        const linkReplaced = replaceLinkTags(footnoteReplaced, links, parsedKey)

        return elements.concat(linkReplaced);
      });
    }
    return part;
  });
}

export function replaceLinkTags(
  part: (string | JSX.Element)[],
  links: LinkMap,
  baseIndex: string,
): (string | JSX.Element)[] {
  return part.flatMap((subPart, index) => {
    if (typeof subPart === "string") {
      return subPart
        .split(/(<link id=\d+>.*?<\/link>)/g)
        .map((textPart, textIndex) => {
          if (textPart.startsWith("<link")) {
            const match = textPart.match(/<link id=(\d+)>/);
            if (match) {
              const linkId = Number(match[1]);
              const link = links.find((link) => link.id === linkId);
              if (link) {
                return (
                  <a
                    key={`${baseIndex}-${index}-${textIndex}-anchor`}
                    className="underline hover:text-linkHover active:text-linkActive"
                    href={link.url}
                    title={link.alt}
                    target={link.url.startsWith("#") ? "_self" : "_blank"}
                  >
                    {textPart.replace(/<link id=\d+>|<\/link>/g, "")}
                  </a>
                );
              }
            }
          }
          return textPart;
        });
    } else {
      return subPart;
    }
  });
}
