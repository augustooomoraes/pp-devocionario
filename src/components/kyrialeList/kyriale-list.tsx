import { KyrialeFile } from "@/app/lib/types/musica-liturgica"
import WorkInProgress from "../workInProgress/work-in-progess"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shadcnui/components/ui/card"
import { numberToRoman } from "@/app/lib/utils"
import Link from "next/link"

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
                <CardHeader>

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
                </CardHeader>

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
