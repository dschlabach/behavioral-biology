import { Lightbulb, X } from 'lucide-react'

export interface KeyPointProps {
  text: string
  variant?: 'key-point' | 'misconception' | 'mistake'
}

const variantToText = {
  'key-point': 'Key point',
  misconception: 'Misconception',
  mistake: 'Mistake',
}

const KeyPoint = ({ text, variant = 'key-point' }: KeyPointProps) => (
  <div className="flex flex-col gap-2 rounded-md bg-stone-900 px-4 py-3 text-sm text-stone-400">
    <div className="flex items-center gap-1 text-xs">
      {variant === 'key-point' ? <Lightbulb className="size-3" /> : <X className="size-4" />}
      <span>{variantToText[variant]}</span>
    </div>
    <div>
      {text.split('\n').map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  </div>
)

export default KeyPoint
