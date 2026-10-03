import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { getSeo } from './seo'

function setMeta(selector: string, attr: string, value: string) {
  const el = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector)
  if (el) el.setAttribute(attr, value)
}

/**
 * Met à jour <title>, meta description, canonical et Open Graph lors d'une
 * navigation côté client. Le HTML initial de chaque page est déjà pré-rendu
 * avec les bonnes balises (voir scripts/prerender.mjs).
 */
export function useSeo() {
  const { pathname } = useLocation()
  useEffect(() => {
    const seo = getSeo(pathname)
    document.title = seo.title
    setMeta('meta[name="description"]', 'content', seo.description)
    setMeta('link[rel="canonical"]', 'href', seo.canonical)
    setMeta('meta[property="og:title"]', 'content', seo.title)
    setMeta('meta[property="og:description"]', 'content', seo.description)
    setMeta('meta[property="og:url"]', 'content', seo.canonical)
    setMeta('meta[property="og:image"]', 'content', seo.image)
    setMeta('meta[name="twitter:title"]', 'content', seo.title)
    setMeta('meta[name="twitter:description"]', 'content', seo.description)
    setMeta('meta[name="twitter:image"]', 'content', seo.image)
  }, [pathname])
}
