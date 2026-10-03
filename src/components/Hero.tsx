/**
 * Hero — fond vert forêt, champ illustré des quatre invasives en bas
 * (SVG animé : pousse à l'arrivée, balancement, parallaxe souris),
 * graines de pampa qui dérivent, titre et boutons d'action.
 */
import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
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

      {/* Texte */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 pt-32 sm:pt-40 pb-[30svh] sm:pb-[40svh] lg:pb-[38svh]">
        <h1 className="font-display text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-7xl font-light tracking-tight max-w-4xl hero-line">
          Renouée, pampa, baccharis, buddleia&nbsp;:
          <span className="block text-lande italic font-light mt-2">on les arrache, le vivant reprend.</span>
        </h1>

        <p className="font-body text-base sm:text-lg text-blanc/75 leading-relaxed max-w-xl mt-7 hero-line" style={{ animationDelay: '250ms' }}>
          Eterneterre traite les plantes exotiques envahissantes en Bretagne :
          arrachage, criblage des terres et rhizomes, dépollution des sols, puis
          replantation d'espèces locales pour que rien ne repousse.
        </p>

        <div className="flex flex-wrap gap-3 mt-9 hero-line" style={{ animationDelay: '400ms' }}>
          <Link
            to="/#contact"
            className="font-body text-sm font-medium px-6 py-3.5 bg-feuille text-foret rounded-full hover:bg-lande transition-colors duration-300 no-underline"
          >
            Demander un diagnostic
          </Link>
          <Link
            to="/#especes"
            className="font-body text-sm font-medium px-6 py-3.5 border border-blanc/30 text-blanc rounded-full hover:bg-blanc/10 transition-colors duration-300 no-underline"
          >
            Les quatre espèces
          </Link>
        </div>
      </div>

      {/* Champ illustré — deux plans pour la profondeur */}
      <div className="absolute inset-x-0 bottom-0 h-[30svh] sm:h-[48svh] pointer-events-none" aria-hidden="true">
        {/* Mobile : cadrage resserré sur trois plantes */}
        <PlantField layer="back" viewBox="330 0 800 420" fit="meet" className="sm:hidden hero-layer hero-layer-back absolute inset-x-0 bottom-0 w-full h-full" />
        <PlantField layer="front" viewBox="330 0 800 420" fit="meet" className="sm:hidden hero-layer hero-layer-front absolute inset-x-0 bottom-0 w-full h-full" />
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
