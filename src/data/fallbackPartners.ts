export type Partner = {
  name: string
  url?: string
  logo?: string
  order?: number
  featured?: boolean
}

export const fallbackPartners: Partner[] = [
  { name: 'NO1 Store', order: 1, featured: true },
  { name: 'Pro Studio', order: 2, featured: true },
  { name: 'Volt Creators', order: 3, featured: true },
  { name: 'Madar Launch', order: 4, featured: true },
  { name: 'Aurum Studio', order: 5, featured: true },
  { name: 'Noor Kit', order: 6, featured: true },
  { name: 'Legacy Mark', order: 7, featured: true },
  { name: 'Northwind', order: 8, featured: true },
  { name: 'Openframe', order: 9, featured: true },
  { name: 'Loomstead', order: 10, featured: true },
]
