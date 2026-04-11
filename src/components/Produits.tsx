/**
 * Produits — présentation organique avec visuels circulaires
 * Pas de cartes e-commerce : disposition linéaire horizontale avec scroll naturel
 * Cercles avec patterns/textures simulées en CSS
 */

const produits = [
  {
    nom: 'Compost 0/40',
    description: 'Compost grossier idéal pour l\'amendement de sols et la préparation de massifs. Granulométrie 0-40mm.',
    pattern: 'radial-gradient(circle at 30% 40%, #8b6f47 0%, #6b5a3a 30%, #4a3d2a 70%, #3d3322 100%)',
    accent: 'text-terre',
  },
  {
    nom: 'Compost 0/10',
    description: 'Compost fin tamisé, prêt à l\'emploi pour les plantations, le terreautage et les espaces verts.',
    pattern: 'radial-gradient(circle at 60% 30%, #6b5a3a 0%, #5a4d32 40%, #4a3d2a 80%, #3d3322 100%)',
    accent: 'text-terre',
  },
  {
    nom: 'Bois & plaquettes',
    description: 'Plaquettes de bois calibrées pour le paillage de massifs, les allées et les aires de jeux.',
    pattern: 'radial-gradient(circle at 40% 60%, #a8b5a0 0%, #7a8f6e 40%, #5a7048 80%, #4a5d3a 100%)',
    accent: 'text-mousse',
  },
  {
    nom: 'Paillage',
    description: 'Broyat végétal pour couvrir les sols, limiter les adventices et conserver l\'humidité.',
    pattern: 'radial-gradient(circle at 50% 50%, #d4c5a9 0%, #b8a888 30%, #9a8a6a 60%, #7a6e52 100%)',
    accent: 'text-terre',
  },
]

export default function Produits() {
  return (
    <section id="produits" className="py-24 sm:py-32 bg-creme">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-terre mb-4 reveal">
          Nos produits
        </p>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-foret leading-tight mb-6 reveal max-w-3xl">
          Du déchet à la <span className="italic text-terre">ressource</span>
        </h2>

        <p className="font-body text-base text-ardoise/60 mb-16 max-w-xl reveal">
          Tous nos produits sont issus de la valorisation des végétaux traités sur nos chantiers bretons.
        </p>

        {/* Disposition horizontale — pas de grille e-commerce */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 stagger">
          {produits.map((p, i) => (
            <div
              key={p.nom}
              className="group flex flex-col items-center text-center"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Cercle avec texture simulée */}
              <div className="relative mb-6">
                <div
                  className="w-36 h-36 sm:w-40 sm:h-40 rounded-full transition-transform duration-700 group-hover:scale-105"
                  style={{ background: p.pattern }}
                />
                {/* Anneau décoratif */}
                <div className="absolute inset-0 rounded-full border border-lichen/40 scale-110 transition-all duration-700 group-hover:scale-125 group-hover:border-mousse/30" />
              </div>

              <h3 className={`font-display text-xl font-semibold ${p.accent} mb-2`}>
                {p.nom}
              </h3>
              <p className="font-body text-sm text-ardoise/70 leading-relaxed max-w-xs">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
