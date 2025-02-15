import type { Metadata } from "next";
import { EB_Garamond, Manrope, STIX_Two_Text, Judson, Noto_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/common/sidebar/theme-toggle/themeProvider";
import { SidebarProvider} from "@/shadcnui/components/ui/sidebar";
import { AppSidebar } from "@/components/common/sidebar/appSidebar";
import { BackToTopButton } from "@/components/common/backToTopButton";
import TopBar from "@/components/common/sidebar/topbar";
import { Analytics } from "@vercel/analytics/react"
 
const fontSans = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})
const fontSerif = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
})
const fontRubrics = STIX_Two_Text({
  subsets: ["latin"],
  variable: "--font-stix-two-text",
})
const fontRubrics2 = Judson({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-judson",
})
const fontRubrics3 = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
})

const meta = {
  title: "Devocionário",
  description: "Orações e práticas espirituais da Santa Igreja. Textos em português e latim.",
  siteUrl: "https://devocionario.augustooomoraes.com",
  image: {
    url: "/opengraph-image.png",
    width: 800,
    height: 400,
    alt: "Augusto Moraes' Devocionário OpenGraph Image",
  },
}

export const metadata: Metadata = {
  title: {
    default: meta.title,
    template: "%s"
  },
  description: meta.description,
  metadataBase: new URL(meta.siteUrl + "/"),

  openGraph: {
    url: meta.siteUrl,
    type: "website",
    title: meta.title,
    description: meta.description,
    images: [meta.image],
  },

  twitter: {
    card: "summary_large_image",
    site: meta.siteUrl,
    title: meta.title,
    creator: "Augusto Moraes",
    description: meta.description,
    images: [meta.image],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <body className="min-h-screen flex flex-row">
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
            <Analytics />
          </ThemeProvider>
        </body>
    </html>
  );
}
