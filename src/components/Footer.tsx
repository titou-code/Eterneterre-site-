import Logo from './Logo'

const footerLinks = [
  { label: 'Notre métier', href: '#metier' },
  { label: 'Espèces', href: '#especes' },
  { label: 'Services', href: '#services' },
  { label: 'Espèces locales', href: '#locales' },
  { label: 'Contact', href: '#contact' },
  { label: 'Mentions légales', href: '#mentions-legales' },
]

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="py-5 bg-blanc border-t border-lichen/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Logo — taille 2× via transform (hauteur footer inchangée) */}
          <Logo
            className="h-12 sm:h-14 w-auto"
            imgStyle={{ transform: 'scale(2)', transformOrigin: 'left center' }}
          />

          {/* Liens centrés */}
          <nav className="flex-1 flex flex-wrap justify-center gap-5">
            {footerLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-xs tracking-wide text-ardoise/50 hover:text-foret transition-colors duration-300 no-underline"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Copyright à droite */}
          <p className="font-body text-xs text-ardoise/40 whitespace-nowrap">
            © {YEAR} Eterneterre. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
