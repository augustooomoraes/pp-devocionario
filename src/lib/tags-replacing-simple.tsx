
export function replaceAllStyleTags(text: string) {
  return replaceBreakAndAsteriskAndFootnoteTags(
    text
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
    )
  );
}

export function replaceBreakAndAsteriskAndFootnoteTags(parts: (string | React.JSX.Element)[]) {
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

        return elements.concat(replaced);
      });
    }
    return part;
  });
}
