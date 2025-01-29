"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(document.documentElement.scrollTop >= 100);
    };

    onScroll();
    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <div className={`
        bg-card text-card-foreground
        shadow-lg
        fixed bottom-7 right-7
        w-10 h-10 rounded-md
        transition-opacity duration-300
        ${!visible
          ? "opacity-0"
          : "min-[1100px]:opacity-70 opacity-20 hover:opacity-100"
        }
      `}>
        <button onClick={visible ? scrollUp : undefined} className={`
          ${visible ? "cursor-pointer" : "cursor-default"}
          flex justify-center items-center
          w-full h-full rounded-md
          transition-colors
        `}>
          <ChevronUp />
        </button>
      </div>
    </>
  );
}
