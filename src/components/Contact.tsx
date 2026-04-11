/**
 * Contact — formulaire distinctif + coordonnées
 * Design : fond vert foncé (inversé), formulaire avec bordures fines
 * Pas de Material/Bootstrap : champs avec labels flottants organiques
 */
import { useState, type FormEvent } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-foret relative overflow-hidden">
      {/* Texture décorative */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 10% 90%, rgba(168,181,160,0.4) 0%, transparent 50%),
            radial-gradient(ellipse at 90% 10%, rgba(139,111,71,0.3) 0%, transparent 40%)
          `,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-lande mb-4 reveal">
          Contact
        </p>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-blanc leading-tight mb-6 reveal">
          Parlons de votre <span className="italic text-lande">projet</span>
        </h2>

        <p className="font-body text-base text-blanc/60 mb-16 max-w-lg reveal">
          Envahisseurs identifiés sur votre terrain ? Besoin de sous-produits végétaux ?
          Contactez-nous pour un diagnostic personnalisé.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Formulaire */}
          <div className="md:col-span-7 reveal-left">
            {sent ? (
              <div className="py-16 text-center">
                <div className="font-display text-2xl text-blanc mb-4">
                  Message envoyé
                </div>
                <p className="font-body text-blanc/60">
                  Nous vous répondrons dans les meilleurs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-body text-xs tracking-widest uppercase text-blanc/50 mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-blanc/20 text-blanc font-body text-base py-3 px-0 focus:border-lande focus:outline-none transition-colors duration-300 placeholder:text-blanc/20"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block font-body text-xs tracking-widest uppercase text-blanc/50 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-blanc/20 text-blanc font-body text-base py-3 px-0 focus:border-lande focus:outline-none transition-colors duration-300 placeholder:text-blanc/20"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block font-body text-xs tracking-widest uppercase text-blanc/50 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-blanc/20 text-blanc font-body text-base py-3 px-0 focus:border-lande focus:outline-none transition-colors duration-300 resize-none placeholder:text-blanc/20"
                    placeholder="Décrivez votre besoin..."
                  />
                </div>

                <button
                  type="submit"
                  className="font-body text-sm font-medium px-8 py-4 bg-blanc text-foret rounded-full hover:bg-lande transition-colors duration-300 mt-4 cursor-pointer"
                >
                  Envoyer le message
                </button>
              </form>
            )}
          </div>

          {/* Coordonnées */}
          <div className="md:col-span-4 md:col-start-9 reveal-right">
            <div className="space-y-8">
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-blanc/40 mb-2">
                  Téléphone
                </p>
                <a
                  href="tel:+33664003585"
                  className="font-display text-xl text-blanc hover:text-lande transition-colors duration-300 no-underline"
                >
                  06 64 00 35 85
                </a>
              </div>

              <div>
                <p className="font-body text-xs tracking-widest uppercase text-blanc/40 mb-2">
                  Email
                </p>
                <a
                  href="mailto:nicolas.chinchole@gmail.com"
                  className="font-body text-base text-blanc/80 hover:text-lande transition-colors duration-300 no-underline break-all"
                >
                  nicolas.chinchole@gmail.com
                </a>
              </div>

              <div>
                <p className="font-body text-xs tracking-widest uppercase text-blanc/40 mb-2">
                  Localisation
                </p>
                <p className="font-body text-base text-blanc/80">
                  Bretagne, France
                </p>
              </div>

              {/* Petit élément décoratif */}
              <div className="pt-8">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-lichen/30">
                  <path
                    d="M24 4C24 4 8 16 8 30c0 8 7 14 16 14s16-6 16-14C40 16 24 4 24 4z"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <path d="M24 12v24" stroke="currentColor" strokeWidth="0.8" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
