import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import EspecePage from './pages/EspecePage'
import MentionsLegales from './pages/MentionsLegales'
import NotFound from './pages/NotFound'
import { useSeo } from './lib/useSeo'

/**
 * Gère le scroll lors des navigations :
 *  - ancre (#services) → défilement doux vers la section, y compris depuis
 *    une autre page (on attend que la page cible soit montée) ;
 *  - changement de page sans ancre → retour en haut.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      let tries = 0
      const tick = () => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        else if (tries++ < 10) requestAnimationFrame(tick)
      }
      tick()
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  useSeo()
  return (
    <>
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/especes/:slug" element={<EspecePage />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
