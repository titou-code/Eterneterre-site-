import Hero from '../components/Hero'
import NotreMetier from '../components/NotreMetier'
import Especes from '../components/Especes'
import Services from '../components/Services'
import DepollutionSols from '../components/DepollutionSols'
import EspecesLocales from '../components/EspecesLocales'
import PointsForts from '../components/PointsForts'
import Contact from '../components/Contact'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Home() {
  const containerRef = useScrollReveal()
  return (
    <main ref={containerRef}>
      <Hero />
      <NotreMetier />
      <Especes />
      <Services />
      <DepollutionSols />
      <EspecesLocales />
      <PointsForts />
      <Contact />
    </main>
  )
}
