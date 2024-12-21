import React, { useState } from 'react';
import Tooltip from "./tooltip";

type FootnoteTooltipProps = {
  footnoteId: number;
  footnotes: { id: number, content: string }[];
};

const FootnoteTooltip: React.FC<FootnoteTooltipProps> = ({ footnoteId, footnotes }) => {
  const [visible, setVisible] = useState(false);

  const footnote = footnotes.find(f => f.id === footnoteId);

  if (!footnote) {
    return null;
  }

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const target = document.getElementById(`rodape-conteudo-${footnoteId}`);
    if (target) {
      target.scrollIntoView();
    }
  };

  return (
    <span
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative"
    >
      <sup
        id={`rodape-origem-${footnoteId}`}
        className="
          hover:bg-black/5 active:bg-black/10 transition-colors
          px-0.5 rounded-sm
        "
        onClick={handleClick}
      >
        <span className="cursor-pointer">
          {footnoteId}
        </span>
      </sup>

      {visible && <Tooltip text={footnote.content} />}


    </span>
  );
};

export default FootnoteTooltip;
