const steps = [
  {
    title: 'نفهم',
    text: 'ندرس مشروعك، جمهورك، هدفك، والمشكلة التي تريد حلها بصريًا.',
  },
  {
    title: 'نحدد الاتجاه',
    text: 'نبني اتجاهًا بصريًا واضحًا: الشخصية، الرسالة، الأسلوب، الألوان، والمراجع.',
  },
  {
    title: 'نصمم',
    text: 'نحوّل الاتجاه إلى نظام بصري متكامل، مرتب، وقابل للاستخدام.',
  },
  {
    title: 'نراجع ونطوّر',
    text: 'نحسن التفاصيل، نزيل الزائد، ونقوي الفكرة حتى تصبح أوضح.',
  },
  {
    title: 'نسلّم',
    text: 'تستلم ملفات منظمة، واضحة، وجاهزة للاستخدام.',
  },
]

export function Process() {
  return (
    <section id="process" className="bg-[#0D131A] py-24 sm:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="reveal lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm text-muted-foreground">الطريقة</p>
          <h2 className="mt-4 text-balance text-4xl font-medium leading-tight text-foreground sm:text-6xl">
            كيف نحول فكرتك إلى حضور واضح؟
          </h2>
          <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
            العمل لا يبدأ مباشرة بالتصميم، بل يبدأ بالفهم. لذلك تمر كل تجربة
            بخطوات واضحة تساعدنا نصل لنتيجة أقوى.
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="reveal grid gap-5 border-t border-white/10 py-7 sm:grid-cols-[120px_1fr]"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span className="font-display text-6xl leading-none text-white/20">
                0{index + 1}
              </span>
              <div>
                <h3 className="text-2xl font-medium text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 leading-8 text-white/66">{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
