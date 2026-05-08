import { ArrowUpLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function FinalCTA() {
  return (
    <section id="contact" className="bg-[#0D131A] py-16 sm:py-24">
      <div className="section-shell reveal overflow-hidden rounded-[2rem] border border-white/10 bg-[#080C10] p-8 text-center sm:p-14">
        <p className="font-display text-6xl text-white/12 sm:text-8xl">NAZ</p>
        <h2 className="-mt-6 text-balance text-4xl font-medium leading-tight text-foreground sm:text-6xl">
          جاهز تصنع إرثك؟
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          دعنا نبني حضورًا بصريًا يليق بطموح مشروعك، ويجعل الناس تفهم قيمتك من
          أول نظرة.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="glass" size="xl" className="w-full sm:w-auto">
            <a href="mailto:hello@naz.studio">
              ابدأ مشروعك
              <ArrowUpLeft className="size-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <a href="#work">شاهد الأعمال</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
