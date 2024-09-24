import Link from 'next/link'
import { Lecture, lectures } from '@/lib/lectures'

export default function Lectures() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-serif text-4xl">Lectures</h1>
      <div className="flex flex-col gap-4">
        {lectures.map((lecture, index) => {
          const videoHandle = (index + 1).toString()
          return (
            <Link
              key={lecture.videoId}
              href={`/lectures/${videoHandle}`}
              className="font-serif text-lg text-stone-400 transition-colors hover:text-stone-200"
            >
              {videoHandle}. {lecture.title}
              {lecture.status === 'draft' && <span className="text-xs text-stone-400"> (coming soon)</span>}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
