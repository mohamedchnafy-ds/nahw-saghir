"""Construit le site installable (PWA) dans site/ à partir de app/ et pwa/.

- copie app/ (index, css, js, lessons — sauf _modele.js) ;
- écrit un vrai index.html (doctype, <head> avec manifeste, icônes, couleur de thème,
  enregistrement du service worker) ;
- génère manifest.webmanifest et sw.js avec la liste des fichiers et un numéro de version
  calculé sur leur contenu (chaque changement force la mise à jour sur le téléphone).

Usage : python3 tools/build_pwa.py   (depuis la racine du projet). Héberger ensuite site/.
"""
import hashlib, json, pathlib, re, shutil

ROOT = pathlib.Path(__file__).resolve().parent.parent
APP, PWA, SITE = ROOT / "app", ROOT / "pwa", ROOT / "site"

if SITE.exists():
    shutil.rmtree(SITE)
shutil.copytree(APP, SITE, ignore=shutil.ignore_patterns("_modele.js"))
shutil.copytree(PWA / "icons", SITE / "icons")

# ---- index.html : document complet ----
body = (APP / "index.html").read_text(encoding="utf-8")
body = re.sub(r'<meta charset="utf-8">\s*', "", body)
body = re.sub(r'<meta name="viewport"[^>]*>\s*', "", body)
head_end = body.index("<header")
head, rest = body[:head_end].strip(), body[head_end:]
pwa_head = """<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="Apprendre la grammaire arabe avec an-Nahw as-Saghîr, leçon par leçon, avec des exemples du Coran.">
<link rel="manifest" href="manifest.webmanifest">
<meta name="theme-color" content="#f2f4ef" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#111613" media="(prefers-color-scheme: dark)">
<link rel="icon" type="image/png" sizes="192x192" href="icons/icon-192.png">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Nahw">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}[hidden]{display:none!important}</style>"""
sw_reg = """<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
</script>"""
index = f"""<!doctype html>
<html lang="fr">
<head>
{pwa_head}
{head}
</head>
<body>
{rest.strip()}
{sw_reg}
</body>
</html>
"""
(SITE / "index.html").write_text(index, encoding="utf-8")

# ---- manifeste ----
manifest = {
    "name": "النحو الصغير · Nahw Saghîr",
    "short_name": "Nahw",
    "description": "La grammaire arabe d'an-Nahw as-Saghîr, leçon par leçon, avec le Coran.",
    "lang": "fr",
    "dir": "auto",
    "start_url": "./",
    "scope": "./",
    "display": "standalone",
    "orientation": "portrait",
    "background_color": "#f2f4ef",
    "theme_color": "#f2f4ef",
    "icons": [
        {"src": "icons/icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any"},
        {"src": "icons/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any"},
        {"src": "icons/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"},
    ],
}
(SITE / "manifest.webmanifest").write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")

# ---- service worker ----
files = sorted(p.relative_to(SITE).as_posix() for p in SITE.rglob("*") if p.is_file())
digest = hashlib.sha256()
for f in files:
    digest.update(f.encode()); digest.update((SITE / f).read_bytes())
version = digest.hexdigest()[:10]
precache = ["./"] + [f for f in files]
sw = (PWA / "sw.js").read_text(encoding="utf-8")
sw = sw.replace("'__VERSION__'", repr(version)).replace("__FILES__", json.dumps(precache, ensure_ascii=False))
(SITE / "sw.js").write_text(sw, encoding="utf-8")
(SITE / ".nojekyll").write_text("")

print(f"site/ prêt — {len(files) + 1} fichiers, version {version}")
