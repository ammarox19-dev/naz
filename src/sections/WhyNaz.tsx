import { Reveal } from '@/components/Reveal'

const reasons = [
  ['وضوح', 'التصميم يجب أن يختصر المعنى لا أن يخبئه خلف الزينة.'],
  ['ثقة', 'الانطباع الأول رسالة صامتة عن جودة المشروع وجديته.'],
  ['نظام', 'الهوية القوية تعيش في أكثر من منصة بدون أن تفقد شخصيتها.'],
  ['أثر', 'المهم ليس أن يعجب الناس بالتصميم فقط، بل أن يتذكروك.'],
]

export function WhyNaz() {
  return (
    <section className="bg-[var(--naz-black)] py-24 sm:py-32">
      <div className="section-shell">
        <Reveal className="grid gap-8 border-b border-white/10 pb-12 lg:grid-cols-[1fr_1.1fr]">
          <h2 className="text-balance text-4xl font-medium leading-tight text-white sm:text-6xl">
            تصميم لا يكتفي بأن يبدو جميلًا.
          </h2>
          <p className="text-lg leading-9 text-white/64">
            الجمال وحده لا يكفي. التصميم الجيد يجب أن يشرح، يقنع، ويرفع قيمة
            المشروع في عين الجمهور. لذلك كل قرار بصري في NAZ له سبب.
          </p>
        </Reveal>

        <div className="divide-y divide-white/10">
          {reasons.map(([title, text], index) => (
            <Reveal
              key={title}
              delay={index * 60}
              className="group grid gap-5 py-8 transition md:grid-cols-[0.6fr_1fr_80px]"
            >
              <h3 className="text-3xl font-medium text-white transition group-hover:text-[var(--naz-cyan)]">
                {title}
              </h3>
              <p className="max-w-2xl leading-8 text-white/58">{text}</p>
              <span className="font-display text-5xl text-white/12">0{index + 1}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
