const busData = [

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
{ depart:"Antananarivo", arrivee:"Maevatanana", coop:"KOFISA", prix:"35 000 / 40 000", heureDepart:"", numero:["033 84 326 63","034 47 429 65"] },

/* =========================
   🚍 COTRANSMA
========================= */
{ depart:"Antananarivo", arrivee:"Mahajanga", coop:"COTRANSMA", prix:"60 000 / 70 000", heureDepart:"", numero:["034 55 364 41"] },
{ depart:"Antananarivo", arrivee:"Maevatanana", coop:"COTRANSMA", prix:"35 000 / 40 000", heureDepart:"", numero:["034 55 364 41"] },

/* =========================
   🚍 COFIMANDIDY
========================= */
{ depart:"Antananarivo", arrivee:"Miarinarivo", coop:"COFIMANDIDY", prix:"8000", heureDepart:"", numero:["033 40 528 72","034 17 339 23"] },
{ depart:"Antananarivo", arrivee:"Ankadinondry", coop:"COFIMANDIDY", prix:"15000", heureDepart:"", numero:["033 40 528 72","034 17 339 23"] },
{ depart:"Antananarivo", arrivee:"Tsiroanomandidy", coop:"COFIMANDIDY", prix:"20000", heureDepart:"", numero:["033 40 528 72","034 17 339 23"] },

/* =========================
   🚍 KOP FMM (NORD)
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
{ depart:"Antananarivo", arrivee:"Ambanja", coop:"FIFIDY", prix:"90 000 / 100 000", heureDepart:"", numero:["032 59 014 45"] },
{ depart:"Antananarivo", arrivee:"Sambava", coop:"FIFIDY", prix:"140 000 / 160 000", heureDepart:"", numero:["032 59 014 45"] },
{ depart:"Antananarivo", arrivee:"Ambilobe", coop:"FIFIDY", prix:"100 000 / 120 000", heureDepart:"", numero:["032 59 014 45"] },
{ depart:"Antananarivo", arrivee:"Antsiranana", coop:"FIFIDY", prix:"130 000", heureDepart:"", numero:["032 59 014 45"] },

/* =========================
   🚍 TRANS BESADY
========================= */
{ depart:"Antananarivo", arrivee:"Sambava", coop:"Trans Besady", prix:"140 000 / 160 000", heureDepart:"18:00", numero:["034 17 765 18","032 70 263 98"] },
{ depart:"Antananarivo", arrivee:"Ambilobe", coop:"Trans Besady", prix:"100 000 / 120 000", heureDepart:"18:00", numero:["034 17 765 18"] },
{ depart:"Antananarivo", arrivee:"Nosy Be", coop:"Trans Besady", prix:"120 000 / 130 000", heureDepart:"18:00", numero:["034 17 765 18"] },

/* =========================
   🚍 TRANSROUTE
========================= */
{ depart:"Antananarivo", arrivee:"Antsiranana", coop:"TRANSROUTE", prix:"", heureDepart:"", numero:["034 36 326 47"] },
{ depart:"Antananarivo", arrivee:"Ambanja", coop:"TRANSROUTE", prix:"", heureDepart:"", numero:["034 36 326 47"] },

/* =========================
   🚍 UTA
========================= */
{ depart:"Antananarivo", arrivee:"Antsiranana", coop:"UTA", prix:"", heureDepart:"06:00 / 18:00", numero:["033 17 349 76"] },
{ depart:"Antananarivo", arrivee:"Mahajanga", coop:"UTA", prix:"", heureDepart:"06:00 / 18:00", numero:["033 17 349 76"] },
{ depart:"Antananarivo", arrivee:"Ambanja", coop:"UTA", prix:"", heureDepart:"06:00 / 18:00", numero:["033 17 349 76"] },

/* =========================
   🚍 FIFIABE
========================= */
{ depart:"Antananarivo", arrivee:"Mampikony", coop:"FIFIABE", prix:"54 000", heureDepart:"14:00 / 15:00", numero:["034 49 096 43"] },
{ depart:"Antananarivo", arrivee:"Antsohihy", coop:"FIFIABE", prix:"60 000", heureDepart:"17:00", numero:["034 49 096 43"] },
{ depart:"Antananarivo", arrivee:"Port Bergé", coop:"FIFIABE", prix:"55 000", heureDepart:"", numero:["034 49 096 43"] },

/* =========================
   🚍 TRANS JIABY
========================= */
{ depart:"Antananarivo", arrivee:"Antsiranana", coop:"Trans JIABY", prix:"", heureDepart:"18:00", numero:["032 68 068 68"] },
{ depart:"Antananarivo", arrivee:"Ambanja", coop:"Trans JIABY", prix:"", heureDepart:"18:00", numero:["032 68 068 68"] },
{ depart:"Antananarivo", arrivee:"Ambilobe", coop:"Trans JIABY", prix:"", heureDepart:"18:00", numero:["032 68 068 68"] },
{ depart:"Antananarivo", arrivee:"Mahajanga", coop:"Trans JIABY", prix:"", heureDepart:"18:00", numero:["032 68 068 68"] }

];

const mapping = {

  Toamasina: ["Toamasina","Brickaville","Fenerive Est"],

  Mahajanga: [
    "Mahajanga",
    "Marovoay",
    "Maevatanana",
    "Ambato Boeny",
    "Mampikony",
    "Antsohihy"
  ],

  Antsiranana: [
    "Antsiranana",
    "Nosy Be",
    "Sambava",
    "Ambanja",
    "Ambilobe"
  ]

};