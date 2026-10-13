/* js/app.js — Nahw Saghîr
   Coquille de l'application : navigation entre les 6 étapes, parcours, bascule de langue,
   délégation des clics vers les moteurs communs puis vers Ls.onClick de chaque leçon.
   Chargé en dernier, après toutes les leçons. */
/* =====================================================================
   PARCOURS + MOTEUR
   ===================================================================== */


let cur = LESSONS.find(l=>l.idx===saved.cur) || LESSONS[0];
const pos = l => saved.pos[l.id] || (saved.pos[l.id] = {step:0});
const state = { sub: 0 };

const stepsOf = Ls => [
  {name:{fr:'Carte',ar:'الْخَرِيطَةُ'}, subs:1, render:()=>renderSchema(Ls)},
  {name:{fr:'Le prof',ar:'الشَّرْحُ'}, subs:Ls.prof.length, render:()=>Ls.prof[state.sub]()},
  {name:Ls.labName||{fr:'Laboratoire',ar:'الْمُخْتَبَرُ'}, subs:1, render:Ls.renderLab},
  {name:{fr:'Coran',ar:'الْآيَاتُ'}, subs:1, render:()=>renderExplorer(Ls)},
  {name:{fr:'Exercices',ar:'التَّمَارِينُ'}, subs:1, render:()=>renderQuiz(Ls)},
  {name:{fr:'Fiche',ar:'الْخُلَاصَةُ'}, subs:1, render:Ls.renderFiche}
];

function openMap(){
  const bg = document.createElement('div');
  bg.className = 'sheet-bg';
  bg.innerHTML = `<div class="sheet" role="dialog" aria-modal="true">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><h2 style="margin:0">${T('Le parcours','خُطَّةُ الدُّرُوسِ')}</h2><button class="ghost" type="button" data-close>${T('Fermer','إِغْلَاقٌ')}</button></div>
    <p class="muted small">${T(`${COURSE_FLAT.length} leçons qui suivent l’ordre du livre. Touche une leçon disponible pour l’ouvrir.`,`${AN(COURSE_FLAT.length)} دَرْسًا عَلَى تَرْتِيبِ الْكِتَابِ. الْمِسْ دَرْسًا مُتَاحًا لِفَتْحِهِ.`)}</p>
    ${(()=>{ let g=-1; return COURSE.map(([t,ls],mi)=>`<div class="mod"><div class="mod-h"><span>${T('Module '+(mi+1),'الْوَحْدَةُ '+AN(mi+1))}</span><span class="ar" lang="ar" dir="rtl">${t}</span></div>
      ${ls.map(l=>{ g++; const Ls = LESSONS.find(x=>x.idx===g);
        if (Ls) return `<button type="button" class="les open ${Ls===cur?'cur':''}" data-open="${g}"><small>${saved.done[Ls.id]?T('terminée','مُكْتَمِلٌ'):(Ls===cur?T('en cours','الْحَالِيُّ'):T('disponible','مُتَاحٌ'))}</small><span class="ar" lang="ar" dir="rtl">${l}</span></button>`;
        return `<div class="les"><small>${T('bientôt','قَرِيبًا')}</small><span class="ar" lang="ar" dir="rtl">${l}</span></div>`; }).join('')}</div>`).join(''); })()}
  </div>`;
  bg.addEventListener('click', e=>{
    const o = e.target.closest('[data-open]');
    if (o){ bg.remove(); openLesson(+o.dataset.open); return; }
    if (e.target===bg || e.target.closest('[data-close]')) bg.remove();
  });
  document.body.appendChild(bg);
  bg.querySelector('[data-close]').focus();
}
function openLesson(i){ cur = LESSONS.find(l=>l.idx===i) || cur; saved.cur = cur.idx; state.sub = 0; persist(); render(); window.scrollTo({top:0,behavior:'smooth'}); }

function applyLang(){
  document.documentElement.lang = LANG;
  document.documentElement.dir = LANG==='ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('l-ar', LANG==='ar');
  $('#langBtn').textContent = LANG==='ar' ? 'Français' : 'عَرَبِيّ';
  $('#langBtn').setAttribute('aria-label', LANG==='ar' ? 'Passer en français' : 'التَّحْوِيلُ إِلَى الْعَرَبِيَّةِ');
  $('#mapBtn').textContent = T('Parcours','الدُّرُوسُ');
  $('#prevBtn').textContent = T('Retour','رُجُوعٌ');
}
function render(){
  applyLang();
  const S = stepsOf(cur), p = pos(cur);
  if (p.step > 5) p.step = 0;
  if (state.sub >= S[p.step].subs) state.sub = 0;
  $('#main').innerHTML = `<div class="stage">${S[p.step].render()}</div>`;
  const doneSteps = saved.steps[cur.id] || {};
  $('#stepper').innerHTML = S.map((s,i)=>`<button type="button" class="seg ${i<p.step||doneSteps[i]?'done':''} ${i===p.step?'cur':''}" data-step="${i}" aria-current="${i===p.step?'step':'false'}"><i></i><span>${L(s.name)}</span></button>`).join('');
  $('#brandSub').textContent = T(`Leçon ${cur.idx+1} · ${cur.title.fr} · ${S[p.step].name.fr}`, `الدَّرْسُ ${AN(cur.idx+1)}: ${cur.titleAr} · ${S[p.step].name.ar}`);
  $('#subDots').innerHTML = S[p.step].subs>1 ? Array.from({length:S[p.step].subs},(_,i)=>`<i class="${i===state.sub?'on':''}"></i>`).join('') : '';
  const atStart = p.step===0 && state.sub===0;
  $('#prevBtn').disabled = atStart; $('#prevBtn').style.visibility = atStart ? 'hidden' : 'visible';
  const last = p.step===S.length-1;
  $('#nextBtn').textContent = last ? T('Revoir depuis le début','مِنَ الْبِدَايَةِ') : (state.sub < S[p.step].subs-1 ? T('Suivant','التَّالِي') : `${T('Suite','التَّالِي')} : ${L(S[p.step+1].name)}`);
  fitTree();
  const ring = $('#ringFg'); if (ring && window.requestAnimationFrame) requestAnimationFrame(()=>requestAnimationFrame(()=>{ ring.style.strokeDashoffset = ring.dataset.target; }));
  persist();
}
function go(step, sub=0){
  const p = pos(cur);
  if (step > p.step){ (saved.steps[cur.id] = saved.steps[cur.id] || {})[p.step] = true; }
  p.step = step; state.sub = sub; render();
  window.scrollTo({top:0, behavior:'smooth'});
}
$('#nextBtn').addEventListener('click', ()=>{
  const S = stepsOf(cur), p = pos(cur);
  if (state.sub < S[p.step].subs-1){ state.sub++; render(); window.scrollTo({top:0,behavior:'smooth'}); return; }
  if (p.step === S.length-1){ go(0,0); return; }
  go(p.step+1, 0);
});
$('#prevBtn').addEventListener('click', ()=>{
  const p = pos(cur);
  if (state.sub > 0){ state.sub--; render(); return; }
  if (p.step > 0){ const S = stepsOf(cur); go(p.step-1, S[p.step-1].subs-1); }
});
$('#stepper').addEventListener('click', e=>{ const b=e.target.closest('[data-step]'); if (b) go(+b.dataset.step, 0); });
$('#mapBtn').addEventListener('click', openMap);
$('#langBtn').addEventListener('click', ()=>{ LANG = LANG==='ar' ? 'fr' : 'ar'; saved.lang = LANG; persist(); render(); });

$('#main').addEventListener('click', e=>{
  const Ls = cur, ex = Ls.ui.ex, qz = Ls.ui.quiz;
  const actEl = e.target.closest('[data-act]'), act = actEl?.dataset.act;
  if (act==='replay'){ render(); return; }
  if (act==='vprev'){ ex.v = Math.max(0,ex.v-1); ex.seen[ex.v]=true; render(); return; }
  if (act==='vnext'){ ex.v = Math.min(Ls.verses.length-1,ex.v+1); ex.seen[ex.v]=true; render(); return; }
  if (act==='revall'){ Ls.verses[ex.v].words.forEach((_,wi)=>ex.rev[ex.v+'-'+wi]=true); render(); return; }
  if (act==='qnext'){
    if (qz.i < Ls.Q.length-1){ qz.i++; qz.answered=false; qz.picked=null; }
    else { qz.finished = true; if (saved.best[Ls.id]==null || qz.score>saved.best[Ls.id]) saved.best[Ls.id] = qz.score; persist(); }
    render(); return;
  }
  if (act==='qrestart'){ Ls.ui.quiz = newQuiz(Ls.Q.length); render(); return; }
  if (act==='tofiche'){ go(5); return; }
  if (act==='finish'){ saved.done[Ls.id] = true; saved.steps[Ls.id] = {0:1,1:1,2:1,3:1,4:1,5:1}; persist(); render(); return; }
  if (act==='golesson'){ openLesson(+actEl.dataset.l); return; }

  const vd = e.target.closest('[data-v]'); if (vd){ ex.v = +vd.dataset.v; ex.seen[ex.v]=true; render(); return; }
  if (act==='treeall'){ Ls.ui.open = allPaths(Ls.tree,'r',{}); Ls.ui.fresh = null; redrawTree(Ls); return; }
  if (act==='treenone'){ Ls.ui.open = {r:true}; Ls.ui.sel = 'r'; redrawTree(Ls); return; }
  const tn = e.target.closest('[data-tn]');
  if (tn){ const p = tn.dataset.tn; const node = p.split('.').slice(1).reduce((n,i)=>n.kids[+i], Ls.tree);
    const hasKids = node.kids && node.kids.length;
    if (hasKids){
      if (Ls.ui.open[p] && Ls.ui.sel === p){ Object.keys(Ls.ui.open).forEach(k=>{ if (k===p || k.startsWith(p+'.')) delete Ls.ui.open[k]; }); }
      else if (!Ls.ui.open[p]){ Ls.ui.open[p] = true; Ls.ui.fresh = p; }
    }
    Ls.ui.sel = p; redrawTree(Ls); return; }
  const exw = e.target.closest('[data-ex]');
  if (exw){
    const k = exw.dataset.ex, [vi,wi] = k.split('-').map(Number);
    ex.rev[k] = true; ex.open[vi] = wi;
    exw.outerHTML = verseWordHtml(Ls,vi,wi,Ls.verses[vi].words[wi]);
    const nb = document.querySelector(`[data-ex="${k}"]`); if (nb) nb.classList.add('flash');
    $('#why').innerHTML = whyHtml(Ls,vi); $('#exCount').innerHTML = exCount(Ls); return;
  }
  const ans = e.target.closest('[data-ans]');
  if (ans && !qz.answered && pos(Ls).step===4){
    const q = Ls.Q[qz.order[qz.i]];
    qz.picked = ans.dataset.ans; qz.answered = true;
    if (isRight(q, qz.picked)) qz.score++;
    render(); return;
  }
  if (Ls.onClick) Ls.onClick(e);
});

window.addEventListener('resize', ()=>fitTree());
try { document.fonts && document.fonts.ready.then(()=>fitTree()); } catch(e){}
render();
