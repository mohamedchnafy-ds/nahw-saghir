/* lessons/01-anwa-al-kalima.js
   Leçon 1 — أَنْوَاعُ الْكَلِمَةِ (livre p. 9 · PDF p. 11)
   Chargé après js/core.js et avant js/app.js. Le contenu reste privé à ce bloc ;
   seule la leçon est enregistrée avec registerLesson(). Voir docs/guide-lecon.md. */
(function(){
/* =====================================================================
   LEÇON 1 — أَنْوَاعُ الْكَلِمَةِ
   ===================================================================== */
const L1 = { id:'l1', idx:0, title:{fr:'Les types de mots', ar:'أَنْوَاعُ الْكَلِمَةِ'}, titleAr:'أَنْوَاعُ الْكَلِمَةِ',
  ui:{ sel:'root', ex:{v:0,rev:{},open:{},seen:{0:true}}, lab:{w:0,tested:{}} } };

L1.ui.open = {r:true}; L1.ui.sel = 'r';
L1.schema = {
  h1:{fr:'Avant de commencer : la carte de la leçon', ar:'قَبْلَ الْبَدْءِ: خَرِيطَةُ الدَّرْسِ'},
  prof:{fr:'Voici toute la leçon sous forme d’arbre. Touche une case : ses branches poussent, avec leurs signes et leurs exemples du Coran. Ne cherche pas à tout retenir, repère d’abord les <b>trois branches</b>.',
        ar:'هَذَا الدَّرْسُ كُلُّهُ فِي شَجَرَةٍ. الْمِسْ أَيَّ فَرْعٍ لِيَنْفَتِحَ بِعَلَامَاتِهِ وَأَمْثِلَتِهِ مِنَ الْقُرْآنِ. ابْدَأْ بِالْأَقْسَامِ <b>الثَّلَاثَةِ</b>.'}
};
L1.tree = N('الْكَلِمَةُ','le mot','',I('Tout mot arabe appartient à une seule de ces trois familles.','تَنْقَسِمُ الْكَلِمَةُ إِلَى ثَلَاثَةِ أَقْسَامٍ.'),null,[
  N('اِسْمٌ','nom','ism',I('Désigne une personne, une chose, un lieu ou une idée, sans notion de temps. On le reconnaît à quatre signes :','يَدُلُّ عَلَى مُسَمًّى بِلَا زَمَنٍ، وَعَلَامَاتُهُ أَرْبَعٌ:'),null,[
    N('أَلْ','l’article',null,null,[['الْكَوْثَرَ','108:1'],['الْحَمْدُ','1:2']]),
    N('التَّنْوِينُ','le tanwîn',null,null,[['أَحَدٌ','112:1'],['هُدًى','2:2']]),
    N('النِّدَاءُ','l’appel يَا',null,null,[['يَا أَرْضُ','11:44']]),
    N('حَرْفُ الْجَرِّ','une préposition avant lui',null,null,[['بِرَبِّ','113:1'],['فِي لَيْلَةِ','97:1']])
  ]),
  N('فِعْلٌ','verbe','fiil',I('Un événement lié à un temps. Trois sortes, chacune avec son signe :','يَدُلُّ عَلَى حَدَثٍ فِي زَمَنٍ، وَهُوَ ثَلَاثَةُ أَقْسَامٍ:'),null,[
    N('مَاضٍ','passé',null,I('Signe : il accepte le تْ final avec soukoun (تَاءُ التَّأْنِيثِ السَّاكِنَةُ).','عَلَامَتُهُ: قَبُولُ تَاءِ التَّأْنِيثِ السَّاكِنَةِ.'),[['كُوِّرَتْ','81:1'],['خَلَقَ ← خَلَقَتْ','96:1']]),
    N('مُضَارِعٌ','inaccompli',null,I('Signe : il accepte لَمْ devant lui.','عَلَامَتُهُ: قَبُولُ لَمْ.'),[['لَمْ يَلِدْ','112:3'],['نَعْبُدُ','1:5']]),
    N('أَمْرٌ','impératif',null,I('Signes : il accepte le ي de l’interlocutrice ET il exprime une demande.','عَلَامَتُهُ: قَبُولُ يَاءِ الْمُخَاطَبَةِ مَعَ الدَّلَالَةِ عَلَى الطَّلَبِ.'),[['فَكُلِي وَاشْرَبِي','19:26'],['اقْرَأْ','96:1']])
  ]),
  N('حَرْفٌ','particule','harf',I('Relie les mots. Son signe : il n’accepte aucun des signes du nom ni du verbe.','يَرْبِطُ بَيْنَ الْكَلِمَاتِ، وَعَلَامَتُهُ أَلَّا يَقْبَلَ شَيْئًا مِنْ عَلَامَاتِ الِاسْمِ وَالْفِعْلِ.'),[['فِي','97:1'],['مِنْ','97:3'],['لَمْ','112:3'],['إِنَّ','103:2']])
]);

const L1_SENT = [{t:'قُلْ', f:'fiil'}, {t:'أَعُوذُ', f:'fiil'}, {t:'بِـ', f:'harf'}, {t:'رَبِّ', f:'ism'}, {t:'الْفَلَقِ', f:'ism'}];
L1.prof = [
  () => `${K2()}
    <h1>${T('Trois familles de mots','ثَلَاثَةُ أَقْسَامٍ لِلْكَلِمَةِ')}</h1>
    <div class="prof">${PROF()}
      <p>${T(`Un verset est fait de ${ar('كَلِمَاتٌ')} (des mots). Chaque mot appartient à <b>une seule</b> des trois familles de la carte. Regarde ce verset se colorer.`,
             'الْآيَةُ مُكَوَّنَةٌ مِنْ كَلِمَاتٍ، وَكُلُّ كَلِمَةٍ تَنْتَمِي إِلَى قِسْمٍ <b>وَاحِدٍ فَقَطْ</b>. انْظُرْ إِلَى هَذِهِ الْآيَةِ وَهِيَ تَتَلَوَّنُ.')}</p>
    </div>
    <div class="sentence" dir="rtl" lang="ar">
      ${L1_SENT.map((w,i)=>`<span class="w ${CATS[w.f].col}" style="--i:${i}"><span class="w-ar">${w.t}</span><span class="w-tag">${CATS[w.f].ar}</span></span>`).join('')}
    </div>
    <p class="trans">${refTag('113:1')}${T(' « Dis : je cherche refuge auprès du Seigneur de l’aube naissante. » (sens approché)','')}</p>
    <div class="note">${T(`Regarde ${ar('بِرَبِّ')} : le petit ${ar('بِـ')} est un mot à part entière, collé au suivant. On reviendra sur ces mots collés.`,
                           `انْظُرْ إِلَى ${ar('بِرَبِّ')}: الْبَاءُ كَلِمَةٌ مُسْتَقِلَّةٌ (حَرْفٌ) اتَّصَلَتْ بِمَا بَعْدَهَا.`)}</div>
    <div class="legend">
      <span class="chip ism">${ar('اِسْمٌ')}${T(' nom','')}</span>
      <span class="chip fiil">${ar('فِعْلٌ')}${T(' verbe','')}</span>
      <span class="chip harf">${ar('حَرْفٌ')}${T(' particule','')}</span>
    </div>${REPLAY()}`,
  () => `${K2()}
    <h1>${T(`${ar('الِاسْمُ')} : le mot qui nomme`,'الِاسْمُ: الْكَلِمَةُ الَّتِي تُسَمِّي')}</h1>
    <div class="prof">${PROF()}
      <p>${T(`Le ${ar('اِسْمٌ')} désigne une personne, une chose, un lieu ou une idée. Il ne contient <b>aucune indication de temps</b>.`,
             'الِاسْمُ يَدُلُّ عَلَى شَخْصٍ أَوْ شَيْءٍ أَوْ مَكَانٍ أَوْ مَعْنًى، وَ<b>لَا يَدُلُّ عَلَى زَمَنٍ</b>.')}</p>
    </div>
    <div class="grid2">
      ${[[['Personne','شَخْصٌ'],'مَرْيَمُ','Maryam','19:16'],[['Chose','شَيْءٌ'],'الْقَلَمِ','le calame','96:4'],[['Nature','مَكَانٌ'],'الْجِبَالُ','les montagnes','81:3'],[['Idée','مَعْنًى'],'الصَّبْرِ','la patience','103:3']]
        .map((x,i)=>`<div class="ex-card" style="--i:${i}"><div class="lab">${L({fr:x[0][0],ar:x[0][1]})}</div>${ar(x[1])}<div class="tr">${T(x[2]+' · ','')}${AN(x[3])}</div></div>`).join('')}
    </div>
    <p style="margin-top:14px">${T(`Tous ces noms viennent du Coran. Remarque le ${ar('أَلْ')} au début de الْقَلَمِ ou الصَّبْرِ : c’est un premier indice du ${ar('اِسْمٌ')}.`,
                                    `كُلُّ هَذِهِ الْأَسْمَاءِ مِنَ الْقُرْآنِ. لَاحِظْ ${ar('أَلْ')} فِي أَوَّلِ الْقَلَمِ وَالصَّبْرِ: إِنَّهَا مِنْ عَلَامَاتِ الِاسْمِ.`)}</p>`,
  () => `${K2()}
    <h1>${T(`${ar('الْفِعْلُ')} : l’action dans le temps`,'الْفِعْلُ: حَدَثٌ فِي زَمَنٍ')}</h1>
    <div class="prof">${PROF()}
      <p>${T(`Le ${ar('فِعْلٌ')} exprime un événement <b>lié à un temps</b>. Il a trois formes. Suis le point sur la ligne.`,
             'الْفِعْلُ يَدُلُّ عَلَى حَدَثٍ <b>مُرْتَبِطٍ بِزَمَنٍ</b>، وَهُوَ ثَلَاثَةُ أَنْوَاعٍ. تَابِعِ النُّقْطَةَ عَلَى الْخَطِّ.')}</p>
    </div>
    <div class="timeline">
      <div class="tl-line"><span class="tl-dot"></span></div>
      <div class="tl-items">
        ${[[['Passé','الْمَاضِي'],'كَتَبَ','مَاضٍ','il a écrit'],[['Présent / futur','الْحَاضِرُ وَالْمُسْتَقْبَلُ'],'يَكْتُبُ','مُضَارِعٌ','il écrit, il écrira'],[['Ordre','الطَّلَبُ'],'اُكْتُبْ','أَمْرٌ','écris !']]
          .map((x,i)=>`<div class="tl-item" style="--i:${i}"><div class="lab">${L({fr:x[0][0],ar:x[0][1]})}</div>${ar(x[1],'v')}${ar(x[2],'t')}${T(`<span class="tr">${x[3]}</span>`,'')}</div>`).join('')}
      </div>
    </div>
    <div class="note">${T('Dans le Coran :','فِي الْقُرْآنِ:')}
      <div class="quran-row">
        <span class="chip fiil">${ar('خَلَقَ')} ${ar('مَاضٍ')} · ${AN('96:1')}</span>
        <span class="chip fiil">${ar('نَعْبُدُ')} ${ar('مُضَارِعٌ')} · ${AN('1:5')}</span>
        <span class="chip fiil">${ar('اقْرَأْ')} ${ar('أَمْرٌ')} · ${AN('96:1')}</span>
      </div>
    </div>`,
  () => `${K2()}
    <h1>${T(`${ar('الْحَرْفُ')} : le mot qui relie`,'الْحَرْفُ: الْكَلِمَةُ الَّتِي تَرْبِطُ')}</h1>
    <div class="prof">${PROF()}
      <p>${T(`Seul, un ${ar('حَرْفٌ')} n’a pas de sens complet. Il prend son sens <b>en se liant</b> à d’autres mots.`,
             'الْحَرْفُ وَحْدَهُ لَا يَتِمُّ مَعْنَاهُ، وَإِنَّمَا يَظْهَرُ مَعْنَاهُ <b>مَعَ غَيْرِهِ</b>.')}</p>
    </div>
    <div class="harf-demo">
      <div class="hd-row">
        <span class="hd-w hd-fi" lang="ar">فِي<span class="q">?</span></span>
        <span class="hd-w hd-noun" lang="ar">لَيْلَةِ الْقَدْرِ</span>
      </div>
      <div class="hd-link"></div>
      <div class="hd-tr">${T(`${ar('فِي')} seul : « dans »… dans quoi ? Dans le verset : « dans la nuit du Destin ».`,`${ar('فِي')} وَحْدَهَا: فِي مَاذَا؟ فِي الْآيَةِ: ${ar('فِي لَيْلَةِ الْقَدْرِ')}`)} ${refTag('97:1')}</div>
      <div class="chips">
        ${[['فِي','dans'],['مِنْ','de'],['لَمْ','ne… pas'],['إِنَّ','certes']].map((x,i)=>`<span class="chip harf" style="--i:${i}">${ar(x[0])}${T(' '+x[1],'')}</span>`).join('')}
      </div>
    </div>${REPLAY()}`,
  () => `${K2()}
    <h1>${T('Comment les reconnaître ?','كَيْفَ نُمَيِّزُ بَيْنَهَا؟')}</h1>
    <div class="prof">${PROF()}
      <p>${T(`La méthode des grammairiens est le <b>test des signes</b> (${ar('الْعَلَامَاتُ')}) : on regarde ce que le mot <b>accepte</b> de recevoir. Chaque exemple vient du Coran.`,
             'طَرِيقَةُ النُّحَاةِ هِيَ <b>الْعَلَامَاتُ</b>: نَنْظُرُ مَاذَا <b>تَقْبَلُ</b> الْكَلِمَةُ. وَكُلُّ الْأَمْثِلَةِ مِنَ الْقُرْآنِ.')}</p>
    </div>
    <div class="signs">
      <div class="sign-row ism" style="--i:0"><div class="who">اِسْمٌ</div><div class="what">${T(`accepte ${ar('أَلْ')} : ${ar('الْكَوْثَرَ')} · le tanwîn : ${ar('أَحَدٌ')} · l’appel : ${ar('يَا أَرْضُ')} · une préposition : ${ar('بِرَبِّ')}`,
        `يَقْبَلُ أَلْ: ${ar('الْكَوْثَرَ')}، وَالتَّنْوِينَ: ${ar('أَحَدٌ')}، وَالنِّدَاءَ: ${ar('يَا أَرْضُ')}، وَحَرْفَ الْجَرِّ: ${ar('بِرَبِّ')}`)}</div></div>
      <div class="sign-row fiil" style="--i:1"><div class="who">مَاضٍ</div><div class="what">${T(`accepte le ${ar('تْ')} final avec soukoun : ${ar('كُوِّرَتْ')}`,`يَقْبَلُ تَاءَ التَّأْنِيثِ السَّاكِنَةَ: ${ar('كُوِّرَتْ')}`)}</div></div>
      <div class="sign-row fiil" style="--i:2"><div class="who">مُضَارِعٌ</div><div class="what">${T(`accepte ${ar('لَمْ')} devant lui : ${ar('لَمْ يَلِدْ')}`,`يَقْبَلُ لَمْ: ${ar('لَمْ يَلِدْ')}`)}</div></div>
      <div class="sign-row fiil" style="--i:3"><div class="who">أَمْرٌ</div><div class="what">${T(`accepte le ${ar('ي')} de l’interlocutrice <b>et</b> exprime une demande : ${ar('فَكُلِي وَاشْرَبِي')}`,`يَقْبَلُ يَاءَ الْمُخَاطَبَةِ <b>مَعَ</b> دَلَالَتِهِ عَلَى الطَّلَبِ: ${ar('فَكُلِي وَاشْرَبِي')}`)}</div></div>
      <div class="sign-row harf" style="--i:4"><div class="who">حَرْفٌ</div><div class="what">${T('n’accepte <b>aucun</b> de ces signes','لَا يَقْبَلُ <b>شَيْئًا</b> مِنْ هَذِهِ الْعَلَامَاتِ')}</div></div>
    </div>`,
  () => `${K2()}
    <h1>${T('Les mots collés du Coran','الْكَلِمَاتُ الْمُتَّصِلَةُ')}</h1>
    <div class="prof">${PROF()}
      <p>${T(`Dans l’écriture arabe, un mot écrit peut contenir <b>plusieurs</b> ${ar('كَلِمَاتٌ')}. Les petites particules (${ar('بِـ')}, ${ar('وَ')}, ${ar('لِـ')}, ${ar('فَ')}) se collent au mot suivant, et les pronoms (${ar('ـكَ')} « ton ») au mot précédent. Le livre cite d’ailleurs ce ${ar('كَافُ الْخِطَابِ')} parmi les exemples du ${ar('اِسْمٌ')}.`,
             'قَدْ تَجْتَمِعُ فِي الْكَلِمَةِ الْمَكْتُوبَةِ الْوَاحِدَةِ <b>أَكْثَرُ مِنْ كَلِمَةٍ</b>: فَالْحُرُوفُ الصَّغِيرَةُ (بِـ، وَ، لِـ، فَ) تَتَّصِلُ بِمَا بَعْدَهَا، وَالضَّمَائِرُ (ـكَ) تَتَّصِلُ بِمَا قَبْلَهَا. وَقَدْ ذَكَرَ الْمُصَنِّفُ كَافَ الْخِطَابِ فِي أَمْثِلَةِ الِاسْمِ.')}</p>
    </div>
    <div class="glue">
      ${[['بِاسْمِ','96:1',[['بِـ','harf'],['اسْمِ','ism']]],['وَالْعَصْرِ','103:1',[['وَ','harf'],['الْعَصْرِ','ism']]],['رَبِّكَ','96:1',[['رَبِّ','ism'],['ـكَ','ism']]]]
        .map((g,i)=>`<div class="glue-row" style="--i:${i}">
          <span class="glue-whole" style="--i:${i}" lang="ar">${g[0]}</span><span class="glue-eq" style="--i:${i}">=</span>
          <span class="glue-parts">${g[2].map((p,j)=>`${j?'<span class="plus">+</span>':''}<span class="chip ${CATS[p[1]].col}" style="--i:${i};--j:${j}">${ar(p[0])}</span>`).join('')}</span>
          ${refTag(g[1])}</div>`).join('')}
    </div>
    <p style="margin-top:14px">${T('Dans les exemples coraniques, ces mots sont marqués en doré : touche-les pour voir chaque morceau.','فِي الْأَمْثِلَةِ الْقُرْآنِيَّةِ تَظْهَرُ هَذِهِ الْكَلِمَاتُ بِاللَّوْنِ الذَّهَبِيِّ، الْمِسْهَا لِتَرَى أَجْزَاءَهَا.')}</p>${REPLAY()}`
];

/* Laboratoire L1 */
const MARKERS = [
  {id:'al',     ar:'أَلْ',      fr:'l’article',          a:'أَلْ التَّعْرِيفِ',    col:'ism'},
  {id:'tanwin', ar:'ـٌ ـٍ ـً',  fr:'le tanwîn',          a:'التَّنْوِينُ',         col:'ism'},
  {id:'nida',   ar:'يَا',       fr:'l’appel',            a:'النِّدَاءُ',          col:'ism'},
  {id:'jarr',   ar:'فِي',       fr:'une préposition',    a:'حَرْفُ الْجَرِّ',      col:'ism'},
  {id:'ta',     ar:'ـتْ',       fr:'tâ’ finale sâkina',  a:'تَاءُ التَّأْنِيثِ',   col:'fiil'},
  {id:'lam',    ar:'لَمْ',      fr:'la négation lam',    a:'لَمْ',               col:'fiil'},
  {id:'ya',     ar:'ـِي',       fr:'yâ’ (toi, féminin)', a:'يَاءُ الْمُخَاطَبَةِ', col:'fiil'}
];
const LAB_WORDS = [
  {id:'ard',   base:'أَرْض',   tr:'terre',      fam:'ism',   forms:{al:'الْأَرْضُ', tanwin:'أَرْضٌ', nida:'يَا أَرْضُ', jarr:'فِي الْأَرْضِ'}},
  {id:'khalaq',base:'خَلَقَ',  tr:'il a créé',  fam:'madi',  forms:{ta:'خَلَقَتْ'}},
  {id:'yalam', base:'يَعْلَمُ', tr:'il sait',    fam:'mudari',forms:{lam:'لَمْ يَعْلَمْ'}},
  {id:'ishrab',base:'اشْرَبْ', tr:'bois !',     fam:'amr',   forms:{ya:'اشْرَبِي'}},
  {id:'min',   base:'مِنْ',    tr:'de',         fam:'harf',  forms:{}}
];
const OK_NOTE = {
  al:{fr:'أَلْ rend le nom défini : الْأَرْضُ = « la terre ». Seul un اِسْمٌ peut le recevoir.', ar:'أَلْ تُعَرِّفُ الِاسْمَ: الْأَرْضُ. وَلَا يَقْبَلُهَا إِلَّا الِاسْمُ.'},
  tanwin:{fr:'Le tanwîn est la voyelle doublée en fin de mot : أَرْضٌ = « une terre ».', ar:'التَّنْوِينُ حَرَكَةٌ مُضَاعَفَةٌ فِي آخِرِ الِاسْمِ: أَرْضٌ.'},
  nida:{fr:'C’est exactement le verset 11:44 : يَا أَرْضُ ابْلَعِي مَاءَكِ. Seul un اِسْمٌ peut être appelé.', ar:'كَمَا فِي قَوْلِهِ تَعَالَى: يَا أَرْضُ ابْلَعِي مَاءَكِ (هُود: ٤٤). وَلَا يُنَادَى إِلَّا الِاسْمُ.'},
  jarr:{fr:'Un حَرْفُ جَرٍّ (فِي، مِنْ، بِـ…) est toujours suivi d’un اِسْمٌ. فِي الْأَرْضِ revient très souvent dans le Coran.', ar:'حَرْفُ الْجَرِّ لَا يَدْخُلُ إِلَّا عَلَى الِاسْمِ، وَ«فِي الْأَرْضِ» كَثِيرَةٌ فِي الْقُرْآنِ.'},
  ta:{fr:'Le تْ final porte un soukoun : « elle a créé ». Même signe que dans كُوِّرَتْ (81:1).', ar:'التَّاءُ السَّاكِنَةُ فِي آخِرِهِ، كَمَا فِي: كُوِّرَتْ (التَّكْوِير: ١).'},
  lam:{fr:'Exactement comme dans 96:5 : مَا لَمْ يَعْلَمْ. Regarde la fin : la ضَمَّةُ est devenue سُكُونٌ.', ar:'كَمَا فِي قَوْلِهِ تَعَالَى: عَلَّمَ الْإِنْسَانَ مَا لَمْ يَعْلَمْ (الْعَلَق: ٥). لَاحِظْ أَنَّ الضَّمَّةَ صَارَتْ سُكُونًا.'},
  ya:{fr:'Comme dans 19:26 : فَكُلِي وَاشْرَبِي. Le verbe demande quelque chose : c’est un أَمْرٌ.', ar:'كَمَا فِي قَوْلِهِ تَعَالَى: فَكُلِي وَاشْرَبِي (مَرْيَم: ٢٦). وَهُوَ يَدُلُّ عَلَى الطَّلَبِ.'}
};
const BAD_NOTE = {
  'ard:ya':{fr:'أَرْضِي existe (« ma terre »), mais ce ي veut dire « mon ». Ce n’est pas le ي de l’interlocutrice, et il n’y a aucune demande.', ar:'«أَرْضِي» صَحِيحَةٌ، لَكِنَّ الْيَاءَ هُنَا يَاءُ الْمُتَكَلِّمِ لَا يَاءُ الْمُخَاطَبَةِ، وَلَا طَلَبَ فِيهَا.'},
  'yalam:ta':{fr:'تَعْلَمُ commence par un ت, mais la تاء sâkina se place à la fin d’un verbe au passé.', ar:'«تَعْلَمُ» تَبْدَأُ بِالتَّاءِ، أَمَّا تَاءُ التَّأْنِيثِ السَّاكِنَةُ فَتَكُونُ فِي آخِرِ الْمَاضِي.'},
  'khalaq:lam':{fr:'لَمْ ne se met que devant un مُضَارِعٌ : on dit لَمْ يَخْلُقْ, jamais لَمْ خَلَقَ.', ar:'لَمْ لَا تَدْخُلُ إِلَّا عَلَى الْمُضَارِعِ: لَمْ يَخْلُقْ.'},
  'ishrab:lam':{fr:'لَمْ se place devant un مُضَارِعٌ, pas devant un ordre.', ar:'لَمْ لَا تَدْخُلُ عَلَى فِعْلِ الْأَمْرِ.'},
  'khalaq:al':{fr:'Un verbe ne reçoit jamais أَلْ.', ar:'الْفِعْلُ لَا يَقْبَلُ أَلْ.'},
  'min:jarr':{fr:'Deux particules à la suite ne forment pas un groupe : فِي attend un اِسْمٌ après lui.', ar:'حَرْفُ الْجَرِّ لَا يَدْخُلُ عَلَى حَرْفٍ.'}
};
function l1Verdict(w){
  const t = L1.ui.lab.tested[w.id] || {};
  const hits = Object.keys(t).filter(k=>t[k]);
  if (hits.length){
    const m = MARKERS.find(x=>x.id===hits[0]), f = CATS[w.fam];
    return `<div class="verdict win ${f.col}"><span class="big" lang="ar" dir="rtl">${f.ar}</span><p>${T(`${ar(w.base)} accepte ${ar(m.ar)} (${m.fr}). <b>Verdict : ${f.fr.toLowerCase()}.</b>`,`${ar(w.base)} قَبِلَتْ ${ar(m.a)}، <b>فَهِيَ ${f.ar}</b>.`)}</p></div>`;
  }
  const n = Object.keys(t).length;
  if (n === MARKERS.length){
    return `<div class="verdict win harf"><span class="big" lang="ar" dir="rtl">حَرْفٌ</span><p>${T('Aucun des 7 signes n’est accepté. <b>Verdict : c’est une particule.</b>','لَمْ تَقْبَلْ أَيَّ عَلَامَةٍ مِنَ الْعَلَامَاتِ السَّبْعِ، <b>فَهِيَ حَرْفٌ</b>.')}</p></div>`;
  }
  return `<div class="verdict"><p>${T(`Teste des signes sur ${ar(w.base)} (${w.tr}). Dès qu’un signe est accepté, la famille est trouvée.`,`جَرِّبِ الْعَلَامَاتِ عَلَى ${ar(w.base)}. إِذَا قَبِلَتْ عَلَامَةً عَرَفْتَ قِسْمَهَا.`)}${n?`<br><small>${AN(n)} / ${AN(7)} ${T('testés','')}</small>`:''}</p></div>`;
}
L1.renderLab = () => {
  const lab = L1.ui.lab, w = LAB_WORDS[lab.w], t = lab.tested[w.id] || {};
  return `
    <p class="kicker">${T('Étape 3 · Le laboratoire','الْخُطْوَةُ ٣ · الْمُخْتَبَرُ')}</p>
    <h1>${T('Fais passer le test','جَرِّبِ الْعَلَامَاتِ')}</h1>
    <div class="prof">${PROF()}
      <p>${T('Choisis un mot, puis colle-lui un signe. Si le mot l’accepte, il se transforme. Sinon, l’arabe refuse. Tous ces mots sont dans le Coran.',
             'اخْتَرْ كَلِمَةً ثُمَّ أَدْخِلْ عَلَيْهَا عَلَامَةً: إِنْ قَبِلَتْهَا تَغَيَّرَتْ، وَإِلَّا رَفَضَتْهَا الْعَرَبِيَّةُ. كُلُّ هَذِهِ الْكَلِمَاتِ فِي الْقُرْآنِ.')}</p>
    </div>
    <div class="word-pick" role="group">
      ${LAB_WORDS.map((x,i)=>`<button type="button" lang="ar" data-word="${i}" class="${i===lab.w?'on':''}">${x.base}</button>`).join('')}
    </div>
    <div class="lab-tile" id="tile">
      <button class="reset" type="button" data-act="labreset">${T('Remettre','إِعَادَةٌ')}</button>
      <div class="lab-word" id="labWord" lang="ar" dir="rtl">${w.base}</div>
      <div class="lab-msg" id="labMsg">${T(w.tr,'')}</div>
    </div>
    <div class="markers">
      ${MARKERS.map(m=>{ const st = m.id in t ? (t[m.id]?'t-ok':'t-bad') : '';
        return `<button type="button" class="mk ${m.col} ${st}" data-mk="${m.id}"><span class="ar" lang="ar">${m.ar}</span><small>${T(m.fr,m.a)}</small></button>`; }).join('')}
    </div>
    <div id="verdict">${l1Verdict(w)}</div>`;
};
function l1Apply(id){
  const lab = L1.ui.lab, w = LAB_WORDS[lab.w], m = MARKERS.find(x=>x.id===id);
  const ok = !!w.forms[id];
  lab.tested[w.id] = lab.tested[w.id] || {};
  lab.tested[w.id][id] = ok;
  const tile = $('#tile'), word = $('#labWord'), msg = $('#labMsg');
  word.className = 'lab-word'; void word.offsetWidth;
  tile.classList.remove('ok','bad');
  if (ok){
    word.textContent = w.forms[id];
    word.classList.add('morph'); tile.classList.add('ok');
    msg.innerHTML = `<b style="color:var(--ok)">${T('Accepté.','مَقْبُولَةٌ.')}</b> ${L(OK_NOTE[id])}`;
  } else {
    word.textContent = `${m.ar.replace(/ـ/g,'')} + ${w.base}`;
    word.classList.add('strike'); tile.classList.add('bad');
    const bn = BAD_NOTE[w.id+':'+id];
    msg.innerHTML = `<b style="color:var(--bad)">${T('Refusé.','مَرْفُوضَةٌ.')}</b> ${bn ? L(bn) : T(`${w.base} ne peut pas recevoir ce signe.`,`${w.base} لَا تَقْبَلُ هَذِهِ الْعَلَامَةَ.`)}`;
  }
  document.querySelectorAll('.mk').forEach(b=>{
    const k=b.dataset.mk, tt=lab.tested[w.id];
    b.classList.toggle('t-ok', tt[k]===true); b.classList.toggle('t-bad', tt[k]===false);
  });
  $('#verdict').innerHTML = l1Verdict(w);
  saved.lab1 = lab.tested; persist();
}
L1.onClick = e => {
  const act = e.target.closest('[data-act]')?.dataset.act;
  if (act==='labreset'){ const w=LAB_WORDS[L1.ui.lab.w]; const el=$('#labWord'); el.className='lab-word morph'; el.textContent=w.base; $('#labMsg').textContent=T(w.tr,''); $('#tile').classList.remove('ok','bad'); return true; }
  const wp = e.target.closest('[data-word]'); if (wp){ L1.ui.lab.w = +wp.dataset.word; render(); return true; }
  const mk = e.target.closest('[data-mk]'); if (mk){ l1Apply(mk.dataset.mk); return true; }
  return false;
};

/* Versets L1 */
L1.exTitle = {fr:'Analyse les versets', ar:'حَلِّلِ الْآيَاتِ'};
L1.exProf = {fr:'Devine la famille de chaque mot, puis <b>touche-le</b> pour vérifier. Les mots dorés contiennent plusieurs mots collés.',
             ar:'خَمِّنْ قِسْمَ كُلِّ كَلِمَةٍ ثُمَّ <b>الْمِسْهَا</b> لِلتَّحَقُّقِ. الْكَلِمَاتُ الذَّهَبِيَّةُ فِيهَا أَكْثَرُ مِنْ كَلِمَةٍ.'};
L1.verses = [
  {ref:'1:2', tr:'La louange est à Allah, Seigneur des mondes.', words:[
    W('الْحَمْدُ','ism','Il porte أَلْ.','دَخَلَتْ عَلَيْهِ أَلْ.'),
    W('لِلَّهِ','multi','Deux mots : لِـ est une préposition, puis le nom d’Allah, un اِسْمٌ précédé d’un حَرْفُ جَرٍّ.','كَلِمَتَانِ: اللَّامُ حَرْفُ جَرٍّ، وَلَفْظُ الْجَلَالَةِ اسْمٌ مَجْرُورٌ.',[['لِـ','harf'],['اللَّهِ','ism']]),
    W('رَبِّ','ism','On peut lui ajouter أَلْ : الرَّبُّ.','يَقْبَلُ أَلْ: الرَّبُّ.'),
    W('الْعَالَمِينَ','ism','Il porte أَلْ.','دَخَلَتْ عَلَيْهِ أَلْ.')]},
  {ref:'1:5', tr:'C’est Toi que nous adorons, et c’est Toi dont nous implorons le secours.', words:[
    W('إِيَّاكَ','ism','Un pronom (ضَمِيرٌ) remplace un nom : c’est un اِسْمٌ. Tu étudies les pronoms à la leçon 2.','ضَمِيرٌ، وَالضَّمَائِرُ أَسْمَاءٌ، وَسَتَدْرُسُهَا فِي الدَّرْسِ الثَّانِي.'),
    W('نَعْبُدُ','mudari','On peut dire لَمْ نَعْبُدْ : il accepte لَمْ.','يَقْبَلُ لَمْ: لَمْ نَعْبُدْ.'),
    W('وَإِيَّاكَ','multi','وَ est une particule (« et »), إِيَّاكَ un pronom, donc un اِسْمٌ.','الْوَاوُ حَرْفُ عَطْفٍ، وَإِيَّاكَ ضَمِيرٌ (اسْمٌ).',[['وَ','harf'],['إِيَّاكَ','ism']]),
    W('نَسْتَعِينُ','mudari','On peut dire لَمْ نَسْتَعِنْ : il accepte لَمْ.','يَقْبَلُ لَمْ: لَمْ نَسْتَعِنْ.')]},
  {ref:'112:1', tr:'Dis : Il est Allah, Unique.', words:[
    W('قُلْ','amr','On peut dire قُولِي, et le verbe ordonne : c’est un أَمْرٌ.','يَقْبَلُ يَاءَ الْمُخَاطَبَةِ: قُولِي، مَعَ الطَّلَبِ.'),
    W('هُوَ','ism','Un pronom (« Il ») : les pronoms sont des noms.','ضَمِيرٌ مُنْفَصِلٌ، وَهُوَ اسْمٌ.'),
    W('اللَّهُ','ism','Le nom d’Allah. Il reçoit un حَرْفُ جَرٍّ ailleurs : لِلَّهِ (1:2).','لَفْظُ الْجَلَالَةِ، وَيَدْخُلُ عَلَيْهِ حَرْفُ الْجَرِّ: لِلَّهِ.'),
    W('أَحَدٌ','ism','Le tanwîn ـٌ à la fin.','آخِرُهُ تَنْوِينٌ.')]},
  {ref:'112:3', tr:'Il n’a jamais engendré, et n’a pas été engendré.', words:[
    W('لَمْ','harf','Une particule de négation : elle ne reçoit aucun signe.','حَرْفُ نَفْيٍ لَا يَقْبَلُ أَيَّ عَلَامَةٍ.'),
    W('يَلِدْ','mudari','Il est précédé de لَمْ, et sa fin est en soukoun.','دَخَلَتْ عَلَيْهِ لَمْ فَسَكَنَ آخِرُهُ.'),
    W('وَلَمْ','multi','Deux particules collées : وَ puis لَمْ.','حَرْفَانِ: الْوَاوُ وَلَمْ.',[['وَ','harf'],['لَمْ','harf']]),
    W('يُولَدْ','mudari','Lui aussi vient après لَمْ.','دَخَلَتْ عَلَيْهِ لَمْ.')]},
  {ref:'96:1', tr:'Lis, au nom de ton Seigneur qui a créé.', words:[
    W('اقْرَأْ','amr','On peut dire اقْرَئِي, et le verbe ordonne.','يَقْبَلُ يَاءَ الْمُخَاطَبَةِ: اقْرَئِي، مَعَ الطَّلَبِ.'),
    W('بِاسْمِ','multi','بِـ est une préposition ; اسْمِ est un nom qui la suit.','الْبَاءُ حَرْفُ جَرٍّ، وَاسْمِ اسْمٌ مَجْرُورٌ.',[['بِـ','harf'],['اسْمِ','ism']]),
    W('رَبِّكَ','multi','رَبِّ est un nom ; ـكَ (« ton ») est un pronom, donc un nom aussi.','رَبِّ اسْمٌ، وَالْكَافُ ضَمِيرٌ (اسْمٌ).',[['رَبِّ','ism'],['ـكَ','ism']]),
    W('الَّذِي','ism','Un nom relatif (« qui ») : il fait partie des noms. Tu le verras en leçon 2.','اسْمٌ مَوْصُولٌ، وَسَتَدْرُسُهُ فِي الدَّرْسِ الثَّانِي.'),
    W('خَلَقَ','madi','On peut dire خَلَقَتْ : il accepte le تْ sâkina.','يَقْبَلُ تَاءَ التَّأْنِيثِ السَّاكِنَةَ: خَلَقَتْ.')]},
  {ref:'81:1', tr:'Quand le soleil sera enroulé,', words:[
    W('إِذَا','ism','Surprise : إِذَا (« quand ») est un nom de temps (ظَرْفُ زَمَانٍ), pas une particule. Le livre le range parmi les noms invariables.','إِذَا ظَرْفُ زَمَانٍ، وَهُوَ اسْمٌ لَا حَرْفٌ، وَقَدْ ذَكَرَهُ الْمُصَنِّفُ فِي الْأَسْمَاءِ الْمَبْنِيَّةِ.'),
    W('الشَّمْسُ','ism','Il porte أَلْ.','دَخَلَتْ عَلَيْهِ أَلْ.'),
    W('كُوِّرَتْ','madi','Il se termine par le تْ sâkina.','آخِرُهُ تَاءُ التَّأْنِيثِ السَّاكِنَةُ.')]},
  {ref:'19:26', tr:'Mange donc, bois, et que ton œil se réjouisse. (début du verset)', words:[
    W('فَكُلِي','multi','فَ est une particule ; كُلِي (« mange ! ») porte le ي de l’interlocutrice et ordonne : أَمْرٌ.','الْفَاءُ حَرْفٌ، وَكُلِي فِعْلُ أَمْرٍ فِيهِ يَاءُ الْمُخَاطَبَةِ.',[['فَـ','harf'],['كُلِي','amr']]),
    W('وَاشْرَبِي','multi','وَ est une particule ; اشْرَبِي (« bois ! ») est un أَمْرٌ.','الْوَاوُ حَرْفٌ، وَاشْرَبِي فِعْلُ أَمْرٍ.',[['وَ','harf'],['اشْرَبِي','amr']]),
    W('وَقَرِّي','multi','وَ est une particule ; قَرِّي est un أَمْرٌ (même signe).','الْوَاوُ حَرْفٌ، وَقَرِّي فِعْلُ أَمْرٍ.',[['وَ','harf'],['قَرِّي','amr']]),
    W('عَيْنًا','ism','Le tanwîn ـً à la fin.','آخِرُهُ تَنْوِينٌ.')]},
  {ref:'11:44', tr:'Ô terre, absorbe ton eau ! (extrait)', words:[
    W('يَا','harf','La particule d’appel : elle ne reçoit aucun signe.','حَرْفُ نِدَاءٍ.'),
    W('أَرْضُ','ism','Il est appelé par يَا : seul un nom peut l’être.','دَخَلَ عَلَيْهِ النِّدَاءُ.'),
    W('ابْلَعِي','amr','Il porte le ي de l’interlocutrice et ordonne.','فِيهِ يَاءُ الْمُخَاطَبَةِ مَعَ الطَّلَبِ.'),
    W('مَاءَكِ','multi','مَاءَ est un nom (le verset dit ensuite وَغِيضَ الْمَاءُ, avec أَلْ) ; ـكِ (« ton ») est un pronom.','مَاءَ اسْمٌ (وَفِي الْآيَةِ: الْمَاءُ)، وَالْكَافُ ضَمِيرٌ.',[['مَاءَ','ism'],['ـكِ','ism']])]},
  {ref:'97:3', tr:'La nuit du Destin est meilleure que mille mois.', words:[
    W('لَيْلَةُ','ism','On peut dire لَيْلَةٌ (tanwîn), et au verset 1 : فِي لَيْلَةِ.','يَقْبَلُ التَّنْوِينَ، وَفِي الْآيَةِ الْأُولَى: فِي لَيْلَةِ.'),
    W('الْقَدْرِ','ism','Il porte أَلْ.','دَخَلَتْ عَلَيْهِ أَلْ.'),
    W('خَيْرٌ','ism','Le tanwîn ـٌ.','آخِرُهُ تَنْوِينٌ.'),
    W('مِنْ','harf','Une préposition : elle ne reçoit aucun signe.','حَرْفُ جَرٍّ.'),
    W('أَلْفِ','ism','Il vient après la préposition مِنْ.','دَخَلَ عَلَيْهِ حَرْفُ الْجَرِّ.'),
    W('شَهْرٍ','ism','Le tanwîn ـٍ.','آخِرُهُ تَنْوِينٌ.')]},
  {ref:'94:1', tr:'N’avons-Nous pas ouvert pour toi ta poitrine ?', words:[
    W('أَلَمْ','multi','Deux particules : أَ (interrogation) puis لَمْ.','حَرْفَانِ: هَمْزَةُ الِاسْتِفْهَامِ وَلَمْ.',[['أَ','harf'],['لَمْ','harf']]),
    W('نَشْرَحْ','mudari','Il vient après لَمْ, sa fin est en soukoun.','دَخَلَتْ عَلَيْهِ لَمْ.'),
    W('لَكَ','multi','لَـ est une préposition ; ـكَ (« toi ») est un pronom.','اللَّامُ حَرْفُ جَرٍّ، وَالْكَافُ ضَمِيرٌ.',[['لَـ','harf'],['ـكَ','ism']]),
    W('صَدْرَكَ','multi','صَدْرَ est un nom (الصَّدْرُ) ; ـكَ est un pronom.','صَدْرَ اسْمٌ، وَالْكَافُ ضَمِيرٌ.',[['صَدْرَ','ism'],['ـكَ','ism']])]},
  {ref:'103:2', tr:'L’homme est certes en perdition.', words:[
    W('إِنَّ','harf','Une particule d’insistance : aucun signe.','حَرْفُ تَوْكِيدٍ.'),
    W('الْإِنْسَانَ','ism','Il porte أَلْ.','دَخَلَتْ عَلَيْهِ أَلْ.'),
    W('لَفِي','multi','Deux particules : لَـ (insistance) puis فِي.','حَرْفَانِ: اللَّامُ ثُمَّ فِي.',[['لَـ','harf'],['فِي','harf']]),
    W('خُسْرٍ','ism','Le tanwîn ـٍ, et il suit la préposition فِي.','آخِرُهُ تَنْوِينٌ، وَسَبَقَهُ حَرْفُ جَرٍّ.')]}
];

/* Exercices L1 */
const C1 = (ref,pre,hl,post,a,fr,arr) => ({k:'choice',set:'fam',ref,pre,hl,post,a,why:{fr,ar:arr}});
L1.Q = [
  C1('112:1','قُلْ هُوَ اللَّهُ ','أَحَدٌ','','ism','Le tanwîn ـٌ à la fin : signe du اِسْمٌ.','آخِرُهُ تَنْوِينٌ، وَهُوَ مِنْ عَلَامَاتِ الِاسْمِ.'),
  C1('112:3','لَمْ ','يَلِدْ',' وَلَمْ يُولَدْ','mudari','Il est précédé de لَمْ : c’est un مُضَارِعٌ.','دَخَلَتْ عَلَيْهِ لَمْ، فَهُوَ مُضَارِعٌ.'),
  C1('96:1','اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي ','خَلَقَ','','madi','On peut dire خَلَقَتْ : il accepte le تْ sâkina.','يَقْبَلُ تَاءَ التَّأْنِيثِ: خَلَقَتْ.'),
  C1('96:1','','اقْرَأْ',' بِاسْمِ رَبِّكَ الَّذِي خَلَقَ','amr','On peut dire اقْرَئِي, et le verbe ordonne.','يَقْبَلُ يَاءَ الْمُخَاطَبَةِ مَعَ الطَّلَبِ: اقْرَئِي.'),
  C1('81:2','وَإِذَا النُّجُومُ ','انْكَدَرَتْ','','madi','Il se termine par le تْ sâkina.','آخِرُهُ تَاءُ التَّأْنِيثِ السَّاكِنَةُ.'),
  C1('19:26','فَكُلِي وَ','اشْرَبِي',' وَقَرِّي عَيْنًا','amr','Il porte le ي de l’interlocutrice et ordonne.','فِيهِ يَاءُ الْمُخَاطَبَةِ مَعَ الطَّلَبِ.'),
  C1('108:1','إِنَّا أَعْطَيْنَاكَ ','الْكَوْثَرَ','','ism','Il porte أَلْ.','دَخَلَتْ عَلَيْهِ أَلْ.'),
  C1('103:2','','إِنَّ',' الْإِنْسَانَ لَفِي خُسْرٍ','harf','Une particule : elle ne reçoit aucun signe.','حَرْفٌ لَا يَقْبَلُ أَيَّ عَلَامَةٍ.'),
  C1('1:5','إِيَّاكَ ','نَعْبُدُ',' وَإِيَّاكَ نَسْتَعِينُ','mudari','On peut dire لَمْ نَعْبُدْ.','يَقْبَلُ لَمْ: لَمْ نَعْبُدْ.'),
  C1('108:2','فَصَلِّ لِرَبِّكَ وَ','انْحَرْ','','amr','On peut dire انْحَرِي, et le verbe ordonne.','يَقْبَلُ يَاءَ الْمُخَاطَبَةِ مَعَ الطَّلَبِ: انْحَرِي.'),
  C1('97:3','لَيْلَةُ الْقَدْرِ خَيْرٌ مِنْ أَلْفِ ','شَهْرٍ','','ism','Le tanwîn ـٍ, et il suit une préposition.','آخِرُهُ تَنْوِينٌ، وَسَبَقَهُ حَرْفُ جَرٍّ.'),
  C1('82:1','إِذَا السَّمَاءُ ','انْفَطَرَتْ','','madi','Il se termine par le تْ sâkina.','آخِرُهُ تَاءُ التَّأْنِيثِ السَّاكِنَةُ.'),
  C1('97:1','إِنَّا أَنْزَلْنَاهُ ','فِي',' لَيْلَةِ الْقَدْرِ','harf','Une préposition : aucun signe.','حَرْفُ جَرٍّ.'),
  C1('2:2','ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ ','هُدًى',' لِلْمُتَّقِينَ','ism','Le tanwîn ـً à la fin.','آخِرُهُ تَنْوِينٌ.'),
  C1('105:1','أَلَمْ ','تَرَ',' كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ','mudari','Il vient après لَمْ. Sa dernière lettre est même tombée (تَرَى → تَرَ) : c’est l’effet du جَزْمٌ.','دَخَلَتْ عَلَيْهِ لَمْ فَحُذِفَ آخِرُهُ: تَرَى ← تَرَ.'),
  C1('113:1','قُلْ ','أَعُوذُ',' بِرَبِّ الْفَلَقِ','mudari','On peut dire لَمْ أَعُذْ.','يَقْبَلُ لَمْ: لَمْ أَعُذْ.'),
  {k:'tap', ref:'112:3', words:['لَمْ','يَلِدْ','وَلَمْ','يُولَدْ'], a:[1,3], q:{fr:'Touche un <b>فِعْلٌ مُضَارِعٌ</b>.', ar:'الْمِسْ فِعْلًا مُضَارِعًا.'}, why:{fr:'يَلِدْ et يُولَدْ viennent tous deux après لَمْ.', ar:'يَلِدْ وَيُولَدْ كِلَاهُمَا بَعْدَ لَمْ.'}},
  {k:'tap', ref:'110:1', words:['إِذَا','جَاءَ','نَصْرُ','اللَّهِ','وَالْفَتْحُ'], a:[1], q:{fr:'Touche le <b>فِعْلٌ مَاضٍ</b>.', ar:'الْمِسِ الْفِعْلَ الْمَاضِيَ.'}, why:{fr:'On peut dire جَاءَتْ. (إِذَا est un nom de temps, pas un verbe.)', ar:'يَقْبَلُ تَاءَ التَّأْنِيثِ: جَاءَتْ.'}},
  {k:'tap', ref:'11:44', words:['يَا','أَرْضُ','ابْلَعِي','مَاءَكِ'], a:[2], q:{fr:'Touche le <b>فِعْلُ أَمْرٍ</b>.', ar:'الْمِسْ فِعْلَ الْأَمْرِ.'}, why:{fr:'ابْلَعِي porte le ي de l’interlocutrice et ordonne.', ar:'ابْلَعِي فِيهِ يَاءُ الْمُخَاطَبَةِ مَعَ الطَّلَبِ.'}},
  {k:'tap', ref:'97:3', words:['لَيْلَةُ','الْقَدْرِ','خَيْرٌ','مِنْ','أَلْفِ','شَهْرٍ'], a:[3], q:{fr:'Touche le <b>حَرْفٌ</b>.', ar:'الْمِسِ الْحَرْفَ.'}, why:{fr:'مِنْ est une préposition. Tous les autres mots sont des noms.', ar:'مِنْ حَرْفُ جَرٍّ، وَالْبَاقِي أَسْمَاءٌ.'}},
  {k:'tap', ref:'105:1', words:['أَلَمْ','تَرَ','كَيْفَ','فَعَلَ','رَبُّكَ'], a:[3], q:{fr:'Touche le <b>فِعْلٌ مَاضٍ</b>.', ar:'الْمِسِ الْفِعْلَ الْمَاضِيَ.'}, why:{fr:'On peut dire فَعَلَتْ. Attention : تَرَ est un مُضَارِعٌ (après لَمْ), et كَيْفَ est un nom interrogatif.', ar:'يَقْبَلُ التَّاءَ: فَعَلَتْ. أَمَّا تَرَ فَمُضَارِعٌ، وَكَيْفَ اسْمُ اسْتِفْهَامٍ.'}},
  {k:'tap', ref:'1:2', words:['الْحَمْدُ','لِلَّهِ','رَبِّ','الْعَالَمِينَ'], a:[0,3], q:{fr:'Touche un mot qui <b>commence</b> par أَلْ.', ar:'الْمِسْ كَلِمَةً تَبْدَأُ بِـ أَلْ.'}, why:{fr:'الْحَمْدُ et الْعَالَمِينَ commencent par أَلْ, signe du اِسْمٌ.', ar:'الْحَمْدُ وَالْعَالَمِينَ تَبْدَآنِ بِـ أَلْ.'}},
  {k:'sign', ref:'11:44', q:{fr:'Dans <span class="ar" lang="ar">يَا أَرْضُ</span>, quel signe prouve que <span class="ar" lang="ar">أَرْضُ</span> est un اِسْمٌ ?', ar:'فِي «يَا أَرْضُ»، مَا الْعَلَامَةُ الَّتِي تَدُلُّ عَلَى أَنَّ «أَرْضُ» اسْمٌ؟'},
    opts:[['يَا','l’appel','النِّدَاءُ'],['ـتْ','tâ’ sâkina','تَاءُ التَّأْنِيثِ'],['لَمْ','la négation','لَمْ'],['ـِي','yâ’ de l’interlocutrice','يَاءُ الْمُخَاطَبَةِ']], a:0,
    why:{fr:'L’appel avec يَا ne se fait que sur un nom.', ar:'النِّدَاءُ لَا يَكُونُ إِلَّا لِلِاسْمِ.'}},
  {k:'sign', ref:'81:1', q:{fr:'Quel signe montre que <span class="ar" lang="ar">كُوِّرَتْ</span> est un فِعْلٌ مَاضٍ ?', ar:'مَا الْعَلَامَةُ الَّتِي تَدُلُّ عَلَى أَنَّ «كُوِّرَتْ» فِعْلٌ مَاضٍ؟'},
    opts:[['التَّنْوِينُ','le tanwîn','التَّنْوِينُ'],['أَلْ','l’article','أَلْ'],['ـتْ','tâ’ finale sâkina','تَاءُ التَّأْنِيثِ السَّاكِنَةُ'],['لَمْ','la négation','لَمْ']], a:2,
    why:{fr:'Le تْ final avec soukoun est le signe du passé.', ar:'تَاءُ التَّأْنِيثِ السَّاكِنَةُ عَلَامَةُ الْمَاضِي.'}},
  {k:'sign', ref:'19:26', q:{fr:'Pourquoi <span class="ar" lang="ar">كُلِي</span> est-il un فِعْلُ أَمْرٍ ?', ar:'لِمَاذَا «كُلِي» فِعْلُ أَمْرٍ؟'},
    opts:[['ـِي + طَلَبٌ','le ي de l’interlocutrice + une demande','يَاءُ الْمُخَاطَبَةِ مَعَ الطَّلَبِ'],['لَمْ','la négation lam','لَمْ'],['أَلْ','l’article','أَلْ'],['التَّنْوِينُ','le tanwîn','التَّنْوِينُ']], a:0,
    why:{fr:'Il faut les deux : le ي de l’interlocutrice et le sens d’ordre.', ar:'لَا بُدَّ مِنَ الْأَمْرَيْنِ: يَاءِ الْمُخَاطَبَةِ وَالدَّلَالَةِ عَلَى الطَّلَبِ.'}},
  {k:'sign', ref:'96:5', q:{fr:'Dans <span class="ar" lang="ar">مَا لَمْ يَعْلَمْ</span>, quel mot prouve que <span class="ar" lang="ar">يَعْلَمْ</span> est un مُضَارِعٌ ?', ar:'فِي «مَا لَمْ يَعْلَمْ»، مَا الَّذِي يَدُلُّ عَلَى أَنَّ «يَعْلَمْ» مُضَارِعٌ؟'},
    opts:[['مَا','le mot مَا','مَا'],['لَمْ','la négation lam','لَمْ'],['ـتْ','tâ’ sâkina','تَاءُ التَّأْنِيثِ'],['يَا','l’appel','النِّدَاءُ']], a:1,
    why:{fr:'لَمْ n’entre que sur le مُضَارِعٌ.', ar:'لَمْ لَا تَدْخُلُ إِلَّا عَلَى الْمُضَارِعِ.'}}
];
L1.ui.quiz = newQuiz(L1.Q.length);
L1.labName = {fr:'Laboratoire', ar:'الْمُخْتَبَرُ'};
if (saved.lab1) L1.ui.lab.tested = saved.lab1;

L1.renderFiche = () => {
  const rows = [
    ['ism',{fr:'Nomme une personne, une chose, un lieu, une idée. Sans temps.',ar:'يَدُلُّ عَلَى مُسَمًّى بِلَا زَمَنٍ.'},'أَلْ · تَنْوِينٌ · يَا · حَرْفُ جَرٍّ','الْكَوْثَرَ · أَحَدٌ · يَا أَرْضُ','108:1 · 112:1 · 11:44'],
    ['madi',{fr:'Événement passé.',ar:'حَدَثٌ فِي الزَّمَنِ الْمَاضِي.'},'ـتْ','كُوِّرَتْ','81:1'],
    ['mudari',{fr:'Événement présent ou futur.',ar:'حَدَثٌ فِي الْحَاضِرِ أَوِ الْمُسْتَقْبَلِ.'},'لَمْ','لَمْ يَلِدْ','112:3'],
    ['amr',{fr:'Ordre, demande.',ar:'طَلَبُ الْفِعْلِ.'},'ـِي + طَلَبٌ','فَكُلِي وَاشْرَبِي','19:26'],
    ['harf',{fr:'Relie les mots ; sens incomplet seul.',ar:'لَا يَظْهَرُ مَعْنَاهُ إِلَّا مَعَ غَيْرِهِ.'},'—','فِي · مِنْ · إِنَّ','97:1 · 97:3 · 103:2']
  ];
  return `
    <p class="kicker">${T('Étape 6 · La fiche','الْخُطْوَةُ ٦ · الْخُلَاصَةُ')}</p>
    <h1>${T('À retenir','خُلَاصَةُ الدَّرْسِ')}</h1>
    <div class="tbl-wrap"><table>
      <thead><tr><th>${T('Famille','الْقِسْمُ')}</th><th>${T('Ce qu’il exprime','مَعْنَاهُ')}</th><th>${T('Signe','الْعَلَامَةُ')}</th><th>${T('Dans le Coran','مِنَ الْقُرْآنِ')}</th></tr></thead>
      <tbody>${rows.map(r=>{ const f=CATS[r[0]];
        return `<tr class="${f.col}"><td class="fam">${ar(f.ar)}</td><td>${L(r[1])}</td><td>${ar(r[2])}</td><td>${ar(r[3])}<small>${AN(r[4])}</small></td></tr>`; }).join('')}</tbody>
    </table></div>
    <div class="memo"><b>${T('La méthode en une phrase','الطَّرِيقَةُ فِي سَطْرٍ')}</b>
      ${T(`Devant un mot inconnu, essaie les signes : ${ar('أَلْ')}, tanwîn, ${ar('يَا')} ou préposition → ${ar('اِسْمٌ')} ; ${ar('ـتْ')} → ${ar('مَاضٍ')} ; ${ar('لَمْ')} → ${ar('مُضَارِعٌ')} ; ${ar('ـِي')} + demande → ${ar('أَمْرٌ')} ; rien → ${ar('حَرْفٌ')}. Et pense à séparer les mots collés.`,
          'جَرِّبِ الْعَلَامَاتِ: أَلْ أَوِ التَّنْوِينُ أَوِ النِّدَاءُ أَوْ حَرْفُ الْجَرِّ ← اسْمٌ، تَاءُ التَّأْنِيثِ ← مَاضٍ، لَمْ ← مُضَارِعٌ، يَاءُ الْمُخَاطَبَةِ مَعَ الطَّلَبِ ← أَمْرٌ، وَإِنْ لَمْ تَقْبَلْ شَيْئًا فَهِيَ حَرْفٌ. وَافْصِلِ الْكَلِمَاتِ الْمُتَّصِلَةَ.')}
    </div>
    ${finishBlock(L1)}
    ${nextBlock(1)}`;
};

registerLesson(L1);
})();
