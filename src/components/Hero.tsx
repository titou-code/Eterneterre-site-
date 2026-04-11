/**
 * Hero — plein écran avec placeholder paysage breton
 * Overlay vert semi-transparent, typographie Fraunces audacieuse
 * Le titre utilise un mix-blend pour s'intégrer au visuel
 */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Placeholder paysage — gradient simulant un horizon breton */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(175deg, #3a6b4a 0%, #2d5a3e 25%, #4a7c59 50%, #8b9a6b 70%, #c5b58a 85%, #d4c5a9 100%)
            `,
          }}
        />
        {/* Texture organique — motif de bruit subtil via radial-gradient */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 20% 80%, rgba(26,77,46,0.6) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 20%, rgba(139,111,71,0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, rgba(74,124,89,0.2) 0%, transparent 70%)
            `,
          }}
        />
        {/* Overlay vert semi-transparent */}
        <div className="absolute inset-0 bg-foret/40" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Petit label au-dessus */}
        <p className="font-body text-sm tracking-[0.25em] uppercase text-blanc/70 mb-6 reveal">
          Traitement des végétaux envahissants · Bretagne
        </p>

        {/* Titre — Fraunces, grande taille, italic pour le caractère */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light italic leading-[1.1] text-blanc mb-8 reveal">
          À chaque espèce
          <br />
          son <span className="font-semibold not-italic text-lande">biotope</span>,
          <br className="hidden sm:block" />
          {' '}et à chaque biotope
          <br />
          ses <span className="font-semibold not-italic text-lande">espèces</span>
        </h1>

        {/* Ligne décorative organique */}
        <div className="flex justify-center mb-8 reveal">
          <svg width="120" height="12" viewBox="0 0 120 12" fill="none">
            <path
              d="M2 10C20 2 40 8 60 6C80 4 100 10 118 2"
              stroke="var(--color-lande)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
          <a
            href="#contact"
            className="font-body text-base font-medium px-8 py-4 bg-blanc text-foret rounded-full hover:bg-lande hover:text-foret transition-all duration-300 no-underline"
          >
            Nous contacter
          </a>
          <a
            href="#metier"
            className="font-body text-base text-blanc/80 hover:text-blanc transition-colors duration-300 no-underline flex items-center gap-2"
          >
            Découvrir
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Vague organique en bas — transition vers la section suivante */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-16 sm:h-20">
          <path
            d="M0 40C240 10 480 70 720 40C960 10 1200 60 1440 30V80H0V40Z"
            fill="var(--color-blanc)"
          />
        </svg>
      </div>
    </section>
  )
}
