import { useEffect, useMemo, useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ProjectCard } from '@/components/ProjectCard'
import { Reveal } from '@/components/Reveal'
import { fallbackProjects, type Project } from '@/data/fallbackProjects'
import { getAllProjects } from '@/lib/sanity'
import { cn } from '@/lib/utils'

const filters = [
  { label: 'الكل', terms: ['*'] },
  { label: 'الهوية البصرية', terms: ['Branding', 'Brand Identity', 'Logo'] },
  { label: 'السوشيال ميديا', terms: ['Social Media', 'Campaigns', 'Templates'] },
  { label: 'واجهات وتجارب', terms: ['UI/UX', 'UI Direction'] },
  { label: 'صفحات هبوط', terms: ['Landing Pages', 'Landing Page'] },
  { label: 'اتجاه بصري', terms: ['Visual Direction'] },
  { label: 'حملات', terms: ['Campaigns'] },
  { label: 'شعارات', terms: ['Logo'] },
]

function projectMatches(project: Project, terms: string[]) {
  if (terms.includes('*')) {
    return true
  }

  const haystack = [
    project.category,
    ...(project.tags ?? []),
    ...(project.services ?? []),
  ]
    .join(' ')
    .toLowerCase()

  return terms.some((term) => haystack.includes(term.toLowerCase()))
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects)
  const [activeFilter, setActiveFilter] = useState(filters[0])

  useEffect(() => {
    document.title = 'كل المشاريع — NAZ'

    let isMounted = true

    getAllProjects().then((sanityProjects) => {
      if (isMounted && sanityProjects.length > 0) {
        setProjects(sanityProjects)
      }
    })

    return () => {
      isMounted = false
    }
  }, [])

  const filteredProjects = useMemo(
    () => projects.filter((project) => projectMatches(project, activeFilter.terms)),
    [activeFilter, projects],
  )

  return (
    <main className="min-h-screen bg-[var(--page)] text-[var(--ink)]">
      <Navbar />
      <section className="px-4 pb-12 pt-32 sm:px-6 sm:pt-40">
        <div className="section-shell border-b border-[var(--line)] pb-10">
          <Reveal className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <p className="section-label">Archive</p>
              <h1 className="mt-4 text-5xl font-semibold leading-tight sm:text-7xl lg:text-8xl">
                كل المشاريع
              </h1>
            </div>
            <p className="max-w-2xl text-lg leading-9 text-[var(--ink-soft)]">
              أرشيف مختار لأعمال NAZ، من الهويات إلى الحملات والواجهات.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-shell pb-20">
        <Reveal className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.label}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--naz-blue)]',
                activeFilter.label === filter.label
                  ? 'border-[var(--active-bg)] bg-[var(--active-bg)] text-[var(--active-fg)]'
                  : 'border-[var(--line)] bg-[var(--card-solid)] text-[var(--ink-soft)] hover:border-[var(--naz-blue)] hover:text-[var(--ink)]',
              )}
              data-cursor="button"
            >
              {filter.label}
            </button>
          ))}
        </Reveal>

        {filteredProjects.length > 0 ? (
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <Reveal key={`${project.slug}-${index}`} delay={index * 55}>
                <ProjectCard project={project} index={index} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mt-10 rounded-[1.8rem] border border-[var(--line)] bg-[var(--card-solid)] p-10 text-center">
            <p className="text-2xl font-semibold">لا توجد مشاريع في هذا التصنيف حاليًا.</p>
            <p className="mt-3 text-[var(--ink-soft)]">جرّب تصنيفًا آخر أو عد لاحقًا بعد تحديث الأرشيف.</p>
          </Reveal>
        )}
      </section>

      <Footer />
    </main>
  )
}
