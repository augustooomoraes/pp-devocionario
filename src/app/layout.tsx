import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider";
// import { ThemeProvider } from "next-themes";
 
const fontSans = Manrope({subsets: ["latin"]})

export const metadata: Metadata = {
  title: {
    default: "Devocionário",
    template: "%s - Devocionário"
  },
  description: "Projeto do portfólio de Augusto Moraes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <body className={cn(fontSans.className, "min-h-screen")}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
