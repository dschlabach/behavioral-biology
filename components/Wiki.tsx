import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export interface WikiProps {
  name: string
  summary: React.ReactNode
  wikipediaSlug: string
  photo?: any
}

const Wiki = ({ name, summary, wikipediaSlug, photo }: WikiProps) => {
  return (
    <div className="flex gap-4">
      {photo && (
        <Image
          src={photo}
          alt={name}
          className="aspect-[3/4] shrink-0 overflow-hidden rounded border border-stone-800 object-cover"
          width={120}
          height={160}
        />
      )}
      <div className="flex flex-col gap-1.5">
        <h3 className="font-serif text-lg leading-none text-stone-300">{name}</h3>
        <p className="text-sm text-stone-400/90">{summary}</p>
        <Link
          href={wikipediaSlug}
          className="group mt-auto flex max-w-fit items-center gap-0.5 rounded-full border border-stone-700 px-3 py-1.5 text-xs text-stone-400 transition-colors hover:border-stone-500 hover:text-stone-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Read more</span>
          <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
        </Link>
      </div>
    </div>
  )
}

export default Wiki
