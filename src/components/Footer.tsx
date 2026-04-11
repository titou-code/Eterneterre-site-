import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="py-12 bg-ardoise">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-blanc">
            <Logo />
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {['Notre métier', 'Espèces', 'Services', 'Produits', 'Contact'].map((l) => (
              <a
                key={l}
                href={`#${l === 'Notre métier' ? 'metier' : l.toLowerCase()}`}
                className="font-body text-xs tracking-wide text-blanc/40 hover:text-blanc/70 transition-colors duration-300 no-underline"
              >
                {l}
              </a>
            ))}
          </nav>

          <p className="font-body text-xs text-blanc/30">
            © {new Date().getFullYear()} Eterneterre
          </p>
        </div>
      </div>
    </footer>
  )
}
