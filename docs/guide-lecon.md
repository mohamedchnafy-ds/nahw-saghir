# Guide : ajouter une leçon

Compter une conversation par leçon. Ordre de travail :

1. **Repérer** la leçon dans `ROADMAP.md` (idx, pages PDF). Demander le PDF à l'utilisateur
   s'il n'est pas joint, puis lire **seulement** ces pages, comme images (Read + `pages`).
2. **Plan** : relever les définitions, divisions et listes du livre, les reformuler
   (pas de copie du matn). Ce plan devient l'arbre de la carte.
3. **Versets** : choisir 10 à 15 versets qui illustrent chaque point, de préférence dans les
   sourates déjà connues de l'utilisateur (Juz 'Amma, Fâtiha) puis ailleurs. Vérifier chaque
   texte sur alquran.cloud (`quran-simple`) et les cas douteux sur le Quranic Arabic Corpus.
   Noter les nouveaux versets dans `docs/sources.md` et les noms de sourates dans `SURA`.
4. **Écrire** `app/lessons/NN-slug.js` à partir de `app/lessons/_modele.js` ; l'ajouter dans
   `app/index.html` avant `js/app.js`. Si besoin, ajouter dans `js/core.js` :
   - de nouvelles catégories dans `CATS` (`{ar, fr, col}` ; `sar`/`sfr` = libellé court) ;
   - un nouveau jeu de réponses dans `SETS` et sa consigne dans `SET_PROMPT` ;
   et dans `css/app.css` les couleurs correspondantes (clair + 2 blocs sombres + classe).
5. **Tester** : `python3 tools/smoke_test.py` (doit finir par « OK : aucune erreur. »).
6. **Publier** (voir `CLAUDE.md`), puis mettre à jour `ROADMAP.md`.

## Contenu attendu (niveau des leçons 1 et 2)

| Étape | Attendu |
|---|---|
| Carte | toute la leçon en arbre, 3 à 5 niveaux, chaque feuille avec un exemple coranique référencé |
| Le prof | 5 à 8 écrans, une idée chacun, au moins une animation par écran, exemples du Coran |
| Laboratoire | une manipulation qui fait « sentir » la règle (transformer un mot, tester un signe, trier…) |
| Coran | 10 à 15 versets, chaque mot expliqué ; mots collés en `multi` avec leurs parties |
| Exercices | 25 à 35 questions, mélange `choice` / `tap` / `sign`, chaque correction explique le pourquoi |
| Fiche | tableau récapitulatif avec versets + « la méthode en une phrase » + pièges |

## Référence de l'objet leçon

| Champ | Type | Rôle |
|---|---|---|
| `id` | `'lN'` | clé de sauvegarde |
| `idx` | nombre | position dans `COURSE` (0-based) |
| `title`, `titleAr` | `{fr, ar}`, texte | affichés dans l'en-tête et le parcours |
| `labName` | `{fr, ar}` | nom de l'étape 3 (« Laboratoire », « Détecteur »…) |
| `ui` | objet | état : `sel`, `open` (carte), `ex` (versets), `quiz`, + état du labo |
| `schema` | `{h1, prof}` | titre et texte du prof de la carte |
| `tree` | `N(...)` | arbre de la carte |
| `prof` | fonctions → HTML | écrans du prof |
| `renderLab`, `onClick` | fonctions | laboratoire |
| `verses`, `exTitle`, `exProf`, `exLegend?` | | explorateur de versets |
| `Q` | tableau | questions ; `ui.quiz = newQuiz(Q.length)` |
| `renderFiche` | fonction → HTML | fiche, avec `finishBlock(Lx)` et `nextBlock(idx+1)` |

Catégories existantes dans `CATS` : `ism`, `fiil`, `madi`, `mudari`, `amr`, `harf`, `nak`, `mar`,
`damir`, `alam`, `ishara`, `mawsul`, `al`, `mudaf`, `xfiil`, `xharf`, `other`.
Jeux de réponses `SETS` : `fam` (5 familles), `nm` (نكرة/معرفة), `type` (6 types de معرفة).
