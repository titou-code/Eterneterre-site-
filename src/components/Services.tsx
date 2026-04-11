/**
 * Services — grille brisée / disposition organique
 * 7 services avec icônes SVG custom inline
 * Layout : 3-2-2 pour casser la monotonie d'une grille uniforme
 */

const services = [
  {
    titre: 'Chantiers mobiles',
    description: 'Intervention sur site avec équipements adaptés à chaque terrain et configuration.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="8" y="28" width="32" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="40" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="32" cy="40" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 28V20a4 4 0 014-4h8l8 8v4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M28 16v8h8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    titre: 'Collecte',
    description: 'Ramassage et transport sécurisé des végétaux envahissants vers nos sites de traitement.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M10 36V16a2 2 0 012-2h24a2 2 0 012 2v20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 36h36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 14V10a2 2 0 012-2h8a2 2 0 012 2v4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 22v8M20 26h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    titre: 'Arrachage',
    description: 'Extraction complète des systèmes racinaires pour empêcher toute repousse.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M24 8v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M24 24c-4 4-8 12-8 16M24 24c4 4 8 12 8 16M24 24c0 4-2 12-4 16M24 24c0 4 2 12 4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 8c0 0 2 6 6 6s6-6 6-6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 12l8 4 8-4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    titre: 'Compostage',
    description: 'Transformation contrôlée des végétaux en compost normé, riche et valorisable.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <ellipse cx="24" cy="36" rx="16" ry="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 36V28c0-3.3 7.2-6 16-6s16 2.7 16 6v8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 18c0-4 3.6-8 8-8s8 4 8 8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 10v6M20 14l4 2 4-2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
  },
  {
    titre: 'Incinération',
    description: 'Destruction thermique réglementaire des espèces nécessitant une élimination totale.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M24 6c0 0-8 8-8 18c0 6 3.6 10 8 10s8-4 8-10C32 14 24 6 24 6z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 20c0 0-3 3-3 8c0 2 1.3 4 3 4s3-2 3-4C27 23 24 20 24 20z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 40h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    titre: 'Broyage',
    description: 'Réduction mécanique des végétaux en différentes granulométries selon l\'usage final.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 10v6M24 32v6M10 24h6M32 24h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.3 14.3l4.2 4.2M29.5 29.5l4.2 4.2M14.3 33.7l4.2-4.2M29.5 18.5l4.2-4.2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    titre: 'Criblage de terres et rhizomes',
    description: 'Séparation mécanique des terres contaminées pour extraction et tri des rhizomes.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="6" y="18" width="36" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" transform="rotate(-5 24 20)" />
        <path d="M12 26v2M18 26v3M24 26v2M30 26v3M36 26v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 32h20" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <path d="M16 36h16" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <circle cx="20" cy="12" r="2" stroke="currentColor" strokeWidth="1" />
        <circle cx="28" cy="10" r="1.5" stroke="currentColor" strokeWidth="1" />
        <circle cx="24" cy="14" r="1" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-blanc">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-terre mb-4 reveal">
          Nos services
        </p>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-foret leading-tight mb-16 reveal max-w-3xl">
          De l'arrachage à la <span className="italic text-mousse">valorisation</span>
        </h2>

        {/* Grille brisée : 3 en haut, 2 au milieu, 2 en bas — mouvement organique */}
        <div className="stagger">
          {/* Rangée 1 : 3 items */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            {services.slice(0, 3).map((s) => (
              <ServiceCard key={s.titre} {...s} />
            ))}
          </div>
          {/* Rangée 2 : 2 items centrés — crée de l'asymétrie */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:max-w-[70%] sm:mx-auto mb-6">
            {services.slice(3, 5).map((s) => (
              <ServiceCard key={s.titre} {...s} />
            ))}
          </div>
          {/* Rangée 3 : 2 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:max-w-[75%] sm:ml-0">
            {services.slice(5, 7).map((s) => (
              <ServiceCard key={s.titre} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ titre, description, icon }: { titre: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="group p-6 sm:p-8 rounded-2xl border border-lichen/50 bg-blanc hover:bg-creme hover:border-mousse/30 transition-all duration-500 cursor-default">
      <div className="text-mousse mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
        {icon}
      </div>
      <h3 className="font-display text-lg font-semibold text-foret mb-2">
        {titre}
      </h3>
      <p className="font-body text-sm text-ardoise/70 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
