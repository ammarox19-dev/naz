import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type CursorState = {
  variant: 'default' | 'link' | 'button' | 'project' | 'cta' | 'light'
  label: string
}

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const frame = useRef<number | null>(null)
  const [cursor, setCursor] = useState<CursorState>({
    variant: 'default',
    label: '',
  })
  const [enabled, setEnabled] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(pointer: fine) and (min-width: 900px) and (prefers-reduced-motion: no-preference)',
    )
    const updateEnabled = () => setEnabled(mediaQuery.matches)

    updateEnabled()
    mediaQuery.addEventListener('change', updateEnabled)

    return () => mediaQuery.removeEventListener('change', updateEnabled)
  }, [])

  useEffect(() => {
    if (!enabled) {
      return
    }

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.18
      current.current.y += (target.current.y - current.current.y) * 0.18

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`
      }

      frame.current = window.requestAnimationFrame(animate)
    }

    frame.current = window.requestAnimationFrame(animate)

    const onMove = (event: MouseEvent) => {
      target.current = { x: event.clientX, y: event.clientY }
      setIsReady(true)

      const element = event.target as HTMLElement | null
      const cursorTarget = element?.closest<HTMLElement>('[data-cursor]')
      const linkTarget = element?.closest<HTMLElement>('a, button')

      if (cursorTarget) {
        setCursor({
          variant:
            (cursorTarget.dataset.cursor as CursorState['variant']) || 'link',
          label: cursorTarget.dataset.cursorLabel || '',
        })
      } else if (linkTarget) {
        setCursor({ variant: 'button', label: '' })
      } else {
        setCursor({ variant: 'default', label: '' })
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMove)

      if (frame.current) {
        window.cancelAnimationFrame(frame.current)
      }
    }
  }, [enabled])

  if (!enabled) {
    return null
  }

  return (
    <div
      ref={cursorRef}
      className={cn('custom-cursor', isReady && 'is-ready', `is-${cursor.variant}`)}
      aria-hidden="true"
    >
      <span className="cursor-ring" />
      <span className="cursor-dot" />
      {cursor.label ? <span className="cursor-label">{cursor.label}</span> : null}
    </div>
  )
}
