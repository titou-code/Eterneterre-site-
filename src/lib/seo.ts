/**
 * Métadonnées SEO par route.
 * Utilisé à la fois :
 *  - par le script de pré-rendu (scripts/prerender.mjs) pour injecter
 *    <title>, <meta> et JSON-LD dans le <head> HTML statique de chaque page,
 *  - par le hook useSeo() côté client pour mettre à jour le document lors
 *    d'une navigation sans rechargement.
 */
import { especes, getEspece } from '../data/especes'

export const SITE_URL = 'https://eterneterre.fr'
export const SITE_NAME = 'Eterneterre'
export const DEFAULT_IMAGE = `${SITE_URL}/images/pampa.webp`

export type SeoData = {
  title: string
  description: string
  canonical: string
  image: string
  jsonLd: object[]
}

export const ORGANIZATION = {
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: DEFAULT_IMAGE,
  email: 'nicolas.chinchole@eterneterre.fr',
  description:
    'Entreprise spécialisée dans le traitement des plantes exotiques envahissantes en Bretagne : arrachage, criblage des terres et rhizomes, broyage, dépollution mécanique des sols et replantation d\'espèces locales.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1 chemin er goh fétan',
    postalCode: '56340',
    addressLocality: 'Carnac',
    addressRegion: 'Bretagne',
    addressCountry: 'FR',
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Bretagne' },
    { '@type': 'AdministrativeArea', name: 'Morbihan' },
    { '@type': 'AdministrativeArea', name: 'Finistère' },
    { '@type': 'AdministrativeArea', name: 'Côtes-d\'Armor' },
    { '@type': 'AdministrativeArea', name: 'Ille-et-Vilaine' },
  ],
  knowsAbout: especes.map((e) => `${e.nom} (${e.latin})`),
}

function breadcrumb(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  }
}

export function getSeo(pathname: string): SeoData {
  const path = pathname.replace(/\/+$/, '') || '/'

  if (path === '/') {
    return {
      title: 'Eterneterre – Traitement des plantes invasives en Bretagne',
      description:
        'Eterneterre, spécialiste du traitement des végétaux envahissants en Bretagne : renouée du Japon, herbe de la pampa, baccharis, buddleia. Arrachage, criblage des rhizomes, dépollution des sols, replantation d\'espèces locales.',
      canonical: `${SITE_URL}/`,
      image: DEFAULT_IMAGE,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@graph': [
            ORGANIZATION,
            {
              '@type': 'WebSite',
              '@id': `${SITE_URL}/#website`,
              url: SITE_URL,
              name: SITE_NAME,
              publisher: { '@id': `${SITE_URL}/#organization` },
              inLanguage: 'fr-FR',
            },
            {
              '@type': 'Service',
              name: 'Traitement des plantes exotiques envahissantes',
              provider: { '@id': `${SITE_URL}/#organization` },
              areaServed: { '@type': 'AdministrativeArea', name: 'Bretagne' },
              serviceType: [
                'Arrachage de plantes invasives',
                'Criblage de terres et rhizomes',
                'Broyage de végétaux',
                'Dépollution mécanique des sols',
                'Replantation d\'espèces locales',
              ],
            },
          ],
        },
      ],
    }
  }

  if (path === '/mentions-legales') {
    return {
      title: 'Mentions légales – Eterneterre',
      description: 'Mentions légales et politique de confidentialité du site eterneterre.fr.',
      canonical: `${SITE_URL}/mentions-legales`,
      image: DEFAULT_IMAGE,
      jsonLd: [],
    }
  }

  const m = path.match(/^\/especes\/([a-z0-9-]+)$/)
  if (m) {
    const e = getEspece(m[1])
    if (e) {
      const url = `${SITE_URL}/especes/${e.slug}`
      return {
        title: `${e.seoTitle} | Eterneterre`,
        description: e.meta,
        canonical: url,
        image: `${SITE_URL}${e.image}`,
        jsonLd: [
          {
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Service',
                '@id': `${url}#service`,
                name: `Traitement de ${e.nom.toLowerCase()} en Bretagne`,
                serviceType: `Arrachage et traitement de ${e.nom} (${e.latin})`,
                provider: { '@id': `${SITE_URL}/#organization` },
                areaServed: { '@type': 'AdministrativeArea', name: 'Bretagne' },
                description: e.resume,
                image: `${SITE_URL}${e.image}`,
              },
              {
                '@type': 'FAQPage',
                mainEntity: e.faq.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
              },
              breadcrumb([
                { name: 'Accueil', url: `${SITE_URL}/` },
                { name: 'Espèces envahissantes', url: `${SITE_URL}/#especes` },
                { name: e.nom, url },
              ]),
            ],
          },
        ],
      }
    }
  }

  return {
    title: 'Page introuvable – Eterneterre',
    description: 'Cette page n\'existe pas ou a été déplacée.',
    canonical: `${SITE_URL}/`,
    image: DEFAULT_IMAGE,
    jsonLd: [],
  }
}

/** Toutes les routes à pré-rendre en HTML statique. */
export const PRERENDER_ROUTES: string[] = [
  '/',
  '/mentions-legales',
  ...especes.map((e) => `/especes/${e.slug}`),
]
