import Image from "next/image"
import WorkInProgressIcon from "@/public/work-in-progess-780-825.svg"

export default function WorkInProgress({
  title,
  subtitles,
} : {
  title: string,
  subtitles?: string[],
}) {
  return (
    <>

      <div className="mb-2 max-w-prose text-center hyphens-auto">
        <h1 className="text-3xl font-medium mb-12 mx-6">{title}</h1>
        {
          subtitles && <div className="mb-10">
            {subtitles.map( (subtitle) => { return (
              <h2 className="text-lg font-light mb-2">{subtitle}</h2>
            )})}
          </div>
        }
      </div>

      <div className="flex items-center justify-center h-96 w-full my-8">
        <div className="relative w-full h-full">
          <Image
            src={WorkInProgressIcon}
            layout="fill"
            objectFit="contain"
            alt={"work in progess"}
            // TODO: a good svg component that updates the fill color based on the selected theme
          />
        </div>
      </div>

    </>
  )
}
