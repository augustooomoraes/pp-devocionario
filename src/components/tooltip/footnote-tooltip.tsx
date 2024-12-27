"use client"

import React, { useState, useRef } from 'react';
import Tooltip from './tooltip';
import { LinkMap } from "@/app/lib/types/devocionarios";
import { useRouter } from "next/navigation";

type FootnoteTooltipProps = {
  footnoteId: number,
  footnotes: { id: number, content: string }[],
  links: LinkMap,
};

const FootnoteTooltip: React.FC<FootnoteTooltipProps> = ({ footnoteId, footnotes, links }) => {
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

  const handleClick = (target: string) => {
    return (e: React.MouseEvent) => {
      e.stopPropagation();
      router.push(target);
    };
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
        onClick={handleClick( "#rodape-conteudo-" + (footnoteId || "not-found") )}
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
