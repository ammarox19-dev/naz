import { Link } from 'react-router-dom'
import { ArrowUpLeft } from 'lucide-react'
import type { CSSProperties } from 'react'
import type { Project } from '@/data/fallbackProjects'
import { cn } from '@/lib/utils'

type HeroFeaturedProjectsProps = {
  projects: Project[]
}

function stablePick(projects: Project[]) {
  const featured = projects.filter((project) => project.featured)
  const source = featured.length ? featured : projects

  return [...source]
    .sort((a, b) => String(a.slug).localeCompare(String(b.slug)))
    .slice(0, 4)
}

export function HeroFeaturedProjects({ projects }: HeroFeaturedProjectsProps) {
  const shownProjects = stablePick(projects)

  return (
    <div className="hero-featured-grid" aria-label="مشاريع مميزة">
      {shownProjects.map((project, index) => (
        <Link
          key={project.slug}
          to={`/projects/${project.slug}`}
          className={cn('hero-mini-card', index === 0 && 'is-main')}
          data-cursor="project"
          data-cursor-label="عرض"
          style={{ '--float-delay': `${index * 0.7}s` } as CSSProperties}
        >
          <div className="hero-mini-media">
            {project.coverImage ? (
              <img src={project.coverImage} alt={`غلاف مشروع ${project.title}`} loading={index === 0 ? 'eager' : 'lazy'} />
            ) : (
              <div className="hero-mini-placeholder">
                <span dir="ltr" className="font-display">NAZ</span>
              </div>
            )}
          </div>
          <div className="hero-mini-body">
            <div>
              <p>{project.category}</p>
              <h3>{project.title}</h3>
            </div>
            <ArrowUpLeft className="size-4" />
          </div>
        </Link>
      ))}
    </div>
  )
}
