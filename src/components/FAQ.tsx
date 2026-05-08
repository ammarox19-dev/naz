import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  [
    'كيف أبدأ مشروع مع NAZ؟',
    'اضغط على زر التواصل، أرسل فكرة مشروعك، وسنحدد معًا الخدمة الأنسب والخطوة التالية.',
  ],
  [
    'هل أحتاج أن تكون فكرتي جاهزة بالكامل؟',
    'ليس بالضرورة. يمكننا ترتيب الفكرة وفهم الاتجاه قبل بدء التصميم.',
  ],
  [
    'كم يستغرق تنفيذ المشروع؟',
    'يعتمد على نوع الخدمة وحجم المشروع، ويتم توضيح المدة قبل البداية.',
  ],
  [
    'هل أستلم الملفات النهائية؟',
    'نعم، يتم تسليم الملفات النهائية بشكل منظم وجاهز للاستخدام.',
  ],
  [
    'هل يمكن تطوير هوية موجودة؟',
    'نعم، يمكن تحسين هوية موجودة بدل بنائها من الصفر إذا كانت قابلة للتطوير.',
  ],
]

export function FAQ() {
  return (
    <section className="bg-[#080C10] py-24 sm:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="reveal">
          <p className="text-sm text-muted-foreground">FAQ</p>
          <h2 className="mt-4 text-4xl font-medium leading-tight text-foreground sm:text-6xl">
            أسئلة قبل البداية
          </h2>
        </div>

        <Accordion type="single" collapsible className="reveal w-full">
          {faqs.map(([question, answer], index) => (
            <AccordionItem key={question} value={`item-${index}`}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
