import { Link } from 'react-router-dom'
import { ArrowUpLeft } from 'lucide-react'
import type { CSSProperties } from 'react'
import type { Project } from '@/data/fallbackProjects'
import { fallbackHeroProjects } from '@/data/fallbackHeroProjects'

type HeroSelectedProjectsProps = {
  projects: Project[]
}

export function HeroSelectedProjects({ projects }: HeroSelectedProjectsProps) {
  const selectedProjects = [...projects, ...fallbackHeroProjects()]
    .filter((project, index, list) => list.findIndex((item) => item.slug === project.slug) === index)
    .slice(0, 3)

  return (
    <div className="hero-selected-projects" aria-label="مشاريع مختارة في الهيرو">
      {selectedProjects.map((project, index) => {
        const visualImage = project.heroVisualImage || project.coverImage

        return (
          <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            className="hero-selected-card"
            data-cursor="project"
            data-cursor-label="عرض"
            style={{ '--stagger': `${index * 80}ms` } as CSSProperties}
          >
            <div className="hero-selected-media">
              {visualImage ? (
                <img
                  src={visualImage}
                  alt={`غلاف مشروع ${project.title}`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              ) : (
                <div className="hero-selected-placeholder">
                  <span dir="ltr" className="font-display">NAZ</span>
                </div>
              )}
            </div>
            <div className="hero-selected-content">
              <div>
                <p>{project.heroVisualLabel || project.category}</p>
                <h3>{project.title}</h3>
                <small>{project.clientName || project.year}</small>
              </div>
              <ArrowUpLeft className="size-4" />
            </div>
          </Link>
        )
      })}
    </div>
  )
}
