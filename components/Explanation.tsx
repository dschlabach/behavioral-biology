import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export interface ExplanationProps {
  text: string
  link: string
  photo?: any
}

const Explanation = ({ text, link, photo }: ExplanationProps) => {
  return (
    <div className="flex gap-4">
      {photo && (
        <Image
          src={photo}
          alt={text}
          className="aspect-[3/4] shrink-0 overflow-hidden rounded border border-stone-800 object-cover"
          width={120}
          height={160}
        />
      )}
      <div className="flex flex-col gap-1.5 border-l-2 border-stone-600 pl-4">
        <p className="text-sm text-stone-400/90">{text}</p>
        <Link
          href={link}
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

export default Explanation
