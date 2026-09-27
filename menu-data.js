/*
 * Naveka – dati del menù
 * ---------------------------------------------------------------
 * Per cambiare un prezzo basta modificare il numero qui sotto.
 * Fiyat değiştirmek için sadece aşağıdaki sayıyı düzenleyin.
 *
 *  name  : nome del piatto (italiano)
 *  desc  : ingredienti / descrizione (italiano)
 *  tr    : traduzioni del nome  { en, de }
 *  price : prezzo in euro
 *  prices: [prezzo 25 cm, prezzo 1 metro]   (solo pizze)
 *  tags  : "veg" vegetariano, "hot" piccante, "sea" pesce
 */
window.MENU = {
  restaurant: "Naveka",
  currency: "€",
  coperto: 2.0,

  sections: [
    {
      id: "pizze",
      title: { it: "Pizze al metro", en: "Pizza by the metre", de: "Pizza am Meter" },
      note: {
        it: "Ogni pizza è disponibile da 25 cm oppure da 1 metro.",
        en: "Every pizza comes in 25 cm or 1 metre size.",
        de: "Jede Pizza gibt es mit 25 cm oder 1 Meter."
      },
      sizes: ["25 cm", "1 m"],
      items: [
        { name: "Focaccia", desc: "bianca / rossa", info: "base", prices: [5, 20], tags: ["veg"] },
        { name: "Marinara", desc: "pomodoro, aglio, origano", info: "base", prices: [5, 20], tags: ["veg"] },
        { name: "Margherita", desc: "pomodoro, mozzarella, basilico", prices: [7, 28], tags: ["veg"] },
        { name: "Pugliese", desc: "pomodoro, mozzarella, cipolle", prices: [7.5, 30], tags: ["veg"] },
        { name: "Funghi", desc: "pomodoro, mozzarella, funghi", prices: [8.5, 34], tags: ["veg"] },
        { name: "Würstel", desc: "pomodoro, mozzarella, würstel", prices: [8.5, 34] },
        { name: "Carciofi", desc: "pomodoro, mozzarella, carciofi", prices: [8.5, 34], tags: ["veg"] },
        { name: "Gorgonzola", desc: "pomodoro, mozzarella, gorgonzola", prices: [9, 36], tags: ["veg"] },
        { name: "Napoli", desc: "pomodoro, mozzarella, acciughe, origano", prices: [9, 36], tags: ["sea"] },
        { name: "Prosciutto", desc: "pomodoro, mozzarella, prosciutto cotto", prices: [9, 36] },
        { name: "Peperoni", desc: "pomodoro, mozzarella, peperoni", prices: [9, 36], tags: ["veg"] },
        { name: "Zucchine", desc: "pomodoro, mozzarella, zucchine grigliate", prices: [9, 36], tags: ["veg"] },
        { name: "Siciliana", desc: "pomodoro, mozzarella, melanzane, peperoncino", prices: [9, 36], tags: ["veg", "hot"] },
        { name: "Diavola", desc: "pomodoro, mozzarella, salame piccante", prices: [9, 36], tags: ["hot"] },
        { name: "Diavola con gorgonzola", desc: "pomodoro, mozzarella, salame piccante, gorgonzola", prices: [10.5, 42], tags: ["hot"] },
        { name: "Prosciutto crudo", desc: "pomodoro, mozzarella, prosciutto crudo", prices: [10, 40] },
        { name: "Romana", desc: "pomodoro, mozzarella, acciughe, olive, capperi, origano", prices: [10, 40], tags: ["sea"] },
        { name: "Pox", desc: "pomodoro, mozzarella, acciughe, capperi, gorgonzola", prices: [11, 44], tags: ["sea"] },
        { name: "Rucola e grana", desc: "pomodoro, mozzarella, rucola, grana", prices: [10, 40], tags: ["veg"] },
        { name: "Tonno", desc: "pomodoro, mozzarella, tonno", prices: [11, 44], tags: ["sea"] },
        { name: "4 formaggi", desc: "pomodoro, mozzarella, emmental, gorgonzola, grana grattugiato", prices: [11, 44], tags: ["veg"] },
        { name: "Porcini", desc: "pomodoro, mozzarella, porcini", prices: [10.5, 42], tags: ["veg"] },
        { name: "Prosciutto e carciofi", desc: "pomodoro, mozzarella, prosciutto cotto, carciofi", prices: [10, 40] },
        { name: "Prosciutto e funghi", desc: "pomodoro, mozzarella, prosciutto cotto, funghi", prices: [10, 40] },
        { name: "Prosciutto e zola", desc: "pomodoro, mozzarella, prosciutto cotto, gorgonzola", prices: [10, 40] },
        { name: "Rucola e speck", desc: "pomodoro, mozzarella, rucola, speck", prices: [11, 44] },
        { name: "Salsiccia", desc: "pomodoro, mozzarella, salsiccia", prices: [11, 44] },
        { name: "Tonno e cipolle", desc: "pomodoro, mozzarella, tonno, cipolle", prices: [12, 48], tags: ["sea"] },
        { name: "4 stagioni", desc: "pomodoro, mozzarella, prosciutto cotto, funghi, carciofi, olive, origano", prices: [11, 44] },
        { name: "Capricciosa", desc: "pomodoro, mozzarella, funghi, prosciutto cotto, salame piccante", prices: [11, 44], tags: ["hot"] },
        { name: "Calzone", desc: "pomodoro, mozzarella, prosciutto cotto", prices: [10, 40] },
        { name: "Calzone farcito", desc: "pomodoro, mozzarella, prosciutto cotto, peperoni, funghi, carciofi, olive, origano", prices: [13, 52] },
        { name: "Patatine", desc: "pomodoro, mozzarella, patatine fritte*", prices: [11, 44], tags: ["veg"] },
        { name: "Patatine e würstel", desc: "pomodoro, mozzarella, patatine fritte*, würstel", prices: [12, 48] },
        { name: "Giglio", desc: "pomodoro, mozzarella, prosciutto crudo, panna", prices: [11, 44] },
        { name: "Speck", desc: "pomodoro, mozzarella, speck", prices: [10, 40] },
        { name: "Panna e speck", desc: "pomodoro, mozzarella, panna, speck", prices: [11, 44] },
        { name: "Speck e brie", desc: "pomodoro, mozzarella, speck, brie", prices: [11, 44] },
        { name: "Pancetta e brie", desc: "pomodoro, mozzarella, pancetta, brie", prices: [11, 44] },
        { name: "Vegetariana", desc: "pomodoro, mozzarella, peperoni, zucchine grigliate, melanzane", prices: [11, 44], tags: ["veg"] },
        { name: "Naveka", desc: "pomodoro, mozzarella, peperoni, tonno, salame piccante", prices: [13, 52], tags: ["hot", "sea"], star: true },
        { name: "Primavera", desc: "pomodoro, mozzarella, prosciutto cotto, porcini, pomodorini a fette", prices: [13, 52] },
        { name: "Gamberetti", desc: "pomodoro, mozzarella, gamberetti", prices: [12, 48], tags: ["sea"] },
        { name: "Rucola e gamberetti", desc: "pomodoro, mozzarella, gamberetti, rucola", prices: [13, 52], tags: ["sea"] },
        { name: "Zucchine e gamberetti", desc: "pomodoro, mozzarella, zucchine grigliate, gamberetti", prices: [14, 56], tags: ["sea"] },
        { name: "Rucola, grana e bresaola", desc: "pomodoro, mozzarella, rucola, grana, bresaola", prices: [13, 52] },
        { name: "Rucola, grana e pomodorini", desc: "pomodoro, mozzarella, rucola, grana, pomodorini", prices: [11, 44], tags: ["veg"] },
        { name: "Tirolese", desc: "pomodoro, mozzarella, speck, würstel, funghi, panna", prices: [13, 52] },
        { name: "Tutti i gusti", desc: "pomodoro, mozzarella, salame piccante, peperoni, porcini, zucchine, prosciutto cotto, grana grattugiato", prices: [15, 60], tags: ["hot"] },
        { name: "Bufala", desc: "pomodoro, mozzarella, mozzarella di bufala", prices: [11, 44], tags: ["veg"] },
        { name: "Veliero", desc: "pomodoro, mozzarella, lattuga, rucola, prosciutto cotto, porcini, salame piccante, panna", prices: [15, 60], tags: ["hot"] },
        { name: "Calamari", desc: "pomodoro, mozzarella, calamari fritti", prices: [17, 68], tags: ["sea"] },
        { name: "Frutti di mare", desc: "pomodoro, mozzarella, polpo, seppie, gamberetti, prezzemolo", prices: [17, 68], tags: ["sea"] },
        { name: "Mari e monti", desc: "pomodoro, mozzarella, frutti di mare, porcini", prices: [18, 72], tags: ["sea"] },
        { name: "Fritto mare", desc: "pomodoro, mozzarella, polpo, seppie, gamberetti, calamari fritti, prezzemolo", prices: [20, 80], tags: ["sea"] },
        { name: "Calamari e gamberetti", desc: "pomodoro, mozzarella, calamari, gamberetti", prices: [20, 80], tags: ["sea"] },
        { name: "Calamari e patatine", desc: "pomodoro, mozzarella, calamari, patatine", prices: [19, 76], tags: ["sea"] }
      ],
      footer: {
        it: "Aggiunte: per altre aggiunte chiedere al personale.",
        en: "Extra toppings: please ask our staff.",
        de: "Extra-Beläge: bitte fragen Sie unser Personal."
      }
    },

    {
      id: "antipasti",
      title: { it: "Antipasti", en: "Starters", de: "Vorspeisen" },
      items: [
        { name: "Insalata di rucola e gamberetti", tr: { en: "Rocket and shrimp salad", de: "Rucola-Garnelen-Salat" }, price: 12, tags: ["sea"] },
        { name: "Insalata di mare", tr: { en: "Seafood salad", de: "Meeresfrüchtesalat" }, price: 18, tags: ["sea"] },
        { name: "Cocktail di gamberi", tr: { en: "Prawn cocktail", de: "Krabbencocktail" }, price: 12, tags: ["sea"] },
        { name: "Pepata di cozze", tr: { en: "Peppered mussels", de: "Gepfefferte Miesmuscheln" }, price: 12, tags: ["sea"] },
        { name: "Cozze alla marinara", tr: { en: "Mussels marinara", de: "Miesmuscheln Marinara" }, price: 12, tags: ["sea"] },
        { name: "Cozze alla siciliana", desc: "sugo pomodoro piccante", tr: { en: "Sicilian mussels (spicy tomato sauce)", de: "Miesmuscheln sizilianisch (scharfe Tomatensauce)" }, price: 12, tags: ["sea", "hot"] },
        { name: "Chele di granchio (5 pz.)", tr: { en: "Crab claws (5 pcs)", de: "Krebsscheren (5 Stk.)" }, price: 10, tags: ["sea"] },
        { name: "Arrosticini di pesce (6 pz.)", tr: { en: "Fish skewers (6 pcs)", de: "Fischspießchen (6 Stk.)" }, price: 12, tags: ["sea"] },
        { name: "Antipasto misto caldo", desc: "insalata di mare, arrosticino di calamari, 1 chela di granchio, 1 surimi, cocktail di gamberi, tonno affumicato", tr: { en: "Mixed warm starter", de: "Gemischte warme Vorspeise" }, price: 20, tags: ["sea"] },
        { name: "Pesciolini", tr: { en: "Small fried fish", de: "Frittierte Fischchen" }, price: 10, tags: ["sea"] },
        { name: "Bresaola con rucola e grana", tr: { en: "Bresaola with rocket and parmesan", de: "Bresaola mit Rucola und Grana" }, price: 15 },
        { name: "Carpaccio di salmone e tonno", tr: { en: "Salmon and tuna carpaccio", de: "Lachs- und Thunfischcarpaccio" }, price: 16, tags: ["sea"] },
        { name: "Polpo con patate", tr: { en: "Octopus with potatoes", de: "Oktopus mit Kartoffeln" }, price: 18, tags: ["sea"] }
      ]
    },

    {
      id: "primi-terra",
      title: { it: "Primi piatti · Terra", en: "Pasta & risotto · Land", de: "Erste Gänge · Land" },
      items: [
        { name: "Spaghetti all'arrabbiata", tr: { en: "Spaghetti arrabbiata (spicy tomato)", de: "Spaghetti all'arrabbiata (scharf)" }, price: 10, tags: ["veg", "hot"] },
        { name: "Risotto speck e porcini", desc: "min. 2 persone", tr: { en: "Speck and porcini risotto (min. 2 people)", de: "Risotto mit Speck und Steinpilzen (mind. 2 Pers.)" }, price: 15 }
      ]
    },

    {
      id: "primi-mare",
      title: { it: "Primi piatti · Mare", en: "Pasta & risotto · Sea", de: "Erste Gänge · Meer" },
      items: [
        { name: "Spaghetti alle vongole", tr: { en: "Spaghetti with clams", de: "Spaghetti mit Venusmuscheln" }, price: 16, tags: ["sea"] },
        { name: "Linguine agli scampi*", tr: { en: "Linguine with scampi", de: "Linguine mit Scampi" }, price: 16, tags: ["sea"] },
        { name: "Linguine allo scoglio*", tr: { en: "Linguine with mixed seafood", de: "Linguine mit Meeresfrüchten" }, price: 18, tags: ["sea"] },
        { name: "Penne al pesce spada", tr: { en: "Penne with swordfish", de: "Penne mit Schwertfisch" }, price: 16, tags: ["sea"] },
        { name: "Risotto ai frutti di mare", desc: "su prenotazione, min. 2 persone", tr: { en: "Seafood risotto (on request, min. 2 people)", de: "Meeresfrüchte-Risotto (auf Vorbestellung, mind. 2 Pers.)" }, price: 18, tags: ["sea"] }
      ]
    },

    {
      id: "secondi",
      title: { it: "Secondi piatti", en: "Main courses", de: "Hauptgerichte" },
      items: [
        { name: "Gamberoni alla griglia (6 pz.)*", tr: { en: "Grilled king prawns (6 pcs)", de: "Gegrillte Riesengarnelen (6 Stk.)" }, price: 20, tags: ["sea"] },
        { name: "Grigliata mista di pesci e crostacei*", tr: { en: "Mixed grill of fish and shellfish", de: "Grillplatte mit Fisch und Krustentieren" }, price: 35, tags: ["sea"] },
        { name: "Trancio di pesce spada*", tr: { en: "Swordfish steak", de: "Schwertfischsteak" }, price: 16, tags: ["sea"] },
        { name: "Trancio di salmone*", tr: { en: "Salmon steak", de: "Lachssteak" }, price: 16, tags: ["sea"] },
        { name: "Branzino 4/6 hg", tr: { en: "Sea bass (400–600 g)", de: "Wolfsbarsch (400–600 g)" }, price: 19, tags: ["sea"] },
        { name: "Orata 4/6 hg", tr: { en: "Sea bream (400–600 g)", de: "Dorade (400–600 g)" }, price: 19, tags: ["sea"] },
        { name: "Fritto misto*", tr: { en: "Mixed fried seafood", de: "Frittierte Meeresfrüchte" }, price: 20, tags: ["sea"] },
        { name: "Fritto di calamari*", tr: { en: "Fried squid", de: "Frittierte Calamari" }, price: 18, tags: ["sea"] },
        { name: "Braciola di maiale", tr: { en: "Pork chop", de: "Schweinekotelett" }, price: 10 },
        { name: "Cotoletta alla milanese", tr: { en: "Milanese breaded cutlet", de: "Paniertes Kotelett nach Mailänder Art" }, price: 13 },
        { name: "Costata 4,5/5 hg", tr: { en: "Beef rib steak (450–500 g)", de: "Rinderkotelett (450–500 g)" }, price: 20 },
        { name: "Hamburger con patatine fritte", desc: "1 pezzo, 200 g", tr: { en: "Hamburger (200 g) with fries", de: "Hamburger (200 g) mit Pommes" }, price: 15 }
      ]
    },

    {
      id: "contorni",
      title: { it: "Contorni", en: "Side dishes", de: "Beilagen" },
      items: [
        { name: "Insalata mista", tr: { en: "Mixed salad", de: "Gemischter Salat" }, price: 5, tags: ["veg"] },
        { name: "Insalata verde", tr: { en: "Green salad", de: "Grüner Salat" }, price: 4, tags: ["veg"] },
        { name: "Verdure miste alla griglia", tr: { en: "Mixed grilled vegetables", de: "Gemischtes Grillgemüse" }, price: 7, tags: ["veg"] },
        { name: "Patatine fritte*", tr: { en: "French fries", de: "Pommes frites" }, price: 5, tags: ["veg"] },
        { name: "Crocchette di patate (6 pz.)*", tr: { en: "Potato croquettes (6 pcs)", de: "Kartoffelkroketten (6 Stk.)" }, price: 5, tags: ["veg"] }
      ]
    },

    {
      id: "formaggi",
      title: { it: "Formaggi", en: "Cheese", de: "Käse" },
      items: [
        { name: "Formaggi misti", tr: { en: "Mixed cheese platter", de: "Gemischte Käseplatte" }, price: 8, tags: ["veg"] }
      ]
    },

    {
      id: "frutta",
      title: { it: "Frutta", en: "Fruit", de: "Obst" },
      items: [
        { name: "Frutta di stagione", tr: { en: "Seasonal fruit", de: "Obst der Saison" }, price: 5, tags: ["veg"] },
        { name: "Macedonia con gelato", tr: { en: "Fruit salad with ice cream", de: "Obstsalat mit Eis" }, price: 6, tags: ["veg"] },
        { name: "Fragole", tr: { en: "Strawberries", de: "Erdbeeren" }, price: 6, tags: ["veg"] },
        { name: "Fragole con gelato / con panna", tr: { en: "Strawberries with ice cream / cream", de: "Erdbeeren mit Eis / Sahne" }, price: 7, tags: ["veg"] }
      ]
    },

    {
      id: "dolci",
      title: { it: "Dolci", en: "Desserts", de: "Desserts" },
      items: [
        { name: "Tiramisù classico", tr: { en: "Classic tiramisù", de: "Klassisches Tiramisù" }, price: 5.5, tags: ["veg"] },
        { name: "Tiramisù al pistacchio", tr: { en: "Pistachio tiramisù", de: "Pistazien-Tiramisù" }, price: 6, tags: ["veg"] },
        { name: "Tartufo bianco", tr: { en: "White tartufo (ice cream)", de: "Tartufo weiß (Eis)" }, price: 5, tags: ["veg"] },
        { name: "Tartufo nero", tr: { en: "Dark tartufo (ice cream)", de: "Tartufo schwarz (Eis)" }, price: 5, tags: ["veg"] },
        { name: "Panna cotta", tr: { en: "Panna cotta", de: "Panna cotta" }, price: 5, tags: ["veg"] },
        { name: "Crema catalana", tr: { en: "Crema catalana", de: "Crema catalana" }, price: 5, tags: ["veg"] },
        { name: "Meringata", tr: { en: "Meringue ice-cream cake", de: "Baiser-Eistorte" }, price: 5, tags: ["veg"] },
        { name: "Profiteroles bianchi / neri", tr: { en: "Profiteroles white / dark", de: "Profiteroles weiß / dunkel" }, price: 5, tags: ["veg"] },
        { name: "Gelati e semifreddi", tr: { en: "Ice creams and semifreddi", de: "Eis und Halbgefrorenes" }, price: 5, tags: ["veg"] },
        { name: "Affogato al caffè", tr: { en: "Ice cream with espresso", de: "Eis mit Espresso" }, price: 7, tags: ["veg"] },
        { name: "Affogato al whisky / Grand Marnier", tr: { en: "Ice cream with whisky / Grand Marnier", de: "Eis mit Whisky / Grand Marnier" }, price: 8 }
      ]
    },

    {
      id: "bevande",
      title: { it: "Birre e bibite", en: "Beers & soft drinks", de: "Biere & Getränke" },
      items: [
        { name: "Birra alla spina chiara · 30 cl", desc: "HB Traunstein Pils", tr: { en: "Draught lager · 30 cl", de: "Helles vom Fass · 0,3 l" }, price: 4 },
        { name: "Birra alla spina chiara · 50 cl", desc: "HB Traunstein Pils", tr: { en: "Draught lager · 50 cl", de: "Helles vom Fass · 0,5 l" }, price: 6 },
        { name: "Birra alla spina rossa · 30 cl", desc: "HB Maximilian Doppelbock", tr: { en: "Draught red beer · 30 cl", de: "Dunkles vom Fass · 0,3 l" }, price: 4.5 },
        { name: "Birra alla spina rossa · 50 cl", desc: "HB Maximilian Doppelbock", tr: { en: "Draught red beer · 50 cl", de: "Dunkles vom Fass · 0,5 l" }, price: 7 },
        { name: "Birra alla spina weiss · 30 cl", desc: "HB Hefe-Weizen", tr: { en: "Draught wheat beer · 30 cl", de: "Weißbier vom Fass · 0,3 l" }, price: 4.5 },
        { name: "Birra alla spina weiss · 50 cl", desc: "HB Hefe-Weizen", tr: { en: "Draught wheat beer · 50 cl", de: "Weißbier vom Fass · 0,5 l" }, price: 7 },
        { name: "Birre nazionali · 66 cl", desc: "Moretti, Peroni", tr: { en: "Italian beers · 66 cl", de: "Italienische Biere · 0,66 l" }, price: 4 },
        { name: "Birra in bottiglia · 33 cl", desc: "Beck's, Corona, Heineken", tr: { en: "Bottled beer · 33 cl", de: "Flaschenbier · 0,33 l" }, price: 4 },
        { name: "Birra analcolica · 33 cl", tr: { en: "Alcohol-free beer · 33 cl", de: "Alkoholfreies Bier · 0,33 l" }, price: 4.5 },
        { name: "Acqua naturale / frizzante · 0,50 l", tr: { en: "Still / sparkling water · 0.5 l", de: "Wasser still / sprudelnd · 0,5 l" }, price: 2 },
        { name: "Acqua naturale / frizzante · 1 l", tr: { en: "Still / sparkling water · 1 l", de: "Wasser still / sprudelnd · 1 l" }, price: 3 },
        { name: "Coca-Cola lattina", tr: { en: "Coca-Cola can", de: "Coca-Cola Dose" }, price: 3 },
        { name: "Fanta lattina", tr: { en: "Fanta can", de: "Fanta Dose" }, price: 3 },
        { name: "Sprite lattina", tr: { en: "Sprite can", de: "Sprite Dose" }, price: 3 },
        { name: "Tè alla pesca / limone", tr: { en: "Peach / lemon iced tea", de: "Eistee Pfirsich / Zitrone" }, price: 3 }
      ]
    },

    {
      id: "vini",
      title: { it: "Vini", en: "Wines", de: "Weine" },
      items: [
        { name: "Bianco alla spina · ¼ l", desc: "Cuordivigna Frizzante", tr: { en: "House white on tap, lightly sparkling", de: "Offener Weißwein, prickelnd" }, price: 4 },
        { name: "Bianco alla spina · ½ l", desc: "Cuordivigna Frizzante", tr: { en: "House white on tap, lightly sparkling", de: "Offener Weißwein, prickelnd" }, price: 7 },
        { name: "Bianco alla spina · 1 l", desc: "Cuordivigna Frizzante", tr: { en: "House white on tap, lightly sparkling", de: "Offener Weißwein, prickelnd" }, price: 12 },
        { name: "Müller Thurgau", desc: "Tenuta Cà Bolani", tr: { en: "White wine", de: "Weißwein" }, price: 18 },
        { name: "Riesling", desc: "Oltrepò Pavese", tr: { en: "White wine", de: "Weißwein" }, price: 16 },
        { name: "Bonarda / Barbera", desc: "Oltrepò Pavese", tr: { en: "Red wine", de: "Rotwein" }, price: 15 },
        { name: "Pinot Grigio fermo e frizzante", desc: "Oltrepò Pavese", tr: { en: "White wine, still or sparkling", de: "Weißwein, still oder prickelnd" }, price: 16 },
        { name: "Croatina rosso fermo", desc: "Oltrepò Pavese", tr: { en: "Still red wine", de: "Roter Stillwein" }, price: 15 },
        { name: "Prosecco", desc: "Tenuta del Roggio · Valdobbiadene", tr: { en: "Sparkling white wine", de: "Weißer Schaumwein" }, price: 20 },
        { name: "Prosecco extra dry", desc: "Tenuta del Roggio · Valdobbiadene", tr: { en: "Sparkling white wine, extra dry", de: "Weißer Schaumwein, extra dry" }, price: 20 },
        { name: "Falanghina", desc: "Laguardiense", tr: { en: "White wine", de: "Weißwein" }, price: 20 },
        { name: "Greco", desc: "Laguardiense", tr: { en: "White wine", de: "Weißwein" }, price: 20 }
      ]
    },

    {
      id: "spumanti",
      title: { it: "Spumanti", en: "Sparkling wines", de: "Schaumweine" },
      items: [
        { name: "Spumanti nazionali", tr: { en: "Italian sparkling wines", de: "Italienische Schaumweine" }, price: 20 }
      ]
    },

    {
      id: "liquori",
      title: { it: "Liquori", en: "Spirits & liqueurs", de: "Spirituosen & Liköre" },
      items: [
        { name: "Whisky / Brandy / Cognac", price: 5 },
        { name: "Jack Daniel's / Chivas Regal", price: 7.5 },
        { name: "Grappe", tr: { en: "Grappa", de: "Grappa" }, price: 5 },
        { name: "Grappa di Francoli", price: 7 },
        { name: "Amari", tr: { en: "Italian herbal liqueurs", de: "Italienische Kräuterliköre" }, price: 4 },
        { name: "Amaro del Capo", price: 4 },
        { name: "Limoncello / Liquirizia / Mirto", tr: { en: "Lemon / liquorice / myrtle liqueur", de: "Zitronen- / Lakritz- / Myrtenlikör" }, price: 4 },
        { name: "Baileys", price: 5 },
        { name: "Sorbetto", tr: { en: "Sorbet", de: "Sorbet" }, price: 6 }
      ]
    },

    {
      id: "caffe",
      title: { it: "Caffè", en: "Coffee", de: "Kaffee" },
      items: [
        { name: "Caffè", tr: { en: "Espresso", de: "Espresso" }, price: 2 },
        { name: "Caffè decaffeinato / Caffè d'orzo / Ginseng", tr: { en: "Decaf / barley coffee / ginseng coffee", de: "Entkoffeiniert / Gerstenkaffee / Ginseng-Kaffee" }, price: 2 },
        { name: "Caffè corretto", tr: { en: "Espresso with a dash of liqueur", de: "Espresso mit Schuss" }, price: 3 }
      ]
    }
  ]
};
