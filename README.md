# Naveka · QR Menü

Naveka restoranı için mobil uyumlu dijital menü + masalara konacak QR kod kartları.

| Dosya | Ne işe yarar |
|---|---|
| `index.html` | Müşterinin QR'ı okutunca gördüğü menü sayfası (IT / EN / TR, arama, kategori sekmeleri, karanlık mod) |
| `menu-data.js` | **Tüm yemekler ve fiyatlar burada.** Fiyat değiştirmek için sadece bu dosyayı düzenleyin. |
| `qr.html` | A4 kâğıda 4 adet A6 masa kartı basmak için yazdırılabilir sayfa |
| `qr-menu.svg` / `qr-menu.png` | QR kodun kendisi (baskı / sosyal medya için) |
| `tools/make_qr.py` | QR kodu farklı bir adres için yeniden üretir |

## Yayına alma (GitHub Pages)

1. GitHub'da repo → **Settings → Pages** → *Source: Deploy from a branch*
2. Branch olarak menünün bulunduğu dalı (ör. `main`) ve `/ (root)` klasörünü seçip kaydedin.
3. Birkaç dakika sonra menü şu adreste açılır: **https://prm222.github.io/test/**

QR kod bu adrese yönlendirecek şekilde üretildi. Repo adı ya da alan adı değişirse:

```bash
pip install qrcode pillow
python tools/make_qr.py https://yeni-adres.com/
```

ve `qr.html` içindeki `url` değişkenini de aynı adresle güncelleyin.

## Masa kartlarını basmak

`https://prm222.github.io/test/qr.html` adresini açıp **Stampa / Yazdır** düğmesine basın (A4, kenar boşluğu yok). Kesik çizgilerden kesin.

## Notlar

- Fiyatlar menü fotoğraflarından aktarıldı; yayına almadan önce bir kez kontrol edin.
- Menüde 14 bölüm, 150 kalem var: pizzalar, antipasti, primi, secondi, contorni, formaggi, frutta, dolci, birre e bibite, vini, spumanti, liquori, caffè.
- `*` işareti İtalya'daki standart kullanımla "dondurulmuş ürün" olarak açıklandı.
