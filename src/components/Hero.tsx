/**
 * Hero — deux colonnes sur fond clair :
 * accroche + boutons d'action à gauche, photo de chantier à droite.
 * Le H1 décrit le service (référencement) ; la devise reste en exergue.
 */
import { Link } from 'react-router'

const publics = ['Collectivités', 'Entreprises de TP', 'Agriculteurs', 'Particuliers']

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-creme pt-28 sm:pt-36 pb-16 sm:pb-24">
      {/* Halo organique en arrière-plan */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 85% 15%, rgba(74,124,89,0.14) 0%, transparent 55%),
            radial-gradient(ellipse at 10% 90%, rgba(139,111,71,0.10) 0%, transparent 50%)
          `,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Texte */}
        <div className="lg:col-span-6">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-terre mb-5 reveal">
            Bretagne · Plantes exotiques envahissantes
          </p>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-foret leading-[1.05] mb-6 reveal">
            Traitement des plantes <span className="italic text-mousse">invasives</span> en Bretagne
          </h1>

          <p className="font-display text-xl sm:text-2xl font-light text-ardoise/75 leading-snug mb-8 max-w-xl reveal">
            À chaque espèce son biotope, et à chaque biotope ses espèces.
            Nous arrachons la renouée, la pampa, le baccharis et le buddleia,
            puis nous rendons le terrain au vivant.
          </p>

          <div className="flex flex-wrap gap-3 mb-10 reveal">
            <Link
              to="/#contact"
              className="font-body text-sm font-medium px-6 py-3.5 bg-foret text-blanc rounded-full hover:bg-mousse transition-colors duration-300 no-underline"
            >
              Demander un diagnostic
            </Link>
            <Link
              to="/#especes"
              className="font-body text-sm font-medium px-6 py-3.5 border border-foret/30 text-foret rounded-full hover:bg-foret hover:text-blanc transition-colors duration-300 no-underline"
            >
              Les espèces traitées
            </Link>
          </div>

          <ul className="flex flex-wrap gap-x-5 gap-y-2 reveal" aria-label="Nous intervenons pour">
            {publics.map((p) => (
              <li key={p} className="font-body text-xs tracking-wide uppercase text-ardoise/55 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-mousse" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Visuel */}
        <div className="lg:col-span-6 reveal-right">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-lichen/50 shadow-[0_24px_60px_-30px_rgba(26,77,46,0.45)]">
              <img
                src="/services/chantier-mobile.webp"
                alt="Pelle mécanique en intervention d'arrachage de plantes invasives sur une berge en Bretagne"
                width={960}
                height={640}
                fetchPriority="high"
                className="w-full aspect-[4/3] lg:aspect-[5/4] object-cover"
              />
            </div>

            {/* Vignette secondaire */}
            <div className="absolute -bottom-6 -left-4 sm:-left-8 w-36 sm:w-44 rounded-2xl overflow-hidden border-4 border-creme shadow-lg rotate-[-3deg]">
              <img
                src="/images/renouee.webp"
                alt="Feuilles de renouée du Japon"
                width={900}
                height={576}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

            {/* Étiquette */}
            <div className="absolute top-4 right-4 bg-blanc/90 backdrop-blur-sm rounded-full px-4 py-2 font-body text-xs tracking-wide text-foret border border-lichen/50">
              Arrachage mécanique sur berge
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
