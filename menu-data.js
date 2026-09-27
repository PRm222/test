/*
 * Naveka – dati del menù
 * ---------------------------------------------------------------
 * Per cambiare un prezzo basta modificare il numero qui sotto.
 * Fiyat değiştirmek için sadece aşağıdaki sayıyı düzenleyin.
 *
 *  name  : nome del piatto (italiano)
 *  desc  : ingredienti / descrizione (italiano)
 *  tr    : traduzioni del nome  { en, de, tr }
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
      title: { it: "Pizze al metro", en: "Pizza by the metre", de: "Pizza am Meter", tr: "Metre pizza" },
      note: {
        it: "Ogni pizza è disponibile da 25 cm oppure da 1 metro.",
        en: "Every pizza comes in 25 cm or 1 metre size.",
        de: "Jede Pizza gibt es mit 25 cm oder 1 Meter.",
        tr: "Her pizza 25 cm veya 1 metre olarak sunulur."
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
        { name: "Naveka", desc: "pomodoro, mozzarella, peperoni, tonno, salame piccante", prices: [13, 52], tags: ["hot"], star: true },
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
        de: "Extra-Beläge: bitte fragen Sie unser Personal.",
        tr: "Ekstra malzeme için lütfen personele danışın."
      }
    },

    {
      id: "antipasti",
      title: { it: "Antipasti", en: "Starters", de: "Vorspeisen", tr: "Başlangıçlar" },
      items: [
        { name: "Insalata di rucola e gamberetti", tr: { en: "Rocket and shrimp salad", de: "Rucola-Garnelen-Salat", tr: "Roka ve karides salatası" }, price: 12, tags: ["sea"] },
        { name: "Insalata di mare", tr: { en: "Seafood salad", de: "Meeresfrüchtesalat", tr: "Deniz ürünleri salatası" }, price: 18, tags: ["sea"] },
        { name: "Cocktail di gamberi", tr: { en: "Prawn cocktail", de: "Krabbencocktail", tr: "Karides kokteyli" }, price: 12, tags: ["sea"] },
        { name: "Pepata di cozze", tr: { en: "Peppered mussels", de: "Gepfefferte Miesmuscheln", tr: "Karabiberli midye" }, price: 12, tags: ["sea"] },
        { name: "Cozze alla marinara", tr: { en: "Mussels marinara", de: "Miesmuscheln Marinara", tr: "Marinara soslu midye" }, price: 12, tags: ["sea"] },
        { name: "Cozze alla siciliana", desc: "sugo pomodoro piccante", tr: { en: "Sicilian mussels (spicy tomato sauce)", de: "Miesmuscheln sizilianisch (scharfe Tomatensauce)", tr: "Sicilya usulü midye (acılı domates sosu)" }, price: 12, tags: ["sea", "hot"] },
        { name: "Chele di granchio (5 pz.)", tr: { en: "Crab claws (5 pcs)", de: "Krebsscheren (5 Stk.)", tr: "Yengeç kıskacı (5 adet)" }, price: 10, tags: ["sea"] },
        { name: "Arrosticini di pesce (6 pz.)", tr: { en: "Fish skewers (6 pcs)", de: "Fischspießchen (6 Stk.)", tr: "Balık şiş (6 adet)" }, price: 12, tags: ["sea"] },
        { name: "Antipasto misto caldo", desc: "insalata di mare, arrosticino di calamari, 1 chela di granchio, 1 surimi, cocktail di gamberi, tonno affumicato", tr: { en: "Mixed warm starter", de: "Gemischte warme Vorspeise", tr: "Karışık sıcak başlangıç" }, price: 20, tags: ["sea"] },
        { name: "Pesciolini", tr: { en: "Small fried fish", de: "Frittierte Fischchen", tr: "Küçük balık kızartması" }, price: 10, tags: ["sea"] },
        { name: "Bresaola con rucola e grana", tr: { en: "Bresaola with rocket and parmesan", de: "Bresaola mit Rucola und Grana", tr: "Roka ve grana peynirli bresaola" }, price: 15 },
        { name: "Carpaccio di salmone e tonno", tr: { en: "Salmon and tuna carpaccio", de: "Lachs- und Thunfischcarpaccio", tr: "Somon ve ton balığı carpaccio" }, price: 16, tags: ["sea"] },
        { name: "Polpo con patate", tr: { en: "Octopus with potatoes", de: "Oktopus mit Kartoffeln", tr: "Patatesli ahtapot" }, price: 18, tags: ["sea"] }
      ]
    },

    {
      id: "primi-terra",
      title: { it: "Primi piatti · Terra", en: "Pasta & risotto · Land", de: "Erste Gänge · Land", tr: "Ara sıcaklar · Kara" },
      items: [
        { name: "Spaghetti all'arrabbiata", tr: { en: "Spaghetti arrabbiata (spicy tomato)", de: "Spaghetti all'arrabbiata (scharf)", tr: "Arrabbiata spagetti (acılı domates)" }, price: 10, tags: ["veg", "hot"] },
        { name: "Risotto speck e porcini", desc: "min. 2 persone", tr: { en: "Speck and porcini risotto (min. 2 people)", de: "Risotto mit Speck und Steinpilzen (mind. 2 Pers.)", tr: "Speck ve porçini mantarlı risotto (min. 2 kişi)" }, price: 15 }
      ]
    },

    {
      id: "primi-mare",
      title: { it: "Primi piatti · Mare", en: "Pasta & risotto · Sea", de: "Erste Gänge · Meer", tr: "Ara sıcaklar · Deniz" },
      items: [
        { name: "Spaghetti alle vongole", tr: { en: "Spaghetti with clams", de: "Spaghetti mit Venusmuscheln", tr: "Deniz tarağı soslu spagetti" }, price: 16, tags: ["sea"] },
        { name: "Linguine agli scampi*", tr: { en: "Linguine with scampi", de: "Linguine mit Scampi", tr: "Kerevitli linguine" }, price: 16, tags: ["sea"] },
        { name: "Linguine allo scoglio*", tr: { en: "Linguine with mixed seafood", de: "Linguine mit Meeresfrüchten", tr: "Deniz ürünlü linguine" }, price: 18, tags: ["sea"] },
        { name: "Penne al pesce spada", tr: { en: "Penne with swordfish", de: "Penne mit Schwertfisch", tr: "Kılıç balıklı penne" }, price: 16, tags: ["sea"] },
        { name: "Risotto ai frutti di mare", desc: "su prenotazione, min. 2 persone", tr: { en: "Seafood risotto (on request, min. 2 people)", de: "Meeresfrüchte-Risotto (auf Vorbestellung, mind. 2 Pers.)", tr: "Deniz ürünlü risotto (önceden sipariş, min. 2 kişi)" }, price: 18, tags: ["sea"] }
      ]
    },

    {
      id: "frutta",
      title: { it: "Frutta", en: "Fruit", de: "Obst", tr: "Meyve" },
      items: [
        { name: "Frutta di stagione", tr: { en: "Seasonal fruit", de: "Obst der Saison", tr: "Mevsim meyveleri" }, price: 5, tags: ["veg"] },
        { name: "Macedonia con gelato", tr: { en: "Fruit salad with ice cream", de: "Obstsalat mit Eis", tr: "Dondurmalı meyve salatası" }, price: 6, tags: ["veg"] },
        { name: "Fragole", tr: { en: "Strawberries", de: "Erdbeeren", tr: "Çilek" }, price: 6, tags: ["veg"] },
        { name: "Fragole con gelato / con panna", tr: { en: "Strawberries with ice cream / cream", de: "Erdbeeren mit Eis / Sahne", tr: "Dondurmalı / kremalı çilek" }, price: 7, tags: ["veg"] }
      ]
    },

    {
      id: "dolci",
      title: { it: "Dolci", en: "Desserts", de: "Desserts", tr: "Tatlılar" },
      items: [
        { name: "Tiramisù classico", tr: { en: "Classic tiramisù", de: "Klassisches Tiramisù", tr: "Klasik tiramisu" }, price: 5.5, tags: ["veg"] },
        { name: "Tiramisù al pistacchio", tr: { en: "Pistachio tiramisù", de: "Pistazien-Tiramisù", tr: "Fıstıklı tiramisu" }, price: 6, tags: ["veg"] },
        { name: "Tartufo bianco", tr: { en: "White tartufo (ice cream)", de: "Tartufo weiß (Eis)", tr: "Beyaz tartufo (dondurma)" }, price: 5, tags: ["veg"] },
        { name: "Tartufo nero", tr: { en: "Dark tartufo (ice cream)", de: "Tartufo schwarz (Eis)", tr: "Siyah tartufo (dondurma)" }, price: 5, tags: ["veg"] },
        { name: "Panna cotta", tr: { en: "Panna cotta", de: "Panna cotta", tr: "Panna cotta" }, price: 5, tags: ["veg"] },
        { name: "Crema catalana", tr: { en: "Crema catalana", de: "Crema catalana", tr: "Krem katalan" }, price: 5, tags: ["veg"] },
        { name: "Meringata", tr: { en: "Meringue ice-cream cake", de: "Baiser-Eistorte", tr: "Beze dondurmalı pasta" }, price: 5, tags: ["veg"] },
        { name: "Profiteroles bianchi / neri", tr: { en: "Profiteroles white / dark", de: "Profiteroles weiß / dunkel", tr: "Profiterol beyaz / siyah" }, price: 5, tags: ["veg"] },
        { name: "Gelati e semifreddi", tr: { en: "Ice creams and semifreddi", de: "Eis und Halbgefrorenes", tr: "Dondurma ve semifreddo" }, price: 5, tags: ["veg"] },
        { name: "Affogato al caffè", tr: { en: "Ice cream with espresso", de: "Eis mit Espresso", tr: "Espressolu dondurma" }, price: 7, tags: ["veg"] },
        { name: "Affogato al whisky / Grand Marnier", tr: { en: "Ice cream with whisky / Grand Marnier", de: "Eis mit Whisky / Grand Marnier", tr: "Viski / Grand Marnier'li dondurma" }, price: 8 }
      ]
    },

    {
      id: "bevande",
      title: { it: "Birre e bibite", en: "Beers & soft drinks", de: "Biere & Getränke", tr: "Biralar ve içecekler" },
      items: [
        { name: "Birra alla spina chiara · 30 cl", desc: "HB Traunstein Pils", tr: { en: "Draught lager · 30 cl", de: "Helles vom Fass · 0,3 l", tr: "Fıçı bira (açık) · 30 cl" }, price: 4 },
        { name: "Birra alla spina chiara · 50 cl", desc: "HB Traunstein Pils", tr: { en: "Draught lager · 50 cl", de: "Helles vom Fass · 0,5 l", tr: "Fıçı bira (açık) · 50 cl" }, price: 6 },
        { name: "Birra alla spina rossa · 30 cl", desc: "HB Maximilian Doppelbock", tr: { en: "Draught red beer · 30 cl", de: "Dunkles vom Fass · 0,3 l", tr: "Fıçı bira (kırmızı) · 30 cl" }, price: 4.5 },
        { name: "Birra alla spina rossa · 50 cl", desc: "HB Maximilian Doppelbock", tr: { en: "Draught red beer · 50 cl", de: "Dunkles vom Fass · 0,5 l", tr: "Fıçı bira (kırmızı) · 50 cl" }, price: 7 },
        { name: "Birra alla spina weiss · 30 cl", desc: "HB Hefe-Weizen", tr: { en: "Draught wheat beer · 30 cl", de: "Weißbier vom Fass · 0,3 l", tr: "Fıçı buğday birası · 30 cl" }, price: 4.5 },
        { name: "Birra alla spina weiss · 50 cl", desc: "HB Hefe-Weizen", tr: { en: "Draught wheat beer · 50 cl", de: "Weißbier vom Fass · 0,5 l", tr: "Fıçı buğday birası · 50 cl" }, price: 7 },
        { name: "Birre nazionali · 66 cl", desc: "Moretti, Peroni", tr: { en: "Italian beers · 66 cl", de: "Italienische Biere · 0,66 l", tr: "İtalyan biraları · 66 cl" }, price: 4 },
        { name: "Birra in bottiglia · 33 cl", desc: "Beck's, Corona, Heineken", tr: { en: "Bottled beer · 33 cl", de: "Flaschenbier · 0,33 l", tr: "Şişe bira · 33 cl" }, price: 4 },
        { name: "Birra analcolica · 33 cl", tr: { en: "Alcohol-free beer · 33 cl", de: "Alkoholfreies Bier · 0,33 l", tr: "Alkolsüz bira · 33 cl" }, price: 4.5 },
        { name: "Acqua naturale / frizzante · 0,50 l", tr: { en: "Still / sparkling water · 0.5 l", de: "Wasser still / sprudelnd · 0,5 l", tr: "Su / maden suyu · 0,5 l" }, price: 2 },
        { name: "Acqua naturale / frizzante · 1 l", tr: { en: "Still / sparkling water · 1 l", de: "Wasser still / sprudelnd · 1 l", tr: "Su / maden suyu · 1 l" }, price: 3 },
        { name: "Coca-Cola lattina", tr: { en: "Coca-Cola can", de: "Coca-Cola Dose", tr: "Coca-Cola kutu" }, price: 3 },
        { name: "Fanta lattina", tr: { en: "Fanta can", de: "Fanta Dose", tr: "Fanta kutu" }, price: 3 },
        { name: "Sprite lattina", tr: { en: "Sprite can", de: "Sprite Dose", tr: "Sprite kutu" }, price: 3 },
        { name: "Tè alla pesca / limone", tr: { en: "Peach / lemon iced tea", de: "Eistee Pfirsich / Zitrone", tr: "Şeftalili / limonlu soğuk çay" }, price: 3 }
      ]
    }
  ]
};
