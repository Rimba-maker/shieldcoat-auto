# PRD: ShieldCoat Auto Protection — Salon Mobil & Coating

## 1. Brand Identity

**Nama Brand:** ShieldCoat Auto Protection
**Alasan Naming:** "Shield" = pelindung, "Coat" = lapisan/coating — langsung deliver core service. "Auto Protection" memperjelas positioning: bukan sekadar salon mobil biasa, tapi spesialis perlindungan cat & body. Terdengar premium, technical-confident, mudah diingat.

**Beda dari AutoGleam (#51):**
- **AutoGleam** = generalist (cuci, detailing, coating sebagai salah satu service)
- **ShieldCoat** = specialist (coating, PPF, wrapping sebagai core — detailing hanya sebagai pre-coating step)

**Tagline:** *"Protect What You Love. Make It Last."*

**Target Audience:**
- Pemilik mobil premium & sport (BMW, Mercedes, Porsche, Ferrari)
- Pemilik mobil baru (mau langsung protect sebelum kena noda pertama)
- Enthusiast & modifikator (wrapping untuk style + protection)
- Fleet manager premium (leasing, rental mewah)
- Collector mobil klasik & antik
- SES A-B+, usia 25-50

**Brand Voice:**
- Tone: Premium, technical-expert, prestige, craftsmanship
- Style copywriting: Spesifik soal material (Gyeon, Gtechniq, XPEL), teknik, dan durability — bukan fluff
- Avoid: Bahasa terlalu generic "mobil bersih", overclaim tanpa data

---

## 2. Tech Stack

- **Framework:** Astro 5 (SSG)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript (strict)
- **Animation:** Framer Motion via React islands (premium, dramatic — reveal, parallax)
- **Deploy:** Netlify (static)
- **Images:** Unsplash + Pexels (dramatic car shots, coating close-ups)

---

## 3. Section Breakdown

| # | Section | Type | Tujuan |
|---|---------|------|--------|
| 1 | Navbar | `.astro` static | Logo premium, nav, CTA "Book Consultation" |
| 2 | Hero | React island `client:load` | Dramatic car + coating reflection shot |
| 3 | Core Services | React island `client:visible` | Ceramic Coating, PPF, Wrapping, Detailing |
| 4 | Coating Tiers | React island `client:visible` | Entry, Professional, Ultimate coating |
| 5 | PPF Section | React island `client:visible` | Partial vs full PPF, brands (XPEL/Suntek) |
| 6 | Wrapping | React island `client:visible` | Color wrap, matte, chrome, satin |
| 7 | Pre-Coating Process | React island `client:visible` | Paint correction + decon sebelum coating |
| 8 | Products We Use | React island `client:visible` | Brand coatings: Gtechniq, Gyeon, Ceramic Pro |
| 9 | Portfolio | React island `client:visible` | Before/after gallery |
| 10 | Warranty | `.astro` static | Garansi per tier |
| 11 | Our Applicators | React island `client:visible` | Tim certified applicator |
| 12 | Workshop Tour | React island `client:visible` | Gallery workshop premium |
| 13 | Pricing Reference | `.astro` static | Indikatif harga per service |
| 14 | FAQ | React island `client:visible` | FAQ teknis coating |
| 15 | Booking CTA | React island `client:idle` | Form konsultasi |
| 16 | Footer | `.astro` static | Lokasi, kontak, sosmed |

---

## 4. Copywriting (Bahasa Indonesia)

### Navbar
- Menu: Coating • PPF • Wrapping • Portfolio • Workshop
- CTA: **Book Consultation**

### Hero
- **Headline:** Investasi Terbaik Untuk Mobil Terbaik Anda.
- **Subheadline:** Spesialis ceramic coating, paint protection film, dan vehicle wrapping di Jakarta. Produk bergaransi internasional, dikerjakan oleh certified applicator berpengalaman.
- **CTA Primary:** Konsultasi Gratis
- **CTA Secondary:** Lihat Portfolio

Trust badges: "Gtechniq Certified Detailer" • "XPEL Authorized Installer" • "800+ Mobil Terproteksi" • "5 Tahun Warranty Available"

### Core Services
- **Heading:** Apa Yang Kami Lakukan
- **Subheading:** Spesialis tiga layanan utama perlindungan mobil — bukan generalis yang semua dikerjain setengah-setengah.

Grid 4 service cards (large, hero-style):

**🛡️ Ceramic Coating**
Lapisan perlindungan liquid glass yang mengeras di atas clear coat. Hydrophobic, anti-UV, anti-swirl. Durasi 1-5 tahun.
*Mulai Rp 3.5 jt*

**🔒 Paint Protection Film (PPF)**
Film TPU self-healing yang melindungi cat dari rock chip, kerikil, dan goresan. Self-healing under heat. Durasi 7-10 tahun.
*Mulai Rp 8 jt*

**🎨 Vehicle Wrapping**
Ubah warna atau texture mobil dengan vinyl premium tanpa cat ulang. Reversible, ratusan pilihan warna & finish.
*Mulai Rp 15 jt*

**✨ Paint Correction**
Pre-coating mandatory: decontamination + polish untuk angkat swirl, water spot, dan micro scratch. Tanpa ini, coating tidak bisa optimal.
*Mulai Rp 1.5 jt*

### Coating Tiers
- **Heading:** Pilih Level Perlindungan
- **Subheading:** Semua pakai coating grade profesional. Bedanya di product tier, durability, dan layering.

3 tier cards:

**🥉 Shield Entry — Rp 3.5 jt - 5 jt**
*1 layer coating, durability 1-2 tahun*
- Gyeon Quartz ONE coating
- Hydrophobic protection
- Gloss enhancement
- 1 tahun warranty
- Free 1x maintenance wash (6 bulan)
- Cocok untuk: daily driver, pertama kali coating

**🥈 Shield Professional — Rp 6 jt - 9 jt** ⭐ Most Popular
*2-3 layer coating, durability 3 tahun*
- Gtechniq Crystal Serum Light
- Paint correction 1-stage included
- Advanced hydrophobic + self-cleaning
- UV & chemical resistance
- 3 tahun warranty
- Free quarterly maintenance wash
- Cocok untuk: semi-premium, enthusiast

**💎 Shield Ultimate — Rp 12 jt - 18 jt**
*Multi-layer ceramic, durability 5 tahun*
- Gyeon Quartz MOHS EVO / Ceramic Pro Gold
- Full paint correction 2-stage included
- Decontamination + clay bar
- Coating semua surface (glass, wheel, plastic)
- 5 tahun warranty
- Annual inspection + top-up included
- Cocok untuk: premium & luxury car

*Harga bervariasi berdasarkan ukuran kendaraan (Hatchback / Sedan / SUV / MPV / Supercar)*

### PPF Section
- **Heading:** Paint Protection Film — Perlindungan Tertinggi
- **Subheading:** PPF adalah armor untuk cat Anda. Self-healing, transparan, invisible — tapi kerja keras di balik layar.

Split layout — left: edu content, right: image

**Kenapa PPF?**
- ✅ Protect dari rock chip & kerikil
- ✅ Self-healing: goresan halus hilang dengan panas
- ✅ Transparan, cat asli tetap terlihat
- ✅ Bisa dilapisi coating di atasnya (combo ultimate)
- ✅ 10 tahun warranty (XPEL)
- ❌ Jika tidak pakai: chip = rust = repair mahal

**Partial vs Full PPF:**

| Coverage | Area | Harga |
|----------|------|-------|
| **Zona 1 — Front** | Bumper, hood, fender depan | Rp 8 - 15 jt |
| **Zona 2 — Full Front** | + A-pillar, side mirror | Rp 12 - 20 jt |
| **Zona 3 — Full Body** | Seluruh panel eksterior | Rp 30 - 80 jt |
| **Track Pack** | Bumper, hood, sill, roof | Rp 15 - 25 jt |

**Brand yang kami pakai:**
- **XPEL Ultimate Plus** (US, 10 tahun warranty) — gold standard
- **Suntek Ultra** (US, 10 tahun warranty) — value premium
- **Llumar Platinum** (US, 7 tahun warranty) — entry PPF

**CTA:** Konsultasi PPF Coverage

### Wrapping
- **Heading:** Vehicle Wrapping — Ekspresi Tanpa Batas
- **Subheading:** Ganti warna tanpa cat ulang. Reversible, ratusan pilihan, full expression.

3 wrapping categories:

**🎨 Color Change Wrap**
Solid color, metallic, pearl — ratusan pilihan
- Gloss, matte, satin finish
- *Full body: Rp 15 - 30 jt*

**🪞 Specialty Finish**
- Chrome (mirror effect)
- Color shift / chameleon
- Carbon fiber look
- Brushed metal
- *Full body: Rp 25 - 60 jt*

**🏎️ Accent & Partial Wrap**
- Roof wrap (black out / contrast)
- Hood wrap
- Racing stripe
- Interior trim wrap
- *Mulai Rp 2.5 jt per panel*

**Brand yang kami pakai:**
- **3M 1080 Series** — most reliable, 7 tahun outdoor
- **Avery Dennison Supreme Wrapping Film** — color accuracy, 7 tahun
- **Oracal 970 RA** — premium budget, 5 tahun
- **Hexis** (specialty & chrome)

**Wrapping ≠ wrap tanpa prep.** Kami surface clean & decon sebelum apply — hasilnya lebih rata & tahan lama.

### Pre-Coating Process
- **Heading:** Proses Persiapan — Tidak Ada Shortcut
- **Subheading:** Coating di atas cat yang rusak = sia-sia. Itulah kenapa pre-coating process wajib.

6-step process visual:

**Step 1: 🔍 Paint Inspection**
Multi-angle inspection + paint depth gauge. Identifikasi swirl, scratch, oxidation, water spot.

**Step 2: 🚿 Decontamination Wash**
Snow foam + 2-bucket hand wash, iron remover, tar remover. Angkat semua kontaminan kimia & fisik.

**Step 3: 🟦 Clay Bar Treatment**
Clay bar untuk angkat kontaminan yang masih menempel di permukaan — tidak kelihatan tapi bikin coating tidak bonding maksimal.

**Step 4: ✨ Paint Correction (jika perlu)**
Machine polish dengan Rupes LHR, Festool Rotex. Stage 1 untuk swirl, Stage 2 untuk scratch & water spot. Hasil: paint grade 9-9.5/10.

**Step 5: 💦 Panel Wipe with IPA**
Isopropyl alcohol wipe untuk angkat sisa polish oil. Surface harus "naked" untuk coating bonding.

**Step 6: 🛡️ Coating Application**
Apply coating di suhu & humidity controlled environment. Curing time 24-48 jam.

### Products We Use
- **Heading:** Hanya Produk Bergaransi Internasional
- **Subheading:** Kami tidak pakai produk lokal tanpa track record. Setiap produk dipilih berdasarkan durability test, tidak marketing hype.

Grid 6 brand cards:

**Gyeon Quartz** (Korea)
- MOHS EVO (5 tahun)
- One (1 tahun)
- Status: Authorized Detailer

**Gtechniq** (UK)
- Crystal Serum Ultra (9 tahun)
- Crystal Serum Light (5 tahun)
- Status: Certified Detailer

**Ceramic Pro** (US)
- Gold Package (lifetime)
- Sport (3 tahun)
- Status: Authorized Installer

**XPEL** (US)
- Ultimate Plus PPF
- FUSION PLUS Coating
- Status: Authorized Installer

**3M** (US)
- 1080 Series Wrapping Film
- Crystalline Tint (bundled)

**Rupes** (Italy)
- LHR & Bigfoot polisher (equipment)
- Gold cutting & polishing compounds

### Portfolio
- **Heading:** Portfolio
- **Subheading:** Semua dikerjakan di workshop kami. Semua foto asli, bukan stock.

Filter: All • Coating • PPF • Wrapping • Paint Correction • Luxury Car
Masonry grid 20+ portfolio image dengan caption:
- Brand mobil, tahun
- Service yang dikerjakan
- Durasi pengerjaan

Highlight cars (sample):
- Ferrari 488 GTB — Full PPF XPEL + Gyeon Coating
- BMW M3 — Gtechniq Crystal Serum Light 5 tahun
- Porsche 911 — Color Change Wrap (Satin Black) + Coating
- Mercedes AMG C63 — Full Body PPF + Chrome Delete Wrap
- Toyota GR86 — Paint Correction Stage 2 + Gyeon MOHS EVO

### Warranty
- **Heading:** Warranty Yang Bisa Dipegang
- **Subheading:** Bukan warranty di atas kertas doang — kami backup dengan produk yang memang bergaransi internasional.

Warranty table:

| Service | Durasi | Coverage |
|---------|--------|----------|
| Shield Entry (Gyeon ONE) | 1 tahun | Coating failure, delamination |
| Shield Pro (Gtechniq CSL) | 3 tahun | Coating + chemical resistance |
| Shield Ultimate (MOHS EVO) | 5 tahun | Full coating + annual inspection |
| PPF (XPEL Ultimate Plus) | 10 tahun | Yellowing, cracking, bubbling |
| PPF (Suntek Ultra) | 10 tahun | Yellowing, cracking, bubbling |
| Vehicle Wrapping (3M) | 7 tahun | Outdoor durability |

**Klaim warranty:**
- Bawa mobil ke workshop kami
- Inspeksi visual + coating thickness test
- Klaim dalam waktu yang dijanjikan

**Note:** Warranty void jika: coating tidak di-maintain dengan pH-neutral soap, dipakai automatic brush car wash, kena chemical harsh.

### Our Applicators
- **Heading:** Tim Certified Applicator
- **Subheading:** Bukan kita sembarang apply — semua melewati training & sertifikasi brand.

Grid 4-6 applicator cards:
- **Dimas Prasetyo** — Lead Applicator, Gyeon & Gtechniq Certified (8 tahun)
- **Reza Maulana** — PPF Specialist, XPEL Certified Installer
- **Andre Kusuma** — Wrapping Specialist, 3M & Avery certified
- **Bayu Hartono** — Paint Correction Specialist, Rupes-trained
- **Sasha Wijaya** — Detail & Coating Assist (4 tahun)
- **Yusuf Pratama** — PPF Assist & Surface Prep

Per card: foto, nama, sertifikasi, spesialisasi, pengalaman (tahun)

### Workshop Tour
- **Heading:** Tempat Kerja Kami
- **Subheading:** Coating butuh lingkungan terkontrol — inilah kenapa workshop kami beda.

6 facility highlight:
- 🏭 **Controlled Environment** — AC + dust-free filter, suhu 20-25°C, tidak ada debu saat coating apply
- 💡 **LED Inspection Lighting** — Gyeon detailing light + Scangrip multi-angle untuk deteksi imperfection
- 🔧 **Rupes & Festool Equipment** — Polisher profesional grade untuk paint correction presisi
- 📏 **Paint Depth Gauge** — Digital gauge untuk measure clear coat thickness sebelum correction
- 🚿 **Dedicated Wash Bay** — 2 wash bay dengan water pressure + foam cannon
- 🏋️ **3 Bay Coating Area** — Cukup untuk 3 mobil secara bersamaan

Gallery foto workshop (interior, equipment, proses).

### Pricing Reference
- **Heading:** Indikatif Pricing
- **Subheading:** Pricing final setelah inspeksi kondisi cat & konsultasi. Sizing mobil menentukan harga.

| Service | Hatchback | Sedan | SUV/MPV | Sport/Luxury |
|---------|-----------|-------|---------|--------------|
| Shield Entry (1 thn) | Rp 3.5 jt | Rp 4 jt | Rp 4.5 jt | Rp 5.5 jt+ |
| Shield Pro (3 thn) | Rp 6 jt | Rp 7 jt | Rp 8 jt | Rp 10 jt+ |
| Shield Ultimate (5 thn) | Rp 12 jt | Rp 14 jt | Rp 16 jt | Rp 20 jt+ |
| PPF Zona 1 (Front) | Rp 8 jt | Rp 10 jt | Rp 12 jt | Rp 15 jt+ |
| PPF Full Body | Rp 30 jt | Rp 35 jt | Rp 45 jt | Rp 60 jt+ |
| Wrap Full Body | Rp 15 jt | Rp 18 jt | Rp 22 jt | Rp 30 jt+ |
| Paint Correction 1-Stage | Rp 1.5 jt | Rp 1.8 jt | Rp 2.2 jt | Rp 3 jt+ |
| Paint Correction 2-Stage | Rp 2.5 jt | Rp 3 jt | Rp 3.8 jt | Rp 5 jt+ |

**Combo Deals:**
- PPF Zona 1 + Shield Pro Coating: hemat Rp 1.5 jt
- Full Body PPF + Shield Ultimate: hemat Rp 3 jt
- Wrap + Shield Entry: hemat Rp 1 jt

*Cicilan 0% 6 bulan via BCA/Mandiri credit card untuk transaksi > Rp 10 jt.*

### FAQ
- **Heading:** FAQ Teknis
Accordion:
1. Apa bedanya ceramic coating vs wax biasa? → Wax life 3-4 bulan, harus reapply rutin, tidak tahan kimia keras. Ceramic coating mengeras dan bond ke clear coat, durasi 1-5 tahun, tahan UV, acid rain, dan bird dropping.
2. Apakah mobil bisa langsung dipakai setelah coating? → Butuh curing 24-48 jam. Jangan kena air atau cuci selama 7 hari pertama.
3. PPF self-healing berarti goresan apapun bisa hilang? → Self-healing hanya untuk light scratch & swirl yang tidak tembus PPF. Goresan dalam (tembus TPU film) tidak bisa self-heal.
4. Berapa lama pengerjaan? → Paint correction + coating: 2-4 hari. PPF full body: 3-5 hari. Wrapping full: 2-4 hari. Tergantung kondisi & complexity.
5. Apakah wrapping bisa dilepas? → Ya, wrapping vinyl dirancang removable. Dilepas dengan heat gun tanpa merusak cat asli jika diaplikasikan dengan benar.
6. Setelah coating, cara merawatnya? → Cuci dengan pH-neutral shampoo (Gyeon Bathe atau setara), jangan brush otomatis, jangan chemical keras. Kami berikan maintenance guide lengkap.
7. Apakah mobil baru perlu paint correction? → Tergantung kondisi. Mobil baru bisa sudah ada swirl dari dealer polish. Kami inspect dulu sebelum rekomendasikan.
8. Bisa konsultasi dulu sebelum commit? → Ya, inspeksi & konsultasi gratis. Kami beri rekomendasi berdasarkan kondisi nyata mobil Anda.

### Booking CTA
- **Heading:** Book Konsultasi & Inspeksi
- **Body:** Inspeksi & konsultasi gratis. Bawa mobil ke workshop atau kami visit untuk fleet. Booking minimal H-2.
- Form: Nama, WhatsApp, Email, Tipe & tahun mobil, Service interest (multi-select: Coating/PPF/Wrapping/Paint Correction), Kondisi cat sekarang (dropdown: Baru/Ada swirl ringan/Ada scratch/Tidak tahu), Tanggal preferensi, Pesan
- **CTA:** Book Konsultasi Gratis

Alternative: **WhatsApp Direct** untuk pertanyaan teknis cepat

### Footer
- Tagline: *"Your car deserves the best. So does its paint."*
- Workshop: Jl. Otomotif Raya No. 12, Cakung, Jakarta Timur
- Jam: Senin-Sabtu 08:00-18:00 (penerimaan mobil sampai 15:00), Minggu by appointment
- Sosmed: IG (@shieldcoat.auto), YouTube (coating process BTS), TikTok (before-after)
- Sertifikasi: Gtechniq Certified Detailer, XPEL Authorized Installer, member AISA (Asosiasi Industri Salon Otomotif)

---

## 5. Image References

| Section | Source | URL / Search Term | Alt Text | Dimensi |
|---------|--------|-------------------|----------|---------|
| Hero | Unsplash | https://unsplash.com/s/photos/car-ceramic-coating-reflection | "Ceramic coating reflection dramatic" | 1920x1080 |
| Hero alt | Pexels | https://www.pexels.com/search/luxury%20car%20detail%20shine/ | "Luxury car shine" | 1920x1080 |
| Core - Ceramic Coating | Unsplash | https://unsplash.com/s/photos/ceramic-coating-application | "Ceramic coating apply" | 800x600 |
| Core - PPF | Pexels | https://www.pexels.com/search/paint%20protection%20film%20car/ | "PPF installation" | 800x600 |
| Core - Wrapping | Unsplash | https://unsplash.com/s/photos/car-wrap-vinyl-application | "Vinyl wrapping" | 800x600 |
| Core - Paint Correction | Pexels | https://www.pexels.com/search/paint%20correction%20polish%20car/ | "Paint correction machine" | 800x600 |
| Coating Tier - Entry | Unsplash | https://unsplash.com/s/photos/car-ceramic-hydrophobic-water | "Hydrophobic water beading" | 800x600 |
| Coating Tier - Pro | Pexels | https://www.pexels.com/search/car%20paint%20protection%20gloss/ | "Gloss ceramic coating" | 800x600 |
| Coating Tier - Ultimate | Unsplash | https://unsplash.com/s/photos/luxury-car-showroom-shine | "Ultimate protection" | 800x600 |
| PPF - Installation | Pexels | https://www.pexels.com/search/ppf%20car%20film%20install/ | "PPF application" | 1200x800 |
| PPF - XPEL | Unsplash | https://unsplash.com/s/photos/ppf-clear-film-car-hood | "Clear PPF film" | 1200x800 |
| PPF - Self Healing | Pexels | https://www.pexels.com/search/self%20healing%20car%20film/ | "Self healing PPF" | 1200x800 |
| Wrapping - Color | Unsplash | https://unsplash.com/s/photos/car-wrap-matte-black | "Matte black wrap" | 800x600 |
| Wrapping - Chrome | Pexels | https://www.pexels.com/search/chrome%20car%20wrap/ | "Chrome wrap" | 800x600 |
| Wrapping - Satin | Unsplash | https://unsplash.com/s/photos/satin-blue-car-wrap | "Satin color wrap" | 800x600 |
| Wrapping - Accent | Pexels | https://www.pexels.com/search/car%20roof%20wrap%20black/ | "Roof black wrap" | 800x600 |
| Pre-Coating - Snow Foam | Unsplash | https://unsplash.com/s/photos/snow-foam-car-wash | "Snow foam decon" | 800x600 |
| Pre-Coating - Clay | Pexels | https://www.pexels.com/search/clay%20bar%20detailing/ | "Clay bar treatment" | 800x600 |
| Pre-Coating - Polish | Unsplash | https://unsplash.com/s/photos/machine-polish-car-rupes | "Machine polish Rupes" | 800x600 |
| Pre-Coating - Coating | Pexels | https://www.pexels.com/search/ceramic%20coating%20apply/ | "Coating application" | 800x600 |
| Products - Gyeon | Unsplash | https://unsplash.com/s/photos/gyeon-quartz-ceramic | "Gyeon products" | 600x600 |
| Products - Gtechniq | Pexels | https://www.pexels.com/search/gtechniq%20car%20coating/ | "Gtechniq coating" | 600x600 |
| Products - XPEL | Unsplash | https://unsplash.com/s/photos/xpel-ppf-protection | "XPEL PPF" | 600x600 |
| Products - Rupes | Pexels | https://www.pexels.com/search/rupes%20polisher%20machine/ | "Rupes machine" | 600x600 |
| Portfolio - Ferrari | Pexels | https://www.pexels.com/search/ferrari%20car%20ppf/ | "Ferrari PPF coating" | 1200x800 |
| Portfolio - BMW | Unsplash | https://unsplash.com/s/photos/bmw-ceramic-coating | "BMW coated" | 1200x800 |
| Portfolio - Wrap | Pexels | https://www.pexels.com/search/wrapped%20car%20matte/ | "Car wrap matte" | 1200x800 |
| Workshop - Interior | Unsplash | https://unsplash.com/s/photos/car-detailing-workshop | "Workshop interior" | 1600x900 |
| Workshop - Equipment | Pexels | https://www.pexels.com/search/detailing%20equipment%20professional/ | "Professional equipment" | 800x600 |
| Workshop - Lighting | Unsplash | https://unsplash.com/s/photos/detailing-inspection-light | "LED inspection light" | 800x600 |
| Applicator portrait | Pexels | https://www.pexels.com/search/auto%20detailer%20professional/ | "Certified applicator" | 600x800 |
| Testimonial car | Unsplash | https://unsplash.com/s/photos/luxury-car-owner-proud | "Happy car owner" | 800x800 |

---

## 6. Animation Spec (Framer Motion)

**Note:** Premium brand — animasi dramatic, slow reveal, cinematic. Bukan bouncy atau playful.

### Hero (React island, `client:load`)
```tsx
// Dramatic slow reveal dengan shine sweep effect
const dramaticReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.2 }
  }
}

// Headline: slow character reveal
const premiumChar = {
  hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  }
}

// Shine sweep effect di atas hero image
const shineSweep = {
  x: ["-100%", "200%"],
  opacity: [0, 0.3, 0],
  transition: { duration: 3, repeat: Infinity, repeatDelay: 5 }
}

// Trust badges: stagger fade-in setelah headline
```

### Core Services (React island, `client:visible`)
- 4 large service cards reveal stagger
- Cards dengan dramatic horizontal image
- Hover: image scale `1.05` + overlay text reveal dari bawah
- Service icon: gold accent reveal

### Coating Tiers (React island, `client:visible`)
- 3 cards reveal stagger
- "Most Popular" card: subtle gold border glow infinite
- Card hover: lift `y: -12`, shadow dramatic, price emphasis
- Feature list: stagger reveal saat card hover

### PPF Section (React island, `client:visible`)
- Split layout: edu text + image
- Image: slow parallax saat scroll
- PPF zone table: row reveal stagger
- Brand logos: stagger reveal, grayscale → color on hover

### Wrapping (React island, `client:visible`)
- 3 category cards reveal stagger
- Color swatch carousel: smooth drag/slide
- Brand logos: row reveal

### Pre-Coating Process (React island, `client:visible`)
- 6-step timeline: SVG line draw via `pathLength`
- Step icon: scale pop reveal sequential (stagger 0.3s)
- Step content: slide-in dari sisi alternating
- Active step on hover: highlight ring + description expand

### Products We Use (React island, `client:visible`)
- 6 brand cards grid stagger
- Default: grayscale
- Hover: full color + brand detail slide-up
- "Certified/Authorized" badge: pulse glow

### Portfolio Masonry (React island, `client:visible`)
- Masonry layout dengan `layout` prop
- Filter tabs: `layoutId` smooth indicator
- Image hover: scale + dark overlay + car details reveal
- Click → lightbox modal pakai `AnimatePresence` morph

### Warranty Table
- Row reveal stagger
- Hover row: subtle highlight
- "10 tahun" warranty cell: gold accent

### Our Applicators (React island, `client:visible`)
- 4-6 cards stagger reveal
- Hover: image scale + certification badge stagger
- Certification icons: subtle glow on hover

### Workshop Tour Gallery (React island, `client:visible`)
- Gallery grid stagger reveal
- Image hover: scale + caption slide-up
- Click → lightbox

### Pricing Table
- Table header: left-to-right reveal
- Row reveal stagger
- "Luxury" column: gold accent
- Combo deals section: callout animation

### FAQ Accordion (React island, `client:visible`)
- Height animation via `layout`
- Chevron rotate
- Technical terms highlight on open

### Booking Form
- Multi-step smooth
- Car details step: animated highlight
- Service multi-select: chip animation
- Submit: button morph + success animation

### Scroll Reveal Pattern (reusable)
```tsx
const premiumFade = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
  }
}
```

### Cursor Effect (desktop)
- Custom cursor: small gold dot yang expand saat hover atas car images
- Shine trail effect subtle

### Hydration Strategy
- `client:load` → Hero
- `client:visible` → Core, Coating Tiers, PPF, Wrapping, Pre-Coating, Products, Portfolio, Applicators, Workshop, FAQ
- `client:idle` → Booking form
- Sisanya: static

---

## 7. SEO Meta

- **Title:** ShieldCoat Auto Protection — Ceramic Coating, PPF & Wrapping Jakarta
- **Description:** Spesialis ceramic coating, paint protection film (PPF), dan vehicle wrapping di Jakarta. Gtechniq Certified, XPEL Authorized. Warranty 1-10 tahun.
- **Keywords:** ceramic coating jakarta, PPF mobil, paint protection film, car wrapping jakarta, gyeon coating, gtechniq jakarta, xpel ppf, salon mobil premium
- **OG Image:** Dramatic shot car coating reflection (1200x630)
- **Schema:** `AutomotiveBusiness` + `Service` + `Product` schema
