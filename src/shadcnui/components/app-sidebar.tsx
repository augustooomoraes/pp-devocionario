import * as React from "react"
import { ChevronRight } from "lucide-react"
import { cn } from "@/shadcnui/lib/utils";

import { EB_Garamond } from "next/font/google";
const devocionarioFont = EB_Garamond({subsets: ["latin"]})

import { SearchForm } from "@/shadcnui/components/search-form"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shadcnui/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/shadcnui/components/ui/sidebar"
import { ThemeToggle } from "@/components/themeToggle/theme-toggle"
import Link from "next/link"
import { sidebarData } from "@/app/lib/data/sidebar"
import clsx from "clsx"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>

      <SidebarHeader>
        <div className="flex flex-row gap-2 mb-0.5">
          {/* TODO: logo */}
          <Link
            className={cn(devocionarioFont.className, `
              flex items-center justify-start
              pl-3 
              grow
              font-semibold text-xl
              hover:bg-accent rounded-sm
            `)}
            href="/"
          >
            Devocionário
          </Link>
          <div className="shrink-0">
            <ThemeToggle />
          </div>
        </div>
        <SearchForm />
      </SidebarHeader>

      <SidebarContent className="gap-0 pt-2">
        {sidebarData.navMain.map((item) => (
          <Collapsible
            key={item.title}
            title={item.title}
            defaultOpen
            className="group/collapsible"
          >
            <SidebarGroup>

              <div className="h-0.5 mb-2 bg-border" />

              <SidebarGroupLabel
                asChild
                className="
                  group/label
                  text-sm font-semibold text-sidebar-foreground
                  hover:bg-sidebar-accent
                  hover:text-sidebar-accent-foreground"
              >
                <CollapsibleTrigger>
                  {item.title}{" "}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>

              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          size={"auto"}
                          // isActive={item.isActive}
                        >
                          <a
                            href={item.url}
                            title={
                              item.devStage === "notStarted"
                                ? "Não iniciado"
                                : item.devStage === "started"
                                  ? "Recém iniciado"
                                  : item.devStage === "mvp"
                                    ? "MVP"
                                    : "done"
                            }
                          >
                            <div className="flex flex-row items-center gap-2">
                              <div className={clsx(
                                "rounded-full w-2 h-2 shrink-0",
                                {
                                  "bg-red-500": item.devStage === "notStarted",
                                  "bg-yellow-500": item.devStage === "started",
                                  "bg-blue-500": item.devStage === "mvp",
                                  "bg-green-500": item.devStage === "done",
                                },
                              )} />
                              <span>{item.title}</span>
                            </div>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>

            </SidebarGroup>
          </Collapsible>
        ))}

      </SidebarContent>

      <SidebarRail />

    </Sidebar>
  )
}
