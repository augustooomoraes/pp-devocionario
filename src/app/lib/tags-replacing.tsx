import FootnoteTooltip from "@/components/tooltip/footnote-tooltip";
import { Footnotes, LinkMap } from "./types";

export function replaceAllStyleTags(text: string, footnotes: Footnotes, links: LinkMap) {
  return replaceBreakAndAsteriskAndFootnoteTags(text
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
    }),
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
            className="font-bold text-red-600"
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

export function replaceLinkTags(text: string, links: LinkMap) {
  return text
    .split(/(<link id=\d+>.*?<\/link>)/g)
    .map((part, index) => {
      if (part.startsWith("<link")) {
        const match = part.match(/<link id=(\d+)>/);
        if (match) {
          const linkId = Number(match[1]);
          const link = links.find(link => link.id === linkId);
          if (link) {
            return (
              <a
                key={index}
                className="underline hover:text-blue-600"
                href={link.url}
                title={link.alt}
              >
                {part.replace(/<link id=\d+>|<\/link>/g, "")}
              </a>
            );
          }
        }
      }
      return part;
    });
}