import Image from 'next/image'

export interface IllustrationProps {
  src: string
  caption: string | React.ReactNode
  alt?: string
}

const Illustration = ({ src, caption, alt }: IllustrationProps) => {
  const imageAlt = typeof caption === 'string' ? caption : alt || ''

  return (
    <div className="flex flex-col gap-2">
      <Image src={src} alt={imageAlt} width={700} height={700} className="size-full rounded bg-stone-100" />
      <p className="text-xs text-stone-400">{caption}</p>
    </div>
  )
}

export default Illustration
