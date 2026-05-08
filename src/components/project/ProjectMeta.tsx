import { Reveal } from '@/components/Reveal'
import type { Project } from '@/data/fallbackProjects'

type ProjectMetaProps = {
  project: Project
}

export function ProjectMeta({ project }: ProjectMetaProps) {
  const rows = [
    ['التحدي', project.challenge],
    ['الحل', project.solution],
    ['النتيجة', project.result],
  ].filter(([, value]) => value)

  return (
    <section className="section-shell mt-14 grid gap-4 lg:grid-cols-3">
      {rows.map(([title, text], index) => (
        <Reveal
          key={title}
          delay={index * 70}
          className="rounded-[1.7rem] border border-[var(--line)] bg-[var(--card-solid)] p-7"
        >
          <p className="text-sm font-semibold text-[var(--naz-blue)]">
            0{index + 1}
          </p>
          <h2 className="mt-6 text-2xl font-semibold text-[var(--ink)]">{title}</h2>
          <p className="mt-4 leading-8 text-[var(--ink-soft)]">{text}</p>
        </Reveal>
      ))}
    </section>
  )
}
