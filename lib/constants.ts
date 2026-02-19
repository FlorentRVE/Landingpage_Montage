export type PortfolioCategory = "Immo" | "Tourisme" | "Coach" | "Ads";

export type PortfolioItem = {
  id: string;
  category: PortfolioCategory;
  title: string;
  subtitle?: string;
  instagramUrl: string; // tu remplaces par tes liens IG
};

export type Pack = {
  name: string;
  priceRange: string;
  forWho: string;
  bullets: string[];
  highlight?: boolean;
};

export const PACKS: Pack[] = [
  {
    name: "Starter Local",
    priceRange: "290€ – 690€ / mois",
    forWho: "Resto • tourisme • coach (démarrage)",
    bullets: [
      "4-8 shorts/mois (15–35s)",
      "Sous-titres + rythme + musique",
      "Branding léger (styles cohérents)",
      "1 révision incluse",
      "Livraison rapide & process simple",
    ],
  },
  {
    name: "Growth",
    priceRange: "790€ – 1 290€ / mois",
    forWho: "Créateurs & marques (récurrence + qualité)",
    bullets: [
      "10-16 shorts/mois",
      "2 styles de sous-titres (A/B)",
      "Habillage After Effects (branding propre)",
      "1–2 révisions incluses",
      "Exports optimisés (Reels/Shorts/TikTok)",
    ],
    highlight: true,
  },
  {
    name: "Ads / Agence",
    priceRange: "1 490€ – 2790€ / mois",
    forWho: "Agences • Social Ads (variantes + volume)",
    bullets: [
      "20–30 shorts/mois",
      "2–3 variantes de hook sur une sélection",
      "Lisibilité ads (safe zones, CTA, rythme)",
      "Process strict (dossiers, noms, versions)",
      "Priorité délais (selon planning)",
    ],
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  // IMMO (3)
  {
    id: "immo-1",
    category: "Immo",
    title: "Visite express — appartement T3",
    subtitle: "Hook + points forts + CTA",
    instagramUrl: "https://instagram.com/TON_LIEN_1",
  },
  {
    id: "immo-2",
    category: "Immo",
    title: "Avant / Après — rénovation",
    subtitle: "Rythme + captions punchy",
    instagramUrl: "https://instagram.com/TON_LIEN_2",
  },
  {
    id: "immo-3",
    category: "Immo",
    title: "Quartier en 20s",
    subtitle: "Infos utiles + style clean",
    instagramUrl: "https://instagram.com/TON_LIEN_3",
  },

  // TOURISME (3)
  {
    id: "tour-1",
    category: "Tourisme",
    title: "Spot rando — vibes + infos",
    subtitle: "Ambiance + temps + difficulté",
    instagramUrl: "https://instagram.com/TON_LIEN_4",
  },
  {
    id: "tour-2",
    category: "Tourisme",
    title: "Restaurant — plat hero shot",
    subtitle: "Cuts + sous-titres premium",
    instagramUrl: "https://instagram.com/TON_LIEN_5",
  },
  {
    id: "tour-3",
    category: "Tourisme",
    title: "Hôtel — chambre & vue",
    subtitle: "Story courte + brand feel",
    instagramUrl: "https://instagram.com/TON_LIEN_6",
  },

  // COACH (3)
  {
    id: "coach-1",
    category: "Coach",
    title: "Mythe vs Réalité",
    subtitle: "Facecam + punchlines",
    instagramUrl: "https://instagram.com/TON_LIEN_7",
  },
  {
    id: "coach-2",
    category: "Coach",
    title: "1 astuce = 1 vidéo",
    subtitle: "Structure claire + rythme",
    instagramUrl: "https://instagram.com/TON_LIEN_8",
  },
  {
    id: "coach-3",
    category: "Coach",
    title: "Mini-série — 3 épisodes",
    subtitle: "Narration + captions clean",
    instagramUrl: "https://instagram.com/TON_LIEN_11",
  },

  // ADS (3)
  {
    id: "ads-1",
    category: "Ads",
    title: "UGC ad — hook A/B",
    subtitle: "Variantes + CTA",
    instagramUrl: "https://instagram.com/TON_LIEN_9",
  },
  {
    id: "ads-2",
    category: "Ads",
    title: "Produit — démo rapide",
    subtitle: "Texte lisible + sound design",
    instagramUrl: "https://instagram.com/TON_LIEN_10",
  },
  {
    id: "ads-3",
    category: "Ads",
    title: "Offre — bénéfices en 20s",
    subtitle: "Cuts + proof + CTA",
    instagramUrl: "https://instagram.com/TON_LIEN_12",
  },
];

export const CATEGORIES: PortfolioCategory[] = [
  "Immo",
  "Tourisme",
  "Coach",
  "Ads",
];
