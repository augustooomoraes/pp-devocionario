
import { ThemeToggle } from "@/components/themeToggle/theme-toggle";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <ThemeToggle />
      <h1>Hello world</h1>
      <p>How you do</p>
    </main>
  );
}
