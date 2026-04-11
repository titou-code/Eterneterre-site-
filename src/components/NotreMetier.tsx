/**
 * Notre Métier — layout asymétrique éditorial
 * Colonne gauche large (60%) / colonne droite étroite (40%)
 * Hiérarchie typographique forte : grand titre Fraunces + texte DM Sans
 */
export default function NotreMetier() {
  return (
    <section id="metier" className="py-24 sm:py-32 bg-blanc">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label section */}
        <p className="font-body text-xs tracking-[0.3em] uppercase text-terre mb-4 reveal">
          Notre métier
        </p>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-foret leading-tight mb-16 reveal max-w-3xl">
          Deux expertises,
          <br />
          un même <span className="italic text-mousse">engagement</span>
        </h2>

        {/* Layout asymétrique — 7/5 grid, pas du 50/50 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Colonne principale — plus large */}
          <div className="md:col-span-7 reveal-left">
            <div className="border-l-2 border-foret pl-6 sm:pl-8 py-4">
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-foret mb-4">
                Traitement des végétaux spéciaux
              </h3>
              <p className="font-body text-base sm:text-lg text-ardoise/80 leading-relaxed mb-4">
                Nous intervenons sur les espèces classées envahissantes qui menacent
                la biodiversité bretonne. Plantes invasives, souches, terres contaminées
                et rhizomes à trier — chaque chantier exige un protocole adapté pour
                éviter toute dissémination.
              </p>
              <p className="font-body text-sm text-terre italic">
                Arrachage · Confinement · Traitement · Valorisation
              </p>
            </div>
          </div>

          {/* Colonne secondaire — plus étroite, décalée vers le bas */}
          <div className="md:col-span-5 md:mt-16 reveal-right">
            <div className="bg-creme rounded-2xl p-6 sm:p-8">
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-foret mb-4">
                Vente de sous-produits végétaux
              </h3>
              <p className="font-body text-base sm:text-lg text-ardoise/80 leading-relaxed mb-4">
                Ce qui était un déchet devient une ressource. Nos processus de
                compostage et broyage transforment les végétaux traités en produits
                de qualité pour les professionnels et particuliers.
              </p>
              <ul className="flex flex-wrap gap-2">
                {['Compost', 'Broyat', 'Plaquette', 'Paillage'].map((p) => (
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
    </section>
  )
}
