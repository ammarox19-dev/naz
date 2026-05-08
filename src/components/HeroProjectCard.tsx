import { Link } from 'react-router-dom'
import type { Project } from '@/data/fallbackProjects'
import { urlFor } from '@/lib/sanity'

type HeroProjectCardProps = {
  project: Project
  className: string
  index: number
}

export function HeroProjectCard({ project, className, index }: HeroProjectCardProps) {
  const visualImage = urlFor(project.heroVisualImage || project.coverImage)

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={className}
      data-cursor="project"
      data-cursor-label="عرض"
      data-hero-card={index}
      aria-label={`عرض مشروع ${project.title}`}
    >
      {visualImage ? (
        <img
          src={visualImage}
          alt={`صورة مشروع ${project.title}`}
          loading={index === 0 ? 'eager' : 'lazy'}
        />
      ) : (
        <span className="hero-project-placeholder" aria-hidden="true">
          <span dir="ltr">NAZ</span>
        </span>
      )}
      <span className="hero-stack-overlay" aria-hidden="true" />
      <span className="hero-stack-meta">
        <small>{project.heroVisualLabel || project.category}</small>
        <strong>{project.title}</strong>
        <em>{project.shortDescription}</em>
      </span>
    </Link>
  )
}
