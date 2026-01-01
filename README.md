# Kriya - Mitra Teknologi untuk Solusi Bisnis Terintegrasi

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Kriya adalah perusahaan teknologi yang mendampingi bisnis Anda dalam merancang, membangun, dan mengelola solusi digital secara menyeluruh. Mulai dari pengembangan software, manajemen infrastruktur IT, hingga konsultasi teknologi. Memastikan setiap solusi tidak hanya berfungsi secara teknis, tetapi juga mendukung tujuan dan strategi bisnis mitra kami.

Kami mengedepankan pendekatan proaktif dalam memantau, mengelola, dan mengoptimalkan sistem sejak awal untuk meminimalkan risiko, mencegah gangguan operasional, dan menjaga keberlangsungan bisnis secara berkelanjutan.

Dibangun menggunakan **Astro**, website ini mengutamakan performa dengan mengirimkan seminimal mungkin JavaScript ke sisi klien (*Zero JS by default*).

## 🚀 Tentang Proyek

Website ini berfungsi sebagai portal utama untuk klien dan mitra Alurkriya, mencakup:

- **Profil Perusahaan**: Visi, misi, dan tim di balik layar.
- **Layanan**: Penjelasan detail mengenai solusi teknologi yang kami tawarkan.
- **Portofolio**: Showcase studi kasus dan proyek yang telah diselesaikan.
- **Blog Teknologi**: Artikel dan wawasan seputar tren industri terkini.

## ✨ Fitur Utama

- **Performa Tinggi**: Skor Core Web Vitals yang optimal berkat arsitektur *Islands*.
- **SEO Optimized**: Meta tags dinamis, sitemap otomatis, dan struktur HTML semantik.
- **Responsif**: Tampilan adaptif untuk Desktop, Tablet, dan Mobile.
- **Manajemen Konten**: Menggunakan Markdown/MDX untuk penulisan artikel blog yang mudah.

## 🛠️ Teknologi yang Digunakan

- **Core Framework**: Astro
- **Styling**: Tailwind CSS (Direkomendasikan)
- **Bahasa Pemrograman**: TypeScript / JavaScript
- **Deployment**: Kompatibel dengan Vercel, Netlify, atau hosting statis lainnya.

## 📂 Struktur Proyek

Berikut adalah gambaran umum struktur folder proyek ini:

```text
/
├── public/           # Aset statis (Logo, Gambar, Robots.txt)
├── src/
│   ├── components/   # Komponen UI (Navbar, Footer, Card, Button)
│   ├── layouts/      # Template tata letak halaman (MainLayout, BlogLayout)
│   ├── pages/        # Routing berbasis file (index.astro, about.astro)
│   └── styles/       # File CSS global
└── package.json      # Daftar dependensi dan skrip
```

## 🏁 Panduan Instalasi

Ikuti langkah-langkah berikut untuk menjalankan proyek di komputer lokal Anda:

### 1. **Instal Dependensi**

```bash
npm install
```

#### 2. **Jalankan Server Development**

```bash
npm run dev
```

Akses website di browser melalui alamat `http://localhost:4321`.

### 3. **Build untuk Produksi**

```bash
npm run build
```
