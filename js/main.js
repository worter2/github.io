const allWords = [
  "mauer", "duell", "bulle", "kamin", "tross", "treue", "aktie", "kehle", "laden", "spiel", "blatt", "minus", "hacke", "konto", "draht", "zenit", "lyrik", "braun", "speer", "titel", "gnade", "fuenf", "vorig", "bonus", "pasta", "halde", "handy", "perle", "cirka", "stoff", "kabel", "mensa", "abzug", "geben", "stuck", "duett", "unten", "einig", "angel", "stiel", "jubel", "jacke", "polar", "weise", "monat", "latte", "drang", "stark", "regie", "saldo", "forum", "beide", "eisen", "rente", "flora", "folie", "magen", "taufe", "logos", "hirte", "trieb", "ozean", "dumpf", "dosis", "bombe", "taler", "kleid", "beton", "pokal", "legen", "tabak", "garde", "ultra", "leder", "fuchs", "kaese", "heuer", "muehe", "still", "sechs", "frist", "spitz", "tonne", "nobel", "glatt", "klang", "sehen", "waise", "imker", "heben", "forst", "schaf", "krass", "nackt", "gehen", "eimer", "speck", "kerbe", "spott", "blond", "glanz", "piano", "ziege", "niere", "etage", "ruege", "platz", "stuhl", "nagel", "reise", "luege", "einen", "lehne", "krach", "gebot", "frost", "tadel", "puste", "fesch", "order", "katze", "after", "bauer", "ihnen", "video", "rubin", "coach", "hegen", "ideal", "mixen", "linde", "danke", "zitat", "genug", "milch", "lokal", "liste", "gegen", "mathe", "drauf", "titan", "pause", "neffe", "biker", "beben", "front", "labor", "kohle", "ritus", "stufe", "sowie", "hecht", "zebra", "umzug", "gries", "pfote", "derer", "aktiv", "biest", "weich", "ratio", "locke", "orbit", "antik", "atlas", "acker", "kampf", "blume", "block", "dauer", "stand", "blass", "bogen", "wovon", "sogar", "gleis", "blank", "eitel", "hymne", "heute", "hitze", "duerr", "wrack", "wagen", "kiste", "jeher", "boese", "osten", "marke", "summe", "kerze", "poker", "leute", "wohin", "bande", "limit", "palme", "brief", "zange", "senke", "einer", "weder", "brand", "nebel", "krimi", "wuest", "netto", "waage", "paket", "sauna", "kreuz", "enkel", "mikro", "offen", "kosen", "dekan", "rasse", "haupt", "banal", "immun", "story", "statt", "tanne", "modus", "achse", "unrat", "grund", "muede", "meile", "licht", "ruede", "sicht", "unter", "grube", "modem", "tolle", "schau", "porno", "abgas", "feier", "depot", "obhut", "rasch", "quark", "arsch", "rasen", "pater", "greif", "suite", "wachs", "krumm", "maerz", "orkan", "fleck", "email", "silbe", "kodex", "quote", "ampel", "erben", "kugel", "beten", "zwang", "mimik", "backe", "rosig", "klima", "mager", "gunst", "sanft", "tasse", "eiche", "datei", "mutig", "motiv", "zunft", "werft", "beere", "sohle", "track", "stadt", "kante", "indem", "linse", "elite", "sippe", "hinzu", "jeans", "sturz", "vogel", "biene", "stern", "kakao", "gurke", "erbse", "frech", "milde", "sahne", "phase", "laute", "kegel", "sauer", "trakt", "human", "luchs", "muell", "genau", "bohne", "ernst", "schuh", "drama", "dicht", "zelle", "genie", "buche", "kredo", "socke", "papst", "tarif", "duenn", "gramm", "nonne", "gabel", "zeile", "krebs", "klick", "album", "greis", "lanze", "tango", "griff", "boxen", "decke", "votum", "trotz", "tagen", "wiese", "moral", "salat", "leben", "serum", "etwas", "ebnen", "fauna", "meter", "rinde", "prosa", "kranz", "korps", "loyal", "daher", "liebe", "orgie", "reihe", "ledig", "heran", "trend", "super", "taste", "folge", "troll", "somit", "masse", "damit", "eifer", "pfeil", "erker", "venus", "gasse", "maske", "ikone", "frack", "fatal", "jetzt", "belag", "kader", "geste", "fisch", "kanne", "losen", "menge", "davon", "feuer", "starr", "hager", "arten", "pixel", "raupe", "saege", "luxus", "spurt", "brett", "haken", "hauch", "sitte", "diaet", "hebel", "disco", "pirat", "woche", "labil", "puppe", "stolz", "thron", "herde", "uralt", "novum", "krank", "basta", "beige", "miene", "wange", "zivil", "firma", "daran", "salbe", "robbe", "binde", "sonne", "zucht", "darin", "dabei", "empor", "ferne", "zwerg", "hagel", "genom", "raser", "futur", "voran", "punkt", "eilen", "essen", "exakt", "seite", "asche", "elfer", "anruf", "suche", "extra", "shirt", "trueb", "optik", "harfe", "kurve", "hinab", "graph", "hecke", "fehde", "knute", "motor", "kniff", "boden", "allee", "vater", "boxer", "rodel", "macht", "wieso", "ahnen", "liege", "genre", "jagen", "fegen", "foyer", "innen", "prinz", "prall", "plage", "leber", "demut", "rampe", "kippe", "schon", "durch", "sakko", "krise", "tiger", "psalm", "busen", "reich", "pfiff", "ruine", "zuvor", "fluch", "dunst", "seide", "pfund", "blech", "teich", "arena", "zunge", "taube", "radar", "joker", "wolke", "droge", "plane", "idiot", "haben", "sumpf", "degen", "spaet", "pflug", "tenor", "hurra", "sowas", "media", "scheu", "fluss", "lampe", "pille", "mafia", "eigen", "witwe", "serie", "trist", "artig", "linke", "rally", "nelke", "armee", "basar", "kraft", "kunst", "spatz", "lobby", "strom", "mulde", "blitz", "juror", "busch", "altar", "faust", "groll", "lache", "beruf", "zeuge", "wanne", "leser", "typus", "union", "bloed", "macke", "braut", "suppe", "fazit", "seele", "teddy", "geier", "zudem", "kunde", "wider", "lange", "uebel", "wodka", "runde", "recht", "feige", "brach", "kette", "falte", "ruebe", "wobei", "regal", "wogen", "insel", "abtun", "atmen", "regen", "gerne", "pizza", "spion", "neben", "regel", "selig", "anbau", "wille", "zuruf", "segel", "samba", "krieg", "dicke", "klaue", "ungut", "party", "tinte", "torte", "enden", "vital", "ratte", "riege", "adlig", "kombi", "theke", "ruhen", "kluft", "fromm", "wenig", "pfahl", "worum", "harke", "herab", "knabe", "frust", "typen", "parat", "april", "quasi", "alarm", "haeme", "kanal", "karat", "nager", "vorab", "olive", "matte", "hexen", "autor", "satan", "warte", "rudel", "enorm", "innig", "gummi", "ruhig", "garen", "natur", "laerm", "wende", "kamel", "sagen", "mitte", "menue", "polka", "macho", "reell", "kelch", "tante", "kraut", "weihe", "liter", "beleg", "samen", "fonds", "karte", "blase", "foehn", "geist", "komma", "solar", "frueh", "saite", "alpin", "essig", "flair", "brust", "sucht", "skala", "makel", "chaos", "rotor", "loewe", "orgel", "level", "farce", "darum", "rauch", "alibi", "gerte", "barre", "klein", "besen", "hauen", "salsa", "legal", "trank", "leise", "gatte", "motto", "wolle", "emsig", "sache", "davor", "larve", "bauen", "toben", "kappe", "halle", "cello", "platt", "birke", "weber", "rufen", "fidel", "indiz", "barde", "multi", "opfer", "kelle", "zirka", "pegel", "bange", "knien", "junge", "panik", "posse", "rache", "biber", "umbau", "warum", "senat", "laune", "einst", "messe", "treff", "schal", "lachs", "woran", "stahl", "vokal", "falke", "bucht", "nadel", "visum", "profi", "gebet", "spalt", "rugby", "buchs", "bitte", "tafel", "engel", "salon", "stumm", "knapp", "wiege", "hilfe", "datum", "enzym", "hetze", "notar", "wehen", "notiz", "rumpf", "organ", "dolch", "piste", "trick", "grill", "humor", "esche", "meist", "teuer", "mobil", "heide", "stier", "trupp", "musik", "roden", "rolle", "wespe", "magie", "manko", "tiefe", "radio", "beute", "grell", "dreck", "frage", "fokus", "zwist", "pferd", "juwel", "lippe", "szene", "hoehe", "ernte", "honig", "erste", "stets", "erpel", "weile", "panne", "salto", "naehe", "total", "wette", "feste", "ueber", "keule", "finne", "chili", "buero", "pilot", "ethik", "wunde", "tumor", "guete", "aroma", "kasse", "unser", "lunge", "lilie", "tuete", "pappe", "nicht", "saeen", "agent", "tisch", "bravo", "pedal", "eisig", "galle", "kuehl", "figur", "stock", "feder", "weide", "alias", "winde", "tulpe", "route", "leere", "felge", "orden", "klipp", "stein", "fahne", "kauen", "motte", "azubi", "pacht", "gruen", "chrom", "vorne", "sorge", "falle", "sorte", "logik", "apfel", "kater", "worin", "steil", "lehen", "brite", "famos", "areal", "abruf", "nagen", "kripo", "hafen", "gilde", "dekor", "umher", "stopp", "narbe", "zecke", "umweg", "birne", "traum", "faden", "final", "nacht", "modul", "weste", "staat", "obere", "farbe", "erden", "dahin", "feind", "abtei", "flugs", "herum", "reden", "hotel", "haube", "baron", "promi", "laube", "tritt", "anzug", "kopie", "stift", "durst", "schub", "armut", "kuehn", "links", "druck", "rippe", "ferse", "start", "angst", "abend", "klage", "stute", "mappe", "karre", "pfand", "anker", "womit", "miliz", "kraus", "geige", "these", "woher", "moewe", "stall", "maler", "blick", "rinne", "leine", "loben", "mumie", "probe", "staub", "plump", "lotse", "waffe", "ruder", "zweck", "elend", "urban", "zuzug", "klotz", "hobby", "power", "komik", "trage", "zweig", "wesen", "qualm", "eilig", "stube", "deich", "tauen", "intim", "ueben", "klamm", "flink", "wegen", "seife", "wurst", "segen", "wilde", "knall", "fixen", "pumpe", "kreis", "linie", "bevor", "sonde", "bluse", "stamm", "onkel", "abbau", "anmut", "lager", "borke", "major", "flott", "gruft", "alter", "label", "breit", "royal", "glied", "tempo", "horde", "holen", "eklat", "acryl", "blues", "eckig", "henne", "krone", "antun", "turbo", "hallo", "riese", "schar", "atoll", "basis", "essay", "kiosk", "bauch", "sehne", "stirn", "delta", "wucht", "lehre", "stich", "scham", "stroh", "markt", "zweit", "haufe", "pauke", "unfug", "weite", "funke", "ebene", "moped", "roman", "bezug", "ahorn", "sekte", "welpe", "zutat", "fabel", "stepp", "unmut", "knopf", "moder", "joint", "prima", "reife", "teils", "delle", "dritt", "gotik", "porto", "clown", "ochse", "penis", "faser", "welle", "ehren", "bibel", "villa", "knast", "sturm", "prise", "immer", "komet", "irren", "wache", "virus", "thema", "blind", "weben", "sonst", "fremd", "fahrt", "trost", "nudel", "raten", "kanon", "flach", "dampf", "baden", "index", "sport", "malen", "bruch", "chaot", "duene", "laser", "miete", "steif", "lesen", "couch", "preis", "orten", "remis", "dogma", "adler", "zeche", "aalen", "aarau", "aasen", "aasig", "abade", "abart", "abate", "abhub", "abort", "absud", "abuja", "abweg", "accra", "achat", "ackja", "actor", "addio", "adeln", "adept", "adies", "adieu", "adobe", "adrig", "adult", "aedil", "aegis", "aehre", "aerar", "aerob", "aesen", "aeser", "aetze", "affig", "affin", "affix", "agape", "agave", "agens", "agnat", "agone", "agora", "agram", "aguti", "ahner", "ahnin", "aitel", "akkad", "aktei", "aktin", "aktor", "aktus", "alaaf", "aland", "alane", "alant", "alaun", "albit", "albus", "alert", "algol", "alien", "aliud", "alkan", "alken", "alkin", "alkor", "alkyl", "allah", "allda", "allel", "alles", "allez", "allin", "allod", "allwo", "allzu", "almen", "almer", "alpen", "alper", "alpha", "altai", "altan", "alten", "altin", "altus", "amant", "amati", "amber", "ambra", "amman", "ammer", "ammon", "amour", "amper", "ampex", "amsel", "amtei", "amten", "anbei", "anbot", "andin", "anger", "anher", "anhin", "anhub", "anima", "anime", "animo", "anion", "anken", "annex", "anode", "aorta", "apart", "apern", "aphel", "apnoe", "apoll", "apsis", "arara", "arche", "arete", "argon", "argot", "arier", "aries", "arios", "arius", "arkus", "arles", "armer", "arrak", "array", "arsen", "arsis", "artel", "artin", "ascot", "ashby", "asher", "asiat", "asien", "asket", "aspik", "assai", "assel", "asset", "astat", "asten", "aster", "atair", "athos", "atman", "atout", "atzel", "atzen", "audio", "audit", "auger", "augit", "augur", "aulos", "aural", "aurum", "auweh", "auxin", "avers", "aviso", "aware", "axial", "axiom", "azote", "azurn", "bache", "bacon", "badia", "baeck", "baehr", "bafel", "bagel", "baggy", "bagno", "bahai", "bahre", "baier", "bakel", "balge", "balin", "balje", "balla", "balme", "balsa", "balte", "balyk", "banat", "banja", "banjo", "banse", "bantu", "banus", "barbe", "barbu", "barin", "barke", "barte", "baryt", "basal", "basic", "baske", "bassa", "bassi", "basso", "baste", "batch", "batik", "baude", "baute", "bayer", "beach", "bebop", "begum", "behuf", "beisl", "beize", "belin", "bemme", "benne", "berge", "berme", "bertl", "besan", "betel", "beter", "betun", "beuge", "beule", "biala", "bidet", "bidon", "biege", "bienn", "biese", "bigas", "bigos", "bijan", "bijou", "biken", "bilch", "bilge", "bille", "bimbo", "binge", "bingo", "binkl", "binom", "binse", "bisam", "bison", "bitok", "biwak", "blade", "blage", "blahe", "bland", "blaue", "bleie", "blend", "blich", "blimp", "blini", "bloch", "blubb", "bluff", "blust", "board", "bober", "boche", "boeig", "bogey", "bogig", "bohle", "boing", "bojar", "bolid", "bolle", "bolus", "bonds", "bongo", "bonne", "bonze", "boost", "boran", "borat", "borax", "borid", "boros", "borte", "boson", "bosse", "botel", "botin", "boule", "bowle", "bowls", "brack", "braet", "braeu", "bragi", "brain", "brant", "brass", "braue", "braus", "brave", "break", "brein", "breve", "breze", "bride", "bries", "brigg", "brill", "bring", "brink", "brise", "bronn", "brunn", "budel", "buech", "buehl", "buent", "buett", "buffo", "buggy", "buhei", "buhen", "buhle", "buhne", "bully", "bunda", "bunge", "bunny", "buran", "burin", "burka", "bursa", "burse", "burst", "busig", "butan", "butch", "buten", "butoh", "butte", "butyl", "butze", "caban", "cache", "cadre", "caine", "calla", "calor", "calyx", "canna", "canoe", "cañon", "canto", "carbo", "carta", "cassa", "catch", "cauda", "causa", "cella", "cento", "ceres", "chaku", "chart", "chase", "check", "chedi", "chica", "chief", "chino", "chlor", "choke", "cholo", "chose", "chrie", "cider", "cidre", "circe", "civet", "claim", "clean", "clerk", "cloth", "cobol", "cocos", "codon", "coeur", "colon", "combi", "combo", "comes", "comic", "comte", "conga", "conus", "corno", "count", "coupe", "cover", "crack", "crash", "cream", "creek", "crime", "cross", "crowd", "culpa", "cupro", "curie", "curry", "cutis", "dachs", "daddy", "daene", "dagon", "daina", "dakar", "dalai", "dalbe", "dalle", "dalli", "dandy", "darob", "darre", "darts", "darzu", "dasig", "daten", "dativ", "daube", "daune", "davit", "dawai", "debet", "debil", "debit", "decan", "decay", "deern", "deist", "delat", "delft", "delir", "delos", "demon", "demos", "denar", "deneb", "denim", "denke", "derma", "desto", "detto", "deuce", "devot", "dhoti", "didym", "diele", "dieme", "diese", "digen", "digit", "dildo", "dille", "dinar", "diner", "dinge", "dingi", "dingo", "dings", "dinte", "diode", "dipol", "direx", "dirne", "divis", "diwan", "dixie", "dobel", "docht", "docke", "dodel", "doelp", "doese", "doete", "dogge", "dohle", "dohne", "dokes", "dokus", "dolan", "dolby", "dolce", "dolde", "dolle", "dolma", "dolos", "dolus", "domra", "donar", "donja", "donna", "donum", "donut", "doofi", "doors", "dopen", "doper", "dorer", "doria", "doyen", "draen", "drafi", "drahn", "drall", "drank", "draus", "drehe", "drein", "drell", "dress", "drift", "drill", "drink", "drive", "drops", "drost", "drude", "drums", "druse", "dryas", "ducht", "duese", "duete", "dufte", "dumka", "dummy", "duque", "dural", "durra", "dusel", "dutte", "duvet", "duzen", "dwars", "dyade", "dybuk", "eagle", "ebben", "ebber", "ebola", "echec", "echse", "ecken", "ecker", "edikt", "effet", "egart", "eggen", "ehern", "ehest", "eiben", "eidam", "eidos", "eiern", "eiler", "eines", "eiter", "eizes", "ekart", "ekeln", "eklig", "ekzem", "elain", "elast", "elemi", "eleve", "ellok", "eloah", "eloge", "elter", "eluat", "emder", "emmel", "emmer", "emser", "endel", "engen", "ennui", "enten", "enter", "eosin", "ephor", "epode", "erber", "erbin", "erdig", "erika", "erlag", "erlen", "error", "ersti", "ertag", "erzen", "espan", "essai", "essex", "estin", "ethos", "etmal", "etsch", "etter", "etwan", "eulan", "eumel", "eurer", "euter", "event", "exact", "exote", "ezzes", "faehe", "fahen", "fakih", "fakir", "fakts", "falbe", "falls", "fanal", "fancy", "fango", "fanin", "fanon", "farad", "farin", "farre", "farsi", "fasan", "fasen", "fasti", "fatum", "fatwa", "faxen", "feber", "fecit", "feger", "feien", "feile", "feine", "feist", "femur", "fench", "ferge", "feria", "ferme", "fermi", "ferri", "ferti", "fetal", "fette", "fetus", "fetwa", "fiale", "fibel", "fiber", "fiche", "fichu", "ficke", "ficus", "fides", "fiepe", "fight", "filet", "filou", "finca", "finis", "finit", "finte", "firne", "first", "firth", "fitis", "fitze", "fives", "fixer", "fixum", "fjeld", "fjord", "flaez", "flake", "flame", "flaps", "flare", "flash", "flaum", "flaus", "fleet", "flett", "fleur", "flick", "flins", "flinz", "flirt", "flitz", "float", "floez", "floor", "fluat", "fluid", "fluke", "fluor", "fluse", "flush", "flyer", "foehl", "fokal", "folia", "folio", "fonem", "forke", "forle", "forne", "forte", "fossa", "foton", "fotze", "fovea", "frais", "frame", "frana", "franc", "frank", "frate", "fratz", "freak", "freie", "freon", "frett", "freyr", "fries", "frigg", "frija", "fuder", "fugal", "fugen", "fuger", "fuhre", "fulbe", "funda", "fundi", "furan", "furie", "furor", "fusel", "futil", "futon", "fuzzi", "gaber", "gaden", "gaele", "gagat", "gagig", "gaita", "gajda", "galan", "galin", "gallo", "galon", "gambe", "gamet", "gamin", "gamma", "gamme", "garbe", "gasen", "gasig", "gassi", "gaube", "gauch", "gaudi", "gauge", "gault", "geber", "gecko", "geest", "geher", "gehre", "geien", "geile", "gelbe", "gelee", "gelin", "gelse", "gelte", "gemme", "genin", "genus", "geode", "geoid", "gerbe", "getan", "getto", "getue", "geuse", "giaur", "gibbs", "gicht", "gigue", "gilet", "gilge", "ginko", "gipsy", "glace", "glans", "glast", "gliom", "glosa", "glueh", "gnatz", "gneis", "gnome", "godel", "goden", "goder", "godet", "goere", "golem", "gonin", "gopak", "gorgo", "gosse", "gotin", "gotte", "gouda", "gradl", "graen", "graft", "grain", "grana", "grane", "grans", "graus", "grave", "grien", "grimm", "grind", "griot", "grips", "groma", "groom", "grosz", "growl", "grude", "grumt", "guano", "guave", "gucke", "gucki", "guede", "guelt", "guest", "gugel", "guide", "gulag", "gully", "gumma", "gumpe", "guppy", "gurde", "gurin", "gusla", "gusle", "gusli", "guste", "gusto", "gutti", "guyot", "gyros", "haber", "habil", "habit", "habub", "hache", "hader", "hades", "hafer", "hafis", "haiku", "haker", "hakig", "hakim", "halid", "halit", "halma", "halse", "halwa", "hamas", "hamen", "hamit", "hands", "hanse", "hanum", "happy", "haram", "harde", "harem", "harst", "harte", "hasch", "hasel", "haspe", "hauer", "heavy", "heber", "hefig", "hegau", "hehre", "heida", "heini", "heint", "heisa", "heiti", "helau", "helix", "helle", "helot", "hendl", "henna", "herat", "herbe", "heris", "herme", "heroe", "heros", "hertz", "herze", "herzu", "hesse", "heuen", "heuet", "hevea", "hexan", "hexer", "hiefe", "hielt", "hiezu", "hilum", "hilus", "hinan", "hinde", "hindi", "hindu", "hinum", "hippe", "hirni", "hirse", "hobel", "hober", "hoboe", "hocke", "hoden", "hoeck", "hoeft", "hoene", "hoese", "hoesl", "holde", "holla", "honan", "honen", "honer", "honey", "honne", "hopak", "hopse", "horse", "hotte", "hubel", "hucke", "hudel", "huene", "hulda", "humid", "humos", "humus", "hunde", "hunne", "hupen", "hurde", "huren", "hurer", "husar", "husch", "husky", "hussa", "hutte", "hutze", "hydra", "hymen", "hypen", "iambe", "ichor", "ictus", "ident", "idiom", "iduna", "idyll", "igeln", "igitt", "ihram", "ihrer", "ileus", "ilias", "illit", "iltis", "imago", "incus", "inden", "inder", "indes", "indik", "indio", "indol", "indus", "inert", "infam", "infix", "inful", "infus", "ingot", "inlay", "input", "intra", "intro", "intus", "inuit", "inula", "invar", "iodid", "ionon", "irade", "iraki", "irbis", "irden", "irrer", "irrig", "ische", "ischl", "islam", "ismus", "isser", "itala", "itzig", "iwrit", "jabot", "jacht", "jackl", "jaden", "jaehe", "jager", "jaina", "jalon", "jambe", "janin", "janus", "japon", "jause", "jedes", "jerez", "jerum", "jeton", "jetzo", "jingo", "jo-jo", "jodel", "jodid", "joest", "jokos", "jokus", "jolle", "joppe", "josty", "joule", "jovis", "judiz", "juede", "juice", "julei", "julep", "junta", "jupon", "juris", "jurte", "juxen", "juxig", "juxta", "juxte", "kaban", "kabis", "kacke", "kaduk", "kafir", "kajak", "kajal", "kalif", "kamee", "kamer", "kames", "kanin", "kapee", "kaper", "kapok", "kappa", "kappl", "kaput", "karde", "kargo", "karma", "karst", "kasak", "kasan", "kasba", "kasel", "kaser", "kasha", "kasko", "kassa", "kaste", "kasus", "katen", "katta", "katte", "kauer", "kaule", "kauri", "kaval", "kazoo", "keats", "kebab", "kebse", "kefir", "kehre", "keile", "kelek", "kelim", "kelte", "kemel", "kempo", "kenaf", "kendo", "keren", "kerwe", "keton", "khmer", "kiang", "kibla", "kieke", "kieme", "kiepe", "kijew", "kilch", "kimme", "kinin", "kirbe", "kirke", "kirne", "kirre", "kitta", "kitze", "klack", "klaff", "klapp", "klaps", "klare", "klass", "klebe", "kleie", "kliff", "kling", "klips", "klirr", "klock", "kloes", "klong", "kloot", "klopp", "klops", "kloss", "kloth", "klump", "knack", "knaps", "knauf", "knaul", "kneer", "kneif", "kneip", "knete", "knick", "knips", "knitz", "knofi", "knopp", "knorr", "knorz", "knote", "knuff", "knust", "koala", "kobel", "koben", "kober", "kobra", "kocke", "koehl", "kofel", "kofen", "kogel", "kogge", "koine", "koken", "koker", "kokke", "kokon", "kokos", "kolik", "kolli", "kolon", "konak", "kondo", "konen", "konus", "konya", "kopal", "koppe", "kopra", "kopte", "korah", "koran", "korse", "korso", "kosak", "kosel", "kosir", "koste", "kotau", "koten", "kotig", "kotze", "kraal", "krage", "krake", "krapp", "krase", "kraul", "kraxe", "kreas", "krehl", "kreme", "kreml", "kreol", "krepp", "kress", "krete", "krick", "krida", "kriek", "kries", "krill", "kring", "krink", "kroki", "kroko", "kroll", "kroop", "kropf", "kross", "krude", "kruke", "krume", "kubba", "kubik", "kubus", "kuder", "kuelz", "kuemo", "kuepe", "kuhle", "kujon", "kulak", "kumme", "kumpf", "kumst", "kunft", "kupon", "kuppe", "kurat", "kurde", "kuren", "kurie", "kuros", "kurre", "kusch", "kutan", "kutin", "kutis", "kutte", "kwass", "kyrie", "laban", "labbe", "laben", "laber", "lacis", "lader", "ladik", "ladin", "laffe", "lagan", "lahar", "lahne", "laich", "laiin", "lakai", "laken", "lamia", "laote", "lapis", "lappe", "large", "largo", "lasch", "laska", "lasso", "lasur", "latex", "latus", "lauch", "laude", "laudi", "lauge", "lawra", "lebig", "lecke", "lefze", "legat", "legel", "leger", "lehde", "leich", "leier", "leihe", "leite", "lemur", "lende", "lenis", "lento", "lepra", "lesbe", "leste", "letal", "lethe", "lette", "letzi", "letzt", "levee", "lever", "levit", "lexem", "lexik", "liber", "libra", "licet", "lieue", "ligan", "liger", "light", "ligue", "liman", "limba", "limbo", "limes", "limos", "liner", "linga", "linge", "linon", "lipid", "lipsi", "lisse", "litho", "litze", "livid", "livre", "liwan", "llano", "lober", "lobin", "lobus", "lodde", "loden", "lodge", "loebe", "loess", "logau", "logge", "login", "logis", "lohan", "lohen", "loipe", "lokus", "lolch", "lolli", "lollo", "longa", "longe", "lorke", "loten", "lotos", "lotto", "lotus", "loure", "lover", "lucht", "luder", "ludus", "luest", "luett", "luffa", "lugen", "lulle", "lulli", "lumen", "lumme", "lunar", "lunch", "lungo", "lunte", "luppe", "lupus", "lurch", "lusen", "luser", "lutte", "luven", "luxor", "luzid", "lycra", "lyder", "lysin", "lysis", "lysol", "lyssa", "mache", "macis", "madam", "madel", "madig", "maedl", "maere", "maggi", "magma", "magus", "mahut", "maire", "makak", "makao", "makro", "malad", "malum", "malus", "malve", "mamba", "mambo", "mamma", "mammi", "mampe", "mandl", "manen", "manga", "mange", "mango", "manie", "manis", "manna", "manta", "manus", "maori", "mappa", "maqam", "marae", "maral", "marge", "marin", "marly", "marod", "martl", "masai", "masel", "maser", "massa", "masut", "match", "matur", "matze", "mauen", "mauke", "maure", "mausi", "mauve", "maxen", "mayor", "mazis", "mazze", "meaux", "mecki", "meder", "medio", "medoc", "meise", "meine", "melas", "melde", "melik", "melis", "melos", "memme", "mente", "merci", "merde", "merks", "merle", "meson", "meste", "mesto", "mette", "metze", "meute", "micke", "miere", "miese", "mieze", "mikwe", "milas", "milbe", "milet", "milke", "mille", "mimen", "mimin", "mimus", "minim", "minne", "minor", "minze", "mirza", "mitra", "mixed", "mixer", "mneme", "mocha", "mocke", "modal", "model", "moese", "moeve", "mogul", "mohel", "moira", "moire", "mokka", "molar", "molch", "molin", "molke", "molle", "molli", "molto", "momme", "monem", "month", "moria", "moros", "morph", "mosso", "motel", "mound", "movie", "mucke", "mucks", "mucor", "mudra", "muerb", "muffe", "mufti", "mugge", "muhen", "muhme", "mulch", "mulla", "mulus", "mumme", "mummy", "mumps", "mungo", "murau", "murks", "musin", "muten", "muter", "mutsu", "mutti", "muzin", "myles", "myrre", "myrte", "myste", "mythe", "myxom", "myzel", "nabel", "nabob", "nadis", "nahen", "naive", "namas", "namaz", "namen", "namur", "nandu", "nappa", "narde", "naris", "narre", "nasal", "natis", "nativ", "naura", "navel", "nebst", "neese", "nefas", "negeb", "negev", "negus", "neige", "neper", "nerve", "neuer", "neveu", "nexoe", "nexus", "nicki", "nicol", "nidel", "nidle", "niehl", "niete", "nille", "ninja", "niobe", "nippe", "nisan", "nisse", "niton", "nival", "nocke", "nodus", "noeck", "noema", "nomen", "nomos", "nonen", "noppe", "norne", "notat", "nubuk", "nugat", "nulpe", "numen", "nurse", "nuten", "nutte", "nylon", "obers", "obiit", "oboer", "ocker", "octan", "odeon", "odeum", "odeur", "odios", "odium", "oedem", "oeden", "oehmd", "oehrn", "oelen", "oelig", "offiz", "ogtum", "oheim", "okapi", "oktan", "oktav", "okuli", "oladi", "oldie", "oleat", "olein", "oleum", "olias", "olymp", "omama", "omega", "ondit", "opapa", "opera", "ophir", "ophit", "opiat", "opium", "orale", "orans", "orant", "orbis", "ordre", "oreal", "orest", "orion", "orkus", "orlog", "orlon", "ornat", "ornis", "orter", "osker", "ossia", "ostig", "otium", "otter", "ounce", "outen", "pacer", "padde", "padre", "paean", "paedo", "paeng", "pagan", "pagat", "pager", "palas", "palla", "pamir", "pampa", "pampe", "pampf", "pamps", "panax", "panda", "panel", "panje", "panty", "panze", "papal", "papas", "papel", "paper", "pappi", "papua", "pareo", "paret", "paria", "parka", "paros", "parse", "parte", "parze", "pasch", "passa", "passe", "paste", "patch", "patin", "patio", "patte", "pavor", "pedum", "pekoe", "pelit", "pelle", "pence", "penne", "penni", "penta", "perdu", "pesel", "pesen", "petal", "petch", "petit", "petto", "petze", "pfuhl", "phaen", "phage", "pharo", "phlox", "phyle", "picke", "picot", "piece", "pieke", "pieno", "piepe", "pieps", "pieta", "pikee", "piken", "pilar", "pilau", "pilaw", "pilze", "pimpf", "pinge", "pinie", "pinin", "pinke", "pinne", "pinte", "pique", "pirol", "pisse", "pivot", "plack", "plaid", "plano", "plast", "plauz", "plebs", "pocke", "podex", "poeks", "pofen", "pogen", "pogge", "poilu", "point", "poise", "polen", "polin", "polio", "polje", "polle", "polyp", "ponge", "ponor", "ponte", "popel", "porig", "porus", "posen", "posto", "poule", "pound", "praha", "prahm", "praia", "pranz", "prass", "priel", "priem", "prime", "print", "prion", "prior", "proll", "prolo", "prose", "prost", "protz", "provo", "prunk", "pudel", "puder", "puett", "puffe", "pulen", "pulle", "pulli", "pulpa", "pulpe", "pumps", "punch", "pupen", "purim", "purin", "puter", "putte", "putto", "putze", "pylon", "pyrit", "pyron", "pyrop", "pyxis", "quall", "quant", "quart", "quarz", "queen", "quell", "quent", "quere", "queue", "quick", "quiek", "quilt", "quipu", "quirl", "quito", "quitt", "rabab", "rabat", "rabau", "rabbi", "racke", "radau", "radix", "radom", "radon", "raehm", "raffa", "ragen", "rager", "rahne", "rajah", "rakel", "ralle", "rambo", "ramie", "ramme", "ramus", "ranch", "ranft", "range", "ranke", "raphe", "rapid", "rappe", "rarum", "rasig", "raspa", "rasta", "raste", "rasur", "rater", "ratze", "raufe", "rauke", "raute", "raven", "raver", "rayon", "reakt", "reala", "realo", "rebab", "rebbe", "rebec", "rebus", "recke", "recte", "reder", "redon", "reede", "refus", "regul", "reibe", "reiki", "reims", "reine", "rekel", "rekto", "renke", "repro", "resch", "reset", "retro", "reuen", "reuig", "reuse", "reval", "revue", "reyon", "rhema", "ribbe", "riede", "riefe", "rigel", "rigid", "rigor", "rille", "rings", "rispe", "riste", "ritze", "river", "riyal", "rizin", "roche", "rodeo", "roder", "roehr", "roete", "rogen", "rojen", "rolli", "rollo", "romme", "ronde", "rondo", "ronin", "rosse", "rotta", "rotte", "rotze", "rouen", "rouge", "rowdy", "rubel", "rubia", "rueck", "rueda", "ruefe", "ruelp", "rufer", "ruffi", "rumba", "rumen", "rummy", "rumor", "runge", "runse", "rupel", "rupia", "rupie", "rural", "rusch", "ruski", "russe", "rutil", "rutin", "rutte", "ruwer", "sabot", "sabra", "sabre", "sacht", "sadhu", "saeer", "saele", "saher", "sahib", "saiga", "sakra", "salep", "salmi", "salpe", "salse", "salta", "salus", "salut", "salve", "sambo", "samer", "samin", "samum", "santa", "saône", "sapin", "sappe", "sarde", "sarte", "sasse", "satin", "satte", "satya", "satyr", "sauce", "saudi", "sauen", "sause", "saven", "saxer", "scala", "scall", "scene", "schah", "schas", "schen", "scher", "schia", "schma", "schmu", "schof", "schot", "schur", "schwa", "scoop", "score", "scout", "scrip", "scrub", "scudo", "secco", "sedat", "seder", "sedum", "segge", "seher", "seich", "seige", "seine", "sekel", "selam", "selch", "selen", "semem", "semen", "semit", "senar", "senge", "senil", "senne", "senon", "senor", "señor", "sense", "sente", "senza", "sepia", "sepie", "sepoy", "serbe", "seren", "seria", "serin", "serio", "serno", "serra", "servo", "sesam", "sesel", "sexta", "sexte", "sexus", "shake", "share", "shawl", "sheng", "shinn", "shout", "shunt", "sicke", "sidra", "siech", "siede", "sieke", "siele", "sigel", "sigma", "silan", "silen", "silex", "silur", "simen", "simse", "sinto", "sinus", "sioux", "sipho", "sirin", "sirup", "sisal", "sitar", "situs", "sivas", "skale", "skalp", "skate", "skene", "skiff", "skink", "sklav", "skote", "skues", "skull", "skunk", "slack", "slang", "slash", "slave", "slawe", "slice", "slick", "sling", "slink", "sloka", "slump", "small", "smart", "smash", "smsen", "snack", "sniff", "soave", "sobor", "sodar", "sodom", "softa", "softi", "sohar", "sohin", "sokol", "soldo", "solei", "solid", "solin", "soman", "sonar", "sonor", "sooft", "sopot", "sopra", "sorbe", "sorbi", "soter", "sotie", "sotto", "sound", "sozia", "spack", "spada", "spadi", "spahi", "spake", "spann", "spant", "spark", "spart", "speed", "speik", "speil", "speis", "spelt", "spelz", "spezi", "spick", "spike", "spina", "spind", "split", "spoon", "spore", "sporn", "spray", "spreu", "sprit", "sprue", "spule", "spund", "squaw", "stack", "staer", "staet", "stage", "stake", "stang", "stank", "stase", "stauf", "steak", "steig", "stele", "steno", "stent", "stenz", "stert", "sterz", "stete", "stetl", "stick", "stieg", "stipp", "stoer", "stola", "stole", "stolo", "stoma", "stomp", "store", "stork", "stotz", "stout", "stove", "strak", "streb", "streu", "stria", "strip", "strub", "stubs", "studi", "stuka", "stump", "stunk", "stunt", "stupa", "stupf", "stupp", "stups", "stuss", "suada", "suave", "sucre", "sudel", "suell", "suhle", "sujet", "sulky", "sulze", "sumak", "sumer", "summa", "sunna", "suomi", "supen", "supra", "surre", "sushi", "sutra", "sutur", "swami", "swasi", "swebe", "sweet", "swing", "sympi", "synod", "syrer", "syrte", "sysop", "tabes", "tabla", "tabor", "tacet", "tacho", "tacks", "taeve", "tagma", "taiga", "taize", "takel", "takin", "talab", "talar", "talin", "talje", "talmi", "talon", "tamil", "tanga", "tanka", "tanse", "tanto", "tanya", "tapen", "tapet", "tapir", "tarar", "targi", "tarot", "tatar", "tatue", "tatze", "tauer", "tauig", "tauon", "taupe", "taxen", "taxes", "taxon", "taxus", "tegel", "teint", "telex", "telos", "tembe", "tempi", "tenne", "tenno", "tenue", "terme", "terne", "terno", "terra", "tesla", "testo", "tetra", "teufe", "theta", "thing", "thomi", "thora", "thuja", "tiama", "tiara", "tibia", "tigon", "tilde", "timen", "timer", "timid", "tiret", "titer", "titre", "titte", "tjalk", "tjost", "toast", "tobak", "tobel", "tober", "toddy", "toeff", "toele", "toelt", "toerl", "toern", "toile", "toise", "token", "tokus", "tomus", "tonal", "tondo", "tonen", "toner", "tonic", "tonig", "tonus", "topas", "topik", "topoi", "topos", "toque", "torii", "torsi", "torso", "torun", "torus", "tosen", "totem", "toter", "totum", "touch", "tower", "toxin", "trabi", "trace", "traeg", "trafo", "train", "trait", "trame", "tramp", "trans", "trapp", "traps", "trara", "trauf", "traun", "traut", "trawl", "trebe", "treck", "trema", "trial", "trias", "triel", "trift", "trike", "trimm", "trine", "troer", "trope", "tropf", "trott", "truck", "truhe", "trumm", "trunk", "trust", "trutz", "tsuba", "tsuga", "tuber", "tubus", "tucke", "tuell", "tukan", "tulio", "tumba", "tunen", "tuner", "tunin", "tunke", "tunte", "turba", "turca", "turko", "turon", "tusch", "tussi", "tutel", "tuten", "tutor", "tutti", "tweed", "twill", "twist", "tyche", "typik", "typin", "uchte", "udall", "ulcus", "ulema", "ulken", "ulkig", "ulkus", "ulmer", "umami", "umber", "umbra", "umhin", "umlad", "umtun", "unart", "unbar", "ungar", "unken", "unort", "unruh", "untag", "untat", "unton", "untot", "urahn", "urbar", "urian", "urner", "uroma", "uropa", "urtyp", "usanz", "uteri", "uvala", "uvula", "vaduz", "vagus", "valet", "valid", "valin", "valor", "value", "varia", "vario", "varix", "varus", "vegan", "veiel", "velar", "velde", "velin", "velum", "verba", "verra", "verso", "verte", "verve", "vespa", "vesta", "veste", "vesuv", "vichy", "viech", "viert", "vigil", "vigne", "vigor", "vikar", "vinyl", "viole", "viper", "viral", "viren", "viril", "vista", "visus", "vitae", "vitro", "vivat", "vlies", "vogue", "voile", "volar", "volta", "volte", "volum", "volva", "voten", "votiv", "voute", "vulgo", "vulva", "wacht", "wacke", "wadai", "wafer", "walke", "walze", "wamme", "wampe", "wanst", "wanze", "waran", "warft", "warze", "wasen", "waten", "watte", "wecke", "weden", "wedge", "weger", "wehle", "weife", "welfe", "wenck", "werda", "werre", "werst", "werte", "wesir", "wessi", "whist", "wichs", "wicht", "wicke", "wiede", "wiepe", "wiesn", "wippe", "wirre", "wisch", "witib", "wodan", "woell", "wonne", "worte", "wossi", "wotan", "wovor", "woyke", "wruke", "wuchs", "wuhne", "wulle", "wulst", "wumms", "wurte", "xenie", "xenon", "xeres", "xylan", "xylit", "xylol", "yakin", "yamen", "yancy", "yerba", "yogin", "yomud", "ytong", "yucca", "zacke", "zaehe", "zagel", "zagen", "zaine", "zakat", "zamba", "zambo", "zamia", "zarge", "zarin", "zaupe", "zazen", "zeder", "zeese", "zehnt", "zella", "zelot", "zenon", "zerbe", "zerin", "zerit", "zeter", "zibbe", "zibet", "zicke", "zider", "ziehe", "ziele", "zielt", "ziest", "zilie", "zille", "zinke", "zinko", "zinne", "zippe", "zirbe", "zirpe", "zisch", "ziste", "zitze", "zloty", "zobel", "zober", "zonal", "zores", "zosse", "zoten", "zotig", "zotte", "zuave", "zubau", "zuber", "zuger", "zugig", "zugut", "zumal", "zupan", "zurna", "zutun", "zuweg", "zween", "zwirn", "zyste"
  ];
  
  /**
   * ANIMATIONS
   */
  
  /* CONFETTI
  let myConfetti = confetti.create(document.querySelector('canvas'), {
    resize: true,
    useWorker: true
  })
  
  myConfetti({
    particleCount: 100,
    spread: 160
  })
  */
  
  // ADD NEW LETTER
  const animateTileBounce = (tile) => {
    tile.classList.add('is-filled', 'animate__animated', 'animate__bounceIn')
  }
  
  // SUBMIT NON-EXISTANT WORD
  const animateRowShake = (row) => {
    row.classList.remove('animate__shakeX')
  
    setTimeout(() => {
      row.classList.add('animate__animated', 'animate__shakeX')
    }, 0)
  }
  
  // SUBMIT EXISTING WORD
  const animateTileReveal = (row) => {
  
    row.querySelectorAll('.tile').forEach((tile, index) => {
      tile.classList.remove('animate__bounceIn', 'animate__flipInY');
  
      setTimeout(() => {
        tile.style.visibility = 'visible';
        tile.classList.add('animate__flipInY', `animate__delay-${index}s`);
      }, 0)
    })
  
  }
  
  // CORRECT WORD!!
  const animateTileDance = (row) => {
  
    row.querySelectorAll('.tile').forEach((tile, index) => {
      tile.innerHTML = solution.charAt(index);
  
      tile.classList.remove('animate__bounceIn', 'animate__flipInY', 'animate__bounce');
  
      setTimeout(() => {
        tile.classList.add('animate__bounce', `animate__delay-${index}s`)
      }, 0);
    })
  
  }
  
  // WHOLE BOARD FALLS
  const youVeryMuchLose = () => {
    let board = document.querySelector('.board')
    board.classList.add('animate__animated', 'animate__hinge')
  
    // TODO: show solution behind board:
  
    // board.querySelectorAll('.row').forEach((el) => {
    //   el.classList.add('animate__animated', 'animate__hinge')
    // })
  
    // setTimeout(() => {
    //   let h2 = document.createElement('h2')
    //   h2.innerHTML = solution.toUpperCase()
    //   board.prepend(h2)
    // }, 1500);
  }
  
  // TOOLTIP
  const tooltipElement = document.querySelector('.tooltip');
  
  const tooltip = (text) => {
    if (!text) return;
  
    tooltipElement.innerHTML = text;
    tooltipElement.className = 'tooltip animate__animated';
  
    setTimeout(() => {
      tooltipElement.classList.add('animate__fadeIn');
      tooltipAnimating = true;
    }, 0);
  
    setTimeout(() => {
      tooltipElement.className = 'tooltip animate__animated';
      tooltipElement.classList.add('animate__fadeOut');
  
      // tooltipElement.addEventListener('animationend', () => {
      //   tooltipAnimating = false;
      // });
    }, 2500);
  }
  
  
  /**
   * APP.JS
   */
  // DATA
  const maxWordLength = 5;
  const maxTries = 6;
  
  let solution = allWords[(allWords.length * Math.random()) | 0].toLowerCase();
  let word = "";
  let tries = 1;
  
  // no accents (pre slovencinu)
  let noAccentWords = allWords.map((x) => noAccents(x));
  let noAccentSolution = noAccents(solution);
  
  let lettersInRow = {
    correct: [],
    present: [],
    wrong: [],
  };
  
  MicroModal.init({
    disableFocus: true
  });
  
  // KEY PRESS
  document.addEventListener("keydown", (event) => {
    // de-focus any active element
    if ("activeElement" in document) document.activeElement.blur();
  
    if (event.key === "Enter") {
      submitWord();
    } else if (event.key === "Backspace") {
      removeLetter();
    } else {
      addLetter(event.key);
    }
  });
  
  // SUBMIT
  const submitWord = () => {
    if (word.length < maxWordLength) return;
  
    // is this a real word ?
    if (!noAccentWords.includes(noAccents(word))) {
      let lastLetter = word.slice(-1);
  
      if (lastLetter.toLowerCase() === 'y') {
        tooltip("?");
      }
      // else if (['a', 'e', 'y', 'i'].includes(lastLetter)) {
      //   tooltip('žiadne prídavné mená');
      // }
      else {
        tooltip('?');
      }
  
      animateRowShake(currentRow());
      return;
    }
  
    findLettersInRow();
    highlightLetters();
    animateTileReveal(currentRow());
  
    // wait for reveal animation to finish
    setTimeout(() => {
      judgeResult();
    }, 1500);
  };
  
  // ADD LETTER
  const addLetter = (character) => {
    if (word.length >= maxWordLength) return;
  
    // allow only letters
    if (/^\p{L}$/u.test(character)) {
      word = word + character;
      word = word.toLowerCase();
  
      let tile = currentTile();
      tile.innerHTML = character;
  
      animateTileBounce(tile);
    }
  
    // console.log(word);
  };
  
  // REMOVE LETTER
  const removeLetter = () => {
    if (word.length <= 0) return;
  
    let tile = currentTile();
    tile.innerHTML = "";
    tile.className = "tile";
  
    word = word.slice(0, -1);
  };
  
  // UPDATE THIS TILE
  const currentTile = () => {
    return currentRow().querySelector(`:nth-child(${word.length})`);
  };
  
  const currentRow = () => {
    return document.querySelector(`.row:nth-of-type(${tries})`);
  };
  
  // JUDGE RESULT
  const judgeResult = () => {
    if (noAccents(word) === noAccentSolution) {
      animateTileDance(currentRow());
  
      // heck yeah!
      setTimeout(() => confetti(), 1500);
  
      // tooltip
      setTimeout(() => {
        if (tries === 1) tooltip('WOW!');
        else if (tries === 2 || tries === 3) tooltip('KLASSE!');
        else if (tries === 4 || tries === 5) tooltip('GUT GEMACHT!');
        else if (tries === 6) tooltip('DAS WAR KNAPP!');
      }, 1500);
  
      // keyboard
      setTimeout(() => {
        document.querySelectorAll('.keyboard .row .tile').forEach(tile => {
          tile.classList.add('animate__animated', 'animate__fadeOutDown')
        });
      }, 2500);
  
      // again button
      setTimeout(() => {
        let winnerButton = document.querySelector('.keyboard .winner');
        winnerButton.style.display = 'flex';
        winnerButton.classList.add('animate__animated', 'animate__fadeIn');
      }, 2750);
  
    } else if (tries >= maxTries) {
      youVeryMuchLose();
      setTimeout(() => {
        alert(`LÖSUNG: ${solution.toUpperCase()}`);
        window.location.reload();
      }, 2000);
    } else {
      word = "";
      tries++;
    }
  };
  
  // FIND LETTERS IN ROW
  const findLettersInRow = () => {
    let present = [];
    let correct = [];
    let wrong = [];
  
    [...word].forEach((letter, index) => {
      letter = noAccents(letter);
  
      // letter in correct place
      if (letter === noAccentSolution.charAt(index)) {
        correct.push(letter);
      }
      // letter in wrong place
      else if (noAccentSolution.includes(letter)) {
        present.push(letter);
      }
      // wrong letter
      else {
        wrong.push(letter);
      }
    });
  
    lettersInRow = {
      present,
      correct,
      wrong,
    };
  };
  
  // HIGHLIGHT LETTERS
  const highlightLetters = () => {
    let presentLetters = [];
  
    // board row
    currentRow()
      .querySelectorAll(".tile")
      .forEach((tile, index) => {
        tile.style.visibility = "hidden";
  
        let letter = noAccents(word.charAt(index));
        let colorClass = "wrong";
  
        if (noAccentSolution.includes(letter)) {
          // if a letter is both 'present' and 'correct' only show 'correct'
          // only show each 'present' letter once
          if (!lettersInRow.correct.includes(letter) && !presentLetters.includes(letter)) {
            colorClass = "present";
            presentLetters.push(letter);
          }
        }
  
        if (letter === noAccentSolution.charAt(index)) {
          colorClass = "correct";
        }
  
        tile.classList.add(colorClass);
      });
  
    // aplhabet row in footer
    document.querySelectorAll(".keyboard .tile").forEach((tile, index) => {
      let colorClass = "";
  
      if (lettersInRow.wrong.includes(tile.id)) colorClass = "wrong";
      if (lettersInRow.present.includes(tile.id)) colorClass = "present";
      if (lettersInRow.correct.includes(tile.id)) colorClass = "correct";
  
      if (colorClass) tile.classList.add(colorClass);
    });
  };
  
  // REMOVE ACCENTS
  function noAccents(str) {
    return str.normalize("NFD").replace(/\p{Diacritic}/gu, "");
  }
  
  // MOBILE
  const keyboard = document.querySelector('.keyboard');
  keyboard.addEventListener('click', (event) => {
    if (event.target.nodeName !== 'BUTTON') return; // clicked on link?
    let character = event.target.id;
  
    if (character === 'again') {
      window.location.reload();
    }
    else if (character === '↵') {
      submitWord();
    }
    else if (character === '←') {
      removeLetter();
    }
    else {
      addLetter(character);
    }
  });
  