import { Link } from 'react-router-dom'
import { ArrowUpLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function FooterCTA() {
  return (
    <div className="footer-cta">
      <p className="text-sm font-semibold text-[var(--naz-blue)]">اصنع إرثك</p>
      <div className="mt-3 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-[var(--ink)] sm:text-5xl">
          الوضوح ليس تفصيلًا. بل بداية الحضور.
        </h2>
        <Button asChild variant="default" size="lg" data-cursor="cta">
          <Link to="/#contact">
            ابدأ مشروعك
            <ArrowUpLeft className="size-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
