'use client'

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation"

const links = [
  {
    name: "Da Devoção e da Consagração Total à Virgem Santíssima",
    href: "/consagracao-completa",
    finished: true,
  },
  {
    name: "Santo Rosário",
    href: "/santo-rosario",
    finished: false,
  },
  {
    name: "Da Ordem Terceira do Carmo",
    href: "/ordem-terceira-do-carmo",
    finished: false,
  },
  {
    name: "Devoção a São José",
    href: "/sao-jose",
    finished: false,
  },
  {
    name: "Quaresma de São Miguel",
    href: "/quaresma-sao-miguel",
    finished: false,
  },
  {
    name: "Coroa Angélica",
    href: "/coroa-angelica",
    finished: true,
  },
]

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link, index) => {
        if (link.finished) return (
          <li className={cn(pathname !== link.href && "!bg-primary", "hover:bg-secondary")}>
            <Link key={index} href={link.href}>
              <span>{link.name}</span>
            </Link>
          </li>
        )
      })}
    </>
  )
}
