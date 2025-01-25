import DevocionarioLogo from "@/public/devocionario-sun-heart-logo-250-250.svg"
import { cn } from "@/shadcnui/lib/utils";

import { EB_Garamond } from "next/font/google";
const devocionarioFont = EB_Garamond({subsets: ["latin"]})

export default function DevocionarioTitleLogoSunHeart() {
  return (
    <>

      <div className={cn(devocionarioFont.className, `
        flex flex-col items-center justify-center gap-4
        text-primary
        h-[440px] w-full my-8
      `)}>
        <span className="
          font-medium
          text-5xl 
        ">
          Devocionário
        </span>
        <DevocionarioLogo className="shrink fill-current max-w-full max-h-full" />
      </div>

    </>
  )
}
