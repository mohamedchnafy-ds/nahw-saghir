"""Assemble l'app en un seul fichier HTML autonome : dist/nahw-saghir.html.

Utile pour publier en un fichier, ou pour ouvrir l'app hors ligne.
Usage : python3 tools/bundle.py   (depuis la racine du projet)
"""
import pathlib, re

ROOT = pathlib.Path(__file__).resolve().parent.parent
APP = ROOT / "app"
html = (APP / "index.html").read_text(encoding="utf-8")

def inline_css(m):
    css = (APP / m.group(1)).read_text(encoding="utf-8").replace('@charset "utf-8";', "")
    return f"<style>\n{css}\n</style>"

def inline_js(m):
    js = (APP / m.group(1)).read_text(encoding="utf-8")
    return f"<script>\n{js}\n</script>"

html = re.sub(r'<link rel="stylesheet" href="(css/[^"]+)">', inline_css, html)
html = re.sub(r'<script src="([^"]+)"[^>]*></script>', inline_js, html)
out = ROOT / "dist" / "nahw-saghir.html"
out.parent.mkdir(exist_ok=True)
out.write_text(html, encoding="utf-8")
print(f"{out} ({out.stat().st_size // 1024} Ko)")
