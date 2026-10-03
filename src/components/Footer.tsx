import { Link } from 'react-router'
import Logo from './Logo'
import { especes } from '../data/especes'

const navLinks = [
  { label: 'Notre métier', href: '/#metier' },
  { label: 'Services', href: '/#services' },
  { label: 'Dépollution des sols', href: '/#depollution' },
  { label: 'Espèces locales', href: '/#locales' },
  { label: 'Contact', href: '/#contact' },
]

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-blanc border-t border-lichen/30">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Marque */}
          <div className="md:col-span-5">
            <Logo className="h-9" />
            <p className="font-body text-sm text-ardoise/60 leading-relaxed mt-5 max-w-sm">
              Traitement des plantes exotiques envahissantes et dépollution mécanique
              des sols en Bretagne. Arrachage, criblage, broyage, replantation d'espèces locales.
            </p>
            <p className="font-body text-sm text-ardoise/60 mt-4">
              Carnac · Morbihan · Intervention sur toute la Bretagne
            </p>
          </div>

          {/* Espèces traitées — maillage interne vers les pages dédiées */}
          <div className="md:col-span-4">
            <p className="font-body text-xs tracking-[0.25em] uppercase text-terre mb-4">Espèces traitées</p>
            <ul className="space-y-2.5">
              {especes.map((e) => (
                <li key={e.slug}>
                  <Link
                    to={`/especes/${e.slug}`}
                    className="font-body text-sm text-ardoise/70 hover:text-foret transition-colors duration-300 no-underline"
                  >
                    {e.nom} <span className="text-ardoise/40 italic">· {e.latin}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="font-body text-xs tracking-[0.25em] uppercase text-terre mb-4">Le site</p>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="font-body text-sm text-ardoise/70 hover:text-foret transition-colors duration-300 no-underline">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/mentions-legales" className="font-body text-sm text-ardoise/70 hover:text-foret transition-colors duration-300 no-underline">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-lichen/30 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-ardoise/40">
            © {YEAR} Eterneterre. Tous droits réservés.
          </p>
          <a
            href="mailto:nicolas.chinchole@eterneterre.fr"
            className="font-body text-xs text-ardoise/50 hover:text-foret transition-colors duration-300 no-underline"
          >
            nicolas.chinchole@eterneterre.fr
          </a>
        </div>
      </div>
    </footer>
  )
}
