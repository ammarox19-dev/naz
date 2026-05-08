import { HeroProjectCard } from '@/components/HeroProjectCard'
import { fallbackHeroProjects } from '@/data/fallbackHeroProjects'
import type { Project } from '@/data/fallbackProjects'

type HeroProjectBoardProps = {
  projects: Project[]
}

export function HeroProjectBoard({ projects }: HeroProjectBoardProps) {
  const selectedProjects = [...projects, ...fallbackHeroProjects()]
    .filter((project, index, list) => list.findIndex((item) => item.slug === project.slug) === index)
    .slice(0, 3)
  const [mainProject, sideProject, frontProject] = selectedProjects
  const yearLabel = mainProject?.heroYearLabel || mainProject?.year || '2026'
  const visualLabel = mainProject?.heroVisualLabel || mainProject?.category || 'نظام حضور'

  return (
    <div className="hero-project-board hero-reference-board" aria-label="لوحة مشاريع مختارة">
      <div className="hero-board-frame">
        <div className="hero-year-sticker" aria-hidden="true">
          <strong>{yearLabel}</strong>
          <span>{visualLabel}</span>
        </div>

        <HeroProjectCard project={mainProject} className="hero-collage-card hero-collage-main" index={0} />
        <HeroProjectCard project={sideProject} className="hero-collage-card hero-collage-side" index={1} />
        <HeroProjectCard project={frontProject} className="hero-collage-card hero-collage-front" index={2} />

        <span className="hero-board-dash" aria-hidden="true" />
      </div>
    </div>
  )
}
