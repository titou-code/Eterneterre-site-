/**
 * Champ illustré des quatre espèces invasives traitées par Eterneterre,
 * dessiné au trait fin (esprit planche botanique gravée), monochrome.
 * Animations CSS : pousse à l'arrivée (.plant-grow), balancement
 * (.plant-sway), deux plans de profondeur pour la parallaxe souris.
 */

type Props = {
  className?: string
  layer: 'back' | 'front'
  viewBox?: string
  fit?: 'slice' | 'meet'
}

type Ink = { stroke: string; w: number; o: number }

/* ── Primitives au trait ───────────────────────────────────── */

/** Feuille lancéolée ou ovale, contour + nervure centrale */
function Leaf({ x, y, angle, len = 26, w = 9, ink }: { x: number; y: number; angle: number; len?: number; w?: number; ink: Ink }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle})`} stroke={ink.stroke} strokeWidth={ink.w} opacity={ink.o} fill="none" strokeLinecap="round">
      <path d={`M0 0 C ${w} ${-len * 0.35}, ${w} ${-len * 0.75}, 0 ${-len} C ${-w} ${-len * 0.75}, ${-w} ${-len * 0.35}, 0 0 Z`} />
      <line x1="0" y1="-2" x2="0" y2={-len + 3} strokeWidth={ink.w * 0.7} />
    </g>
  )
}

/** Feuille en cœur tronqué (renouée), contour + nervures */
function HeartLeaf({ x, y, angle, s = 1, ink }: { x: number; y: number; angle: number; s?: number; ink: Ink }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle}) scale(${s})`} stroke={ink.stroke} strokeWidth={ink.w / s} opacity={ink.o} fill="none" strokeLinecap="round">
      <path d="M0 0 C -14 -4, -26 -14, -22 -28 C -19 -38, -8 -40, 0 -32 C 8 -40, 19 -38, 22 -28 C 26 -14, 14 -4, 0 0 Z" />
      <path d="M0 -2 L0 -30 M0 -12 L-10 -22 M0 -12 L10 -22 M0 -20 L-7 -27 M0 -20 L7 -27" strokeWidth={ink.w * 0.6 / s} />
    </g>
  )
}

/* ── Plantes ────────────────────────────────────────────────── */

function Pampa({ x, scale = 1, ink, delay, dur }: { x: number; scale?: number; ink: Ink; delay: number; dur: number }) {
  const plumes = [
    { a: -14, h: 230, w: 20 },
    { a: 0, h: 290, w: 24 },
    { a: 11, h: 250, w: 20 },
    { a: -5, h: 200, w: 16 },
    { a: 6, h: 180, w: 14 },
  ]
  const leaves = [-70, -52, -35, -18, 18, 35, 52, 70]
  const hairs = Array.from({ length: 15 }).map((_, i) => -1 + (i * 2) / 14)
  return (
    <g className="plant-grow" style={{ animationDelay: `${delay}ms`, transformOrigin: `${x}px 420px` }}>
      <g className="plant-sway" style={{ animationDuration: `${dur}s`, animationDelay: `${-delay / 3}ms`, transformOrigin: `${x}px 420px` }}>
        <g transform={`translate(${x} 420) scale(${scale})`} stroke={ink.stroke} fill="none" strokeLinecap="round" opacity={ink.o}>
          {leaves.map((a) => (
            <path key={a} d="M0 0 C 10 -70, 40 -120, 110 -150" strokeWidth={ink.w} transform={`rotate(${a})`} />
          ))}
          {plumes.map((p, i) => (
            <g key={i} transform={`rotate(${p.a})`}>
              <line x1="0" y1="0" x2="0" y2={-p.h} strokeWidth={ink.w * 1.1} />
              <g transform={`translate(0 ${-p.h})`}>
                {hairs.map((k) => (
                  <path
                    key={k}
                    d={`M0 ${-Math.abs(k) * 10} C ${k * p.w * 1.3} ${-40 - Math.abs(k) * 6}, ${k * p.w * 1.8} ${-78}, ${k * p.w * 0.8} ${-112 + Math.abs(k) * 14}`}
                    strokeWidth={ink.w * (Math.abs(k) < 0.3 ? 0.9 : 0.6)}
                  />
                ))}
              </g>
            </g>
          ))}
        </g>
      </g>
    </g>
  )
}

function Renouee({ x, scale = 1, ink, delay, dur }: { x: number; scale?: number; ink: Ink; delay: number; dur: number }) {
  const stems = [
    { dx: 0, pts: [[0, 0], [-6, -60], [8, -120], [-4, -180], [10, -240], [2, -300]], lean: -4 },
    { dx: 48, pts: [[0, 0], [8, -55], [-4, -110], [10, -165], [0, -220], [8, -265]], lean: 6 },
    { dx: -46, pts: [[0, 0], [-8, -50], [4, -100], [-10, -150], [2, -200], [-6, -240]], lean: -9 },
  ]
  return (
    <g className="plant-grow" style={{ animationDelay: `${delay}ms`, transformOrigin: `${x}px 420px` }}>
      <g className="plant-sway" style={{ animationDuration: `${dur}s`, animationDelay: `${-delay / 2}ms`, transformOrigin: `${x}px 420px` }}>
        <g transform={`translate(${x} 420) scale(${scale})`}>
          {stems.map((s, si) => (
            <g key={si} transform={`translate(${s.dx} 0) rotate(${s.lean})`}>
              <polyline
                points={s.pts.map((p) => p.join(',')).join(' ')}
                fill="none"
                stroke={ink.stroke}
                strokeWidth={ink.w * 1.4}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={ink.o}
              />
              {/* Nœuds de la tige */}
              {s.pts.slice(1, -1).map(([px, py], i) => (
                <circle key={`n${i}`} cx={px} cy={py} r={2.2} fill="none" stroke={ink.stroke} strokeWidth={ink.w * 0.8} opacity={ink.o} />
              ))}
              {s.pts.slice(1, -1).map(([px, py], i) => (
                <HeartLeaf key={i} x={px} y={py} angle={i % 2 === 0 ? -62 : 62} s={0.95 - si * 0.1} ink={ink} />
              ))}
              {/* Épis floraux : petits traits en arête */}
              {[-1, 1].map((d) => (
                <g key={d} transform={`translate(${s.pts[s.pts.length - 1][0]} ${s.pts[s.pts.length - 1][1]}) rotate(${d * 28})`} stroke={ink.stroke} strokeWidth={ink.w * 0.7} opacity={ink.o} fill="none" strokeLinecap="round">
                  <line x1="0" y1="0" x2="0" y2="-48" />
                  {[8, 15, 22, 29, 36, 42].map((yy, i) => (
                    <g key={yy}>
                      <path d={`M0 ${-yy} l ${-5 + i * 0.4} ${-4}`} />
                      <path d={`M0 ${-yy} l ${5 - i * 0.4} ${-4}`} />
                      <circle cx={-5 + i * 0.4} cy={-yy - 4} r={1.3} />
                      <circle cx={5 - i * 0.4} cy={-yy - 4} r={1.3} />
                    </g>
                  ))}
                </g>
              ))}
            </g>
          ))}
        </g>
      </g>
    </g>
  )
}

function Baccharis({ x, scale = 1, ink, delay, dur }: { x: number; scale?: number; ink: Ink; delay: number; dur: number }) {
  const branches = [-34, -20, -8, 6, 20, 34]
  const rays = Array.from({ length: 12 }).map((_, i) => (i * 360) / 12)
  return (
    <g className="plant-grow" style={{ animationDelay: `${delay}ms`, transformOrigin: `${x}px 420px` }}>
      <g className="plant-sway" style={{ animationDuration: `${dur}s`, animationDelay: `${-delay / 4}ms`, transformOrigin: `${x}px 420px` }}>
        <g transform={`translate(${x} 420) scale(${scale})`} stroke={ink.stroke} fill="none" strokeLinecap="round" opacity={ink.o}>
          <path d="M-3 0 L-2 -70 M3 0 L2 -70" strokeWidth={ink.w} />
          {branches.map((a, bi) => {
            const h = 150 + (bi % 3) * 30
            const pt = (t: number) => [2 * (1 - t) * t * a * 1.6 + t * t * a * 2.4, 2 * (1 - t) * t * -h * 0.5 + t * t * -h]
            return (
              <g key={a} transform="translate(0 -60)">
                <path d={`M0 0 Q ${a * 1.6} ${-h * 0.5} ${a * 2.4} ${-h}`} strokeWidth={ink.w} />
                {[0.35, 0.55, 0.75, 0.92].map((t, li) => {
                  const [px, py] = pt(t)
                  return (
                    <g key={li}>
                      <Leaf x={px} y={py} angle={a + (li % 2 ? 55 : -55)} len={22} w={8} ink={ink} />
                      <Leaf x={px} y={py} angle={a + (li % 2 ? -50 : 60)} len={18} w={7} ink={ink} />
                    </g>
                  )
                })}
                {/* Aigrettes : petites couronnes de rayons */}
                {[[0, 0, 9], [-9, -6, 6], [9, -5, 6]].map(([cx, cy, r], ci) => (
                  <g key={ci} transform={`translate(${a * 2.4 + cx} ${-h + cy})`} strokeWidth={ink.w * 0.6}>
                    {rays.map((deg) => (
                      <line key={deg} x1="0" y1="0" x2={Math.cos((deg * Math.PI) / 180) * r} y2={Math.sin((deg * Math.PI) / 180) * r} />
                    ))}
                    <circle cx="0" cy="0" r={r * 0.3} />
                  </g>
                ))}
              </g>
            )
          })}
        </g>
      </g>
    </g>
  )
}

function Buddleia({ x, scale = 1, ink, delay, dur }: { x: number; scale?: number; ink: Ink; delay: number; dur: number }) {
  const stems = [
    { a: -38, h: 260 },
    { a: -16, h: 300 },
    { a: 6, h: 320 },
    { a: 26, h: 280 },
    { a: 44, h: 230 },
  ]
  return (
    <g className="plant-grow" style={{ animationDelay: `${delay}ms`, transformOrigin: `${x}px 420px` }}>
      <g className="plant-sway" style={{ animationDuration: `${dur}s`, animationDelay: `${-delay / 2}ms`, transformOrigin: `${x}px 420px` }}>
        <g transform={`translate(${x} 420) scale(${scale})`} stroke={ink.stroke} fill="none" strokeLinecap="round" opacity={ink.o}>
          {stems.map((s, si) => {
            const rad = (s.a * Math.PI) / 180
            const ex = Math.sin(rad) * s.h
            const ey = -Math.cos(rad) * s.h
            const cx = ex * 0.25
            const cy = ey * 0.75
            const pt = (t: number) => [2 * (1 - t) * t * cx + t * t * ex, 2 * (1 - t) * t * cy + t * t * ey]
            return (
              <g key={si}>
                <path d={`M0 0 Q ${cx} ${cy} ${ex} ${ey}`} strokeWidth={ink.w * 1.1} />
                {[0.3, 0.45, 0.6, 0.74].map((t, li) => {
                  const [px, py] = pt(t)
                  return (
                    <g key={li}>
                      <Leaf x={px} y={py} angle={s.a - 70} len={44} w={9} ink={ink} />
                      <Leaf x={px} y={py} angle={s.a + 70} len={44} w={9} ink={ink} />
                    </g>
                  )
                })}
                {/* Grappe conique : contour + texture de petits arcs */}
                <g transform={`translate(${ex} ${ey}) rotate(${s.a * 1.3})`}>
                  <path d="M-16 0 C -14 -30, -8 -60, 0 -84 C 8 -60, 14 -30, 16 0 Z" strokeWidth={ink.w} />
                  {Array.from({ length: 9 }).map((_, r) => {
                    const w = 13 - r * 1.3
                    const yy = -6 - r * 8.5
                    return (
                      <g key={r} strokeWidth={ink.w * 0.55}>
                        <path d={`M${-w} ${yy} q ${w * 0.5} -3 ${w} 0`} />
                        <path d={`M${-w * 0.6} ${yy + 4} q ${w * 0.3} -2.5 ${w * 0.6} 0`} />
                        <path d={`M0 ${yy + 4} q ${w * 0.3} -2.5 ${w * 0.6} 0`} />
                      </g>
                    )
                  })}
                </g>
              </g>
            )
          })}
        </g>
      </g>
    </g>
  )
}

/* ── Composition ───────────────────────────────────────────── */

export default function PlantField({ className = '', layer, viewBox = '0 0 1440 420', fit = 'slice' }: Props) {
  if (layer === 'back') {
    const ink: Ink = { stroke: '#4f8a60', w: 1.1, o: 0.55 }
    return (
      <svg viewBox={viewBox} preserveAspectRatio={`xMidYMax ${fit}`} className={className} aria-hidden="true">
        <Pampa x={60} scale={0.62} ink={ink} delay={0} dur={9} />
        <Buddleia x={330} scale={0.6} ink={ink} delay={100} dur={8.5} />
        <Renouee x={620} scale={0.6} ink={ink} delay={200} dur={10} />
        <Baccharis x={880} scale={0.62} ink={ink} delay={150} dur={9.5} />
        <Pampa x={1160} scale={0.58} ink={ink} delay={50} dur={8} />
        <Renouee x={1400} scale={0.55} ink={ink} delay={250} dur={9} />
      </svg>
    )
  }

  const ink: Ink = { stroke: '#e6dcc3', w: 1.4, o: 0.8 }
  return (
    <svg viewBox={viewBox} preserveAspectRatio={`xMidYMax ${fit}`} className={className} aria-hidden="true">
      <Pampa x={170} scale={1} ink={ink} delay={300} dur={7} />
      <Renouee x={470} scale={0.95} ink={ink} delay={550} dur={6.2} />
      <Baccharis x={760} scale={0.95} ink={ink} delay={450} dur={7.6} />
      <Buddleia x={1050} scale={0.95} ink={ink} delay={650} dur={6.8} />
      <Pampa x={1330} scale={0.85} ink={ink} delay={400} dur={7.4} />
    </svg>
  )
}
