/**
 * Espèces envahissantes — présentation éditoriale, alternance gauche/droite.
 * Chaque espèce renvoie vers sa page dédiée /especes/<slug>.
 */
import { Link } from 'react-router'
import { especes } from '../data/especes'

export default function Especes() {
  return (
    <section id="especes" className="py-24 sm:py-32 bg-creme scroll-mt-20">
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
          et engendrent des coûts croissants pour les collectivités, les entreprises
          et les particuliers. Nous intervenons sur chacune d'elles avec un protocole adapté.
        </p>

        <div className="space-y-10 sm:space-y-14">
          {especes.map((e, i) => (
            <article
              key={e.slug}
              className="reveal grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`md:col-span-5 ${i % 2 === 1 ? 'md:col-start-8 md:row-start-1' : 'md:col-start-1'}`}>
                <Link to={`/especes/${e.slug}`} className={`block overflow-hidden rounded-2xl border ${e.bordure}`}>
                  <img
                    src={e.image}
                    alt={e.imageAlt}
                    width={900}
                    height={675}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </Link>
              </div>

              <div className={`md:col-span-6 ${i % 2 === 1 ? 'md:col-start-1 md:row-start-1' : 'md:col-start-7'} flex flex-col justify-center`}>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-terre mb-2">{e.latin}</p>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-foret mb-3">
                  <Link to={`/especes/${e.slug}`} className="no-underline hover:text-mousse transition-colors duration-300">
                    {e.nom}
                  </Link>
                </h3>
                <p className="font-body text-base text-ardoise/80 leading-relaxed max-w-lg mb-5">{e.resume}</p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to={`/especes/${e.slug}`}
                    className="inline-flex items-center gap-2 font-body text-sm font-medium bg-foret text-blanc hover:bg-mousse transition-colors duration-300 px-5 py-2.5 rounded-full no-underline"
                  >
                    Notre méthode de traitement
                    <Arrow />
                  </Link>
                  <a
                    href={e.fiche}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-body text-sm font-medium text-foret border border-foret/30 hover:bg-foret hover:text-blanc transition-colors duration-300 px-5 py-2.5 rounded-full no-underline"
                  >
                    Fiche PDF
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
