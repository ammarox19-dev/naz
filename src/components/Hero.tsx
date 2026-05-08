import { ArrowDown, ArrowUpLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/Navbar'

const heroVideo =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#080C10]"
      aria-labelledby="hero-title"
    >
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-[1] bg-[#080C10]/25" />
      <Navbar />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-6 pb-28 pt-36 text-center">
        <p className="animate-fade-rise text-sm font-medium text-white/72 sm:text-base">
          مصمم بصري / هويات / حضور رقمي
        </p>

        <h1
          id="hero-title"
          className="animate-fade-rise-delay mt-7 max-w-6xl text-balance font-display text-5xl font-normal leading-[0.95] tracking-normal text-foreground sm:text-7xl md:text-8xl lg:text-9xl"
        >
          <span dir="ltr" className="font-display inline-block">
            NAZ
          </span>
          <span className="mx-2 text-white/55">—</span>
          أصمم حضورًا بصريًا
          <span className="block text-white/62">يصنع أثرًا.</span>
        </h1>

        <p className="animate-fade-rise-delay-2 mt-8 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
          أساعد المشاريع، العلامات، وصنّاع المحتوى على بناء هوية بصرية واضحة،
          فخمة، وسهلة التذكّر.
        </p>

        <div className="animate-fade-rise-delay-2 mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="glass" size="xl" className="w-full sm:w-auto">
            <a href="#contact">
              ابدأ مشروعك
              <ArrowUpLeft className="size-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <a href="#work">شاهد الأعمال</a>
          </Button>
        </div>
      </div>

      <a
        href="#about"
        className="liquid-glass absolute bottom-6 left-1/2 z-10 grid size-12 -translate-x-1/2 place-items-center rounded-full text-white/80 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label="انتقل إلى التعريف"
      >
        <ArrowDown className="size-4" />
      </a>
    </section>
  )
}
