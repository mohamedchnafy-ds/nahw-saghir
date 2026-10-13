/* lessons/02-nakira-wal-marifa.js
   Leçon 2 — النَّكِرَةُ وَالْمَعْرِفَةُ (livre p. 10 · PDF p. 13)
   Chargé après js/core.js et avant js/app.js. Le contenu reste privé à ce bloc ;
   seule la leçon est enregistrée avec registerLesson(). Voir docs/guide-lecon.md. */
(function(){
/* =====================================================================
   LEÇON 2 — النَّكِرَةُ وَالْمَعْرِفَةُ
   ===================================================================== */
const L2 = { id:'l2', idx:1, title:{fr:'Indéfini et défini', ar:'النَّكِرَةُ وَالْمَعْرِفَةُ'}, titleAr:'النَّكِرَةُ وَالْمَعْرِفَةُ',
  ui:{ sel:'root', ex:{v:0,rev:{},open:{},seen:{0:true}}, det:{w:0, st:{}} } };

L2.ui.open = {r:true}; L2.ui.sel = 'r';
L2.schema = {
  h1:{fr:'La carte : deux sortes de noms', ar:'الْخَرِيطَةُ: الِاسْمُ نَوْعَانِ'},
  prof:{fr:'Tout nom est <b>نَكِرَةٌ</b> (indéfini) ou <b>مَعْرِفَةٌ</b> (défini), et la مَعْرِفَةٌ a <b>six</b> types. Déplie chaque branche jusqu’au bout : les pronoms vont jusqu’à quatre niveaux.',
        ar:'الِاسْمُ <b>نَكِرَةٌ</b> أَوْ <b>مَعْرِفَةٌ</b>، وَالْمَعْرِفَةُ <b>سِتَّةُ</b> أَنْوَاعٍ. افْتَحْ كُلَّ فَرْعٍ إِلَى آخِرِهِ.'}
};
L2.tree = N('الِاسْمُ','le nom','',I('Tout nom est soit indéfini, soit défini.','الِاسْمُ نَكِرَةٌ أَوْ مَعْرِفَةٌ.'),null,[
  N('نَكِرَةٌ','indéfini','nak',I('Tout nom qui accepte أَلْ. Il désigne « un » parmi d’autres.','كُلُّ اسْمٍ يَقْبَلُ أَلْ.'),[['رَسُولًا','73:15'],['هُدًى','2:2'],['خَيْرٌ','97:3']]),
  N('مَعْرِفَةٌ','défini','mar',I('Tout nom qui n’accepte pas أَلْ. Il désigne quelque chose de précis. Six types :','كُلُّ اسْمٍ لَا يَقْبَلُ أَلْ، وَهِيَ سِتَّةُ أَنْوَاعٍ:'),null,[
    N('الضَّمِيرُ','1 · pronom',null,I('Remplace quelqu’un de déjà connu. Deux formes :','يَدُلُّ عَلَى مُعَيَّنٍ، وَهُوَ نَوْعَانِ:'),null,[
      N('مُنْفَصِلٌ','séparé',null,I('Écrit seul. Six pronoms (et leurs variantes نَحْنُ، أَنْتُمْ، هُمْ…) :','يُكْتَبُ مُسْتَقِلًّا، وَهُوَ سِتَّةٌ:'),null,[
        N('لِلرَّفْعِ','sujet',null,null,[['أَنَا',''],['أَنْتَ',''],['هُوَ','112:1']]),
        N('لِلنَّصْبِ','complément',null,null,[['إِيَّايَ',''],['إِيَّاكَ','1:5'],['إِيَّاهُ','']])
      ]),
      N('مُتَّصِلٌ','attaché',null,I('Collé au mot. Neuf pronoms, regroupés en trois mots-clés :','يَتَّصِلُ بِالْكَلِمَةِ، وَهُوَ تِسْعَةٌ:'),null,[
        N('تَوَانِي','sujet (رَفْعٌ)',null,I('ت · ا · و · ن · ي','التَّاءُ، وَالْأَلِفُ، وَالْوَاوُ، وَالنُّونُ، وَالْيَاءُ: لِلرَّفْعِ.'),[['أَنْعَمْتَ','1:7'],['تَقْرَبَا','2:35'],['آمَنُوا','103:3'],['قَطَّعْنَ','12:31'],['كُلِي','19:26']]),
        N('هَيْكَ','نَصْبٌ et جَرٌّ',null,I('ه · ي · ك','الْهَاءُ، وَالْيَاءُ، وَالْكَافُ: لِلنَّصْبِ وَالْجَرِّ.'),[['فِيهِ','2:2'],['صَدْرِي','20:25'],['رَبِّكَ','96:1']]),
        N('نَا','les trois cas',null,I('Sujet, complément ou après une préposition.','لِلرَّفْعِ وَالنَّصْبِ وَالْجَرِّ.'),[['أَعْطَيْنَا','108:1'],['اهْدِنَا','1:6'],['لَنَا','']])
      ])
    ]),
    N('الْعَلَمُ','2 · nom propre',null,I('Le nom propre d’un être unique. Le livre en cite six sortes :','اسْمٌ يُعَيِّنُ مُسَمَّاهُ، مِثْلُ:'),null,[
      N('أَسْمَاءُ اللَّهِ','Allah',null,null,[['اللَّهُ','112:1']]),
      N('الْمَلَائِكَةُ','anges',null,null,[['جِبْرِيلَ','2:97']]),
      N('النَّاسُ','personnes',null,null,[['مُحَمَّدٌ','48:29'],['فِرْعَوْنَ','73:15']]),
      N('الْبُلْدَانُ','pays',null,null,[['مِصْرَ','12:99']]),
      N('الْكَوَاكِبُ','astres',null,null,[['الشِّعْرَىٰ','53:49']]),
      N('الشُّهُورُ','mois',null,null,[['رَمَضَانَ','2:185']])
    ]),
    N('اسْمُ الْإِشَارَةِ','3 · démonstratif',null,I('Montre du doigt quelque chose de précis.','يُشَارُ بِهِ إِلَى مُعَيَّنٍ:'),null,[
      N('لِلْمُفْرَدِ','un',null,null,[['هَٰذَا',''],['هَٰذِهِ','2:35']]),
      N('لِلْمُثَنَّى','deux',null,null,[['هَٰذَانِ',''],['هَاتَانِ','']]),
      N('لِلْجَمْعِ','plusieurs',null,null,[['هَٰؤُلَاءِ','']]),
      N('لِلْمَكَانِ','lieu',null,I('هُنَا « ici » (proche), ثَمَّ « là-bas » (loin).','هُنَا لِلْقَرِيبِ، وَثَمَّ لِلْبَعِيدِ.'),[['هَاهُنَا','5:24'],['ثَمَّ','']])
    ]),
    N('الِاسْمُ الْمَوْصُولُ','4 · relatif',null,I('« Celui qui… » : il a besoin d’une phrase après lui (la صِلَةٌ).','يَحْتَاجُ إِلَى جُمْلَةٍ بَعْدَهُ تُسَمَّى الصِّلَةَ:'),null,[
      N('لِلْمُفْرَدِ','un',null,null,[['الَّذِي','96:1'],['الَّتِي','']]),
      N('لِلْمُثَنَّى','deux',null,null,[['اللَّذَانِ',''],['اللَّتَانِ','']]),
      N('لِلْجَمْعِ','plusieurs',null,null,[['الَّذِينَ','103:3'],['اللَّائِي',''],['اللَّاتِي',''],['اللَّوَاتِي','']])
    ]),
    N('الْمُعَرَّفُ بِأَلْ','5 · défini par أَلْ',null,I('Un nom qui porte أَلْ.','مَا دَخَلَتْ عَلَيْهِ أَلْ:'),[['الْكِتَابُ','2:2'],['الرَّسُولَ','73:16']]),
    N('الْمُضَافُ إِلَى مَعْرِفَةٍ','6 · annexé à un défini',null,I('Un nom collé (annexé) à un nom défini devient défini à son tour.','يَتَعَرَّفُ بِالْإِضَافَةِ إِلَى مَعْرِفَةٍ:'),null,[
      N('إِلَى ضَمِيرٍ','à un pronom',null,null,[['رَبِّكَ','96:1']]),
      N('إِلَى عَلَمٍ','à un nom propre',null,null,[['نَصْرُ اللَّهِ','110:1']]),
      N('إِلَى مُعَرَّفٍ بِأَلْ','à un nom avec أَلْ',null,null,[['رَبِّ الْعَالَمِينَ','1:2']]),
      N('إِلَى نَكِرَةٍ ← نَكِرَةٌ','piège : reste indéfini','nak',I('Annexé à un indéfini, il reste indéfini.','الْمُضَافُ إِلَى نَكِرَةٍ يَبْقَى نَكِرَةً.'),[['أَلْفِ شَهْرٍ','97:3']])
    ])
  ])
]);

L2.prof = [
  () => `${K2()}
    <h1>${T('« Un messager » ou « le messager » ?','«رَسُولٌ» أَمْ «الرَّسُولُ»؟')}</h1>
    <div class="prof">${PROF()}
      <p>${T(`Une ${ar('نَكِرَةٌ')} désigne <b>n’importe lequel</b> d’un groupe : « un messager ». Une ${ar('مَعْرِفَةٌ')} désigne <b>un être précis</b>, que l’on connaît : « le messager ».`,
             'النَّكِرَةُ تَدُلُّ عَلَى <b>غَيْرِ مُعَيَّنٍ</b>: رَسُولٌ، أَيْ أَيُّ رَسُولٍ. وَالْمَعْرِفَةُ تَدُلُّ عَلَى <b>مُعَيَّنٍ</b>: الرَّسُولُ.')}</p>
    </div>
    <div class="spot-stage">
      <div class="ghosts" lang="ar">${[0,1,2].map(i=>`<span class="ghost-w" style="--i:${i}">رَسُولٌ</span>`).join('')}</div>
      <div class="spot-lab">${T(`${ar('نَكِرَةٌ')} : un parmi d’autres, flou`,'نَكِرَةٌ: وَاحِدٌ غَيْرُ مُعَيَّنٍ')}</div>
      <div class="spot-wrap"><div class="spot-w" lang="ar">الرَّسُولُ</div><div class="spot-lab">${T(`${ar('مَعْرِفَةٌ')} : celui-là, précis`,'مَعْرِفَةٌ: وَاحِدٌ مُعَيَّنٌ')}</div></div>
    </div>
    <h2>${T('Le Coran le montre en deux versets','فِي الْقُرْآنِ')}</h2>
    <div class="verse-pair">
      <div class="ln" lang="ar">… إِلَىٰ فِرْعَوْنَ <b style="color:var(--nak)">رَسُولًا</b></div>
      <div class="arrow">${T('↓ le même messager, maintenant connu','↓ الرَّسُولُ نَفْسُهُ، وَقَدْ صَارَ مَعْرُوفًا')}</div>
      <div class="ln" lang="ar">فَعَصَىٰ فِرْعَوْنُ <b style="color:var(--mar)">الرَّسُولَ</b></div>
      <div>${refTag('73:15')} ${refTag('73:16')}</div>
    </div>
    <p style="margin-top:12px">${T('Première mention : on présente « un messager ». Deuxième mention : c’est « le messager » dont on vient de parler.','ذُكِرَ أَوَّلًا نَكِرَةً، ثُمَّ أُعِيدَ مَعْرِفَةً لِأَنَّهُ صَارَ مَعْلُومًا.')}</p>${REPLAY()}`,
  () => `${K2()}
    <h1>${T('Le test de أَلْ','اخْتِبَارُ «أَلْ»')}</h1>
    <div class="prof">${PROF()}
      <p>${T(`La règle du livre est simple : la ${ar('نَكِرَةٌ')} est tout nom qui <b>accepte</b> ${ar('أَلْ')}. La ${ar('مَعْرِفَةٌ')} est tout nom qui <b>ne l’accepte pas</b> : soit il est déjà défini, soit il l’est par nature.`,
             'النَّكِرَةُ: كُلُّ اسْمٍ <b>يَقْبَلُ</b> أَلْ. وَالْمَعْرِفَةُ: كُلُّ اسْمٍ <b>لَا يَقْبَلُ</b> أَلْ.')}</p>
    </div>
    <div class="altest">
      ${[['رَسُولٌ','الرَّسُولُ','nak',1],['شَهْرٌ','الشَّهْرُ','nak',1],['مُحَمَّدٌ','الْمُحَمَّدُ','mar',0],['هُوَ','الْهُوَ','mar',0],['الْكِتَابُ','الْالْكِتَابُ','mar',0]]
        .map((r,i)=>`<div class="alrow ${r[2]}" style="--i:${i}"><span class="w1" lang="ar">${r[0]}</span><span class="op">+ أَلْ ←</span><span class="w2 ${r[3]?'':'no'}" lang="ar">${r[1]}</span><span class="tag">${r[3]?'نَكِرَةٌ':'مَعْرِفَةٌ'}</span></div>`).join('')}
    </div>
    <p style="margin-top:12px">${T(`Les deux premiers acceptent ${ar('أَلْ')} : ce sont des ${ar('نَكِرَاتٌ')}. Les trois derniers refusent : on va voir pourquoi chacun est déjà défini.`,
                                    'الْأَوَّلَانِ قَبِلَا أَلْ فَهُمَا نَكِرَتَانِ، وَالْبَاقِي لَا يَقْبَلُهَا فَهِيَ مَعَارِفُ.')}</p>${REPLAY()}`,
  () => `${K2()}
    <h1>${T(`1. ${ar('الضَّمِيرُ')} séparé`,'١. الضَّمِيرُ الْمُنْفَصِلُ')}</h1>
    <div class="prof">${PROF()}
      <p>${T(`Un ${ar('ضَمِيرٌ')} (pronom) remplace quelqu’un de déjà connu, il est donc toujours ${ar('مَعْرِفَةٌ')}. Le livre retient <b>six</b> pronoms séparés, écrits seuls (avec leurs variantes : ${ar('نَحْنُ')}, ${ar('أَنْتُمْ')}, ${ar('هُمْ')}…).`,
             'الضَّمِيرُ يَدُلُّ عَلَى مُعَيَّنٍ فَهُوَ مَعْرِفَةٌ. وَالضَّمَائِرُ الْمُنْفَصِلَةُ سِتَّةٌ (وَفُرُوعُهَا).')}</p>
    </div>
    <div class="card">
      <div class="pron-grid">
        <div class="h">${T('Trois pour le رَفْعٌ (sujet)','ثَلَاثَةٌ لِلرَّفْعِ')}</div>
        ${[['أَنَا','je'],['أَنْتَ','tu'],['هُوَ','il']].map((x,i)=>`<div class="pron" style="--i:${i}">${x[0]}<small>${x[1]}</small></div>`).join('')}
        <div class="h">${T('Trois pour le نَصْبٌ (complément)','ثَلَاثَةٌ لِلنَّصْبِ')}</div>
        ${[['إِيَّايَ','moi'],['إِيَّاكَ','toi'],['إِيَّاهُ','lui']].map((x,i)=>`<div class="pron" style="--i:${i+3}">${x[0]}<small>${x[1]}</small></div>`).join('')}
      </div>
    </div>
    <div class="note">${T('Dans le Coran :','فِي الْقُرْآنِ:')}
      <div class="quran-row">
        <span class="chip mar">${ar('قُلْ هُوَ اللَّهُ أَحَدٌ')} · ${AN('112:1')}</span>
        <span class="chip mar">${ar('إِيَّاكَ نَعْبُدُ')} · ${AN('1:5')}</span>
      </div>
    </div>`,
  () => `${K2()}
    <h1>${T(`1 bis. ${ar('الضَّمِيرُ')} attaché`,'١. الضَّمِيرُ الْمُتَّصِلُ')}</h1>
    <div class="prof">${PROF()}
      <p>${T(`Les pronoms attachés se collent au mot. Le livre les résume en <b>trois mots faciles à retenir</b> : ${ar('تَوَانِي')}, ${ar('هَيْكَ')} et ${ar('نَا')}. Chaque lettre est un pronom.`,
             'الضَّمَائِرُ الْمُتَّصِلَةُ تِسْعَةٌ، يَجْمَعُهَا: <b>تَوَانِي</b> لِلرَّفْعِ، وَ<b>هَيْكَ</b> لِلنَّصْبِ وَالْجَرِّ، وَ<b>نَا</b> لِلثَّلَاثَةِ.')}</p>
    </div>
    <div class="mn-block">
      <div class="mn-head"><span class="mn-word" lang="ar">تَوَانِي</span><span class="small muted">${T('5 pronoms · رَفْعٌ (sujet)','خَمْسَةٌ لِلرَّفْعِ')}</span></div>
      <div class="mn-tiles">${[['ت','أَنْعَمْتَ','1:7'],['ا','تَقْرَبَا','2:35'],['و','آمَنُوا','103:3'],['ن','قَطَّعْنَ','12:31'],['ي','كُلِي','19:26']]
        .map((x,i)=>`<div class="mn-tile" style="--i:${i}"><span class="L">${x[0]}</span><span class="E">${x[1]}</span><span class="R">${AN(x[2])}</span></div>`).join('')}</div>
    </div>
    <div class="mn-block">
      <div class="mn-head"><span class="mn-word" lang="ar">هَيْكَ</span><span class="small muted">${T('3 pronoms · نَصْبٌ et جَرٌّ','ثَلَاثَةٌ لِلنَّصْبِ وَالْجَرِّ')}</span></div>
      <div class="mn-tiles">${[['ه','فِيهِ','2:2'],['ي','صَدْرِي','20:25'],['ك','رَبِّكَ','96:1']]
        .map((x,i)=>`<div class="mn-tile" style="--i:${i+5}"><span class="L">${x[0]}</span><span class="E">${x[1]}</span><span class="R">${AN(x[2])}</span></div>`).join('')}</div>
    </div>
    <div class="mn-block">
      <div class="mn-head"><span class="mn-word" lang="ar">نَا</span><span class="small muted">${T('1 pronom · les trois cas','وَاحِدٌ لِلرَّفْعِ وَالنَّصْبِ وَالْجَرِّ')}</span></div>
      <div class="mn-tiles">${[['رَفْعٌ','أَعْطَيْنَا','108:1'],['نَصْبٌ','اهْدِنَا','1:6'],['جَرٌّ','لَنَا','']]
        .map((x,i)=>`<div class="mn-tile" style="--i:${i+8}"><span class="L" style="font-size:18px">${x[0]}</span><span class="E">${x[1]}</span><span class="R">${x[2]?AN(x[2]):'&nbsp;'}</span></div>`).join('')}</div>
    </div>
    <p class="small muted">${T(`${ar('أَعْطَيْنَا')} « Nous avons donné » (sujet), ${ar('اهْدِنَا')} « guide-nous » (complément), ${ar('لَنَا')} « pour nous » (après une préposition). Ces trois cas (رَفْعٌ، نَصْبٌ، جَرٌّ) seront expliqués dans les leçons suivantes.`,
                                 'أَعْطَيْنَا: «نَا» فِي مَحَلِّ رَفْعٍ، وَاهْدِنَا: فِي مَحَلِّ نَصْبٍ، وَلَنَا: فِي مَحَلِّ جَرٍّ. وَسَتَأْتِي هَذِهِ الْأَحْكَامُ.')}</p>`,
  () => `${K2()}
    <h1>${T(`2. ${ar('الْعَلَمُ')} : le nom propre`,'٢. الْعَلَمُ')}</h1>
    <div class="prof">${PROF()}
      <p>${T(`Un ${ar('عَلَمٌ')} est le nom propre d’un être unique : il est défini par nature. Le livre cite les noms d’Allah, des anges, des gens, des pays, des astres et des mois. Le Coran en donne de chaque sorte :`,
             'الْعَلَمُ اسْمٌ يُعَيِّنُ مُسَمَّاهُ، كَأَسْمَاءِ اللَّهِ وَالْمَلَائِكَةِ وَالنَّاسِ وَالْبُلْدَانِ وَالْكَوَاكِبِ وَالشُّهُورِ. وَمِنْ أَمْثِلَتِهِ فِي الْقُرْآنِ:')}</p>
    </div>
    <div class="grid3">
      ${[[['Allah','اسْمُ اللَّهِ'],'اللَّهُ','112:1'],[['Ange','مَلَكٌ'],'جِبْرِيلَ','2:97'],[['Personne','إِنْسَانٌ'],'مُحَمَّدٌ','48:29'],[['Pays','بَلَدٌ'],'مِصْرَ','12:99'],[['Astre','نَجْمٌ'],'الشِّعْرَىٰ','53:49'],[['Mois','شَهْرٌ'],'رَمَضَانَ','2:185']]
        .map((x,i)=>`<div class="ex-card mar" style="--i:${i}"><div class="lab">${L({fr:x[0][0],ar:x[0][1]})}</div>${ar(x[1])}<div class="tr">${AN(x[2])}</div></div>`).join('')}
    </div>
    <div class="note">${T(`${ar('الشِّعْرَىٰ')} (Sirius) commence par ${ar('ال')}, mais ce ${ar('ال')} fait partie du nom : c’est un ${ar('عَلَمٌ')}, comme le confirme le Quranic Arabic Corpus.`,
                           'الشِّعْرَى: «أَلْ» فِيهَا جُزْءٌ مِنَ الِاسْمِ، وَهِيَ عَلَمٌ عَلَى نَجْمٍ.')}</div>`,
  () => `${K2()}
    <h1>${T(`3. ${ar('اسْمُ الْإِشَارَةِ')} : le démonstratif`,'٣. اسْمُ الْإِشَارَةِ')}</h1>
    <div class="prof">${PROF()}
      <p>${T('On montre du doigt quelque chose de précis : il est donc défini. Voici la liste du livre, selon le genre et le nombre :','نُشِيرُ بِهِ إِلَى شَيْءٍ مُعَيَّنٍ فَهُوَ مَعْرِفَةٌ. وَهَذِهِ أَسْمَاءُ الْإِشَارَةِ:')}</p>
    </div>
    <div class="card">
      <div class="dem">
        <div class="h"></div><div class="h">${T('masculin','مُذَكَّرٌ')}</div><div class="h">${T('féminin','مُؤَنَّثٌ')}</div>
        <div class="h">${T('un','مُفْرَدٌ')}</div><div class="c" style="--i:0"><span class="pointer"></span>هَٰذَا</div><div class="c" style="--i:1">هَٰذِهِ</div>
        <div class="h">${T('deux','مُثَنًّى')}</div><div class="c" style="--i:2">هَٰذَانِ</div><div class="c" style="--i:3">هَاتَانِ</div>
        <div class="h">${T('plusieurs','جَمْعٌ')}</div><div class="c" style="--i:4;grid-column:span 2">هَٰؤُلَاءِ</div>
        <div class="h">${T('lieu','مَكَانٌ')}</div><div class="c" style="--i:5">هُنَا<small class="muted" style="display:block;font-size:12px">${T('ici','قَرِيبٌ')}</small></div><div class="c" style="--i:6">ثَمَّ<small class="muted" style="display:block;font-size:12px">${T('là-bas','بَعِيدٌ')}</small></div>
      </div>
    </div>
    <div class="note">${T('Dans le Coran :','فِي الْقُرْآنِ:')}
      <div class="quran-row">
        <span class="chip mar">${ar('وَلَا تَقْرَبَا هَٰذِهِ الشَّجَرَةَ')} · ${AN('2:35')}</span>
        <span class="chip mar">${ar('إِنَّا هَاهُنَا قَاعِدُونَ')} · ${AN('5:24')}</span>
        <span class="chip mar">${ar('ذَٰلِكَ الْكِتَابُ')} · ${AN('2:2')}</span>
      </div>
      <p class="small" style="margin:8px 0 0">${T(`Dans le Coran, ${ar('هَٰذَا')} s’écrit avec un petit alif (ٰ). ${ar('ذَٰلِكَ')} (« cela », pour le lointain) est aussi un démonstratif, même s’il n’est pas dans la liste courte du livre.`,
                                                  'تُكْتَبُ «هَذَا» فِي الْمُصْحَفِ بِأَلِفٍ صَغِيرَةٍ، وَ«ذَلِكَ» اسْمُ إِشَارَةٍ لِلْبَعِيدِ.')}</p>
    </div>`,
  () => `${K2()}
    <h1>${T(`4. ${ar('الِاسْمُ الْمَوْصُولُ')} : le relatif`,'٤. الِاسْمُ الْمَوْصُولُ')}</h1>
    <div class="prof">${PROF()}
      <p>${T(`${ar('الَّذِي')} veut dire « celui qui ». Seul, il est incomplet : il a besoin d’une phrase après lui (la ${ar('صِلَةٌ')}), et c’est elle qui le rend précis.`,
             'الِاسْمُ الْمَوْصُولُ لَا يَتِمُّ مَعْنَاهُ إِلَّا بِجُمْلَةٍ بَعْدَهُ تُسَمَّى <b>الصِّلَةَ</b>، وَبِهَا يَتَعَيَّنُ.')}</p>
    </div>
    <div class="harf-demo" style="--c:var(--mar);--c2:var(--fiil)">
      <div class="hd-row">
        <span class="hd-w hd-fi" lang="ar">الَّذِي<span class="q">?</span></span>
        <span class="hd-w hd-noun" lang="ar">خَلَقَ</span>
      </div>
      <div class="hd-link"></div>
      <div class="hd-tr">${T('« celui… » qui ? « celui qui a créé ».','الَّذِي... مَنْ؟ الَّذِي خَلَقَ.')} ${refTag('96:1')}</div>
    </div>
    <div class="card" style="margin-top:12px">
      <div class="pron-grid">
        <div class="h">${T('La liste du livre','أَسْمَاءُ الْمَوْصُولِ فِي الْكِتَابِ')}</div>
        ${[['الَّذِي','celui qui'],['الَّتِي','celle qui'],['اللَّذَانِ','les deux qui'],['اللَّتَانِ','les deux qui (f.)'],['الَّذِينَ','ceux qui'],['اللَّائِي','celles qui'],['اللَّاتِي','celles qui'],['اللَّوَاتِي','celles qui']]
          .map((x,i)=>`<div class="pron" style="--i:${i};font-size:24px">${x[0]}<small>${x[1]}</small></div>`).join('')}
      </div>
    </div>
    <div class="note">${T('Dans le Coran :','فِي الْقُرْآنِ:')}
      <div class="quran-row"><span class="chip mar">${ar('إِلَّا الَّذِينَ آمَنُوا')} · ${AN('103:3')}</span><span class="chip mar">${ar('شَهْرُ رَمَضَانَ الَّذِي أُنْزِلَ فِيهِ الْقُرْآنُ')} · ${AN('2:185')}</span></div>
    </div>${REPLAY()}`,
  () => `${K2()}
    <h1>${T(`5 et 6. ${ar('أَلْ')} et l’annexion`,'٥ وَ٦. الْمُعَرَّفُ بِأَلْ وَالْمُضَافُ')}</h1>
    <div class="prof">${PROF()}
      <p>${T(`Une ${ar('نَكِرَةٌ')} peut <b>devenir</b> ${ar('مَعْرِفَةٌ')} de deux façons : en recevant ${ar('أَلْ')}, ou en se collant (annexion, ${ar('إِضَافَةٌ')}) à un nom déjà défini.`,
             'تَصِيرُ النَّكِرَةُ مَعْرِفَةً بِطَرِيقَيْنِ: بِدُخُولِ أَلْ عَلَيْهَا، أَوْ بِإِضَافَتِهَا إِلَى مَعْرِفَةٍ.')}</p>
    </div>
    <div class="annex">
      ${[[['رَبٌّ'],['الرَّبُّ'],'al',{fr:'avec أَلْ',ar:'بِأَلْ'}],
         [['رَبُّ','الْعَالَمِينَ'],null,'mudaf',{fr:'annexé à un nom avec أَلْ',ar:'مُضَافٌ إِلَى مُعَرَّفٍ بِأَلْ'},'1:2'],
         [['رَبِّـ','كَ'],null,'mudaf',{fr:'annexé à un pronom',ar:'مُضَافٌ إِلَى ضَمِيرٍ'},'96:1'],
         [['نَصْرُ','اللَّهِ'],null,'mudaf',{fr:'annexé à un nom propre',ar:'مُضَافٌ إِلَى عَلَمٍ'},'110:1'],
         [['أَلْفِ','شَهْرٍ'],null,'nak',{fr:'annexé à une نَكِرَةٌ → reste نَكِرَةٌ',ar:'مُضَافٌ إِلَى نَكِرَةٍ فَهُوَ نَكِرَةٌ'},'97:3']]
        .map((r,i)=>`<div class="anrow ${r[2]==='nak'?'nak':'mar'}" style="--i:${i}">
          ${r[1] ? `<span class="a" style="color:var(--nak)">${r[0][0]}</span><span class="muted">+ أَلْ ←</span><span class="a join" style="color:var(--mar)">${r[1][0]}</span>`
                 : `<span class="a" style="color:var(--c)">${r[0][0]}</span><span class="muted">+</span><span class="a join">${r[0][1]}</span>`}
          <span class="res">${L(r[3])}</span>${r[4]?refTag(r[4]):''}</div>`).join('')}
    </div>
    <div class="note">${T(`Piège : ${ar('أَلْفِ شَهْرٍ')} (97:3). ${ar('أَلْفِ')} est annexé, mais à ${ar('شَهْرٍ')}, une ${ar('نَكِرَةٌ')} : il reste donc ${ar('نَكِرَةٌ')}. Le livre dit bien « annexé <b>à une مَعْرِفَةٌ</b> ».`,
                           'تَنْبِيهٌ: «أَلْفِ شَهْرٍ» مُضَافٌ إِلَى نَكِرَةٍ فَبَقِيَ نَكِرَةً، وَلِذَلِكَ قَالَ الْمُصَنِّفُ: الْمُضَافُ <b>إِلَى مَعْرِفَةٍ</b>.')}</div>${REPLAY()}`
];

/* Détecteur L2 */
const DET = [
  {id:'rasul', t:'رَسُولٌ', alf:'الرَّسُولُ', c:'nak', ref:'73:16', ok:{fr:'Il accepte أَلْ : c’est une نَكِرَةٌ. Le Coran dit justement الرَّسُولَ (73:16) pour reparler du messager déjà annoncé.', ar:'قَبِلَ أَلْ فَهُوَ نَكِرَةٌ، وَفِي الْقُرْآنِ: فَعَصَىٰ فِرْعَوْنُ الرَّسُولَ.'}},
  {id:'shahr', t:'شَهْرٌ', alf:'الشَّهْرُ', c:'nak', ref:'97:3', ok:{fr:'Il accepte أَلْ : c’est une نَكِرَةٌ, comme dans أَلْفِ شَهْرٍ (97:3).', ar:'قَبِلَ أَلْ فَهُوَ نَكِرَةٌ، كَمَا فِي: أَلْفِ شَهْرٍ.'}},
  {id:'huwa', t:'هُوَ', c:'damir', ref:'112:1'},
  {id:'muhammad', t:'مُحَمَّدٌ', c:'alam', ref:'48:29'},
  {id:'hadhihi', t:'هَٰذِهِ', c:'ishara', ref:'2:35'},
  {id:'alladhina', t:'الَّذِينَ', c:'mawsul', ref:'103:3'},
  {id:'kitab', t:'الْكِتَابُ', c:'al', ref:'2:2'},
  {id:'rabbuka', t:'رَبُّكَ', c:'mudaf', ref:'105:1'},
  {id:'nasr', t:'نَصْرُ اللَّهِ', c:'mudaf', ref:'110:1'}
];
const DET_REFUSE = {
  damir:{fr:'Un pronom ne prend jamais أَلْ.', ar:'الضَّمِيرُ لَا تَدْخُلُ عَلَيْهِ أَلْ.'},
  alam:{fr:'On ne dit pas الْمُحَمَّدُ : un nom propre est déjà précis.', ar:'لَا يُقَالُ: الْمُحَمَّدُ، فَالْعَلَمُ مُعَيَّنٌ بِنَفْسِهِ.'},
  ishara:{fr:'On ne dit pas الْهَٰذِهِ : montrer du doigt suffit à préciser.', ar:'لَا يُقَالُ: الْهَذِهِ.'},
  mawsul:{fr:'الَّذِينَ s’écrit déjà avec ال, mais c’est une forme figée : on ne peut rien lui ajouter.', ar:'الَّذِينَ لَا تَدْخُلُ عَلَيْهِ أَلْ أُخْرَى.'},
  al:{fr:'Il a déjà أَلْ : impossible d’en ajouter un second.', ar:'فِيهِ أَلْ، فَلَا تَدْخُلُ عَلَيْهِ أُخْرَى.'},
  mudaf:{fr:'On ne dit pas الرَّبُّكَ : l’annexion le rend déjà défini.', ar:'لَا يُقَالُ: الرَّبُّكَ، فَالْإِضَافَةُ عَرَّفَتْهُ.'}
};
const DET_WHY = {
  damir:{fr:'Un pronom remplace quelqu’un de déjà connu : il est toujours défini.', ar:'الضَّمِيرُ يَدُلُّ عَلَى مُعَيَّنٍ.'},
  alam:{fr:'Un nom propre désigne une seule personne : défini par nature.', ar:'الْعَلَمُ يُعَيِّنُ مُسَمَّاهُ.'},
  ishara:{fr:'On désigne quelque chose de précis : هَٰذِهِ الشَّجَرَةَ, « cet arbre-ci » (2:35).', ar:'يُشَارُ بِهِ إِلَى مُعَيَّنٍ: هَٰذِهِ الشَّجَرَةَ.'},
  mawsul:{fr:'La phrase qui suit le précise : الَّذِينَ آمَنُوا, « ceux qui ont cru » (103:3).', ar:'تُعَيِّنُهُ الصِّلَةُ: الَّذِينَ آمَنُوا.'},
  al:{fr:'C’est أَلْ qui le rend défini : الْكِتَابُ, « le Livre » (2:2).', ar:'عُرِّفَ بِأَلْ: الْكِتَابُ.'},
  mudaf:{fr:'Il est annexé à un défini (un pronom ou un nom propre), donc il devient défini.', ar:'أُضِيفَ إِلَى مَعْرِفَةٍ فَصَارَ مَعْرِفَةً.'}
};
L2.renderLab = () => {
  const d = L2.ui.det, w = DET[d.w], st = d.st[w.id] || {};
  const tried = !!st.tested, isNak = w.c==='nak';
  let tileCls = '', word = w.t, msg = T('Première question : ce nom accepte-t-il أَلْ ?','السُّؤَالُ الْأَوَّلُ: هَلْ يَقْبَلُ هَذَا الِاسْمُ أَلْ؟'), wordCls = '';
  if (tried && isNak){ tileCls='ok'; word=w.alf; wordCls='morph'; msg=`<b style="color:var(--ok)">${T('Accepté.','مَقْبُولَةٌ.')}</b> ${L(w.ok)}`; }
  if (tried && !isNak){ tileCls='bad'; word=`أَلْ + ${w.t}`; wordCls='strike'; msg=`<b style="color:var(--bad)">${T('Refusé.','مَرْفُوضَةٌ.')}</b> ${T('Donc c’est une مَعْرِفَةٌ. Mais de quel type ?','إِذَنْ هُوَ مَعْرِفَةٌ، فَمِنْ أَيِّ نَوْعٍ؟')}`; }
  if (st.solved && !isNak){ tileCls='marf'; word=w.t; wordCls='morph'; }
  let bottom = '';
  if (!tried){
    bottom = `<div class="markers"><button type="button" class="mk wide" data-dal="1"><span class="ar" lang="ar">+ أَلْ</span><small>${T('Ajouter أَلْ','أَدْخِلْ أَلْ')}</small></button></div>`;
  } else if (isNak){
    bottom = `<div class="verdict win nak"><span class="big" lang="ar" dir="rtl">نَكِرَةٌ</span><p>${T('Il accepte أَلْ. <b>Verdict : indéfini.</b>','قَبِلَ أَلْ، <b>فَهُوَ نَكِرَةٌ</b>.')}</p></div>`;
  } else {
    bottom = `<p class="step-label">${T('Deuxième question : quel type de مَعْرِفَةٌ ?','السُّؤَالُ الثَّانِي: مَا نَوْعُ الْمَعْرِفَةِ؟')}</p>
      <div class="markers three">${SETS.type.map(k=>{ const c=CATS[k], s = st.picks && st.picks[k];
        return `<button type="button" class="mk mar ${s===true?'t-ok':s===false?'t-bad':''}" data-dt="${k}" ${st.solved?'disabled':''}><span class="ar" lang="ar">${c.sar}</span>${T(`<small>${c.sfr}</small>`,'')}</button>`; }).join('')}</div>
      ${st.solved ? `<div class="verdict win mar"><span class="big" lang="ar" dir="rtl">${CATS[w.c].sar}</span><p>${L(DET_WHY[w.c])}</p></div>` : (st.lastBad ? `<div class="verdict"><p>${T('Pas ce type. Relis l’indice : ','لَيْسَ هَذَا النَّوْعَ. انْتَبِهْ: ')}${L(DET_REFUSE[w.c])}</p></div>` : '')}`;
  }
  const found = Object.keys(d.st).filter(k=>d.st[k].tested && (DET.find(x=>x.id===k).c==='nak' || d.st[k].solved)).length;
  return `
    <p class="kicker">${T('Étape 3 · Le détecteur','الْخُطْوَةُ ٣ · الْكَاشِفُ')}</p>
    <h1>${T('Défini ou indéfini ?','مَعْرِفَةٌ أَمْ نَكِرَةٌ؟')}</h1>
    <div class="prof">${PROF()}
      <p>${T('Deux questions, comme un vrai grammairien : <b>1.</b> le nom accepte-t-il أَلْ ? <b>2.</b> s’il refuse, quel est son type parmi les six ? Tous les mots viennent du Coran.',
             'سُؤَالَانِ: <b>١.</b> هَلْ يَقْبَلُ الِاسْمُ أَلْ؟ <b>٢.</b> إِنْ لَمْ يَقْبَلْهَا فَمَا نَوْعُ الْمَعْرِفَةِ؟ وَكُلُّ الْكَلِمَاتِ مِنَ الْقُرْآنِ.')}</p>
    </div>
    <div class="word-pick" role="group">
      ${DET.map((x,i)=>{ const s=d.st[x.id]||{}; const f = s.tested && (x.c==='nak' || s.solved);
        return `<button type="button" lang="ar" data-dw="${i}" class="${i===d.w?'on':''} ${f?'found':''}">${x.t}</button>`; }).join('')}
    </div>
    <div class="lab-tile ${tileCls}" id="tile">
      <button class="reset" type="button" data-act="detreset">${T('Recommencer ce mot','إِعَادَةٌ')}</button>
      <div class="lab-word ${wordCls}" lang="ar" dir="rtl">${word}</div>
      <div class="lab-msg">${msg}</div>
      <div style="margin-top:6px">${refTag(w.ref)}</div>
    </div>
    ${bottom}
    <p class="step-label">${T(`${found} / ${DET.length} mots élucidés`,`${AN(found)} / ${AN(DET.length)}`)}</p>`;
};
L2.onClick = e => {
  const d = L2.ui.det;
  const act = e.target.closest('[data-act]')?.dataset.act;
  const w = DET[d.w];
  if (act==='detreset'){ delete d.st[w.id]; saved.det2 = d.st; persist(); render(); return true; }
  const dw = e.target.closest('[data-dw]'); if (dw){ d.w = +dw.dataset.dw; render(); return true; }
  if (e.target.closest('[data-dal]')){ d.st[w.id] = {tested:true, picks:{}}; saved.det2 = d.st; persist(); render(); return true; }
  const dt = e.target.closest('[data-dt]');
  if (dt){ const st = d.st[w.id]; const k = dt.dataset.dt; const ok = k===w.c;
    st.picks[k] = ok; st.lastBad = !ok; if (ok) st.solved = true; saved.det2 = d.st; persist(); render(); return true; }
  return false;
};

/* Versets L2 */
L2.exTitle = {fr:'Trouve les noms définis', ar:'مَيِّزِ الْمَعَارِفَ مِنَ النَّكِرَاتِ'};
L2.exProf = {fr:'Pour chaque <b>nom</b>, devine : نَكِرَةٌ ou مَعْرِفَةٌ ? Et si c’est une مَعْرِفَةٌ, de quel type ? Touche pour vérifier. Les verbes et particules apparaissent en gris.',
             ar:'لِكُلِّ اسْمٍ: هَلْ هُوَ نَكِرَةٌ أَمْ مَعْرِفَةٌ؟ وَمَا نَوْعُ الْمَعْرِفَةِ؟ الْمِسْ لِلتَّحَقُّقِ. الْأَفْعَالُ وَالْحُرُوفُ بِاللَّوْنِ الرَّمَادِيِّ.'};
L2.exLegend = () => `<div class="legend"><span class="chip nak">${ar('نَكِرَةٌ')}${T(' indéfini','')}</span><span class="chip mar">${ar('مَعْرِفَةٌ')}${T(' défini','')}</span><span class="chip oth">${T('verbe / particule','فِعْلٌ / حَرْفٌ')}</span></div>`;
L2.verses = [
  {ref:'73:15', lead:'…', tr:'… de même que Nous avons envoyé un messager à Pharaon.', words:[
    W('أَرْسَلْنَا','multi','أَرْسَلْ est un verbe ; ـنَا (« Nous ») est un pronom attaché : مَعْرِفَةٌ.','أَرْسَلَ فِعْلٌ، وَ«نَا» ضَمِيرٌ مُتَّصِلٌ.',[['أَرْسَلْـ','xfiil'],['ـنَا','damir']]),
    W('إِلَىٰ','xharf','Une préposition.','حَرْفُ جَرٍّ.'),
    W('فِرْعَوْنَ','alam','Le nom propre d’un homme.','عَلَمٌ عَلَى شَخْصٍ.'),
    W('رَسُولًا','nak','Première mention : « un messager ». Il accepte أَلْ.','ذُكِرَ أَوَّلَ مَرَّةٍ نَكِرَةً، وَيَقْبَلُ أَلْ.')]},
  {ref:'73:16', tr:'Pharaon désobéit au messager.', words:[
    W('فَعَصَىٰ','multi','فَـ est une particule, عَصَىٰ un verbe.','الْفَاءُ حَرْفٌ، وَعَصَى فِعْلٌ.',[['فَـ','xharf'],['عَصَىٰ','xfiil']]),
    W('فِرْعَوْنُ','alam','Nom propre.','عَلَمٌ.'),
    W('الرَّسُولَ','al','Le même messager, maintenant connu : il reçoit أَلْ.','الرَّسُولُ نَفْسُهُ، عُرِّفَ بِأَلْ لِأَنَّهُ صَارَ مَعْلُومًا.')]},
  {ref:'1:2', tr:'La louange est à Allah, Seigneur des mondes.', words:[
    W('الْحَمْدُ','al','Il porte أَلْ.','مُعَرَّفٌ بِأَلْ.'),
    W('لِلَّهِ','multi','لِـ est une préposition ; اللَّهِ est le nom d’Allah, le عَلَمٌ par excellence.','اللَّامُ حَرْفُ جَرٍّ، وَاللَّهِ عَلَمٌ.',[['لِـ','xharf'],['اللَّهِ','alam']]),
    W('رَبِّ','mudaf','Annexé à الْعَالَمِينَ, qui est défini par أَلْ : il devient défini.','مُضَافٌ إِلَى الْعَالَمِينَ، وَهُوَ مُعَرَّفٌ بِأَلْ.'),
    W('الْعَالَمِينَ','al','Il porte أَلْ.','مُعَرَّفٌ بِأَلْ.')]},
  {ref:'112:1', tr:'Dis : Il est Allah, Unique.', words:[
    W('قُلْ','xfiil','Un verbe (ordre).','فِعْلُ أَمْرٍ.'),
    W('هُوَ','damir','Pronom séparé « Il ».','ضَمِيرٌ مُنْفَصِلٌ.'),
    W('اللَّهُ','alam','Le nom propre d’Allah.','لَفْظُ الْجَلَالَةِ، عَلَمٌ.'),
    W('أَحَدٌ','nak','Le tanwîn, et il accepte أَلْ : الْأَحَدُ.','نَكِرَةٌ مُنَوَّنَةٌ.')]},
  {ref:'2:2', tr:'Voici le Livre, nul doute à son sujet ; une guidée pour les pieux.', words:[
    W('ذَٰلِكَ','ishara','Démonstratif du lointain (« cela »).','اسْمُ إِشَارَةٍ لِلْبَعِيدِ.'),
    W('الْكِتَابُ','al','Il porte أَلْ : « le Livre ».','مُعَرَّفٌ بِأَلْ.'),
    W('لَا','xharf','Une particule de négation.','حَرْفُ نَفْيٍ.'),
    W('رَيْبَ','nak','Pas de tanwîn ici, mais il accepte أَلْ (الرَّيْبُ) : c’est une نَكِرَةٌ. Tu verras pourquoi le tanwîn tombe avec لَا (chapitre لَا النَّافِيَةُ لِلْجِنْسِ).','نَكِرَةٌ، وَسَتَعْرِفُ سَبَبَ حَذْفِ التَّنْوِينِ فِي بَابِ لَا النَّافِيَةِ لِلْجِنْسِ.'),
    W('فِيهِ','multi','فِي est une préposition ; ـهِ est un pronom attaché (هَيْكَ).','فِي حَرْفُ جَرٍّ، وَالْهَاءُ ضَمِيرٌ.',[['فِي','xharf'],['ـهِ','damir']]),
    W('هُدًى','nak','Le tanwîn ـً : « une guidée ».','نَكِرَةٌ مُنَوَّنَةٌ.'),
    W('لِلْمُتَّقِينَ','multi','لِـ est une préposition ; الْمُتَّقِينَ porte أَلْ.','اللَّامُ حَرْفُ جَرٍّ، وَالْمُتَّقِينَ مُعَرَّفٌ بِأَلْ.',[['لِـ','xharf'],['الْمُتَّقِينَ','al']])]},
  {ref:'108:1', tr:'Nous t’avons certes accordé l’Abondance.', words:[
    W('إِنَّا','multi','إِنَّ est une particule ; ـنَا (« Nous ») est un pronom.','إِنَّ حَرْفٌ، وَ«نَا» ضَمِيرٌ.',[['إِنَّـ','xharf'],['ـنَا','damir']]),
    W('أَعْطَيْنَاكَ','multi','Un verbe et deux pronoms attachés : ـنَا (« Nous », le pronom des trois cas) et ـكَ (« toi », de هَيْكَ).','فِعْلٌ وَضَمِيرَانِ: «نَا» وَ«الْكَافُ».',[['أَعْطَيْـ','xfiil'],['ـنَا','damir'],['ـكَ','damir']]),
    W('الْكَوْثَرَ','al','Il porte أَلْ.','مُعَرَّفٌ بِأَلْ.')]},
  {ref:'110:1', tr:'Lorsque vient le secours d’Allah ainsi que la victoire,', words:[
    W('إِذَا','other','Un nom de temps (ظَرْفٌ) : tu le verras plus tard.','ظَرْفُ زَمَانٍ، سَيَأْتِي.'),
    W('جَاءَ','xfiil','Un verbe au passé.','فِعْلٌ مَاضٍ.'),
    W('نَصْرُ','mudaf','Annexé à اللَّهِ, un nom propre : il devient défini.','مُضَافٌ إِلَى عَلَمٍ.'),
    W('اللَّهِ','alam','Nom propre.','عَلَمٌ.'),
    W('وَالْفَتْحُ','multi','وَ est une particule ; الْفَتْحُ porte أَلْ.','الْوَاوُ حَرْفٌ، وَالْفَتْحُ مُعَرَّفٌ بِأَلْ.',[['وَ','xharf'],['الْفَتْحُ','al']])]},
  {ref:'48:29', tr:'Muhammad est le Messager d’Allah.', words:[
    W('مُحَمَّدٌ','alam','Un nom propre, même s’il porte le tanwîn : on ne dit pas الْمُحَمَّدُ.','عَلَمٌ، وَالتَّنْوِينُ لَا يُنَافِي التَّعْرِيفَ هُنَا.'),
    W('رَسُولُ','mudaf','Annexé à اللَّهِ : « le Messager d’Allah », un messager précis.','مُضَافٌ إِلَى عَلَمٍ.'),
    W('اللَّهِ','alam','Nom propre.','عَلَمٌ.')]},
  {ref:'2:185', tr:'Le mois de Ramadan, durant lequel le Coran a été descendu…', words:[
    W('شَهْرُ','mudaf','Annexé à رَمَضَانَ, un nom propre de mois.','مُضَافٌ إِلَى عَلَمٍ.'),
    W('رَمَضَانَ','alam','Nom propre d’un mois.','عَلَمٌ عَلَى شَهْرٍ.'),
    W('الَّذِي','mawsul','Relatif : « durant lequel », complété par la phrase qui suit.','اسْمٌ مَوْصُولٌ.'),
    W('أُنْزِلَ','xfiil','Un verbe (passif).','فِعْلٌ مَاضٍ مَبْنِيٌّ لِلْمَجْهُولِ.'),
    W('فِيهِ','multi','فِي + ـهِ (pronom).','فِي حَرْفٌ، وَالْهَاءُ ضَمِيرٌ.',[['فِي','xharf'],['ـهِ','damir']]),
    W('الْقُرْآنُ','al','Il porte أَلْ.','مُعَرَّفٌ بِأَلْ.')]},
  {ref:'2:35', tr:'… et n’approchez pas de cet arbre-ci.', words:[
    W('وَلَا','multi','Deux particules : وَ puis لَا.','حَرْفَانِ.',[['وَ','xharf'],['لَا','xharf']]),
    W('تَقْرَبَا','multi','Un verbe ; le ا final (« vous deux ») est un pronom attaché : c’est le ا de تَوَانِي.','فِعْلٌ، وَالْأَلِفُ ضَمِيرٌ (مِنْ تَوَانِي).',[['تَقْرَبَـ','xfiil'],['ـا','damir']]),
    W('هَٰذِهِ','ishara','Démonstratif féminin proche.','اسْمُ إِشَارَةٍ لِلْمُؤَنَّثِ.'),
    W('الشَّجَرَةَ','al','Il porte أَلْ.','مُعَرَّفٌ بِأَلْ.')]},
  {ref:'97:3', tr:'La nuit du Destin est meilleure que mille mois.', words:[
    W('لَيْلَةُ','mudaf','Annexé à الْقَدْرِ (défini par أَلْ) : défini.','مُضَافٌ إِلَى مُعَرَّفٍ بِأَلْ.'),
    W('الْقَدْرِ','al','Il porte أَلْ.','مُعَرَّفٌ بِأَلْ.'),
    W('خَيْرٌ','nak','Tanwîn, indéfini.','نَكِرَةٌ.'),
    W('مِنْ','xharf','Préposition.','حَرْفُ جَرٍّ.'),
    W('أَلْفِ','nak','Piège : il est annexé, mais à شَهْرٍ qui est indéfini. Il reste نَكِرَةٌ.','مُضَافٌ إِلَى نَكِرَةٍ فَهُوَ نَكِرَةٌ.'),
    W('شَهْرٍ','nak','Tanwîn, indéfini.','نَكِرَةٌ.')]},
  {ref:'53:49', tr:'Et c’est Lui le Seigneur de Sirius.', words:[
    W('وَأَنَّهُ','multi','وَ et أَنَّ sont des particules ; ـهُ est un pronom (de هَيْكَ).','الْوَاوُ وَأَنَّ حَرْفَانِ، وَالْهَاءُ ضَمِيرٌ.',[['وَ','xharf'],['أَنَّـ','xharf'],['ـهُ','damir']]),
    W('هُوَ','damir','Pronom séparé.','ضَمِيرٌ مُنْفَصِلٌ.'),
    W('رَبُّ','mudaf','Annexé à الشِّعْرَىٰ, un nom propre.','مُضَافٌ إِلَى عَلَمٍ.'),
    W('الشِّعْرَىٰ','alam','Le nom propre d’une étoile (Sirius). Son ال fait partie du nom.','عَلَمٌ عَلَى نَجْمٍ.')]},
  {ref:'103:3', tr:'Sauf ceux qui ont cru… (début)', words:[
    W('إِلَّا','xharf','Particule d’exception.','حَرْفُ اسْتِثْنَاءٍ.'),
    W('الَّذِينَ','mawsul','Relatif pluriel « ceux qui », précisé par آمَنُوا.','اسْمٌ مَوْصُولٌ.'),
    W('آمَنُوا','multi','Un verbe ; le و final (« ils ») est un pronom : c’est le و de تَوَانِي.','فِعْلٌ، وَالْوَاوُ ضَمِيرٌ.',[['آمَنُـ','xfiil'],['ـوا','damir']])]}
];

/* Exercices L2 */
const C2 = (set,ref,pre,hl,post,a,fr,arr) => ({k:'choice',set,ref,pre,hl,post,a,why:{fr,ar:arr}});
L2.Q = [
  C2('nm','73:15','كَمَا أَرْسَلْنَا إِلَىٰ فِرْعَوْنَ ','رَسُولًا','','nak','Première mention, tanwîn, et il accepte أَلْ : « un messager ».','نَكِرَةٌ تَقْبَلُ أَلْ.'),
  C2('nm','73:16','فَعَصَىٰ فِرْعَوْنُ ','الرَّسُولَ',' فَأَخَذْنَاهُ أَخْذًا وَبِيلًا','mar','Il porte أَلْ : c’est le messager déjà mentionné.','مُعَرَّفٌ بِأَلْ.'),
  C2('nm','112:1','قُلْ هُوَ اللَّهُ ','أَحَدٌ','','nak','Il accepte أَلْ (الْأَحَدُ) : indéfini.','يَقْبَلُ أَلْ فَهُوَ نَكِرَةٌ.'),
  C2('nm','97:3','لَيْلَةُ الْقَدْرِ ','خَيْرٌ',' مِنْ أَلْفِ شَهْرٍ','nak','Tanwîn, et il accepte أَلْ.','نَكِرَةٌ.'),
  C2('nm','2:2','ذَٰلِكَ ','الْكِتَابُ',' لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِلْمُتَّقِينَ','mar','Il porte أَلْ.','مُعَرَّفٌ بِأَلْ.'),
  C2('nm','2:2','ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ ','هُدًى',' لِلْمُتَّقِينَ','nak','Tanwîn ـً : « une guidée ».','نَكِرَةٌ مُنَوَّنَةٌ.'),
  C2('nm','97:3','لَيْلَةُ الْقَدْرِ خَيْرٌ مِنْ ','أَلْفِ',' شَهْرٍ','nak','Annexé à شَهْرٍ, qui est indéfini : il reste نَكِرَةٌ.','مُضَافٌ إِلَى نَكِرَةٍ فَهُوَ نَكِرَةٌ.'),
  C2('nm','1:2','الْحَمْدُ لِلَّهِ ','رَبِّ',' الْعَالَمِينَ','mar','Annexé à الْعَالَمِينَ, défini : il devient défini.','مُضَافٌ إِلَى مَعْرِفَةٍ.'),
  C2('type','1:5','','إِيَّاكَ',' نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ','damir','Un pronom séparé (« Toi »).','ضَمِيرٌ مُنْفَصِلٌ.'),
  C2('type','48:29','','مُحَمَّدٌ',' رَسُولُ اللَّهِ','alam','Le nom propre du Prophète ﷺ.','عَلَمٌ.'),
  C2('type','2:35','وَلَا تَقْرَبَا ','هَٰذِهِ',' الشَّجَرَةَ','ishara','Démonstratif féminin proche.','اسْمُ إِشَارَةٍ.'),
  C2('type','96:1','اقْرَأْ بِاسْمِ رَبِّكَ ','الَّذِي',' خَلَقَ','mawsul','Relatif, complété par خَلَقَ.','اسْمٌ مَوْصُولٌ.'),
  C2('type','108:1','إِنَّا أَعْطَيْنَاكَ ','الْكَوْثَرَ','','al','Il porte أَلْ.','مُعَرَّفٌ بِأَلْ.'),
  C2('type','110:1','إِذَا جَاءَ ','نَصْرُ',' اللَّهِ وَالْفَتْحُ','mudaf','Annexé à اللَّهِ, un nom propre.','مُضَافٌ إِلَى عَلَمٍ.'),
  C2('type','2:185','شَهْرُ ','رَمَضَانَ',' الَّذِي أُنْزِلَ فِيهِ الْقُرْآنُ','alam','Le nom propre d’un mois.','عَلَمٌ عَلَى شَهْرٍ.'),
  C2('type','5:24','إِنَّا ','هَاهُنَا',' قَاعِدُونَ','ishara','هُنَا « ici », avec le هَا d’attention : démonstratif de lieu.','اسْمُ إِشَارَةٍ لِلْمَكَانِ.'),
  C2('type','103:3','إِلَّا ','الَّذِينَ',' آمَنُوا','mawsul','Relatif pluriel « ceux qui ».','اسْمٌ مَوْصُولٌ.'),
  C2('type','112:1','قُلْ ','هُوَ',' اللَّهُ أَحَدٌ','damir','Pronom séparé « Il ».','ضَمِيرٌ مُنْفَصِلٌ.'),
  C2('type','53:49','وَأَنَّهُ هُوَ رَبُّ ','الشِّعْرَىٰ','','alam','Nom propre d’une étoile : son ال fait partie du nom.','عَلَمٌ عَلَى نَجْمٍ.'),
  C2('type','12:99','ادْخُلُوا ','مِصْرَ',' إِنْ شَاءَ اللَّهُ آمِنِينَ','alam','Nom propre d’un pays.','عَلَمٌ عَلَى بَلَدٍ.'),
  C2('type','97:3','','لَيْلَةُ',' الْقَدْرِ خَيْرٌ مِنْ أَلْفِ شَهْرٍ','mudaf','Annexé à الْقَدْرِ, qui porte أَلْ.','مُضَافٌ إِلَى مُعَرَّفٍ بِأَلْ.'),
  {k:'tap', ref:'73:16', words:['فَعَصَىٰ','فِرْعَوْنُ','الرَّسُولَ'], a:[1], q:{fr:'Touche le <b>عَلَمٌ</b> (nom propre).', ar:'الْمِسِ الْعَلَمَ.'}, why:{fr:'فِرْعَوْنُ est un nom propre ; الرَّسُولَ est défini par أَلْ.', ar:'فِرْعَوْنُ عَلَمٌ، وَالرَّسُولَ مُعَرَّفٌ بِأَلْ.'}},
  {k:'tap', ref:'97:3', words:['لَيْلَةُ','الْقَدْرِ','خَيْرٌ','مِنْ','أَلْفِ','شَهْرٍ'], a:[2,4,5], q:{fr:'Touche une <b>نَكِرَةٌ</b>.', ar:'الْمِسْ نَكِرَةً.'}, why:{fr:'خَيْرٌ, أَلْفِ et شَهْرٍ sont indéfinis. لَيْلَةُ est défini par l’annexion à الْقَدْرِ.', ar:'خَيْرٌ وَأَلْفِ وَشَهْرٍ نَكِرَاتٌ.'}},
  {k:'tap', ref:'2:2', words:['ذَٰلِكَ','الْكِتَابُ','لَا','رَيْبَ','فِيهِ','هُدًى','لِلْمُتَّقِينَ'], a:[0], q:{fr:'Touche le <b>اسْمُ إِشَارَةٍ</b>.', ar:'الْمِسِ اسْمَ الْإِشَارَةِ.'}, why:{fr:'ذَٰلِكَ montre ce qui est loin (ou élevé).', ar:'ذَٰلِكَ اسْمُ إِشَارَةٍ لِلْبَعِيدِ.'}},
  {k:'tap', ref:'2:2', words:['ذَٰلِكَ','الْكِتَابُ','لَا','رَيْبَ','فِيهِ','هُدًى','لِلْمُتَّقِينَ'], a:[3,5], q:{fr:'Touche une <b>نَكِرَةٌ</b>.', ar:'الْمِسْ نَكِرَةً.'}, why:{fr:'رَيْبَ et هُدًى acceptent tous deux أَلْ.', ar:'رَيْبَ وَهُدًى نَكِرَتَانِ.'}},
  {k:'tap', ref:'108:1', words:['إِنَّا','أَعْطَيْنَاكَ','الْكَوْثَرَ'], a:[0,1], q:{fr:'Touche un mot qui contient un <b>ضَمِيرٌ مُتَّصِلٌ</b>.', ar:'الْمِسْ كَلِمَةً فِيهَا ضَمِيرٌ مُتَّصِلٌ.'}, why:{fr:'إِنَّا contient ـنَا ; أَعْطَيْنَاكَ contient ـنَا et ـكَ.', ar:'فِي إِنَّا «نَا»، وَفِي أَعْطَيْنَاكَ «نَا» وَ«الْكَافُ».'}},
  {k:'tap', ref:'2:97', words:['قُلْ','مَنْ','كَانَ','عَدُوًّا','لِجِبْرِيلَ'], a:[4], q:{fr:'Touche le mot qui contient un <b>عَلَمٌ</b>.', ar:'الْمِسِ الْكَلِمَةَ الَّتِي فِيهَا عَلَمٌ.'}, why:{fr:'لِجِبْرِيلَ = لِـ + جِبْرِيلَ, le nom propre d’un ange.', ar:'لِجِبْرِيلَ: اللَّامُ حَرْفٌ، وَجِبْرِيلُ عَلَمٌ عَلَى مَلَكٍ.'}},
  {k:'sign', ref:'1:2', q:{fr:'Dans <span class="ar" lang="ar">رَبِّ الْعَالَمِينَ</span>, pourquoi <span class="ar" lang="ar">رَبِّ</span> est-il défini ?', ar:'فِي «رَبِّ الْعَالَمِينَ» لِمَاذَا «رَبِّ» مَعْرِفَةٌ؟'},
    opts:[['مُضَافٌ إِلَى مَعْرِفَةٍ','il est annexé à un défini','مُضَافٌ إِلَى مَعْرِفَةٍ'],['أَلْ','il porte أَلْ','فِيهِ أَلْ'],['عَلَمٌ','c’est un nom propre','عَلَمٌ'],['ضَمِيرٌ','c’est un pronom','ضَمِيرٌ']], a:0,
    why:{fr:'رَبِّ n’a pas أَلْ lui-même ; c’est l’annexion à الْعَالَمِينَ qui le définit.', ar:'عُرِّفَ بِالْإِضَافَةِ إِلَى الْعَالَمِينَ.'}},
  {k:'sign', ref:'73:15', q:{fr:'Quel test permet de reconnaître une <b>نَكِرَةٌ</b> ?', ar:'مَا عَلَامَةُ النَّكِرَةِ؟'},
    opts:[['أَلْ','elle accepte أَلْ','تَقْبَلُ أَلْ'],['لَمْ','elle accepte لَمْ','تَقْبَلُ لَمْ'],['ـتْ','elle accepte le تْ sâkina','تَقْبَلُ التَّاءَ'],['—','elle n’accepte rien','لَا تَقْبَلُ شَيْئًا']], a:0,
    why:{fr:'Définition du livre : la نَكِرَةٌ est tout nom qui accepte أَلْ.', ar:'النَّكِرَةُ كُلُّ اسْمٍ يَقْبَلُ أَلْ.'}},
  {k:'sign', ref:'96:1', q:{fr:'Le <span class="ar" lang="ar">ـكَ</span> de <span class="ar" lang="ar">رَبِّكَ</span> appartient à quel groupe ?', ar:'الْكَافُ فِي «رَبِّكَ» مِنْ أَيِّ مَجْمُوعَةٍ؟'},
    opts:[['تَوَانِي','pronoms de رَفْعٌ','ضَمَائِرُ الرَّفْعِ'],['هَيْكَ','pronoms de نَصْبٌ et جَرٌّ','ضَمَائِرُ النَّصْبِ وَالْجَرِّ'],['نَا','pronom des trois cas','لِلثَّلَاثَةِ']], a:1,
    why:{fr:'ك est l’une des lettres de هَيْكَ (ه، ي، ك).', ar:'الْكَافُ مِنْ «هَيْكَ».'}},
  {k:'sign', ref:'103:3', q:{fr:'Le <span class="ar" lang="ar">و</span> final de <span class="ar" lang="ar">آمَنُوا</span> appartient à quel groupe ?', ar:'الْوَاوُ فِي «آمَنُوا» مِنْ أَيِّ مَجْمُوعَةٍ؟'},
    opts:[['تَوَانِي','pronoms de رَفْعٌ','ضَمَائِرُ الرَّفْعِ'],['هَيْكَ','pronoms de نَصْبٌ et جَرٌّ','ضَمَائِرُ النَّصْبِ وَالْجَرِّ'],['نَا','pronom des trois cas','لِلثَّلَاثَةِ']], a:0,
    why:{fr:'و est l’une des lettres de تَوَانِي : « ils » ont cru, c’est le sujet.', ar:'الْوَاوُ مِنْ «تَوَانِي».'}},
  {k:'sign', ref:'97:3', q:{fr:'Pourquoi <span class="ar" lang="ar">أَلْفِ</span> dans <span class="ar" lang="ar">أَلْفِ شَهْرٍ</span> reste-t-il نَكِرَةٌ ?', ar:'لِمَاذَا بَقِيَ «أَلْفِ» نَكِرَةً؟'},
    opts:[['مُضَافٌ إِلَى نَكِرَةٍ','il est annexé à un indéfini','مُضَافٌ إِلَى نَكِرَةٍ'],['أَلْ','il porte أَلْ','فِيهِ أَلْ'],['ضَمِيرٌ','c’est un pronom','ضَمِيرٌ']], a:0,
    why:{fr:'Seule l’annexion à une مَعْرِفَةٌ rend défini. شَهْرٍ est indéfini.', ar:'لَا تُعَرِّفُ الْإِضَافَةُ إِلَّا إِذَا كَانَ الْمُضَافُ إِلَيْهِ مَعْرِفَةً.'}}
];
L2.ui.quiz = newQuiz(L2.Q.length);
L2.labName = {fr:'Détecteur', ar:'الْكَاشِفُ'};
if (saved.det2) L2.ui.det.st = saved.det2;

L2.renderFiche = () => {
  const rows = [
    ['damir',{fr:'Remplace quelqu’un de connu',ar:'يَدُلُّ عَلَى مُعَيَّنٍ'},'هُوَ · إِيَّاكَ · تَوَانِي · هَيْكَ · نَا','قُلْ هُوَ اللَّهُ','112:1'],
    ['alam',{fr:'Nom propre (Allah, anges, gens, pays, astres, mois)',ar:'اسْمٌ يُعَيِّنُ مُسَمَّاهُ'},'اللَّهُ · مُحَمَّدٌ · مِصْرَ','مُحَمَّدٌ رَسُولُ اللَّهِ','48:29'],
    ['ishara',{fr:'Montre quelque chose de précis',ar:'يُشَارُ بِهِ إِلَى مُعَيَّنٍ'},'هَٰذَا · هَٰذِهِ · هَٰذَانِ · هَاتَانِ · هَٰؤُلَاءِ · هُنَا · ثَمَّ','هَٰذِهِ الشَّجَرَةَ','2:35'],
    ['mawsul',{fr:'« Celui qui », complété par une phrase',ar:'يَحْتَاجُ إِلَى صِلَةٍ'},'الَّذِي · الَّتِي · الَّذِينَ …','الَّذِينَ آمَنُوا','103:3'],
    ['al',{fr:'Nom qui porte أَلْ',ar:'مَا دَخَلَتْ عَلَيْهِ أَلْ'},'الْـ','ذَٰلِكَ الْكِتَابُ','2:2'],
    ['mudaf',{fr:'Nom annexé à un défini',ar:'مَا أُضِيفَ إِلَى مَعْرِفَةٍ'},'رَبُّكَ · نَصْرُ اللَّهِ','رَبِّ الْعَالَمِينَ','1:2']
  ];
  return `
    <p class="kicker">${T('Étape 6 · La fiche','الْخُطْوَةُ ٦ · الْخُلَاصَةُ')}</p>
    <h1>${T('À retenir','خُلَاصَةُ الدَّرْسِ')}</h1>
    <div class="signs" style="margin-bottom:12px">
      <div class="sign-row nak"><div class="who">نَكِرَةٌ</div><div class="what">${T(`tout nom qui <b>accepte</b> ${ar('أَلْ')} : ${ar('رَسُولًا')} (73:15)`,'كُلُّ اسْمٍ يَقْبَلُ أَلْ: رَسُولًا')}</div></div>
      <div class="sign-row mar"><div class="who">مَعْرِفَةٌ</div><div class="what">${T(`tout nom qui <b>refuse</b> ${ar('أَلْ')} : six types`,'كُلُّ اسْمٍ لَا يَقْبَلُ أَلْ، وَهِيَ سِتَّةُ أَنْوَاعٍ')}</div></div>
    </div>
    <div class="tbl-wrap"><table>
      <thead><tr><th>${T('Type','النَّوْعُ')}</th><th>${T('Idée','مَعْنَاهُ')}</th><th>${T('Formes','صُوَرُهُ')}</th><th>${T('Dans le Coran','مِنَ الْقُرْآنِ')}</th></tr></thead>
      <tbody>${rows.map(r=>{ const f=CATS[r[0]];
        return `<tr class="mar"><td class="fam">${ar(f.sar)}</td><td>${L(r[1])}</td><td>${ar(r[2])}</td><td>${ar(r[3])}<small>${AN(r[4])}</small></td></tr>`; }).join('')}</tbody>
    </table></div>
    <div class="memo"><b>${T('Les trois mots magiques des pronoms','مَفَاتِيحُ الضَّمَائِرِ الْمُتَّصِلَةِ')}</b>
      ${T(`${ar('تَوَانِي')} = sujet (رَفْعٌ) · ${ar('هَيْكَ')} = complément ou après préposition (نَصْبٌ، جَرٌّ) · ${ar('نَا')} = les trois. Et le piège : un nom annexé à une ${ar('نَكِرَةٌ')} reste ${ar('نَكِرَةٌ')} (${ar('أَلْفِ شَهْرٍ')}).`,
          'تَوَانِي لِلرَّفْعِ، وَهَيْكَ لِلنَّصْبِ وَالْجَرِّ، وَنَا لِلثَّلَاثَةِ. وَالْمُضَافُ إِلَى نَكِرَةٍ يَبْقَى نَكِرَةً: أَلْفِ شَهْرٍ.')}
    </div>
    ${finishBlock(L2)}
    ${nextBlock(2)}`;
};

registerLesson(L2);
})();
