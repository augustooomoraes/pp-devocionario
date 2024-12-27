import { replaceLinkTags } from "@/app/lib/tags-replacing";
import { LinkMap } from "@/app/lib/types/devocionarios";
import React, { useRef, useState, useEffect } from "react";

type TooltipProps = {
  text: string;
  links: LinkMap;
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

const Tooltip: React.FC<TooltipProps> = ({ text, links, visible, setVisible }) => {
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visible) return;

    const handleTooltipPosition = () => {
      if (!tooltipRef.current) return;

      const tooltipEl = tooltipRef.current;
      const parentEl = tooltipEl.parentElement;
      const tooltipRect = tooltipEl.getBoundingClientRect();
      const parentRect = parentEl?.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      const maxTooltipWidth = 672;
      const minTooltipWidth = Math.min(512, tooltipRect.width); // too much for mobile → TODO: make it responsive

      let shouldDisplace =
        (viewportWidth - (parentRect?.right || 0) - 20) < minTooltipWidth
          ? true
          : false;

      let left = Math.min(
        shouldDisplace
          ? (viewportWidth - parentRect!.right) - minTooltipWidth - 20
          : 0,
        0
      );

      let remainingWidth = shouldDisplace
        ? (viewportWidth - parentRect!.right) - left - 20
        : parentRect
          ? viewportWidth - parentRect.right - 20
          : maxTooltipWidth;

      let width = Math.min(
        Math.min(tooltipRect.width, maxTooltipWidth),
        remainingWidth
      );

      setTooltipStyle({
        left: `${left}px`,
        width: `${width}px`,
      });
    };

    handleTooltipPosition();
    window.addEventListener("resize", handleTooltipPosition);
    return () => window.removeEventListener("resize", handleTooltipPosition);
  }, [visible]);

  if (!visible) {
    return null;
  }

  return (
    <div
      ref={tooltipRef}
      style={tooltipStyle}
      className="
        absolute z-10
        max-w-2xl w-max
        py-1 px-3
        bg-accent
        text-base font-normal text-left
        border rounded shadow-lg
      "
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <span>
        {replaceLinkTags([text], links)}
      </span>
    </div>
  );
};

export default Tooltip;
