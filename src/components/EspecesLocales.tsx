/**
 * Espèces locales pour la recolonisation
 * 4 espèces bretonnes pionnières, utilisées en fin de chantier
 * pour occuper l'espace et priver les invasives de leur reprise.
 * Format circulaire avec photos réelles.
 */

const locales = [
  {
    nom: 'Ajonc d\'Europe',
    latin: 'Ulex europaeus',
    description:
      'Emblème de la lande bretonne. Pionnier robuste qui fixe l\'azote, structure les sols pauvres et forme une couverture dense en quelques saisons.',
    image: '/images/locales/ajonc-real.jpg',
    accent: 'text-terre',
  },
  {
    nom: 'Saule marsault',
    latin: 'Salix caprea',
    description:
      'Pionnier rapide des berges et des terrains remaniés. Son enracinement puissant stabilise les sols et limite la reprise des rhizomes invasifs.',
    image: '/images/locales/saule-real.jpg',
    accent: 'text-mousse',
  },
  {
    nom: 'Bouleau verruqueux',
    latin: 'Betula pendula',
    description:
      'Essence pionnière par excellence, il colonise rapidement les sols nus et prépare le retour d\'un couvert forestier diversifié et durable.',
    image: '/images/locales/bouleau-real.jpg',
    accent: 'text-terre',
  },
  {
    nom: 'Aulne glutineux',
    latin: 'Alnus glutinosa',
    description:
      'Indispensable en bord de cours d\'eau. Il consolide les berges, enrichit le sol en azote et concurrence efficacement la Renouée du Japon.',
    image: '/images/locales/aulne-real.jpg',
    accent: 'text-mousse',
  },
]

export default function EspecesLocales() {
  return (
    <section id="locales" className="py-24 sm:py-32 bg-creme">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-terre mb-4 reveal">
          Espèces locales
        </p>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-foret leading-tight mb-6 reveal max-w-3xl">
          Recoloniser avec le <span className="italic text-terre">vivant</span>
        </h2>

        <p className="font-body text-base text-ardoise/70 mb-16 max-w-2xl reveal leading-relaxed">
          Ces espèces peuvent être vendues et plantées en fin de chantier, lors du
          retrait des plantes invasives, pour coloniser l'espace et concurrencer
          durablement les exotiques envahissantes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 stagger">
          {locales.map((p, i) => (
            <div
              key={p.latin}
              className="group flex flex-col items-center text-center"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Cercle photo */}
              <div className="relative mb-6">
                <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden transition-transform duration-700 group-hover:scale-105">
                  <img
                    src={p.image}
                    alt={p.nom}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full border border-lichen/40 scale-110 transition-all duration-700 group-hover:scale-125 group-hover:border-mousse/30" />
              </div>

              <p className="font-body text-xs tracking-[0.2em] uppercase text-terre mb-1">
                {p.latin}
              </p>
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
