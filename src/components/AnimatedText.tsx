import type { CSSProperties } from 'react'
import { cn } from '@/lib/utils'

type WordsPullUpProps = {
  text: string
  className?: string
  wordClassName?: string
  highlight?: string[]
}

export function WordsPullUp({
  text,
  className,
  wordClassName,
  highlight = [],
}: WordsPullUpProps) {
  const words = text.split(' ')

  return (
    <span className={cn('words-pull-up', className)} aria-label={text}>
      {words.map((word, index) => {
        const normalized = word.replace(/[،.]/g, '')
        const isHighlighted = highlight.includes(normalized)

        return (
          <span className="word-mask" key={`${word}-${index}`} aria-hidden="true">
            <span
              className={cn(
                'word-item',
                isHighlighted && 'text-[var(--naz-cyan)]',
                wordClassName,
              )}
              style={{ '--word-delay': `${index * 70}ms` } as CSSProperties}
            >
              {word}
            </span>
          </span>
        )
      })}
    </span>
  )
}

type ScrollTextRevealProps = {
  children: string
  className?: string
}

export function ScrollTextReveal({ children, className }: ScrollTextRevealProps) {
  const words = children.split(' ')

  return (
    <p className={cn('scroll-text-reveal', className)}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          style={{ '--word-index': index } as CSSProperties}
        >
          {word}{' '}
        </span>
      ))}
    </p>
  )
}
