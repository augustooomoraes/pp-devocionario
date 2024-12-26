"use client"
 
import { useState, useEffect} from "react"
import { useTheme } from "next-themes";
import { Toggle } from "../../shadcnui/components/ui/toggle";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Toggle onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? 'Claro' : 'Escuro'}
    </Toggle>
  )
}