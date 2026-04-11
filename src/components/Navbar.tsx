import { useState, useEffect } from 'react'
import Logo from './Logo'

const links = [
  { label: 'Notre métier', href: '#metier' },
  { label: 'Espèces', href: '#especes' },
  { label: 'Services', href: '#services' },
  { label: 'Produits', href: '#produits' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-blanc/90 backdrop-blur-md shadow-[0_1px_0_var(--color-lichen)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <Logo />

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
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

        {/* CTA desktop */}
        <a
          href="#contact"
          className="hidden md:inline-block font-body text-sm font-medium px-5 py-2.5 bg-foret text-blanc rounded-full hover:bg-mousse transition-colors duration-300 no-underline"
        >
          Nous contacter
        </a>

        {/* Mobile burger — lignes organiques asymétriques */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
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
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="font-body text-sm font-medium px-6 py-3 bg-foret text-blanc rounded-full no-underline"
            >
              Nous contacter
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
