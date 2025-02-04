"use client"
 
import { useState, useEffect} from "react"
import { useTheme } from "next-themes";
import { Toggle } from "../../../../shadcnui/components/ui/toggle";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="
    inline-flex items-center justify-center
    rounded-md
    text-sm font-medium
    ring-offset-background transition-colors
    hover:bg-muted hover:text-muted-foreground
    h-9 px-2.5
    cursor-not-allowed
  "><Sun className="text-muted-foreground" /></div>;

  return (
    <Toggle variant={"theme"} size={"sm"} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? <Sun /> : <Moon />}
    </Toggle>
  )
}
