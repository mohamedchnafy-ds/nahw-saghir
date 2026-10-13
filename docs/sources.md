# Sources et versets vérifiés

- Texte coranique : [Tanzil](https://tanzil.net), édition « quran-simple », via l'API
  `https://api.alquran.cloud/v1/ayah/S:V/quran-simple`.
- Nature et fonction des mots : [Quranic Arabic Corpus](https://corpus.quran.com)
  (`wordbyword.jsp?chapter=S&verse=V`).
- Traductions françaises : rédigées pour l'app, marquées « sens approché ».

## Versets déjà vérifiés et utilisés (leçons 1-2)

1:2 · 1:5 · 1:6 · 1:7 · 2:2 · 2:35 · 2:97 · 2:185 · 5:24 · 11:44 · 12:31 · 12:99 · 19:16 · 19:26 ·
20:25 · 48:29 · 53:49 · 73:15 · 73:16 · 81:1 · 81:2 · 81:3 · 82:1 · 94:1 · 96:1 · 96:4 · 96:5 ·
97:1 · 97:3 · 103:1 · 103:2 · 103:3 · 105:1 · 108:1 · 108:2 · 110:1 · 112:1 · 112:3 · 113:1

Sourates complètes relevées : 1, 94, 97, 103, 108, 110, 112, 113 ; début de 81 (v. 1-6), 96 (v. 1-5), 105 (v. 1-2).

## Points délicats déjà tranchés (Corpus)
- `إِذَا` (81:1, 110:1) : ظَرْفُ زَمَانٍ, donc un **nom**, pas une particule.
- `كَيْفَ` (105:1) : nom interrogatif.
- `الشِّعْرَىٰ` (53:49) : nom propre (عَلَمٌ) ; son ال fait partie du nom.
- `تَرَ` (105:1) : مُضَارِعٌ مَجْزُومٌ après لَمْ (la dernière lettre tombe : تَرَى → تَرَ).
- `أَلْفِ شَهْرٍ` (97:3) : annexé à une نَكِرَةٌ, donc reste نَكِرَةٌ.

Si tu ajoutes une sourate, ajoute aussi son nom dans `SURA` (js/core.js), sinon la référence
s'affiche mal en mode arabe.
