import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NotreMetier from './components/NotreMetier'
import Especes from './components/Especes'
import Services from './components/Services'
import Produits from './components/Produits'
import PointsForts from './components/PointsForts'
import Contact from './components/Contact'
import Footer from './components/Footer'

/**
 * Scroll-triggered reveal via Intersection Observer
 * Cible les classes .reveal, .reveal-left, .reveal-right, .stagger
 * Ajoute .visible quand l'élément entre dans le viewport
 */
function useScrollReveal() {
  useEffect(() => {
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

    const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger')
    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

export default function App() {
  useScrollReveal()

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <NotreMetier />
      <Especes />
      <Services />
      <Produits />
      <PointsForts />
      <Contact />
      <Footer />
    </div>
  )
}
