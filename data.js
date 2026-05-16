
const busData = [
/* =========================
   🚍 KOFIMANGA
========================= */
{ depart:"Antananarivo", arrivee:"Moramanga", coop:"KOFIMANGA", prix:"12 000 Ar", heureDepart:"Non défini", numero:["034 17 322 33","033 14 667 22"] },
{ depart:"Antananarivo", arrivee:"Toamasina", coop:"KOFIMANGA", prix:"Non défini", heureDepart:"Non défini", numero:["034 17 322 33","033 14 667 22"] },

/* =========================
   🚍 TRANS MAMY
========================= */
{ depart:"Antananarivo", arrivee:"Moramanga", coop:"Trans MAMY", prix:"Non défini", heureDepart:"Non défini", numero:[] },
{ depart:"Antananarivo", arrivee:"Toamasina", coop:"Trans MAMY", prix:"Non défini", heureDepart:"Non défini", numero:[] },

/* =========================
   🚍 KOMPIMA
========================= */
{ depart:"Antananarivo", arrivee:"Moramanga", coop:"KOMPIMA", prix:"Non défini", heureDepart:"04:00 / 07:00 / 10:00 / 15:00 / 18:00", numero:["034 64 422 53","033 11 362 74"] },
{ depart:"Antananarivo", arrivee:"Toamasina", coop:"KOMPIMA", prix:"Non défini", heureDepart:"04:00 / 07:00 / 10:00 / 15:00 / 18:00", numero:["034 64 422 53","033 11 362 74"] },

/* =========================
   🚍 TAFITA
========================= */
{ depart:"Antananarivo", arrivee:"Moramanga", coop:"TAFITA", prix:"Non défini", heureDepart:"Non défini", numero:["034 29 612 65"] },
{ depart:"Antananarivo", arrivee:"Brickaville", coop:"TAFITA", prix:"Non défini", heureDepart:"09:00 / 15:00", numero:["034 29 612 65"] },
{ depart:"Antananarivo", arrivee:"Toamasina", coop:"TAFITA", prix:"Non défini", heureDepart:"Non défini", numero:["034 29 612 65"] },

/* =========================
   🚍 TRANS ALPHA PLUS
========================= */
{ depart:"Antananarivo", arrivee:"Vatomandry", coop:"Trans ALPHA Plus", prix:"30 000 Ar", heureDepart:"15:00", numero:["034 54 908 23","033 11 230 92"] },
{ depart:"Antananarivo", arrivee:"Ilakaka Est", coop:"Trans ALPHA Plus", prix:"30 000 Ar", heureDepart:"15:00", numero:["034 54 908 23","033 11 230 92"] },
{ depart:"Antananarivo", arrivee:"Mahanoro", coop:"Trans ALPHA Plus", prix:"45 000 Ar", heureDepart:"15:00", numero:["034 54 908 23","033 11 230 92"] },

/* =========================
   🚍 TRANS PLUS
========================= */
{ depart:"Antananarivo", arrivee:"Mahanoro", coop:"Trans PLUS", prix:"45 000 Ar", heureDepart:"10:00 / 12:00 / 18:00", numero:["033 54 642 20","034 37 737 94"] },
{ depart:"Antananarivo", arrivee:"Ambatomandry", coop:"Trans PLUS", prix:"30 000 Ar", heureDepart:"10:00 / 12:00 / 18:00", numero:["033 54 642 20","034 37 737 94"] },

/* =========================
   🚍 SONATRA
========================= */
{ depart:"Antananarivo", arrivee:"Vatomandry", coop:"SONATRA", prix:"30 000 Ar", heureDepart:"07:00", numero:["033 20 911 47"] },
{ depart:"Antananarivo", arrivee:"Mahanoro", coop:"SONATRA", prix:"45 000 Ar", heureDepart:"07:00 / 09:00 / 15:00", numero:["038 51 111 95","033 27 652 27"] },

/* =========================
   🚍 COOPÉRATIVE MIRAY
========================= */
{ depart:"Antananarivo", arrivee:"Moramanga", coop:"Coopérative MIRAY", prix:"Non défini", heureDepart:"Non défini", numero:["034 39 859 92","033 21 857 21"] },
{ depart:"Antananarivo", arrivee:"Toamasina", coop:"Coopérative MIRAY", prix:"Non défini", heureDepart:"Non défini", numero:["034 39 859 92","033 21 857 21"] },

/* =========================
   🚍 KOFIZAMI
========================= */
{ depart:"Antananarivo", arrivee:"Ambatomanjina", coop:"KOFIZAMI", prix:"90 000 Ar / 120 000 Ar", heureDepart:"02:00 / 04:00 / 08:00", numero:["038 42 783 26"] },
{ depart:"Antananarivo", arrivee:"Antanetibe", coop:"KOFIZAMI", prix:"90 000 Ar / 120 000 Ar", heureDepart:"02:00 / 04:00 / 08:00", numero:["038 42 783 26"] },
{ depart:"Antananarivo", arrivee:"Betatao", coop:"KOFIZAMI", prix:"90 000 Ar / 120 000 Ar", heureDepart:"02:00 / 04:00 / 08:00", numero:["038 42 783 26"] },
{ depart:"Antananarivo", arrivee:"Anjozorobe", coop:"KOFIZAMI", prix:"10 000 Ar", heureDepart:"02:00 / 04:00 / 08:00", numero:["033 83 234 27","034 72 653 07","038 84 652 23"] },

/* =========================
   🚍 SOTRATE
========================= */
{ depart:"Antananarivo", arrivee:"Anjozorobe", coop:"SOTRATE", prix:"10 000 Ar", heureDepart:"04:00 → 16:00", numero:["034 22 777 41","038 67 232 17"] },

/* =========================
   🚍 KOFILA
========================= */
{ depart:"Antananarivo", arrivee:"Mangamila", coop:"KOFILA", prix:"9 000 Ar", heureDepart:"04:00 → 16:00", numero:["034 43 171 83","032 41 587 62","033 22 535 11"] },
/* =========================
   🚍 TRANS TAFITA
========================= */
{ depart:"Antananarivo", arrivee:"Brickaville", coop:"Trans Tafita", prix:"", heureDepart:"07:40 / 16:00", numero:["034 12 639 88","033 33 639 88"] },
{ depart:"Antananarivo", arrivee:"Toamasina", coop:"Trans Tafita", prix:"35 000", heureDepart:"07:40 / 16:00", numero:["034 12 639 88","033 33 639 88"] },

/* =========================
   🚍 KOFMAD
========================= */
{ depart:"Antananarivo", arrivee:"Mahajanga", coop:"KOFMAD", prix:"60 000 / 70 000", heureDepart:"", numero:["034 40 083 78","033 82 503 78"] },
{ depart:"Antananarivo", arrivee:"Marovoay", coop:"KOFMAD", prix:"35 000", heureDepart:"", numero:["034 40 083 78","033 82 503 78"] },
{ depart:"Antananarivo", arrivee:"Toamasina", coop:"KOFMAD", prix:"35 000", heureDepart:"", numero:["034 40 083 78","033 82 503 78"] },
{ depart:"Antananarivo", arrivee:"Maevatanana", coop:"KOFMAD", prix:"35 000 / 40 000", heureDepart:"", numero:["034 40 083 78","033 82 503 78"] },

/* =========================
   🚍 KOP FMM
========================= */
{ depart:"Antananarivo", arrivee:"Mahajanga", coop:"KOP FMM", prix:"60 000 / 70 000", heureDepart:"", numero:[] },
{ depart:"Antananarivo", arrivee:"Ambato Boeny", coop:"KOP FMM", prix:"45 000", heureDepart:"", numero:[] },
{ depart:"Antananarivo", arrivee:"Toamasina", coop:"KOP FMM", prix:"35 000", heureDepart:"", numero:[] },
{ depart:"Antananarivo", arrivee:"Marovoay", coop:"KOP FMM", prix:"35 000", heureDepart:"", numero:[] },
{ depart:"Antananarivo", arrivee:"Fenerive Est", coop:"KOP FMM", prix:"", heureDepart:"", numero:[] },

/* =========================
   🚍 KOFISA
========================= */
{ depart:"Antananarivo", arrivee:"Mahajanga", coop:"KOFISA", prix:"60 000 / 70 000", heureDepart:"", numero:["033 84 326 63","034 47 429 65"] },
{ depart:"Antananarivo", arrivee:"Marovoay", coop:"KOFISA", prix:"35 000", heureDepart:"", numero:["033 84 326 63","034 47 429 65"] },
{ depart:"Antananarivo", arrivee:"Amboromalandy", coop:"KOFISA", prix:"", heureDepart:"", numero:["033 84 326 63","034 47 429 65"] },
{ depart:"Antananarivo", arrivee:"Ambondromamy", coop:"KOFISA", prix:"", heureDepart:"", numero:["033 84 326 63","034 47 429 65"] },
{ depart:"Antananarivo", arrivee:"Ambolomoty", coop:"KOFISA", prix:"", heureDepart:"", numero:["033 84 326 63","034 47 429 65"] },
{ depart:"Antananarivo", arrivee:"Maevatanana", coop:"KOFISA", prix:"35 000 / 40 000", heureDepart:"", numero:["033 84 326 63","034 47 429 65"] },

/* =========================
   🚍 COTRANSMA
========================= */
{ depart:"Antananarivo", arrivee:"Mahajanga", coop:"COTRANSMA", prix:"60 000 / 70 000", heureDepart:"", numero:["034 55 364 41"] },
{ depart:"Antananarivo", arrivee:"Maevatanana", coop:"COTRANSMA", prix:"35 000 / 40 000", heureDepart:"", numero:["034 55 364 41"] },

/* =========================
   🚍 COFIMANDIDY
========================= */
{ depart:"Antananarivo", arrivee:"Miarinarivo", coop:"COFIMANDIDY", prix:"8 000", heureDepart:"", numero:["033 40 528 72","034 17 339 23"] },
{ depart:"Antananarivo", arrivee:"Ankadinondry", coop:"COFIMANDIDY", prix:"15 000", heureDepart:"", numero:["033 40 528 72","034 17 339 23"] },
{ depart:"Antananarivo", arrivee:"Tsiroanomandidy", coop:"COFIMANDIDY", prix:"20 000", heureDepart:"", numero:["033 40 528 72","034 17 339 23"] },

/* =========================
   🚍 KOFITSIRO
========================= */
{ depart:"Antananarivo", arrivee:"Ankadinondry", coop:"KOFITSIRO", prix:"15 000", heureDepart:"06:00", numero:["034 58 903 80"] },
{ depart:"Antananarivo", arrivee:"Tsiroanomandidy", coop:"KOFITSIRO", prix:"20 000", heureDepart:"06:00", numero:["034 58 903 80"] },
{ depart:"Antananarivo", arrivee:"Maintirano", coop:"KOFITSIRO", prix:"", heureDepart:"06:00", numero:["034 58 903 80"] },

/* =========================
   🚍 KOP FMM NORD
========================= */
{ depart:"Antananarivo", arrivee:"Antsiranana", coop:"KOP FMM", prix:"130 000 / 140 000", heureDepart:"", numero:["032 42 244 95"] },
{ depart:"Antananarivo", arrivee:"Sambava", coop:"KOP FMM", prix:"140 000 / 160 000", heureDepart:"", numero:["032 42 244 95"] },
{ depart:"Antananarivo", arrivee:"Nosy Be", coop:"KOP FMM", prix:"120 000 / 130 000", heureDepart:"", numero:["032 42 244 95"] },
{ depart:"Antananarivo", arrivee:"Ambanja", coop:"KOP FMM", prix:"90 000 / 100 000", heureDepart:"", numero:["032 42 244 95"] },
{ depart:"Antananarivo", arrivee:"Antsohihy", coop:"KOP FMM", prix:"60 000 / 70 000", heureDepart:"", numero:["032 42 244 95"] },

/* =========================
   🚍 FIFIDY
========================= */
{ depart:"Antananarivo", arrivee:"Nosy Be", coop:"FIFIDY", prix:"120 000 / 130 000", heureDepart:"", numero:["032 59 014 45","033 78 706 47"] },
{ depart:"Antananarivo", arrivee:"Ankify", coop:"FIFIDY", prix:"100 000 / 110 000", heureDepart:"", numero:["032 59 014 45","033 78 706 47"] },
{ depart:"Antananarivo", arrivee:"Ambanja", coop:"FIFIDY", prix:"90 000 / 100 000", heureDepart:"", numero:["032 59 014 45"] },
{ depart:"Antananarivo", arrivee:"Sambava", coop:"FIFIDY", prix:"140 000 / 160 000", heureDepart:"", numero:["032 59 014 45"] },
{ depart:"Antananarivo", arrivee:"Ambilobe", coop:"FIFIDY", prix:"100 000 / 120 000", heureDepart:"", numero:["032 59 014 45"] },
{ depart:"Antananarivo", arrivee:"Antsiranana", coop:"FIFIDY", prix:"130 000", heureDepart:"", numero:["032 59 014 45"] },

/* =========================
   🚍 TRANS BESADY
========================= */
{ depart:"Antananarivo", arrivee:"Antsiranana", coop:"Trans Besady", prix:"130 000", heureDepart:"18:00", numero:["034 17 765 18","032 70 263 98","037 80 115 54"] },
{ depart:"Antananarivo", arrivee:"Ambilobe", coop:"Trans Besady", prix:"100 000 / 120 000", heureDepart:"18:00", numero:["034 17 765 18"] },
{ depart:"Antananarivo", arrivee:"Ambanja", coop:"Trans Besady", prix:"", heureDepart:"18:00", numero:["032 67 884 50","034 69 432 24"] },
{ depart:"Antananarivo", arrivee:"Antalaha", coop:"Trans Besady", prix:"", heureDepart:"18:00", numero:["032 67 884 50","034 69 432 24"] },
{ depart:"Antananarivo", arrivee:"Vohemar", coop:"Trans Besady", prix:"", heureDepart:"18:00", numero:["032 67 884 50","034 69 432 24"] },
{ depart:"Antananarivo", arrivee:"Sambava", coop:"Trans Besady", prix:"140 000 / 160 000", heureDepart:"18:00", numero:["034 17 765 18","032 70 263 98"] },
{ depart:"Antananarivo", arrivee:"Andapa", coop:"Trans Besady", prix:"", heureDepart:"18:00", numero:["032 67 884 50","034 69 432 24"] },
{ depart:"Antananarivo", arrivee:"Ankify", coop:"Trans Besady", prix:"100 000 / 110 000", heureDepart:"18:00", numero:["034 17 765 18"] },
{ depart:"Antananarivo", arrivee:"Nosy Be", coop:"Trans Besady", prix:"120 000 / 130 000", heureDepart:"18:00", numero:["034 17 765 18"] },

/* =========================
   🚍 VANOFOTSY
========================= */
{ depart:"Antananarivo", arrivee:"Soavinandriana", coop:"VANOFOTSY", prix:"13 000", heureDepart:"", numero:["034 24 71595","0332475293"] },
{ depart:"Antananarivo", arrivee:"Miarinarivo", coop:"VANOFOTSY", prix:"", heureDepart:"", numero:["034 24 71595","0332475293"] },
{ depart:"Antananarivo", arrivee:"Ambalanirana", coop:"VANOFOTSY", prix:"", heureDepart:"", numero:["034 24 71595","0332475293"] },
{ depart:"Antananarivo", arrivee:"Ifanja", coop:"VANOFOTSY", prix:"", heureDepart:"", numero:["034 24 71595","0332475293"] },
{ depart:"Antananarivo", arrivee:"Analavory", coop:"VANOFOTSY", prix:"", heureDepart:"", numero:["034 24 71595","0332475293"] },

/* =========================
   🚍 TRANSROUTE
========================= */
{ depart:"Antananarivo", arrivee:"Antsiranana", coop:"TRANSROUTE", prix:"", heureDepart:"", numero:["034 36 326 47","032 73 587 22"] },
{ depart:"Antananarivo", arrivee:"Antsohihy", coop:"TRANSROUTE", prix:"", heureDepart:"", numero:["034 36 326 47","032 73 587 22"] },
{ depart:"Antananarivo", arrivee:"Mandritsara", coop:"TRANSROUTE", prix:"", heureDepart:"", numero:["034 36 326 47","032 73 587 22"] },
{ depart:"Antananarivo", arrivee:"Bealalana", coop:"TRANSROUTE", prix:"", heureDepart:"", numero:["034 36 326 47","032 73 587 22"] },
{ depart:"Antananarivo", arrivee:"Ambanja", coop:"TRANSROUTE", prix:"", heureDepart:"", numero:["034 36 326 47","032 73 587 22"] },
{ depart:"Antananarivo", arrivee:"Ambilobe", coop:"TRANSROUTE", prix:"", heureDepart:"", numero:["034 36 326 47","032 73 587 22"] },
{ depart:"Antananarivo", arrivee:"Befandriana", coop:"TRANSROUTE", prix:"", heureDepart:"", numero:["034 36 326 47","032 73 587 22"] }

];

const mapping = {

  Toamasina: [
    "Toamasina",
    "Brickaville",
    "Fenerive Est",
    "Moramanga",
    "Vatomandry",
    "Mahanoro",
    "Ambatomandry",
    "Ilakaka Est"
  ],

  Mahajanga: [
    "Mahajanga",
    "Marovoay",
    "Maevatanana",
    "Ambato Boeny",
    "Mampikony",
    "Antsohihy",
    "Maintirano",
    "Mandritsara",
    "Amboromalandy",
    "Ambondromamy",
    "Ambolomoty"
  ],

  Antsiranana: [
    "Antsiranana",
    "Nosy Be",
    "Sambava",
    "Ambanja",
    "Ambilobe",
    "Ankify",
    "Antalaha",
    "Vohemar",
    "Andapa"
  ],

  Antananarivo: [
    "Miarinarivo",
    "Soavinandriana",
    "Ankadinondry",
    "Tsiroanomandidy",
    "Faratsiho",
    "Analavory",
    "Ifanja",
    "Anjozorobe",
    "Mangamila",
    "Ambatomanjina",
    "Antanetibe",
    "Betatao"
  ]

};
