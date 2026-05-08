import { useEffect, useState } from 'react'
import { ArrowUpLeft } from 'lucide-react'
import { fallbackProjects, type Project } from '@/data/fallbackProjects'
import { fetchProjectsFromSanity } from '@/lib/sanity'
import { Button } from '@/components/ui/button'

export function SelectedWork() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    fetchProjectsFromSanity()
      .then((sanityProjects) => {
        if (isMounted && sanityProjects.length > 0) {
          setProjects(sanityProjects)
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section id="work" className="bg-[#0D131A] py-24 sm:py-32">
      <div className="section-shell">
        <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm text-muted-foreground">Selected Work</p>
            <h2 className="mt-4 text-4xl font-medium leading-tight text-foreground sm:text-6xl">
              أعمال مختارة
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            مجموعة من المشاريع التي تعكس طريقة NAZ في بناء حضور بصري واضح،
            فخم، ومؤثر.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="reveal group relative min-h-[420px] overflow-hidden rounded-[2rem] bg-[#080C10] outline outline-1 outline-white/10 transition-transform duration-500 hover:-translate-y-1"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              {project.coverImage ? (
                <img
                  src={project.coverImage}
                  alt={`غلاف مشروع ${project.title}`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center bg-[linear-gradient(135deg,#0D131A_0%,#080C10_52%,#17212B_100%)]">
                  <div className="text-center">
                    <p className="font-display text-8xl text-white/16 sm:text-9xl">
                      NAZ
                    </p>
                    <p className="mt-4 text-sm uppercase text-white/42">
                      {project.category}
                    </p>
                  </div>
                </div>
              )}

              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/48" />

              <div className="absolute inset-x-0 bottom-0 translate-y-5 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:p-8">
                <div className="liquid-glass rounded-[1.5rem] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-white/60">
                        {project.category} / {project.year}
                      </p>
                      <h3 className="mt-2 text-2xl font-medium text-foreground">
                        {project.title}
                      </h3>
                    </div>
                    <Button
                      asChild
                      variant="glass"
                      size="icon"
                      aria-label={`عرض مشروع ${project.title}`}
                    >
                      <a href={`#${project.slug}`}>
                        <ArrowUpLeft className="size-4" />
                      </a>
                    </Button>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-white/72">
                    {project.shortDescription}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {isLoading ? (
          <p className="mt-6 text-center text-sm text-muted-foreground">
            يتم تجهيز الأعمال المختارة...
          </p>
        ) : null}
      </div>
    </section>
  )
}
