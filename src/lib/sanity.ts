import type { Project } from '@/data/fallbackProjects'

export const sanityConfig = {
  projectId: '7muqw5xz',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: true,
}

const projectFields = `{
  _id,
  title,
  "slug": slug.current,
  "clientName": coalesce(clientName, client),
  "projectRole": coalesce(projectRole, role),
  projectStatus,
  projectDuration,
  industry,
  category,
  year,
  "shortDescription": coalesce(shortDescription, description),
  challenge,
  solution,
  result,
  featured,
  heroFeatured,
  heroOrder,
  order,
  projectLayout,
  galleryLayout,
  themeMode,
  accentColor,
  services,
  deliverables,
  tags,
  "coverImage": coverImage.asset->url,
  "heroVisualImage": heroVisualImage.asset->url,
  heroVisualLabel,
  heroYearLabel,
  heroThemeColor,
  "gallery": gallery[].asset->url,
  "contentBlocks": contentBlocks[]{
    _type,
    title,
    text,
    quote,
    byline,
    caption,
    url,
    stats,
    "image": image.asset->url,
    "images": images[].asset->url,
    "beforeImage": beforeImage.asset->url,
    "afterImage": afterImage.asset->url
  }
}`

const featuredProjectsQuery = `*[_type == "project" && featured == true] | order(coalesce(order, 9999) asc, _createdAt desc) ${projectFields}`
const heroProjectsQuery = `*[_type == "project" && heroFeatured == true] | order(coalesce(heroOrder, 9999) asc, coalesce(order, 9999) asc, _createdAt desc) [0...3] ${projectFields}`
const allProjectsQuery = `*[_type == "project"] | order(coalesce(order, 9999) asc, _createdAt desc) ${projectFields}`
const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] ${projectFields}`
const partnersQuery = `*[_type == "partner" && featured == true] | order(order asc) {
  name,
  "logo": logo.asset->url,
  url,
  order,
  featured
}`

type SanityResponse = {
  result?: Project[] | Project | null
}

type SanityImageSource =
  | string
  | {
      asset?: {
        _ref?: string
        url?: string
      }
    }
  | null
  | undefined

function isSanityConfigured() {
  return Boolean(
    sanityConfig.projectId &&
      sanityConfig.projectId !== 'YOUR_SANITY_PROJECT_ID',
  )
}

export function urlFor(source: SanityImageSource) {
  if (!source) {
    return ''
  }

  if (typeof source === 'string') {
    return source
  }

  if (source.asset?.url) {
    return source.asset.url
  }

  const ref = source.asset?._ref

  if (!ref) {
    return ''
  }

  const [, id, dimensions, format] = ref.match(/^image-(.+)-(\d+x\d+)-(\w+)$/) ?? []

  if (!id || !dimensions || !format) {
    return ''
  }

  return `https://cdn.sanity.io/images/${sanityConfig.projectId}/${sanityConfig.dataset}/${id}-${dimensions}.${format}`
}

async function fetchFromSanity<T>(
  query: string,
  params: Record<string, string> = {},
): Promise<T | null> {
  if (!isSanityConfigured()) {
    return null
  }

  const host = sanityConfig.useCdn ? 'apicdn.sanity.io' : 'api.sanity.io'
  const searchParams = new URLSearchParams({ query })

  Object.entries(params).forEach(([key, value]) => {
    searchParams.set(`$${key}`, JSON.stringify(value))
  })

  const endpoint = `https://${sanityConfig.projectId}.${host}/v${sanityConfig.apiVersion}/data/query/${sanityConfig.dataset}?${searchParams.toString()}`

  try {
    const response = await fetch(endpoint)

    if (!response.ok) {
      throw new Error(`Sanity request failed: ${response.status}`)
    }

    const data = (await response.json()) as SanityResponse

    return (data.result ?? null) as T | null
  } catch (error) {
    console.error('Unable to fetch Sanity data', error)
    return null
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await fetchFromSanity<Project[]>(featuredProjectsQuery)

  return Array.isArray(projects) ? projects : []
}

export async function getHeroProjects(): Promise<Project[]> {
  const projects = await fetchFromSanity<Project[]>(heroProjectsQuery)

  return Array.isArray(projects) ? projects : []
}

export async function getAllProjects(): Promise<Project[]> {
  const projects = await fetchFromSanity<Project[]>(allProjectsQuery)

  return Array.isArray(projects) ? projects : []
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return fetchFromSanity<Project>(projectBySlugQuery, { slug })
}

export async function getNextAndPreviousProjects(currentSlug: string): Promise<{
  next: Project | null
  previous: Project | null
}> {
  const projects = await getAllProjects()
  const index = projects.findIndex((project) => project.slug === currentSlug)

  if (index === -1 || projects.length === 0) {
    return { next: null, previous: null }
  }

  return {
    previous: projects[(index - 1 + projects.length) % projects.length] ?? null,
    next: projects[(index + 1) % projects.length] ?? null,
  }
}

export async function getPartners(): Promise<
  Array<{ name: string; logo?: string; url?: string; order?: number; featured?: boolean }>
> {
  const partners = await fetchFromSanity<
    Array<{ name: string; logo?: string; url?: string; order?: number; featured?: boolean }>
  >(partnersQuery)

  return Array.isArray(partners) ? partners : []
}

export async function fetchProjectsFromSanity(): Promise<Project[]> {
  return getFeaturedProjects()
}
