/**
 * Logo Eterneterre — PNG officiel recadré (828×153).
 */
import { Link } from 'react-router'
import logo from '../assets/Logo.png'

type LogoProps = {
  /** Hauteur de l'image (classes Tailwind) */
  className?: string
  /** Version claire (sur fond sombre) */
  light?: boolean
}

export default function Logo({ className = 'h-9 sm:h-11', light = false }: LogoProps) {
  return (
    <Link to="/" className="group inline-flex items-center no-underline" aria-label="Eterneterre — Accueil">
      <img
        src={logo}
        alt="Eterneterre — Traitement des végétaux envahissants en Bretagne"
        width={828}
        height={153}
        className={`${className} w-auto transition-[transform,filter] duration-500 group-hover:scale-105 ${light ? 'brightness-0 invert' : ''}`}
      />
    </Link>
  )
}
