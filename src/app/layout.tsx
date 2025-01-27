import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/shadcnui/lib/utils"
import { ThemeProvider } from "@/components/themeToggle/theme-provider";
import { SidebarProvider} from "@/shadcnui/components/ui/sidebar";
import { AppSidebar } from "@/shadcnui/components/app-sidebar";
import TopBar from "@/components/topbar/topbar";
import { BackToTopButton } from "@/components/backToTopButton";
 
const fontSans = Manrope({subsets: ["latin"]})

export const metadata: Metadata = {
  title: {
    default: "Devocionário",
    template: "%s - Devocionário"
  },
  description: "Projeto do portfólio de Augusto Moraes.",
  metadataBase: new URL("https://devocionario.augustooomoraes.com/"),
  openGraph: {
    url: "https://devocionario.augustooomoraes.com",
    type: "website",
    title: "Devocionário",
    description: "Projeto do portfólio de Augusto Moraes.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 800,
        height: 400,
        alt: "Augusto Moraes OpenGraph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    // domain: "devocionario.augustooomoraes.com",
    // url: "https://devocionario.augustooomoraes.com",
    site: "https://devocionario.augustooomoraes.com",
    title: "Devocionário",
    creator: "Augusto Moraes",
    description: "Projeto do portfólio de Augusto Moraes.",
    // image: "/opengraph-image.png",
    images: [
      {
        url: "/opengraph-image.png",
        width: 800,
        height: 400,
        alt: "Augusto Moraes OpenGraph Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <body className={cn(fontSans.className, "min-h-screen flex flex-row")}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider>
              <AppSidebar />
              <TopBar children={children} />
              <BackToTopButton />
            </SidebarProvider>
          </ThemeProvider>
        </body>
    </html>
  );
}
