import Image from 'next/image'

export interface QuoteProps {
  text: string
  author?: string
  photo?: any
}

const Quote = ({ text, author, photo }: QuoteProps) => {
  return (
    <div className="flex gap-4 border-l-2 border-stone-800 pl-4">
      {photo && (
        <Image
          src={photo}
          alt={author ?? ''}
          className="aspect-[3/4] shrink-0 overflow-hidden rounded border border-stone-800 object-cover"
          width={120}
          height={160}
        />
      )}
      <div className="flex flex-col gap-1.5">
        <p className="text-sm text-stone-400/90">"{text}"</p>
        {author && <p className="text-xs text-stone-400/90">- {author}</p>}
      </div>
    </div>
  )
}

export default Quote
