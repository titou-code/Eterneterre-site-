import { useEffect, useRef, type RefObject } from 'react'

/**
 * Hook React-idiomatic pour les animations scroll-triggered.
 * Utilise useRef au lieu de querySelectorAll pour rester dans le paradigme React.
 * Observe tous les éléments .reveal, .reveal-left, .reveal-right, .stagger
 * à l'intérieur du conteneur ref.
 */
export function useScrollReveal(): RefObject<HTMLDivElement | null> {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Sélecteurs cibles
    const SELECTORS = '.reveal, .reveal-left, .reveal-right, .stagger'

    // Rend tous les éléments animés immédiatement visibles (sans animation)
    const makeAllVisible = () => {
      container.querySelectorAll(SELECTORS).forEach((el) => {
        el.classList.add('visible')
      })
    }

    // Au retour via l'historique (bouton précédent), pageshow se déclenche
    // avec persisted: true — les éléments sont dans le bfcache, il faut
    // les forcer à visible car l'IntersectionObserver ne re-tire pas.
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) makeAllVisible()
    }
    window.addEventListener('pageshow', onPageShow)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    const targets = container.querySelectorAll(SELECTORS)
    targets.forEach((el) => {
      const rect = el.getBoundingClientRect()
      // Révèle immédiatement les éléments déjà dans le viewport
      // (retour depuis Mentions légales via navigation hash ou historique)
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible')
      } else {
        observer.observe(el)
      }
    })

    return () => {
      observer.disconnect()
      window.removeEventListener('pageshow', onPageShow)
    }
  }, [])

  return containerRef
}
