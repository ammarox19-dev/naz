import { useMemo, useState } from 'react'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { ProjectContentBlocks } from '@/components/project/ProjectContentBlocks'
import { ProjectGallery } from '@/components/project/ProjectGallery'
import { ProjectHero } from '@/components/project/ProjectHero'
import { ProjectInfoGrid } from '@/components/project/ProjectInfoGrid'
import { ProjectMeta } from '@/components/project/ProjectMeta'
import { Reveal } from '@/components/Reveal'
import { fallbackProjects, type Project } from '@/data/fallbackProjects'
import { applyTheme, type ThemeMode } from '@/lib/theme'

const projectLayouts: NonNullable<Project['projectLayout']>[] = [
  'minimal',
  'editorial',
  'cinematic',
  'grid',
  'split',
]

const galleryLayouts: NonNullable<Project['galleryLayout']>[] = [
  'grid',
  'fullWidth',
  'masonry',
  'mixed',
  'carousel',
]

export function ProjectPreview() {
  const [projectLayout, setProjectLayout] = useState<NonNullable<Project['projectLayout']>>('editorial')
  const [galleryLayout, setGalleryLayout] = useState<NonNullable<Project['galleryLayout']>>('grid')
  const [themeMode, setThemeMode] = useState<ThemeMode>('light')

  const project = useMemo<Project>(() => {
    const baseProject = fallbackProjects[0]

    return {
      ...baseProject,
      projectLayout,
      galleryLayout,
      themeMode,
    }
  }, [galleryLayout, projectLayout, themeMode])

  return (
    <main className="min-h-screen bg-[var(--page)] text-[var(--ink)]">
      <Navbar />
      <section className="section-shell pb-10 pt-32 sm:pt-40">
        <Reveal className="grid gap-8 border-b border-[var(--line)] pb-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="section-label">Project Preview</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight sm:text-7xl">
              معاينة شكل المشروع
            </h1>
          </div>
          <p className="max-w-xl leading-8 text-[var(--ink-soft)]">
            صفحة لاختبار projectLayout و galleryLayout و themeMode بنفس مكونات المشروع الحقيقية.
          </p>
        </Reveal>

        <Reveal className="mt-6 grid gap-3 rounded-[1.6rem] border border-[var(--line)] bg-[var(--card-solid)] p-4 md:grid-cols-3">
          <label className="grid gap-2 text-sm font-medium text-[var(--ink-soft)]">
            Project Layout
            <select className="rounded-full border border-[var(--line)] bg-[var(--page)] px-4 py-2 text-[var(--ink)]" value={projectLayout} onChange={(event) => setProjectLayout(event.target.value as NonNullable<Project['projectLayout']>)}>
              {projectLayouts.map((layout) => <option key={layout}>{layout}</option>)}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium text-[var(--ink-soft)]">
            Gallery Layout
            <select className="rounded-full border border-[var(--line)] bg-[var(--page)] px-4 py-2 text-[var(--ink)]" value={galleryLayout} onChange={(event) => setGalleryLayout(event.target.value as NonNullable<Project['galleryLayout']>)}>
              {galleryLayouts.map((layout) => <option key={layout}>{layout}</option>)}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium text-[var(--ink-soft)]">
            Theme Mode
            <select className="rounded-full border border-[var(--line)] bg-[var(--page)] px-4 py-2 text-[var(--ink)]" value={themeMode} onChange={(event) => {
              const next = event.target.value as ThemeMode
              setThemeMode(next)
              applyTheme(next)
            }}>
              <option value="light">light</option>
              <option value="dark">dark</option>
            </select>
          </label>
        </Reveal>
      </section>

      <article className="pb-20">
        <ProjectHero project={project} />
        <ProjectInfoGrid project={project} />
        <ProjectGallery project={project} />
        <ProjectMeta project={project} />
        <ProjectContentBlocks project={project} />
      </article>
      <Footer />
    </main>
  )
}
