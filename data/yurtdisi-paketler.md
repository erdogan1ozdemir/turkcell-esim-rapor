# Turkcell Yurtdışı Paketleri · Gerçek Veri
Kaynak: turkcell.com.tr, sunucu tarafında render edilen HTML · Gözlem: 3 Ağustos 2026
Hub: https://www.turkcell.com.tr/paket-ve-tarifeler/yurt-disinda-kullanim
Başlık: "Yurt Dışı Paketleri / Yurt Dışında Kullanım | Turkcell" · H1: "Faturalı Hatlar İçin Yurt Dışında Kullanım"

## KRİTİK BULGU · eSIM ile yurtdışı paketleri arasında bağ yok
- 18 paket detay sayfasının **hiçbirinde** "eSIM" ifadesi geçmemektedir (0 geçiş).
- `/servisler/bilgi/turkcell-e-sim` sayfasında "yurt dışı", "roaming" ve "seyahat" kelimeleri **hiç geçmemektedir**.
- `/destek/yurtdisi` sayfasında "eSIM" geçmemektedir.
- İki ürün arasındaki tek bağlantı, tüm sayfalarda ortak footer'daki "eSIM" bağlantısıdır.
- Kampanya sayfasındaki tek yakın ifade: "Seyahatlerde anında yerel hat alınabilir." (Neden eSIM? / Hızlı bloğu)

Sitede "bu yurt dışı paketi eSIM ile kullanılabilir" biçiminde bir ifade bulunmamaktadır.

## Faturalı hat paketleri (15)

| Paket | Kapsam | Data | Dakika / SMS | Süre | Fiyat |
|---|---|---|---|---|---|
| Avrupa Gezgin 1 GB | Avrupa · 40 ülke | 1 GB | 200 DK + 100 SMS | 1 hafta | 300 TL |
| Avrupa Gezgin 3 GB | Avrupa · 40 ülke | 3 GB | 200 DK + 100 SMS | 2 hafta | 600 TL |
| Avrupa Gezgin 10 GB | Avrupa · 40 ülke | 10 GB | 500 DK + 200 SMS | 2 hafta | 1.200 TL |
| Global 1 GB | 172 ülke | 1 GB | 100 DK + 100 SMS | 1 hafta | 600 TL |
| Global 3 GB | 172 ülke | 3 GB | 300 DK + 200 SMS | 2 hafta | 1.200 TL |
| Tarifen Yurt Dışında Geçerli Avantaj | 65 ülke | Tarifenizin datası | Tarifenizin hakları | 1 gün | 400 TL |
| Tarifen Yurt Dışında Geçerli Ekstra | Avantaj listesi dışı ülkeler | Tarifenizin datası | Tarifenizin hakları | 1 gün | 500 TL |
| Tüm Dünya Paketi | Dolaşım sinyali alınan her nokta | yok | 100 DK + 100 SMS | 1 hafta | 400 TL |
| KKTC 1 GB | KKTC | 1 GB | 100 DK + 100 SMS | 1 hafta | 400 TL |
| KKTC 20 GB Paketi | KKTC | 20 GB | 2.000 DK arama + 1.000 DK aranma + 100 SMS | 1 ay | 1.800 TL |
| Suudi Arabistan 300 DK | Suudi Arabistan | 100 MB | 150 DK arama + 150 DK aranma + 100 SMS | 1 ay | 250 TL |
| Suudi Arabistan 3 GB | Suudi Arabistan | 3 GB | 400 DK + 100 SMS | 1 ay | 600 TL |
| Suudi Arabistan 10 GB | Suudi Arabistan | 10 GB | 500 DK + 100 SMS | 1 ay | 1.200 TL |
| Yurt Dışı Mobil Wifi Paketi | ~80 ülke (faturalı data hattı) | 500 MB | - | 1 hafta | 550 TL |
| Yurt Dışı Standart Paket | Geniş ülke listesi | Kullanım başına | Kullanım başına | 1 dakika | 18 TL |

## Hazır kart (faturasız) ek paketleri (3)

| Paket | Kapsam | Data | Süre | Fiyat |
|---|---|---|---|---|
| Paketim Yurt Dışında Geçerli 1 Gün | Geniş ülke listesi | Mevcut paketinizin datası | 1 gün | 400 TL |
| Paketim Yurt Dışında Geçerli 5 Gün | Geniş ülke listesi | Mevcut paketinizin datası | 5 gün | 1.600 TL |
| Standart Dünya Tarifesi (Hazır Kart) | Ülke gruplarına göre | Kullanım başına | 1 dakika | 32 TL |

Avrupa Gezgin, Global ve Suudi Arabistan paketleri faturasız listede aynı fiyatlarla tekrar etmektedir. Toplam benzersiz paket: **18**.

## URL kalıbı
`https://www.turkcell.com.tr/paket-ve-tarifeler/yurt-disinda-kullanim/<slug>`

Örnek slug'lar: `avrupa-gezgin-paketi-1-gb` · `avrupa-gezgin-3-gb` · `avrupa-gezgin-10-gb` · `global-1-gb` · `global-3-gb` · `tarifen-yurt-disinda-gecerli-avantaj` · `kktc-1-gb` · `tum-dunya-paketi-v2`

Faturasız görünüm: hub URL'ine `?paymentType=hazir-kart` eklenir.

## Notlar
- Fiyatlar sayfadaki biçimiyle aktarılmıştır; Turkcell "TL" yazmakta, ₺ sembolü kullanmamaktadır.
- 18/18 paketin fiyatı hem liste hem detay sayfasından doğrulanmıştır.
- KKTC 20 GB'da liste kartı "1 AY", detay sayfası "TAAHHÜTSÜZ ABONELİK" göstermektedir.
- `/yurtdisi-paketleri` adresi 301 ile `/paket-ve-tarifeler` adresine gitmekte, yurt dışı hub'ına gitmemektedir.
- Sayfalar sunucu tarafında render edilmektedir; paket verisi ham HTML içinde mevcuttur.

## Rakip referansı · cihaz uyumluluğu (turksim.com)
"esim uyumlu telefonlar" sorgusunda 1. sıradaki turksim.com, marka bazlı gruplanmış bir cihaz listesi sunmaktadır: iPhone · Samsung · Google · Xiaomi · Motorola · Sony · Honor · Sharp · Oppo · diğerleri (Nokia, OnePlus, Rakuten, Huawei, Hammer) + ayrıca **eSIM uyumlu akıllı saatler** bölümü. Sayfa 17.472 karakter metin ve 1 JSON-LD bloğu taşımaktadır. Turkcell tarafında karşılığı Pasaj altındaki cihaz listesidir ve aynı sorguda 5. sıradadır.
