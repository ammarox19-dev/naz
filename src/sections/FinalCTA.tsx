import { Link } from 'react-router-dom'
import { ArrowUpLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/Reveal'

export function FinalCTA() {
  return (
    <section id="contact" className="bg-[var(--page-soft)] px-4 py-16 sm:px-6 sm:py-24" data-cursor="light">
      <Reveal className="final-cta-card section-shell rounded-[2rem] border border-[var(--line)] bg-[var(--naz-black)] p-8 text-[var(--naz-white)] sm:p-12">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-sm font-semibold text-[var(--naz-light-cyan)]">اصنع إرثك</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              الوضوح ليس تفصيلًا، بل بداية الحضور.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
              ابدأ مشروعك مع NAZ ودعنا نحول فكرتك إلى نظام بصري واضح، مرتب، وسهل التذكر.
            </p>
          </div>
          <div className="final-cta-actions flex flex-col gap-3 sm:flex-row md:flex-col">
            <Button asChild variant="secondary" size="lg" data-cursor="cta" className="naz-primary-cta">
              <a href="mailto:hello@naz.studio">
                ابدأ مشروعك
                <ArrowUpLeft className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" data-cursor="link" className="naz-secondary-cta">
              <Link to="/projects">شاهد الأعمال</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
