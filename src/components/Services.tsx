import { services } from '@/data/services'

export function Services() {
  return (
    <section id="services" className="bg-[#080C10] py-24 sm:py-32">
      <div className="section-shell">
        <div className="reveal max-w-3xl">
          <p className="text-sm text-muted-foreground">الخدمات</p>
          <h2 className="mt-4 text-balance text-4xl font-medium leading-tight text-foreground sm:text-6xl">
            خدمات تبني حضورك
          </h2>
          <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
            من الهوية إلى المحتوى، أساعدك على بناء صورة بصرية تجعل مشروعك أوضح،
            أقوى، وأكثر قابلية للتذكر.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <article
                key={service.title}
                className="reveal liquid-glass rounded-[2rem] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="grid size-12 place-items-center rounded-full bg-white/8">
                    <Icon className="size-5 text-foreground" />
                  </div>
                  <span className="font-display text-5xl text-white/16">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-medium text-foreground">
                  {service.title}
                </h3>
                <p className="mt-4 leading-8 text-white/70">{service.description}</p>
                <p className="mt-6 text-sm leading-7 text-white/42">{service.tags}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
