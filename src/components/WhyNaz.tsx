const reasons = [
  ['وضوح', 'كل رسالة بصرية يجب أن تُفهم بسرعة وبدون ضجيج.'],
  ['ثقة', 'المظهر ليس زينة، بل إشارة مبكرة على جدية المشروع.'],
  ['نظام', 'الهوية القوية قابلة للتكرار والتطوير عبر المنصات.'],
  ['أثر', 'التصميم الجيد يترك ذاكرة، لا مجرد إعجاب عابر.'],
]

export function WhyNaz() {
  return (
    <section className="bg-[#080C10] py-24 sm:py-32">
      <div className="section-shell">
        <div className="reveal max-w-4xl">
          <p className="text-sm text-muted-foreground">لماذا NAZ؟</p>
          <h2 className="mt-4 text-balance text-4xl font-medium leading-tight text-foreground sm:text-6xl">
            تصميم لا يكتفي بأن يبدو جميلًا.
          </h2>
          <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
            الجمال وحده لا يكفي. التصميم الجيد يجب أن يشرح، يقنع، ويرفع قيمة
            المشروع في عين الجمهور. لذلك كل قرار بصري في NAZ له سبب.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {reasons.map(([title, text], index) => (
            <article
              key={title}
              className="reveal rounded-[2rem] border border-white/10 bg-[#0D131A] p-7 transition-colors duration-300 hover:bg-white/6"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <h3 className="text-3xl font-medium text-foreground">{title}</h3>
              <p className="mt-4 leading-8 text-white/66">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
