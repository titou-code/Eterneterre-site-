/**
 * Espèces Envahissantes — présentation éditoriale avec vraies photos
 * Alternance gauche/droite avec décalages
 */

const especes = [
  {
    nom: 'Herbe de la Pampa',
    latin: 'Cortaderia selloana',
    description:
      'Ses immenses plumeaux colonisent les terrains vagues, les bords de routes et les zones humides. En étouffant la flore locale, elle réduit drastiquement la biodiversité et augmente les risques d\'incendie. Son éradication nécessite l\'extraction totale du système racinaire.',
    image: '/images/pampa.jpg',
    altSeo: 'Herbe de la pampa Bretagne — Cortaderia selloana plante invasive',
    bordure: 'border-terre',
    fiche: '/pdfs/Herbe-de-la-pampa.pdf',
  },
  {
    nom: 'Baccharis',
    latin: 'Baccharis halimifolia',
    description:
      'Arbuste nord-américain qui envahit les marais salants et les zones littorales. Chaque plant produit jusqu\'à un million de graines par an, supplantant les espèces endémiques des prés-salés et menaçant ces écosystèmes fragiles.',
    image: '/images/bacharis-real.jpg',
    altSeo: 'Baccharis halimifolia Bretagne — arbuste invasif zones littorales',
    bordure: 'border-mousse',
    fiche: '/pdfs/Baccharis.pdf',
  },
  {
    nom: 'Arbre à Papillons',
    latin: 'Buddleja davidii',
    description:
      'Malgré son apparence séduisante, il colonise les friches, les murs et les voies ferrées avec une vigueur redoutable. Il appauvrit les sols et concurrence directement les espèces nourricières locales dont dépendent les pollinisateurs natifs.',
    image: '/images/arbre-papillon.webp',
    altSeo: 'Arbre à papillons Bretagne — Buddleja davidii espèce invasive',
    bordure: 'border-lichen',
    fiche: '/pdfs/herbe-a-papillon.pdf',
  },
  {
    nom: 'Renouée du Japon',
    latin: 'Reynoutria japonica',
    description:
      'La plus redoutée des invasives. Ses rhizomes peuvent s\'enfoncer à 3 mètres de profondeur et traverser le bitume. Elle déstabilise les berges, obstrue les cours d\'eau et provoque des dégâts considérables sur les infrastructures. Un fragment de 1 cm suffit à régénérer un plant entier.',
    image: '/images/renouee.jpg',
    altSeo: 'Renouée du Japon Bretagne — Reynoutria japonica traitement rhizomes',
    bordure: 'border-foret',
    fiche: '/pdfs/renouee-du-japon.pdf',
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
          Ces plantes exotiques envahissantes menacent la biodiversité
          et engendrent des coûts croissants pour les collectivités et les particuliers.
        </p>

        {/* Disposition éditoriale — alternance avec décalages */}
        <div className="space-y-8 sm:space-y-12">
          {especes.map((e, i) => (
            <article
              key={e.latin}
              className="reveal grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Photo réelle */}
              <div
                className={`md:col-span-5 ${
                  i % 2 === 1 ? 'md:col-start-8 md:row-start-1' : 'md:col-start-1'
                }`}
              >
                <div className={`overflow-hidden rounded-2xl border ${e.bordure}`}>
                  <img
                    src={e.image}
                    alt={e.altSeo}
                    className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Texte */}
              <div
                className={`md:col-span-6 ${
                  i % 2 === 1 ? 'md:col-start-1 md:row-start-1' : 'md:col-start-7'
                } flex flex-col justify-center`}
              >
                <p className="font-body text-xs tracking-[0.2em] uppercase text-terre mb-2">
                  {e.latin}
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-foret mb-3">
                  {e.nom}
                </h3>
                <p className="font-body text-base text-ardoise/80 leading-relaxed max-w-lg mb-5">
                  {e.description}
                </p>
                <a
                  href={e.fiche}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm font-medium text-foret border border-foret/30 hover:bg-foret hover:text-blanc transition-colors duration-300 px-5 py-2.5 rounded-full no-underline self-start"
                >
                  Voir la fiche détaillée
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
