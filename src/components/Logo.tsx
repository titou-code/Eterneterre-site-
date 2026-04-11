/**
 * Logo Eterneterre — SVG inline
 * Symbole : feuille stylisée intégrée au "E" initial + flèche recyclage subtile
 * "Bretagne" en petites capitales au-dessus
 */
export default function Logo() {
  return (
    <a href="#" className="group flex flex-col items-center leading-none no-underline">
      <span className="text-[10px] font-body tracking-[0.3em] uppercase text-mousse mb-0.5">
        Bretagne
      </span>
      <span className="flex items-center gap-1">
        <svg
          width="28"
          height="28"
          viewBox="0 0 32 32"
          fill="none"
          className="transition-transform duration-500 group-hover:rotate-12"
        >
          {/* Feuille stylisée avec nervure — évoque croissance + recyclage */}
          <path
            d="M16 2C16 2 6 10 6 20c0 5.5 4.5 10 10 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-mousse"
          />
          <path
            d="M16 2c0 0 10 8 10 18c0 5.5-4.5 10-10 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-foret"
          />
          {/* Nervure centrale */}
          <path
            d="M16 8v18"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="text-mousse/60"
          />
          {/* Nervures latérales */}
          <path
            d="M16 13l-4 3M16 17l-3 2.5M16 13l4 3M16 17l3 2.5"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            className="text-mousse/40"
          />
          {/* Petite flèche circulaire recyclage en bas */}
          <path
            d="M12 26a5 5 0 008 0"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="text-terre"
          />
          <path
            d="M20 25l0.5 1.5-1.5 0.2"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-terre"
          />
        </svg>
        <span className="font-display text-xl font-semibold tracking-tight text-foret">
          Eterneterre
        </span>
      </span>
    </a>
  )
}
