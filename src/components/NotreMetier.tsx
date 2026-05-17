/**
 * Notre Métier — layout 2 colonnes top-aligned avec chronologie visuelle
 * Numéros 1 → 2 + flèche pour montrer le processus en 2 temps
 */
export default function NotreMetier() {
  return (
    <section id="metier" className="py-24 sm:py-32 bg-blanc">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-terre mb-4 reveal">
          Notre métier
        </p>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-foret leading-tight mb-16 reveal max-w-3xl">
          Deux expertises,
          <br />
          un même <span className="italic text-mousse">engagement</span>
        </h2>

        {/* Layout 7/5 grid — aligné en haut + flèche de progression */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 md:items-start">

          {/* Bloc 1 — Traitement */}
          <div className="md:col-span-5 reveal-left">
            <div className="border-l-2 border-foret pl-6 sm:pl-8 py-4">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-foret mb-4">
                  Traitement des végétaux spéciaux
                </h3>
                <p className="font-body text-base sm:text-lg text-ardoise/80 leading-relaxed mb-4">
                  Nous intervenons sur les espèces classées envahissantes qui menacent
                  la biodiversité, selon les directives de l'Office Français de la
                  Biodiversité. Plantes invasives, souches, terres contaminées et
                  rhizomes à trier — chaque chantier exige un protocole adapté pour
                  éviter toute dissémination.
                </p>
                <p className="font-body text-sm text-terre italic">
                  Arrachage · Confinement · Traitement · Valorisation
                </p>
              </div>
            </div>
          </div>

          {/* Flèche de progression — centrée entre les 2 blocs */}
          <div className="md:col-span-2 hidden md:flex items-center justify-center">
            <div className="flex flex-col items-center gap-2 text-lichen">
              <div className="w-px h-12 bg-lichen/40" />
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <path
                  d="M5 14h18M17 8l6 6-6 6"
                  stroke="var(--color-mousse)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="w-px h-12 bg-lichen/40" />
            </div>
          </div>

          {/* Bloc 2 — Recolonisation */}
          <div className="md:col-span-5 reveal-right">
            <div className="bg-creme rounded-2xl p-6 sm:p-8">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-foret mb-4">
                  Occupation de l'espace par des espèces endémiques
                </h3>
                <p className="font-body text-base sm:text-lg text-ardoise/80 leading-relaxed mb-4">
                  Arracher ne suffit pas. Un sol laissé nu est un sol qui se fait
                  reconquérir. À la fin de chaque chantier, nous réimplantons des
                  espèces locales adaptées au biotope pour occuper le terrain, capter
                  la lumière et priver les invasives de tout espace de reprise. Une
                  stratégie de terrain, pensée dans la durée.
                </p>
                <ul className="flex flex-wrap gap-2">
                  {['Diagnostic', 'Sélection', 'Plantation', 'Suivi'].map((p) => (
                    <li
                      key={p}
                      className="font-body text-xs tracking-wide uppercase px-3 py-1.5 bg-blanc rounded-full text-mousse border border-lichen"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
