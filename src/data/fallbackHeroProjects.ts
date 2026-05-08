import { fallbackProjects } from '@/data/fallbackProjects'

export function fallbackHeroProjects() {
  return fallbackProjects
    .filter((project) => project.heroFeatured || project.featured)
    .sort((a, b) => (a.heroOrder ?? a.order ?? 99) - (b.heroOrder ?? b.order ?? 99))
    .slice(0, 3)
}
