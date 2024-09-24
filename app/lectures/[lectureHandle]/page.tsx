'use client'

import React from 'react'
import Link from 'next/link'
import { LiveTranscript } from '@/components/LiveTranscript'
import Video from '@/components/Video'
import { lectures } from '@/lib/lectures'
import { AnimatePresence, motion } from 'framer-motion'
import { SkipBack, SkipForward } from 'lucide-react'

/**
 * --- Lecture ---
 * Key point
 * Studies / papers
 * Recommended books
 * Person (wiki)
 *
 * --- Me ---
 * Learn more (videos, articles, etc.)
 * Diagrams (highlight parts of the brain dynamically etc)
 */

/**
 * Settings to build:
 * clicking link pauses video?
 */

const LecturePage = ({ params }: { params: { lectureHandle: string } }) => {
  const lecture = lectures[parseInt(params.lectureHandle) - 1]
  const [currentTime, setCurrentTime] = React.useState(0)
  const [isPlaying, setIsPlaying] = React.useState(false)

  // Increment currentTime when isPlaying is true
  React.useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTime(prevTime => prevTime + 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isPlaying])

  return (
    <div className="grid grid-cols-12 gap-x-16">
      <div className="col-span-12 flex h-full flex-col gap-4 p-4 md:col-span-7 md:p-0 lg:gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h1 className="font-serif text-stone-400">
              {lecture.title} | Lecture {parseInt(params.lectureHandle)}
            </h1>
            <div className="flex gap-1 text-xs text-stone-400">
              <Link href={`/lectures/${parseInt(params.lectureHandle) - 1}`} className="flex items-center gap-0.5">
                <SkipBack className="size-3" />
                <div>Prev</div>
              </Link>

              <Link href={`/lectures/${parseInt(params.lectureHandle) + 1}`} className="flex items-center gap-0.5">
                <span>Next</span>
                <SkipForward className="size-3" />
              </Link>
            </div>
          </div>
          <Video videoId={lecture.videoId} onTimeUpdate={setCurrentTime} onPlay={setIsPlaying} />
        </div>

        <LiveTranscript srtPath={lecture.srt!} currentTime={currentTime} />
      </div>
      <div className="hidden flex-col gap-4 p-1 md:col-span-5 md:flex">
        <h2 className="font-serif text-stone-400">Notes & Materials</h2>
        <div className="flex flex-col gap-6">
          <AnimatePresence mode="popLayout">
            {lecture.annotations
              ?.filter(annotation => Number(annotation.start) < currentTime && Number(annotation.end) > currentTime)
              .map(annotation => {
                return (
                  <motion.div
                    key={`${annotation.type}-${annotation.start}`}
                    layout="preserve-aspect"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  >
                    {annotation.comp}
                  </motion.div>
                )
              })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default LecturePage
