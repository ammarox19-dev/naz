import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'article' | 'li'
  style?: CSSProperties
}

export function Reveal({
  children,
  className,
  delay = 0,
  as: Comp = 'div',
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.16, rootMargin: '0px 0px -70px' },
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <Comp
      ref={ref as never}
      className={cn('reveal-motion', isVisible && 'is-visible', className)}
      style={
        {
          ...style,
          '--reveal-delay': `${delay}ms`,
        } as CSSProperties
      }
    >
      {children}
    </Comp>
  )
}
