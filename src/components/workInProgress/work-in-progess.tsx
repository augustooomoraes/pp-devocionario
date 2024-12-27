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

      <div className="
        flex items-center justify-center
        text-primary
        h-96 w-full my-8">
        <WorkInProgressIcon className="fill-current max-w-full max-h-full" />
      </div>

    </>
  )
}
