/**
 * Pré-rendu statique (SSG) après `vite build` :
 *  1. build SSR de src/entry-server.tsx dans dist-ssr/
 *  2. pour chaque route, rendu React → HTML, injection dans le template
 *     dist/index.html avec les balises <head> propres à la page
 *  3. écriture de dist/<route>/index.html, du sitemap.xml et de 404.html
 */
import { build } from 'vite'
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { pathToFileURL } from 'node:url'

const root = resolve(import.meta.dirname, '..')
const dist = resolve(root, 'dist')
const ssrDir = resolve(root, 'dist-ssr')

await build({
  root,
  logLevel: 'warn',
  build: { ssr: 'src/entry-server.tsx', outDir: ssrDir, emptyOutDir: true },
})

const { render, getSeo, PRERENDER_ROUTES } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href)
const template = readFileSync(resolve(dist, 'index.html'), 'utf8')

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function headFor(seo) {
  const tags = [
    `<title>${esc(seo.title)}</title>`,
    `<meta name="description" content="${esc(seo.description)}" />`,
    `<link rel="canonical" href="${seo.canonical}" />`,
    `<meta property="og:title" content="${esc(seo.title)}" />`,
    `<meta property="og:description" content="${esc(seo.description)}" />`,
    `<meta property="og:url" content="${seo.canonical}" />`,
    `<meta property="og:image" content="${seo.image}" />`,
    `<meta name="twitter:title" content="${esc(seo.title)}" />`,
    `<meta name="twitter:description" content="${esc(seo.description)}" />`,
    `<meta name="twitter:image" content="${seo.image}" />`,
    ...seo.jsonLd.map((o) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, '\\u003c')}</script>`),
  ]
  return tags.join('\n    ')
}

function page(route, seo) {
  return template
    .replace('<!--app-head-->', headFor(seo))
    .replace('<!--app-html-->', render(route))
}

const today = new Date().toISOString().slice(0, 10)
const urls = []

for (const route of PRERENDER_ROUTES) {
  const seo = getSeo(route)
  const file = route === '/' ? resolve(dist, 'index.html') : resolve(dist, route.slice(1), 'index.html')
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, page(route, seo))
  urls.push({ loc: seo.canonical, priority: route === '/' ? '1.0' : route.startsWith('/especes/') ? '0.8' : '0.3' })
  console.log(`  pré-rendu ${route}`)
}

// Page 404 (servie par Netlify avec le statut 404)
writeFileSync(resolve(dist, '404.html'), page('/404', getSeo('/404')).replace('<meta name="robots" content="index, follow" />', '<meta name="robots" content="noindex" />'))

// Sitemap
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`
writeFileSync(resolve(dist, 'sitemap.xml'), sitemap)

rmSync(ssrDir, { recursive: true, force: true })
console.log(`  ${urls.length} pages, sitemap.xml, 404.html`)
