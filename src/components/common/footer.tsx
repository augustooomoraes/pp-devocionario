import Image from "next/image";
import AmdgBlack from "@/public/amdg/amdg-black-1600-1066.png"
import AmdgWhite from "@/public/amdg/amdg-white-1600-1066.png"
import { Github, Globe, Instagram, Linkedin } from "lucide-react";

export default function AppFooter() {

  return (
    <>
      <div className="h-full" />
      <footer className="
        bg-background border-t
        mt-24 sm:mt-40
        py-8 px-4
        flex flex-col lg:flex-row items-center justify-around
      ">

        <div className="h-48 min-h-40 lg:ml-12">
          <Image
            width={800}
            height={533}
            alt="Logo do Devocionário."
            src={AmdgBlack}
            priority
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
            height={533}
            alt="Logo do Devocionário."
            src={AmdgWhite}
            priority
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

        <div className="
          w-full flex flex-col xl:flex-row justify-around
          mt-7 sm:mt-4 sm:mx-8
          gap-5 xl:gap-2
        ">
          <TextColumn>
            <a
              target="_blank"
              href="https://www.augustooomoraes.com"
              className="flex flex-row gap-3 hover:text-linkHover active:text-linkActive hover:underline active:underline"
            >
              <Globe />
              augustooomoraes.com
            </a>
          </TextColumn>

          <TextColumn>
            <div className="flex flex-row gap-4">

              <a
                target="_blank"
                href="https://www.linkedin.com/in/augustocdm/"
                className="hover:text-linkHover active:text-linkActive"
              >
                <Linkedin />
              </a>

              {/* TODO: link this repo's page (when it's public... if that's gonna happen) */}
              <a
                target="_blank"
                href="https://github.com/augustooomoraes/pp-devocionario"
                className="hover:text-linkHover active:text-linkActive"
              >
                <Github />
              </a>

              <a
                target="_blank"
                href="https://www.instagram.com/augustooomoraes/"
                className="hover:text-linkHover active:text-linkActive"
              >
                <Instagram />
              </a>

            </div>
          </TextColumn>
        </div>
      </footer>
    </>
  );
}

function TextColumn({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full px-4 gap-3 text-center flex flex-row items-center justify-center ">
      {children}
    </div>
  )
}