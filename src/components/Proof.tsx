import { CheckCircle2 } from 'lucide-react'

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
    <section className="bg-[#F0F4F8] py-24 text-[#080C10] sm:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="reveal">
          <p className="text-sm text-[#080C10]/55">ما الذي تحصل عليه؟</p>
          <h2 className="mt-4 text-balance text-4xl font-medium leading-tight sm:text-6xl">
            نتيجة مرتبة، قابلة للاستخدام، وتفهم طريقها بعد التسليم.
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={item}
              className="reveal flex items-center gap-3 rounded-2xl border border-[#080C10]/10 bg-white/55 p-4"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <CheckCircle2 className="size-5 shrink-0" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
