/* js/core.js — Nahw Saghîr
   Outils partagés par toutes les leçons : langue (FR/عربي), mémoire locale, catégories
   grammaticales, références coraniques, et les moteurs communs (carte en arbre,
   explorateur de versets, exercices). Chargé en premier. Ses déclarations de haut
   niveau sont visibles des fichiers suivants (scripts classiques, même portée globale). */
const $ = s => document.querySelector(s);
const ar = (t, cls='') => `<span class="ar ${cls}" lang="ar" dir="rtl">${t}</span>`;

/* ---------- Mémoire locale (facultative) ---------- */
const KEY = 'nahw-app-v3';
let saved = {};
try { saved = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch(e){ saved = {}; }
if (!saved.done) { try { const old = JSON.parse(localStorage.getItem('nahw-l1-v2')||'{}'); if (old && old.done && old.done.l1) saved.done = {l1:true}; if (old && old.lang) saved.lang = old.lang; } catch(e){} }
const persist = () => { try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch(e){} };
saved.done = saved.done || {}; saved.pos = saved.pos || {}; saved.best = saved.best || {}; saved.steps = saved.steps || {};
let LANG = saved.lang === 'ar' ? 'ar' : 'fr';
const T = (fr, a) => LANG === 'ar' ? a : fr;
const L = o => (o && typeof o === 'object') ? o[LANG] : o;
const AN = n => LANG==='ar' ? String(n).replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]) : String(n);
const PROF = () => `<span class="prof-badge">${T('Le prof','الْأُسْتَاذُ')}</span>`;
const arWrap = s => s.replace(/([؀-ۿ][؀-ۿً-ْٰـ]*(?:\s[؀-ۿ][؀-ۿً-ْٰـ]*)*)/g, m => LANG==='ar'? m : ar(m));

/* ---------- Catégories (toutes leçons) ---------- */
const CATS = {
  ism:    {ar:'اِسْمٌ',         fr:'Nom',                 col:'ism'},
  fiil:   {ar:'فِعْلٌ',         fr:'Verbe',               col:'fiil'},
  madi:   {ar:'فِعْلٌ مَاضٍ',    fr:'Verbe au passé',      col:'fiil'},
  mudari: {ar:'فِعْلٌ مُضَارِعٌ', fr:'Verbe inaccompli',    col:'fiil'},
  amr:    {ar:'فِعْلُ أَمْرٍ',   fr:'Verbe à l’impératif', col:'fiil'},
  harf:   {ar:'حَرْفٌ',         fr:'Particule',           col:'harf'},
  nak:    {ar:'نَكِرَةٌ',        fr:'Indéfini',            col:'nak'},
  mar:    {ar:'مَعْرِفَةٌ',      fr:'Défini',              col:'mar'},
  damir:  {ar:'مَعْرِفَةٌ · ضَمِيرٌ',        sar:'ضَمِيرٌ',            fr:'Défini · pronom',          sfr:'Pronom',            col:'mar'},
  alam:   {ar:'مَعْرِفَةٌ · عَلَمٌ',         sar:'عَلَمٌ',             fr:'Défini · nom propre',      sfr:'Nom propre',        col:'mar'},
  ishara: {ar:'مَعْرِفَةٌ · اسْمُ إِشَارَةٍ', sar:'اسْمُ إِشَارَةٍ',     fr:'Défini · démonstratif',    sfr:'Démonstratif',      col:'mar'},
  mawsul: {ar:'مَعْرِفَةٌ · اسْمٌ مَوْصُولٌ', sar:'اسْمٌ مَوْصُولٌ',     fr:'Défini · relatif',         sfr:'Relatif',           col:'mar'},
  al:     {ar:'مَعْرِفَةٌ · مُعَرَّفٌ بِأَلْ', sar:'الْمُعَرَّفُ بِأَلْ', fr:'Défini · par أَلْ',        sfr:'Défini par أَلْ',    col:'mar'},
  mudaf:  {ar:'مَعْرِفَةٌ · مُضَافٌ إِلَى مَعْرِفَةٍ', sar:'الْمُضَافُ إِلَى مَعْرِفَةٍ', fr:'Défini · annexé à un défini', sfr:'Annexé à un défini', col:'mar'},
  xfiil:  {ar:'فِعْلٌ',         fr:'Verbe (pas un nom)',  col:'oth'},
  xharf:  {ar:'حَرْفٌ',         fr:'Particule (pas un nom)', col:'oth'},
  other:  {ar:'اسْمٌ',          fr:'Nom (vu plus tard)',  col:'oth'}
};
const catLabel = c => LANG==='ar' ? ar(CATS[c].ar) : `${CATS[c].fr.toLowerCase()} (${ar(CATS[c].ar)})`;
const SETS = {
  fam:['ism','madi','mudari','amr','harf'],
  nm:['nak','mar'],
  type:['damir','alam','ishara','mawsul','al','mudaf']
};
const SET_PROMPT = {
  fam:{fr:'Quelle est la famille du mot souligné ?', ar:'مَا قِسْمُ الْكَلِمَةِ الْمُشَارِ إِلَيْهَا؟'},
  nm:{fr:'Le nom souligné est-il نَكِرَةٌ ou مَعْرِفَةٌ ?', ar:'هَلِ الِاسْمُ الْمُشَارُ إِلَيْهِ نَكِرَةٌ أَمْ مَعْرِفَةٌ؟'},
  type:{fr:'Quel type de مَعْرِفَةٌ est le mot souligné ?', ar:'مَا نَوْعُ الْمَعْرِفَةِ الْمُشَارِ إِلَيْهَا؟'}
};

const SURA = {1:'الْفَاتِحَة',2:'الْبَقَرَة',5:'الْمَائِدَة',11:'هُود',12:'يُوسُف',19:'مَرْيَم',20:'طه',48:'الْفَتْح',53:'النَّجْم',73:'الْمُزَّمِّل',81:'التَّكْوِير',82:'الِانْفِطَار',94:'الشَّرْح',96:'الْعَلَق',97:'الْقَدْر',103:'الْعَصْر',105:'الْفِيل',108:'الْكَوْثَر',110:'النَّصْر',112:'الْإِخْلَاص',113:'الْفَلَق'};
const refTag = r => { const [s,v] = r.split(':'); return `<span class="ref">${T(`Coran ${s}:${v}`, `${SURA[s]} · ${AN(v)}`)}</span>`; };

/* =====================================================================
   MOTEURS PARTAGÉS : schéma, versets, exercices
   ===================================================================== */
/* --- Carte dépliable (arbre) --- */
const N = (label, fl, col, info, ex, kids) => ({label, fl, col, info, ex, kids});
const I = (fr, a) => ({fr, ar:a});
function countLeaves(n){ return n.kids && n.kids.length ? n.kids.reduce((a,k)=>a+countLeaves(k),0) : 1; }
function allPaths(n, p, out){ if ((n.kids&&n.kids.length) || n.info || n.ex) out[p]=true; (n.kids||[]).forEach((k,i)=>allPaths(k,p+'.'+i,out)); return out; }
function exChips(n){ return n.ex ? `<span class="mm-ex">${n.ex.map(e=>`<span lang="ar">${e[0]}${e[1]?`<small>${AN(e[1])}</small>`:''}</span>`).join('')}</span>` : ''; }
function treeHtml(Ls, n, p, depth, col){
  const c = n.col || col || '';
  const open = !!Ls.ui.open[p], sel = Ls.ui.sel === p;
  const kids = n.kids && n.kids.length ? n.kids : null;
  const box = `<button type="button" class="mm-box ${sel?'sel':''}" data-tn="${p}" ${kids?`aria-expanded="${open}"`:''}>
      <span class="mm-l" lang="ar">${n.label}</span>
      ${n.fl && LANG==='fr' ? `<span class="mm-fr">${n.fl}</span>` : ''}
      ${kids ? `<span class="mm-badge">${open?'−':'+'+AN(kids.length)}</span>` : ''}
      ${!kids ? exChips(n) : ''}
    </button>`;
  const fresh = Ls.ui.fresh === p;
  return `<div class="mm-node d${depth} ${c}">${box}${open && kids ? `<div class="mm-kids ${fresh?'fresh':''}">${kids.map((k,i)=>`<div class="mm-kid" style="--i:${i}">${treeHtml(Ls,k,p+'.'+i,depth+1,c)}</div>`).join('')}</div>` : ''}</div>`;
}
function nodeAt(Ls, p){ let n = Ls.tree, col = n.col||''; p.split('.').slice(1).forEach(i=>{ n = n.kids[+i]; col = n.col || col; }); return {n, col}; }
function panelHtml(Ls){
  const {n, col} = nodeAt(Ls, Ls.ui.sel);
  const kids = n.kids && n.kids.length;
  return `<div class="mm-panel ${col}">
    <h3 lang="ar" dir="rtl">${n.label}</h3>
    ${n.fl && LANG==='fr' ? `<p class="pfr">${n.fl}</p>` : ''}
    ${n.info ? `<p>${arWrap(L(n.info))}</p>` : ''}
    ${n.ex ? `<div class="tex">${n.ex.map(e=>`<span class="chip ${col}">${ar(e[0])}${e[1]?` <small>${AN(e[1])}</small>`:''}</span>`).join('')}</div>` : ''}
    ${kids ? `<p class="small muted" style="margin:6px 0 0">${Ls.ui.open[Ls.ui.sel] ? T('Touche encore cette case pour replier sa branche.','الْمِسْهَا مَرَّةً أُخْرَى لِإِغْلَاقِ فَرْعِهَا.') : T(`Touche la case pour voir ses ${kids} branches.`,'الْمِسِ الْخَانَةَ لِتَرَى فُرُوعَهَا.')}</p>` : ''}
  </div>`;
}
function renderSchema(Ls){
  const S = Ls.schema;
  return `
    <p class="kicker">${T('Étape 1 · La carte','الْخُطْوَةُ ١ · الْخَرِيطَةُ')}</p>
    <h1>${L(S.h1)}</h1>
    <div class="prof">${PROF()}<p>${L(S.prof)}</p></div>
    <div class="tree-bar">
      <button class="ghost" type="button" data-act="treeall">${T('Tout déplier','افْتَحِ الْكُلَّ')}</button>
      <button class="ghost" type="button" data-act="treenone">${T('Tout replier','أَغْلِقِ الْكُلَّ')}</button>
    </div>
    <div class="mm-wrap" id="treeWrap"><div class="mm" id="tree">${treeHtml(Ls, Ls.tree, 'r', 0, '')}</div></div>
    <div id="treePanel">${panelHtml(Ls)}</div>
    <p class="tap-hint"><i></i>${T('Touche une case pour faire pousser ses branches. L’arbre se réduit pour tenir dans l’écran ; s’il est encore trop large, fais-le glisser.','الْمِسْ خَانَةً لِتَنْمُوَ فُرُوعُهَا. تَصْغُرُ الشَّجَرَةُ لِتَتَّسِعَ لَهَا الشَّاشَةُ، فَإِنْ لَمْ تَتَّسِعْ فَاسْحَبْهَا.')}</p>`;
}
function fitTree(){
  const wrap = $('#treeWrap'), t = $('#tree'); if (!wrap || !t) return;
  t.style.zoom = '';
  const cs = getComputedStyle(wrap);
  const avail = wrap.clientWidth - (parseFloat(cs.paddingLeft)||0) - (parseFloat(cs.paddingRight)||0);
  const need = t.scrollWidth || t.getBoundingClientRect().width;
  if (!avail || !need) return;
  let z = Math.min(1, avail / need);
  if (z < 0.62) z = 0.62;
  if (z < 0.999) t.style.zoom = z.toFixed(3);
}
function redrawTree(Ls){
  const t = $('#tree'); if (!t) return;
  const fresh = Ls.ui.fresh;
  t.innerHTML = treeHtml(Ls, Ls.tree, 'r', 0, '');
  Ls.ui.fresh = null;
  fitTree(); setTimeout(fitTree, 750);
  const pnl = $('#treePanel'); if (pnl) pnl.innerHTML = panelHtml(Ls);
  const target = fresh ? document.querySelector(`[data-tn="${fresh}"]`)?.parentElement.querySelector('.mm-kids') : null;
  if (target && target.scrollIntoView) { try { target.scrollIntoView({block:'nearest', inline:'nearest', behavior:'smooth'}); } catch(e){} }
}

/* --- Explorateur de versets --- */
const W = (t,c,fr,a,parts) => ({t,c,why:{fr,ar:a},parts});
function verseWordHtml(Ls, vi, wi, w){
  const k = vi+'-'+wi, rev = Ls.ui.ex.rev[k];
  if (w.c==='multi'){
    const inner = rev ? w.parts.map(p=>`<span class="p ${CATS[p[1]].col}">${p[0]}</span>`).join('') : w.t;
    return `<button type="button" class="ex-w multi ${rev?'rev':''}" data-ex="${k}" lang="ar">${inner}</button>`;
  }
  return `<button type="button" class="ex-w ${CATS[w.c].col} ${rev?'rev':''}" data-ex="${k}" lang="ar">${w.t}</button>`;
}
function whyHtml(Ls, vi){
  const wi = Ls.ui.ex.open[vi]; if (wi===undefined) return '';
  const w = Ls.verses[vi].words[wi];
  if (w.c==='multi'){
    const n = w.parts.length;
    return `<div class="ex-why" style="--cb:var(--gold-bg)"><span class="w-head" lang="ar" dir="rtl">${w.t}</span> = ${T(`${n} mots`, n===2?'كَلِمَتَانِ':`${AN(n)} كَلِمَاتٍ`)}
      <div class="parts">${w.parts.map(p=>`<div><span class="chip ${CATS[p[1]].col}">${ar(p[0])}</span> ${catLabel(p[1])}</div>`).join('')}</div>
      <p style="margin:8px 0 0">${L(w.why)}</p></div>`;
  }
  const f = CATS[w.c];
  return `<div class="ex-why ${f.col}"><span class="w-head" lang="ar" dir="rtl" style="color:var(--c)">${w.t}</span> → ${catLabel(w.c)}. ${L(w.why)}</div>`;
}
function exCount(Ls){
  const total = Ls.verses.reduce((a,s)=>a+s.words.length,0);
  const n = Object.keys(Ls.ui.ex.rev).length;
  return T(`${n} / ${total} mots découverts`, `${AN(n)} / ${AN(total)} كَلِمَةً`);
}
function renderExplorer(Ls){
  const ex = Ls.ui.ex, vi = ex.v, v = Ls.verses[vi], s = v.ref.split(':')[0];
  return `
    <p class="kicker">${T('Étape 4 · Exemples du Coran','الْخُطْوَةُ ٤ · أَمْثِلَةٌ قُرْآنِيَّةٌ')}</p>
    <h1>${L(Ls.exTitle)}</h1>
    <div class="prof">${PROF()}<p>${L(Ls.exProf)}</p></div>
    <div class="vnav">
      <button class="ghost" type="button" data-act="vprev" ${vi===0?'disabled':''}>${T('‹ Précédent','السَّابِقَةُ')}</button>
      <div class="vdots">${Ls.verses.map((_,i)=>`<button type="button" class="${i===vi?'on':''} ${ex.seen[i]?'seen':''}" data-v="${i}" aria-label="${i+1}"></button>`).join('')}</div>
      <button class="ghost" type="button" data-act="vnext" ${vi===Ls.verses.length-1?'disabled':''}>${T('Suivant ›','التَّالِيَةُ')}</button>
    </div>
    <div class="verse">
      <div class="verse-h"><span class="verse-name" lang="ar">${T(`Sourate ${SURA[s]}`,`سُورَةُ ${SURA[s]}`)}</span>${refTag(v.ref)}</div>
      <div class="ex-words">${v.lead?`<span class="muted ar" style="font-size:26px">${v.lead}</span>`:''}${v.words.map((w,wi)=>verseWordHtml(Ls,vi,wi,w)).join('')}</div>
      ${T(`<p class="ex-tr">« ${v.tr} » <span style="font-style:normal">(sens approché)</span></p>`,'')}
      <div id="why">${whyHtml(Ls,vi)}</div>
    </div>
    <div class="toolbar"><span class="small muted" id="exCount">${exCount(Ls)}</span><button class="ghost" type="button" data-act="revall">${T('Tout colorer','لَوِّنِ الْكُلَّ')}</button></div>
    ${Ls.exLegend ? Ls.exLegend() : ''}
    <p class="sources">${T('Sources : texte coranique de','الْمَصَادِرُ: نَصُّ الْقُرْآنِ مِنْ')} <a href="https://tanzil.net" target="_blank" rel="noopener">Tanzil</a> (${T('édition simple via','عَبْرَ')} <a href="https://alquran.cloud" target="_blank" rel="noopener">alquran.cloud</a>) · ${T('nature des mots vérifiée sur le','وَأَقْسَامُ الْكَلِمَاتِ مِنْ')} <a href="https://corpus.quran.com" target="_blank" rel="noopener">Quranic Arabic Corpus</a>.</p>`;
}

/* --- Exercices --- */
const shuffle = a => { const b=a.slice(); for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];} return b; };
const newQuiz = n => ({ order: shuffle([...Array(n).keys()]), i:0, score:0, answered:false, picked:null, finished:false });
const isRight = (q, v) => Array.isArray(q.a) ? q.a.map(String).includes(String(v)) : String(q.a)===String(v);
function optCls(qz, q, o){
  if (!qz.answered) return '';
  if (isRight(q,o) && (!Array.isArray(q.a) || String(o)===String(qz.picked) || !isRight(q,qz.picked))) return 'right';
  if (String(o)===String(qz.picked)) return 'wrong';
  return '';
}
function renderQuiz(Ls){
  const qz = Ls.ui.quiz, QQ = Ls.Q;
  if (qz.finished) return renderScore(Ls);
  const q = QQ[qz.order[qz.i]], n = QQ.length;
  let body = '';
  if (q.k==='choice'){
    const set = q.set || 'fam';
    body = `<p class="q-t">${L(SET_PROMPT[set])}</p>
      <div class="q-verse" lang="ar">${q.pre}<mark>${q.hl}</mark>${q.post||''}</div>
      <div class="opts ${set==='nm'?'two':''}">${SETS[set].map(o=>{ const f=CATS[o];
        return `<button type="button" class="opt ${f.col} ${optCls(qz,q,o)}" data-ans="${o}" ${qz.answered?'disabled':''}>${T(`<span class="fr">${f.sfr||f.fr}</span>`,'')}<span class="ar" lang="ar">${f.sar||f.ar}</span></button>`; }).join('')}</div>`;
  } else if (q.k==='sign'){
    body = `<p class="q-t">${L(q.q)}</p>
      <div class="opts">${q.opts.map((o,i)=>`<button type="button" class="opt ${optCls(qz,q,i)}" data-ans="${i}" ${qz.answered?'disabled':''}><span class="fr">${T(o[1],o[2])}</span><span class="ar" lang="ar">${o[0]}</span></button>`).join('')}</div>`;
  } else {
    body = `<p class="q-t">${L(q.q)}</p>
      <div class="tap-words">${q.words.map((w,i)=>`<button type="button" class="${optCls(qz,q,i)}" data-ans="${i}" lang="ar" ${qz.answered?'disabled':''}>${w}</button>`).join('')}</div>`;
  }
  let fb = '';
  if (qz.answered){
    const good = isRight(q, qz.picked);
    fb = `<div class="fb ${good?'ok':'ko'}"><b>${good?T('Bien vu !','أَحْسَنْتَ!'):T('Pas tout à fait.','لَيْسَ تَمَامًا.')}</b>${L(q.why)}</div>
      <div class="row"><button class="btn" type="button" data-act="qnext">${qz.i<n-1?T('Question suivante','السُّؤَالُ التَّالِي'):T('Voir mon score','النَّتِيجَةُ')}</button></div>`;
  }
  return `
    <p class="kicker">${T('Étape 5 · Exercices','الْخُطْوَةُ ٥ · التَّمَارِينُ')}</p>
    <h1>${T('À toi de jouer','دَوْرُكَ الْآنَ')}</h1>
    <div class="bar"><i style="width:${(qz.i/n)*100}%"></i></div>
    <div class="q-card">
      <div class="q-n"><span>${T(`Question ${qz.i+1} / ${n}`,`السُّؤَالُ ${AN(qz.i+1)} / ${AN(n)}`)} · ${T('score','النَّتِيجَةُ')} ${AN(qz.score)}</span>${refTag(q.ref)}</div>
      ${body}${fb}
    </div>`;
}
function renderScore(Ls){
  const qz = Ls.ui.quiz, n = Ls.Q.length, s = qz.score, pct = s/n, C = 2*Math.PI*62, best = saved.best[Ls.id];
  const msg = pct===1 ? T('Parfait. Leçon maîtrisée.','مُمْتَازٌ! أَتْقَنْتَ الدَّرْسَ.')
    : pct>=.75 ? T('Très bien. Relis la fiche pour les points manqués.','جَيِّدٌ جِدًّا. رَاجِعِ الْخُلَاصَةَ لِمَا فَاتَكَ.')
    : pct>=.5 ? T('Bon début. Repasse par le laboratoire, puis réessaie.','بِدَايَةٌ طَيِّبَةٌ. ارْجِعْ إِلَى الْمُخْتَبَرِ ثُمَّ أَعِدِ الْمُحَاوَلَةَ.')
    : T('Reprends l’explication du prof et les versets, puis recommence.','ارْجِعْ إِلَى الشَّرْحِ وَالْآيَاتِ ثُمَّ أَعِدْ.');
  return `
    <p class="kicker">${T('Étape 5 · Exercices','الْخُطْوَةُ ٥ · التَّمَارِينُ')}</p>
    <h1>${T('Ton résultat','نَتِيجَتُكَ')}</h1>
    <div class="card score">
      <svg class="ring" viewBox="0 0 150 150" aria-label="${s}/${n}">
        <circle class="bg" cx="75" cy="75" r="62"/>
        <circle class="fg" id="ringFg" cx="75" cy="75" r="62" stroke-dasharray="${C}" stroke-dashoffset="${C}" data-target="${C*(1-pct)}"/>
        <text x="75" y="75">${s}/${n}</text>
      </svg>
      <p style="margin:0 auto 4px">${msg}</p>
      ${best!=null?`<p class="muted small" style="margin:0 auto">${T('Meilleur score','أَفْضَلُ نَتِيجَةٍ')} : ${best}/${n}</p>`:''}
      <div class="row"><button class="btn sec" type="button" data-act="qrestart">${T('Nouvelle série (mélangée)','سِلْسِلَةٌ جَدِيدَةٌ')}</button><button class="btn" type="button" data-act="tofiche">${T('Voir la fiche','الْخُلَاصَةُ')}</button></div>
    </div>`;
}

/* ---------- Gabarits communs aux leçons ---------- */
const K2 = () => `<p class="kicker">${T('Étape 2 · Le prof explique','الْخُطْوَةُ ٢ · الشَّرْحُ')}</p>`;
const REPLAY = () => `<div class="center" style="margin-top:12px"><button class="ghost" type="button" data-act="replay">${T('Rejouer l’animation','إِعَادَةُ الْحَرَكَةِ')}</button></div>`;

/* ---------- Programme du livre (31 leçons) et registre des leçons construites ---------- */
const COURSE = [
  ['الْكَلِمَةُ',['أَنْوَاعُ الْكَلِمَةِ','النَّكِرَةُ وَالْمَعْرِفَةُ','الْمُعْرَبُ وَالْمَبْنِيُّ','الْأَحْكَامُ الْإِعْرَابِيَّةُ','عَلَامَاتُ الْإِعْرَابِ','خَطُّ الْإِعْرَابِ']],
  ['الْجُمْلَةُ الْفِعْلِيَّةُ',['الْفَاعِلُ','نَائِبُ الْفَاعِلِ']],
  ['الْجُمْلَةُ الِاسْمِيَّةُ',['الْمُبْتَدَأُ وَالْخَبَرُ','كَانَ وَأَخَوَاتُهَا','إِنَّ وَأَخَوَاتُهَا · لَا النَّافِيَةُ','ظَنَّ وَأَخَوَاتُهَا']],
  ['الْمَنْصُوبَاتُ',['الْمَفْعُولُ بِهِ','الْمَفْعُولُ فِيهِ','الْمَفْعُولُ لَهُ','الْمَفْعُولُ مَعَهُ','الْمَفْعُولُ الْمُطْلَقُ','الْحَالُ','التَّمْيِيزُ','الْمُسْتَثْنَى','الْمُنَادَى']],
  ['الْمَجْرُورَاتُ',['الْمَجْرُورُ بِحَرْفِ الْجَرِّ','الْمَجْرُورُ بِالْإِضَافَةِ']],
  ['التَّوَابِعُ',['النَّعْتُ','الْمَعْطُوفُ','التَّوْكِيدُ','الْبَدَلُ']],
  ['إِعْرَابُ الْمُضَارِعِ',['نَصْبُ الْمُضَارِعِ','جَزْمُ الْمُضَارِعِ','رَفْعُ الْمُضَارِعِ','خُلَاصَةُ إِعْرَابِ الِاسْمِ']]
];
const COURSE_FLAT = COURSE.flatMap(([, ls]) => ls);
const LESSONS = [];
function registerLesson(Ls){ LESSONS.push(Ls); LESSONS.sort((a,b)=>a.idx-b.idx); }
function finishBlock(Ls){
  return `<div class="row" style="margin-top:16px">${saved.done[Ls.id] ? `<span class="done-badge">${T('Leçon terminée','أَتْمَمْتَ الدَّرْسَ')}</span>` : `<button class="btn" type="button" data-act="finish">${T('Marquer la leçon comme terminée','أَتْمَمْتُ الدَّرْسَ')}</button>`}</div>`;
}
function nextBlock(nextIdx){
  const name = COURSE_FLAT[nextIdx] || '';
  const avail = LESSONS.find(l=>l.idx===nextIdx);
  return `<div class="next">
    <div><p class="kicker">${T('Leçon suivante','الدَّرْسُ التَّالِي')}</p><span class="ar" lang="ar" dir="rtl">${name}</span>${avail?T(` <span class="muted small">${avail.title.fr.toLowerCase()}</span>`,''):''}</div>
    ${avail ? `<button class="btn" type="button" data-act="golesson" data-l="${nextIdx}">${T('Commencer','ابْدَأْ')}</button>` : `<span class="muted small">${T('bientôt','قَرِيبًا')}</span>`}
  </div>`;
}
