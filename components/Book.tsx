import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface BookProps {
  title: string
  author: string
  published: string
  summary: React.ReactNode
  link: string
  photo?: any
}

const Book = ({ title, author, published, summary, link }: BookProps) => {
  return (
    <div className="flex gap-4">
      <div className="aspect-[3/4] h-40 rounded bg-stone-500" />
      <div className="flex flex-col gap-1.5">
        <h3 className="font-serif text-lg leading-none text-stone-300">{title}</h3>
        <p className="text-xs text-stone-400/90">
          {author} • {published}
        </p>
        <p className="text-sm text-stone-400/90">{summary}</p>
        <Link
          href={link}
          className="group mt-auto flex max-w-fit items-center gap-0.5 rounded-full border border-stone-700 px-3 py-1.5 text-xs text-stone-400 transition-colors hover:border-stone-500 hover:text-stone-200"
        >
          <span>Purchase on Amazon</span>
          <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
        </Link>
      </div>
    </div>
  )
}

export default Book
