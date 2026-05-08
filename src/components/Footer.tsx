import { Link } from 'react-router-dom'
import { SocialLinks } from '@/components/SocialLinks'

const links = [
  ['الرئيسية', '/'],
  ['من هو ناز', '/about'],
  ['الأعمال', '/projects'],
  ['الخدمات', '/#services'],
  ['التواصل', '/#contact'],
  ['معاينة مشروع', '/project-preview'],
]

export function Footer() {
  return (
    <footer className="footer-shell">
      <div className="section-shell">
        <div className="footer-main">
          <div>
            <p dir="ltr" className="font-display text-5xl leading-none text-[var(--ink)]">NAZ</p>
            <p className="mt-3 text-sm text-[var(--ink-soft)]">اصنع إرثك</p>
          </div>

          <nav className="footer-links" aria-label="روابط الفوتر">
            {links.map(([label, href]) => (
              <Link
                key={href}
                to={href}
                className="transition-colors hover:text-[var(--naz-blue)]"
                data-cursor="link"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <SocialLinks />
          <p>© NAZ — All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
