/**
 * Hero — plein écran avec gradient paysage breton
 * Animations continues : vague flottante + parallax fond
 */
const _foliageSvg = `<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'><path d='M0 165 C18 135 55 100 90 65 C75 98 40 128 0 165Z' fill='#1a4d2e' opacity='0.65'/><path d='M0 165 L90 65' stroke='#1a4d2e' stroke-width='1' opacity='0.35'/><path d='M180 15 C162 45 125 80 90 115 C105 82 140 52 180 15Z' fill='#1a4d2e' opacity='0.65'/><path d='M180 15 L90 115' stroke='#1a4d2e' stroke-width='1' opacity='0.35'/><path d='M10 12 C25 2 50 2 62 12 C50 22 25 22 10 12Z' fill='#4a7c59' opacity='0.5'/><path d='M170 168 C155 178 130 178 118 168 C130 158 155 158 170 168Z' fill='#4a7c59' opacity='0.5'/></svg>`
const _foliageBg = `url("data:image/svg+xml,${encodeURIComponent(_foliageSvg)}")`

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 sm:pt-36 pb-24">
      {/* Fond avec parallax continu */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 hero-bg"
          style={{
            background: `
              linear-gradient(175deg, #3a6b4a 0%, #2d5a3e 25%, #4a7c59 50%, #8b9a6b 70%, #c5b58a 85%, #d4c5a9 100%)
            `,
          }}
        />
        {/* Texture organique */}
        <div
          className="absolute inset-0 opacity-30"
          aria-hidden="true"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 20% 80%, rgba(26,77,46,0.6) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 20%, rgba(139,111,71,0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, rgba(74,124,89,0.2) 0%, transparent 70%)
            `,
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-foret/40" />
      </div>

      {/* Texture feuillage — overlay répété sur tout le hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: _foliageBg,
          backgroundSize: '180px 180px',
          opacity: 0.15,
        }}
      />

      {/* Contenu */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Nom de marque */}
        <h1 className="font-display text-8xl sm:text-9xl md:text-9xl font-light tracking-tight text-blanc mb-8 reveal">
          Eterneterre
        </h1>

        {/* Citation */}
        <p className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-blanc/80 leading-snug mb-8 reveal">
          À chaque espèce son <span className="text-lande">biotope</span>,
          <br />et à chaque biotope ses <span className="text-lande">espèces</span>
        </p>

        {/* Sous-titre */}
        <p className="font-body text-base tracking-[0.3em] uppercase text-blanc/55 mb-10 reveal">
          Traitement des végétaux envahissants
        </p>

        {/* Ligne décorative */}
        <div className="flex justify-center reveal">
          <svg width="120" height="12" viewBox="0 0 120 12" fill="none" aria-hidden="true">
            <path
              d="M2 10C20 2 40 8 60 6C80 4 100 10 118 2"
              stroke="var(--color-lande)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Vague flottante en bas — déborde vers le bas pour éviter la bande verte */}
      <div className="absolute left-0 right-0 hero-wave" style={{ bottom: '-20px' }}>
        <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="w-full" style={{ height: '100px', display: 'block' }} aria-hidden="true">
          <path
            d="M0 40C240 10 480 70 720 40C960 10 1200 60 1440 30V100H0V40Z"
            fill="var(--color-blanc)"
          />
        </svg>
      </div>
    </section>
  )
}
