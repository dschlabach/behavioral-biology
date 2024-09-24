import Book, { BookProps } from '@/components/Book'
import Explanation, { ExplanationProps } from '@/components/Explanation'
import Illustration, { IllustrationProps } from '@/components/Illustration'
import KeyPoint, { KeyPointProps } from '@/components/KeyPoint'
import Person from '@/components/Person'
import Quote, { QuoteProps } from '@/components/Quote'
import Study, { StudyProps } from '@/components/Study'
import Wiki, { WikiProps } from '@/components/Wiki'
import { timestampToSeconds } from '@/utils'

export const DEFAULT_DURATION = 30

type AnnotationType = 'person' | 'book' | 'study' | 'wiki' | 'key-point' | 'illustration' | 'quote' | 'explanation'

interface BaseAnnotation {
  type: AnnotationType
  start: `${string}:${string},${string}` | number
  end?: `${string}:${string},${string}` | number
  duration?: string | number
  comp?: React.ReactNode
}

interface PersonAnnotation extends BaseAnnotation {
  type: 'person'
  name: string
  summary: string
  wikipediaSlug: string
  photo: string
}

interface StudyAnnotation extends BaseAnnotation, StudyProps {
  type: 'study'
}

interface WikiAnnotation extends BaseAnnotation, WikiProps {
  type: 'wiki'
}

interface KeyPointAnnotation extends BaseAnnotation, KeyPointProps {
  type: 'key-point'
}

interface IllustrationAnnotation extends BaseAnnotation, IllustrationProps {
  type: 'illustration'
}

interface QuoteAnnotation extends BaseAnnotation, QuoteProps {
  type: 'quote'
}

interface ExplanationAnnotation extends BaseAnnotation, ExplanationProps {
  type: 'explanation'
}

interface BookAnnotation extends BaseAnnotation, BookProps {
  type: 'book'
}

// ... similar interfaces for BookAnnotation, StudyAnnotation, WikiAnnotation
export type Annotation =
  | PersonAnnotation
  | StudyAnnotation
  | WikiAnnotation
  | KeyPointAnnotation
  | IllustrationAnnotation
  | QuoteAnnotation
  | ExplanationAnnotation
  | BookAnnotation

export const renderAnnotation = (annotation: Annotation): React.ReactNode => {
  switch (annotation.type) {
    case 'person':
      return (
        <Person name={annotation.name} summary={annotation.summary} wikipediaSlug={annotation.wikipediaSlug} photo={annotation.photo} />
      )
    case 'study':
      return <Study {...annotation} />
    case 'wiki':
      return <Wiki name={annotation.name} summary={annotation.summary} wikipediaSlug={annotation.wikipediaSlug} photo={annotation.photo} />
    case 'key-point':
      return <KeyPoint text={annotation.text} variant={annotation.variant} />
    case 'illustration':
      return <Illustration src={annotation.src} caption={annotation.caption} />
    case 'quote':
      return <Quote text={annotation.text} author={annotation.author} photo={annotation.photo} />
    case 'explanation':
      return <Explanation text={annotation.text} link={annotation.link} photo={annotation.photo} />
    case 'book':
      return (
        <Book
          title={annotation.title}
          author={annotation.author}
          published={annotation.published}
          summary={annotation.summary}
          link={annotation.link}
          photo={annotation.photo}
        />
      )
  }
}

export const prepareAnnotation = (annotation: Annotation): Annotation & { end: number } => {
  const start = typeof annotation.start === 'string' ? timestampToSeconds(annotation.start) : annotation.start
  const duration =
    typeof annotation.duration === 'string' ? timestampToSeconds(annotation.duration) : annotation.duration ?? DEFAULT_DURATION
  return {
    ...annotation,
    start,
    end: typeof annotation.end === 'string' ? timestampToSeconds(annotation.end) : annotation.end ?? start + duration,
    comp: renderAnnotation(annotation),
  }
}
