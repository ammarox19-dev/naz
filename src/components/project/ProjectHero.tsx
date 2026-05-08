import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import type { Project } from '@/data/fallbackProjects'
import { cn } from '@/lib/utils'

type ProjectHeroProps = {
  project: Project
}

export function ProjectHero({ project }: ProjectHeroProps) {
  const isCinematic = project.projectLayout === 'cinematic'
  const isSplit = project.projectLayout === 'split'

  return (
    <section
      className={cn(
        'section-shell grid gap-8 border-b border-[var(--line)] pb-10 lg:items-end',
        isSplit
          ? 'lg:grid-cols-2'
          : isCinematic
          ? 'lg:grid-cols-[0.86fr_1.14fr]'
          : 'lg:grid-cols-[0.78fr_1.22fr]',
      )}
    >
      <Reveal>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--ink-soft)] transition hover:text-[var(--naz-blue)]"
          data-cursor="link"
        >
          <ArrowRight className="size-4" />
          كل المشاريع
        </Link>
        <p className="mt-10 text-sm font-semibold text-[var(--naz-blue)]">
          {project.category} / {project.year}
        </p>
        <h1
          className={cn(
            'mt-4 text-balance font-semibold leading-tight text-[var(--ink)]',
            isCinematic
              ? 'text-5xl sm:text-7xl lg:text-[6.8rem]'
              : 'text-5xl sm:text-7xl lg:text-8xl',
          )}
        >
          {project.title}
        </h1>
      </Reveal>

      <Reveal delay={90}>
        <p className="max-w-2xl text-xl leading-10 text-[var(--ink-soft)]">
          {project.shortDescription}
        </p>
        <div className="mt-7 flex flex-wrap gap-2">
          {[...(project.services ?? []), ...(project.tags ?? [])].slice(0, 6).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--line)] bg-[var(--card-solid)] px-3 py-1.5 text-xs text-[var(--ink-soft)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
