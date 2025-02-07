"use client"

import { Search } from "lucide-react"

import { Label } from "@/shadcnui/components/ui/label"
import { SidebarGroup, SidebarGroupContent, SidebarInput } from "@/shadcnui/components/ui/sidebar"
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const defaultQuery = searchParams.get("entrada") || "";
  const [query, setQuery] = useState(defaultQuery);

  useEffect(() => {
    setQuery(defaultQuery);
  }, [defaultQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/busca?entrada=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form {...props} onSubmit={handleSearch}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Buscas
          </Label>
          <SidebarInput
            id="search"
            placeholder="Buscar..."
            className="pl-8"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  )
}
