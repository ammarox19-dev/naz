import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ProcessStepCardProps = {
  index: number
  title: string
  text: string
  active: boolean
  children?: ReactNode
}

export function ProcessStepCard({
  index,
  title,
  text,
  active,
  children,
}: ProcessStepCardProps) {
  return (
    <div className={cn('process-step-card', active && 'is-active')} aria-current={active ? 'step' : undefined}>
      <div className="flex items-start gap-4">
        <span className="process-step-number">0{index + 1}</span>
        <div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
      {children ? <div className="process-step-mobile-visual mt-5 lg:hidden">{children}</div> : null}
    </div>
  )
}
