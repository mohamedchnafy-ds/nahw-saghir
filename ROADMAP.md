# Feuille de route — 31 leçons

Page PDF = 2 × page du livre − 7 (pages PDF paires blanches). Sommaire du livre : PDF p. 62-63.
`idx` = numéro interne (0-based) à mettre dans l'objet leçon ; il doit correspondre à l'ordre de `COURSE` dans `js/core.js`.

| # | idx | Leçon | Livre p. | PDF p. | État |
|---|---|---|---|---|---|
| **Module 1 — الْكَلِمَةُ** | | | | | |
| 1 | 0 | أَنْوَاعُ الْكَلِمَةِ | 9 | 11 | ✅ fait (`01-anwa-al-kalima.js`) |
| 2 | 1 | النَّكِرَةُ وَالْمَعْرِفَةُ | 10 | 13 | ✅ fait (`02-nakira-wal-marifa.js`) |
| 3 | 2 | الْمُعْرَبُ وَالْمَبْنِيُّ | 11-12 | 15-17 | ⏭️ **prochaine** |
| 4 | 3 | الْأَحْكَامُ الْإِعْرَابِيَّةُ (فَصْلٌ) | 13 | 19 | à faire |
| 5 | 4 | عَلَامَاتُ الْإِعْرَابِ (فَصْلٌ) | 16-17 | 25-27 | à faire |
| 6 | 5 | خَطُّ الْإِعْرَابِ (فَصْلٌ) | 13-15 | 19-23 | à faire |
| **Module 2 — الْجُمْلَةُ الْفِعْلِيَّةُ** | | | | | |
| 7 | 6 | الْفَاعِلُ | 18 | 29 | à faire |
| 8 | 7 | نَائِبُ الْفَاعِلِ | 19 | 31 | à faire |
| **Module 3 — الْجُمْلَةُ الِاسْمِيَّةُ** | | | | | |
| 9 | 8 | الْمُبْتَدَأُ وَالْخَبَرُ | 20 | 33 | à faire |
| 10 | 9 | كَانَ وَأَخَوَاتُهَا | 21 | 35 | à faire |
| 11 | 10 | إِنَّ وَأَخَوَاتُهَا · لَا النَّافِيَةُ لِلْجِنْسِ | 21-22 | 35-37 | à faire |
| 12 | 11 | ظَنَّ وَأَخَوَاتُهَا | 22 | 37 | à faire |
| **Module 4 — الْمَنْصُوبَاتُ** | | | | | |
| 13 | 12 | الْمَفْعُولُ بِهِ | 23 | 39 | à faire |
| 14 | 13 | الْمَفْعُولُ فِيهِ | 24 | 41 | à faire |
| 15 | 14 | الْمَفْعُولُ لَهُ | 24 | 41 | à faire |
| 16 | 15 | الْمَفْعُولُ مَعَهُ | 25 | 43 | à faire |
| 17 | 16 | الْمَفْعُولُ الْمُطْلَقُ | 25 | 43 | à faire |
| 18 | 17 | الْحَالُ | 25-26 | 43-45 | à faire |
| 19 | 18 | التَّمْيِيزُ | 27 | 47 | à faire |
| 20 | 19 | الْمُسْتَثْنَى | 27-28 | 47-49 | à faire |
| 21 | 20 | الْمُنَادَى | 28 | 49-51 | à faire |
| **Module 5 — الْمَجْرُورَاتُ** | | | | | |
| 22 | 21 | الْمَجْرُورُ بِحَرْفِ الْجَرِّ | 29 | 51 | à faire |
| 23 | 22 | الْمَجْرُورُ بِالْإِضَافَةِ | 30 | 53 | à faire |
| **Module 6 — التَّوَابِعُ** | | | | | |
| 24 | 23 | النَّعْتُ | 30 | 53 | à faire |
| 25 | 24 | الْمَعْطُوفُ | 31 | 55 | à faire |
| 26 | 25 | التَّوْكِيدُ | 31 | 55 | à faire |
| 27 | 26 | الْبَدَلُ (+ مَلْحُوظَةٌ) | 31-32 | 55-57 | à faire |
| **Module 7 — إِعْرَابُ الْمُضَارِعِ** | | | | | |
| 28 | 27 | نَصْبُ الْمُضَارِعِ | 33 | 59 | à faire |
| 29 | 28 | جَزْمُ الْمُضَارِعِ | 33 | 59 | à faire |
| 30 | 29 | رَفْعُ الْمُضَارِعِ | 34 | 61 | à faire |
| 31 | 30 | خُلَاصَةُ إِعْرَابِ الِاسْمِ | 32 | 57 | à faire |

Notes :
- Dans le livre, « خَطُّ الْإِعْرَابِ » (p. 13) vient **avant** « عَلَامَاتُ الْإِعْرَابِ » (p. 16) ; l'app le place
  en fin de module 1, car il réutilise tout le reste. On peut inverser en changeant `COURSE`.
- « خُلَاصَةُ إِعْرَابِ الِاسْمِ » est p. 32 dans le livre mais sert de révision finale dans l'app.

## Idées notées pour plus tard
- Révision espacée des questions ratées, toutes leçons confondues.
- Un mode « إِعْرَابٌ guidé » mot par mot quand les cas (رفع، نصب، جر، جزم) auront été vus (leçons 4 à 6).
- Passage en PWA installable (Claude Code), comme l'app Coran de Mohamed.
