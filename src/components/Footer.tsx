import { Link } from 'react-router'
import Logo from './Logo'

const footerLinks = [
  { label: 'Notre métier', href: '/#metier' },
  { label: 'Espèces', href: '/#especes' },
  { label: 'Services', href: '/#services' },
  { label: 'Espèces locales', href: '/#locales' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Mentions légales', href: '/mentions-legales' },
]

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="py-5 bg-blanc border-t border-lichen/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Logo className="h-9 sm:h-10" />

          {/* Liens centrés */}
          <nav className="flex-1 flex flex-wrap justify-center gap-5" aria-label="Pied de page">
            {footerLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="font-body text-xs tracking-wide text-ardoise/50 hover:text-foret transition-colors duration-300 no-underline"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <p className="font-body text-xs text-ardoise/40 whitespace-nowrap">
            © {YEAR} Eterneterre. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
