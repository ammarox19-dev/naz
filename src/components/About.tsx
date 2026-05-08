import { Check } from 'lucide-react'

const points = ['فهم قبل التصميم', 'بساطة بدون ضعف', 'شكل يخدم المعنى']

export function About() {
  return (
    <section id="about" className="bg-[#080C10] py-24 sm:py-32">
      <div className="section-shell grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="reveal">
          <p className="text-sm text-muted-foreground">من هو NAZ؟</p>
          <h2 className="mt-4 max-w-2xl text-balance text-4xl font-medium leading-tight text-foreground sm:text-6xl">
            حضور بصري يعرف ماذا يقول قبل أن يلفت النظر.
          </h2>
        </div>

        <div className="reveal space-y-8">
          <p className="text-xl leading-10 text-white/78">
            NAZ هو مصمم بصري يهتم بتحويل الأفكار إلى حضور واضح وقوي. أؤمن أن
            التصميم ليس مجرد شكل، بل طريقة تجعل الناس تفهم قيمتك بسرعة وتشعر
            بثقتك من أول نظرة.
          </p>

          <div className="grid gap-3 sm:grid-cols-3">
            {points.map((point) => (
              <div
                key={point}
                className="liquid-glass flex items-center gap-3 rounded-2xl px-4 py-4 text-sm text-white/82"
              >
                <Check className="size-4 shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <blockquote className="rounded-[2rem] border border-white/10 bg-[#0D131A] p-7 text-2xl leading-10 text-foreground sm:p-9">
            "أنا لا أصمم فقط شكلًا جميلًا، بل أبني حضورًا بصريًا يساعد المشروع
            أن يُرى، يُفهم، ويُتذكر."
          </blockquote>
        </div>
      </div>
    </section>
  )
}
