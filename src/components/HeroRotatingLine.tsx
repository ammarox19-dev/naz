import { useEffect, useState } from 'react'

type HeroRotatingLineProps = {
  words: string[]
}

export function HeroRotatingLine({ words }: HeroRotatingLineProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % words.length)
    }, 2600)

    return () => window.clearInterval(timer)
  }, [words.length])

  return (
    <span className="rotating-line" aria-live="polite">
      {words.map((word, wordIndex) => (
        <span
          key={word}
          className={wordIndex === index ? 'is-active' : ''}
          aria-hidden={wordIndex !== index}
        >
          {word}
        </span>
      ))}
    </span>
  )
}
