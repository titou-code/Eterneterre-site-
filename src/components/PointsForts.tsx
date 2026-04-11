/**
 * Points Forts — grande typographie, espaces généreux, pas de boxes
 * Présentation minimaliste éditorial : chiffre + titre + description
 * Séparés par des lignes fines organiques
 */

const points = [
  {
    num: '01',
    titre: 'Accompagnement 100% personnalisé',
    description:
      'Chaque site est unique. Nous analysons le terrain, identifions les espèces présentes et concevons un plan d\'intervention adapté à vos contraintes de calendrier, de budget et d\'accès.',
  },
  {
    num: '02',
    titre: 'Planification long terme',
    description:
      'La lutte contre les invasives ne s\'improvise pas. Nous établissons des programmes pluriannuels de suivi et d\'intervention pour garantir des résultats durables et éviter toute recolonisation.',
  },
  {
    num: '03',
    titre: 'Tri des indésirables',
    description:
      'Notre expertise en criblage et tri permet de séparer les rhizomes des terres saines, d\'isoler les semences et de garantir que seule la matière propre est réutilisée ou valorisée.',
  },
]

export default function PointsForts() {
  return (
    <section className="py-24 sm:py-32 bg-blanc">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-terre mb-4 reveal">
          Nos points forts
        </p>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-foret leading-tight mb-20 reveal">
          Ce qui fait notre <span className="italic text-mousse">différence</span>
        </h2>

        <div className="space-y-16 sm:space-y-20">
          {points.map((p, i) => (
            <article
              key={p.num}
              className="reveal grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-baseline"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Numéro — grand, décoratif */}
              <div className="md:col-span-2">
                <span className="font-display text-6xl sm:text-7xl font-light text-lichen/60">
                  {p.num}
                </span>
              </div>

              {/* Titre — Fraunces bold */}
              <div className="md:col-span-4">
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-foret leading-snug">
                  {p.titre}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-6">
                <p className="font-body text-base text-ardoise/70 leading-relaxed">
                  {p.description}
                </p>
              </div>

              {/* Ligne séparatrice organique (sauf dernière) */}
              {i < points.length - 1 && (
                <div className="md:col-span-12 pt-4">
                  <svg width="100%" height="2" className="overflow-visible">
                    <line
                      x1="0" y1="1" x2="100%" y2="1"
                      stroke="var(--color-lichen)"
                      strokeWidth="1"
                      strokeDasharray="8 6"
                      opacity="0.4"
                    />
                  </svg>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
