import { Link } from 'react-router'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-creme pt-28 sm:pt-36">
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-terre mb-4">Erreur 404</p>
        <h1 className="font-display text-4xl sm:text-5xl font-light text-foret mb-6 leading-tight">
          Cette page a été <span className="italic text-mousse">arrachée</span>
        </h1>
        <p className="font-body text-base text-ardoise/70 mb-10">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="inline-block font-body text-sm font-medium px-6 py-3.5 bg-foret text-blanc rounded-full hover:bg-mousse transition-colors duration-300 no-underline"
        >
          Retour à l'accueil
        </Link>
      </div>
    </main>
  )
}
