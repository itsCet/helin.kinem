# Helin Kinem: media kit web

Une page statique (aucune dépendance) à envoyer aux marques.

## Un lien personnalisé par marque

| Lien | Effet |
|---|---|
| `…/?pour=Sephora` | « Une proposition pour Sephora » en haut, dans le bandeau, dans le titre de l'onglet, dans la section contact et dans l'objet de l'e-mail |
| `…/?pour=Sephora&c=000000` | Le site prend la couleur de la marque (code hex sans `#`) |
| `…/?lang=en` | Version anglaise (il y a aussi un bouton FR/EN) |

## Modifier le contenu

- **Textes, stats, audience, formats et marques** : `config.js`
- **Photos** : déposer `portrait.jpg` et `01.jpg` … `06.jpg` dans `assets/photos/`

## Mise en ligne

GitHub Pages (Settings → Pages → branche `main`), Netlify ou Vercel : il suffit de glisser le dossier.
