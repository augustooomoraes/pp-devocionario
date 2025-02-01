import { cn } from "@/shadcnui/lib/utils";
import DevocionarioLogoBlack from "@/public/devocionario-sun-heart-logo-black-1600-1600.png"
import DevocionarioLogoWhite from "@/public/devocionario-sun-heart-logo-white-1600-1600.png"

import { EB_Garamond } from "next/font/google";
import Image from "next/image";
const devocionarioFont = EB_Garamond({subsets: ["latin"]})

export default function DevocionarioTitleLogoSunHeart() {
  return (
    <div className={cn(devocionarioFont.className, `
      flex flex-col items-center justify-center gap-6
      text-primary
      h-[440px] w-full mt-8 mb-32
    `)}>
      <span className="
        font-medium
        text-5xl 
      ">
        Devocionário
      </span>
      <Image
        width={800}
        height={800}
        alt="Logo do Devocionário."
        src={DevocionarioLogoBlack}
        className="block dark:hidden"
        style={{
          objectFit: "contain",
          maxWidth: "100%",
          maxHeight: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      />
      <Image
        width={800}
        height={800}
        alt="Logo do Devocionário."
        src={DevocionarioLogoWhite}
        className="hidden dark:block"
        style={{
          objectFit: "contain",
          maxWidth: "100%",
          maxHeight: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      />
    </div>
  )
}
