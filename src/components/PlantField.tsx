/**
 * Champ illustré des quatre espèces invasives traitées par Eterneterre.
 * Illustrations SVG originales (silhouettes stylisées), animées en CSS :
 *  - pousse à l'arrivée sur la page (.plant-grow, décalée par plante)
 *  - balancement continu comme sous le vent (.plant-sway, vitesses variées)
 *  - deux plans de profondeur pour la parallaxe souris (gérée par Hero)
 */

type Props = { className?: string; layer: 'back' | 'front'; viewBox?: string; fit?: 'slice' | 'meet' }

/* ── Primitives ─────────────────────────────────────────────── */

/** Feuille lancéolée (buddleia) ou ovale (baccharis) */
function Leaf({ x, y, angle, len = 26, w = 9, fill }: { x: number; y: number; angle: number; len?: number; w?: number; fill: string }) {
  return (
    <path
      d={`M0 0 C ${w} ${-len * 0.35}, ${w} ${-len * 0.75}, 0 ${-len} C ${-w} ${-len * 0.75}, ${-w} ${-len * 0.35}, 0 0 Z`}
      fill={fill}
      transform={`translate(${x} ${y}) rotate(${angle})`}
    />
  )
}

/** Feuille en cœur tronqué (renouée du Japon) */
function HeartLeaf({ x, y, angle, s = 1, fill }: { x: number; y: number; angle: number; s?: number; fill: string }) {
  return (
    <path
      d="M0 0 C -14 -4, -26 -14, -22 -28 C -19 -38, -8 -40, 0 -32 C 8 -40, 19 -38, 22 -28 C 26 -14, 14 -4, 0 0 Z"
      fill={fill}
      transform={`translate(${x} ${y}) rotate(${angle}) scale(${s})`}
    />
  )
}

/* ── Plantes ────────────────────────────────────────────────── */

function Pampa({ x, scale = 1, tone, plume, delay, dur }: { x: number; scale?: number; tone: string; plume: string; delay: number; dur: number }) {
  const plumes = [
    { a: -14, h: 230, w: 22 },
    { a: 0, h: 290, w: 26 },
    { a: 11, h: 250, w: 22 },
    { a: -5, h: 200, w: 18 },
    { a: 6, h: 180, w: 16 },
  ]
  const leaves = [-70, -52, -35, -18, 18, 35, 52, 70]
  return (
    <g className="plant-grow" style={{ animationDelay: `${delay}ms`, transformOrigin: `${x}px 420px` }}>
      <g className="plant-sway" style={{ animationDuration: `${dur}s`, animationDelay: `${-delay / 3}ms`, transformOrigin: `${x}px 420px` }}>
        <g transform={`translate(${x} 420) scale(${scale})`}>
          {/* Feuilles retombantes */}
          {leaves.map((a) => (
            <path
              key={a}
              d="M0 0 C 10 -70, 40 -120, 110 -150"
              fill="none"
              stroke={tone}
              strokeWidth="2.2"
              strokeLinecap="round"
              transform={`rotate(${a})`}
              opacity={0.85}
            />
          ))}
          {/* Tiges + plumeaux */}
          {plumes.map((p, i) => (
            <g key={i} transform={`rotate(${p.a})`}>
              <line x1="0" y1="0" x2="0" y2={-p.h} stroke={tone} strokeWidth="2.4" strokeLinecap="round" />
              <g transform={`translate(0 ${-p.h})`}>
                <path
                  d={`M0 0 C ${-p.w} -30, ${-p.w * 0.8} -80, 0 -110 C ${p.w * 0.8} -80, ${p.w} -30, 0 0 Z`}
                  fill={plume}
                  opacity={0.45}
                />
                {[-1, -0.8, -0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6, 0.8, 1].map((k) => (
                  <path
                    key={k}
                    d={`M0 -4 C ${k * p.w * 1.3} -36, ${k * p.w * 1.7} -74, ${k * p.w * 0.7} -112`}
                    fill="none"
                    stroke={plume}
                    strokeWidth={Math.abs(k) < 0.3 ? 1.6 : 1}
                    strokeLinecap="round"
                    opacity={0.85 - Math.abs(k) * 0.35}
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

function Renouee({ x, scale = 1, tone, leaf, flower, delay, dur }: { x: number; scale?: number; tone: string; leaf: string; flower: string; delay: number; dur: number }) {
  // Tige en zigzag : points successifs
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
                stroke={tone}
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {s.pts.slice(1, -1).map(([px, py], i) => (
                <HeartLeaf
                  key={i}
                  x={px}
                  y={py}
                  angle={i % 2 === 0 ? -62 : 62}
                  s={0.95 - si * 0.1}
                  fill={leaf}
                />
              ))}
              {/* Épis floraux blanc crème */}
              {[-1, 1].map((d) => (
                <g key={d} transform={`translate(${s.pts[s.pts.length - 1][0]} ${s.pts[s.pts.length - 1][1]}) rotate(${d * 28})`}>
                  <line x1="0" y1="0" x2="0" y2="-46" stroke={tone} strokeWidth="1.6" />
                  {[8, 16, 24, 32, 40].map((yy) => (
                    <circle key={yy} cx={0} cy={-yy} r={2.6 - yy / 30} fill={flower} opacity={0.9} />
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

function Baccharis({ x, scale = 1, tone, leaf, tuft, delay, dur }: { x: number; scale?: number; tone: string; leaf: string; tuft: string; delay: number; dur: number }) {
  const branches = [-34, -20, -8, 6, 20, 34]
  return (
    <g className="plant-grow" style={{ animationDelay: `${delay}ms`, transformOrigin: `${x}px 420px` }}>
      <g className="plant-sway" style={{ animationDuration: `${dur}s`, animationDelay: `${-delay / 4}ms`, transformOrigin: `${x}px 420px` }}>
        <g transform={`translate(${x} 420) scale(${scale})`}>
          <line x1="0" y1="0" x2="0" y2="-70" stroke={tone} strokeWidth="5" strokeLinecap="round" />
          {branches.map((a, bi) => {
            const h = 150 + (bi % 3) * 30
            return (
              <g key={a} transform="translate(0 -60)">
                <path d={`M0 0 Q ${a * 1.6} ${-h * 0.5} ${a * 2.4} ${-h}`} fill="none" stroke={tone} strokeWidth="2.4" strokeLinecap="round" />
                {[0.35, 0.55, 0.75, 0.92].map((t, li) => {
                  // point sur la courbe quadratique
                  const px = 2 * (1 - t) * t * a * 1.6 + t * t * a * 2.4
                  const py = 2 * (1 - t) * t * -h * 0.5 + t * t * -h
                  return (
                    <g key={li}>
                      <Leaf x={px} y={py} angle={a + (li % 2 ? 55 : -55)} len={22} w={8} fill={leaf} />
                      <Leaf x={px} y={py} angle={a + (li % 2 ? -50 : 60)} len={18} w={7} fill={leaf} />
                    </g>
                  )
                })}
                {/* Aigrettes cotonneuses en bout de branche */}
                <g transform={`translate(${a * 2.4} ${-h})`}>
                  {[[0, 0], [-7, -5], [7, -4], [0, -10], [-4, 5], [5, 5]].map(([cx, cy], ci) => (
                    <circle key={ci} cx={cx} cy={cy} r={ci === 0 ? 7 : 5} fill={tuft} opacity={0.95} />
                  ))}
                </g>
              </g>
            )
          })}
        </g>
      </g>
    </g>
  )
}

function Buddleia({ x, scale = 1, tone, leaf, flower, delay, dur }: { x: number; scale?: number; tone: string; leaf: string; flower: string; delay: number; dur: number }) {
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
        <g transform={`translate(${x} 420) scale(${scale})`}>
          {stems.map((s, si) => {
            // tige arquée : quadratique de (0,0) vers (sin a * h, -cos a * h) avec contrôle plus vertical
            const rad = (s.a * Math.PI) / 180
            const ex = Math.sin(rad) * s.h
            const ey = -Math.cos(rad) * s.h
            const cx = ex * 0.25
            const cy = ey * 0.75
            const pt = (t: number) => [2 * (1 - t) * t * cx + t * t * ex, 2 * (1 - t) * t * cy + t * t * ey]
            return (
              <g key={si}>
                <path d={`M0 0 Q ${cx} ${cy} ${ex} ${ey}`} fill="none" stroke={tone} strokeWidth="2.6" strokeLinecap="round" />
                {[0.3, 0.45, 0.6, 0.74].map((t, li) => {
                  const [px, py] = pt(t)
                  return (
                    <g key={li}>
                      <Leaf x={px} y={py} angle={s.a - 70} len={44} w={9} fill={leaf} />
                      <Leaf x={px} y={py} angle={s.a + 70} len={44} w={9} fill={leaf} />
                    </g>
                  )
                })}
                {/* Grappe conique violette */}
                <g transform={`translate(${ex} ${ey}) rotate(${s.a * 1.3})`}>
                  {Array.from({ length: 10 }).map((_, r) => {
                    const w = 5 + (9 - r) * 1.5
                    return (
                      <g key={r}>
                        <ellipse cx={0} cy={-r * 8} rx={w} ry={6} fill={flower} opacity={0.92} />
                        <circle cx={-w * 0.45} cy={-r * 8 - 2} r={2} fill="#f0e3ff" opacity={0.55} />
                        <circle cx={w * 0.4} cy={-r * 8 + 1} r={1.6} fill="#f0e3ff" opacity={0.4} />
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
    // Plan arrière : silhouettes plus sombres, plus petites, plus lentes
    const tone = '#2c5e3f'
    const leaf = '#2f6443'
    const soft = '#3d7a52'
    return (
      <svg viewBox={viewBox} preserveAspectRatio={`xMidYMax ${fit}`} className={className} aria-hidden="true">
        <Pampa x={60} scale={0.62} tone={tone} plume={soft} delay={0} dur={9} />
        <Buddleia x={330} scale={0.6} tone={tone} leaf={leaf} flower={soft} delay={100} dur={8.5} />
        <Renouee x={620} scale={0.6} tone={tone} leaf={leaf} flower={soft} delay={200} dur={10} />
        <Baccharis x={880} scale={0.62} tone={tone} leaf={leaf} tuft={soft} delay={150} dur={9.5} />
        <Pampa x={1160} scale={0.58} tone={tone} plume={soft} delay={50} dur={8} />
        <Renouee x={1400} scale={0.55} tone={tone} leaf={leaf} flower={soft} delay={250} dur={9} />
      </svg>
    )
  }

  const tone = '#6fae7c'
  const leaf = '#5f9d6c'
  return (
    <svg viewBox={viewBox} preserveAspectRatio={`xMidYMax ${fit}`} className={className} aria-hidden="true">
      <Pampa x={170} scale={1} tone={tone} plume="#eadfc4" delay={300} dur={7} />
      <Renouee x={470} scale={0.95} tone={tone} leaf={leaf} flower="#f3efe4" delay={550} dur={6.2} />
      <Baccharis x={760} scale={0.95} tone={tone} leaf={leaf} tuft="#efe9da" delay={450} dur={7.6} />
      <Buddleia x={1050} scale={0.95} tone={tone} leaf={leaf} flower="#a98bd1" delay={650} dur={6.8} />
      <Pampa x={1330} scale={0.85} tone={tone} plume="#eadfc4" delay={400} dur={7.4} />
    </svg>
  )
}
