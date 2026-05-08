import { Link } from 'react-router-dom'
import { ArrowUpLeft } from 'lucide-react'
import type { Project } from '@/data/fallbackProjects'
import { urlFor } from '@/lib/sanity'

type ProjectCardProps = {
  project: Project
  featured?: boolean
  index?: number
}

export function ProjectCard({ project, featured, index = 0 }: ProjectCardProps) {
  const coverImage = urlFor(project.coverImage)

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="project-card group flex h-full min-h-[520px] flex-col overflow-hidden rounded-[1.6rem] border border-[var(--line)] bg-[var(--card-solid)] outline-none transition duration-500 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[var(--naz-blue)]"
      data-cursor="project"
      data-cursor-label="عرض"
      style={{ transitionDelay: `${index * 35}ms` }}
    >
      <div className={featured ? 'aspect-[1.28/1] shrink-0' : 'aspect-[1.18/1] shrink-0'}>
        {coverImage ? (
          <img
            src={coverImage}
            alt={`غلاف مشروع ${project.title}`}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
            loading="lazy"
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-[linear-gradient(135deg,var(--naz-white),color-mix(in_srgb,var(--naz-blue)_9%,var(--naz-white)))]">
            <div className="text-center">
              <span dir="ltr" className="font-display text-7xl text-[var(--ink)]/16 sm:text-8xl">
                NAZ
              </span>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--naz-blue)]">
                {project.category}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-4 text-xs text-[var(--ink-muted)]">
          <span>{project.clientName || project.category}</span>
          <span>{project.year}</span>
        </div>
        <div className="mt-3 flex items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold leading-tight text-[var(--ink)]">
              {project.title}
            </h3>
            <p className="mt-1 text-xs font-medium text-[var(--ink-muted)]">{project.category}</p>
          </div>
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[var(--line)] text-[var(--ink)] transition group-hover:border-[var(--naz-blue)] group-hover:text-[var(--naz-blue)]">
            <ArrowUpLeft className="size-4" />
          </span>
        </div>
        <p className="mt-3 line-clamp-2 text-sm leading-7 text-[var(--ink-soft)]">
          {project.shortDescription}
        </p>
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {(project.tags ?? project.services ?? []).slice(0, 2).map((tag, tagIndex) => (
            <span key={`${tag}-${tagIndex}`} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--ink-muted)]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
