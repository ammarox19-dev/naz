import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpLeft } from 'lucide-react'
import { ProjectCard } from '@/components/ProjectCard'
import { Reveal } from '@/components/Reveal'
import { Button } from '@/components/ui/button'
import { fallbackProjects, type Project } from '@/data/fallbackProjects'
import { getFeaturedProjects } from '@/lib/sanity'

export function SelectedWork() {
  const [projects, setProjects] = useState<Project[]>(
    fallbackProjects.filter((project) => project.featured),
  )

  useEffect(() => {
    let isMounted = true

    getFeaturedProjects().then((sanityProjects) => {
      if (isMounted && sanityProjects.length > 0) {
        setProjects(sanityProjects)
      }
    })

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section id="work" className="bg-[var(--page)] py-16 sm:py-24">
      <div className="section-shell">
        <Reveal className="grid gap-5 border-b border-[var(--line)] pb-8 md:grid-cols-[0.78fr_1fr] md:items-end">
          <div>
            <p className="section-label">Selected Work</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-[var(--ink)] sm:text-5xl">
              أعمال مختارة
            </h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-base leading-8 text-[var(--ink-soft)]">
              مشاريع مختارة توضّح كيف يتحول التصميم إلى حضور مفهوم، مرتب، وسهل التذكر.
            </p>
            <Button asChild variant="outline" className="mt-5" data-cursor="link">
              <Link to="/projects">
                استعرض كل المشاريع
                <ArrowUpLeft className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((project, index) => (
            <Reveal key={`${project.slug}-${index}`} delay={index * 65}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
