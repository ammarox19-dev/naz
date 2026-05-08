import { useEffect, useRef, useState } from 'react'
import { ProcessStepCard } from '@/components/ProcessStepCard'
import { ProcessVisual } from '@/components/ProcessVisual'
import { Reveal } from '@/components/Reveal'
import { cn } from '@/lib/utils'

const steps = [
  ['نفهم', 'ندرس مشروعك، جمهورك، هدفك، والمشكلة التي تريد حلّها بصريًا.'],
  ['نحدد الاتجاه', 'نبني اتجاهًا واضحًا: الشخصية، الرسالة، الأسلوب، الألوان، والمراجع.'],
  ['نصمم', 'نحوّل الاتجاه إلى نظام بصري مرتب، قابل للاستخدام، وواضح.'],
  ['نراجع ونطوّر', 'نزيل الزائد، نقوي التفاصيل، ونصقل الفكرة حتى تصبح أوضح.'],
  ['نسلّم', 'تستلم ملفات منظمة وجاهزة للاستخدام على منصاتك.'],
] as const

const STEP_COUNT = steps.length

function getStepFromProgress(progress: number) {
  const clampedProgress = Math.min(0.999, Math.max(0, progress))
  return Math.min(STEP_COUNT - 1, Math.floor(clampedProgress * STEP_COUNT))
}

export function ScrollProcessSection() {
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLElement | null>(null)
  const frame = useRef<number | null>(null)
  const activeStepRef = useRef(0)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)')

    const readActiveStep = () => {
      const section = sectionRef.current
      if (!section || !mediaQuery.matches) {
        return
      }

      const rect = section.getBoundingClientRect()
      const scrollableDistance = Math.max(1, rect.height - window.innerHeight)
      const progress = Math.min(1, Math.max(0, -rect.top / scrollableDistance))
      const nextStep = getStepFromProgress(progress)

      if (activeStepRef.current !== nextStep) {
        activeStepRef.current = nextStep
        setActiveStep(nextStep)
      }
    }

    const tick = () => {
      readActiveStep()
      frame.current = window.requestAnimationFrame(tick)
    }

    const restart = () => {
      if (frame.current) {
        window.cancelAnimationFrame(frame.current)
      }

      if (mediaQuery.matches) {
        frame.current = window.requestAnimationFrame(tick)
      } else {
        activeStepRef.current = 0
        setActiveStep(0)
        frame.current = null
      }
    }

    restart()
    window.addEventListener('resize', restart)
    mediaQuery.addEventListener('change', restart)

    return () => {
      window.removeEventListener('resize', restart)
      mediaQuery.removeEventListener('change', restart)

      if (frame.current) {
        window.cancelAnimationFrame(frame.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} id="process" className="process-scroll-section bg-[var(--page)]">
      <div className="process-sticky-shell">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="process-steps-column">
            {steps.map(([title, text], index) => (
              <Reveal key={title} delay={index * 55}>
                <ProcessStepCard index={index} title={title} text={text} active={activeStep === index}>
                  <ProcessVisual step={index} />
                </ProcessStepCard>
              </Reveal>
            ))}
          </div>

          <div className="process-visual-column">
            <Reveal>
              <p className="section-label">الطريقة</p>
              <h2 className="mt-3 text-balance text-4xl font-semibold leading-tight text-[var(--ink)] sm:text-5xl">
                كيف تتحول الفكرة إلى حضور واضح؟
              </h2>
              <p className="mt-5 max-w-md leading-8 text-[var(--ink-soft)]">
                خطوات قليلة ومفهومة حتى يعرف العميل أين يبدأ المشروع وأين ينتهي.
              </p>
            </Reveal>

            <Reveal delay={80} className="mt-8 hidden lg:block">
              <ProcessVisual key={activeStep} step={activeStep} />
              <div className="mt-4 flex gap-2">
                {steps.map((step, index) => (
                  <span
                    key={step[0]}
                    className={cn(
                      'h-1 flex-1 rounded-full transition-colors duration-300',
                      activeStep >= index ? 'bg-[var(--active-bg)]' : 'bg-[var(--line)]',
                    )}
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
