---
version: alpha
name: HCM Sticker Slap
description: Sistem desain landing page HCM (HAN Creative Marketing). Neo-brutalism berwarna dopamin, dijangkar di biru #0030ff, satu momen signature bernama Tangga GMV.
colors:
  primary: "#0030FF"
  on-primary: "#FFFFFF"
  ink: "#00104D"
  on-ink: "#FFFFFF"
  canvas: "#FFFFFF"
  wash: "#EAF0FF"
  muted: "#4A5580"
  pink: "#FF2E93"
  yellow: "#FFD600"
  orange: "#FF6A13"
  mint: "#00E0A4"
  line: "#00104D"
typography:
  display-xl:
    fontFamily: Anton
    fontSize: clamp(3.5rem, 11vw, 10rem)
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: -0.01em
  display-lg:
    fontFamily: Anton
    fontSize: clamp(2.5rem, 7vw, 6rem)
    fontWeight: 400
    lineHeight: 0.95
  headline:
    fontFamily: Bebas Neue
    fontSize: clamp(1.75rem, 3.2vw, 2.75rem)
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Montserrat
    fontSize: 1.25rem
    fontWeight: 500
    lineHeight: 1.55
  body-md:
    fontFamily: Montserrat
    fontSize: 1rem
    fontWeight: 500
    lineHeight: 1.6
  label:
    fontFamily: Montserrat
    fontSize: 0.875rem
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.01em
rounded:
  none: 0px
  sm: 6px
  md: 14px
  pill: 999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 72px
  section: clamp(72px, 12vw, 160px)
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: 16px 28px
    height: 56px
  button-primary-hover:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: 16px 28px
    height: 56px
  sticker:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 6px 12px
  block-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 24px
---
# HCM Sticker Slap

Dokumen ini adalah kontrak desain untuk landing page HCM. Agen AI dan developer wajib mengikutinya di setiap sesi. Nilai di YAML adalah sumber kebenaran. Prosa di bawahnya menjelaskan kenapa nilai itu dipilih dan cara memakainya.

## Overview

**Subjek:** HCM (HAN Creative Marketing) adalah agensi marketing e-commerce untuk TikTok Shop dan Shopee. Layanan intinya Marketplace Management, Affiliator/KOL Management, dan Ads Management. Tagline: "Your Growth Partner".

**Audiens:** pemilik brand dan tim e-commerce yang ingin naik dari toko baru sampai skala besar. Mereka terbiasa dengan bahasa marketplace: flash sale, keranjang kuning, live, ROAS, GMV.

**Tugas utama halaman:** membuat pemilik brand percaya HCM paham marketplace, lalu menekan tombol WhatsApp "Mulai Scale Brand".

**Kepribadian:** fun, ceria, Gen Z, colorful, tapi tetap dipercaya untuk urusan uang. Bahasa tidak terlalu formal.

**Konsep satu kalimat:** halaman ini terasa seperti lembar stiker di atas papan skor penjualan. Semua elemen punya tepi tegas, bayangan keras, dan warna berani, sehingga terasa seperti label harga dan badge flash sale yang sudah akrab bagi audiens.

**Kenapa arah ini, bukan yang lain (ringkasan riset):**

- Neobrutalism dan dopamine design disebut sebagai gaya yang membuat brand terasa lebih manusiawi dan kurang generik, dengan warna jenuh dan outline tebal. Cocok untuk audiens muda yang tahan stimulus tinggi.
- Tipografi adalah elemen yang paling sulit ditiru AI. Kombinasi typeface, skala, spacing, dan gerak yang khas masih butuh selera manusia.
- Awwwards menilai Design 40%, Usability 30%, Creativity 20%, Content 10%. Jadi fundamental (Design + Usability = 70%) harus mulus dulu, baru satu ide berani ditambahkan.
- Situs pemenang memiliki satu momen signature, bukan dua puluh efek. Kita hanya membuat satu: **Tangga GMV**.

**Target kualitas:** lulus standar Awwwards (jury 18+ orang, skor 6.5+ untuk Honorable Mention) dan dijadikan patokan kerja. Ini target, bukan jaminan menang.

## Colors

Biru brand mendominasi. Warna lain adalah bumbu, bukan pemeran utama. Aturan takaran: kira-kira 50% putih dan wash, 30% biru, 20% gabungan ink dan aksen.

- **Primary `#0030FF`:** biru brand dari form. Untuk blok warna besar, tombol utama, dan latar section hero/penutup.
- **Ink `#00104D`:** biru sangat gelap turunan brand. Untuk teks, outline, dan bayangan keras. Jangan pakai hitam murni.
- **Canvas `#FFFFFF` dan Wash `#EAF0FF`:** latar halaman dan section selingan.
- **Muted `#4A5580`:** teks sekunder.
- **Aksen dopamin:** Pink `#FF2E93`, Yellow `#FFD600`, Orange `#FF6A13`, Mint `#00E0A4`. Maksimal dua aksen per section.

**Peran aksen (konsisten di seluruh halaman):**

- Yellow: badge, stiker, dan hover tombol utama. Warna "perhatian".
- Pink: momen playful dan highlight layanan Affiliator/KOL.
- Orange: Ads Management.
- Mint: tanda hasil positif (naik, tumbuh).

**Kontras terukur (WCAG 2.1):**

| Pasangan                       | Rasio            | Verdict                                                                    |
| ------------------------------ | ---------------- | -------------------------------------------------------------------------- |
| Ink di atas Canvas             | 17.78:1          | AAA                                                                        |
| Ink di atas Wash               | 15.58:1          | AAA                                                                        |
| Putih di atas Primary          | 7.33:1           | AAA                                                                        |
| Primary di atas Canvas         | 7.33:1           | AAA                                                                        |
| Primary di atas Wash           | 6.42:1           | AA                                                                         |
| Muted di atas Canvas           | 7.24:1           | AAA                                                                        |
| Ink di atas Yellow             | 12.59:1          | AAA                                                                        |
| Ink di atas Mint               | 10.33:1          | AAA                                                                        |
| Ink di atas Orange             | 6.20:1           | AA                                                                         |
| Ink di atas Pink               | 5.13:1           | AA                                                                         |
| Yellow di atas Primary         | 5.19:1           | AA                                                                         |
| **Putih di atas Pink**   | **3.46:1** | **GAGAL untuk teks biasa**                                           |
| **Mint di atas Primary** | **4.26:1** | **GAGAL untuk teks biasa (boleh hanya untuk teks besar 24px+ bold)** |

Aturan turunan: teks di atas Pink, Orange, Yellow, dan Mint selalu Ink. Jangan pernah putih di atas Pink.

## Typography

Font brand dari form: Arial, Montserrat, Anton, Bebas Neue. Semuanya dipakai dengan peran jelas. **Inter tidak dipakai.**

- **Anton** untuk display. Judul raksasa, padat, tinggi. Ini identitas visual utama.
- **Bebas Neue** untuk headline pendek, nama layanan, dan teks stiker.
- **Montserrat** (500 dan 700) untuk semua teks bacaan dan tombol.
- **Arial** hanya fallback. Tumpukan: `Anton, "Arial Narrow", Impact, sans-serif` untuk display, `Montserrat, Arial, sans-serif` untuk body.

Aturan tipografi:

- Anton dan Bebas Neue hanya untuk teks pendek. Paragraf selalu Montserrat.
- Panjang baris maksimal 68 karakter.
- Di ukuran 80px ke atas, letter-spacing dan line-height dirapatkan sedikit (lihat token).
- Muat font lewat Google Fonts dengan `font-display: swap`, subset Latin, dan preload untuk Anton dan Montserrat 500 agar LCP tetap cepat. Font wajib punya fallback nyata.
- Hindari kebiasaan template: huruf kapital semua untuk label kecil, satu kata di headline diberi warna atau miring berbeda, dan eyebrow di atas setiap heading. Anton sudah kapital secara karakter, jadi jangan ditambah tracking lebar.
- Judul boleh dianimasikan (kinetic type), tetapi tidak boleh sulit dibaca di tengah transisi.

## Layout

- Grid 12 kolom, container maksimal 1360px, margin samping 20px di mobile dan 48px di desktop.
- Basis spacing 8px. Jarak antar section memakai token `section`.
- **Mobile adalah versi utama.** Desain dan uji di layar 360-390px dulu. Interaksi hover harus punya padanan sentuh.
- Komposisi sengaja sedikit tidak simetris: judul besar bisa memotong tepi kolom, stiker menempel miring 2-4 derajat. Jangan berlebihan sampai teks bacaan miring.
- Ratakan kiri untuk teks bacaan. Tengah hanya untuk CTA penutup.
- Satu primitif layout diulang: **blok berwarna dengan outline Ink 3px dan bayangan keras**. Jangan membuat tujuh gaya kartu berbeda.

## Elevation & Depth

Kedalaman dibuat dengan bayangan keras (tanpa blur), bukan bayangan lembut.

```yaml
elevation:
  flat: none
  block: "6px 6px 0 0 #00104D"
  block-hover: "10px 10px 0 0 #00104D"
  block-press: "2px 2px 0 0 #00104D"
outline: 3px solid #00104D
```

- Tombol dan blok memakai `block`. Hover menaikkan ke `block-hover` sambil bergeser `translate(-2px, -2px)`. Ditekan turun ke `block-press`.
- Dilarang: glassmorphism, blur backdrop, glow berwarna, bayangan abu-abu lembut, dan gradient dekoratif.

## Shapes

- Tombol: pill (`999px`). Blok dan kartu: `14px`. Stiker: `6px`.
- Tiga radius itu saja. Tidak ada radius lain, tidak ada radius sama untuk semua elemen tanpa hierarki.
- Bentuk geometris tegas (lingkaran, bintang bergerigi, panah tebal) boleh dipakai sebagai stiker dekoratif, dalam SVG inline yang ringan.

## Components

- **Tombol utama "Mulai Scale Brand":** biru, teks putih, pill, outline Ink 3px, bayangan `block`. Hover berubah kuning dengan teks Ink. Mengarah ke `wa.me/6285732052021` dengan pesan awal terisi.
- **Tombol sekunder:** putih, teks Ink, outline yang sama.
- **Stiker:** kotak kecil kuning, sedikit miring, teks Bebas Neue. Dipakai untuk penanda seperti "Baru", "Hot", "Partner". Bukan badge di atas H1 pada setiap halaman.
- **Blok layanan:** blok berwarna penuh (biru, pink, orange, dll.) dengan outline dan bayangan keras. Setiap layanan punya warna peran sendiri, dan isinya bervariasi (ada yang punya angka, ada yang punya ilustrasi), jangan kartu identik dengan ikon di atas.
- **FAQ accordion:** baris dengan outline Ink, ikon plus yang berputar jadi silang. Animasi buka maksimal 250ms. Dapat dioperasikan keyboard dengan `aria-expanded`.
- **Navbar:** logo kiri, menu jangkar, toggle ID/EN, tombol WA. Di mobile jadi menu layar penuh. Sticky dengan `top: env(safe-area-inset-top, 0px)`.
- **Tombol WhatsApp melayang:** kanan bawah, target sentuh minimal 48px, tidak menutupi konten penting, dijaga dari safe area bawah.

## Page Structure

Urutan section. Semua konten harus riil, tanpa lorem ipsum.

1. **Hero.** Headline "Scale Your E-Commerce Brand with the Right Growth Partner" dalam Anton raksasa. Sub-headline dan tombol "Mulai Scale Brand". Marquee kosakata marketplace (Checkout, Live, Affiliate, ROAS, Flash Sale) sebagai identitas gerak, bukan hiasan acak.
2. **Tentang HCM.** Satu paragraf: partner pertumbuhan, strategi, data, eksekusi.
3. **Layanan.** Tiga blok inti: Marketplace Management, Affiliator Management, Ads Management. Layanan lain dari FAQ (MPA, Social Media, Digital Creative Asset, Live Streaming) bisa masuk sebagai deretan stiker kecil. *Perlu konfirmasi PIC mana yang ditampilkan.*
4. **Tangga GMV (momen signature).** Lihat bagian Motion.
5. **Kenapa HCM.** Lima poin: Growth-Oriented Partner, Performance Driven Strategy, End-to-End E-commerce Solution, Creative Meets Commerce, Experienced Team. Tampilkan sebagai layout bervariasi, bukan lima kartu ikon yang sama.
6. **Bukti.** Testimoni, logo klien, atau hasil nyata. *Belum ada datanya; tanpa ini klaim GMV lemah.* Jangan mengarang angka.
7. **FAQ.** Enam pertanyaan dari form.
8. **Kontak.** Alamat, jam operasional 08.00-16.00, embed Google Maps (`loading="lazy"`), sosial media Instagram dan TikTok, tombol WA.
9. **Footer.**

## Motion

Gerak adalah bagian dari identitas, bukan lapisan tambahan. Satu bahasa gerak dipakai di seluruh situs.

```yaml
motion:
  feedback: 120ms
  reveal: 700ms
  easing-out: "cubic-bezier(0.16, 1, 0.3, 1)"
  easing-pop: "cubic-bezier(0.34, 1.56, 0.64, 1)"
  stagger: 60ms
  max-type-entrance: 600ms
```

**Aturan gerak:**

- Animasikan hanya `transform` dan `opacity`. Jangan menganimasikan `width`, `top`, atau `box-shadow` saat scroll.
- Satu jam untuk seluruh situs: satu loop animasi (GSAP ticker), bukan beberapa `requestAnimationFrame` terpisah.
- Stagger 50-100ms. Muncul serentak terasa tidak disengaja.
- Animasi masuk teks 300-600ms.
- Efek `easing-pop` (memantul ringan) hanya untuk stiker dan tombol, sebagai sisi ceria. Jangan untuk semua elemen.
- Reveal masuk section tidak dipakai di setiap section. Pilih tempat yang bermakna.
- Wajib menghormati `prefers-reduced-motion`: matikan marquee, pin, dan parallax, sisakan fade singkat.
- Jangan biarkan animasi dipakai hanya karena bisa. Jika gerak tidak menyampaikan sesuatu, hapus.

**Signature: Tangga GMV.** Satu-satunya momen "wow". Ini valid sebagai urutan karena konten aslinya memang sebuah perjalanan: dari brand yang baru mulai, ke scale-up, sampai skala besar.

- Section di-pin. Saat scroll, tiga balok berwarna naik bertahap seperti tangga (biru, pink, kuning) dengan bayangan keras.
- Setiap anak tangga memunculkan satu label tahap dan satu kalimat pendek.
- Teks tahap harus ditulis dari data nyata HCM. Jika belum ada, gunakan label tahap tanpa angka.
- Di mobile, versi sederhana: balok naik satu per satu saat masuk viewport, tanpa pin panjang.
- Diimplementasi dengan GSAP ScrollTrigger dan Lenis. Muat GSAP dan Lenis sebagai skrip UMD dengan versi terkunci.

Contoh tata bahasa reveal (satu kali, dipakai ulang):

```js
gsap.utils.toArray('[data-reveal]').forEach((el) => {
  gsap.from(el, {
    yPercent: 16,
    opacity: 0,
    duration: 0.7,
    ease: 'expo.out',
    scrollTrigger: { trigger: el, start: 'top 85%', once: true },
  })
})
```

## Content & Voice

- **Bahasa:** ID dan EN dengan toggle. Kedua versi ditulis oleh manusia yang paham konteks. Terjemahan mesin terlihat jelas oleh juri multibahasa.
- **Nada:** santai, ceria, Gen Z, tetap jelas. Kalimat aktif, kata kerja sederhana, huruf besar hanya di awal kalimat dan nama.
- **Tombol:** menyebut aksi yang terjadi. "Mulai Scale Brand" membuka WhatsApp.
- **Contoh nada (boleh disesuaikan PIC):** "Toko udah jalan tapi ngerasa stuck? Ayo scale bareng." Jangan memakai frasa generik seperti "solusi inovatif".
- **Tanda baca:** hindari em dash berulang dan pola "kata — fragmen" di judul, tombol, dan testimoni. Itu salah satu tanda teks buatan AI.
- **Klaim:** jangan menulis angka GMV, jumlah klien, atau hasil tanpa data yang bisa dibuktikan.
- **Aset:** foto tim, dokumentasi kerja, dan screenshot hasil asli. Tidak ada stok foto generik dan tidak ada ilustrasi AI default.

## Performance & Accessibility Contract

Usability bernilai 30% di Awwwards, dan performa menentukan kesan pertama juri.

- LCP di bawah 2,5 detik, CLS mendekati 0, INP rendah. Ukur di HP Android kelas menengah, bukan hanya laptop developer.
- Gerak hanya `transform` dan `opacity`. Media di bawah lipatan dimuat malas.
- Batasi pixel ratio jika memakai canvas. Jeda animasi di luar layar.
- Semua elemen interaktif punya focus ring 3px yang terlihat (Primary di atas terang, Yellow di atas biru).
- Navigasi keyboard penuh. Cursor kustom dilarang jika menyembunyikan cursor asli.
- Target sentuh minimal 44px.
- Semua kontras sesuai tabel di bagian Colors.
- Heading semantik berurutan, `alt` untuk gambar bermakna, label untuk kontrol.
- Halaman statis: tidak butuh backend selama tidak ada formulir. Jika ada formulir, validasi dan pesan galat ditulis dalam bahasa pengguna.
- Meta viewport `width=device-width, initial-scale=1, viewport-fit=cover`.
- Struktur konten untuk mesin pencari dan AI: HTML semantik, FAQ nyata, dan heading yang jelas.

## Do's and Don'ts

**Do**

- Pakai blok berwarna dengan outline Ink 3px dan bayangan keras sebagai bahasa visual tunggal.
- Jaga Biru `#0030FF` sebagai warna dominan. Maksimal dua aksen per section.
- Pakai Anton untuk momen besar dan Montserrat untuk semua bacaan.
- Simpan satu momen wow (Tangga GMV), dan buat sisanya rapi serta tenang.
- Tulis semua warna sebagai variabel CSS (`var(--primary)`), tidak hex mentah di komponen.
- Uji di HP nyata sebelum submit, dan kirim build produksi yang stabil.

**Don't**

- Jangan pakai Inter, kombinasi font tren yang sama (Space Grotesk, Instrument Serif, Geist), atau font ketiga di luar daftar.
- Jangan pakai gradient ungu-biru, glow, glassmorphism, atau dark mode default dengan aksen ungu.
- Jangan membuat kartu dengan garis warna di sisi kiri, deretan kartu ikon identik, baris statistik generik, atau langkah 1-2-3 kecuali kontennya memang urutan.
- Jangan menaruh badge kecil di atas H1 atau eyebrow huruf kapital di atas setiap heading.
- Jangan menaruh teks putih di atas Pink, atau Mint di atas Biru untuk teks kecil.
- Jangan menyembunyikan konten penting di balik hover.
- Jangan menambah efek acak tanpa hierarki. Jika semuanya bergerak, tidak ada yang penting.
- Jangan mengarang testimoni atau angka hasil.

## Agent Rules

Aturan yang bisa diperiksa. Agen wajib mematuhinya sebelum menganggap pekerjaan selesai.

1. Hanya pakai token di file ini. Jika perlu warna lain, campur dua token yang ada, jangan buat hex baru.
2. Hanya tiga radius (`6px`, `14px`, `999px`) dan skala spacing berbasis 8px.
3. Hanya tiga font: Anton, Bebas Neue, Montserrat, dengan fallback Arial.
4. Hanya satu CTA utama per layar, yaitu "Mulai Scale Brand" ke WhatsApp.
5. Satu bahasa gerak, satu momen signature, dan `prefers-reduced-motion` dihormati.
6. Seluruh teks tersedia dalam ID dan EN.
7. Tidak ada lorem ipsum, stok foto, atau angka yang belum diverifikasi.
8. Sebelum selesai, jalankan pemeriksaan pola AI slop (font default, gradient ungu, kartu bergaris kiri, kartu ikon identik, glassmorphism, contrast gagal) dan periksa Core Web Vitals di HP.

**Contoh prompt komponen:**

- "Buat blok layanan Ads Management: latar `orange`, teks `ink`, outline 3px `ink`, radius 14px, bayangan `6px 6px 0 0 #00104D`, judul Bebas Neue `headline`, deskripsi Montserrat 500."
- "Buat tombol utama: latar `primary`, teks putih, pill 56px, Montserrat 700 14px. Hover: latar `yellow`, teks `ink`, geser -2px, bayangan `block-hover`."

## Yang Masih Perlu Dikonfirmasi ke PIC

- Referensi desain (section H form masih kosong): minta 2-3 website yang disukai.
- Layanan yang ditampilkan: 3 layanan inti atau 7 layanan dari FAQ.
- Warna pendukung: aksen pada file ini adalah usulan, bukan data dari form.
- Testimoni, logo klien, dan angka hasil yang boleh dipakai.
- Sumber terjemahan ID/EN.
- Apakah butuh formulir kontak atau cukup tombol WhatsApp.
