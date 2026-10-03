import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import Logo from './Logo'

const links = [
  { label: 'Notre métier', href: '/#metier' },
  { label: 'Espèces', href: '/#especes' },
  { label: 'Services', href: '/#services' },
  { label: 'Espèces locales', href: '/#locales' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  // Sur l'accueil, la barre est transparente (texte clair) tant qu'on est sur le hero
  const onHero = location.pathname === '/' && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Ferme le menu mobile à chaque navigation
  const [lastKey, setLastKey] = useState(location.key)
  if (location.key !== lastKey) {
    setLastKey(location.key)
    setOpen(false)
  }

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        onHero && !open
          ? 'bg-transparent text-blanc'
          : 'bg-blanc/95 backdrop-blur-md text-ardoise shadow-[0_1px_0_var(--color-lichen)]'
      }`}
      aria-label="Navigation principale"
    >
      <div className="mx-auto max-w-7xl flex items-center px-6 py-4 gap-8">
        <Logo light={onHero && !open} />

        {/* Desktop links */}
        <ul className="hidden md:flex flex-1 items-center justify-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                to={l.href}
                className={`font-body text-sm tracking-wide transition-colors duration-300 no-underline ${
                  onHero && !open ? 'text-blanc/80 hover:text-blanc' : 'text-ardoise/70 hover:text-foret'
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/#contact"
          className={`hidden md:inline-block font-body text-sm font-medium px-5 py-2.5 rounded-full transition-colors duration-300 no-underline ${
            onHero && !open ? 'bg-feuille text-foret hover:bg-lande' : 'bg-foret text-blanc hover:bg-mousse'
          }`}
        >
          Nous contacter
        </Link>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden flex flex-col gap-1.5 p-2 ml-auto cursor-pointer ${onHero && !open ? 'text-blanc' : 'text-foret'}`}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          aria-controls="menu-mobile"
        >
          <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
          <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0 w-4' : 'w-4 ml-auto'}`} />
          <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="menu-mobile"
        className={`md:hidden overflow-hidden transition-all duration-500 bg-blanc/95 backdrop-blur-md ${
          open ? 'max-h-[28rem] border-b border-lichen' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-5 py-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link to={l.href} className="font-display text-lg text-foret no-underline">
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              to="/#contact"
              className="font-body text-sm font-medium px-6 py-3 bg-foret text-blanc rounded-full no-underline"
            >
              Nous contacter
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
