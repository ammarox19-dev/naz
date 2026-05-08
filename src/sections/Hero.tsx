import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpLeft } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { fallbackHeroProjects } from '@/data/fallbackHeroProjects'
import type { Project } from '@/data/fallbackProjects'
import { getAllProjects, getHeroProjects, urlFor } from '@/lib/sanity'

const heroWords = [
  { text: 'يرتّب الفكرة', color: '#0062FF' },
  { text: 'يوضّح القيمة', color: '#00A896' },
  { text: 'يصنع أثرًا', color: '#FF0044' },
  { text: 'يبني حضورًا', color: '#4B0082' },
]

function uniqueProjects(projects: Project[]) {
  return projects.filter(
    (project, index, list) => list.findIndex((item) => item.slug === project.slug) === index,
  )
}

function getProjectImage(project: Project | undefined) {
  return urlFor(project?.heroVisualImage || project?.coverImage)
}

export function Hero() {
  const [projects, setProjects] = useState<Project[]>(fallbackHeroProjects())
  const [wordIndex, setWordIndex] = useState(0)
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    let isMounted = true

    Promise.all([getHeroProjects(), getAllProjects()])
      .then(([heroProjects, allProjects]) => {
        if (!isMounted) {
          return
        }

        const nextProjects = heroProjects.length > 0 ? heroProjects : allProjects
        if (nextProjects.length > 0) {
          setProjects(nextProjects.slice(0, 3))
        }
      })
      .catch(() => {
        if (isMounted) {
          setProjects(fallbackHeroProjects())
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setWordIndex((index) => (index + 1) % heroWords.length)
    }, 3600)

    return () => window.clearInterval(timer)
  }, [])

  const selectedProjects = useMemo(() => {
    return uniqueProjects([...projects, ...fallbackHeroProjects()]).slice(0, 3)
  }, [projects])

  useEffect(() => {
    if (isPaused || selectedProjects.length < 2) {
      return
    }

    const timer = window.setInterval(() => {
      setActiveProjectIndex((index) => (index + 1) % selectedProjects.length)
    }, 4800)

    return () => window.clearInterval(timer)
  }, [isPaused, selectedProjects.length])

  const activeWord = heroWords[wordIndex]
  const activeProject = selectedProjects[activeProjectIndex % selectedProjects.length] ?? selectedProjects[0]
  const activeImage = getProjectImage(activeProject)

  return (
    <section id="home" className="naz-director-hero" aria-labelledby="hero-title" dir="rtl">
      <Navbar />
      <div className="naz-director-grid" aria-hidden="true" />
      <div className="naz-director-orbit" aria-hidden="true" />

      <div className="naz-director-shell">
        <div
          className="naz-director-visual"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="naz-director-panel" aria-label="مشاريع مختارة من Sanity">
            <Link
              key={activeProject?.slug}
              to={`/projects/${activeProject?.slug}`}
              className="naz-director-main-card"
              data-cursor="project"
              data-cursor-label="عرض"
              aria-label={`عرض مشروع ${activeProject?.title}`}
            >
              {activeImage ? (
                <img src={activeImage} alt={`صورة مشروع ${activeProject?.title}`} loading="eager" />
              ) : (
                <span className="naz-director-placeholder" dir="ltr">
                  NAZ
                </span>
              )}
              <span className="naz-director-main-shade" aria-hidden="true" />
              <span className="naz-director-info">
                <span className="naz-director-chip">{activeProject?.heroVisualLabel || activeProject?.category}</span>
                <strong>{activeProject?.title}</strong>
                <small>{activeProject?.shortDescription}</small>
              </span>
            </Link>

            <div className="naz-director-progress" aria-hidden="true">
              {selectedProjects.map((project, index) => (
                <span key={project.slug} className={index === activeProjectIndex ? 'is-active' : undefined} />
              ))}
            </div>
          </div>
        </div>

        <div className="naz-director-copy">
          <p className="naz-director-badge">
            <span aria-hidden="true" />
            مصمم بصري / هوية / واجهات
          </p>

          <h1 id="hero-title" className="naz-director-title">
            <span>ناز جرافيك</span>
            <span className="naz-director-word" style={{ color: activeWord.color }}>
              <span key={activeWord.text}>{activeWord.text}</span>
            </span>
            <span>ما يشبهه.</span>
          </h1>

          <p className="naz-director-lead">
            أبني حضورًا بصريًا واضحًا للمشاريع التي تريد أن تُفهم بسرعة وتبقى في الذاكرة.
          </p>

          <div className="naz-director-actions">
            <Button asChild variant="default" size="lg" className="naz-primary-cta" data-cursor="cta">
              <Link to="/#contact">
                ابدأ مشروعك
                <ArrowUpLeft className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="naz-secondary-cta" data-cursor="link">
              <Link to="/projects">شاهد الأعمال</Link>
            </Button>
          </div>

          <div className="naz-director-proof" aria-label="مجالات NAZ">
            <span>هويات</span>
            <span>واجهات</span>
            <span>حملات</span>
          </div>
        </div>
      </div>
    </section>
  )
}
