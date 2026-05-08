import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { NextProjectCards } from '@/components/project/NextProjectCards'
import { ProjectContentBlocks } from '@/components/project/ProjectContentBlocks'
import { ProjectGallery } from '@/components/project/ProjectGallery'
import { ProjectHero } from '@/components/project/ProjectHero'
import { ProjectInfoGrid } from '@/components/project/ProjectInfoGrid'
import { ProjectMeta } from '@/components/project/ProjectMeta'
import { Button } from '@/components/ui/button'
import { fallbackProjects, type Project } from '@/data/fallbackProjects'
import { getAllProjects, getProjectBySlug } from '@/lib/sanity'

function findFallbackProject(slug?: string) {
  return fallbackProjects.find((project) => project.slug === slug) ?? null
}

function uniqueProjects(projects: Project[]) {
  const seen = new Set<string>()

  return projects.filter((project) => {
    if (seen.has(project.slug)) {
      return false
    }

    seen.add(project.slug)
    return true
  })
}

function pickRandomProjects(projects: Project[], currentSlug?: string, count = 3) {
  return uniqueProjects(projects)
    .filter((project) => project.slug !== currentSlug)
    .sort(() => Math.random() - 0.5)
    .slice(0, count)
}

export function ProjectDetails() {
  const { slug } = useParams()
  const [project, setProject] = useState<Project | null>(() =>
    findFallbackProject(slug),
  )
  const [relatedProjects, setRelatedProjects] = useState<Project[]>(() =>
    pickRandomProjects(fallbackProjects, slug, 3),
  )
  const [isLoading, setIsLoading] = useState(Boolean(slug && !findFallbackProject(slug)))

  useEffect(() => {
    let isMounted = true

    if (!slug) {
      return
    }

    getProjectBySlug(slug).then((sanityProject) => {
      if (!isMounted) {
        return
      }

      if (sanityProject) {
        setProject(sanityProject)
      } else {
        setProject(findFallbackProject(slug))
      }
      setIsLoading(false)
    }).catch(() => {
      if (isMounted) {
        setProject(findFallbackProject(slug))
        setIsLoading(false)
      }
    })

    getAllProjects().then((sanityProjects) => {
      if (!isMounted) {
        return
      }

      const source = sanityProjects.length
        ? uniqueProjects([...sanityProjects, ...fallbackProjects])
        : fallbackProjects

      setRelatedProjects(pickRandomProjects(source, slug, 3))
    }).catch(() => {
      if (isMounted) {
        setRelatedProjects(pickRandomProjects(fallbackProjects, slug, 3))
      }
    })

    return () => {
      isMounted = false
    }
  }, [slug])

  useEffect(() => {
    document.title = project ? `${project.title} — NAZ` : 'مشروع — NAZ'
  }, [project])

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[var(--page)] text-[var(--ink)]">
        <Navbar />
        <section className="section-shell grid min-h-screen place-items-center pt-28 text-center">
          <div>
            <p className="section-label">NAZ</p>
            <h1 className="mt-3 text-5xl font-semibold">جاري تحميل المشروع...</h1>
          </div>
        </section>
      </main>
    )
  }

  if (!project) {
    return (
      <main className="min-h-screen bg-[var(--page)] text-[var(--ink)]">
        <Navbar />
        <section className="section-shell grid min-h-screen place-items-center pt-28 text-center">
          <div>
            <h1 className="text-5xl font-semibold">المشروع غير موجود</h1>
            <Button asChild variant="secondary" className="mt-8">
              <Link to="/projects">العودة لكل المشاريع</Link>
            </Button>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[var(--page)] text-[var(--ink)]">
      <Navbar />
      <article className="pb-20 pt-32 sm:pt-40">
        <ProjectHero project={project} />
        <ProjectInfoGrid project={project} />
        <ProjectGallery project={project} />
        <ProjectMeta project={project} />
        <ProjectContentBlocks project={project} />
        <NextProjectCards projects={relatedProjects} />
      </article>
      <Footer />
    </main>
  )
}
