import { Reveal } from '@/components/Reveal'
import type { Project } from '@/data/fallbackProjects'

type ProjectInfoGridProps = {
  project: Project
}

export function ProjectInfoGrid({ project }: ProjectInfoGridProps) {
  const rows = [
    ['العميل', project.clientName],
    ['السنة', project.year],
    ['الفئة', project.category],
    ['الدور', project.projectRole],
    ['الحالة', project.projectStatus],
  ].filter(([, value]) => value)

  return (
    <section className="section-shell mt-10">
      <Reveal className="project-info-panel">
        <div className="project-info-heading">
          <p className="section-label">Project Info</p>
          <h2>معلومات المشروع</h2>
        </div>

        <div className="project-info-grid">
          {rows.map(([label, value]) => (
            <div key={label?.toString()} className="project-info-item">
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>

        {project.services?.length ? (
          <div className="project-deliverables">
            <span>الخدمات</span>
            <div>
              {project.services.map((service) => (
                <strong key={service}>{service}</strong>
              ))}
            </div>
          </div>
        ) : null}

        {project.deliverables?.length ? (
          <div className="project-deliverables">
            <span>المخرجات</span>
            <div>
              {project.deliverables.map((deliverable) => (
                <strong key={deliverable}>{deliverable}</strong>
              ))}
            </div>
          </div>
        ) : null}
      </Reveal>
    </section>
  )
}
