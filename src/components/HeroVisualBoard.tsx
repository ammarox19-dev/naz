import { HeroSelectedProjects } from '@/components/HeroSelectedProjects'
import type { Project } from '@/data/fallbackProjects'

type HeroVisualBoardProps = {
  projects: Project[]
}

export function HeroVisualBoard({ projects }: HeroVisualBoardProps) {
  const primaryProject = projects[0]
  const year = primaryProject?.heroYearLabel ?? primaryProject?.year ?? new Date().getFullYear()
  const label =
    primaryProject?.heroVisualLabel ||
    primaryProject?.category ||
    'نظام حضور'

  return (
    <div className="hero-visual-board" aria-label="لوحة مشاريع مختارة من NAZ">
      <div className="hero-board-grid" aria-hidden="true" />

      <div className="hero-board-header">
        <div>
          <span className="hero-board-kicker">Selected Work</span>
          <strong>لوحة حضور</strong>
        </div>
        <span className="hero-board-year">{year}</span>
      </div>

      <HeroSelectedProjects projects={projects} />

      <div className="hero-board-footer">
        <span>{label}</span>
        <span dir="ltr">NAZ / 03</span>
      </div>
    </div>
  )
}
