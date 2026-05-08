import { CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

const items = [
  'ملفات منظمة وسهلة الاستخدام',
  'هوية قابلة للتطبيق على أكثر من منصة',
  'تصاميم تخدم هدفًا واضحًا',
  'تجربة عمل مرتبة وواضحة',
  'تسليم احترافي',
  'اتجاه بصري قابل للتطوير',
]

export function Proof() {
  return (
    <section className="relative overflow-hidden bg-[var(--naz-black)] py-24 text-[var(--naz-white)] sm:py-32">
      <div className="absolute inset-0 naz-grid-bg opacity-10" />
      <div className="section-shell relative z-10">
        <Reveal className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm text-[var(--naz-cyan)]">ما الذي تحصل عليه؟</p>
            <h2 className="mt-4 text-balance text-4xl font-medium leading-tight sm:text-6xl">
              تسليم واضح، قابل للتطبيق، ويخدم حضورك بعد الإطلاق.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/60">
              الفكرة ليست أن تستلم ملفات جميلة فقط، بل نظامًا بصريًا تعرف كيف
              تستخدمه وتطوره في أكثر من مكان.
            </p>
          </div>
          <div className="grid gap-3">
            {items.map((item) => (
              <div
                key={item}
                className="naz-glass-soft flex min-h-20 items-center justify-between gap-5 rounded-[1.5rem] p-5"
              >
                <span className="text-sm font-medium leading-7 text-white/78">{item}</span>
                <CheckCircle2 className="size-5 shrink-0 text-[var(--naz-cyan)]" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
