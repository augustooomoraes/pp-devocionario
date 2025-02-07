"use client"

import { Search } from "lucide-react"

import { Label } from "@/shadcnui/components/ui/label"
import { SidebarGroup, SidebarGroupContent, SidebarInput } from "@/shadcnui/components/ui/sidebar"
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  const searchParams = useSearchParams();
  const params = new URLSearchParams();
  const router = useRouter();

  const defaultQuery = searchParams.get("entrada") || "";
  const [query, setQuery] = useState(defaultQuery);

  const defaultFilterPdf = searchParams.get("pdf") || "";
  const [filterPdf, setFilterPdf] = useState(defaultFilterPdf)

  useEffect(() => {
    setQuery(defaultQuery);
  }, [defaultQuery]);

  useEffect(() => {
    setFilterPdf(defaultFilterPdf);
  }, [defaultFilterPdf]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (query) {
      params.set("entrada", query.trim())
    } else {
      params.delete("entrada")
    }

    if (filterPdf === "sim") {
      params.set("pdf", "sim")
    } else {
      params.delete("pdf")
    };

    router.push(`/busca?${params.toString()}`);
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
