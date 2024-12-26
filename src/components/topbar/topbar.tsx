import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/shadcnui/components/ui/breadcrumb";
import { SidebarInset, SidebarTrigger } from "@/shadcnui/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { ThemeToggle } from "../themeToggle/theme-toggle";

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
  </SidebarInset>
  )
}

// export default function TopBar({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//   <SidebarInset>
//     <header className="flex justify-between sticky top-0 bg-background h-16 shrink-0 items-center border-b px-4">
//       <div className="flex justify-start items-center gap-2">
//         <SidebarTrigger className="-ml-1" />
//         <Separator orientation="vertical" className="mr-2 h-4" />
//         <Breadcrumb>
//           <BreadcrumbList>
//             <BreadcrumbItem className="hidden md:block">
//               <BreadcrumbLink href="#">
//                 Building Your Application
//               </BreadcrumbLink>
//             </BreadcrumbItem>
//             <BreadcrumbSeparator className="hidden md:block" />
//             <BreadcrumbItem>
//               <BreadcrumbPage>Data Fetching</BreadcrumbPage>
//             </BreadcrumbItem>
//           </BreadcrumbList>
//         </Breadcrumb>
//       </div>
//       <>
//         <ThemeToggle />
//       </>
//     </header>
//     {children}
//   </SidebarInset>
//   )
// }
