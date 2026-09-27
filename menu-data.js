/*
 * Naveka – dati del menù
 * ---------------------------------------------------------------
 * Per cambiare un prezzo basta modificare il numero qui sotto.
 * Fiyat değiştirmek için sadece aşağıdaki sayıyı düzenleyin.
 *
 *  name  : nome del piatto (italiano)
 *  desc  : ingredienti / descrizione (italiano)
 *  tr    : traduzioni del nome  { en, tr, fr, de, es }
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
      title: { it: "Pizze al metro", en: "Pizza by the metre", tr: "Metre pizza", fr: "Pizzas au mètre", de: "Pizza am Meter", es: "Pizzas al metro" },
      note: {
        it: "Ogni pizza è disponibile da 25 cm oppure da 1 metro.",
        en: "Every pizza comes in 25 cm or 1 metre size.",
        tr: "Her pizza 25 cm veya 1 metre olarak sunulur.",
        fr: "Chaque pizza est disponible en 25 cm ou en 1 mètre.",
        de: "Jede Pizza gibt es mit 25 cm oder 1 Meter.",
        es: "Cada pizza está disponible de 25 cm o de 1 metro."
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
        tr: "Ekstra malzeme için lütfen personele danışın.",
        fr: "Suppléments : veuillez demander à notre personnel.",
        de: "Extra-Beläge: bitte fragen Sie unser Personal.",
        es: "Ingredientes extra: pregunte a nuestro personal."
      }
    },

    {
      id: "antipasti",
      title: { it: "Antipasti", en: "Starters", tr: "Başlangıçlar", fr: "Entrées", de: "Vorspeisen", es: "Entrantes" },
      items: [
        { name: "Insalata di rucola e gamberetti", tr: { en: "Rocket and shrimp salad", tr: "Roka ve karides salatası", fr: "Salade de roquette et crevettes", de: "Rucola-Garnelen-Salat", es: "Ensalada de rúcula y gambas" }, price: 12, tags: ["sea"] },
        { name: "Insalata di mare", tr: { en: "Seafood salad", tr: "Deniz ürünleri salatası", fr: "Salade de fruits de mer", de: "Meeresfrüchtesalat", es: "Ensalada de marisco" }, price: 18, tags: ["sea"] },
        { name: "Cocktail di gamberi", tr: { en: "Prawn cocktail", tr: "Karides kokteyli", fr: "Cocktail de crevettes", de: "Krabbencocktail", es: "Cóctel de gambas" }, price: 12, tags: ["sea"] },
        { name: "Pepata di cozze", tr: { en: "Peppered mussels", tr: "Karabiberli midye", fr: "Moules au poivre", de: "Gepfefferte Miesmuscheln", es: "Mejillones a la pimienta" }, price: 12, tags: ["sea"] },
        { name: "Cozze alla marinara", tr: { en: "Mussels marinara", tr: "Marinara soslu midye", fr: "Moules marinières", de: "Miesmuscheln Marinara", es: "Mejillones a la marinera" }, price: 12, tags: ["sea"] },
        { name: "Cozze alla siciliana", desc: "sugo pomodoro piccante", tr: { en: "Sicilian mussels (spicy tomato sauce)", tr: "Sicilya usulü midye (acılı domates sosu)", fr: "Moules à la sicilienne (sauce tomate piquante)", de: "Miesmuscheln sizilianisch (scharfe Tomatensauce)", es: "Mejillones a la siciliana (salsa de tomate picante)" }, price: 12, tags: ["sea", "hot"] },
        { name: "Chele di granchio (5 pz.)", tr: { en: "Crab claws (5 pcs)", tr: "Yengeç kıskacı (5 adet)", fr: "Pinces de crabe (5 pièces)", de: "Krebsscheren (5 Stk.)", es: "Pinzas de cangrejo (5 uds.)" }, price: 10, tags: ["sea"] },
        { name: "Arrosticini di pesce (6 pz.)", tr: { en: "Fish skewers (6 pcs)", tr: "Balık şiş (6 adet)", fr: "Brochettes de poisson (6 pièces)", de: "Fischspießchen (6 Stk.)", es: "Brochetas de pescado (6 uds.)" }, price: 12, tags: ["sea"] },
        { name: "Antipasto misto caldo", desc: "insalata di mare, arrosticino di calamari, 1 chela di granchio, 1 surimi, cocktail di gamberi, tonno affumicato", tr: { en: "Mixed warm starter", tr: "Karışık sıcak başlangıç", fr: "Assortiment d'entrées chaudes", de: "Gemischte warme Vorspeise", es: "Entrante mixto caliente" }, price: 20, tags: ["sea"] },
        { name: "Pesciolini", tr: { en: "Small fried fish", tr: "Küçük balık kızartması", fr: "Petits poissons frits", de: "Frittierte Fischchen", es: "Pescaditos fritos" }, price: 10, tags: ["sea"] },
        { name: "Bresaola con rucola e grana", tr: { en: "Bresaola with rocket and parmesan", tr: "Roka ve grana peynirli bresaola", fr: "Bresaola, roquette et grana", de: "Bresaola mit Rucola und Grana", es: "Bresaola con rúcula y grana" }, price: 15 },
        { name: "Carpaccio di salmone e tonno", tr: { en: "Salmon and tuna carpaccio", tr: "Somon ve ton balığı carpaccio", fr: "Carpaccio de saumon et thon", de: "Lachs- und Thunfischcarpaccio", es: "Carpaccio de salmón y atún" }, price: 16, tags: ["sea"] },
        { name: "Polpo con patate", tr: { en: "Octopus with potatoes", tr: "Patatesli ahtapot", fr: "Poulpe aux pommes de terre", de: "Oktopus mit Kartoffeln", es: "Pulpo con patatas" }, price: 18, tags: ["sea"] }
      ]
    },

    {
      id: "primi-terra",
      title: { it: "Primi piatti · Terra", en: "Pasta & risotto · Land", tr: "Ara sıcaklar · Kara", fr: "Premiers plats · Terre", de: "Erste Gänge · Land", es: "Primeros platos · Tierra" },
      items: [
        { name: "Spaghetti all'arrabbiata", tr: { en: "Spaghetti arrabbiata (spicy tomato)", tr: "Arrabbiata spagetti (acılı domates)", fr: "Spaghetti all'arrabbiata (tomate piquante)", de: "Spaghetti all'arrabbiata (scharf)", es: "Espaguetis all'arrabbiata (tomate picante)" }, price: 10, tags: ["veg", "hot"] },
        { name: "Risotto speck e porcini", desc: "min. 2 persone", tr: { en: "Speck and porcini risotto (min. 2 people)", tr: "Speck ve porçini mantarlı risotto (min. 2 kişi)", fr: "Risotto speck et cèpes (min. 2 personnes)", de: "Risotto mit Speck und Steinpilzen (mind. 2 Pers.)", es: "Risotto de speck y boletus (mín. 2 personas)" }, price: 15 }
      ]
    },

    {
      id: "primi-mare",
      title: { it: "Primi piatti · Mare", en: "Pasta & risotto · Sea", tr: "Ara sıcaklar · Deniz", fr: "Premiers plats · Mer", de: "Erste Gänge · Meer", es: "Primeros platos · Mar" },
      items: [
        { name: "Spaghetti alle vongole", tr: { en: "Spaghetti with clams", tr: "Deniz tarağı soslu spagetti", fr: "Spaghetti aux palourdes", de: "Spaghetti mit Venusmuscheln", es: "Espaguetis con almejas" }, price: 16, tags: ["sea"] },
        { name: "Linguine agli scampi*", tr: { en: "Linguine with scampi", tr: "Kerevitli linguine", fr: "Linguine aux langoustines", de: "Linguine mit Scampi", es: "Linguine con cigalas" }, price: 16, tags: ["sea"] },
        { name: "Linguine allo scoglio*", tr: { en: "Linguine with mixed seafood", tr: "Deniz ürünlü linguine", fr: "Linguine aux fruits de mer", de: "Linguine mit Meeresfrüchten", es: "Linguine con marisco" }, price: 18, tags: ["sea"] },
        { name: "Penne al pesce spada", tr: { en: "Penne with swordfish", tr: "Kılıç balıklı penne", fr: "Penne à l'espadon", de: "Penne mit Schwertfisch", es: "Penne con pez espada" }, price: 16, tags: ["sea"] },
        { name: "Risotto ai frutti di mare", desc: "su prenotazione, min. 2 persone", tr: { en: "Seafood risotto (on request, min. 2 people)", tr: "Deniz ürünlü risotto (önceden sipariş, min. 2 kişi)", fr: "Risotto aux fruits de mer (sur réservation, min. 2 personnes)", de: "Meeresfrüchte-Risotto (auf Vorbestellung, mind. 2 Pers.)", es: "Risotto de marisco (por encargo, mín. 2 personas)" }, price: 18, tags: ["sea"] }
      ]
    },

    {
      id: "secondi",
      title: { it: "Secondi piatti", en: "Main courses", tr: "Ana yemekler", fr: "Plats principaux", de: "Hauptgerichte", es: "Segundos platos" },
      items: [
        { name: "Gamberoni alla griglia (6 pz.)*", tr: { en: "Grilled king prawns (6 pcs)", tr: "Izgara jumbo karides (6 adet)", fr: "Gambas grillées (6 pièces)", de: "Gegrillte Riesengarnelen (6 Stk.)", es: "Langostinos a la parrilla (6 uds.)" }, price: 20, tags: ["sea"] },
        { name: "Grigliata mista di pesci e crostacei*", tr: { en: "Mixed grill of fish and shellfish", tr: "Karışık ızgara balık ve kabuklu deniz ürünleri", fr: "Grillade mixte de poissons et crustacés", de: "Grillplatte mit Fisch und Krustentieren", es: "Parrillada mixta de pescado y marisco" }, price: 35, tags: ["sea"] },
        { name: "Trancio di pesce spada*", tr: { en: "Swordfish steak", tr: "Kılıç balığı dilimi", fr: "Pavé d'espadon", de: "Schwertfischsteak", es: "Rodaja de pez espada" }, price: 16, tags: ["sea"] },
        { name: "Trancio di salmone*", tr: { en: "Salmon steak", tr: "Somon dilimi", fr: "Pavé de saumon", de: "Lachssteak", es: "Rodaja de salmón" }, price: 16, tags: ["sea"] },
        { name: "Branzino 4/6 hg", tr: { en: "Sea bass (400–600 g)", tr: "Levrek (400–600 g)", fr: "Bar (400–600 g)", de: "Wolfsbarsch (400–600 g)", es: "Lubina (400–600 g)" }, price: 19, tags: ["sea"] },
        { name: "Orata 4/6 hg", tr: { en: "Sea bream (400–600 g)", tr: "Çipura (400–600 g)", fr: "Dorade (400–600 g)", de: "Dorade (400–600 g)", es: "Dorada (400–600 g)" }, price: 19, tags: ["sea"] },
        { name: "Fritto misto*", tr: { en: "Mixed fried seafood", tr: "Karışık deniz ürünleri kızartması", fr: "Friture mixte de la mer", de: "Frittierte Meeresfrüchte", es: "Fritura mixta de pescado" }, price: 20, tags: ["sea"] },
        { name: "Fritto di calamari*", tr: { en: "Fried squid", tr: "Kalamar tava", fr: "Calamars frits", de: "Frittierte Calamari", es: "Calamares fritos" }, price: 18, tags: ["sea"] },
        { name: "Braciola di maiale", tr: { en: "Pork chop", tr: "Domuz pirzola", fr: "Côte de porc", de: "Schweinekotelett", es: "Chuleta de cerdo" }, price: 10 },
        { name: "Cotoletta alla milanese", tr: { en: "Milanese breaded cutlet", tr: "Milano usulü pane pirzola", fr: "Escalope panée à la milanaise", de: "Paniertes Kotelett nach Mailänder Art", es: "Chuleta empanada a la milanesa" }, price: 13 },
        { name: "Costata 4,5/5 hg", tr: { en: "Beef rib steak (450–500 g)", tr: "Dana antrikot (450–500 g)", fr: "Entrecôte de bœuf (450–500 g)", de: "Rinderkotelett (450–500 g)", es: "Chuletón de ternera (450–500 g)" }, price: 20 },
        { name: "Hamburger con patatine fritte", desc: "1 pezzo, 200 g", tr: { en: "Hamburger (200 g) with fries", tr: "Hamburger (200 g), patates kızartmalı", fr: "Hamburger (200 g) avec frites", de: "Hamburger (200 g) mit Pommes", es: "Hamburguesa (200 g) con patatas fritas" }, price: 15 }
      ]
    },

    {
      id: "contorni",
      title: { it: "Contorni", en: "Side dishes", tr: "Garnitürler", fr: "Accompagnements", de: "Beilagen", es: "Guarniciones" },
      items: [
        { name: "Insalata mista", tr: { en: "Mixed salad", tr: "Karışık salata", fr: "Salade mixte", de: "Gemischter Salat", es: "Ensalada mixta" }, price: 5, tags: ["veg"] },
        { name: "Insalata verde", tr: { en: "Green salad", tr: "Yeşil salata", fr: "Salade verte", de: "Grüner Salat", es: "Ensalada verde" }, price: 4, tags: ["veg"] },
        { name: "Verdure miste alla griglia", tr: { en: "Mixed grilled vegetables", tr: "Karışık ızgara sebze", fr: "Légumes grillés", de: "Gemischtes Grillgemüse", es: "Verduras a la parrilla" }, price: 7, tags: ["veg"] },
        { name: "Patatine fritte*", tr: { en: "French fries", tr: "Patates kızartması", fr: "Frites", de: "Pommes frites", es: "Patatas fritas" }, price: 5, tags: ["veg"] },
        { name: "Crocchette di patate (6 pz.)*", tr: { en: "Potato croquettes (6 pcs)", tr: "Patates kroket (6 adet)", fr: "Croquettes de pommes de terre (6 pièces)", de: "Kartoffelkroketten (6 Stk.)", es: "Croquetas de patata (6 uds.)" }, price: 5, tags: ["veg"] }
      ]
    },

    {
      id: "formaggi",
      title: { it: "Formaggi", en: "Cheese", tr: "Peynirler", fr: "Fromages", de: "Käse", es: "Quesos" },
      items: [
        { name: "Formaggi misti", tr: { en: "Mixed cheese platter", tr: "Karışık peynir tabağı", fr: "Assiette de fromages", de: "Gemischte Käseplatte", es: "Tabla de quesos" }, price: 8, tags: ["veg"] }
      ]
    },

    {
      id: "frutta",
      title: { it: "Frutta", en: "Fruit", tr: "Meyve", fr: "Fruits", de: "Obst", es: "Fruta" },
      items: [
        { name: "Frutta di stagione", tr: { en: "Seasonal fruit", tr: "Mevsim meyveleri", fr: "Fruits de saison", de: "Obst der Saison", es: "Fruta de temporada" }, price: 5, tags: ["veg"] },
        { name: "Macedonia con gelato", tr: { en: "Fruit salad with ice cream", tr: "Dondurmalı meyve salatası", fr: "Salade de fruits avec glace", de: "Obstsalat mit Eis", es: "Macedonia con helado" }, price: 6, tags: ["veg"] },
        { name: "Fragole", tr: { en: "Strawberries", tr: "Çilek", fr: "Fraises", de: "Erdbeeren", es: "Fresas" }, price: 6, tags: ["veg"] },
        { name: "Fragole con gelato / con panna", tr: { en: "Strawberries with ice cream / cream", tr: "Dondurmalı / kremalı çilek", fr: "Fraises avec glace / chantilly", de: "Erdbeeren mit Eis / Sahne", es: "Fresas con helado / nata" }, price: 7, tags: ["veg"] }
      ]
    },

    {
      id: "dolci",
      title: { it: "Dolci", en: "Desserts", tr: "Tatlılar", fr: "Desserts", de: "Desserts", es: "Postres" },
      items: [
        { name: "Tiramisù classico", tr: { en: "Classic tiramisù", tr: "Klasik tiramisu", fr: "Tiramisu classique", de: "Klassisches Tiramisù", es: "Tiramisú clásico" }, price: 5.5, tags: ["veg"] },
        { name: "Tiramisù al pistacchio", tr: { en: "Pistachio tiramisù", tr: "Fıstıklı tiramisu", fr: "Tiramisu à la pistache", de: "Pistazien-Tiramisù", es: "Tiramisú de pistacho" }, price: 6, tags: ["veg"] },
        { name: "Tartufo bianco", tr: { en: "White tartufo (ice cream)", tr: "Beyaz tartufo (dondurma)", fr: "Tartufo blanc (glace)", de: "Tartufo weiß (Eis)", es: "Tartufo blanco (helado)" }, price: 5, tags: ["veg"] },
        { name: "Tartufo nero", tr: { en: "Dark tartufo (ice cream)", tr: "Siyah tartufo (dondurma)", fr: "Tartufo noir (glace)", de: "Tartufo schwarz (Eis)", es: "Tartufo negro (helado)" }, price: 5, tags: ["veg"] },
        { name: "Panna cotta", tr: { en: "Panna cotta", tr: "Panna cotta", fr: "Panna cotta", de: "Panna cotta", es: "Panna cotta" }, price: 5, tags: ["veg"] },
        { name: "Crema catalana", tr: { en: "Crema catalana", tr: "Krem katalan", fr: "Crème catalane", de: "Crema catalana", es: "Crema catalana" }, price: 5, tags: ["veg"] },
        { name: "Meringata", tr: { en: "Meringue ice-cream cake", tr: "Beze dondurmalı pasta", fr: "Gâteau glacé meringué", de: "Baiser-Eistorte", es: "Tarta helada de merengue" }, price: 5, tags: ["veg"] },
        { name: "Profiteroles bianchi / neri", tr: { en: "Profiteroles white / dark", tr: "Profiterol beyaz / siyah", fr: "Profiteroles blancs / au chocolat", de: "Profiteroles weiß / dunkel", es: "Profiteroles blancos / de chocolate" }, price: 5, tags: ["veg"] },
        { name: "Gelati e semifreddi", tr: { en: "Ice creams and semifreddi", tr: "Dondurma ve semifreddo", fr: "Glaces et semifreddi", de: "Eis und Halbgefrorenes", es: "Helados y semifríos" }, price: 5, tags: ["veg"] },
        { name: "Affogato al caffè", tr: { en: "Ice cream with espresso", tr: "Espressolu dondurma", fr: "Glace nappée d'expresso", de: "Eis mit Espresso", es: "Helado con café expreso" }, price: 7, tags: ["veg"] },
        { name: "Affogato al whisky / Grand Marnier", tr: { en: "Ice cream with whisky / Grand Marnier", tr: "Viski / Grand Marnier'li dondurma", fr: "Glace au whisky / Grand Marnier", de: "Eis mit Whisky / Grand Marnier", es: "Helado con whisky / Grand Marnier" }, price: 8 }
      ]
    },

    {
      id: "bevande",
      title: { it: "Birre e bibite", en: "Beers & soft drinks", tr: "Biralar ve içecekler", fr: "Bières et boissons", de: "Biere & Getränke", es: "Cervezas y refrescos" },
      items: [
        { name: "Birra alla spina chiara · 30 cl", desc: "HB Traunstein Pils", tr: { en: "Draught lager · 30 cl", tr: "Fıçı bira (açık) · 30 cl", fr: "Bière blonde pression · 30 cl", de: "Helles vom Fass · 0,3 l", es: "Cerveza rubia de barril · 30 cl" }, price: 4 },
        { name: "Birra alla spina chiara · 50 cl", desc: "HB Traunstein Pils", tr: { en: "Draught lager · 50 cl", tr: "Fıçı bira (açık) · 50 cl", fr: "Bière blonde pression · 50 cl", de: "Helles vom Fass · 0,5 l", es: "Cerveza rubia de barril · 50 cl" }, price: 6 },
        { name: "Birra alla spina rossa · 30 cl", desc: "HB Maximilian Doppelbock", tr: { en: "Draught red beer · 30 cl", tr: "Fıçı bira (kırmızı) · 30 cl", fr: "Bière rousse pression · 30 cl", de: "Dunkles vom Fass · 0,3 l", es: "Cerveza roja de barril · 30 cl" }, price: 4.5 },
        { name: "Birra alla spina rossa · 50 cl", desc: "HB Maximilian Doppelbock", tr: { en: "Draught red beer · 50 cl", tr: "Fıçı bira (kırmızı) · 50 cl", fr: "Bière rousse pression · 50 cl", de: "Dunkles vom Fass · 0,5 l", es: "Cerveza roja de barril · 50 cl" }, price: 7 },
        { name: "Birra alla spina weiss · 30 cl", desc: "HB Hefe-Weizen", tr: { en: "Draught wheat beer · 30 cl", tr: "Fıçı buğday birası · 30 cl", fr: "Bière blanche pression · 30 cl", de: "Weißbier vom Fass · 0,3 l", es: "Cerveza de trigo de barril · 30 cl" }, price: 4.5 },
        { name: "Birra alla spina weiss · 50 cl", desc: "HB Hefe-Weizen", tr: { en: "Draught wheat beer · 50 cl", tr: "Fıçı buğday birası · 50 cl", fr: "Bière blanche pression · 50 cl", de: "Weißbier vom Fass · 0,5 l", es: "Cerveza de trigo de barril · 50 cl" }, price: 7 },
        { name: "Birre nazionali · 66 cl", desc: "Moretti, Peroni", tr: { en: "Italian beers · 66 cl", tr: "İtalyan biraları · 66 cl", fr: "Bières italiennes · 66 cl", de: "Italienische Biere · 0,66 l", es: "Cervezas italianas · 66 cl" }, price: 4 },
        { name: "Birra in bottiglia · 33 cl", desc: "Beck's, Corona, Heineken", tr: { en: "Bottled beer · 33 cl", tr: "Şişe bira · 33 cl", fr: "Bière en bouteille · 33 cl", de: "Flaschenbier · 0,33 l", es: "Cerveza en botella · 33 cl" }, price: 4 },
        { name: "Birra analcolica · 33 cl", tr: { en: "Alcohol-free beer · 33 cl", tr: "Alkolsüz bira · 33 cl", fr: "Bière sans alcool · 33 cl", de: "Alkoholfreies Bier · 0,33 l", es: "Cerveza sin alcohol · 33 cl" }, price: 4.5 },
        { name: "Acqua naturale / frizzante · 0,50 l", tr: { en: "Still / sparkling water · 0.5 l", tr: "Su / maden suyu · 0,5 l", fr: "Eau plate / gazeuse · 0,5 l", de: "Wasser still / sprudelnd · 0,5 l", es: "Agua sin gas / con gas · 0,5 l" }, price: 2 },
        { name: "Acqua naturale / frizzante · 1 l", tr: { en: "Still / sparkling water · 1 l", tr: "Su / maden suyu · 1 l", fr: "Eau plate / gazeuse · 1 l", de: "Wasser still / sprudelnd · 1 l", es: "Agua sin gas / con gas · 1 l" }, price: 3 },
        { name: "Coca-Cola lattina", tr: { en: "Coca-Cola can", tr: "Coca-Cola kutu", fr: "Coca-Cola canette", de: "Coca-Cola Dose", es: "Coca-Cola lata" }, price: 3 },
        { name: "Fanta lattina", tr: { en: "Fanta can", tr: "Fanta kutu", fr: "Fanta canette", de: "Fanta Dose", es: "Fanta lata" }, price: 3 },
        { name: "Sprite lattina", tr: { en: "Sprite can", tr: "Sprite kutu", fr: "Sprite canette", de: "Sprite Dose", es: "Sprite lata" }, price: 3 },
        { name: "Tè alla pesca / limone", tr: { en: "Peach / lemon iced tea", tr: "Şeftalili / limonlu soğuk çay", fr: "Thé glacé pêche / citron", de: "Eistee Pfirsich / Zitrone", es: "Té frío de melocotón / limón" }, price: 3 }
      ]
    },

    {
      id: "vini",
      title: { it: "Vini", en: "Wines", tr: "Şaraplar", fr: "Vins", de: "Weine", es: "Vinos" },
      items: [
        { name: "Bianco alla spina · ¼ l", desc: "Cuordivigna Frizzante", tr: { en: "House white on tap, lightly sparkling", tr: "Fıçı beyaz şarap, hafif köpüklü", fr: "Vin blanc pression, légèrement pétillant", de: "Offener Weißwein, prickelnd", es: "Vino blanco de barril, de aguja" }, price: 4 },
        { name: "Bianco alla spina · ½ l", desc: "Cuordivigna Frizzante", tr: { en: "House white on tap, lightly sparkling", tr: "Fıçı beyaz şarap, hafif köpüklü", fr: "Vin blanc pression, légèrement pétillant", de: "Offener Weißwein, prickelnd", es: "Vino blanco de barril, de aguja" }, price: 7 },
        { name: "Bianco alla spina · 1 l", desc: "Cuordivigna Frizzante", tr: { en: "House white on tap, lightly sparkling", tr: "Fıçı beyaz şarap, hafif köpüklü", fr: "Vin blanc pression, légèrement pétillant", de: "Offener Weißwein, prickelnd", es: "Vino blanco de barril, de aguja" }, price: 12 },
        { name: "Müller Thurgau", desc: "Tenuta Cà Bolani", tr: { en: "White wine", tr: "Beyaz şarap", fr: "Vin blanc", de: "Weißwein", es: "Vino blanco" }, price: 18 },
        { name: "Riesling", desc: "Oltrepò Pavese", tr: { en: "White wine", tr: "Beyaz şarap", fr: "Vin blanc", de: "Weißwein", es: "Vino blanco" }, price: 16 },
        { name: "Bonarda / Barbera", desc: "Oltrepò Pavese", tr: { en: "Red wine", tr: "Kırmızı şarap", fr: "Vin rouge", de: "Rotwein", es: "Vino tinto" }, price: 15 },
        { name: "Pinot Grigio fermo e frizzante", desc: "Oltrepò Pavese", tr: { en: "White wine, still or sparkling", tr: "Beyaz şarap, köpüksüz veya köpüklü", fr: "Vin blanc, tranquille ou pétillant", de: "Weißwein, still oder prickelnd", es: "Vino blanco, tranquilo o de aguja" }, price: 16 },
        { name: "Croatina rosso fermo", desc: "Oltrepò Pavese", tr: { en: "Still red wine", tr: "Köpüksüz kırmızı şarap", fr: "Vin rouge tranquille", de: "Roter Stillwein", es: "Vino tinto tranquilo" }, price: 15 },
        { name: "Prosecco", desc: "Tenuta del Roggio · Valdobbiadene", tr: { en: "Sparkling white wine", tr: "Köpüklü beyaz şarap", fr: "Vin blanc pétillant", de: "Weißer Schaumwein", es: "Vino blanco espumoso" }, price: 20 },
        { name: "Prosecco extra dry", desc: "Tenuta del Roggio · Valdobbiadene", tr: { en: "Sparkling white wine, extra dry", tr: "Köpüklü beyaz şarap, extra dry", fr: "Vin blanc pétillant, extra dry", de: "Weißer Schaumwein, extra dry", es: "Vino blanco espumoso, extra dry" }, price: 20 },
        { name: "Falanghina", desc: "Laguardiense", tr: { en: "White wine", tr: "Beyaz şarap", fr: "Vin blanc", de: "Weißwein", es: "Vino blanco" }, price: 20 },
        { name: "Greco", desc: "Laguardiense", tr: { en: "White wine", tr: "Beyaz şarap", fr: "Vin blanc", de: "Weißwein", es: "Vino blanco" }, price: 20 }
      ]
    },

    {
      id: "spumanti",
      title: { it: "Spumanti", en: "Sparkling wines", tr: "Köpüklü şaraplar", fr: "Vins mousseux", de: "Schaumweine", es: "Espumosos" },
      items: [
        { name: "Spumanti nazionali", tr: { en: "Italian sparkling wines", tr: "İtalyan köpüklü şarapları", fr: "Vins mousseux italiens", de: "Italienische Schaumweine", es: "Espumosos italianos" }, price: 20 }
      ]
    },

    {
      id: "liquori",
      title: { it: "Liquori", en: "Spirits & liqueurs", tr: "Likör ve sert içkiler", fr: "Spiritueux et liqueurs", de: "Spirituosen & Liköre", es: "Licores y destilados" },
      items: [
        { name: "Whisky / Brandy / Cognac", price: 5 },
        { name: "Jack Daniel's / Chivas Regal", price: 7.5 },
        { name: "Grappe", tr: { en: "Grappa", tr: "Grappa (İtalyan üzüm brendisi)", fr: "Grappa", de: "Grappa", es: "Grappa" }, price: 5 },
        { name: "Grappa di Francoli", price: 7 },
        { name: "Amari", tr: { en: "Italian herbal liqueurs", tr: "Bitkisel likörler (amaro)", fr: "Liqueurs aux herbes italiennes (amari)", de: "Italienische Kräuterliköre", es: "Licores de hierbas italianos (amari)" }, price: 4 },
        { name: "Amaro del Capo", price: 4 },
        { name: "Limoncello / Liquirizia / Mirto", tr: { en: "Lemon / liquorice / myrtle liqueur", tr: "Limon / meyan kökü / mersin likörü", fr: "Liqueur de citron / réglisse / myrte", de: "Zitronen- / Lakritz- / Myrtenlikör", es: "Licor de limón / regaliz / mirto" }, price: 4 },
        { name: "Baileys", price: 5 },
        { name: "Sorbetto", tr: { en: "Sorbet", tr: "Sorbe", fr: "Sorbet", de: "Sorbet", es: "Sorbete" }, price: 6 }
      ]
    },

    {
      id: "caffe",
      title: { it: "Caffè", en: "Coffee", tr: "Kahve", fr: "Café", de: "Kaffee", es: "Café" },
      items: [
        { name: "Caffè", tr: { en: "Espresso", tr: "Espresso", fr: "Expresso", de: "Espresso", es: "Café expreso" }, price: 2 },
        { name: "Caffè decaffeinato / Caffè d'orzo / Ginseng", tr: { en: "Decaf / barley coffee / ginseng coffee", tr: "Kafeinsiz / arpa kahvesi / ginseng kahvesi", fr: "Déca / café d'orge / café au ginseng", de: "Entkoffeiniert / Gerstenkaffee / Ginseng-Kaffee", es: "Descafeinado / café de cebada / café de ginseng" }, price: 2 },
        { name: "Caffè corretto", tr: { en: "Espresso with a dash of liqueur", tr: "Likörlü espresso", fr: "Expresso avec une goutte de liqueur", de: "Espresso mit Schuss", es: "Café con un chorrito de licor" }, price: 3 }
      ]
    }
  ]
};
