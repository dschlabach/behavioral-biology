'use client'

import { useEffect, useRef } from 'react'
import YouTube from 'react-youtube'

interface VideoProps {
  videoId: string
  onTimeUpdate: (time: number) => void
  onPlay: (isPlaying: boolean) => void
}

export default function Video({ videoId, onTimeUpdate, onPlay }: VideoProps) {
  const playerRef = useRef<YouTube>(null)

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'k' && playerRef.current) {
        const player = playerRef.current.getInternalPlayer()

        if (player.getPlayerState() === YouTube.PlayerState.PLAYING) {
          player.pauseVideo()
          onPlay(false)
        } else {
          player.playVideo()
          onPlay(true)
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [onPlay])

  return (
    <YouTube
      ref={playerRef}
      videoId={videoId}
      className="size-full rounded bg-stone-800"
      iframeClassName="w-full min-h-[400px] rounded"
      onPlay={({ target }) => {
        onPlay(true)
        const currentTime = target.getCurrentTime()
        return onTimeUpdate(currentTime)
      }}
      onPause={({ target }) => {
        onPlay(false)
        const currentTime = target.getCurrentTime()
        return onTimeUpdate(currentTime)
      }}
      onStateChange={({ target }) => {
        onTimeUpdate(target.getCurrentTime())
      }}
      // TODO: handle playback rate change
      opts={{
        width: '100%',
        height: '100%',
        playerVars: {
          autoplay: 0,
          rel: 1,
        },
      }}
    />
  )
  //   return <div className="aspect-[16/9] rounded bg-stone-800" />
}
