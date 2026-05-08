import { Reveal } from '@/components/Reveal'

const values = ['وضوح استراتيجي', 'ثقة بصرية', 'نظام قابل للتطبيق', 'أثر طويل']

export function ValueStrip() {
  return (
    <section className="border-y border-white/8 bg-[var(--naz-black)] py-4">
      <Reveal className="section-shell grid gap-3 text-sm text-white/58 sm:grid-cols-4">
        {values.map((value, index) => (
          <div
            key={value}
            className="flex items-center justify-between rounded-full border border-white/8 bg-white/[0.025] px-4 py-3"
          >
            <span>{value}</span>
            <span className="font-display text-lg text-[var(--naz-cyan)]">
              0{index + 1}
            </span>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
