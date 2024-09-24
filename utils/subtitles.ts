export interface Subtitle {
  start: number
  end: number
  text: string
}

export type ParsedCaptions = {
  start: number
  end: number
  subtitles: Subtitle[]
}[]

const PARAGRAPH_BREAK = '[BREAK]'

export const parseSRT = (srtContent: string): ParsedCaptions => {
  // Split the content into individual subtitle entries
  const entries = srtContent.trim().split('\n\n')

  const output: ParsedCaptions = []
  let currentGroup: ParsedCaptions[number] | null = null

  entries.forEach(entry => {
    const lines = entry.split('\n')
    const [captionNumberOrParagraphBreak, timecodes, ...textLines] = lines

    if (captionNumberOrParagraphBreak === PARAGRAPH_BREAK) {
      if (currentGroup) {
        output.push(currentGroup)
      }
      currentGroup = null
    } else {
      const [start, end] = timecodes.split(' --> ').map(parseTimecode)
      const text = textLines.join(' ').trim()
      const textParts = text
        .split(PARAGRAPH_BREAK)
        .map(t => t.trim())
        .filter(Boolean)

      textParts.forEach((part, index) => {
        if (!currentGroup || index > 0) {
          if (currentGroup) {
            output.push(currentGroup)
          }
          currentGroup = { start, end, subtitles: [] }
        }

        currentGroup.end = Math.max(currentGroup.end, end)
        currentGroup.subtitles.push({ start, end, text: part })
      })
    }
  })

  if (currentGroup) {
    output.push(currentGroup)
  }

  return output
}

// Helper function to convert SRT timecode to seconds (including milliseconds)
const parseTimecode = (timecode: string) => {
  const [time, milliseconds] = timecode.split(',')
  const [hours, minutes, seconds] = time.split(':').map(parseFloat)

  return hours * 3600 + minutes * 60 + seconds + parseFloat(milliseconds) / 1000
}
