import type { Project } from '@/data/fallbackProjects'

type HeroProjectShowcaseProps = {
  projects: Project[]
}

function pickProject(projects: Project[]) {
  return projects.find((project) => project.coverImage || project.gallery?.length) ?? projects[0]
}

export function HeroProjectShowcase({ projects }: HeroProjectShowcaseProps) {
  const project = pickProject(projects)
  const image = project?.coverImage ?? project?.gallery?.[0]

  return (
    <figure className="surface-card relative overflow-hidden rounded-[2rem] p-3">
      <div className="relative aspect-[1.08/1] overflow-hidden rounded-[1.45rem] bg-[var(--card-solid)]">
        {image ? (
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover"
            loading="eager"
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-[linear-gradient(135deg,var(--naz-white),color-mix(in_srgb,var(--naz-blue)_10%,var(--naz-white)))]">
            <div className="text-center">
              <span dir="ltr" className="font-display text-8xl text-[var(--ink)]/16 sm:text-9xl">
                NAZ
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--naz-blue)]">
                Visual System
              </p>
            </div>
          </div>
        )}
      </div>

      <figcaption className="flex items-center justify-between gap-4 px-2 py-4 text-sm">
        <span className="font-medium text-[var(--ink)]">{project?.title ?? 'NAZ System'}</span>
        <span className="text-[var(--ink-muted)]">{project?.category ?? 'Visual Direction'}</span>
      </figcaption>
    </figure>
  )
}
