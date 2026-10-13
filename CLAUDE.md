# Nahw Saghîr — instructions pour Claude

Application web d'apprentissage de la grammaire arabe (nahw), construite leçon par leçon
à partir du livre **« النحو الصغير »** de Sulaymân al-'Uyûnî. Utilisateur : Mohamed, francophone,
qui veut un vrai prof animé, avec beaucoup d'exemples et d'exercices **tirés du Coran**.

- App installable (PWA, GitHub Pages) : https://mohamedchnafy-ds.github.io/nahw-saghir/ — dépôt `mohamedchnafy-ds/nahw-saghir`
- Aperçu Claude (artifact) : https://claude.ai/artifact/GzMaWrhdJ2eM3kVgrRXpCv
- État et prochaine leçon : voir `ROADMAP.md`
- Comment écrire une leçon : voir `docs/guide-lecon.md` et `app/lessons/_modele.js`

## Règles de travail (à respecter)

1. **Une leçon par conversation.** Ne lis que les pages PDF de la leçon visée (tableau dans
   `ROADMAP.md`). Le PDF n'est pas dans ce dossier : demande à l'utilisateur de le joindre.
   Sa couche texte est inutilisable (voyelles éclatées) : lis les pages **comme images**
   avec l'outil Read et le paramètre `pages`. Page PDF = 2 × page du livre − 7 ; les pages
   PDF paires sont blanches.
2. **Droits d'auteur.** Le livre interdit la reproduction. On suit son plan et ses définitions,
   mais on **reformule** avec nos propres mots ; on ne recopie pas le matn.
3. **Coran : jamais de mémoire.** Chaque verset cité est vérifié avant d'être écrit :
   - texte vocalisé : `https://api.alquran.cloud/v1/ayah/S:V/quran-simple` (édition Tanzil simple) ;
   - nature et fonction des mots en cas de doute : `https://corpus.quran.com/wordbyword.jsp?chapter=S&verse=V`.
   Les traductions françaises sont les nôtres, marquées « sens approché ».
   Ajoute chaque nouveau verset à `docs/sources.md`.
4. **Questions à l'utilisateur** : toujours via le widget à choix multiples (AskUserQuestion),
   jamais en texte libre dans la réponse.
5. **Langues** : interface en français avec tous les termes en arabe vocalisé ; un bouton
   bascule l'app entière en arabe (RTL). Tout texte affiché passe par `T(fr, ar)` ou `{fr, ar}`.
6. **Tester avant de publier** : `python3 tools/smoke_test.py` doit afficher « OK ».

## Architecture (app/)

| Fichier | Rôle |
|---|---|
| `index.html` | Coquille HTML ; charge les scripts **dans cet ordre** : core → leçons → app |
| `css/app.css` | Jetons de couleur (clair + sombre), polices, tous les styles |
| `js/core.js` | Outils partagés : `T`, `L`, `AN`, `ar`, `arWrap`, `refTag`, `CATS`, `SETS`, `SURA`, moteurs communs (carte en arbre, explorateur de versets, quiz), `COURSE`, `registerLesson` |
| `lessons/NN-slug.js` | **Une leçon par fichier**, dans un bloc privé, terminée par `registerLesson(Lx)` |
| `js/app.js` | Navigation des 6 étapes, parcours, langue, délégation des clics |

Scripts classiques (pas de modules) : les `const` de haut niveau de `core.js` sont visibles
dans les leçons. Chaque leçon s'enveloppe dans `(function(){ … })();` pour ne rien exposer.

## Les 6 étapes d'une leçon (ordre voulu par l'utilisateur)

1. **Carte** — arbre horizontal, racine à **droite** (sens arabe), branches qui se déplient
   au toucher ; il se réduit tout seul pour tenir dans l'écran (zoom mini 0,62). L'explication
   de la case choisie s'affiche **sous** l'arbre, pas dans la case.
2. **Le prof** — 5 à 8 écrans animés, une idée par écran, exemples coraniques.
3. **Laboratoire** — manipulation propre à la leçon (`renderLab` + `onClick`).
4. **Coran** — versets analysés mot par mot (mots collés en doré, découpés au toucher).
5. **Exercices** — 25 à 35 questions mélangées, toutes ancrées dans un verset.
6. **Fiche** — tableau récapitulatif + « la méthode en une phrase » + leçon suivante.

## Design

- Couleurs par catégorie : `ism` bleu, `fiil` orange, `harf` vert, `nak` violet, `mar` turquoise,
  `oth` gris, or (`--gold`) pour le Coran et les mots collés. Une nouvelle catégorie = un jeton
  dans `:root` **et** dans les deux blocs sombres de `app.css`, plus une classe `.xxx{--c;--cb}`.
- Polices : Amiri (arabe), Atkinson Hyperlegible (texte), Young Serif (titres), Noto Naskh (UI arabe).
- Mobile d'abord (390 px), aucun débordement horizontal, `prefers-reduced-motion` respecté.

## Publier

**PWA** : committer et pousser sur `main` ; le workflow `.github/workflows/pages.yml` lance
`tools/build_pwa.py` et publie `site/`. Ne jamais éditer `site/` à la main.

**Artifact** (aperçu dans Claude) :

L'artifact est multi-fichiers. Dans une nouvelle conversation, il faut d'abord le **lire**
(`Artifact` action `read` avec l'URL), puis publier avec `url` = l'URL ci-dessus,
`file_path` = `app/index.html` et `files` = tous les fichiers (`css/app.css`, `js/core.js`,
`js/app.js`, chaque `lessons/*.js`), chemins relatifs à `app/` (utiliser `root: "app"`).
Alternative : `python3 tools/bundle.py` produit `dist/nahw-saghir.html` en un seul fichier.
