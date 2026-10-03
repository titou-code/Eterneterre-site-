/**
 * Hero — fond vert forêt, champ illustré des quatre invasives en bas
 * (SVG animé : pousse à l'arrivée, balancement, parallaxe souris),
 * graines de pampa qui dérivent, titre et boutons d'action.
 */
import { useEffect, useRef } from 'react'
import PlantField from './PlantField'

const SEEDS = Array.from({ length: 14 }).map((_, i) => ({
  left: `${(i * 67) % 100}%`,
  top: `${10 + ((i * 37) % 60)}%`,
  size: 3 + (i % 3),
  dur: 14 + (i % 5) * 3,
  delay: -(i * 1.7),
}))

export default function Hero() {
  const ref = useRef<HTMLElement>(null)

  // Parallaxe souris : expose --mx / --my (−1 → 1) au conteneur
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(pointer: fine)').matches) return
    let raf = 0
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const mx = ((e.clientX - r.left) / r.width) * 2 - 1
      const my = ((e.clientY - r.top) / r.height) * 2 - 1
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--mx', mx.toFixed(3))
        el.style.setProperty('--my', my.toFixed(3))
      })
    }
    const onLeave = () => {
      el.style.setProperty('--mx', '0')
      el.style.setProperty('--my', '0')
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section
      ref={ref}
      className="hero relative min-h-[100svh] flex flex-col overflow-hidden bg-foret text-blanc"
      style={{ '--mx': 0, '--my': 0 } as React.CSSProperties}
    >
      {/* Lumière du ciel */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(143,209,106,0.22) 0%, transparent 60%), linear-gradient(180deg, #163b26 0%, #1a4d2e 55%, #1f5a36 100%)',
        }}
      />

      {/* Graines de pampa qui dérivent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {SEEDS.map((s, i) => (
          <span
            key={i}
            className="seed"
            style={{
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              animationDuration: `${s.dur}s`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Contenu — texte d'origine */}
      <div className="relative z-10 max-w-5xl mx-auto w-full px-6 pt-32 sm:pt-40 pb-[40svh] sm:pb-[40svh] lg:pb-[38svh] text-center">
        <h1 className="font-display text-6xl sm:text-8xl md:text-9xl font-light tracking-tight text-blanc mb-8 hero-line">
          Eterneterre
        </h1>

        <p className="font-display text-2xl sm:text-4xl md:text-5xl font-light text-blanc/80 leading-snug mb-8 hero-line" style={{ animationDelay: '200ms' }}>
          À chaque espèce son <span className="text-lande">biotope</span>,
          <br />et à chaque biotope ses <span className="text-lande">espèces</span>
        </p>

        <p className="font-body text-sm sm:text-base tracking-[0.3em] uppercase text-blanc/55 mb-10 hero-line" style={{ animationDelay: '350ms' }}>
          Traitement des végétaux envahissants
        </p>

        <div className="flex justify-center hero-line" style={{ animationDelay: '500ms' }}>
          <svg width="120" height="12" viewBox="0 0 120 12" fill="none" aria-hidden="true">
            <path
              d="M2 10C20 2 40 8 60 6C80 4 100 10 118 2"
              stroke="var(--color-lande)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Champ illustré — deux plans pour la profondeur */}
      <div className="absolute inset-x-0 bottom-0 h-[35svh] sm:h-[48svh] pointer-events-none" aria-hidden="true">
        {/* Mobile : cadrage resserré sur trois plantes */}
        <PlantField layer="back" viewBox="360 0 560 420" className="sm:hidden hero-layer hero-layer-back absolute inset-x-0 bottom-0 w-full h-full" />
        <PlantField layer="front" viewBox="360 0 560 420" className="sm:hidden hero-layer hero-layer-front absolute inset-x-0 bottom-0 w-full h-full" />
        <PlantField layer="back" className="hidden sm:block hero-layer hero-layer-back absolute inset-x-0 bottom-0 w-full h-full" />
        <PlantField layer="front" className="hidden sm:block hero-layer hero-layer-front absolute inset-x-0 bottom-0 w-full h-full" />
        {/* Sol */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-foret to-transparent" />
      </div>

      {/* Indice de défilement */}
      <a
        href="#metier"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 font-body text-xs text-blanc/50 hover:text-blanc transition-colors no-underline flex flex-col items-center gap-2 hero-line"
        style={{ animationDelay: '900ms' }}
        aria-label="Découvrir notre métier"
      >
        <span className="scroll-cue block w-px h-8 bg-blanc/40" />
      </a>
    </section>
  )
}
