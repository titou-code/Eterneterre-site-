/**
 * Logo Eterneterre — utilise le fichier PNG officiel
 */
import logo from '../assets/Logo.png'

type LogoProps = {
  className?: string
  imgStyle?: React.CSSProperties
}

export default function Logo({ className = 'h-[7.5rem] sm:h-[9rem] w-auto', imgStyle }: LogoProps) {
  return (
    <a href="#" className="group inline-block no-underline" aria-label="Eterneterre Bretagne — Retour en haut">
      <img
        src={logo}
        alt="Eterneterre — Traitement des végétaux envahissants en Bretagne"
        className={`${className} transition-transform duration-500 group-hover:scale-105`}
        style={imgStyle}
      />
    </a>
  )
}
