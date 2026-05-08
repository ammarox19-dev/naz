import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpLeft, Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const links = [
  { label: 'الرئيسية', href: '/' },
  { label: 'الأعمال', href: '/projects' },
  { label: 'الخدمات', href: '/#services' },
  { label: 'من هو ناز', href: '/about' },
  { label: 'تواصل', href: '/#contact' },
]

function isLinkActive(href: string, pathname: string, hash: string) {
  if (href === '/projects') return pathname.startsWith('/projects')
  if (href === '/about') return pathname === '/about'
  if (href === '/') return pathname === '/' && !hash
  if (href.includes('#')) return pathname === '/' && hash === `#${href.split('#')[1]}`
  return false
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6">
      <nav
        aria-label="التنقل الرئيسي"
        className={cn(
          'mx-auto flex max-w-7xl items-center justify-between rounded-[1.35rem] border px-4 py-3 transition-all duration-300 md:px-5',
          isScrolled
            ? 'border-[var(--line)] bg-[var(--nav-bg)] shadow-[0_14px_40px_rgba(8,12,16,0.08)] backdrop-blur-xl'
            : 'border-transparent bg-transparent',
        )}
      >
        <Link
          to="/"
          dir="ltr"
          className="font-display text-3xl leading-none text-[var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--naz-blue)]"
          aria-label="NAZ الصفحة الرئيسية"
          data-cursor="link"
        >
          NAZ
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-[var(--line)] bg-[var(--card)] p-1 md:flex">
          {links.map((link) => {
            const isActive = isLinkActive(link.href, location.pathname, location.hash)

            return (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium text-[var(--ink-soft)] transition-colors hover:bg-[var(--button-secondary-hover)] hover:text-[var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--naz-blue)]',
                  isActive && 'bg-[var(--active-bg)] text-[var(--active-fg)] hover:bg-[var(--active-bg)] hover:text-[var(--active-fg)]',
                )}
                data-cursor="link"
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button asChild variant="secondary" size="sm" className="nav-cta-button naz-primary-cta" data-cursor="cta">
            <Link to="/#contact">
              ابدأ مشروعك
              <ArrowUpLeft className="size-3.5" />
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-[var(--line)] bg-[var(--card-solid)] text-[var(--ink)]"
            aria-label={isOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            data-cursor="link"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="mx-auto mt-3 flex max-w-7xl flex-col gap-1 rounded-[1.35rem] border border-[var(--line)] bg-[var(--nav-bg)] p-2 shadow-[0_18px_52px_rgba(8,12,16,0.1)] backdrop-blur-xl md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-[var(--ink)] transition-colors hover:bg-[var(--button-secondary-hover)]"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  )
}
