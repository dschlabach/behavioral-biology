export interface StudyProps {
  title: string
  publishDate: string
  author: string
  summary: React.ReactNode
  link: string
}

const Study = ({ title, summary, link, publishDate, author }: StudyProps) => {
  return (
    <div className="flex flex-col gap-1 text-sm">
      <h3 className="font-serif text-xl leading-tight">{title}</h3>
      <p className="text-xs text-stone-400">
        {publishDate} • {author}
      </p>
      <p className="pt-1 text-stone-400">{summary}</p>
    </div>
  )
}

export default Study
