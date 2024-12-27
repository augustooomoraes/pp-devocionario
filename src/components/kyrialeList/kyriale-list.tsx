import { KyrialeFile } from "@/app/lib/types/musica-liturgica"
import WorkInProgress from "../workInProgress/work-in-progess"

// TODO: use correct typing, fixing whatever's going wrong here

export default function KyrialeList({ file } : { file: any }) {
  return (
    <>

      <div className="flex flex-row flex-wrap gap-4">
        {
          file.missae.map((missa: any) => { return (
            <div
              key={missa.id}
              // TODO: use shadcn <Card /> here
            >
              {missa.title}
            </div>
          )})
        }
      </div>

      <WorkInProgress title={""} />

    </>
  )
}
