import { Link } from 'react-router-dom'
import { ArrowUpLeft } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import type { Project } from '@/data/fallbackProjects'
import { urlFor } from '@/lib/sanity'

type NextProjectCardsProps = {
  projects: Project[]
}

export function NextProjectCards({ projects }: NextProjectCardsProps) {
  if (projects.length === 0) {
    return null
  }

  return (
    <section className="section-shell">
      <Reveal className="next-projects-shell">
        <div className="next-projects-heading">
          <p className="section-label">أرشيف NAZ</p>
          <h2>مشاريع قد تلهم خطوتك التالية</h2>
        </div>

        <div className="next-projects-grid">
          {projects.map((project, index) => {
            const image = urlFor(project.coverImage || project.heroVisualImage)

            return (
              <Link
                key={`${project.slug}-${index}`}
                to={`/projects/${project.slug}`}
                className="next-project-card"
                data-cursor="project"
                data-cursor-label="عرض"
                aria-label={`عرض مشروع ${project.title}`}
              >
                {image ? (
                  <img
                    src={image}
                    alt={`صورة مشروع ${project.title}`}
                    loading="lazy"
                  />
                ) : (
                  <span className="next-project-placeholder" dir="ltr">
                    NAZ
                  </span>
                )}
                <span className="next-project-overlay" aria-hidden="true" />
                <span className="next-project-content">
                  <small>{project.category} / {project.year}</small>
                  <strong>{project.title}</strong>
                  <em>
                    عرض المشروع
                    <ArrowUpLeft className="size-4" />
                  </em>
                </span>
              </Link>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
