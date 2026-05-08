import { Link } from 'react-router-dom'
import { ArrowUpLeft, BadgeCheck } from 'lucide-react'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { Reveal } from '@/components/Reveal'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

const beliefs = [
  'الوضوح قبل الزخرفة',
  'الفكرة قبل الشكل',
  'البساطة لا تعني الضعف',
  'الهوية ليست شعارًا فقط',
  'التصميم الجيد يرفع قيمة المشروع',
]

const offers = [
  'هويات بصرية',
  'تصاميم سوشيال ميديا',
  'واجهات وصفحات هبوط',
  'تطوير الظهور البصري',
]

const faqs = [
  {
    question: 'كيف يبدأ المشروع مع NAZ؟',
    answer: 'ترسل فكرة المشروع أو المشكلة البصرية، ثم نرتب الهدف والخدمة المناسبة وخطوة البداية بشكل واضح.',
  },
  {
    question: 'هل أحتاج فكرة جاهزة بالكامل؟',
    answer: 'لا. أقدر أساعدك في ترتيب الفكرة والجمهور والاتجاه قبل ما نبدأ التصميم الفعلي.',
  },
  {
    question: 'ما الفرق بين الهوية والتصميم الجميل؟',
    answer: 'التصميم الجميل يلفت النظر، لكن الهوية الجيدة تخلي مشروعك مفهومًا، ثابتًا، وسهل التذكر.',
  },
  {
    question: 'هل يمكن تطوير هوية موجودة؟',
    answer: 'نعم، إذا كانت قابلة للتطوير يمكن تنظيفها وتنظيم نظامها بدل البدء من الصفر.',
  },
]

export function About() {
  return (
    <main className="min-h-screen bg-[var(--page)] text-[var(--ink)]">
      <Navbar />

      <section className="section-shell pb-16 pt-32 sm:pt-40">
        <Reveal className="about-hero about-hero-polished">
          <div className="about-copy">
            <span className="availability-badge">
              <span className="availability-dot" />
              متوفر لمشاريع مختارة
            </span>
            <p className="section-label mt-7">من هو NAZ؟</p>
            <h1 className="mt-4 max-w-3xl text-balance text-[clamp(2.55rem,5vw,5.35rem)] font-semibold leading-[1.08]">
              مصمم بصري يبني حضورًا <span className="accent-word">واضحًا</span> للمشاريع التي تريد أن تُفهم.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-10 text-[var(--ink-soft)]">
              NAZ يهتم بتحويل الأفكار إلى نظام بصري قوي، هادئ، وسهل الاستخدام. التصميم هنا ليس شكلًا فقط، بل طريقة تجعل الناس تفهم قيمتك بسرعة وتشعر بثقتك من أول نظرة.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" data-cursor="cta">
                <Link to="/#contact">
                  ابدأ مشروعك
                  <ArrowUpLeft className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" data-cursor="link">
                <Link to="/projects">شاهد الأعمال</Link>
              </Button>
            </div>
          </div>

          <figure className="about-portrait-card" aria-label="صورة NAZ الشخصية">
            <img src="/assets/naz-portrait.png" alt="صورة شخصية لـ NAZ" />
            <figcaption>
              <BadgeCheck className="size-4" />
              حضور بصري مبني على وضوح وفكرة
            </figcaption>
          </figure>
        </Reveal>

        <section className="about-thinking-grid">
          <Reveal className="about-statement">
            <p className="section-label">كيف أفكر</p>
            <h2>لا أبدأ من الشكل مباشرة.</h2>
          </Reveal>
          <Reveal delay={80} className="about-text-panel">
            <p>
              أبدأ من الفكرة، الجمهور، والرسالة، ثم أحوّل ذلك إلى نظام بصري يخدم المشروع: ألوان، كتابة، صور، واجهات، وقواعد استخدام تجعل الحضور واضحًا وقابلًا للتوسع.
            </p>
          </Reveal>
        </section>

        <section className="about-values-grid">
          <Reveal className="surface-card about-list-card">
            <h2>ما أؤمن به</h2>
            <div>
              {beliefs.map((item, index) => (
                <p key={item}>
                  <span>0{index + 1}</span>
                  {item}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80} className="surface-card about-list-card is-accent">
            <h2>ماذا أقدم</h2>
            <div className="about-offers">
              {offers.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </Reveal>
        </section>

        <Reveal className="about-faq-card">
          <div>
            <p className="section-label">FAQ</p>
            <h2>أسئلة قبل البداية</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>

      <Footer />
    </main>
  )
}
