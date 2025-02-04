"use client";

import { useState, useEffect } from "react";
import { Type } from "lucide-react";
import clsx from "clsx";
import { Toggle } from "@/shadcnui/components/ui/toggle";

export function FontToggle() {
  const [mounted, setMounted] = useState(false);
  const [isSerif, setIsSerif] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedFont = localStorage.getItem("font") || "sans-serif";
    setIsSerif(storedFont === "serif");
    document.documentElement.classList.toggle("serif", storedFont === "serif");
  }, []);

  const toggleFont = () => {
    const newFont = isSerif ? "sans-serif" : "serif";
    setIsSerif(!isSerif);
    localStorage.setItem("font", newFont);
    document.documentElement.classList.toggle("serif", newFont === "serif");
  };

  if (!mounted) {
    return (
      <div
        className="
          inline-flex items-center justify-center
          rounded-md text-sm font-medium
          ring-offset-background transition-colors
          hover:bg-muted hover:text-muted-foreground
          h-9 px-2.5 cursor-not-allowed
        "
      >
        <Type className="text-muted-foreground" />
      </div>
    );
  }

  return (
    <Toggle size={"sm"} onClick={toggleFont} className={clsx(
      "hover:bg-accent hover:text-accent-foreground",
      isSerif
        ? "bg-accent text-foreground hover:bg-accent hover:text-accent-foreground"
        : "data-[state=on]:bg-accent data-[state=on]:text-foreground data-[state=on]:hover:bg-accent data-[state=on]:hover:text-accent-foreground"
    )}>
      <Type />
    </Toggle>
  );
}
