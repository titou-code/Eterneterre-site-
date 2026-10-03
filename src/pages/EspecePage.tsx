/**
 * Page dédiée à une espèce envahissante : /especes/<slug>
 * Contenu structuré (identification, réglementation, méthode, FAQ…)
 * pour le référencement sur les requêtes « traitement <espèce> Bretagne ».
 */
import { Link, useParams } from 'react-router'
import { especes, getEspece } from '../data/especes'
import NotFound from './NotFound'
import Contact from '../components/Contact'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function EspecePage() {
  const { slug = '' } = useParams()
  const e = getEspece(slug)
  const containerRef = useScrollReveal()

  if (!e) return <NotFound />

  const autres = especes.filter((x) => x.slug !== e.slug)

  return (
    <main ref={containerRef}>
      {/* En-tête */}
      <header className="bg-creme pt-28 sm:pt-36 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 font-body text-xs text-ardoise/50">
              <li><Link to="/" className="hover:text-foret no-underline">Accueil</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/#especes" className="hover:text-foret no-underline">Espèces envahissantes</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-foret" aria-current="page">{e.nom}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-terre mb-4">
                {e.latin} · {e.famille}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-foret leading-[1.05] mb-6">
                {e.nom}
                <br />
                <span className="italic text-mousse text-3xl sm:text-4xl md:text-5xl">traitement en Bretagne</span>
              </h1>
              {e.intro.map((p, i) => (
                <p key={i} className="font-body text-base sm:text-lg text-ardoise/80 leading-relaxed mb-4 max-w-2xl">
                  {p}
                </p>
              ))}
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href="#contact"
                  className="font-body text-sm font-medium px-6 py-3.5 bg-foret text-blanc rounded-full hover:bg-mousse transition-colors duration-300 no-underline"
                >
                  Demander un diagnostic
                </a>
                <a
                  href={e.fiche}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm font-medium px-6 py-3.5 border border-foret/30 text-foret rounded-full hover:bg-foret hover:text-blanc transition-colors duration-300 no-underline"
                >
                  Télécharger la fiche PDF
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className={`rounded-3xl overflow-hidden border ${e.bordure} shadow-[0_24px_60px_-30px_rgba(26,77,46,0.45)]`}>
                <img
                  src={e.image}
                  alt={e.imageAlt}
                  width={900}
                  height={675}
                  fetchPriority="high"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Fiche */}
      <section className="py-20 sm:py-28 bg-blanc">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-14">
              <Bloc titre="Comment la reconnaître" items={e.identification} />
              <Bloc titre="Notre méthode d'intervention" items={e.methode} numerote />
              <Bloc titre="Ce qu'il ne faut surtout pas faire" items={e.aNePasFaire} variant="warning" />
              <Bloc titre="Impact sur le terrain" items={e.impact} />
            </div>

            <aside className="lg:col-span-5 space-y-6 lg:sticky lg:top-28 self-start">
              <Carte titre="Cadre réglementaire">
                <ul className="space-y-2.5">
                  {e.reglementation.map((r) => <li key={r} className="font-body text-sm text-ardoise/80 leading-relaxed">{r}</li>)}
                </ul>
              </Carte>
              <Carte titre="Période optimale">
                <p className="font-body text-sm text-ardoise/80 leading-relaxed">{e.periode}</p>
              </Carte>
              <Carte titre="Gestion des déchets">
                <ul className="space-y-2.5">
                  {e.dechets.map((r) => <li key={r} className="font-body text-sm text-ardoise/80 leading-relaxed">{r}</li>)}
                </ul>
              </Carte>
              <Carte titre="Origine">
                <p className="font-body text-sm text-ardoise/80">{e.origine}</p>
              </Carte>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 bg-creme">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-terre mb-4 reveal">Questions fréquentes</p>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-foret leading-tight mb-12 reveal">
            {e.nom} : <span className="italic text-mousse">vos questions</span>
          </h2>
          <div className="space-y-4 stagger">
            {e.faq.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-lichen/50 bg-blanc px-6 py-5">
                <summary className="font-display text-lg sm:text-xl font-semibold text-foret cursor-pointer list-none flex items-center justify-between gap-4">
                  {f.q}
                  <span className="text-mousse transition-transform duration-300 group-open:rotate-45 shrink-0" aria-hidden="true">+</span>
                </summary>
                <p className="font-body text-base text-ardoise/80 leading-relaxed mt-4">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Autres espèces */}
      <section className="py-20 bg-blanc">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-light text-foret mb-8 reveal">
            Autres espèces <span className="italic text-terre">traitées</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 stagger">
            {autres.map((a) => (
              <Link
                key={a.slug}
                to={`/especes/${a.slug}`}
                className="group rounded-2xl border border-lichen/50 overflow-hidden no-underline hover:border-mousse/40 transition-colors duration-300"
              >
                <img
                  src={a.image}
                  alt={a.imageAlt}
                  width={900}
                  height={563}
                  loading="lazy"
                  className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="p-5">
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-terre mb-1">{a.latin}</p>
                  <p className="font-display text-lg font-semibold text-foret">{a.nom}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Contact
        titre={<>Un foyer de {e.nom} sur votre <span className="italic text-lande">terrain</span>&nbsp;?</>}
        intro="Décrivez-nous la situation (surface, accès, photos si possible) : nous revenons vers vous sous 48h avec un premier avis."
      />
    </main>
  )
}

function Bloc({ titre, items, numerote, variant }: { titre: string; items: string[]; numerote?: boolean; variant?: 'warning' }) {
  return (
    <div className="reveal">
      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foret mb-6">{titre}</h2>
      <ul className="space-y-4">
        {items.map((it, i) => (
          <li key={it} className="flex gap-4 font-body text-base text-ardoise/80 leading-relaxed">
            {numerote ? (
              <span className="font-display text-2xl font-light text-lichen leading-none shrink-0 w-8">{String(i + 1).padStart(2, '0')}</span>
            ) : (
              <span
                className={`mt-2.5 w-1.5 h-1.5 rounded-full shrink-0 ${variant === 'warning' ? 'bg-terre' : 'bg-mousse'}`}
                aria-hidden="true"
              />
            )}
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Carte({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-creme p-6">
      <p className="font-body text-xs tracking-[0.25em] uppercase text-terre mb-3">{titre}</p>
      {children}
    </div>
  )
}
