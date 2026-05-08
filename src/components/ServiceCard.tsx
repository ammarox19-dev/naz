import type { LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

type ServiceCardProps = {
  index: number
  title: string
  description: string
  tags: string
  icon: LucideIcon
}

export function ServiceCard({
  index,
  title,
  description,
  tags,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <Reveal delay={index * 60}>
      <article className="service-card">
        <div className="service-card-index">
          <span>0{index + 1}</span>
          <span className="service-card-icon">
            <Icon className="size-4" />
          </span>
        </div>
        <h3>{title}</h3>
        <div>
          <p>{description}</p>
          <small>{tags}</small>
        </div>
      </article>
    </Reveal>
  )
}
