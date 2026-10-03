/**
 * Données des espèces exotiques envahissantes traitées par Eterneterre.
 * Utilisées par la section « Espèces » de l'accueil et par les pages dédiées
 * /especes/<slug> (une URL par espèce pour le référencement).
 */

export type Espece = {
  slug: string
  nom: string
  latin: string
  famille?: string
  origine: string
  /** Accroche courte (section accueil + meta description) */
  resume: string
  /** Titre SEO de la page dédiée */
  seoTitle: string
  /** Meta description de la page dédiée (≤ 155 caractères) */
  meta: string
  image: string
  imageAlt: string
  fiche: string
  bordure: string
  /** Paragraphe d'introduction de la page dédiée */
  intro: string[]
  identification: string[]
  reglementation: string[]
  methode: string[]
  impact: string[]
  aNePasFaire: string[]
  dechets: string[]
  periode: string
  /** Question/réponse pour le bloc FAQ (et le JSON-LD FAQPage) */
  faq: { q: string; a: string }[]
}

export const especes: Espece[] = [
  {
    slug: 'renouee-du-japon',
    nom: 'Renouée du Japon',
    latin: 'Reynoutria japonica',
    famille: 'Polygonaceae',
    origine: 'Asie de l\'Est',
    resume:
      'La plus redoutée des invasives. Ses rhizomes peuvent s\'enfoncer à 3 mètres de profondeur et traverser le bitume. Elle déstabilise les berges, obstrue les cours d\'eau et provoque des dégâts considérables sur les infrastructures. Un fragment de 1 cm suffit à régénérer un plant entier.',
    seoTitle: 'Traitement de la Renouée du Japon en Bretagne — arrachage, criblage des rhizomes',
    meta: "Arrachage des rhizomes, criblage des terres et suivi pluriannuel : Eterneterre traite la Renouée du Japon en Bretagne, pour collectivités, TP et particuliers.",
    image: '/images/renouee.webp',
    imageAlt: 'Renouée du Japon (Reynoutria japonica) en Bretagne — tiges rouges et feuilles en cœur, plante invasive traitée par Eterneterre',
    fiche: '/pdfs/renouee-du-japon.pdf',
    bordure: 'border-foret',
    intro: [
      'La Renouée du Japon est l\'espèce exotique envahissante la plus difficile à éliminer en Bretagne. Introduite comme plante ornementale au XIXe siècle, elle colonise aujourd\'hui les berges, les talus, les friches et les abords de chantiers du Morbihan, du Finistère, des Côtes-d\'Armor et de l\'Ille-et-Vilaine.',
      'Eterneterre intervient sur les foyers de renouée avec une méthode mécanique complète : arrachage des rhizomes, criblage des terres contaminées et replantation d\'espèces locales pour empêcher toute reprise. Chaque chantier est suivi sur plusieurs saisons.',
    ],
    identification: [
      'Herbacée vivace de 1 à 3 m de hauteur, à croissance très rapide au printemps.',
      'Tiges creuses, rougeâtres, tachetées, semblables à des cannes de bambou.',
      'Feuilles larges en forme de cœur tronqué, disposées en zigzag le long de la tige.',
      'Floraison blanc crème en fin d\'été ; multiplication quasi exclusivement par rhizomes.',
    ],
    reglementation: [
      'Espèce inscrite sur la liste des espèces exotiques envahissantes préoccupantes (règlement UE n° 1143/2014).',
      'Interdiction de plantation, de transport et de dissémination (arrêté ministériel du 24 juin 2008 pour les milieux aquatiques).',
      'Le gestionnaire d\'un terrain infesté est responsable de la non-propagation vers les parcelles voisines et les cours d\'eau.',
    ],
    methode: [
      'Cartographie GPS des foyers et des zones sources avant intervention.',
      'Arrachage mécanique complet des rhizomes, jusqu\'à 3 m de profondeur selon le terrain.',
      'Criblage des terres contaminées pour extraire et trier les fragments de rhizomes.',
      'Bâchage ou replantation d\'espèces locales (aulne, saule) pour occuper l\'espace.',
      'Suivi et interventions répétées sur 3 à 5 ans pour épuiser les repousses.',
    ],
    impact: [
      'Érosion et déstabilisation des berges, obstruction des cours d\'eau.',
      'Dégradation des infrastructures : enrobés, murets, canalisations traversés par les rhizomes.',
      'Disparition de la flore locale sous un couvert dense et monospécifique.',
      'Coût élevé si l\'intervention est tardive : suivi pluriannuel et traitement spécialisé des terres.',
    ],
    aNePasFaire: [
      'Couper ou broyer sans plan de gestion : chaque fragment régénère un plant.',
      'Remanier ou déplacer les terres sans contrôle (terrassement, déblais).',
      'Jeter les déchets dans la nature, composter sur site ou brûler sur place.',
    ],
    dechets: [
      'Rhizomes et tiges restent viables très longtemps : filière spécialisée obligatoire.',
      'Aucun compostage sur site ; évacuation vers une installation agréée.',
    ],
    periode: 'De la fin de l\'été à l\'hiver, hors période de germination.',
    faq: [
      {
        q: 'Peut-on se débarrasser définitivement de la Renouée du Japon ?',
        a: 'Oui, mais uniquement avec une méthode complète (arrachage des rhizomes, criblage des terres, replantation) et un suivi sur plusieurs années. Une simple coupe ne fait que renforcer la plante.',
      },
      {
        q: 'Que faire des terres contaminées par la renouée ?',
        a: 'Les terres doivent être criblées pour en extraire les rhizomes, puis contrôlées avant tout réemploi. Elles ne doivent jamais être déplacées sans traitement : c\'est la première cause de propagation sur les chantiers.',
      },
      {
        q: 'Intervenez-vous pour les particuliers ou seulement les collectivités ?',
        a: 'Nous intervenons pour les deux : collectivités, syndicats de bassin, entreprises de travaux publics, exploitants agricoles et particuliers, partout en Bretagne.',
      },
    ],
  },
  {
    slug: 'herbe-de-la-pampa',
    nom: 'Herbe de la Pampa',
    latin: 'Cortaderia selloana',
    famille: 'Poaceae',
    origine: 'Amérique du Sud',
    resume:
      'Ses immenses plumeaux colonisent les terrains vagues, les bords de routes et les zones humides. En étouffant la flore locale, elle réduit drastiquement la biodiversité et augmente les risques d\'incendie. Son éradication nécessite l\'extraction totale du système racinaire.',
    seoTitle: 'Arrachage de l\'Herbe de la Pampa en Bretagne — élimination des touffes et plateaux racinaires',
    meta: "Arrachage complet des touffes d'Herbe de la Pampa avec plateau racinaire, évacuation en filière agréée et suivi des repousses, partout en Bretagne.",
    image: '/images/pampa.webp',
    imageAlt: 'Herbe de la pampa (Cortaderia selloana) en Bretagne — grandes touffes à plumeaux blancs, plante invasive arrachée par Eterneterre',
    fiche: '/pdfs/Herbe-de-la-pampa.pdf',
    bordure: 'border-terre',
    intro: [
      'Longtemps plantée dans les jardins et les ronds-points pour ses plumeaux décoratifs, l\'Herbe de la Pampa s\'est échappée des massifs et colonise aujourd\'hui le littoral breton, les friches, les talus routiers et les zones humides. Chaque plumeau disperse des dizaines de milliers de graines emportées par le vent.',
      'Eterneterre arrache les touffes avec leur plateau racinaire complet, évacue les déchets volumineux vers une filière agréée et assure le suivi des repousses la saison suivante.',
    ],
    identification: [
      'Grandes touffes herbacées de 2 à 4 m, feuilles fines et coupantes retombantes.',
      'Plumeaux blancs à rosés dressés de la fin de l\'été à l\'automne.',
      'Reproduction par graines très légères dispersées par le vent sur plusieurs kilomètres.',
    ],
    reglementation: [
      'Espèce exotique envahissante réglementée : interdiction de plantation et de dissémination.',
      'De nombreuses communes littorales bretonnes imposent son retrait dans les documents d\'urbanisme.',
    ],
    methode: [
      'Intervention avant la floraison pour éviter la dispersion des graines.',
      'Arrachage complet du plateau racinaire à la pelle mécanique.',
      'Broyage des parties aériennes et évacuation vers un site agréé.',
      'Suivi annuel des repousses et des zones de graines identifiées.',
    ],
    impact: [
      'Concurrence directe avec la végétation des dunes, des landes et des zones humides.',
      'Risque d\'incendie accru : les touffes sèches sont très inflammables.',
      'Déchets volumineux et coût d\'élimination élevé en cas d\'intervention tardive.',
    ],
    aNePasFaire: [
      'Couper uniquement la partie aérienne : la touffe repart de plus belle.',
      'Laisser les plumeaux en graines sur place ou en déchetterie à l\'air libre.',
      'Composter ou brûler sans autorisation.',
    ],
    dechets: [
      'Évacuation vers un site agréé, plumeaux ensachés pour éviter toute dispersion.',
    ],
    periode: 'Au printemps, avant la floraison estivale.',
    faq: [
      {
        q: 'Est-il interdit d\'avoir de l\'Herbe de la Pampa dans son jardin ?',
        a: 'Sa plantation et sa vente sont désormais interdites. Les plants existants doivent être gérés pour éviter la dissémination : couper les plumeaux avant maturité, et idéalement arracher la touffe complète.',
      },
      {
        q: 'Pourquoi faire appel à une entreprise plutôt que d\'arracher soi-même ?',
        a: 'Le plateau racinaire d\'une touffe adulte pèse plusieurs centaines de kilos et nécessite un engin. Les feuilles sont coupantes et les déchets volumineux doivent rejoindre une filière adaptée.',
      },
    ],
  },
  {
    slug: 'baccharis',
    nom: 'Baccharis',
    latin: 'Baccharis halimifolia',
    famille: 'Asteraceae',
    origine: 'Amérique du Nord',
    resume:
      'Arbuste nord-américain qui envahit les marais salants et les zones littorales. Chaque plant produit jusqu\'à un million de graines par an, supplantant les espèces endémiques des prés-salés et menaçant ces écosystèmes fragiles.',
    seoTitle: 'Élimination du Baccharis (Séneçon en arbre) en Bretagne — arrachage des souches sur le littoral',
    meta: "Arrachage des souches de Baccharis (Séneçon en arbre) sur le littoral breton, hors période de graines, avec suivi GPS et surveillance des repousses.",
    image: '/images/bacharis-real.webp',
    imageAlt: 'Baccharis halimifolia (Séneçon en arbre) en fleurs dans un marais littoral breton — arbuste invasif traité par Eterneterre',
    fiche: '/pdfs/Baccharis.pdf',
    bordure: 'border-mousse',
    intro: [
      'Le Baccharis, ou Séneçon en arbre, est l\'arbuste invasif emblématique du littoral breton : marais salants, prés-salés, bords d\'étangs et zones humides du golfe du Morbihan, de la presqu\'île de Guérande ou de la baie de Saint-Brieuc. Il forme des fourrés denses qui ferment les milieux ouverts.',
      'Eterneterre extrait les souches et le système racinaire en période hors graines, puis assure une surveillance des repousses pendant 2 à 3 ans. Les zones infestées sont relevées au GPS pour suivre l\'évolution du chantier.',
    ],
    identification: [
      'Arbuste ligneux de 2 à 4 m, feuilles alternes grisâtres légèrement dentées.',
      'Floraison blanc jaunâtre en fin d\'été ; aigrettes blanches cotonneuses à l\'automne.',
      'Reproduction par graines très nombreuses (jusqu\'à un million par pied) et par drageons.',
    ],
    reglementation: [
      'Espèce exotique envahissante préoccupante pour l\'Union européenne (règlement UE n° 1143/2014).',
      'Interdiction de plantation, de transport et de dissémination.',
    ],
    methode: [
      'Intervention en automne-hiver, hors période de graines.',
      'Arrachage complet des racines et des souches (le recépage seul provoque des rejets).',
      'Pas de broyage sur site : les graines en aigrettes se dispersent au moindre souffle.',
      'Surveillance des repousses pendant 2 à 3 ans et relevé GPS des zones traitées.',
    ],
    impact: [
      'Fermeture des prés-salés et perte des espèces végétales et animales inféodées.',
      'Pollen allergisant en fin d\'été.',
      'Suivi pluriannuel coûteux si les premiers pieds ne sont pas traités rapidement.',
    ],
    aNePasFaire: [
      'Broyer sur site un pied en graines.',
      'Laisser les aigrettes au sol ou en tas.',
      'Composter ou brûler sur place.',
    ],
    dechets: [
      'Graines disséminantes : évacuation vers une filière spécialisée, en big-bags fermés.',
    ],
    periode: 'Automne et hiver, après la fructification et hors période de graines.',
    faq: [
      {
        q: 'Pourquoi intervenir en hiver sur le Baccharis ?',
        a: 'Parce qu\'en fin d\'été et à l\'automne, le moindre mouvement du pied disperse des milliers de graines. L\'arrachage en période hors graines évite de réensemencer la zone pendant les travaux.',
      },
      {
        q: 'Le Baccharis repousse-t-il après arrachage ?',
        a: 'Des rejets peuvent apparaître à partir de fragments de racines ou de la banque de graines du sol. C\'est pourquoi nous prévoyons une surveillance et des passages de reprise pendant 2 à 3 ans.',
      },
    ],
  },
  {
    slug: 'arbre-a-papillons',
    nom: 'Arbre à Papillons',
    latin: 'Buddleja davidii',
    famille: 'Scrophulariaceae',
    origine: 'Chine',
    resume:
      'Malgré son apparence séduisante, il colonise les friches, les murs et les voies ferrées avec une vigueur redoutable. Il appauvrit les sols et concurrence directement les espèces nourricières locales dont dépendent les pollinisateurs natifs.',
    seoTitle: 'Arrachage de l\'Arbre à Papillons (Buddleja) en Bretagne — friches, voies ferrées, berges',
    meta: "Arrachage de l'Arbre à Papillons (Buddleja davidii) sur friches, berges et voies ferrées en Bretagne, extraction des souches et suivi des repousses.",
    image: '/images/arbre-papillon.webp',
    imageAlt: 'Arbre à papillons (Buddleja davidii) en fleurs violettes — arbuste invasif des friches traité par Eterneterre en Bretagne',
    fiche: '/pdfs/herbe-a-papillon.pdf',
    bordure: 'border-lichen',
    intro: [
      'L\'Arbre à Papillons, ou Buddleia, est encore vendu en jardinerie alors qu\'il figure parmi les arbustes les plus envahissants des friches urbaines, des talus ferroviaires, des carrières et des bords de rivières en Bretagne. Ses graines légères se glissent dans la moindre fissure de mur ou de trottoir.',
      'Eterneterre arrache les jeunes plants et extrait les souches adultes, puis surveille les repousses. Sur les grands linéaires (voies, berges), nous programmons des passages réguliers pour épuiser la banque de graines.',
    ],
    identification: [
      'Arbuste de 2 à 5 m aux rameaux souples et arqués.',
      'Feuilles lancéolées vert sombre, grisâtres dessous.',
      'Longues grappes de fleurs violettes odorantes de juillet à septembre.',
      'Reproduction par graines très légères et par rejets de souche.',
    ],
    reglementation: [
      'Espèce exotique envahissante : dissémination interdite, retrait recommandé par les gestionnaires d\'espaces naturels.',
    ],
    methode: [
      'Arrachage manuel ou mécanique des jeunes plants.',
      'Extraction des souches adultes pour éviter les rejets.',
      'Surveillance des repousses et interventions de reprise.',
      'Conseil sur les espèces locales de substitution, réellement utiles aux pollinisateurs.',
    ],
    impact: [
      'Substitution de la flore locale et appauvrissement des sols.',
      'Attire les papillons adultes mais ne nourrit aucune chenille locale : impact négatif sur les pollinisateurs.',
      'Arrachage répétitif coûteux s\'il n\'est pas planifié.',
    ],
    aNePasFaire: [
      'Laisser des branches ou des graines sur le site.',
      'Composter ou brûler sur place.',
      'Replanter un Buddleia à proximité d\'un milieu naturel.',
    ],
    dechets: [
      'Évacuation hors site, surveillance post-intervention.',
    ],
    periode: 'Au printemps, avant la floraison.',
    faq: [
      {
        q: 'L\'Arbre à Papillons n\'est-il pas bon pour les pollinisateurs ?',
        a: 'Il attire les papillons adultes avec son nectar, mais aucune chenille locale ne se nourrit de ses feuilles. Il remplace les plantes nourricières dont dépendent les espèces bretonnes. Des alternatives locales existent : saule, aubépine, lierre, ronce.',
      },
      {
        q: 'Que planter à la place ?',
        a: 'Des espèces locales adaptées au terrain : saule marsault, aulne glutineux, ajonc d\'Europe ou bouleau selon le milieu. Nous les proposons en fin de chantier pour occuper l\'espace.',
      },
    ],
  },
]

export function getEspece(slug: string): Espece | undefined {
  return especes.find((e) => e.slug === slug)
}
