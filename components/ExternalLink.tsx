import React from 'react'
import Link from 'next/link'
import { cn } from '@/utils'
import { ArrowUpRight } from 'lucide-react'

interface ExternalLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children, className }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group inline-flex max-w-fit items-center gap-0.5 text-xs text-stone-400 transition-colors hover:text-stone-200',
        className
      )}
    >
      <span className="border-b border-stone-700 group-hover:border-stone-500">{children}</span>
      <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
    </Link>
  )
}

export default ExternalLink
