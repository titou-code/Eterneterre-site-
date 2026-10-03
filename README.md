# Eterneterre — site vitrine

Site de présentation d'Eterneterre, entreprise de traitement des plantes exotiques
envahissantes et de dépollution mécanique des sols en Bretagne. En ligne sur
[eterneterre.fr](https://eterneterre.fr), hébergé sur Netlify.

## Stack

- React 19 + TypeScript + Vite 8
- Tailwind CSS 4 (thème dans `src/index.css`)
- React Router (pages espèces, mentions légales, 404)
- Polices auto-hébergées (`@fontsource-variable`)
- Netlify Forms pour le formulaire de contact

## Commandes

```bash
npm install
npm run dev      # serveur de développement
npm run build    # build + pré-rendu statique de toutes les pages dans dist/
npm run preview  # prévisualisation du build
npm run lint
```

## Architecture

```
src/
  App.tsx              routes + gestion du scroll
  entry-client.tsx     montage/hydratation côté navigateur
  entry-server.tsx     rendu côté serveur (utilisé par le pré-rendu)
  data/especes.ts      contenu des 4 espèces (accueil + pages dédiées)
  lib/seo.ts           title / description / canonical / JSON-LD par route
  pages/               Home, EspecePage, MentionsLegales, NotFound
  components/          sections de l'accueil, Navbar, Footer, Contact…
scripts/prerender.mjs  génère dist/<route>/index.html, sitemap.xml, 404.html
public/                images (WebP), fiches PDF, robots.txt, favicon
```

### Pages générées

- `/` — accueil
- `/especes/renouee-du-japon`, `/especes/herbe-de-la-pampa`, `/especes/baccharis`, `/especes/arbre-a-papillons`
- `/mentions-legales`
- `404.html`

Chaque page est pré-rendue en HTML complet au build (titre, description,
canonical, Open Graph, données structurées schema.org) : les moteurs de
recherche n'ont pas besoin d'exécuter le JavaScript pour lire le contenu.

### Ajouter une espèce

1. Ajouter l'entrée dans `src/data/especes.ts` (slug, textes, image, fiche PDF).
2. Déposer l'image en WebP dans `public/images/` et la fiche dans `public/pdfs/`.
3. `npm run build` : la page, le lien dans le footer et l'entrée du sitemap sont générés automatiquement.
