import FootnoteTooltip from "@/components/common/tooltip/footnoteTooltip";
import { Footnotes, LinkMap } from "./types/devocionarios";

export function replaceAllStyleTags(text: string, footnotes: Footnotes, links: LinkMap) {
  return replaceBreakAndAsteriskAndFootnoteTags(
    replaceLinkTags(text
      .split(/(<paragraph>.*?<\/paragraph>|<i>.*?<\/i>|<b>.*?<\/b>|<u>.*?<\/u>)/g)
      .map((part, index) => {
        if (part.startsWith("<paragraph>")) {
          return (
            <span key={index} className="font-bold text-rubrics">
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
      }
    ), links
  ),
    footnotes,
    links,
  );
}

export function replaceBreakAndAsteriskAndFootnoteTags(parts: (string | React.JSX.Element)[], footnotes: Footnotes, links: LinkMap) {
  return parts.flatMap((part, index) => {
    if (typeof part === "string") {
      return part.split("<br>").flatMap((subPart, subIndex) => {
        const elements: (string | React.ReactNode)[] = [];
        if (subIndex > 0) elements.push(<br key={`${index}-${subIndex}-br`} />);

        const replaced = subPart.split("<*>").flatMap((segment, i) => 
          i > 0 ? [<span
            key={`${index}-${subIndex}-span-${i}`}
            className="font-bold text-rubrics"
          >*</span>, segment] : [segment]
        );

        const footnoteReplaced = replaced.flatMap((segment, i) => 
          typeof segment === "string"
            ? segment
              .split(/(<footnote id=\d+>)/g)
              .map((footnotePart, footnoteIndex) => {
                if (footnotePart.startsWith("<footnote")) {
                  const match = footnotePart.match(/<footnote id=(\d+)>/);
                  if (match) {
                    const footnoteId = match[1];
                    return (
                      <FootnoteTooltip
                        key={`${i}-${footnoteIndex}-footnote`}
                        footnoteId={Number(footnoteId)}
                        footnotes={footnotes}
                        links={links}
                      />
                    );
                  }
                }
                return footnotePart;
              })
            : [segment]
        );

        return elements.concat(footnoteReplaced);
      });
    }
    return part;
  });
}

export function replaceLinkTags(
  part: (string | JSX.Element)[],
  links: LinkMap
): (string | JSX.Element)[] {
  return part.flatMap((subPart, index) => {
    if (typeof subPart === "string") {
      // Process strings for <link> tags
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
                    key={`${index}-${textIndex}`}
                    className="underline hover:text-linkHover active:text-linkActive"
                    href={link.url}
                    title={link.alt}
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
      // Keep JSX elements unchanged
      return subPart;
    }
  });
}