import {
  BriefcaseBusiness,
  Camera,
  CircleDot,
  Mail,
  MessageCircle,
} from 'lucide-react'

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/', icon: Camera },
  { label: 'Behance', href: 'https://behance.net/', icon: BriefcaseBusiness },
  { label: 'Dribbble', href: 'https://dribbble.com/', icon: CircleDot },
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: BriefcaseBusiness },
  { label: 'WhatsApp', href: 'https://wa.me/0000000000', icon: MessageCircle },
  { label: 'Email', href: 'mailto:hello@naz.studio', icon: Mail },
]

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2">
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer' : undefined}
          className="social-button"
          aria-label={label}
          data-cursor="link"
        >
          <Icon className="size-4" />
          <span className="hidden sm:inline">{label}</span>
        </a>
      ))}
    </div>
  )
}
