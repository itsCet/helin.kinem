// ─────────────────────────────────────────────────────────────
//  Tout le contenu du site se modifie ici.
//  Les valeurs marquées « À COMPLÉTER » sont des exemples.
// ─────────────────────────────────────────────────────────────
window.SITE = {
  name: "Helin Kinem",
  handle: "helin.kinem",
  instagram: "https://www.instagram.com/helin.kinem/",
  city: "Genève",
  email: "contact@exemple.ch",          // À COMPLÉTER
  whatsapp: "",                          // ex. "41791234567" (optionnel)

  // Photo de profil + portfolio : déposer les fichiers dans assets/photos/
  portrait: "assets/photos/portrait.jpg",
  portfolio: [
    { src: "assets/photos/01.jpg", tag: { fr: "Lifestyle", en: "Lifestyle" } },
    { src: "assets/photos/02.jpg", tag: { fr: "Mode", en: "Fashion" } },
    { src: "assets/photos/03.jpg", tag: { fr: "Beauté", en: "Beauty" } },
    { src: "assets/photos/04.jpg", tag: { fr: "Genève", en: "Geneva" } },
    { src: "assets/photos/05.jpg", tag: { fr: "Food", en: "Food" } },
    { src: "assets/photos/06.jpg", tag: { fr: "Voyage", en: "Travel" } }
  ],

  // Chiffres clés — À COMPLÉTER avec les vraies stats Instagram
  stats: [
    { value: 12500, suffix: "",  label: { fr: "Abonnés", en: "Followers" } },
    { value: 6.4,   suffix: "%", label: { fr: "Taux d'engagement", en: "Engagement rate" }, decimals: 1 },
    { value: 85000, suffix: "",  label: { fr: "Vues moyennes / Reel", en: "Avg. views / Reel" } },
    { value: 78,    suffix: "%", label: { fr: "Audience en Suisse", en: "Audience in Switzerland" } }
  ],

  audience: {
    women: 72,                                            // % — À COMPLÉTER
    ages: [ ["18–24", 28], ["25–34", 46], ["35–44", 18], ["45+", 8] ],
    cities: [ ["Genève", 41], ["Lausanne", 14], ["Zurich", 9], ["Paris", 7] ]
  },

  niches: {
    fr: ["Lifestyle", "Mode", "Beauté", "Food & Cafés", "Voyage", "Genève"],
    en: ["Lifestyle", "Fashion", "Beauty", "Food & Cafés", "Travel", "Geneva"]
  },

  offers: [
    { icon: "♡", title: { fr: "Reel Instagram", en: "Instagram Reel" },
      text: { fr: "Concept, tournage et montage. Diffusé sur le compte, format vertical natif.",
              en: "Concept, shoot and edit. Published on the account, native vertical format." } },
    { icon: "✿", title: { fr: "Stories", en: "Stories" },
      text: { fr: "Séquence de 3 à 5 stories avec lien, sticker et code promo.",
              en: "3–5 story sequence with link, sticker and promo code." } },
    { icon: "✧", title: { fr: "Contenu UGC", en: "UGC content" },
      text: { fr: "Vidéos et photos livrées à la marque pour ses propres canaux et ses ads.",
              en: "Videos and photos delivered for the brand's own channels and ads." } },
    { icon: "❀", title: { fr: "Événements & lancements", en: "Events & launches" },
      text: { fr: "Présence et couverture en direct à Genève et en Suisse romande.",
              en: "Attendance and live coverage in Geneva and French-speaking Switzerland." } }
  ],

  // Marques déjà accompagnées — À COMPLÉTER (laisser vide pour masquer la section)
  brands: ["Marque A", "Marque B", "Marque C", "Marque D", "Marque E"]
};
