import { ServiceCard } from '@/components/ServiceCard'
import { Reveal } from '@/components/Reveal'
import { services } from '@/data/services'

export function Services() {
  return (
    <section id="services" className="bg-[var(--page-soft)] py-16 sm:py-24">
      <div className="section-shell">
        <Reveal className="grid gap-5 md:grid-cols-[0.75fr_1fr] md:items-end">
          <div>
            <p className="section-label">الخدمات</p>
            <h2 className="mt-3 text-balance text-4xl font-semibold leading-tight text-[var(--ink)] sm:text-5xl">
              خدمات قليلة، لكنها تبني حضورك بوضوح.
            </h2>
          </div>
          <p className="max-w-2xl leading-8 text-[var(--ink-soft)]">
            أربع مسارات عملية: نفهم المشروع، ثم نبني له نظامًا بصريًا مناسبًا للاستخدام اليومي.
          </p>
        </Reveal>

        <div className="mt-9 overflow-hidden rounded-[1.8rem] border border-[var(--line)] bg-[var(--card-solid)]">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index}
              title={service.title}
              description={service.description}
              tags={service.tags}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
