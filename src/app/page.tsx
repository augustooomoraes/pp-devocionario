
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <ThemeToggle />
      <h1>Hello world</h1>
      <p>How you do</p>
    </main>
  );
}
