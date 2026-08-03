# Cihaz Uyumluluğu ve Rakip Aktivasyon Anlatımı · Kaynak Verisi
Gözlem: 3 Ağustos 2026 · Yöntem: canlı sayfa incelemesi (render edilmiş DOM) ve ekran görüntüsü

## 1. Turkcell · eSIM uyumlu cihaz listesi

**Kaynak:** https://www.turkcell.com.tr/pasaj/kampanyalar/cihazlar/esim-ile-uyumlu-cihazlar
Sayfa başlığı: "eSIM Destekleyen Telefonlar - Pasaj" · H1: "eSIM ile Uyumlu Cihazlar"

Bu sayfa bir **mağaza listelemesidir**; satıştaki eSIM uyumlu cihazları gösterir, kapsayıcı bir uyumluluk listesi değildir.

| Ölçüm | Değer |
|---|---|
| Listelenen ürün | **32** |
| Kapsanan marka | **3** (Apple, Samsung, Xiaomi) |
| "eSIM ile çalışır" rozetli ürün | 3 |

### Marka dağılımı
| Marka | Ürün |
|---|---|
| iPhone | 22 |
| Samsung Galaxy | 9 |
| Xiaomi | 1 |

### Listelenen ürünler (birebir)
**Apple (22):** iPhone Air 256 GB / 512 GB / 1 TB · iPhone 17 256 GB / 512 GB · iPhone 17 Pro 256 GB / 512 GB / 1 TB · iPhone 17 Pro Max 256 GB / 512 GB / 1 TB / 2 TB · iPhone 16 128 GB · iPhone 16 Plus 128 GB · iPhone 16 Pro 1 TB · iPhone 16 Pro Max 512 GB / 1 TB · iPhone 16e 128 GB · iPhone 15 128 GB / 256 GB · iPhone 14 128 GB · iPhone 13 128 GB

**Samsung (9):** Galaxy S25 Plus 256 GB · Galaxy S25 Ultra 512 GB / 1 TB · Galaxy S24 FE 8 GB · Galaxy A56 5G 8 GB · Galaxy Z Flip7 12 GB · Galaxy Z Flip7 FE 8 GB · Galaxy Z Fold7 12 GB · Galaxy Z Fold 7 16 GB

**Xiaomi (1):** Redmi Note 14 Pro 8 GB

### Sayfa içi seri filtreleri
iPhone 11 · 12 · 13 · 14 · 15 · 16 · 17 · SE · Air · Samsung Telefonlar · Xiaomi Telefon

### Kampanya sayfasındaki cihaz bileşeni
`/kampanya/esim/` sayfasındaki cihaz uyumluluk aracında yalnızca 5 model görseli bulunmaktadır:
iPhone 16 Pro · iPhone 16 Plus · Galaxy S25 Ultra · Galaxy Z Flip 6 · Xiaomi 14T
(Bu bileşen canlı sayfada `display:none` durumundadır.)

## 2. Rakip karşılaştırması · cihaz listesi kapsamı

| Kaynak | Marka sayısı | Kapsanan markalar | Akıllı saat bölümü |
|---|---|---|---|
| **Turkcell** (Pasaj) | **3** | Apple · Samsung · Xiaomi | yok |
| Vodafone (sayfa içi) | 6 | Apple · Huawei · Oppo · Samsung · Vivo · Xiaomi | yok |
| Türk Telekom (sayfa içi) | 6 | Apple · Huawei · Oppo · Samsung · Vivo · Xiaomi | yok |
| turksim.com ("esim uyumlu telefonlar" 1. sıra) | **10+** | Apple · Samsung · Google · Xiaomi · Motorola · Sony · Honor · Sharp · Oppo · Nokia · OnePlus · Rakuten · Huawei · Hammer | **var** |

turksim.com sayfası 17.472 karakter metin ve 1 JSON-LD bloğu taşımaktadır.

## 3. Rakip aktivasyon anlatımı · adım sayıları

Aşağıdaki değerler canlı sayfaların render edilmiş DOM içeriğinden ve ekran görüntülerinden alınmıştır.

### Turkcell · `/kampanya/esim/`
Bölüm: "Nasıl eSIM Sahibi Olurum?" · **3 adım**, cihaz veya kanal ayrımı yok:
1. Uyumlu Cihazınızı Hazırlayın
2. QR Kodunuzu Alın
3. eSIM'inizi Aktif Edin

### Vodafone · `/servisler/e-sim`
İki ayrı anlatım katmanı bulunmaktadır.

**Katman 1 · "eSIM telefonda nasıl aktive edilir?"** · iOS / ANDROID sekmeli, **5 adım**:
1. Ayarlar menüsüne git
2. "Hücresel"i tıkla
3. Hücresel Plan Ekle
4. eSIM kartının üzerindeki QR kodu okut
5. SIM kilidini açmak için PIN kodunu gir

**Katman 2 · "Online aktivasyon adımları"** · **5 adım**:
1. Tarifeni ve numaranı belirledikten sonra teslimat türü olarak "eSIM" seçerek devam et
2. Kimliğini tarat
3. Fotoğrafını çek
4. Kimlik bilgilerini doğrula ve fatura adresini gir
5. (devam eden adım)

### Türk Telekom · `/esim`
Bölüm: "eSIM Nasıl Aktive Edilir?" · **çok katmanlı sekme matrisi**:
- Kanal: Dijital Aktivasyon · Bayiden Aktivasyon
- Senaryo: eSIM'e Geçiş · eSIM Yeni Abonelik
- Müşteri tipi: Bireysel Aboneler · Kurumsal Aboneler
- İşletim sistemi: iOS · Android

"eSIM'e Geçiş / Dijital" akışı **8 adım**: Türk Telekom Uygulamasını Açın · Hat Ayarları · eSIM'e Geçiş · İrtibat Doğrulama · Kimlik Doğrulama · eSIM Aktivasyon (EID) · eSIM Aktivasyon (Etkinleştirme Kodu) · Sözleşme Onayları

"eSIM Yeni Abonelik" akışı **11 adım**: Türk Telekom Uygulamasını Açın · Yeni Başvuru · Hat Türü Seçimi · İletişim Bilgilerinin Girilmesi · Tarife Seçimi · Numara Seçimi · Sim Kart Tercihi · Kimlik Doğrulama · Fatura Tipi Seçimi · Belge Onayları · eSIM Aktivasyon + Sözleşme Onayları

iOS adımları ayrıca verilmektedir: Telefonunuzun Ayarlar bölümünü açın · "Hücresel" sekmesine gelin · "Hücresel Plan Ekle" seçeneğine tıklayın · eSIM kartının üzerindeki QR kodu okut · eSIM'iniz yüklendi

### Özet tablo
| | Turkcell | Vodafone | Türk Telekom |
|---|---|---|---|
| Anlatım katmanı | 1 | 2 | 4 (kanal × senaryo × müşteri tipi × OS) |
| En uzun akıştaki adım | 3 | 5 | 11 |
| Cihaz bazlı (iOS / Android) ayrım | yok | var | var |
| Kanal bazlı ayrım | yok | var (online / bayi) | var (dijital / bayi) |
