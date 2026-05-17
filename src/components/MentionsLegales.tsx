/**
 * Mentions légales — page standalone affichée via routing hash (#mentions-legales)
 */
import Logo from './Logo'

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-blanc">
      {/* Header simple */}
      <header className="border-b border-lichen/40 bg-blanc">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Logo className="h-[5rem] sm:h-[6.25rem] w-auto" />
          <a
            href="#"
            className="font-body text-sm text-ardoise/70 hover:text-foret transition-colors duration-300 no-underline"
          >
            ← Retour au site
          </a>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-terre mb-4">
          Informations légales
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-light text-foret mb-12 leading-tight">
          Mentions <span className="italic text-mousse">légales</span>
        </h1>

        <div className="space-y-10 font-body text-base text-ardoise/80 leading-relaxed">
          <Section titre="Éditeur du site">
            <p>
              <strong>Eterneterre</strong><br />
              Entreprise spécialisée dans le traitement des végétaux envahissants.
            </p>
            <p>
              Siège social : 1 chemin er goh fétan 56340 Carnac<br />
              Email : <a href="mailto:contact@eterneterre.fr" className="text-foret hover:text-mousse no-underline">contact@eterneterre.fr</a>
            </p>
          </Section>

          <Section titre="Directeur de la publication">
            <p>
              Le directeur de la publication est le représentant légal de la société
              Eterneterre.
            </p>
          </Section>

          <Section titre="Hébergement">
            <p>
              Ce site est hébergé par un prestataire professionnel dont les
              coordonnées peuvent être communiquées sur simple demande à l'adresse
              <a href="mailto:contact@eterneterre.fr" className="text-foret hover:text-mousse no-underline"> contact@eterneterre.fr</a>.
            </p>
          </Section>

          <Section titre="Propriété intellectuelle">
            <p>
              L'ensemble des contenus présents sur ce site (textes, logos,
              graphismes, iconographies, vidéos) est la propriété exclusive
              d'Eterneterre ou de ses partenaires. Toute reproduction, représentation,
              modification, publication ou adaptation, totale ou partielle, quel
              qu'en soit le moyen ou le procédé, est interdite sans autorisation
              écrite préalable.
            </p>
          </Section>

          <Section titre="Données personnelles (RGPD)">
            <p>
              Conformément au Règlement Général sur la Protection des Données
              (RGPD) et à la loi « Informatique et Libertés », vous disposez d'un
              droit d'accès, de rectification, d'effacement et d'opposition aux
              données personnelles vous concernant.
            </p>
            <p>
              Les informations collectées via le formulaire de contact sont
              utilisées exclusivement pour répondre à vos demandes. Elles ne sont
              jamais transmises à des tiers et sont conservées pour une durée
              maximale de trois ans après le dernier échange.
            </p>
            <p>
              Pour exercer vos droits, contactez-nous à l'adresse
              <a href="mailto:contact@eterneterre.fr" className="text-foret hover:text-mousse no-underline"> contact@eterneterre.fr</a>.
            </p>
          </Section>

          <Section titre="Cookies">
            <p>
              Ce site n'utilise pas de cookies de traçage publicitaire. Seuls des
              cookies techniques strictement nécessaires au bon fonctionnement du
              site peuvent être déposés sur votre navigateur.
            </p>
          </Section>

          <Section titre="Responsabilité">
            <p>
              Les informations diffusées sur ce site sont fournies à titre
              indicatif. Eterneterre met tout en œuvre pour en garantir l'exactitude
              et la mise à jour, mais ne saurait être tenue responsable d'éventuelles
              erreurs ou omissions.
            </p>
          </Section>
        </div>

        <div className="mt-16 pt-8 border-t border-lichen/40">
          <a
            href="#"
            className="inline-flex items-center gap-2 font-body text-sm font-medium text-foret hover:text-mousse transition-colors duration-300 no-underline"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Retour à l'accueil
          </a>
        </div>
      </main>
    </div>
  )
}

function Section({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold text-foret mb-4">
        {titre}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  )
}
