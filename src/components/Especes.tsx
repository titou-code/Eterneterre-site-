/**
 * Espèces Envahissantes — présentation éditoriale
 * Pas de grille uniforme : alternance gauche/droite avec décalages
 * Chaque espèce a un traitement visuel unique via des formes organiques
 */

const especes = [
  {
    nom: 'Herbe de la Pampa',
    latin: 'Cortaderia selloana',
    description:
      'Ses immenses plumeaux colonisent les terrains vagues, les bords de routes et les zones humides. En étouffant la flore locale, elle réduit drastiquement la biodiversité et augmente les risques d\'incendie. Son éradication nécessite l\'extraction totale du système racinaire.',
    couleur: 'bg-lande/40',
    bordure: 'border-terre',
  },
  {
    nom: 'Baccharis',
    latin: 'Baccharis halimifolia',
    description:
      'Arbuste nord-américain qui envahit les marais salants et les zones littorales bretonnes. Chaque plant produit jusqu\'à un million de graines par an, supplantant les espèces endémiques des prés-salés et menaçant ces écosystèmes fragiles.',
    couleur: 'bg-mousse/10',
    bordure: 'border-mousse',
  },
  {
    nom: 'Arbre à Papillons',
    latin: 'Buddleja davidii',
    description:
      'Malgré son apparence séduisante, il colonise les friches, les murs et les voies ferrées avec une vigueur redoutable. Il appauvrit les sols et concurrence directement les espèces nourricières locales dont dépendent les pollinisateurs natifs.',
    couleur: 'bg-creme',
    bordure: 'border-lichen',
  },
  {
    nom: 'Renouée du Japon',
    latin: 'Reynoutria japonica',
    description:
      'La plus redoutée des invasives. Ses rhizomes peuvent s\'enfoncer à 3 mètres de profondeur et traverser le bitume. Elle déstabilise les berges, obstrue les cours d\'eau et provoque des dégâts considérables sur les infrastructures. Un fragment de 1 cm suffit à régénérer un plant entier.',
    couleur: 'bg-foret/5',
    bordure: 'border-foret',
  },
]

export default function Especes() {
  return (
    <section id="especes" className="py-24 sm:py-32 bg-creme">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-terre mb-4 reveal">
          Les exotiques envahissantes
        </p>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-foret leading-tight mb-6 reveal max-w-4xl">
          Quatre espèces,
          <br />
          un même <span className="italic text-terre">combat</span>
        </h2>

        <p className="font-body text-base text-ardoise/60 mb-16 max-w-2xl reveal">
          Ces plantes exotiques envahissantes menacent la biodiversité bretonne
          et engendrent des coûts croissants pour les collectivités et les particuliers.
        </p>

        {/* Disposition éditoriale — alternance avec décalages */}
        <div className="space-y-8 sm:space-y-12">
          {especes.map((e, i) => (
            <article
              key={e.latin}
              className={`reveal grid grid-cols-1 md:grid-cols-12 gap-6 items-start ${
                i % 2 === 1 ? 'md:direction-rtl' : ''
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Placeholder visuel — forme organique */}
              <div
                className={`md:col-span-4 ${
                  i % 2 === 1 ? 'md:col-start-9' : 'md:col-start-1'
                }`}
              >
                <div
                  className={`aspect-[4/3] ${e.couleur} rounded-[2rem] border ${e.bordure} flex items-center justify-center`}
                >
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-foret/20">
                    <path
                      d="M32 8C32 8 12 22 12 40c0 8 8 16 20 16s20-8 20-16C52 22 32 8 32 8z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path d="M32 16v32" stroke="currentColor" strokeWidth="1" />
                    <path d="M32 24l-8 6M32 32l-6 5M32 24l8 6M32 32l6 5" stroke="currentColor" strokeWidth="0.8" />
                  </svg>
                </div>
              </div>

              {/* Texte */}
              <div
                className={`md:col-span-7 ${
                  i % 2 === 1 ? 'md:col-start-1 md:row-start-1' : 'md:col-start-6'
                } flex flex-col justify-center`}
              >
                <p className="font-body text-xs tracking-[0.2em] uppercase text-terre mb-2">
                  {e.latin}
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-foret mb-3">
                  {e.nom}
                </h3>
                <p className="font-body text-base text-ardoise/80 leading-relaxed max-w-lg">
                  {e.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
