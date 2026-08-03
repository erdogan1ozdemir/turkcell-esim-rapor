# Turkcell eSIM · Performans Ölçümü
Ölçüm: 3 Ağustos 2026, 15:14-15:18 UTC · PageSpeed Insights / Lighthouse 13.4.1 + CrUX
Üç URL'in de **sayfa bazlı (page-level) CrUX verisi mevcuttur**; origin fallback devreye girmemiştir.

## 1. Saha verisi (CrUX p75) · sayfa bazlı

| Sayfa | Cihaz | LCP | INP | CLS | FCP | TTFB | Genel |
|---|---|---|---|---|---|---|---|
| **Turkcell eSIM** | Mobil | **1,05 sn** | **147 ms** | **0,00** | **0,96 sn** | **308 ms** | FAST |
| **Turkcell eSIM** | Masaüstü | **1,37 sn** | **38 ms** | **0,00** | **1,22 sn** | **315 ms** | FAST |
| Vodafone e-SIM | Mobil | 1,13 sn | 157 ms | 0,07 | 0,75 sn | 288 ms | FAST |
| Vodafone e-SIM | Masaüstü | 0,79 sn | 58 ms | 0,06 | 0,48 sn | 175 ms | FAST |
| Türk Telekom eSIM | Mobil | 3,38 sn | 193 ms | 0,00 | **3,42 sn** | 843 ms | SLOW |
| Türk Telekom eSIM | Masaüstü | 2,67 sn | 77 ms | 0,02 | 2,52 sn | 771 ms | AVERAGE |
| **İyi eşiği** | | ≤2,5 sn | ≤200 ms | ≤0,10 | ≤1,8 sn | ≤0,8 sn | |

**Turkcell eSIM sayfası beş metrikte de "iyi" eşiğinin içindedir.**

## 2. Sayfa ile site geneli arasındaki ayrışma

| Origin | Cihaz | LCP | INP | TTFB | Genel |
|---|---|---|---|---|---|
| www.turkcell.com.tr | Mobil | 2,76 sn | **402 ms** | 1.169 ms | AVERAGE |
| www.turkcell.com.tr | Masaüstü | 1,96 sn | 129 ms | 790 ms | FAST |
| www.vodafone.com.tr | Mobil | 2,06 sn | 207 ms | 704 ms | AVERAGE |
| www.turktelekom.com.tr | Mobil | 4,44 sn | 212 ms | 901 ms | SLOW |

Eşik üstü değerler eSIM sayfasından değil, **site genelinden** gelmektedir. eSIM sayfası origin ortalamasının belirgin üzerinde performans göstermektedir.

## 3. Laboratuvar skorları (Lighthouse)

| Sayfa | Cihaz | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|---|
| **Turkcell eSIM** | Mobil | **94** | **98** | 96 | 92 |
| **Turkcell eSIM** | Masaüstü | **97** | **98** | 96 | 92 |
| Vodafone | Mobil | 51 | 76 | 100 | 92 |
| Vodafone | Masaüstü | 60 | 76 | 100 | 92 |
| Türk Telekom | Mobil | 32 | 87 | 73 | 92 |
| Türk Telekom | Masaüstü | 34 | 88 | 73 | 92 |

## 4. Laboratuvar metrikleri

| Sayfa | Cihaz | FCP | LCP | CLS | TBT | SI | TTI |
|---|---|---|---|---|---|---|---|
| Turkcell eSIM | Mobil | 2,31 sn | 2,58 sn | 0,000 | **0 ms** | 2,83 sn | 2,58 sn |
| Turkcell eSIM | Masaüstü | 0,63 sn | 0,78 sn | 0,001 | **0 ms** | 1,74 sn | 0,78 sn |
| Vodafone | Mobil | 3,54 sn | 9,76 sn | 0,003 | 440 ms | 6,42 sn | 9,76 sn |
| Vodafone | Masaüstü | 0,42 sn | 1,58 sn | 0,629 | 260 ms | 1,70 sn | 1,99 sn |
| Türk Telekom | Mobil | 10,67 sn | 28,18 sn | 0,000 | 1.150 ms | 27,27 sn | 30,29 sn |
| Türk Telekom | Masaüstü | 2,16 sn | 5,40 sn | 0,000 | 640 ms | 10,02 sn | 5,81 sn |

## 5. Sayfa ağırlığı (en belirgin ayrışma)

| Sayfa | Cihaz | Toplam | İstek | Script | Stylesheet | DOM element |
|---|---|---|---|---|---|---|
| **Turkcell eSIM** | Mobil | **302 KiB** | **35** | **3** | 4 | **388** |
| Vodafone | Mobil | 3.307 KiB | 176 | 27 | 11 | 2.239 |
| Türk Telekom | Mobil | 5.563 KiB | 170 | 40 | 18 | 2.989 |

Turkcell sayfası rakiplerinden yaklaşık **11x ve 18x daha hafiftir**.

## 6. Üçüncü parti yükü

| Sayfa | Cihaz | Toplam | Öne çıkan sağlayıcılar |
|---|---|---|---|
| **Turkcell eSIM** | Mobil | **183 KiB · 40 ms** | merlincdn 131 KiB · jQuery CDN 30 KiB · JSDelivr 22 KiB |
| Vodafone | Mobil | 719 KiB · 613 ms | corpowid 324 KiB · Optanon 209 KiB · Tealium 102 KiB · GTM 84 KiB |
| Türk Telekom | Mobil | 2.028 KiB · 1.358 ms | YouTube 998 KiB · GTM 784 KiB · efilli 80 KiB |

## 7. Turkcell için geliştirme alanları (Lighthouse tahmini kazanç)

| Audit | Mobil | Masaüstü |
|---|---|---|
| **render-blocking** | 870 ms (LCP 850 ms · FCP 850 ms) | 500 ms |
| **unused-javascript** | 44 KiB (LCP 300 ms · FCP 300 ms) | 42 KiB (50 ms) |
| **cache** | 52 KiB (FCP 150 ms) | 52 KiB |
| mainthread-work | 397 ms | 617 ms |
| bootup-time | 108 ms | 226 ms |

Tam puan alan (score 1) audit'ler: görsel teslimi, legacy JavaScript, kullanılmayan CSS, üçüncü parti yükü, DOM boyutu.

**Masaüstü sunucu yanıt süresi 497 ms** ile mobildeki 160 ms'nin üzerindedir; gözden geçirilebilecek bir noktadır.
