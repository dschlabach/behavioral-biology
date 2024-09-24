import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="w-full">
      <div className="flex h-screen flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="font-serif text-4xl font-bold">Human Behavioral Biology Companion</h1>
          <p className="text-stone-400">Annotations, notes, and visual aides for Dr. Robert Sapolsky's Human Behavioral Biology course.</p>
        </div>
        <Link
          href="/lectures"
          className="group flex items-center gap-1 rounded-md bg-stone-200 px-3 py-2 text-sm text-stone-900 transition-colors hover:bg-stone-300"
        >
          <span>View lectures</span>
          <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </main>
  )
}
