/**
 * Dépollution mécanique des sols — même esprit que "Nos Services"
 * Grille photo + contenu, hiérarchie typographique identique au reste du site
 */
export default function DepollutiionSols() {
  return (
    <section className="py-24 sm:py-32 bg-blanc">
      <div className="max-w-6xl mx-auto px-6">

        <p className="font-body text-xs tracking-[0.3em] uppercase text-terre mb-4 reveal">
          Dépollution des sols
        </p>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-foret leading-tight mb-16 reveal max-w-3xl">
          Redonner au sol sa{' '}
          <span className="italic text-mousse">valeur d'origine</span>
        </h2>

        {/* Grille : photo à gauche, descriptif à droite */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger">

          {/* Carte photo — conteneur exactement aux dimensions natives (391×391) */}
          <div className="flex items-start">
            <div className="w-fit rounded-2xl border border-lichen/50 overflow-hidden">
              <img
                src="/services/depollution-sols.webp"
                alt="Dépollution mécanique des sols"
                width={391}
                height={391}
                style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>

          {/* Carte texte */}
          <div className="rounded-2xl border border-lichen/50 bg-blanc p-8 sm:p-10 flex flex-col justify-center">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-foret mb-5">
              Criblage et assainissement mécaniques
            </h3>
            <p className="font-body text-base text-ardoise/80 leading-relaxed mb-5">
              La dépollution d'un terrain ne se limite pas aux espèces végétales envahissantes.
              Nos équipements de criblage et de tamisage permettent d'extraire du sol
              toute forme de pollution enfouie : rhizomes, pneus usagés, ferraille,
              gravats ou déchets divers issus de dépôts sauvages ou d'anciens usages industriels.
            </p>
            <p className="font-body text-base text-ardoise/80 leading-relaxed mb-7">
              Chaque intervention est adaptée à la nature du terrain et au type de contamination.
              Le sol traité est contrôlé avant réemploi ou évacuation, dans le respect
              des réglementations en vigueur. Un sol propre est un sol qui peut à nouveau
              accueillir la vie.
            </p>
            <ul className="flex flex-wrap gap-2">
              {['Criblage mécanique', 'Déchets enfouis', 'Pneus & ferraille', 'Réemploi du sol'].map((tag) => (
                <li
                  key={tag}
                  className="font-body text-xs tracking-wide uppercase px-3 py-1.5 bg-creme rounded-full text-mousse border border-lichen"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
