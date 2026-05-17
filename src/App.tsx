import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NotreMetier from './components/NotreMetier'
import Especes from './components/Especes'
import Services from './components/Services'
import DepollutiionSols from './components/DepollutiionSols'
import EspecesLocales from './components/EspecesLocales'
import PointsForts from './components/PointsForts'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MentionsLegales from './components/MentionsLegales'
import { useScrollReveal } from './hooks/useScrollReveal'

/**
 * Routing léger basé sur window.location.hash.
 * `#mentions-legales` → page Mentions légales standalone.
 * Tout le reste → site principal.
 */
function useHashRoute() {
  const [hash, setHash] = useState<string>(() => window.location.hash)
  useEffect(() => {
    const onChange = () => {
      const newHash = window.location.hash
      setHash(newHash)
      // Scroll en haut uniquement pour la page mentions légales
      if (newHash === '#mentions-legales') {
        window.scrollTo({ top: 0 })
      }
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash
}

export default function App() {
  const containerRef = useScrollReveal()
  const hash = useHashRoute()

  const isMentions = hash === '#mentions-legales'

  return (
    <>
      {/* Le main div reste toujours monté pour préserver les classes .visible
          et éviter que le hook useScrollReveal ne se réinitialise au retour
          depuis la page Mentions légales. */}
      <div
        ref={containerRef}
        className="min-h-screen"
        style={isMentions ? { display: 'none' } : undefined}
        aria-hidden={isMentions}
      >
        <Navbar />
        <Hero />
        <NotreMetier />
        <Especes />
        <Services />
        <DepollutiionSols />
        <EspecesLocales />
        <PointsForts />
        <Contact />
        <Footer />
      </div>
      {isMentions && <MentionsLegales />}
    </>
  )
}
