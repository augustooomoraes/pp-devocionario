import { GradualeSimplexFile } from "@/lib/types/musica-liturgica"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shadcnui/components/ui/card"
import { numberToRoman } from "@/lib/utils"
import Link from "next/link"
import WorkInProgress from "@/components/images/workInProgess"

// TODO: use correct typing, fixing whatever's going wrong here

export default function KyrialeList({ file } : { file: any }) {
  return (
    <>

      <div className="
        flex flex-row flex-wrap gap-4
        max-w-7xl
      ">
        {
          file.missae.map((missa: any) => { return (
            <Link href={missa.url} className="grow">
              <Card
                key={missa.id}
                className="cursor-pointer hover:bg-background transition-colors h-full"
              >
                {/* 
                  Possibilities:
                  - ✔️ cards according to GradualisMissaGroup type
                    - with a collapsible section for the missae
                      - ❌ which would make other cards' responsiveness look horrible
                    - with the amount of missae written
                      - linking to another page wigh the missae list
                        - each missa item linking to yet another page
                          - ❌ too much redirecting
                */}

                {/* <CardHeader>

                  {
                    (missa.number && missa.title) &&
                    <span className="-mt-1.5 text-muted-foreground">
                      {`Missa ${numberToRoman(missa.number)}`}
                    </span>
                  }

                  <CardTitle>
                    {
                      missa.title
                        ? missa.title
                        : `Missa ${numberToRoman(missa.number)}`
                    }
                  </CardTitle>

                  {
                    missa.indication &&
                    <CardDescription>{missa.indication}</CardDescription>
                  }
                </CardHeader> */}

                <CardContent>
                  <span>:D</span>
                </CardContent>

              </Card>
            </Link>
          )})
        }
      </div>

      <WorkInProgress title={""} />

    </>
  )
}
