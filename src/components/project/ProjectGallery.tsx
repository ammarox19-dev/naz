import { Reveal } from '@/components/Reveal'
import type { Project } from '@/data/fallbackProjects'
import { urlFor } from '@/lib/sanity'
import { cn } from '@/lib/utils'

type ProjectGalleryProps = {
  project: Project
}

function fallbackItems(project: Project) {
  const coverImage = urlFor(project.coverImage)

  return coverImage ? [coverImage] : []
}

export function ProjectGallery({ project }: ProjectGalleryProps) {
  const images = project.gallery?.length ? project.gallery.map((image) => urlFor(image)) : fallbackItems(project)
  const layout = project.galleryLayout ?? 'grid'

  if (images.length === 0) {
    return (
      <section className="section-shell mt-10">
        <Reveal className="image-reveal relative grid h-[520px] place-items-center overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(135deg,var(--naz-white),color-mix(in_srgb,var(--naz-blue)_10%,var(--naz-white)))]">
          <span dir="ltr" className="font-display text-[10rem] text-[var(--ink)]/12 sm:text-[16rem]">
            NAZ
          </span>
        </Reveal>
      </section>
    )
  }

  return (
    <section className="section-shell mt-10">
      <div
        className={cn(
          'grid gap-4',
          layout === 'fullWidth' && 'grid-cols-1',
          layout === 'carousel' && 'auto-cols-[78%] grid-flow-col overflow-x-auto pb-2 md:auto-cols-[42%]',
          layout === 'masonry' && 'md:grid-cols-3',
          layout === 'mixed' && 'md:grid-cols-6',
          layout === 'grid' && 'md:grid-cols-2',
        )}
      >
        {images.map((image, index) => (
          <Reveal
            key={`${image}-${index}`}
            delay={index * 60}
            className={cn(
              'image-reveal overflow-hidden rounded-[1.7rem] border border-[var(--line)] bg-[var(--card-solid)]',
              layout === 'fullWidth' && 'p-0 md:col-span-1',
              layout === 'carousel' && 'snap-start',
              layout === 'masonry' && (index % 3 === 1 ? 'md:row-span-2' : ''),
              layout === 'mixed' && (index === 0 ? 'md:col-span-4' : 'md:col-span-2'),
            )}
          >
            <img
              src={image}
              alt={`صورة من مشروع ${project.title}`}
              className={cn(
                'w-full',
                layout === 'fullWidth' ? 'h-auto max-h-none object-contain' : 'aspect-[1.15/1] object-cover',
                layout === 'masonry' && index % 3 === 1 && 'md:h-full',
              )}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
