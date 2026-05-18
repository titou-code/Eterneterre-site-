/**
 * Services — 5 services (Chantiers mobiles, Collecte, Arrachage, Incinération, Broyage, Criblage)
 * Certains utilisent une photo, d'autres une icône SVG.
 * Layout : rangée 3 + rangée 2 centrée.
 */
import type { ReactNode } from 'react'

type Service = {
  titre: string
  description: string
  icon?: ReactNode
  photo?: string
  altText?: string
}

const services: Service[] = [
  {
    titre: 'Chantiers mobiles',
    description: 'Intervention sur site avec équipements adaptés à chaque terrain et configuration.',
    photo: '/services/chantier-mobile.jpg',
    altText: 'Chantier mobile traitement végétaux envahissants Bretagne',
  },
  {
    titre: 'Collecte',
    description: 'Ramassage et transport sécurisé des végétaux envahissants vers nos sites de traitement.',
    photo: '/services/collect.avif',
    altText: 'Collecte et transport végétaux envahissants Bretagne',
  },
  {
    titre: 'Arrachage',
    description: 'Extraction complète des systèmes racinaires pour empêcher toute repousse.',
    photo: '/services/arrachage.jpg',
    altText: 'Arrachage plantes invasives Bretagne — extraction racines',
  },
  {
    titre: 'Incinération',
    description: 'Destruction thermique réglementaire des espèces nécessitant une élimination totale.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-28 h-28" aria-hidden="true">
        <path
          d="M32 8c0 0-4 6-6 12c-1.5 4.5-1 8 0 11c-3-2-5-6-4-11
             C18 10 28 4 28 4s-6 14 2 20c-1-5 2-10 2-16z"
          fill="currentColor" opacity="0.25"
        />
        <path
          d="M32 8c0 0 10 10 10 22c0 8-4.5 13.5-10 14
             c5.5-3 7-9 5-15c-1.5 5-5 8-5 8s2-5 0-12
             c-1.5 5-4 9-4 13c-3-3-4-7-3-11C27 19 32 8 32 8z"
          fill="currentColor" opacity="0.55"
        />
        <path
          d="M32 26c0 0 5 6 5 12c0 4.5-2.5 7.5-5 8
             c2-2 3-5 2-8.5c-1 3-3 5-3 5s1-3 0-7
             c-1 2.5-2 5-2 7c-2-2-2.5-5-1.5-7.5
             C28.5 32 32 26 32 26z"
          fill="currentColor" opacity="0.9"
        />
        <line x1="20" y1="52" x2="44" y2="52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    titre: 'Broyage',
    description: 'Réduction mécanique des végétaux en différentes granulométries selon l\'usage final.',
    photo: '/services/broyage.png',
    altText: 'Broyage végétaux envahissants Bretagne — valorisation',
  },
  {
    titre: 'Criblage de terres et rhizomes',
    description: 'Séparation mécanique des terres contaminées pour extraction et tri des rhizomes.',
    photo: '/services/criblage.jpeg',
    altText: 'Criblage mécanique terres et rhizomes invasifs Bretagne',
  },
]

export default function Services() {
  // 6 services après retrait de Compostage — grille 3 + 3
  const row1 = services.slice(0, 3)
  const row2 = services.slice(3, 6)

  return (
    <section id="services" className="py-24 sm:py-32 bg-blanc">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-terre mb-4 reveal">
          Nos services
        </p>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-foret leading-tight mb-16 reveal max-w-3xl">
          De l'arrachage à la <span className="italic text-mousse">valorisation</span>
        </h2>

        <div className="space-y-6">
          <div className="stagger grid grid-cols-1 sm:grid-cols-3 gap-6">
            {row1.map((s) => (
              <ServiceCard key={s.titre} {...s} />
            ))}
          </div>
          <div className="stagger grid grid-cols-1 sm:grid-cols-3 gap-6">
            {row2.map((s) => (
              <ServiceCard key={s.titre} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ titre, description, icon, photo, altText }: Service) {
  return (
    <div className="group rounded-2xl border border-lichen/50 bg-blanc hover:border-mousse/30 transition-all duration-500 overflow-hidden flex flex-col">
      {photo ? (
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={photo}
            alt={altText ?? titre}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="aspect-[16/10] flex items-center justify-center bg-creme text-mousse transition-transform duration-500 group-hover:scale-105">
          {icon}
        </div>
      )}
      <div className="p-6 sm:p-7 flex-1">
        <h3 className="font-display text-lg font-semibold text-foret mb-2">
          {titre}
        </h3>
        <p className="font-body text-sm text-ardoise/70 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
