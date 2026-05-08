import { useEffect, useState } from 'react'

type HeroRotatingWordProps = {
  words: string[]
}

const wordColors = [
  'var(--naz-blue)',
  'var(--naz-cyan)',
  'var(--naz-green)',
  'var(--naz-purple)',
  'var(--naz-gold)',
]

export function HeroRotatingWord({ words }: HeroRotatingWordProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % words.length)
    }, 3000)

    return () => window.clearInterval(timer)
  }, [words.length])

  return (
    <span className="rotating-word" aria-live="polite">
      {words.map((word, wordIndex) => (
        <span
          key={word}
          className={wordIndex === index ? 'is-active' : ''}
          aria-hidden={wordIndex !== index}
          style={{ color: wordColors[wordIndex % wordColors.length] }}
        >
          {word}
        </span>
      ))}
    </span>
  )
}
