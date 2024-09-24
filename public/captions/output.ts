import fs from 'fs'
import path from 'path'

const PARAGRAPH_BREAK = '[BREAK]'

type ParsedCaptions = {
  start: number
  end: number
  subtitles: { start: number; end: number; text: string }[]
}[]

const output: ParsedCaptions = [
  {
    start: 0.67,
    end: 3.98,
    subtitles: [{ start: 0.67, end: 3.98, text: '[Music]' }],
  },
  {
    start: 4.43,
    end: 7.52,
    subtitles: [{ start: 4.43, end: 7.52, text: 'Stanford University' }],
  },
  {
    start: 8.57,
    end: 17.22,
    subtitles: [
      { start: 8.57, end: 13.38, text: "This is BIO 150 isn't it? Okay, I just" },
      { start: 13.38, end: 17.22, text: 'wanted to make sure.' },
    ],
  },
  {
    start: 17.22,
    end: 29.429,
    subtitles: [
      { start: 13.38, end: 17.22, text: 'Okay, so we start off' },
      { start: 17.22, end: 21.09, text: 'with a scenario. 40 year old guy - quiet' },
      { start: 21.09, end: 25.08, text: 'suburban life. Married 15 years, two' },
      { start: 25.08, end: 27.359, text: 'kids, three and a half dogs, everything' },
      { start: 27.359, end: 29.429, text: "standard, everything's going wonderfully." },
    ],
  },
]

const parseSRT = (srtContent: string): ParsedCaptions => {
  // Split the content into individual subtitle entries
  const entries = srtContent.trim().split('\n\n')

  const output: ParsedCaptions = []
  let currentGroup: ParsedCaptions[number] | null = null

  entries.forEach(entry => {
    const lines = entry.split('\n')
    // Extract timecodes and text
    const [captionNumberOrParagraphBreak, timecodes, ...textLines] = lines

    if (captionNumberOrParagraphBreak === PARAGRAPH_BREAK) {
      if (currentGroup) {
        output.push(currentGroup)
      }
      currentGroup = null
    } else {
      const [start, end] = timecodes.split(' --> ').map(parseTimecode)
      const text = textLines.join(' ').trim()
      const [beforeBreak, afterBreak] = text.split(PARAGRAPH_BREAK).map(t => t.trim())

      // There's a [BREAK] in the text
      // Add the beforeBreak to the current group
      // Create a new group for the afterBreak
      if (afterBreak) {
        if (currentGroup) {
          currentGroup.subtitles.push({ start, end, text: beforeBreak })
        } else {
          currentGroup = { start, end, subtitles: [{ start, end, text: afterBreak }] }
        }

        output.push(currentGroup)
        // Set currentGroup to the new group
        currentGroup = { start, end, subtitles: [{ start, end, text: afterBreak }] }
      } else {
        if (!currentGroup) {
          currentGroup = { start, end, subtitles: [] }
        }

        currentGroup.end = Math.max(currentGroup.end, end)
        currentGroup.subtitles.push({ start, end, text })
      }
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

// Usage:
const srtPath = path.join(__dirname, '1.srt')
const srtContent = fs.readFileSync(srtPath, 'utf-8')
const parsedOutput = parseSRT(srtContent)
//
// console.log(JSON.stringify(parsedOutput, null, 2))
// Only print out the first 10 lines
console.log(JSON.stringify(parsedOutput.slice(0, 10), null, 2))
