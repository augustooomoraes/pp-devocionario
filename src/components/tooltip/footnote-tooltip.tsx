import React, { useState, useRef } from 'react';
import Tooltip from './tooltip';
import { LinkMap } from "@/app/lib/types";

type FootnoteTooltipProps = {
  footnoteId: number,
  footnotes: { id: number, content: string }[],
  links: LinkMap,
};

const FootnoteTooltip: React.FC<FootnoteTooltipProps> = ({ footnoteId, footnotes, links }) => {
  const [visible, setVisible] = useState(false);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const footnote = footnotes.find(f => f.id === footnoteId);

  if (!footnote) {
    return null;
  }

  const handleMouseEnter = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    setVisible(true);
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setVisible(false);
    }, 300);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const target = document.getElementById(`rodape-conteudo-${footnoteId}`);
    if (target) {
      target.scrollIntoView();
    }
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
      <Tooltip text={footnote.content} links={links} visible={visible} setVisible={setVisible} />
    </span>
  );
};

export default FootnoteTooltip;
