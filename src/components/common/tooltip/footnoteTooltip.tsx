"use client"

import React, { useState, useRef } from 'react';
import Tooltip from './tooltip';
import { LinkMap } from "@/lib/types/devocionarios";
import { useRouter } from "next/navigation";

type FootnoteTooltipProps = {
  footnoteId: number,
  footnotes: { id: number, content: string }[],
  links: LinkMap,
  setStateFunction: React.Dispatch<React.SetStateAction<boolean[]>>,
};

const FootnoteTooltip: React.FC<FootnoteTooltipProps> = ({ footnoteId, footnotes, links, setStateFunction }) => {
  const [visible, setVisible] = useState(false);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const footnote = footnotes.find(f => f.id === footnoteId);

  const router = useRouter();

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

  const handleClick = () => (e: React.MouseEvent) => {

    e.stopPropagation();

    setStateFunction((prev) =>
      prev.map((_, index) => index === footnoteId - 1)
    );

    router.push("#rodape-conteudo-" + (footnoteId || "not-found"));

    setTimeout(() => {
      setStateFunction((prev) => prev.map(() => false));
    }, 3500);
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
          hover:bg-accent active:bg-black/10 transition-colors
          px-0.5 rounded-sm
        "
        onClick={handleClick()}
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
