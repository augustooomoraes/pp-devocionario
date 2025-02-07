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
            {subtitles.map( (subtitle, index) => { return (
              <h2 key={index} className="text-lg font-light mb-2">{subtitle}</h2>
            )})}
          </div>
        }
      </div>

      <div className="
        flex flex-col items-center justify-center gap-4
        text-primary
        h-96 w-full my-8
      ">
        <span className="uppercase font-semibold text-sm">Work in progress</span>
        <WorkInProgressIcon className="fill-current max-w-full max-h-full" />
      </div>

    </>
  )
}
