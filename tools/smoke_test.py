"""Test de fumée de l'app Nahw Saghîr.

Ouvre app/index.html dans Chromium (Playwright), puis pour CHAQUE leçon enregistrée
et dans les deux langues : déplie toute la carte, parcourt les écrans du prof, ouvre
le laboratoire, touche tous les mots de tous les versets, répond à tout le quiz et
affiche la fiche. Échoue s'il y a la moindre erreur JavaScript ou un débordement
horizontal de la page à 390 px.

Usage :  python3 tools/smoke_test.py            (depuis la racine du projet)
Prérequis : pip install playwright && python3 -m playwright install chromium
"""
import asyncio, http.server, threading, functools, sys, pathlib
from playwright.async_api import async_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent / "app"
PORT = 8765


def serve():
    handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(ROOT))
    httpd = http.server.ThreadingHTTPServer(("127.0.0.1", PORT), handler)
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd


async def click(pg, sel):
    await pg.eval_on_selector(sel, "el => el.dispatchEvent(new MouseEvent('click', {bubbles:true}))")


async def run():
    httpd = serve()
    errors = []
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page(viewport={"width": 390, "height": 844})
        pg.on("pageerror", lambda e: errors.append(str(e)))
        # Les polices Google peuvent être bloquées hors ligne : on ignore ces échecs réseau.
        pg.on("console", lambda m: m.type == "error" and "Failed to load resource" not in m.text and errors.append(m.text))
        await pg.goto(f"http://127.0.0.1:{PORT}/index.html")
        await pg.evaluate("localStorage.clear()")
        await pg.reload()
        await pg.wait_for_timeout(300)
        idxs = await pg.evaluate("LESSONS.map(l => l.idx)")
        print("Leçons enregistrées :", [i + 1 for i in idxs])
        for lang in ("fr", "ar"):
            for idx in idxs:
                await click(pg, "#mapBtn")
                await click(pg, f'[data-open="{idx}"]')
                # 1. carte
                await click(pg, '[data-step="0"]')
                await click(pg, '[data-act="treeall"]')
                boxes = await pg.eval_on_selector_all(".mm-box", "els => els.length")
                # 2. prof
                await click(pg, '[data-step="1"]')
                subs = await pg.evaluate("stepsOf(cur)[1].subs")
                for _ in range(subs - 1):
                    await click(pg, "#nextBtn")
                # 3. labo (rendu seulement)
                await click(pg, '[data-step="2"]')
                # 4. versets
                await click(pg, '[data-step="3"]')
                nv = await pg.evaluate("cur.verses.length")
                words = 0
                for v in range(nv):
                    await click(pg, f'[data-v="{v}"]')
                    keys = await pg.eval_on_selector_all("[data-ex]", "els => els.map(e => e.dataset.ex)")
                    for k in keys:
                        await click(pg, f'[data-ex="{k}"]')
                        words += 1
                # 5. quiz
                await click(pg, '[data-step="4"]')
                if await pg.query_selector('[data-act="qrestart"]'):
                    await click(pg, '[data-act="qrestart"]')
                nq = 0
                while not await pg.query_selector(".ring"):
                    await click(pg, "[data-ans]")
                    await click(pg, '[data-act="qnext"]')
                    nq += 1
                    if nq > 200:
                        raise SystemExit("quiz sans fin")
                # 6. fiche
                await click(pg, '[data-act="tofiche"]')
                over = await pg.evaluate("document.documentElement.scrollWidth - document.documentElement.clientWidth")
                print(f"[{lang}] leçon {idx+1}: carte {boxes} cases, {subs} écrans prof, {nv} versets / {words} mots, {nq} questions, débordement {over}px")
                if over > 1:
                    errors.append(f"débordement horizontal leçon {idx+1} ({lang}) : {over}px")
            await click(pg, "#langBtn")
        await b.close()
    httpd.shutdown()
    if errors:
        print("ÉCHEC :", *errors, sep="\n  ")
        sys.exit(1)
    print("OK : aucune erreur.")


asyncio.run(run())
