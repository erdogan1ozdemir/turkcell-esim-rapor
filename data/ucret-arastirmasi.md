# eSIM Ücret Beyanı Araştırması
Gözlem: 3 Ağustos 2026 · Kapsam: turkcell.com.tr resmî alan adları

## Yöntem
robots.txt üzerinden erişilen 6 sitemap dosyasından çıkarılan **2.295 benzersiz turkcell.com.tr URL'si** (820 destek/yardım + 1.475 diğer sayfa) tek tek çekilmiş; "esim / e-sim" ifadesinin ±250 karakter çevresinde ücret, bedel, fiyat ve TL geçen bağlamlar taranmıştır.

## Sonuç
**Bireysel eSIM geçişi veya eSIM edinimi için Turkcell'in resmî Türkiye sayfalarında yayımlanmış bir ücret beyanı bulunmamaktadır.**

## Doğrulanabilir komşu rakamlar (eSIM ücreti DEĞİLDİR)

| Kalem | Tutar | Kapsam | Kaynak |
|---|---|---|---|
| SIM kart değişikliği (bireysel) | **205 TL** (KDV dahil) | fiziksel SIM | `/destek/4-5g/4-5g/sim-kart-degisikligi-ucretli-midir` |
| Yedek SIM kart hizmeti | **205 TL** | fiziksel SIM · eSIM seçeneği fiyatsız aktarılmış | `/destek/hattiniz/abonelik-islemleri/simkartimi-kaybettim-yeni-simkarti-nasil-alabilirim` |
| SIM kart değişikliği (kurumsal) | **205 TL** · online **153,75 TL** · M2M **30 TL** | fiziksel SIM | `/kurumsal/destek/hattiniz/pin-puk/simkart-degisikligini-nasil-yaparim-ucretleri-nedir` |
| eSIM Multi Profil profil yükleme | **77 TL** | **yalnızca M2M / IoT**, tüketici eSIM'i değil | `/kurumsal/dijital-is-servisleri/iot-nesnelerin-interneti/turkcell-m2m-esim` |

Birebir cümle (bireysel SIM değişimi): "Evet, sim kart değişikliği KDV dahil 205 TL'dir."

Birebir cümle (yedek SIM): "Yedek sim kart hizmeti, faturalı ve Hazır Kart'lılar için KDV dahil 205 TL'dir. ... Dilerseniz Turkcell uygulaması üzerinden e-Sim olarak simkartınızı temin edebilir ya da en yakın mağazamızdan fiziksel simkartınızı alabilirsiniz." (eSIM seçeneği için ayrı tutar belirtilmemiştir.)

## Ücretsizlik beyanı bulunan komşu işlemler
- "Dijital kanaldan yapılan başvurularda müşterilerden sim kart bedeli alınmaz" · `/destek/dijitalde-turkcellli-olmak/...`
- "Hayır, hat taşıma ücreti bulunmamaktadır. Numara taşıma işlemi tamamen ücretsizdir." · `/trc/turkcellli-olmak/paket-secimi`
- "3G uyumlu SIM kartlar 5G teknolojisini desteklememektedir. SIM kartınızı ücretsiz olarak değiştirebilirsiniz." · `/destek/5g/cihaz-sim-uyumluluk/...`

## Kullanılmaması gereken veri (önemli)
`/servisler/bilgi/turkcell-e-sim` sayfasının yapılandırılmış verisinde `"price":"0","priceCurrency":"TRY"` bulunmaktadır; ancak aynı veride `"showPrice":false` tanımlıdır ve sayfa gövdesinde ücretle ilgili tek bir cümle yoktur. **Bu değer "eSIM ücretsizdir" iddiasının dayanağı olarak kullanılmaya uygun değildir.**

## Kapsam dışı: Kuzey Kıbrıs Turkcell
`kktcell.com/servisler/esim` sayfasında "standart sim kart değişiklik ücreti dışında ekstra bir ücret ödemeniz gerekmeyecektir" ifadesi bulunmaktadır. Bu ayrı bir operasyondur; Türkiye tarifesi olarak sunulamaz.

## Üçüncü taraf beyanları (doğrulanmamış, raporda rakam olarak kullanılmaz)

Şikayetvar üzerindeki kullanıcı şikayetlerinde geçen tutarlar:

| Tutar | Tarih |
|---|---|
| 107 TL (merkez) / 200 TL (bayi) | 4 Kasım 2023 |
| 180 TL | 17 Mayıs 2024 |
| 406 TL | 18 Şubat 2024 |
| 500 TL | 4 Temmuz 2024 |
| 600 TL | 10 Mayıs 2024 |
| 500 TL | 25 Aralık 2025 |

Ayrıca Ekşi Sözlük'te "turkcell internet sitesinde 67.40 tl" ifadesi bulunmaktadır.

**Dağılım 67 TL ile 600 TL arasındadır.** Bu genişlik, resmî bir beyan bulunmamasıyla birlikte okunduğunda, sosyal mecradaki bayi fiyat farkı algısının kaynağına işaret etmektedir.

## Denenen ve sonuç vermeyen adresler
`/destek/esim` (404) · `/sikca-sorulan-sorular` (404) · `/destek/sikca-sorulan-sorular` (404) · `/kampanya/esim/pages/stage-2.html` ve sonrası (404) · `lifecell.com.tr` (bağlantı kurulamadı)

`/kampanya/esim/pages/stage-1.html` ve sayfanın `main.js` dosyası çekilmiş, ücret ifadesi bulunmamıştır.
