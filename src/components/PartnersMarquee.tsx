import { useEffect, useState } from 'react'
import { fallbackPartners, type Partner } from '@/data/fallbackPartners'
import { getPartners } from '@/lib/sanity'

type PartnersMarqueeProps = {
  partners?: Partner[]
}

export function PartnersMarquee({ partners = fallbackPartners }: PartnersMarqueeProps) {
  const [items, setItems] = useState<Partner[]>(partners)
  const sortedPartners = [...items]
    .filter((partner) => partner.featured !== false)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
  const marqueeItems = [...sortedPartners, ...sortedPartners]

  useEffect(() => {
    let isMounted = true

    getPartners().then((sanityPartners) => {
      if (isMounted && sanityPartners.length > 0) {
        setItems(sanityPartners)
      }
    })

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section id="partners" className="partners-section bg-[var(--page)] py-8 sm:py-10" aria-label="شركاء NAZ">
      <div className="section-shell">
        <div className="partners-marquee" aria-label="شركاء ومشاريع NAZ">
          <div className="partners-track">
            {marqueeItems.map((partner, index) => (
              partner.logo ? (
                <img key={`${partner.name}-${index}`} className="partner-logo-image" src={partner.logo} alt={partner.name} loading="lazy" />
              ) : (
                <span key={`${partner.name}-${index}`} className="partner-logo-mark" dir="ltr" aria-label={partner.name}>
                  {partner.name}
                </span>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
