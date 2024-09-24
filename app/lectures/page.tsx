import Link from 'next/link'
import { Lecture, lectures } from '@/lib/lectures'

const LectureCard = ({ lecture, videoHandle }: { lecture: Lecture; videoHandle: string }) => {
  return (
    <Link href={`/lectures/${videoHandle}`} className="flex flex-col rounded border border-stone-700">
      <div className="aspect-video bg-stone-800"></div>
      <div className="p-4">
        <h2 className="text-lg font-bold">{lecture.title}</h2>
        <p className="text-sm text-stone-400">{lecture.description}</p>
      </div>
    </Link>
  )
}

export default function Lectures() {
  return (
    <div className="flex flex-col gap-4">
      <h1>Lectures</h1>
      <div className="grid grid-cols-4 gap-4">
        {lectures.map((lecture, index) => {
          const videoHandle = (index + 1).toString()
          return <LectureCard key={lecture.videoId} lecture={lecture} videoHandle={videoHandle} />
        })}
      </div>
    </div>
  )
}
