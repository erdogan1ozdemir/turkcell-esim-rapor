# Turkcell eSIM · Teknik Ölçüm Bulguları
Gözlem tarihi: 3 Ağustos 2026 · Hedef: https://www.turkcell.com.tr/kampanya/esim/

## 1. Sayfa mimarisi (kritik ayrım)
Bu sayfa, turkcell.com.tr ana uygulamasından (Next.js) **ayrı**, jQuery tabanlı bağımsız bir landing page'dir.
- `__NEXT_DATA__` yok, `self.__next_f` yok → Next.js değil.
- Ham HTML'de geçen `__NEXT_DATA__` dizesi Dynatrace ajanının içindedir, sayfa Next.js olduğu için değil.
- Sonuç: Paket Seçimi sayfası için geçerli olan route-bazlı kod bölme / hydration önerileri **bu sayfaya uygulanmaz**; bu sayfanın kendi yükü farklıdır.

## 2. Core Web Vitals · saha verisi (CrUX p75, URL kapsamlı)
| Metrik | Değer | İyi eşiği | Durum |
|---|---|---|---|
| LCP | 1.049 ms | ≤ 2.500 ms | eşik içinde |
| INP | 147 ms | ≤ 200 ms | eşik içinde |
| CLS | 0,00 | ≤ 0,10 | eşik içinde |

Laboratuvar (mobil emülasyon, 4x CPU, Slow 4G): LCP 817 ms · TTFB 22 ms · render gecikmesi 795 ms · CLS 0,00.

**Not:** Sayfanın CWV performansı eşiklerin içindedir. Paket Seçimi sayfasındaki tabloyla (LCP 2,6 sn / INP 506 ms) karıştırılmamalıdır. Bu sayfada hız tarafındaki geliştirme alanları daha dar kapsamlıdır.

## 3. Doküman yükü
| Öğe | Değer |
|---|---|
| HTML dokümanı | 251,9 KB |
| Bunun içindeki tek inline script | **210,7 KB (dokümanın ~%84'ü)** |
| Inline script içeriği | Dynatrace RUM ajanı |
| Görünür metin | 9.073 karakter |

Dokümanın büyük bölümü ölçüm ajanıdır; gerçek içerik 9 KB düzeyindedir.

## 4. Render'ı bloke eden kaynaklar
4 stylesheet'in tamamı render-blocking:
| Kaynak | Süre / not |
|---|---|
| `turkcell.com.tr/css/styles.css` | 574 ms indirme |
| `cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css` | **üçüncü parti CDN, kritik yolda** |
| `merlincdn.net/.../esim/css/styles.css?v=06032026` | cache-control max-age=86400 (1 gün) |
| `merlincdn.net/.../esim/assets/fonts/stylesheet.css?v=06032026` | cache-control max-age=86400 (1 gün) |

Tahmini kazanç (DevTools): FCP 81 ms, LCP 81 ms.

## 5. JavaScript yığını
3 harici script, **üçü de senkron** (async/defer yok):
| Script | Konum | Not |
|---|---|---|
| `code.jquery.com/jquery-3.7.1.min.js` | body, SYNC | üçüncü parti CDN |
| `cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js` | body, SYNC | **release candidate (rc.0) sürüm, üçüncü parti CDN** |
| `merlincdn.net/.../esim/js/main.js?v=23022026` | body, SYNC | sayfa scripti |

Üçüncü parti ana iş parçacığı süresi: jQuery CDN 19 ms · JSDelivr 7 ms · MerlinCDN 4 ms.

İki ayrı üçüncü parti CDN (code.jquery.com, cdn.jsdelivr.net) kritik yolda yer almaktadır; ek DNS/TLS maliyeti ve dış bağımlılık oluşturmaktadır.

## 6. Görseller
| Ölçüm | Değer |
|---|---|
| Toplam görsel | 50 (44 SVG + 6 PNG) |
| `width`/`height` tanımı olmayan | **50 / 50** |
| `loading="lazy"` olmayan | **50 / 50** |
| Ekran dışında olup lazy olmayan | **23** |
| Görüntülenenden büyük çözünürlükte inen | 0 |

CLS şu an 0,00 olduğundan boyut tanımı acil değildir; ancak 23 ekran dışı görselin ertelenmemesi gereksiz ilk yük oluşturmaktadır.

## 7. Cache ömrü
`merlincdn.net` üzerindeki sayfa CSS/JS/font dosyaları `max-age=86400` (1 gün) ile sunulmaktadır. Dosyalar `?v=` sürüm parametresi taşıdığından çok daha uzun cache ömrü tanımlanabilir. (jsdelivr tarafı zaten `max-age=31536000, immutable`.)

## 8. Sayfa yapısı ve ekran dağılımı

### Masaüstü (1440x900) · toplam sayfa 3.527 px
| Bölüm | Başlangıç | Yükseklik | Ekran oranı |
|---|---|---|---|
| Main-Hero (lacivert #000F64) | 0 | 631 px | **%70** |
| Main-Intro (Teknolojik/Kolay/Hızlı) | 631 | 342 px | %38 |
| Main-HowHavedEsim | 972 | 670 px | %74 |
| Main-DeviceCompatible | 1.642 | 413 px | %46 |
| Main-Faq | 2.055 | 1.406 px | **%156 (sayfanın %40'ı)** |

Hero içeriği yalnızca 285 px; **346 px boş lacivert alan** kalmaktadır.

### Mobil (412x915) · toplam sayfa 4.077 px
| Bölüm | Başlangıç | Yükseklik | Ekran oranı |
|---|---|---|---|
| Main-Hero | 0 | 572 px | **%63** |
| Main-Intro | 572 | 652 px | %71 |
| Main-HowHavedEsim | 1.224 | 915 px | %100 |
| Main-DeviceCompatible | 2.139 | 505 px | %55 |
| Main-Faq | 2.644 | 1.326 px | %145 |

Hero içeriği 300 px; ≈272 px boş lacivert alan.

## 9. CTA envanteri (masaüstü)
Sayfada yalnızca 5 etkileşim öğesi bulunmaktadır:
| Metin | Hedef | Konum |
|---|---|---|
| Neden eSIM? | (buton, sayfa içi) | 401 px |
| **Hemen Başla** | `/kampanya/esim/pages/stage-1.html` | **1.287 px** |
| Sorgula | (buton, cihaz uyumluluk) | 1.917 px |
| Tekrar Sorgula | (buton) | gizli |
| Hemen Başla | `#` | gizli |

**Hero'da dönüşüm CTA'sı bulunmamaktadır.** Birincil aksiyon ("Hemen Başla") ilk ekranın 1,4 ekran altındadır.

## 10. Sayfa içi SSS (mevcut 16 soru · yeni öneri üretilirken tekrar edilmeyecek)
1. eSIM nedir?
2. eSIM'in Öne Çıkan Özellikleri ve Avantajları Nelerdir?
3. eSIM Güvenli midir?
4. eSIM'den Kimler Faydalanabilir?
5. eSIM'i Nereden Temin Edebilirim?
6. Bu İşlemleri Mağazaya Gelmeden Yapabilir miyim?
7. eSIM QR Kodu Okunmazsa, Nasıl Aktifleyebilirim?
8. Bana Verilen QR Kodu Kaybettim. Nasıl Tekrar Alabilirim?
9. 23 Haziran 2020'den Önce Aldığım Apple Marka Cep Telefonumda eSIM'i Nasıl Aktifleştirebilirim?
10. Cihazım Hem Fiziksel Hem de eSIM Destekli, İki Hat/Çift Sim Kullanabilir miyim?
11. eSIM Hattı Olan Cihazımı Kaybettim, Ne Yapmalıyım?
12. Cihaz Değişikliği Yapmak İstiyorum, eSIM'i Taşıyabilir miyim?
13. eSIM'i Silmek Mümkün müdür? Nasıl Silebilirim?
14. Yanlışlıkla eSIM Profilimi Sildim Ne Yapmalıyım?
15. eSIM Hatlı Cihazımı Satmak İstiyorum Ne Yapmalıyım?
16. eSIM QR Kodu Süresi Ne Zaman Dolmaktadır?

## 11. On-page / işaretleme
| Öğe | Durum |
|---|---|
| Title | "eSIM \| Turkcell Dünyasına eSIM Teknolojisi İle Katılın" (54 krk) |
| Meta description | 157 krk |
| Canonical | var, kendine |
| robots | index, follow |
| H1 | 1 adet, ancak başlık H2+H1 olarak **ikiye bölünmüş** ("Turkcell Dünyasına" H2 / "eSIM Teknolojisi İle Katılın" H1) |
| JSON-LD | **0 blok** (16 SSS var, FAQPage yok) |
| og:title / og:image | **yok** |
| Sayfa içi link sayısı | **20** |

## 12. İçerik hacmi karşılaştırması (ham HTML, JS çalışmadan)
| Sayfa | Görünür metin | H1-H3 | JSON-LD |
|---|---|---|---|
| **Turkcell** | **9.073 krk** | 26 | **0** |
| Türk Telekom | 23.199 krk (2,6x) | 63 | 0 |
| Vodafone | 31.415 krk (3,5x) | 45 | 3 (FAQPage, BreadcrumbList, Organization/WebSite) |

Turkcell sayfası, rakiplerinin yaklaşık üçte biri kadar indekslenebilir içerik taşımaktadır.
