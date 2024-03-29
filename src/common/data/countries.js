const countriesFR = [
  { id: 4, alpha2: "af", alpha3: "afg", name: "Afghanistan" },
  { id: 710, alpha2: "za", alpha3: "zaf", name: "Afrique du Sud" },
  { id: 8, alpha2: "al", alpha3: "alb", name: "Albanie" },
  { id: 12, alpha2: "dz", alpha3: "dza", name: "Algérie" },
  { id: 276, alpha2: "de", alpha3: "deu", name: "Allemagne" },
  { id: 20, alpha2: "ad", alpha3: "and", name: "Andorre" },
  { id: 24, alpha2: "ao", alpha3: "ago", name: "Angola" },
  { id: 28, alpha2: "ag", alpha3: "atg", name: "Antigua-et-Barbuda" },
  { id: 682, alpha2: "sa", alpha3: "sau", name: "Arabie saoudite" },
  { id: 32, alpha2: "ar", alpha3: "arg", name: "Argentine" },
  { id: 51, alpha2: "am", alpha3: "arm", name: "Arménie" },
  { id: 36, alpha2: "au", alpha3: "aus", name: "Australie" },
  { id: 40, alpha2: "at", alpha3: "aut", name: "Autriche" },
  { id: 31, alpha2: "az", alpha3: "aze", name: "Azerbaïdjan" },
  { id: 44, alpha2: "bs", alpha3: "bhs", name: "Bahamas" },
  { id: 48, alpha2: "bh", alpha3: "bhr", name: "Bahreïn" },
  { id: 50, alpha2: "bd", alpha3: "bgd", name: "Bangladesh" },
  { id: 52, alpha2: "bb", alpha3: "brb", name: "Barbade" },
  { id: 112, alpha2: "by", alpha3: "blr", name: "Biélorussie" },
  { id: 56, alpha2: "be", alpha3: "bel", name: "Belgique" },
  { id: 84, alpha2: "bz", alpha3: "blz", name: "Belize" },
  { id: 204, alpha2: "bj", alpha3: "ben", name: "Bénin" },
  { id: 64, alpha2: "bt", alpha3: "btn", name: "Bhoutan" },
  { id: 68, alpha2: "bo", alpha3: "bol", name: "Bolivie" },
  { id: 70, alpha2: "ba", alpha3: "bih", name: "Bosnie-Herzégovine" },
  { id: 72, alpha2: "bw", alpha3: "bwa", name: "Botswana" },
  { id: 76, alpha2: "br", alpha3: "bra", name: "Brésil" },
  { id: 96, alpha2: "bn", alpha3: "brn", name: "Brunei" },
  { id: 100, alpha2: "bg", alpha3: "bgr", name: "Bulgarie" },
  { id: 854, alpha2: "bf", alpha3: "bfa", name: "Burkina Faso" },
  { id: 108, alpha2: "bi", alpha3: "bdi", name: "Burundi" },
  { id: 116, alpha2: "kh", alpha3: "khm", name: "Cambodge" },
  { id: 120, alpha2: "cm", alpha3: "cmr", name: "Cameroun" },
  { id: 124, alpha2: "ca", alpha3: "can", name: "Canada" },
  { id: 132, alpha2: "cv", alpha3: "cpv", name: "Cap-Vert" },
  { id: 140, alpha2: "cf", alpha3: "caf", name: "République centrafricaine" },
  { id: 152, alpha2: "cl", alpha3: "chl", name: "Chili" },
  { id: 156, alpha2: "cn", alpha3: "chn", name: "Chine" },
  { id: 196, alpha2: "cy", alpha3: "cyp", name: "Chypre" },
  { id: 170, alpha2: "co", alpha3: "col", name: "Colombie" },
  { id: 174, alpha2: "km", alpha3: "com", name: "Comores" },
  { id: 178, alpha2: "cg", alpha3: "cog", name: "République du Congo" },
  { id: 180, alpha2: "cd", alpha3: "cod", name: "République démocratique du Congo" },
  { id: 410, alpha2: "kr", alpha3: "kor", name: "Corée du Sud" },
  { id: 408, alpha2: "kp", alpha3: "prk", name: "Corée du Nord" },
  { id: 188, alpha2: "cr", alpha3: "cri", name: "Costa Rica" },
  { id: 384, alpha2: "ci", alpha3: "civ", name: "Côte d'Ivoire" },
  { id: 191, alpha2: "hr", alpha3: "hrv", name: "Croatie" },
  { id: 192, alpha2: "cu", alpha3: "cub", name: "Cuba" },
  { id: 208, alpha2: "dk", alpha3: "dnk", name: "Danemark" },
  { id: 262, alpha2: "dj", alpha3: "dji", name: "Djibouti" },
  { id: 214, alpha2: "do", alpha3: "dom", name: "République dominicaine" },
  { id: 212, alpha2: "dm", alpha3: "dma", name: "Dominique" },
  { id: 818, alpha2: "eg", alpha3: "egy", name: "Égypte" },
  { id: 222, alpha2: "sv", alpha3: "slv", name: "Salvador" },
  { id: 784, alpha2: "ae", alpha3: "are", name: "Émirats arabes unis" },
  { id: 218, alpha2: "ec", alpha3: "ecu", name: "Équateur" },
  { id: 232, alpha2: "er", alpha3: "eri", name: "Érythrée" },
  { id: 724, alpha2: "es", alpha3: "esp", name: "Espagne" },
  { id: 233, alpha2: "ee", alpha3: "est", name: "Estonie" },
  { id: 840, alpha2: "us", alpha3: "usa", name: "États-Unis" },
  { id: 231, alpha2: "et", alpha3: "eth", name: "Éthiopie" },
  { id: 242, alpha2: "fj", alpha3: "fji", name: "Fidji" },
  { id: 246, alpha2: "fi", alpha3: "fin", name: "Finlande" },
  { id: 250, alpha2: "fr", alpha3: "fra", name: "France" },
  { id: 266, alpha2: "ga", alpha3: "gab", name: "Gabon" },
  { id: 270, alpha2: "gm", alpha3: "gmb", name: "Gambie" },
  { id: 268, alpha2: "ge", alpha3: "geo", name: "Géorgie" },
  { id: 288, alpha2: "gh", alpha3: "gha", name: "Ghana" },
  { id: 300, alpha2: "gr", alpha3: "grc", name: "Grèce" },
  { id: 308, alpha2: "gd", alpha3: "grd", name: "Grenade" },
  { id: 320, alpha2: "gt", alpha3: "gtm", name: "Guatemala" },
  { id: 324, alpha2: "gn", alpha3: "gin", name: "Guinée" },
  { id: 624, alpha2: "gw", alpha3: "gnb", name: "Guinée-Bissau" },
  { id: 226, alpha2: "gq", alpha3: "gnq", name: "Guinée équatoriale" },
  { id: 328, alpha2: "gy", alpha3: "guy", name: "Guyana" },
  { id: 332, alpha2: "ht", alpha3: "hti", name: "Haïti" },
  { id: 340, alpha2: "hn", alpha3: "hnd", name: "Honduras" },
  { id: 348, alpha2: "hu", alpha3: "hun", name: "Hongrie" },
  { id: 356, alpha2: "in", alpha3: "ind", name: "Inde" },
  { id: 360, alpha2: "id", alpha3: "idn", name: "Indonésie" },
  { id: 364, alpha2: "ir", alpha3: "irn", name: "Iran" },
  { id: 368, alpha2: "iq", alpha3: "irq", name: "Irak" },
  { id: 372, alpha2: "ie", alpha3: "irl", name: "Irlande" },
  { id: 352, alpha2: "is", alpha3: "isl", name: "Islande" },
  { id: 376, alpha2: "il", alpha3: "isr", name: "Israël" },
  { id: 380, alpha2: "it", alpha3: "ita", name: "Italie" },
  { id: 388, alpha2: "jm", alpha3: "jam", name: "Jamaïque" },
  { id: 392, alpha2: "jp", alpha3: "jpn", name: "Japon" },
  { id: 400, alpha2: "jo", alpha3: "jor", name: "Jordanie" },
  { id: 398, alpha2: "kz", alpha3: "kaz", name: "Kazakhstan" },
  { id: 404, alpha2: "ke", alpha3: "ken", name: "Kenya" },
  { id: 417, alpha2: "kg", alpha3: "kgz", name: "Kirghizistan" },
  { id: 296, alpha2: "ki", alpha3: "kir", name: "Kiribati" },
  { id: 414, alpha2: "kw", alpha3: "kwt", name: "Koweït" },
  { id: 418, alpha2: "la", alpha3: "lao", name: "Laos" },
  { id: 426, alpha2: "ls", alpha3: "lso", name: "Lesotho" },
  { id: 428, alpha2: "lv", alpha3: "lva", name: "Lettonie" },
  { id: 422, alpha2: "lb", alpha3: "lbn", name: "Liban" },
  { id: 430, alpha2: "lr", alpha3: "lbr", name: "Liberia" },
  { id: 434, alpha2: "ly", alpha3: "lby", name: "Libye" },
  { id: 438, alpha2: "li", alpha3: "lie", name: "Liechtenstein" },
  { id: 440, alpha2: "lt", alpha3: "ltu", name: "Lituanie" },
  { id: 442, alpha2: "lu", alpha3: "lux", name: "Luxembourg" },
  { id: 807, alpha2: "mk", alpha3: "mkd", name: "Macédoine du Nord" },
  { id: 450, alpha2: "mg", alpha3: "mdg", name: "Madagascar" },
  { id: 458, alpha2: "my", alpha3: "mys", name: "Malaisie" },
  { id: 454, alpha2: "mw", alpha3: "mwi", name: "Malawi" },
  { id: 462, alpha2: "mv", alpha3: "mdv", name: "Maldives" },
  { id: 466, alpha2: "ml", alpha3: "mli", name: "Mali" },
  { id: 470, alpha2: "mt", alpha3: "mlt", name: "Malte" },
  { id: 504, alpha2: "ma", alpha3: "mar", name: "Maroc" },
  { id: 584, alpha2: "mh", alpha3: "mhl", name: "Îles Marshall" },
  { id: 480, alpha2: "mu", alpha3: "mus", name: "Maurice" },
  { id: 478, alpha2: "mr", alpha3: "mrt", name: "Mauritanie" },
  { id: 484, alpha2: "mx", alpha3: "mex", name: "Mexique" },
  { id: 583, alpha2: "fm", alpha3: "fsm", name: "États fédérés de Micronésie" },
  { id: 498, alpha2: "md", alpha3: "mda", name: "Moldavie" },
  { id: 492, alpha2: "mc", alpha3: "mco", name: "Monaco" },
  { id: 496, alpha2: "mn", alpha3: "mng", name: "Mongolie" },
  { id: 499, alpha2: "me", alpha3: "mne", name: "Monténégro" },
  { id: 508, alpha2: "mz", alpha3: "moz", name: "Mozambique" },
  { id: 104, alpha2: "mm", alpha3: "mmr", name: "Birmanie" },
  { id: 516, alpha2: "na", alpha3: "nam", name: "Namibie" },
  { id: 520, alpha2: "nr", alpha3: "nru", name: "Nauru" },
  { id: 524, alpha2: "np", alpha3: "npl", name: "Népal" },
  { id: 558, alpha2: "ni", alpha3: "nic", name: "Nicaragua" },
  { id: 562, alpha2: "ne", alpha3: "ner", name: "Niger" },
  { id: 566, alpha2: "ng", alpha3: "nga", name: "Nigeria" },
  { id: 578, alpha2: "no", alpha3: "nor", name: "Norvège" },
  { id: 554, alpha2: "nz", alpha3: "nzl", name: "Nouvelle-Zélande" },
  { id: 512, alpha2: "om", alpha3: "omn", name: "Oman" },
  { id: 800, alpha2: "ug", alpha3: "uga", name: "Ouganda" },
  { id: 860, alpha2: "uz", alpha3: "uzb", name: "Ouzbékistan" },
  { id: 586, alpha2: "pk", alpha3: "pak", name: "Pakistan" },
  { id: 585, alpha2: "pw", alpha3: "plw", name: "Palaos" },
  { id: 591, alpha2: "pa", alpha3: "pan", name: "Panama" },
  { id: 598, alpha2: "pg", alpha3: "png", name: "Papouasie-Nouvelle-Guinée" },
  { id: 600, alpha2: "py", alpha3: "pry", name: "Paraguay" },
  { id: 528, alpha2: "nl", alpha3: "nld", name: "Pays-Bas" },
  { id: 604, alpha2: "pe", alpha3: "per", name: "Pérou" },
  { id: 608, alpha2: "ph", alpha3: "phl", name: "Philippines" },
  { id: 616, alpha2: "pl", alpha3: "pol", name: "Pologne" },
  { id: 620, alpha2: "pt", alpha3: "prt", name: "Portugal" },
  { id: 634, alpha2: "qa", alpha3: "qat", name: "Qatar" },
  { id: 642, alpha2: "ro", alpha3: "rou", name: "Roumanie" },
  { id: 826, alpha2: "gb", alpha3: "gbr", name: "Royaume-Uni" },
  { id: 643, alpha2: "ru", alpha3: "rus", name: "Russie" },
  { id: 646, alpha2: "rw", alpha3: "rwa", name: "Rwanda" },
  { id: 659, alpha2: "kn", alpha3: "kna", name: "Saint-Christophe-et-Niévès" },
  { id: 674, alpha2: "sm", alpha3: "smr", name: "Saint-Marin" },
  { id: 670, alpha2: "vc", alpha3: "vct", name: "Saint-Vincent-et-les-Grenadines" },
  { id: 662, alpha2: "lc", alpha3: "lca", name: "Sainte-Lucie" },
  { id: 90, alpha2: "sb", alpha3: "slb", name: "Îles Salomon" },
  { id: 882, alpha2: "ws", alpha3: "wsm", name: "Samoa" },
  { id: 678, alpha2: "st", alpha3: "stp", name: "Sao Tomé-et-Principe" },
  { id: 686, alpha2: "sn", alpha3: "sen", name: "Sénégal" },
  { id: 688, alpha2: "rs", alpha3: "srb", name: "Serbie" },
  { id: 690, alpha2: "sc", alpha3: "syc", name: "Seychelles" },
  { id: 694, alpha2: "sl", alpha3: "sle", name: "Sierra Leone" },
  { id: 702, alpha2: "sg", alpha3: "sgp", name: "Singapour" },
  { id: 703, alpha2: "sk", alpha3: "svk", name: "Slovaquie" },
  { id: 705, alpha2: "si", alpha3: "svn", name: "Slovénie" },
  { id: 706, alpha2: "so", alpha3: "som", name: "Somalie" },
  { id: 729, alpha2: "sd", alpha3: "sdn", name: "Soudan" },
  { id: 728, alpha2: "ss", alpha3: "ssd", name: "Soudan du Sud" },
  { id: 144, alpha2: "lk", alpha3: "lka", name: "Sri Lanka" },
  { id: 752, alpha2: "se", alpha3: "swe", name: "Suède" },
  { id: 756, alpha2: "ch", alpha3: "che", name: "Suisse" },
  { id: 740, alpha2: "sr", alpha3: "sur", name: "Suriname" },
  { id: 748, alpha2: "sz", alpha3: "swz", name: "Eswatini" },
  { id: 760, alpha2: "sy", alpha3: "syr", name: "Syrie" },
  { id: 762, alpha2: "tj", alpha3: "tjk", name: "Tadjikistan" },
  { id: 834, alpha2: "tz", alpha3: "tza", name: "Tanzanie" },
  { id: 148, alpha2: "td", alpha3: "tcd", name: "Tchad" },
  { id: 203, alpha2: "cz", alpha3: "cze", name: "Tchéquie" },
  { id: 764, alpha2: "th", alpha3: "tha", name: "Thaïlande" },
  { id: 626, alpha2: "tl", alpha3: "tls", name: "Timor oriental" },
  { id: 768, alpha2: "tg", alpha3: "tgo", name: "Togo" },
  { id: 776, alpha2: "to", alpha3: "ton", name: "Tonga" },
  { id: 780, alpha2: "tt", alpha3: "tto", name: "Trinité-et-Tobago" },
  { id: 788, alpha2: "tn", alpha3: "tun", name: "Tunisie" },
  { id: 795, alpha2: "tm", alpha3: "tkm", name: "Turkménistan" },
  { id: 792, alpha2: "tr", alpha3: "tur", name: "Turquie" },
  { id: 798, alpha2: "tv", alpha3: "tuv", name: "Tuvalu" },
  { id: 804, alpha2: "ua", alpha3: "ukr", name: "Ukraine" },
  { id: 858, alpha2: "uy", alpha3: "ury", name: "Uruguay" },
  { id: 548, alpha2: "vu", alpha3: "vut", name: "Vanuatu" },
  { id: 862, alpha2: "ve", alpha3: "ven", name: "Venezuela" },
  { id: 704, alpha2: "vn", alpha3: "vnm", name: "Viêt Nam" },
  { id: 887, alpha2: "ye", alpha3: "yem", name: "Yémen" },
  { id: 894, alpha2: "zm", alpha3: "zmb", name: "Zambie" },
  { id: 716, alpha2: "zw", alpha3: "zwe", name: "Zimbabwe" },
];

const countriesEN = [
  { id: 4, alpha2: "af", alpha3: "afg", name: "Afghanistan" },
  { id: 8, alpha2: "al", alpha3: "alb", name: "Albania" },
  { id: 12, alpha2: "dz", alpha3: "dza", name: "Algeria" },
  { id: 20, alpha2: "ad", alpha3: "and", name: "Andorra" },
  { id: 24, alpha2: "ao", alpha3: "ago", name: "Angola" },
  { id: 28, alpha2: "ag", alpha3: "atg", name: "Antigua and Barbuda" },
  { id: 32, alpha2: "ar", alpha3: "arg", name: "Argentina" },
  { id: 51, alpha2: "am", alpha3: "arm", name: "Armenia" },
  { id: 36, alpha2: "au", alpha3: "aus", name: "Australia" },
  { id: 40, alpha2: "at", alpha3: "aut", name: "Austria" },
  { id: 31, alpha2: "az", alpha3: "aze", name: "Azerbaijan" },
  { id: 44, alpha2: "bs", alpha3: "bhs", name: "Bahamas" },
  { id: 48, alpha2: "bh", alpha3: "bhr", name: "Bahrain" },
  { id: 50, alpha2: "bd", alpha3: "bgd", name: "Bangladesh" },
  { id: 52, alpha2: "bb", alpha3: "brb", name: "Barbados" },
  { id: 112, alpha2: "by", alpha3: "blr", name: "Belarus" },
  { id: 56, alpha2: "be", alpha3: "bel", name: "Belgium" },
  { id: 84, alpha2: "bz", alpha3: "blz", name: "Belize" },
  { id: 204, alpha2: "bj", alpha3: "ben", name: "Benin" },
  { id: 64, alpha2: "bt", alpha3: "btn", name: "Bhutan" },
  { id: 68, alpha2: "bo", alpha3: "bol", name: "Bolivia (Plurinational State of)" },
  { id: 70, alpha2: "ba", alpha3: "bih", name: "Bosnia and Herzegovina" },
  { id: 72, alpha2: "bw", alpha3: "bwa", name: "Botswana" },
  { id: 76, alpha2: "br", alpha3: "bra", name: "Brazil" },
  { id: 96, alpha2: "bn", alpha3: "brn", name: "Brunei Darussalam" },
  { id: 100, alpha2: "bg", alpha3: "bgr", name: "Bulgaria" },
  { id: 854, alpha2: "bf", alpha3: "bfa", name: "Burkina Faso" },
  { id: 108, alpha2: "bi", alpha3: "bdi", name: "Burundi" },
  { id: 132, alpha2: "cv", alpha3: "cpv", name: "Cabo Verde" },
  { id: 116, alpha2: "kh", alpha3: "khm", name: "Cambodia" },
  { id: 120, alpha2: "cm", alpha3: "cmr", name: "Cameroon" },
  { id: 124, alpha2: "ca", alpha3: "can", name: "Canada" },
  { id: 140, alpha2: "cf", alpha3: "caf", name: "Central African Republic" },
  { id: 148, alpha2: "td", alpha3: "tcd", name: "Chad" },
  { id: 152, alpha2: "cl", alpha3: "chl", name: "Chile" },
  { id: 156, alpha2: "cn", alpha3: "chn", name: "China" },
  { id: 170, alpha2: "co", alpha3: "col", name: "Colombia" },
  { id: 174, alpha2: "km", alpha3: "com", name: "Comoros" },
  { id: 178, alpha2: "cg", alpha3: "cog", name: "Congo" },
  { id: 180, alpha2: "cd", alpha3: "cod", name: "Congo, Democratic Republic of the" },
  { id: 188, alpha2: "cr", alpha3: "cri", name: "Costa Rica" },
  { id: 384, alpha2: "ci", alpha3: "civ", name: "Côte d'Ivoire" },
  { id: 191, alpha2: "hr", alpha3: "hrv", name: "Croatia" },
  { id: 192, alpha2: "cu", alpha3: "cub", name: "Cuba" },
  { id: 196, alpha2: "cy", alpha3: "cyp", name: "Cyprus" },
  { id: 203, alpha2: "cz", alpha3: "cze", name: "Czechia" },
  { id: 208, alpha2: "dk", alpha3: "dnk", name: "Denmark" },
  { id: 262, alpha2: "dj", alpha3: "dji", name: "Djibouti" },
  { id: 212, alpha2: "dm", alpha3: "dma", name: "Dominica" },
  { id: 214, alpha2: "do", alpha3: "dom", name: "Dominican Republic" },
  { id: 218, alpha2: "ec", alpha3: "ecu", name: "Ecuador" },
  { id: 818, alpha2: "eg", alpha3: "egy", name: "Egypt" },
  { id: 222, alpha2: "sv", alpha3: "slv", name: "El Salvador" },
  { id: 226, alpha2: "gq", alpha3: "gnq", name: "Equatorial Guinea" },
  { id: 232, alpha2: "er", alpha3: "eri", name: "Eritrea" },
  { id: 233, alpha2: "ee", alpha3: "est", name: "Estonia" },
  { id: 748, alpha2: "sz", alpha3: "swz", name: "Eswatini" },
  { id: 231, alpha2: "et", alpha3: "eth", name: "Ethiopia" },
  { id: 242, alpha2: "fj", alpha3: "fji", name: "Fiji" },
  { id: 246, alpha2: "fi", alpha3: "fin", name: "Finland" },
  { id: 250, alpha2: "fr", alpha3: "fra", name: "France" },
  { id: 266, alpha2: "ga", alpha3: "gab", name: "Gabon" },
  { id: 270, alpha2: "gm", alpha3: "gmb", name: "Gambia" },
  { id: 268, alpha2: "ge", alpha3: "geo", name: "Georgia" },
  { id: 276, alpha2: "de", alpha3: "deu", name: "Germany" },
  { id: 288, alpha2: "gh", alpha3: "gha", name: "Ghana" },
  { id: 300, alpha2: "gr", alpha3: "grc", name: "Greece" },
  { id: 308, alpha2: "gd", alpha3: "grd", name: "Grenada" },
  { id: 320, alpha2: "gt", alpha3: "gtm", name: "Guatemala" },
  { id: 324, alpha2: "gn", alpha3: "gin", name: "Guinea" },
  { id: 624, alpha2: "gw", alpha3: "gnb", name: "Guinea-Bissau" },
  { id: 328, alpha2: "gy", alpha3: "guy", name: "Guyana" },
  { id: 332, alpha2: "ht", alpha3: "hti", name: "Haiti" },
  { id: 340, alpha2: "hn", alpha3: "hnd", name: "Honduras" },
  { id: 348, alpha2: "hu", alpha3: "hun", name: "Hungary" },
  { id: 352, alpha2: "is", alpha3: "isl", name: "Iceland" },
  { id: 356, alpha2: "in", alpha3: "ind", name: "India" },
  { id: 360, alpha2: "id", alpha3: "idn", name: "Indonesia" },
  { id: 364, alpha2: "ir", alpha3: "irn", name: "Iran (Islamic Republic of)" },
  { id: 368, alpha2: "iq", alpha3: "irq", name: "Iraq" },
  { id: 372, alpha2: "ie", alpha3: "irl", name: "Ireland" },
  { id: 376, alpha2: "il", alpha3: "isr", name: "Israel" },
  { id: 380, alpha2: "it", alpha3: "ita", name: "Italy" },
  { id: 388, alpha2: "jm", alpha3: "jam", name: "Jamaica" },
  { id: 392, alpha2: "jp", alpha3: "jpn", name: "Japan" },
  { id: 400, alpha2: "jo", alpha3: "jor", name: "Jordan" },
  { id: 398, alpha2: "kz", alpha3: "kaz", name: "Kazakhstan" },
  { id: 404, alpha2: "ke", alpha3: "ken", name: "Kenya" },
  { id: 296, alpha2: "ki", alpha3: "kir", name: "Kiribati" },
  { id: 408, alpha2: "kp", alpha3: "prk", name: "Korea (Democratic People's Republic of)" },
  { id: 410, alpha2: "kr", alpha3: "kor", name: "Korea, Republic of" },
  { id: 414, alpha2: "kw", alpha3: "kwt", name: "Kuwait" },
  { id: 417, alpha2: "kg", alpha3: "kgz", name: "Kyrgyzstan" },
  { id: 418, alpha2: "la", alpha3: "lao", name: "Lao People's Democratic Republic" },
  { id: 428, alpha2: "lv", alpha3: "lva", name: "Latvia" },
  { id: 422, alpha2: "lb", alpha3: "lbn", name: "Lebanon" },
  { id: 426, alpha2: "ls", alpha3: "lso", name: "Lesotho" },
  { id: 430, alpha2: "lr", alpha3: "lbr", name: "Liberia" },
  { id: 434, alpha2: "ly", alpha3: "lby", name: "Libya" },
  { id: 438, alpha2: "li", alpha3: "lie", name: "Liechtenstein" },
  { id: 440, alpha2: "lt", alpha3: "ltu", name: "Lithuania" },
  { id: 442, alpha2: "lu", alpha3: "lux", name: "Luxembourg" },
  { id: 450, alpha2: "mg", alpha3: "mdg", name: "Madagascar" },
  { id: 454, alpha2: "mw", alpha3: "mwi", name: "Malawi" },
  { id: 458, alpha2: "my", alpha3: "mys", name: "Malaysia" },
  { id: 462, alpha2: "mv", alpha3: "mdv", name: "Maldives" },
  { id: 466, alpha2: "ml", alpha3: "mli", name: "Mali" },
  { id: 470, alpha2: "mt", alpha3: "mlt", name: "Malta" },
  { id: 584, alpha2: "mh", alpha3: "mhl", name: "Marshall Islands" },
  { id: 478, alpha2: "mr", alpha3: "mrt", name: "Mauritania" },
  { id: 480, alpha2: "mu", alpha3: "mus", name: "Mauritius" },
  { id: 484, alpha2: "mx", alpha3: "mex", name: "Mexico" },
  { id: 583, alpha2: "fm", alpha3: "fsm", name: "Micronesia (Federated States of)" },
  { id: 498, alpha2: "md", alpha3: "mda", name: "Moldova, Republic of" },
  { id: 492, alpha2: "mc", alpha3: "mco", name: "Monaco" },
  { id: 496, alpha2: "mn", alpha3: "mng", name: "Mongolia" },
  { id: 499, alpha2: "me", alpha3: "mne", name: "Montenegro" },
  { id: 504, alpha2: "ma", alpha3: "mar", name: "Morocco" },
  { id: 508, alpha2: "mz", alpha3: "moz", name: "Mozambique" },
  { id: 104, alpha2: "mm", alpha3: "mmr", name: "Myanmar" },
  { id: 516, alpha2: "na", alpha3: "nam", name: "Namibia" },
  { id: 520, alpha2: "nr", alpha3: "nru", name: "Nauru" },
  { id: 524, alpha2: "np", alpha3: "npl", name: "Nepal" },
  { id: 528, alpha2: "nl", alpha3: "nld", name: "Netherlands" },
  { id: 554, alpha2: "nz", alpha3: "nzl", name: "New Zealand" },
  { id: 558, alpha2: "ni", alpha3: "nic", name: "Nicaragua" },
  { id: 562, alpha2: "ne", alpha3: "ner", name: "Niger" },
  { id: 566, alpha2: "ng", alpha3: "nga", name: "Nigeria" },
  { id: 807, alpha2: "mk", alpha3: "mkd", name: "North Macedonia" },
  { id: 578, alpha2: "no", alpha3: "nor", name: "Norway" },
  { id: 512, alpha2: "om", alpha3: "omn", name: "Oman" },
  { id: 586, alpha2: "pk", alpha3: "pak", name: "Pakistan" },
  { id: 585, alpha2: "pw", alpha3: "plw", name: "Palau" },
  { id: 591, alpha2: "pa", alpha3: "pan", name: "Panama" },
  { id: 598, alpha2: "pg", alpha3: "png", name: "Papua New Guinea" },
  { id: 600, alpha2: "py", alpha3: "pry", name: "Paraguay" },
  { id: 604, alpha2: "pe", alpha3: "per", name: "Peru" },
  { id: 608, alpha2: "ph", alpha3: "phl", name: "Philippines" },
  { id: 616, alpha2: "pl", alpha3: "pol", name: "Poland" },
  { id: 620, alpha2: "pt", alpha3: "prt", name: "Portugal" },
  { id: 634, alpha2: "qa", alpha3: "qat", name: "Qatar" },
  { id: 642, alpha2: "ro", alpha3: "rou", name: "Romania" },
  { id: 643, alpha2: "ru", alpha3: "rus", name: "Russian Federation" },
  { id: 646, alpha2: "rw", alpha3: "rwa", name: "Rwanda" },
  { id: 659, alpha2: "kn", alpha3: "kna", name: "Saint Kitts and Nevis" },
  { id: 662, alpha2: "lc", alpha3: "lca", name: "Saint Lucia" },
  { id: 670, alpha2: "vc", alpha3: "vct", name: "Saint Vincent and the Grenadines" },
  { id: 882, alpha2: "ws", alpha3: "wsm", name: "Samoa" },
  { id: 674, alpha2: "sm", alpha3: "smr", name: "San Marino" },
  { id: 678, alpha2: "st", alpha3: "stp", name: "Sao Tome and Principe" },
  { id: 682, alpha2: "sa", alpha3: "sau", name: "Saudi Arabia" },
  { id: 686, alpha2: "sn", alpha3: "sen", name: "Senegal" },
  { id: 688, alpha2: "rs", alpha3: "srb", name: "Serbia" },
  { id: 690, alpha2: "sc", alpha3: "syc", name: "Seychelles" },
  { id: 694, alpha2: "sl", alpha3: "sle", name: "Sierra Leone" },
  { id: 702, alpha2: "sg", alpha3: "sgp", name: "Singapore" },
  { id: 703, alpha2: "sk", alpha3: "svk", name: "Slovakia" },
  { id: 705, alpha2: "si", alpha3: "svn", name: "Slovenia" },
  { id: 90, alpha2: "sb", alpha3: "slb", name: "Solomon Islands" },
  { id: 706, alpha2: "so", alpha3: "som", name: "Somalia" },
  { id: 710, alpha2: "za", alpha3: "zaf", name: "South Africa" },
  { id: 728, alpha2: "ss", alpha3: "ssd", name: "South Sudan" },
  { id: 724, alpha2: "es", alpha3: "esp", name: "Spain" },
  { id: 144, alpha2: "lk", alpha3: "lka", name: "Sri Lanka" },
  { id: 729, alpha2: "sd", alpha3: "sdn", name: "Sudan" },
  { id: 740, alpha2: "sr", alpha3: "sur", name: "Suriname" },
  { id: 752, alpha2: "se", alpha3: "swe", name: "Sweden" },
  { id: 756, alpha2: "ch", alpha3: "che", name: "Switzerland" },
  { id: 760, alpha2: "sy", alpha3: "syr", name: "Syrian Arab Republic" },
  { id: 762, alpha2: "tj", alpha3: "tjk", name: "Tajikistan" },
  { id: 834, alpha2: "tz", alpha3: "tza", name: "Tanzania, United Republic of" },
  { id: 764, alpha2: "th", alpha3: "tha", name: "Thailand" },
  { id: 626, alpha2: "tl", alpha3: "tls", name: "Timor-Leste" },
  { id: 768, alpha2: "tg", alpha3: "tgo", name: "Togo" },
  { id: 776, alpha2: "to", alpha3: "ton", name: "Tonga" },
  { id: 780, alpha2: "tt", alpha3: "tto", name: "Trinidad and Tobago" },
  { id: 788, alpha2: "tn", alpha3: "tun", name: "Tunisia" },
  { id: 792, alpha2: "tr", alpha3: "tur", name: "Türkiye" },
  { id: 795, alpha2: "tm", alpha3: "tkm", name: "Turkmenistan" },
  { id: 798, alpha2: "tv", alpha3: "tuv", name: "Tuvalu" },
  { id: 800, alpha2: "ug", alpha3: "uga", name: "Uganda" },
  { id: 804, alpha2: "ua", alpha3: "ukr", name: "Ukraine" },
  { id: 784, alpha2: "ae", alpha3: "are", name: "United Arab Emirates" },
  { id: 826, alpha2: "gb", alpha3: "gbr", name: "United Kingdom of Great Britain and Northern Ireland" },
  { id: 840, alpha2: "us", alpha3: "usa", name: "United States of America" },
  { id: 858, alpha2: "uy", alpha3: "ury", name: "Uruguay" },
  { id: 860, alpha2: "uz", alpha3: "uzb", name: "Uzbekistan" },
  { id: 548, alpha2: "vu", alpha3: "vut", name: "Vanuatu" },
  { id: 862, alpha2: "ve", alpha3: "ven", name: "Venezuela (Bolivarian Republic of)" },
  { id: 704, alpha2: "vn", alpha3: "vnm", name: "Viet Nam" },
  { id: 887, alpha2: "ye", alpha3: "yem", name: "Yemen" },
  { id: 894, alpha2: "zm", alpha3: "zmb", name: "Zambia" },
  { id: 716, alpha2: "zw", alpha3: "zwe", name: "Zimbabwe" },
];

const countriesPhonesCodes = [
  { country: "Afghanistan", code: "93", iso: "AF" },
  { country: "Albania", code: "355", iso: "AL" },
  { country: "Algeria", code: "213", iso: "DZ" },
  { country: "American Samoa", code: "1-684", iso: "AS" },
  { country: "Andorra", code: "376", iso: "AD" },
  { country: "Angola", code: "244", iso: "AO" },
  { country: "Anguilla", code: "1-264", iso: "AI" },
  { country: "Antarctica", code: "672", iso: "AQ" },
  { country: "Antigua and Barbuda", code: "1-268", iso: "AG" },
  { country: "Argentina", code: "54", iso: "AR" },
  { country: "Armenia", code: "374", iso: "AM" },
  { country: "Aruba", code: "297", iso: "AW" },
  { country: "Australia", code: "61", iso: "AU" },
  { country: "Austria", code: "43", iso: "AT" },
  { country: "Azerbaijan", code: "994", iso: "AZ" },
  { country: "Bahamas", code: "1-242", iso: "BS" },
  { country: "Bahrain", code: "973", iso: "BH" },
  { country: "Bangladesh", code: "880", iso: "BD" },
  { country: "Barbados", code: "1-246", iso: "BB" },
  { country: "Belarus", code: "375", iso: "BY" },
  { country: "Belgium", code: "32", iso: "BE" },
  { country: "Belize", code: "501", iso: "BZ" },
  { country: "Benin", code: "229", iso: "BJ" },
  { country: "Bermuda", code: "1-441", iso: "BM" },
  { country: "Bhutan", code: "975", iso: "BT" },
  { country: "Bolivia", code: "591", iso: "BO" },
  { country: "Bosnia and Herzegovina", code: "387", iso: "BA" },
  { country: "Botswana", code: "267", iso: "BW" },
  { country: "Brazil", code: "55", iso: "BR" },
  { country: "British Indian Ocean Territory", code: "246", iso: "IO" },
  { country: "British Virgin Islands", code: "1-284", iso: "VG" },
  { country: "Brunei", code: "673", iso: "BN" },
  { country: "Bulgaria", code: "359", iso: "BG" },
  { country: "Burkina Faso", code: "226", iso: "BF" },
  { country: "Burundi", code: "257", iso: "BI" },
  { country: "Cambodia", code: "855", iso: "KH" },
  { country: "Cameroon", code: "237", iso: "CM" },
  { country: "Canada", code: "1", iso: "CA" },
  { country: "Cape Verde", code: "238", iso: "CV" },
  { country: "Cayman Islands", code: "1-345", iso: "KY" },
  { country: "Central African Republic", code: "236", iso: "CF" },
  { country: "Chad", code: "235", iso: "TD" },
  { country: "Chile", code: "56", iso: "CL" },
  { country: "China", code: "86", iso: "CN" },
  { country: "Christmas Island", code: "61", iso: "CX" },
  { country: "Cocos Islands", code: "61", iso: "CC" },
  { country: "Colombia", code: "57", iso: "CO" },
  { country: "Comoros", code: "269", iso: "KM" },
  { country: "Cook Islands", code: "682", iso: "CK" },
  { country: "Costa Rica", code: "506", iso: "CR" },
  { country: "Croatia", code: "385", iso: "HR" },
  { country: "Cuba", code: "53", iso: "CU" },
  { country: "Curacao", code: "599", iso: "CW" },
  { country: "Cyprus", code: "357", iso: "CY" },
  { country: "Czech Republic", code: "420", iso: "CZ" },
  { country: "Democratic Republic of the Congo", code: "243", iso: "CD" },
  { country: "Denmark", code: "45", iso: "DK" },
  { country: "Djibouti", code: "253", iso: "DJ" },
  { country: "Dominica", code: "1-767", iso: "DM" },
  { country: "Dominican Republic", code: "1-809, 1-829, 1-849", iso: "DO" },
  { country: "East Timor", code: "670", iso: "TL" },
  { country: "Ecuador", code: "593", iso: "EC" },
  { country: "Egypt", code: "20", iso: "EG" },
  { country: "El Salvador", code: "503", iso: "SV" },
  { country: "Equatorial Guinea", code: "240", iso: "GQ" },
  { country: "Eritrea", code: "291", iso: "ER" },
  { country: "Estonia", code: "372", iso: "EE" },
  { country: "Ethiopia", code: "251", iso: "ET" },
  { country: "Falkland Islands", code: "500", iso: "FK" },
  { country: "Faroe Islands", code: "298", iso: "FO" },
  { country: "Fiji", code: "679", iso: "FJ" },
  { country: "Finland", code: "358", iso: "FI" },
  { country: "France", code: "33", iso: "FR" },
  { country: "French Polynesia", code: "689", iso: "PF" },
  { country: "Gabon", code: "241", iso: "GA" },
  { country: "Gambia", code: "220", iso: "GM" },
  { country: "Georgia", code: "995", iso: "GE" },
  { country: "Germany", code: "49", iso: "DE" },
  { country: "Ghana", code: "233", iso: "GH" },
  { country: "Gibraltar", code: "350", iso: "GI" },
  { country: "Greece", code: "30", iso: "GR" },
  { country: "Greenland", code: "299", iso: "GL" },
  { country: "Grenada", code: "1-473", iso: "GD" },
  { country: "Guam", code: "1-671", iso: "GU" },
  { country: "Guatemala", code: "502", iso: "GT" },
  { country: "Guernsey", code: "44-1481", iso: "GG" },
  { country: "Guinea", code: "224", iso: "GN" },
  { country: "Guinea-Bissau", code: "245", iso: "GW" },
  { country: "Guyana", code: "592", iso: "GY" },
  { country: "Haiti", code: "509", iso: "HT" },
  { country: "Honduras", code: "504", iso: "HN" },
  { country: "Hong Kong", code: "852", iso: "HK" },
  { country: "Hungary", code: "36", iso: "HU" },
  { country: "Iceland", code: "354", iso: "IS" },
  { country: "India", code: "91", iso: "IN" },
  { country: "Indonesia", code: "62", iso: "ID" },
  { country: "Iran", code: "98", iso: "IR" },
  { country: "Iraq", code: "964", iso: "IQ" },
  { country: "Ireland", code: "353", iso: "IE" },
  { country: "Isle of Man", code: "44-1624", iso: "IM" },
  { country: "Israel", code: "972", iso: "IL" },
  { country: "Italy", code: "39", iso: "IT" },
  { country: "Ivory Coast", code: "225", iso: "CI" },
  { country: "Jamaica", code: "1-876", iso: "JM" },
  { country: "Japan", code: "81", iso: "JP" },
  { country: "Jersey", code: "44-1534", iso: "JE" },
  { country: "Jordan", code: "962", iso: "JO" },
  { country: "Kazakhstan", code: "7", iso: "KZ" },
  { country: "Kenya", code: "254", iso: "KE" },
  { country: "Kiribati", code: "686", iso: "KI" },
  { country: "Kosovo", code: "383", iso: "XK" },
  { country: "Kuwait", code: "965", iso: "KW" },
  { country: "Kyrgyzstan", code: "996", iso: "KG" },
  { country: "Laos", code: "856", iso: "LA" },
  { country: "Latvia", code: "371", iso: "LV" },
  { country: "Lebanon", code: "961", iso: "LB" },
  { country: "Lesotho", code: "266", iso: "LS" },
  { country: "Liberia", code: "231", iso: "LR" },
  { country: "Libya", code: "218", iso: "LY" },
  { country: "Liechtenstein", code: "423", iso: "LI" },
  { country: "Lithuania", code: "370", iso: "LT" },
  { country: "Luxembourg", code: "352", iso: "LU" },
  { country: "Macao", code: "853", iso: "MO" },
  { country: "Macedonia", code: "389", iso: "MK" },
  { country: "Madagascar", code: "261", iso: "MG" },
  { country: "Malawi", code: "265", iso: "MW" },
  { country: "Malaysia", code: "60", iso: "MY" },
  { country: "Maldives", code: "960", iso: "MV" },
  { country: "Mali", code: "223", iso: "ML" },
  { country: "Malta", code: "356", iso: "MT" },
  { country: "Marshall Islands", code: "692", iso: "MH" },
  { country: "Mauritania", code: "222", iso: "MR" },
  { country: "Mauritius", code: "230", iso: "MU" },
  { country: "Mayotte", code: "262", iso: "YT" },
  { country: "Mexico", code: "52", iso: "MX" },
  { country: "Micronesia", code: "691", iso: "FM" },
  { country: "Moldova", code: "373", iso: "MD" },
  { country: "Monaco", code: "377", iso: "MC" },
  { country: "Mongolia", code: "976", iso: "MN" },
  { country: "Montenegro", code: "382", iso: "ME" },
  { country: "Montserrat", code: "1-664", iso: "MS" },
  { country: "Morocco", code: "212", iso: "MA" },
  { country: "Mozambique", code: "258", iso: "MZ" },
  { country: "Myanmar", code: "95", iso: "MM" },
  { country: "Namibia", code: "264", iso: "NA" },
  { country: "Nauru", code: "674", iso: "NR" },
  { country: "Nepal", code: "977", iso: "NP" },
  { country: "Netherlands", code: "31", iso: "NL" },
  { country: "Netherlands Antilles", code: "599", iso: "AN" },
  { country: "New Caledonia", code: "687", iso: "NC" },
  { country: "New Zealand", code: "64", iso: "NZ" },
  { country: "Nicaragua", code: "505", iso: "NI" },
  { country: "Niger", code: "227", iso: "NE" },
  { country: "Nigeria", code: "234", iso: "NG" },
  { country: "Niue", code: "683", iso: "NU" },
  { country: "North Korea", code: "850", iso: "KP" },
  { country: "Northern Mariana Islands", code: "1-670", iso: "MP" },
  { country: "Norway", code: "47", iso: "NO" },
  { country: "Oman", code: "968", iso: "OM" },
  { country: "Pakistan", code: "92", iso: "PK" },
  { country: "Palau", code: "680", iso: "PW" },
  { country: "Palestine", code: "970", iso: "PS" },
  { country: "Panama", code: "507", iso: "PA" },
  { country: "Papua New Guinea", code: "675", iso: "PG" },
  { country: "Paraguay", code: "595", iso: "PY" },
  { country: "Peru", code: "51", iso: "PE" },
  { country: "Philippines", code: "63", iso: "PH" },
  { country: "Pitcairn", code: "64", iso: "PN" },
  { country: "Poland", code: "48", iso: "PL" },
  { country: "Portugal", code: "351", iso: "PT" },
  { country: "Puerto Rico", code: "1-787, 1-939", iso: "PR" },
  { country: "Qatar", code: "974", iso: "QA" },
  { country: "Republic of the Congo", code: "242", iso: "CG" },
  { country: "Reunion", code: "262", iso: "RE" },
  { country: "Romania", code: "40", iso: "RO" },
  { country: "Russia", code: "7", iso: "RU" },
  { country: "Rwanda", code: "250", iso: "RW" },
  { country: "Saint Barthelemy", code: "590", iso: "BL" },
  { country: "Saint Helena", code: "290", iso: "SH" },
  { country: "Saint Kitts and Nevis", code: "1-869", iso: "KN" },
  { country: "Saint Lucia", code: "1-758", iso: "LC" },
  { country: "Saint Martin", code: "590", iso: "MF" },
  { country: "Saint Pierre and Miquelon", code: "508", iso: "PM" },
  { country: "Saint Vincent and the Grenadines", code: "1-784", iso: "VC" },
  { country: "Samoa", code: "685", iso: "WS" },
  { country: "San Marino", code: "378", iso: "SM" },
  { country: "Sao Tome and Principe", code: "239", iso: "ST" },
  { country: "Saudi Arabia", code: "966", iso: "SA" },
  { country: "Senegal", code: "221", iso: "SN" },
  { country: "Serbia", code: "381", iso: "RS" },
  { country: "Seychelles", code: "248", iso: "SC" },
  { country: "Sierra Leone", code: "232", iso: "SL" },
  { country: "Singapore", code: "65", iso: "SG" },
  { country: "Sint Maarten", code: "1-721", iso: "SX" },
  { country: "Slovakia", code: "421", iso: "SK" },
  { country: "Slovenia", code: "386", iso: "SI" },
  { country: "Solomon Islands", code: "677", iso: "SB" },
  { country: "Somalia", code: "252", iso: "SO" },
  { country: "South Africa", code: "27", iso: "ZA" },
  { country: "South Korea", code: "82", iso: "KR" },
  { country: "South Sudan", code: "211", iso: "SS" },
  { country: "Spain", code: "34", iso: "ES" },
  { country: "Sri Lanka", code: "94", iso: "LK" },
  { country: "Sudan", code: "249", iso: "SD" },
  { country: "Suriname", code: "597", iso: "SR" },
  { country: "Svalbard and Jan Mayen", code: "47", iso: "SJ" },
  { country: "Swaziland", code: "268", iso: "SZ" },
  { country: "Sweden", code: "46", iso: "SE" },
  { country: "Switzerland", code: "41", iso: "CH" },
  { country: "Syria", code: "963", iso: "SY" },
  { country: "Taiwan", code: "886", iso: "TW" },
  { country: "Tajikistan", code: "992", iso: "TJ" },
  { country: "Tanzania", code: "255", iso: "TZ" },
  { country: "Thailand", code: "66", iso: "TH" },
  { country: "Togo", code: "228", iso: "TG" },
  { country: "Tokelau", code: "690", iso: "TK" },
  { country: "Tonga", code: "676", iso: "TO" },
  { country: "Trinidad and Tobago", code: "1-868", iso: "TT" },
  { country: "Tunisia", code: "216", iso: "TN" },
  { country: "Turkey", code: "90", iso: "TR" },
  { country: "Turkmenistan", code: "993", iso: "TM" },
  { country: "Turks and Caicos Islands", code: "1-649", iso: "TC" },
  { country: "Tuvalu", code: "688", iso: "TV" },
  { country: "U.S. Virgin Islands", code: "1-340", iso: "VI" },
  { country: "Uganda", code: "256", iso: "UG" },
  { country: "Ukraine", code: "380", iso: "UA" },
  { country: "United Arab Emirates", code: "971", iso: "AE" },
  { country: "United Kingdom", code: "44", iso: "GB" },
  { country: "United States", code: "1", iso: "US" },
  { country: "Uruguay", code: "598", iso: "UY" },
  { country: "Uzbekistan", code: "998", iso: "UZ" },
  { country: "Vanuatu", code: "678", iso: "VU" },
  { country: "Vatican", code: "379", iso: "VA" },
  { country: "Venezuela", code: "58", iso: "VE" },
  { country: "Vietnam", code: "84", iso: "VN" },
  { country: "Wallis and Futuna", code: "681", iso: "WF" },
  { country: "Western Sahara", code: "212", iso: "EH" },
  { country: "Yemen", code: "967", iso: "YE" },
  { country: "Zambia", code: "260", iso: "ZM" },
  { country: "Zimbabwe", code: "263", iso: "ZW" },
];

export { countriesFR, countriesEN, countriesPhonesCodes };
