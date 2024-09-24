import React, { useCallback, useEffect, useState } from 'react'
import { cn } from '@/utils'
import { parseSRT, type ParsedCaptions, type Subtitle } from '@/utils/subtitles'
import { AnimatePresence, motion } from 'framer-motion'

const DevRegenerateSubtitles = ({ onRegenerate }: { onRegenerate: () => void }) => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV !== 'development') return null
  return (
    <button
      onClick={onRegenerate}
      className="fixed left-5 top-5 z-50 flex items-center space-x-2 rounded-full bg-black px-2.5 py-1 font-mono text-xs font-medium text-white"
    >
      Regenerate Subtitles
    </button>
  )
}

export const LiveTranscript = ({ srtPath, currentTime }: { srtPath: string; currentTime: number }) => {
  const [paragraphs, setParagraphs] = useState<ParsedCaptions>([])
  const [regenerateKey, setRegenerateKey] = useState(0)

  const [activeParagraphs, setActiveParagraphs] = useState<ParsedCaptions>([])
  const [activeSubtitles, setActiveSubtitles] = useState<Subtitle[]>([])

  const handleRegenerate = useCallback(() => {
    setRegenerateKey(prev => prev + 1)
  }, [])

  useEffect(() => {
    if (srtPath) {
      fetch(srtPath)
        .then(response => response.text())
        .then(srtData => {
          const parsedParagraphs = parseSRT(srtData)
          setParagraphs(parsedParagraphs)
        })
        // eslint-disable-next-line no-console
        .catch(err => console.error('Error fetching SRT file:', err))
    }
  }, [srtPath, regenerateKey])

  useEffect(() => {
    if (paragraphs.length === 0) return

    // Find the current paragraph
    const currentParagraphIndex = paragraphs.findIndex(paragraph => currentTime <= paragraph.end)

    // Show the current paragraph and the next two
    const paragraphsToShow = paragraphs.slice(currentParagraphIndex, currentParagraphIndex + 3).filter(Boolean)

    setActiveParagraphs(paragraphsToShow)

    // Set active subtitles within the shown paragraphs
    const currentSubtitles = paragraphsToShow.flatMap(paragraph =>
      paragraph.subtitles.filter(subtitle => currentTime >= subtitle.start && currentTime <= subtitle.end)
    )
    setActiveSubtitles(currentSubtitles)
  }, [currentTime, paragraphs])

  return (
    <>
      <DevRegenerateSubtitles onRegenerate={handleRegenerate} />
      <div className="prose max-w-none text-stone-400/70">
        <AnimatePresence mode="popLayout">
          {activeParagraphs.map(paragraph => (
            <motion.div
              key={paragraph.subtitles[0]?.text}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-stone-400/70"
            >
              <motion.p layout="preserve-aspect">
                {paragraph.subtitles.map(subtitle => (
                  <span key={subtitle.text} className={cn(activeSubtitles.includes(subtitle) ? 'text-stone-200/90' : 'text-stone-400/70')}>
                    {subtitle.text}{' '}
                  </span>
                ))}
              </motion.p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  )
}
