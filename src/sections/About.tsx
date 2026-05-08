import { ScrollTextReveal, WordsPullUp } from '@/components/AnimatedText'
import { Reveal } from '@/components/Reveal'

const points = ['فهم قبل التصميم', 'بساطة بدون ضعف', 'شكل يخدم المعنى']

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[var(--naz-black)] py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--naz-cyan),transparent)] opacity-45" />
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-sm text-[var(--naz-cyan)]">من هو NAZ؟</p>
          <h2 className="mt-5 max-w-3xl text-balance text-4xl font-medium leading-tight text-[var(--naz-white)] sm:text-6xl">
            <WordsPullUp text="مصمم يحوّل الفكرة إلى حضور يُفهم بسرعة." highlight={['حضور']} />
          </h2>
        </Reveal>

        <div className="space-y-8">
          <Reveal delay={80}>
            <ScrollTextReveal className="text-2xl leading-[2.1] text-white/72 sm:text-3xl">
              NAZ هو مصمم بصري يهتم بتحويل الأفكار إلى حضور واضح وقوي. أؤمن أن التصميم ليس مجرد شكل، بل طريقة تجعل الناس تفهم قيمتك بسرعة وتشعر بثقتك من أول نظرة.
            </ScrollTextReveal>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-3">
            {points.map((point, index) => (
              <Reveal
                key={point}
                delay={index * 70}
                className="rounded-[1.5rem] border border-white/10 bg-[var(--naz-surface)] p-5"
              >
                <span className="font-display text-4xl text-[var(--naz-cyan)]">
                  0{index + 1}
                </span>
                <p className="mt-5 text-sm font-medium text-white/80">{point}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
