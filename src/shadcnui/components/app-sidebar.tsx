import * as React from "react"
import { ChevronRight } from "lucide-react"

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

const data = {
  navMain: [
    {
      title: "Devocionários",
      url: "#",
      items: [
        {
          title: "Da Devoção e da Consagração Total à Virgem Santíssima",
          url: "/consagracao-a-virgem-santissima",
        },
        {
          title: "Da Ordem Terceira do Carmo",
          url: "/ordem-terceira-do-carmo",
        },
        {
          title: "Da Consagração a São José",
          url: "/consagracao-a-sao-jose",
        },
        {
          title: "Da Consagração a São Miguel Arcanjo",
          url: "/consagracao-a-sao-miguel-arcanjo",
        },
      ],
    },
    {
      title: "Orações",
      url: "#",
      items: [
        {
          title: "Ave Maria",
          url: "#",
        },
        {
          title: "Pai Nosso",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>

      <SidebarHeader>
        <div className="flex flex-row gap-2 mb-0.5">
          {/* TODO: logo */}
          <Link
            className="
              flex items-center justify-start
              pl-3 
              grow
              font-semibold text-lg
              hover:bg-accent rounded-sm
            "
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
        {data.navMain.map((item) => (
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
                          <a href={item.url}>{item.title}</a>
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
