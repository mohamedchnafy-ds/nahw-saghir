# النَّحْوُ الصَّغِيرُ — l'app

App d'apprentissage de la grammaire arabe d'après « النحو الصغير » (al-'Uyûnî) :
une leçon par chapitre, en 6 étapes (carte en arbre, prof animé, laboratoire, versets
du Coran analysés, exercices, fiche), en français ou entièrement en arabe.

**App installable (PWA) :** https://mohamedchnafy-ds.github.io/nahw-saghir/  
**Aperçu Claude (artifact) :** https://claude.ai/artifact/GzMaWrhdJ2eM3kVgrRXpCv  
**Avancement :** leçons 1 et 2 sur 31 (voir `ROADMAP.md`).

## Reprendre dans une nouvelle conversation

Le projet vit sur GitHub (`mohamedchnafy-ds/nahw-saghir`). Dans une nouvelle conversation,
joins le **PDF du livre** et colle :

> Continue mon projet Nahw Saghîr : dépôt GitHub mohamedchnafy-ds/nahw-saghir (PDF du livre joint).
> Lis d'abord CLAUDE.md, ROADMAP.md et docs/guide-lecon.md, puis construis la leçon suivante
> (seulement les pages PDF indiquées). Teste, puis pousse sur main pour mettre à jour l'app.

Sans accès GitHub, tu peux aussi joindre le zip du projet à la place du dépôt.

### Option : un Projet Claude
Crée un Projet « Nahw Saghîr » et mets dans ses connaissances `CLAUDE.md`, `ROADMAP.md`,
`docs/guide-lecon.md`, `docs/sources.md` et le PDF. Copie le contenu de `CLAUDE.md` dans les
instructions du projet. Dans chaque conversation du projet, il suffit alors de joindre le zip
le plus récent et de dire « leçon suivante ».

### Option : Claude Code + GitHub
Le dossier est prêt à devenir un dépôt Git (comme l'app Coran) : `CLAUDE.md` est lu
automatiquement par Claude Code.

## Contenu

```
CLAUDE.md               instructions pour Claude (règles, architecture, publication)
ROADMAP.md              les 31 leçons, pages du livre et du PDF, état
docs/guide-lecon.md     comment écrire une leçon, champ par champ
docs/sources.md         versets vérifiés et cas délicats déjà tranchés
app/index.html          l'app (ouvre-la via un petit serveur local, voir plus bas)
app/css/app.css         styles, couleurs, thème clair/sombre
app/js/core.js          outils et moteurs communs
app/js/app.js           navigation
app/lessons/            une leçon par fichier + _modele.js
tools/smoke_test.py     test automatique de toutes les leçons (Chromium/Playwright)
tools/bundle.py         fabrique dist/nahw-saghir.html, l'app en un seul fichier
dist/nahw-saghir.html   version un-fichier, à ouvrir directement dans un navigateur
pwa/                    service worker et icônes de l'app installable
tools/build_pwa.py      construit site/ (l'app installable) à partir de app/ et pwa/
.github/workflows/      publie site/ sur GitHub Pages à chaque push sur main
```

## Mettre à jour l'app sur le téléphone
Chaque push sur `main` reconstruit et republie l'app (GitHub Actions). Le téléphone récupère
la nouvelle version à la prochaine ouverture avec connexion ; hors ligne, la dernière version reste utilisable.

Lancer en local : `cd app && python3 -m http.server 8000` puis http://localhost:8000.
Ou plus simple : ouvrir `dist/nahw-saghir.html`.
