/* lessons/_modele.js — MODÈLE de leçon (non chargé par index.html).
   Copier en lessons/NN-slug.js, remplacer tout le contenu « … », puis ajouter dans index.html :
     <script src="lessons/NN-slug.js" charset="utf-8"></script>   (avant js/app.js)
   Voir docs/guide-lecon.md pour le détail de chaque champ. */
(function(){
const LX = {
  id: 'l3',                 // identifiant unique, sert à la sauvegarde locale
  idx: 2,                   // position dans COURSE (0-based) — voir ROADMAP.md
  title: {fr:'Déclinable et indéclinable', ar:'الْمُعْرَبُ وَالْمَبْنِيُّ'},
  titleAr: 'الْمُعْرَبُ وَالْمَبْنِيُّ',
  labName: {fr:'Laboratoire', ar:'الْمُخْتَبَرُ'},
  ui: { sel:'r', open:{r:true}, ex:{v:0, rev:{}, open:{}, seen:{0:true}}, lab:{} }
};

/* ---------- 1. Carte (arbre) ----------
   N(labelArabe, labelFrançais, classeCouleur|null, I(infoFr, infoAr)|null, exemples|null, enfants|null)
   exemples = [['mot arabe', 'S:V'], …] ('' si pas de verset). La couleur se transmet aux enfants. */
LX.schema = {
  h1: {fr:'La carte : …', ar:'الْخَرِيطَةُ: …'},
  prof: {fr:'Touche une case pour faire pousser ses branches…', ar:'الْمِسْ خَانَةً…'}
};
LX.tree = N('الْكَلِمَةُ', 'le mot', '', I('…', '…'), null, [
  N('مُعْرَبٌ', 'déclinable', 'ism', I('…', '…'), [['الْحَمْدُ', '1:2']]),
  N('مَبْنِيٌّ', 'indéclinable', 'harf', I('…', '…'), null, [
    N('…', '…', null, null, [['هُوَ', '112:1']])
  ])
]);

/* ---------- 2. Le prof : un écran = une fonction qui renvoie du HTML ----------
   Outils : K2() en-tête d'étape, PROF() badge, REPLAY() bouton rejouer, T(fr, ar), ar('texte'),
   refTag('S:V'), AN(n) chiffres arabes en mode arabe. Classes d'animation dispo dans app.css :
   .sentence/.w (mots qui tombent et se colorent), .grid2/.ex-card, .timeline, .harf-demo,
   .glue (mots collés), .signs/.sign-row, .altest/.alrow, .annex/.anrow, .note, .chip. */
LX.prof = [
  () => `${K2()}
    <h1>${T('Titre de l’écran', 'عُنْوَانُ الشَّاشَةِ')}</h1>
    <div class="prof">${PROF()}<p>${T('Explication en français avec ' + ar('مِثَالٌ') + '.', 'شَرْحٌ بِالْعَرَبِيَّةِ.')}</p></div>
    <div class="note">${T('Dans le Coran :', 'فِي الْقُرْآنِ:')}
      <div class="quran-row"><span class="chip ism">${ar('الْحَمْدُ لِلَّهِ')} · ${AN('1:2')}</span></div>
    </div>${REPLAY()}`
];

/* ---------- 3. Laboratoire : HTML + gestion de ses propres clics ----------
   onClick(e) renvoie true si le clic a été traité. Appeler render() pour redessiner,
   et saved.labNN + persist() pour mémoriser l'état. */
LX.renderLab = () => `
  <p class="kicker">${T('Étape 3 · Le laboratoire', 'الْخُطْوَةُ ٣ · الْمُخْتَبَرُ')}</p>
  <h1>${T('…', '…')}</h1>
  <div class="prof">${PROF()}<p>${T('…', '…')}</p></div>
  <div class="lab-tile" id="tile"><div class="lab-word" lang="ar" dir="rtl">…</div></div>`;
LX.onClick = e => false;

/* ---------- 4. Versets ----------
   W(motTelQuIlApparaît, catégorie, pourquoiFr, pourquoiAr, parties?)
   catégorie = une clé de CATS (core.js) ou 'multi' avec parties = [['بِـ','harf'],['اسْمِ','ism']]. */
LX.exTitle = {fr:'Analyse les versets', ar:'حَلِّلِ الْآيَاتِ'};
LX.exProf = {fr:'Touche chaque mot pour vérifier.', ar:'الْمِسْ كُلَّ كَلِمَةٍ لِلتَّحَقُّقِ.'};
// LX.exLegend = () => `<div class="legend">…</div>`;   // facultatif
LX.verses = [
  {ref:'1:2', tr:'La louange est à Allah, Seigneur des mondes.', words:[
    W('الْحَمْدُ', 'ism', '…', '…'),
    W('لِلَّهِ', 'multi', '…', '…', [['لِـ','harf'], ['اللَّهِ','ism']])
  ]}
];

/* ---------- 5. Exercices (trois types) ----------
   choice : verset avec un mot souligné (pre + hl + post), réponses = SETS[set] ;
   tap    : toucher le bon mot (a = index ou liste d'index) ;
   sign   : QCM libre, opts = [[arabe, libelléFr, libelléAr], …], a = index. */
LX.Q = [
  {k:'choice', set:'fam', ref:'112:1', pre:'قُلْ هُوَ اللَّهُ ', hl:'أَحَدٌ', post:'', a:'ism',
    why:{fr:'…', ar:'…'}},
  {k:'tap', ref:'112:3', words:['لَمْ','يَلِدْ','وَلَمْ','يُولَدْ'], a:[1,3],
    q:{fr:'Touche un <b>…</b>.', ar:'…'}, why:{fr:'…', ar:'…'}},
  {k:'sign', ref:'81:1', q:{fr:'…', ar:'…'},
    opts:[['ـتْ','tâ’ sâkina','تَاءُ التَّأْنِيثِ'], ['لَمْ','la négation','لَمْ']], a:0,
    why:{fr:'…', ar:'…'}}
];
LX.ui.quiz = newQuiz(LX.Q.length);

/* ---------- 6. Fiche ---------- */
LX.renderFiche = () => `
  <p class="kicker">${T('Étape 6 · La fiche', 'الْخُطْوَةُ ٦ · الْخُلَاصَةُ')}</p>
  <h1>${T('À retenir', 'خُلَاصَةُ الدَّرْسِ')}</h1>
  <div class="memo"><b>${T('La méthode en une phrase', 'الطَّرِيقَةُ فِي سَطْرٍ')}</b>${T('…', '…')}</div>
  ${finishBlock(LX)}
  ${nextBlock(LX.idx + 1)}`;

registerLesson(LX);
})();
