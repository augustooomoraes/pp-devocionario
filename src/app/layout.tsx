import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/shadcnui/lib/utils"
import { ThemeProvider } from "@/components/themeToggle/theme-provider";
import { SidebarProvider} from "@/shadcnui/components/ui/sidebar";
import { AppSidebar } from "@/shadcnui/components/app-sidebar";
import TopBar from "@/components/topbar/topbar";
 
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
            </SidebarProvider>
          </ThemeProvider>
        </body>
    </html>
  );
}
