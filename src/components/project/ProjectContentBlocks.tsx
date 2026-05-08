import { Reveal } from '@/components/Reveal'
import type { Project, ProjectContentBlock } from '@/data/fallbackProjects'

type ProjectContentBlocksProps = {
  project: Project
}

function renderBlock(block: ProjectContentBlock, index: number, project: Project) {
  switch (block._type) {
    case 'textBlock':
      return (
        <Reveal key={index} className="section-shell max-w-4xl py-10">
          {block.title ? <h2 className="text-4xl font-semibold text-[var(--ink)]">{block.title}</h2> : null}
          {block.text ? <p className="mt-5 text-xl leading-10 text-[var(--ink-soft)]">{block.text}</p> : null}
        </Reveal>
      )
    case 'quoteBlock':
      return (
        <Reveal key={index} className="section-shell py-10">
          <blockquote className="rounded-[1.8rem] border border-[var(--line)] bg-[var(--naz-black)] p-8 text-3xl leading-[1.75] text-[var(--naz-white)] sm:p-10">
            "{block.quote}"
            {block.byline ? <footer className="mt-5 text-sm text-[var(--naz-light-cyan)]">{block.byline}</footer> : null}
          </blockquote>
        </Reveal>
      )
    case 'statsBlock':
      return project.deliverables?.length ? (
        <Reveal key={index} className="section-shell py-10">
          <div className="rounded-[1.8rem] border border-[var(--line)] bg-[var(--card-solid)] p-7 sm:p-9">
            <p className="section-label">داخل المشروع تحصل على</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {project.deliverables.slice(0, 4).map((item) => (
                <div key={item} className="rounded-[1.2rem] border border-[var(--line)] bg-[var(--page)] p-4 text-sm font-semibold text-[var(--ink)]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      ) : null
    case 'imageFull':
      return block.image ? (
        <Reveal key={index} className="section-shell image-reveal overflow-hidden rounded-[1.8rem] border border-[var(--line)]">
          <img src={block.image} alt={block.caption ?? `صورة من مشروع ${project.title}`} className="h-auto w-full object-contain" loading="lazy" />
        </Reveal>
      ) : null
    case 'imageGrid':
      return (
        <Reveal key={index} className="section-shell grid gap-4 py-10 sm:grid-cols-2">
          {(block.images ?? []).map((image) => (
            <img key={image} src={image} alt={block.caption ?? `صورة من مشروع ${project.title}`} className="aspect-[1.1/1] rounded-[1.6rem] border border-[var(--line)] object-cover" loading="lazy" />
          ))}
        </Reveal>
      )
    case 'imageSplit':
      return (
        <Reveal key={index} className="section-shell grid gap-6 py-10 lg:grid-cols-2 lg:items-center">
          {block.image ? <img src={block.image} alt={block.title ?? `صورة من مشروع ${project.title}`} className="aspect-[1.05/1] rounded-[1.7rem] border border-[var(--line)] object-cover" loading="lazy" /> : null}
          <div className="rounded-[1.7rem] border border-[var(--line)] bg-[var(--card-solid)] p-8">
            {block.title ? <h2 className="text-4xl font-semibold text-[var(--ink)]">{block.title}</h2> : null}
            {block.text ? <p className="mt-5 leading-9 text-[var(--ink-soft)]">{block.text}</p> : null}
          </div>
        </Reveal>
      )
    case 'videoBlock':
      return block.url ? (
        <Reveal key={index} className="section-shell py-10">
          <video src={block.url} controls className="w-full rounded-[1.7rem] border border-[var(--line)]" />
        </Reveal>
      ) : null
    case 'beforeAfterBlock':
      return (
        <Reveal key={index} className="section-shell grid gap-4 py-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="rounded-[1.7rem] border border-[var(--line)] bg-[var(--card-solid)] p-8">
            {block.title ? <h2 className="text-4xl font-semibold text-[var(--ink)]">{block.title}</h2> : null}
            {block.text ? <p className="mt-5 leading-9 text-[var(--ink-soft)]">{block.text}</p> : null}
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[block.beforeImage, block.afterImage].map((image, imageIndex) => (
              <div key={imageIndex} className="overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--card-solid)]">
                {image ? (
                  <img src={image} alt={imageIndex === 0 ? 'قبل' : 'بعد'} className="aspect-[1/1] w-full object-cover" loading="lazy" />
                ) : (
                  <div className="grid aspect-[1/1] place-items-center text-[var(--ink-muted)]">{imageIndex === 0 ? 'قبل' : 'بعد'}</div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      )
    default:
      return null
  }
}

export function ProjectContentBlocks({ project }: ProjectContentBlocksProps) {
  if (!project.contentBlocks?.length) {
    return null
  }

  return <>{project.contentBlocks.map((block, index) => renderBlock(block, index, project))}</>
}
