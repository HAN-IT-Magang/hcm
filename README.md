# HAN Creative Marketing

Situs HAN Creative Marketing (HCM). Landing page dua bahasa, Indonesia dan Inggris, dengan halaman tentang, portofolio, dan detail layanan.

## Menjalankan

```bash
npm install
npm run dev
```

Dev server berjalan di `http://localhost:5173`.

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Jalankan lokal |
| `npm run build` | Build produksi ke `dist/` |
| `npm run preview` | Pratinjau hasil build |
| `npm run lint` | Cek kode dengan Oxlint |

Stack: React, Vite, React Router, Tailwind CSS, i18next, GSAP.

Alias `@` mengarah ke `src/`. Diatur di `vite.config.js` dan `jsconfig.json`.

Deploy di Vercel. `vercel.json` mengarahkan semua URL ke `index.html` supaya route tetap jalan setelah refresh.

## Alur aplikasi

`index.html` memuat `src/main.jsx`. File itu memasang CSS, mengaktifkan transisi halaman, lalu merender `App`.

`App` hanya membungkus `RouterProvider`. Semua halaman lewat `src/routes/index.jsx`.

```
/  →  redirect ke /id atau /en
/:lang  →  simpan bahasa, ganti i18n
  Layout
    Navbar
    halaman
    Footer
    tombol WhatsApp mengambang
```

`Layout` juga memasang animasi scroll (`useGsapReveal`) dan SEO (`useSeo`).

## Peta folder

| Path | Isi |
| --- | --- |
| `src/pages` | Halaman: beranda, tentang, portofolio, detail layanan, 404 |
| `src/components/sections` | Section beranda |
| `src/components/about` | Blok khusus halaman tentang |
| `src/components/layout` | Navbar, footer, layout |
| `src/components/ui` | Tombol, container, menu bahasa, WhatsApp |
| `src/data/landing.js` | Urutan dan nyala/mati section beranda |
| `src/data/services.js` | Seluruh teks halaman layanan |
| `src/locales/id` dan `src/locales/en` | Teks i18n beranda |
| `src/config/site.js` | Nama brand, WhatsApp, email, alamat, jam, sosial |
| `src/hooks` | Animasi GSAP dan meta SEO |
| `src/lib` | Bahasa URL, transisi halaman, `cn()` |
| `src/assets` | Gambar dan PDF |

## Halaman

| Route | File | Isi |
| --- | --- | --- |
| `/:lang` | `src/pages/Home.jsx` | `SectionRenderer`, urutannya dari `landing.js` |
| `/:lang/about` | `src/pages/About.jsx` | Hero, tim, daftar layanan, cara kerja, klien, FAQ |
| `/:lang/portofolio` | `src/pages/Portfolio.jsx` | Daftar karya dari `portfolioWorks` |
| `/:lang/layanan` | loader di route | Redirect ke slug pertama di `services.js` |
| `/:lang/layanan/:slug` | `src/pages/ServicePage.jsx` | Satu layanan. Slug tidak dikenal menampilkan 404 |
| lainnya | `src/pages/NotFound.jsx` | 404 |

Slug yang ada: `multimedia`, `live-commerce`, `graphic-design`, `social-media`, `product-photo-video`, `e-commerce`, `web-development`, `training`, `ai-content`.

## Bahasa

Bahasa yang sah hanya `id` dan `en`. Disimpan di `localStorage` dengan kunci `han-lang`.

- `/` membaca bahasa tersimpan, default `id`, lalu redirect.
- Prefix selain `id`/`en` juga di-redirect.
- Ganti bahasa lewat menu bahasa. Itu memuat ulang halaman ke path yang sama dengan prefix baru (`src/lib/pageSlide.js`).
- Link internal memakai `reloadDocument` dan `localizePath()` supaya prefix bahasa tidak hilang.

Teks terbagi dua.

1. **JSON i18n** — `src/locales/*/landing.json`, diakses dengan `useTranslation()` / `t('...')`. Navbar, meta SEO, dan sebagian section memakai ini.
2. **Objek `{ id, en }` di JS** — `src/data/services.js`, dan banyak section yang menulis teks langsung di komponen (`isEn ? '...' : '...'`).

Baca bahasa dari URL lewat `useLang()` di `src/components/ui/LanguageMenu.jsx`. Jangan andalkan `i18n.language === 'en'` untuk salinan baru. Beberapa section lama masih memakai cara itu. Kalau URL dan i18n tidak sama, teks dan link bisa beda bahasa.

## Section beranda

`src/data/landing.js` adalah daftarnya. `SectionRenderer` hanya merender item yang `enabled` bukan `false` dan `type`-nya ada di registry.

Registry ada di `src/components/sections/SectionRenderer.jsx`: `hero`, `about`, `division`, `services`, `whyUs`, `logos`, `portfolio`, `process`, `testimonials`, `pricing`, `ratecard`, `faq`, `cta`.

Yang tampil sekarang: hero, tentang, layanan, portofolio, klien, FAQ.

`cta` dan `kontak` `enabled: false`. Tipe `contact` juga tidak ada di registry, jadi menyalakan baris itu tidak menampilkan `Contact.jsx`. `division` ada di registry tetapi tidak ada di `landing.js`, jadi tidak tampil.

Menambah section beranda:

1. Buat komponen di `src/components/sections`.
2. Daftarkan `type` di registry.
3. Tambah satu baris di `landing.js`.

## Halaman layanan

Satu objek di `src/data/services.js`:

| Field | Dipakai untuk |
| --- | --- |
| `slug` | Bagian URL. Huruf kecil, tanda hubung, tanpa spasi |
| `title` | Nama di kartu dan navigasi |
| `lead` | Kata besar di hero |
| `highlight` | Kata di kotak kuning |
| `pill` | Label di pill |
| `summary` | Kalimat di kartu beranda |
| `points` | Daftar poin |
| `faq` | Pertanyaan di blok biru halaman itu |

Setiap field teks berbentuk `{ id, en }`. `serviceBySlug(slug)` mencari satu layanan.

Ikon kartu di beranda tidak ikut data itu. Pasangannya ada di objek `visuals` di `src/components/sections/Services.jsx`. Layanan baru butuh entri di kedua tempat.

## Animasi

`useGsapReveal` di `Layout` membaca atribut di JSX. `prefers-reduced-motion: reduce` mematikan animasi.

| Atribut | Fungsi |
| --- | --- |
| `data-gsap` | Gerak satu elemen: `left`, `left-far`, `right`, `right-far`, `zoom`, `pop`, `flip-left`, `flip-right`, `clip-left`, `clip-right`, `fade` |
| `data-gsap-delay` | Jeda, detik |
| `data-gsap-duration` | Durasi, detik |
| `data-gsap-once` | Main sekali, tidak berbalik saat keluar viewport |
| `data-gsap-hero` | Urutan intro hero. Angkanya menentukan urutan |
| `data-gsap-group` | Grup stagger. Nilai: `stagger`, `alternate`, `alternate-far`, atau nama gerak |
| `data-gsap-item` | Anak di dalam grup. `auto` mengikuti aturan grup |
| `data-gsap-stagger` | Jarak antar anak, detik |
| `data-gsap-parallax` | Geser horizontal saat scroll. Nilainya `xPercent` |
| `data-gsap-own` | Batas panel yang dianimasikan `playGsapIn`, dipakai menu mobile |

Slider layanan di desktop di-pin oleh GSAP sendiri, terpisah dari hook di atas. Di mobile, kartunya digeser dengan scroll biasa.

Pindah halaman bukan transisi React Router. `src/lib/pageSlide.js` menahan klik link internal, memainkan class `page-leave`, lalu `location.assign`. Animasi masuk ada di `src/index.css` pada `#root`.

## SEO

`index.html` memegang title, deskripsi, canonical, dan JSON-LD organisasi untuk kunjungan pertama.

Setelah React jalan, `useSeo` menimpa title, description, Open Graph, dan Twitter dari kunci `meta` di file locale. FAQ beranda juga ditulis sebagai JSON-LD `#seo-faq-jsonld`.

Canonical dan `hreflang` di `index.html` masih menunjuk ke `/?lang=en`. Aplikasi yang hidup memakai `/en`.

## Gaya

Token ada di `src/index.css` lewat Tailwind v4 `@theme`.

- Warna: `brand-50` sampai `brand-700`, `accent-magenta`, `accent-cyan`, `accent-lime`, `accent-yellow`, `ink-900`, `ink-700`, `ink-500`
- Ukuran teks: class `type-display`, `type-h2`, `type-h3`, `type-body`, `type-small`, `type-caption`
- Bayangan: `shadow-low`, `shadow-high`
- Font yang terpasang: Plus Jakarta Sans. Token `--font-anton` dan `--font-montserrat` hanya alias ke font yang sama



## Komentar


## Yang belum beres

- Nama anggota tim di `src/components/about/TeamSection.jsx` masih `Data 1` sampai `Data 6`.
- `Contact.jsx` tidak terhubung ke beranda.
- Halaman About dan halaman layanan membungkus `<main>` di dalam `<main>` milik `Layout`.
- Tidak ada tes otomatis.
