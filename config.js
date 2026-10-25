// ─────────────────────────────────────────────────────────────
//  Tout le contenu du site se modifie ici.
// ─────────────────────────────────────────────────────────────

// Réseaux : abonnés à mettre à jour ici, ils alimentent aussi les chiffres clés
const socials = [
  { name: "Instagram", handle: "@helin.kinem", url: "https://www.instagram.com/helin.kinem/", followers: 5180 },
  { name: "TikTok",    handle: "@helinkinem",  url: "https://www.tiktok.com/@helinkinem",    followers: 5336,
    extra: { value: 612800, label: { fr: "j'aime", en: "likes" } } },
  { name: "YouTube",   handle: "@HelinKinem",  url: "https://www.youtube.com/@HelinKinem",   followers: 298 }
];

window.SITE = {
  name: "Helin Kinem",
  city: { fr: "Genève", en: "Geneva" },
  email: "management.helinkinem@gmail.com",
  portrait: "assets/photos/portrait.jpg",
  socials,

  // Portfolio : vidéo { video, poster, tag } ou photo { src, tag }
  portfolio: [
    { video: "assets/videos/mode-zara-blazer.mp4", poster: "assets/videos/mode-zara-blazer.jpg",
      tag: { fr: "Mode · Zara blazer", en: "Fashion · Zara blazer" } },
    { video: "assets/videos/food-gran-caffe.mp4", poster: "assets/videos/food-gran-caffe.jpg",
      tag: { fr: "Food · Gran Caffè, Genève", en: "Food · Gran Caffè, Geneva" } },
    { video: "assets/videos/spot-cookly.mp4", poster: "assets/videos/spot-cookly.jpg",
      tag: { fr: "Spot · Cookly, Genève", en: "Spot · Cookly, Geneva" } },
    { video: "assets/videos/event-geneva-open.mp4", poster: "assets/videos/event-geneva-open.jpg",
      tag: { fr: "Événement · Gonet Geneva Open", en: "Event · Gonet Geneva Open" } },
    { video: "assets/videos/beaute-lash-lift.mp4", poster: "assets/videos/beaute-lash-lift.jpg",
      tag: { fr: "Beauté · Korean lash lift", en: "Beauty · Korean lash lift" } },
    { video: "assets/videos/matcha-test.mp4", poster: "assets/videos/matcha-test.jpg",
      tag: { fr: "Matcha · test à Genève", en: "Matcha · tasting in Geneva" } },
    { video: "assets/videos/lifestyle-grwm.mp4", poster: "assets/videos/lifestyle-grwm.jpg",
      tag: { fr: "Lifestyle · Get ready with me", en: "Lifestyle · Get ready with me" } },
    { video: "assets/videos/makeup-rhode-sephora.mp4", poster: "assets/videos/makeup-rhode-sephora.jpg",
      tag: { fr: "Makeup · Rhode chez Sephora", en: "Makeup · Rhode at Sephora" } }
  ],

  // Chiffres clés, calculés à partir des réseaux ci-dessus
  statsAsOf: { fr: "octobre 2026", en: "October 2026" },
  stats: [
    { value: socials.reduce((sum, s) => sum + s.followers, 0), label: { fr: "Communauté totale", en: "Total community" } },
    { value: socials[0].followers, label: { fr: "Abonnés Instagram", en: "Instagram followers" } },
    { value: socials[1].followers, label: { fr: "Followers TikTok", en: "TikTok followers" } },
    { value: socials[1].extra.value, label: { fr: "J'aime sur TikTok", en: "TikTok likes" } }
  ],

  // Dernier mois, par réseau. Le premier chiffre de chaque réseau (les vues) est additionné dans le titre.
  // approx: true ajoute « ≈ » ; text remplace le nombre (arrondis affichés par l'app).
  lastMonth: [
    { name: "Instagram",
      period: { fr: "24 sept. – 24 oct. 2026", en: "Sep 24 – Oct 24, 2026" },
      note: { fr: "<b>144K personnes</b> ont vu mes reels en un mois, soit près de <b>28 fois</b> ma communauté Instagram.",
              en: "<b>144K people</b> watched my reels in one month, nearly <b>28 times</b> my Instagram community." },
      main: [
        { value: 227000, label: { fr: "Vues de reels", en: "Reel views" } },
        { value: 144000, label: { fr: "Personnes touchées", en: "Accounts reached" } },
        { value: 9870,   label: { fr: "Vues moyennes par reel", en: "Avg. views per reel" }, approx: true },
        { value: 23,     label: { fr: "Reels publiés", en: "Reels published" } }
      ],
      chips: [
        { text: { fr: "6K", en: "6K" },     label: { fr: "j'aime", en: "likes" } },
        { text: { fr: "1,2K", en: "1.2K" }, label: { fr: "partages", en: "shares" } },
        { value: 439, label: { fr: "enregistrements", en: "saves" } },
        { value: 287, label: { fr: "commentaires", en: "comments" } },
        { value: 111, label: { fr: "republications", en: "reposts" } }
      ] },
    { name: "TikTok",
      period: { fr: "26 sept. – 23 oct. 2026", en: "Sep 26 – Oct 23, 2026" },
      note: { fr: "Des vues en hausse de <b>+157 %</b> et des visites de profil en hausse de <b>+617 %</b> par rapport au mois précédent.",
              en: "Views up <b>+157%</b> and profile visits up <b>+617%</b> compared with the previous month." },
      main: [
        { value: 297000, label: { fr: "Vues de publications", en: "Post views" } },
        { value: 14400,  label: { fr: "J'aime", en: "Likes" } },
        { value: 13200,  label: { fr: "Vues du profil", en: "Profile views" } },
        { text: { fr: "3K", en: "3K" }, label: { fr: "Partages", en: "Shares" } }
      ],
      chips: [
        { value: 400, label: { fr: "commentaires", en: "comments" } },
        { text: { fr: "↑ 157 %", en: "↑ 157%" }, label: { fr: "de vues", en: "views" } },
        { text: { fr: "↑ 72 %", en: "↑ 72%" },   label: { fr: "de partages", en: "shares" } },
        { text: { fr: "↑ 57 %", en: "↑ 57%" },   label: { fr: "de j'aime", en: "likes" } }
      ] }
  ],

  // Audience par réseau, en % (tableaux de bord Instagram et TikTok, octobre 2026)
  audience: [
    { name: "Instagram",
      women: 89.5,
      ages: [ ["13–17", 1.0], ["18–24", 11.0], ["25–34", 61.7], ["35–44", 18.3], ["45–54", 5.1], ["55–64", 1.8], ["65+", 1.1] ],
      countries: [
        { fr: "Suisse", en: "Switzerland", v: 27.0 }, { fr: "France", en: "France", v: 26.1 },
        { fr: "Allemagne", en: "Germany", v: 11.0 }, { fr: "Turquie", en: "Türkiye", v: 7.2 },
        { fr: "Algérie", en: "Algeria", v: 3.2 }
      ] },
    { name: "TikTok",
      women: 88,
      ages: [ ["18–24", 21.3], ["25–34", 63.0], ["35–44", 9.9], ["45–54", 3.7], ["55+", 2.1] ],
      countries: [
        { fr: "France", en: "France", v: 27.5 }, { fr: "Suisse", en: "Switzerland", v: 26.1 },
        { fr: "Allemagne", en: "Germany", v: 13.5 }, { fr: "Belgique", en: "Belgium", v: 3.5 },
        { fr: "Pays-Bas", en: "Netherlands", v: 2.1 }
      ] }
  ],

  niches: {
    fr: ["Mode", "Skincare", "Pilates & bien-être", "Matcha", "Lifestyle", "Genève ↔ New York"],
    en: ["Fashion", "Skincare", "Pilates & wellness", "Matcha", "Lifestyle", "Geneva ↔ New York"]
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

  // Marques déjà accompagnées. Logos dans assets/logos/ (PNG transparent ou SVG).
  // tall: true agrandit un logo carré ou empilé.
  brands: [
    { name: "Manor",     logo: "assets/logos/manor.png",     url: "https://www.manor.ch" },
    { name: "Catrice",   logo: "assets/logos/catrice.png",   url: "https://www.catrice.eu/fr-ch" },
    { name: "essence",   logo: "assets/logos/essence.png",   url: "https://www.essence.eu/fr-ch" },
    { name: "Decathlon", logo: "assets/logos/decathlon.png", url: "https://www.decathlon.ch/fr" },
    { name: "Joe & The Juice", logo: "assets/logos/joe-and-the-juice.png", url: "https://www.joejuice.com", tall: true }
  ]
};
