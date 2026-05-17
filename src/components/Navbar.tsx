import { useState, useEffect } from 'react'
import Logo from './Logo'

const links = [
  { label: 'Notre métier', href: '#metier' },
  { label: 'Espèces', href: '#especes' },
  { label: 'Services', href: '#services' },
  { label: 'Espèces locales', href: '#locales' },
]

function smoothScrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-blanc ${
        scrolled ? 'shadow-[0_1px_0_var(--color-lichen)]' : ''
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center px-6 py-4 gap-12">
        {/* Logo — taille 2× via transform (conteneur header inchangé) */}
        <Logo
          className="h-10 sm:h-12 w-auto"
          imgStyle={{ transform: 'scale(2)', transformOrigin: 'left center' }}
        />

        {/* Desktop links — centré grâce à flex-1 */}
        <ul className="hidden md:flex flex-1 items-center justify-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-sm tracking-wide text-ardoise/70 hover:text-foret transition-colors duration-300 no-underline"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop — smooth scroll direct */}
        <button
          onClick={() => smoothScrollTo('contact')}
          className="hidden md:inline-block font-body text-sm font-medium px-5 py-2.5 bg-foret text-blanc rounded-full hover:bg-mousse transition-colors duration-300 cursor-pointer"
        >
          Nous contacter
        </button>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2 ml-auto"
          aria-label="Menu"
          aria-expanded={open}
        >
          <span className={`block h-0.5 bg-foret transition-all duration-300 ${open ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
          <span className={`block h-0.5 bg-foret transition-all duration-300 ${open ? 'opacity-0 w-4' : 'w-4 ml-auto'}`} />
          <span className={`block h-0.5 bg-foret transition-all duration-300 ${open ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-blanc/95 backdrop-blur-md ${
          open ? 'max-h-96 border-b border-lichen' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-lg text-foret no-underline"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => { setOpen(false); smoothScrollTo('contact') }}
              className="font-body text-sm font-medium px-6 py-3 bg-foret text-blanc rounded-full cursor-pointer"
            >
              Nous contacter
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
