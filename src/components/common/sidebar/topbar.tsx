import AppFooter from "@/components/common/footer";
import { SidebarInset, SidebarTrigger } from "@/shadcnui/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";

export default function TopBar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <SidebarInset>
    <header className="flex justify-start sticky top-0 bg-transparent h-14 shrink-0 items-center px-4">
      <div className="flex justify-start items-center">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
      </div>
    </header>
    {children}
    <AppFooter />
  </SidebarInset>
  )
}
