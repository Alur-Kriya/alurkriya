export const solutions = [
  {
    id: 1,
    slug: 'software-ziswaf-erp',
    name: 'Software ZISWAF ERP',
    tagline: 'Satu Sistem ERP Terintegrasi untuk Seluruh Tata Kelola Lembaga ZISWAF',
    category: 'Enterprise Resource Planning (ERP)',
    badge: 'Solusi Khusus ZISWAF & Filantropi',
    navDesc:
      'ERP terpadu untuk fundraising, akuntansi PSAK 109, penyaluran 8 Asnaf, approval PPD, dan SDM amil.',
    title: 'Software ZISWAF ERP untuk Lembaga Zakat',
    description:
      'Kelola operasional lembaga ZISWAF melalui sistem terintegrasi untuk membantu pengelolaan data, transaksi, pembukuan, dan pelaporan. Konsultasikan kebutuhan lembaga Anda dengan Kriya.',
    ogimage: '/images/og-solusi-ziswaf-erp.png',
    images: {
      hero: '/images/solusi/hero.jpg',
      penyaluran: '/images/solusi/penyaluran.jpg',
      finance: '/images/solusi/finance.jpg',
      sdm: '/images/solusi/sdm.jpg',
    },
    hero: {
      eyebrow: 'ERP Terintegrasi untuk Lembaga ZISWAF',
      headline: 'Kelola Penghimpunan, Keuangan, dan Penyaluran ZISWAF dalam Satu Sistem',
      subheadline:
        'Satukan proses pengelolaan data muzaki, transaksi, pembukuan, dan pelaporan dalam sistem terintegrasi untuk membantu tim bekerja lebih terstruktur dan memudahkan pemantauan operasional lembaga.',
      primaryCta: 'Minta Demo ERP ZISWAF',
      secondaryCta: 'Konsultasi Kebutuhan Lembaga',
      secondaryCtaHref: '#cara-kerja',
    },
    waMessage:
      'Halo Kriya, saya ingin minta demo Software ZISWAF ERP untuk lembaga zakat kami. Mohon info ketersediaan jadwalnya.',
    schemaType: 'SoftwareApplication',
    compliance: true,
    demoButtonLabel: 'Minta Demo ERP ZISWAF',
    modulesLabel: 'Cakupan 11 Modul Inti:',
    trustBannerHeading: 'Arsitektur Sistem Dirancang untuk Berbagai Skala Lembaga Pengelola ZISWAF',
    painPointsTitle: 'Apakah Lembaga Anda Sering Mengalami Hambatan Operasional Ini?',
    painPointsSubtitle:
      'Mengelola dana amanah umat membutuhkan akurasi, kecepatan, dan transparansi tinggi. Namun banyak lembaga terhambat oleh proses manual yang lambat dan rawan risiko.',
    deepDivesHeading: 'Jawaban Konkret untuk Setiap Bidang Lembaga',
    deepDivesSubheading:
      'Perbandingan langsung antara hambatan operasional lama dengan solusi cepat yang dihadirkan Software ZISWAF ERP.',
    rolesHeading: 'Manfaat Nyata untuk Seluruh Tim Lembaga Anda',
    rolesSubheading:
      'Dari pimpinan puncak yang membutuhkan ringkasan eksekutif, hingga amil lapangan yang mencatat kuitansi donasi.',
    modulesBadge: '11 Modul ERP ZISWAF Terintegrasi',
    modulesTitle: 'Fitur & Modul Lengkap Software ZISWAF ERP',
    modulesSubtitle:
      'Seluruh modul di bawah ini sudah saling terintegrasi dalam paket standar, dan dapat disesuaikan mengikuti SOP dan alur otorisasi lembaga Anda.',
    impactHeading: 'Dampak Nyata Implementasi di Lembaga ZISWAF',
    impactSubheading:
      'Peningkatan efisiensi yang dirasakan tim operasional, keuangan, dan pendayagunaan setelah beralih dari pencatatan spreadsheet ke Software ZISWAF ERP terpadu.',
    faqHeading: 'Pertanyaan yang Sering Diajukan Seputar Software ZISWAF ERP',
    ctaTitle: 'Siap Mengintegrasikan Seluruh Tata Kelola Lembaga ZISWAF Anda?',
    ctaDesc:
      'Dapatkan sesi demonstrasi langsung dan konsultasi sistem bersama tim ahli Kriya. Temukan bagaimana Software ZISWAF ERP membantu lembaga Anda bertumbuh lebih amanah dan akuntabel.',
    ctaButtonLabel: 'Minta Demo ERP ZISWAF',
    ctaNote: 'Tim konsultan Kriya siap merespons permohonan demo dalam waktu 1x24 jam kerja.',

    // Clients & Social Proof
    clientInstitutions: [
      { name: 'Lembaga Amil Zakat Nasional', type: 'LAZNAS' },
      { name: 'LAZ Provinsi & Daerah', type: 'LAZ Daerah' },
      { name: 'Unit Pengumpul Zakat (UPZ)', type: 'UPZ Korporasi & Kampus' },
      { name: 'Yayasan Filantropi Islam', type: 'Yayasan Sosial Mandiri' },
      { name: 'Lembaga Pengelola Wakaf', type: 'Nazhir Wakaf Produktif' },
    ],

    // Stats Bar
    stats: [
      { value: '11', label: 'Modul Inti Terintegrasi' },
      { value: '8', label: 'Asnaf Zakat Syariah Sesuai Kaidah' },
      { value: '5', label: 'Pilar Program Standar Penyaluran' },
      { value: 'PSAK 109', label: 'Standar Akuntansi Nirlaba & Pedoman BAZNAS' },
    ],

    // Acute Pain Points
    painPoints: [
      {
        id: 'data-tercecer',
        number: '01',
        title: 'Data Muzaki & Transaksi Tersebar di Banyak Tempat',
        desc: 'Muzaki dicatat di buku kasir, file Excel masing-masing amil, dan mutasi m-banking pribadi. Akibatnya, riwayat donasi hilang, muzaki tidak terawat, dan retensi donasi anjlok.',
        impact:
          'Kehilangan potensi penghimpunan berulang dan risiko kecurangan kas di loket/gerai.',
      },
      {
        id: 'rekonsiliasi-lambat',
        number: '02',
        title: 'Rekonsiliasi Bank Memakan Waktu Berhari-hari',
        desc: 'Setiap akhir bulan, tim keuangan pusing mencocokkan ratusan lembar mutasi rekening koran bank dengan bukti transfer donatur. Banyak donasi mengendap tanpa tahu nama muzakinya.',
        impact:
          'Keterlambatan penerbitan Bukti Setor Zakat resmi dan laporan keuangan tidak pernah up-to-date.',
      },
      {
        id: 'approval-lambat',
        number: '03',
        title: 'Alur Persetujuan Dana (PPD) Berbelit & Hilang Jejak',
        desc: 'Pengajuan proposal bantuan mustahik dan operasional program amil masih lewat kertas form fisik atau pesan WhatsApp yang mudah tenggelam dan sulit dilacak statusnya.',
        impact:
          'Penyaluran bantuan darurat tertunda, amil lapangan frustrasi, dan otorisasi rawan disalahgunakan.',
      },
      {
        id: 'penyaluran-lpj',
        number: '04',
        title: 'LPJ Lapangan Menumpuk & Penyaluran Sulit Diaudit',
        desc: 'Dana sudah dicairkan ke tim lapangan, namun pengumpulan kuitansi riil, foto serah terima mustahik, dan Laporan Pertanggungjawaban (LPJ) tertunda berbulan-bulan.',
        impact:
          'Metrik ACR (Allocation to Collection Ratio) BAZNAS tidak tercapai dan temuan audit syariah.',
      },
      {
        id: 'laporan-psak109',
        number: '05',
        title: 'Laporan Keuangan PSAK 109 Sangat Rumit Dibuat Manual',
        desc: 'Akuntansi ZISWAF memiliki aturan ketat pemisahan dana Zakat, Infaq/Sedekah, Wakaf, dan Amil. Membuat jurnal, neraca, dan laporan perubahan dana di spreadsheet sangat rentan salah rumus.',
        impact:
          'Opini audit wajar tanpa pengecualian (WTP) terancam dan risiko teguran regulator pengawas zakat.',
      },
      {
        id: 'rkat-boncos',
        number: '06',
        title: 'Anggaran Kegiatan (RKAT) Jebol Tanpa Sistem Kontrol',
        desc: 'Pimpinan tidak memiliki sistem peringatan dini (budget warning) ketika pengeluaran program atau divisi amil sudah melebihi pagu Rencana Kerja & Anggaran Tahunan yang disahkan.',
        impact:
          'Defisit operasional lembaga dan alokasi dana amil melebihi batas proporsional syariah (1/8 Asnaf).',
      },
      {
        id: 'sdm-spiritualitas',
        number: '07',
        title: 'Akuntabilitas Kerja & Pembinaan Ibadah Amil Minim',
        desc: 'Sulit memantau mobilitas amil di lapangan, presensi rawan titip absen, dan pembinaan spiritualitas amil (Mutabaah Yaumiyah) yang menjadi ruh lembaga dakwah terabaikan.',
        impact:
          'Penurunan produktivitas amil dan pudarnya kultur amanah dalam mengelola dana umat.',
      },
      {
        id: 'puncak-musim',
        number: '08',
        title: 'Kewalahan Luar Biasa Saat Ramadhan & Musim Qurban',
        desc: 'Lonjakan ribuan muzaki dan mudhohi qurban membuat sistem kasir manual macet total, salah cetak kwitansi, antrean pencatatan hewan qurban berantakan, dan mustahik komplain.',
        impact:
          'Kepanikan operasional tim amil dan menurunnya reputasi kredibilitas lembaga di mata publik.',
      },
    ],

    // Root Cause Analysis: Silo Apps vs Integrated ERP
    rootCause: {
      headline:
        'Akar Masalahnya Bukan Kinerja Amil, Melainkan Arsitektur Sistem yang Terfragmentasi',
      subheadline:
        'Selama ini lembaga menggunakan 4-6 software berbeda yang tidak bisa saling berbicara. Amil menghabiskan 60% waktu hanya untuk copy-paste data antar spreadsheet.',
      silo: [
        {
          title: 'Aplikasi Donasi Online',
          problem:
            'Hanya mencatat nominal masuk, tidak terhubung ke kasir offline maupun buku besar akuntansi.',
        },
        {
          title: 'Chat WhatsApp Pribadi',
          problem:
            'Tempat muzaki kirim bukti transfer dan amil minta approval permohonan dana. Tidak ada jejak audit.',
        },
        {
          title: 'Buku Kas & Excel Keuangan',
          problem:
            'Dibuat terpisah oleh bendahara, rawan selisih saldo dengan kas riil kasir dan rekening bank.',
        },
        {
          title: 'Formulir Kertas & Map Arsip',
          problem:
            'Tempat menampung proposal PPD dan LPJ fisik yang lambat diverifikasi dan mudah hilang.',
        },
      ],
      erpSolution: [
        {
          title: 'Satu Database Terpusat',
          desc: 'Setiap transaksi donasi, pengajuan PPD, hingga persetujuan pimpinan tersimpan dalam satu ekosistem real-time.',
        },
        {
          title: 'Otomatisasi Lintas Divisi',
          desc: 'Ketika kasir menginput donasi, jurnal akuntansi PSAK 109 langsung terbentuk otomatis tanpa input ulang.',
        },
        {
          title: 'Jejak Audit Digital Komprehensif',
          desc: 'Setiap klik persetujuan, revisi anggaran, dan pencairan kas terekam jelas siapa, kapan, dan nominalnya.',
        },
        {
          title: 'Kepatuhan Syariah Terkunci',
          desc: 'Sistem memvalidasi batas porsi hak amil, kelayakan 8 Asnaf, dan batas pagu RKAT secara otomatis.',
        },
      ],
    },

    // Comparison Table: Manual/Excel vs Ordinary LAZ Software vs Software ZISWAF ERP
    comparison: {
      headline: 'Mengapa Lembaga Anda Butuh ERP, Bukan Sekadar Aplikasi Donasi Biasa?',
      columns: [
        'Fitur & Kapabilitas Tata Kelola',
        'Cara Manual / Excel',
        'Aplikasi Donasi / SI LAZ Biasa',
        'Software ZISWAF ERP',
      ],
      rows: [
        {
          feature: 'Arsitektur Sistem & Database',
          manual: 'File Excel tersebar di PC masing-masing amil',
          ordinary: 'Hanya database donasi online / web campaign',
          erp: 'Enterprise Database Terpusat (Multi-Cabang & Multi-Role)',
        },
        {
          feature: 'Rekonsiliasi Bank & Ayat Silang',
          manual: 'Cek mutasi satu per satu manual (3-7 hari)',
          ordinary: 'Terbatas hanya gateway donasi web tertentu',
          erp: 'Ayat Silang Otomatis mutasi bank, QRIS, kasir, & cash opname',
        },
        {
          feature: 'Standar Akuntansi Syariah (PSAK 109)',
          manual: 'Buat jurnal manual, rentan salah asnaf dana',
          ordinary: 'Tidak ada modul akuntansi atau harus ekspor ke software lain',
          erp: 'Buku Kas & Jurnal Otomatis PSAK 109 (Dana Zakat, Infaq, Wakaf, Amil)',
        },
        {
          feature: 'Pengendalian Anggaran (Budget Control)',
          manual: 'Rekap nota terlambat saat uang sudah habis',
          ordinary: 'Tidak memiliki modul kontrol anggaran',
          erp: 'Validasi Real-time terhadap Pagu RKAT 1, 2, 3 (Pencegahan Overbudget)',
        },
        {
          feature: 'Penyaluran 8 Asnaf & ACR BAZNAS',
          manual: 'Kalkulasi manual dengan spreadsheet',
          ordinary: 'Hanya form penerima bantuan sederhana',
          erp: 'Analitik 8 Asnaf, 5 Pilar Program, Peta Sebaran, & Metrik ACR Otomatis',
        },
        {
          feature: 'Approval Center & PPD Terpadu',
          manual: 'Tanda tangan nota kertas / chat WhatsApp',
          ordinary: 'Tidak ada alur berjenjang pimpinan',
          erp: 'Persetujuan Otorisasi Berjenjang (Manajer ➔ Kadiv ➔ Direktur)',
        },
        {
          feature: 'Pengelolaan SDM & Mutabaah Amil',
          manual: 'Buku absen manual tanda tangan',
          ordinary: 'Tidak ada modul SDM sama sekali',
          erp: 'Presensi Kamera Deteksi Wajah + GPS, KPI, & Evaluasi Ibadah Yaumiyah',
        },
        {
          feature: 'Modul Musim Qurban & CRM WA',
          manual: 'Catatan terpisah, broadcast WA manual',
          ordinary: 'Biasanya modul tambahan berbayar mahal',
          erp: 'Termasuk dalam Ekosistem ERP (Manajemen Shohibul & Distribusi Daging)',
        },
      ],
    },

    // 6 Deep-Dive Pain to Solution Showcases
    deepDives: [
      {
        id: 'fundraising-muzaki',
        badge: 'Solusi Penghimpunan & Donatur',
        painTitle: 'Tantangan: Muzaki Hanya Donasi Sekali Lalu Menghilang',
        painText:
          'Lembaga kesulitan merawat muzaki karena data kontak tercecer di banyak buku dan admin. Tidak ada pengingat jadwal donasi rutin dan amil lupa melakukan follow-up.',
        solutionTitle: 'Solusi ERP: Database Muzaki 360°, Schedule Donasi & Telemarketing Terpadu',
        solutionText:
          'Software ZISWAF ERP menyediakan master data muzaki perorangan dan korporasi lengkap dengan riwayat donasi seumur hidup (Lifetime Giving). Dilengkapi fitur Schedule Donasi berkala otomatis, pipeline kontak amil telemarketing, sistem kode referral relawan, serta integrasi WhatsApp Campaign untuk menyapa muzaki tepat waktu.',
        benefits: [
          'Segmentasi donatur aktif, pasif, dan loyal secara instan',
          'Pengingat komitmen donasi rutin otomatis via WhatsApp',
          'Monitoring pipeline telemarketing amil fundraising harian',
          'Pelacakan donasi mitra referral & perhitungan insentif transparan',
        ],
        icon: 'users',
      },
      {
        id: 'kasir-verifikasi',
        badge: 'Solusi Kasir & Verifikasi Keuangan',
        painTitle: 'Tantangan: Selisih Saldo Kasir, Kasbon Macet, & Mutasi Bank Mengendap',
        painText:
          'Setoran donasi di gerai rawan selisih, donasi via transfer manual terlambat diverifikasi hingga berhari-hari, dan rekonsiliasi rekening koran menjadi momok tim keuangan setiap akhir bulan.',
        solutionTitle:
          'Solusi ERP: Kasir ZIS Terpadu, Cash Opname Lapangan & Modul Ayat Silang Bank',
        solutionText:
          'Setiap loket kasir dan gerai lapangan dapat menerbitkan tanda terima resmi seketika dengan nomor seri unik. Fitur Cash Opname mengunci fisik kas harian, sedangkan modul Ayat Silang secara cerdas mencocokkan mutasi bank rekening koran dengan pencatatan donasi internal lembaga dalam hitungan detik.',
        benefits: [
          'Cetak kuitansi dan bukti setor zakat resmi langsung di loket kasir',
          'Modul Ayat Silang otomatis rekonsiliasi rekening koran bank',
          'Cash Opname harian mencegah fraud di kantor cabang dan konter mal',
          'Verifikasi ZIS multi-kanal: QRIS, Transfer Bank, Payment Gateway, dan Tunai',
        ],
        icon: 'wallet',
      },
      {
        id: 'approval-ppd',
        badge: 'Solusi Otorisasi & Akuntabilitas',
        painTitle: 'Tantangan: Pengajuan Dana Tertahan, SPPD Molor, & Amil Bingung Status Approval',
        painText:
          'Permohonan Penyaluran Dana (PPD) yang diajukan amil sering terselip di meja pimpinan atau hilang di grup chat, membuat mustahik yang sakit atau kelaparan terlambat menerima haknya.',
        solutionTitle:
          'Solusi ERP: Pusat Penyetujuan Terpadu (Approval Center) Berjenjang Multi-Level',
        solutionText:
          'Sistem otorisasi berjenjang yang aman dan terdokumentasi rapi. Manajer Program, Kepala Divisi, hingga Direktur Eksekutif dapat meninjau, menyetujui, atau meminta revisi pengajuan PPD, SPPD perjalanan dinas, cuti, dan lembur secara real-time dari laptop maupun ponsel pintar.',
        benefits: [
          'Alur otorisasi berjenjang transparan: Diajukan ➔ Ditinjau ➔ Disetujui ➔ Dicairkan',
          'Pusat notifikasi tugas (Action Center) amil di dashboard utama',
          'Pencairan dana kasir hanya bisa dieksekusi jika PPD sudah disetujui pimpinan',
          'Jejak audit digital lengkap dengan catatan revisi dan riwayat otorisasi',
        ],
        icon: 'shield-check',
      },
      {
        id: 'penyaluran-asnaf',
        badge: 'Solusi Penyaluran & Kepatuhan Syariah',
        painTitle: 'Tantangan: Sulit Membuktikan Alokasi 8 Asnaf & LPJ Fisik Menumpuk',
        painText:
          'Lembaga sering ditegur pengawas syariah karena tidak bisa menampilkan grafik alokasi 8 Asnaf secara presisi. Kuitansi dan dokumentasi penyaluran lapangan amil tercecer berantakan.',
        solutionTitle:
          'Solusi ERP: Master 5 Pilar Program, Database Mustahik & Verifikasi LPJ Ketat',
        solutionText:
          'Klasifikasi program berbasis 5 Pilar (Pendidikan, Kesehatan, Kemanusiaan, Ekonomi, Dakwah/Advokasi) dan 8 Asnaf Syariah. Database mustahik individu dan binaan terekam rapi. Amil lapangan wajib mengunggah foto dokumentasi, kuitansi riil, dan koordinat sebelum status LPJ ditandai selesai.',
        benefits: [
          'Visualisasi distribusi 8 Asnaf (Fakir, Miskin, Amil, Muallaf, Riqab, Gharimin, Fisabilillah, Ibnu Sabil)',
          'Monitoring otomatis metrik ACR (Allocation to Collection Ratio) standar BAZNAS',
          'Database profil mustahik terintegrasi untuk mencegah penerima ganda',
          'Verifikasi LPJ ketat sebelum amil program dapat mengajukan PPD berikutnya',
        ],
        icon: 'chart-pie',
      },
      {
        id: 'akuntansi-psak109',
        badge: 'Solusi Akuntansi & Budget Control',
        painTitle:
          'Tantangan: Tutup Buku Akhir Tahun Mencekam Karena Format Spreadsheet Berantakan',
        painText:
          'Banyak software akuntansi umum (seperti software dagang biasa) tidak paham aturan PSAK 109. Tidak ada pemisahan dana terikat dan tidak terikat, membuat audit syariah berakhir dengan banyak temuan negatif.',
        solutionTitle:
          'Solusi ERP: Jurnal Otomatis PSAK 109, Budget Control & Lembar Kerja RKAT 1-2-3',
        solutionText:
          'Dirancang dari dasar mengikuti standar PSAK 109 nirlaba syariah. Begitu kasir mencatat donasi zakat atau kasir mencairkan dana fakir miskin, jurnal debit/kredit syariah otomatis terisi di buku kas. Fitur Budget Control mengunci permohonan dana jika pagu RKAT divisi sudah habis.',
        benefits: [
          'Buku kas dan jurnal umum sesuai PSAK 109 tanpa perlu input manual berulang',
          'Sistem kontrol anggaran (Budget Control) mencegah pembengkakan RKAT',
          'Penyusunan dan penyesuaian RKAT 1, 2, dan 3 terstruktur per unit kerja',
          'Klaim reimbursement operasional amil lapangan dengan validasi bukti kuitansi',
        ],
        icon: 'calculator',
      },
      {
        id: 'sdm-tata-kelola',
        badge: 'Solusi SDM & Budaya Kerja Amil',
        painTitle: 'Tantangan: Sulit Membina Integritas & Memantau Kinerja Harian Amil',
        painText:
          'Amil adalah profesi mulia yang mengemban amanah umat. Namun tanpa sistem, evaluasi kerja amil hanya berdasarkan asumsi, presensi tidak valid, dan amalan ibadah amil tidak terbina.',
        solutionTitle:
          'Solusi ERP: Presensi Deteksi Wajah + GPS, KPI, Mutabaah Yaumiyah & Lapor Gratifikasi',
        solutionText:
          'Sistem tata kelola amil terdepan yang menggabungkan profesionalisme dan spiritualitas. Presensi online menggunakan deteksi wajah berbasis kamera dan validasi radius GPS. Fitur Mutabaah Yaumiyah memonitor amalan yaumiyah amil (sholat berjamaah, tilawah, shaum sunnah), serta kanal Laporan Gratifikasi menjaga integritas bebas benturan kepentingan.',
        benefits: [
          'Presensi anti-curang dengan deteksi wajah berbasis kamera & validasi GPS',
          'Laporan kerja harian (LKH) dan penilaian skor Key Performance Indicators (KPI)',
          'Mutabaah Yaumiyah menjaga ruh spiritualitas dan keteladanan amil zakat',
          'Kanal pelaporan gratifikasi independen untuk kepatuhan tata kelola lembaga',
        ],
        icon: 'user-check',
      },
    ],

    // Complete 11 Modules (Standard Package, Customizable)
    modules: [
      {
        id: 'module-1',
        number: '01',
        title: 'Executive Dashboard & Analytics',
        icon: 'dashboard',
        summary:
          'Pusat komando pimpinan dan pemantauan real-time seluruh pilar operasional lembaga.',
        features: [
          {
            name: 'Action Center & Antrean Amil (Home)',
            desc: 'Pusat notifikasi tugas harian amil mencakup antrean persetujuan PPD/Cuti/Lembur/SPPD, antrean pencairan kasir, dan antrean verifikasi LPJ.',
          },
          {
            name: 'Dashboard Fundraising',
            desc: 'Analitik tren penghimpunan donasi, perolehan per kanal pembayaran, pertumbuhan muzaki, serta monitoring ketercapaian target RKAT secara real-time.',
          },
          {
            name: 'Dashboard Penyaluran & 8 Asnaf',
            desc: 'Visualisasi alokasi 8 Asnaf Zakat Syariah (Fakir, Miskin, Amil, Muallaf, Riqab, Gharimin, Fisabilillah, Ibnu Sabil) dengan grafik interaktif.',
          },
          {
            name: 'Pemantauan 5 Pilar Program',
            desc: 'Monitoring alokasi pilar Pendidikan, Kesehatan, Kemanusiaan, Ekonomi, serta Dakwah & Advokasi.',
          },
          {
            name: 'Metrik Kepatuhan ACR BAZNAS',
            desc: 'Perhitungan Allocation to Collection Ratio (ACR) otomatis sesuai standar regulasi BAZNAS.',
          },
          {
            name: 'Peta Sebaran & Pipeline PPD',
            desc: 'Peta interaktif persebaran lokasi mustahik dan pipeline status permohonan dana lapangan.',
          },
          {
            name: 'Dashboard RKAT & Evaluasi Anggaran',
            desc: 'Evaluasi serapan anggaran per divisi dan unit kerja secara real-time.',
          },
          {
            name: 'Dashboard SDM & Website',
            desc: 'Metrik performa amil (KPI) dan analitik transaksi donasi online portal lembaga.',
          },
        ],
      },
      {
        id: 'module-2',
        number: '02',
        title: 'Penghimpunan (Fundraising) & Donatur',
        icon: 'fundraising',
        summary:
          'Manajemen komprehensif hubungan muzaki (CRM), penerimaan donasi, dan tim pemasaran.',
        features: [
          {
            name: 'Database Muzaki & Donatur',
            desc: 'Master data profil donatur, riwayat donasi komprehensif, segmentasi perorangan/lembaga, template impor Excel, dan ekspor laporan.',
          },
          {
            name: 'Transaksi Donasi ZISWAF',
            desc: 'Pencatatan manual dan klaim setoran donasi ZISWAF dengan filter komprehensif.',
          },
          {
            name: 'Kasir ZIS Offline',
            desc: 'Loket penerimaan transaksi donasi offline di kantor cabang, penerbitan tanda terima setoran resmi, dan cetak kuitansi.',
          },
          {
            name: 'Cash Opname Lapangan',
            desc: 'Pencatatan dan rekonsiliasi fisik uang kas donasi langsung di lapangan atau konter gerai.',
          },
          {
            name: 'Upload Donasi Massal',
            desc: 'Impor data setoran massal via lembar kerja dengan validasi integritas otomatis.',
          },
          {
            name: 'Schedule Donasi (Recurring)',
            desc: 'Manajemen komitmen donasi rutin dan berkala donatur dengan pengingat otomatis.',
          },
          {
            name: 'Telemarketing & Leads Amil',
            desc: 'Manajemen prospek muzaki, database leads, jadwal kontak amil, serta monitoring tindak lanjut (follow-up).',
          },
          {
            name: 'Program Referral & Afiliasi Relawan',
            desc: 'Pelacakan donasi melalui kode referral relawan/amil, perhitungan insentif, dan verifikasi penarikan saldo komisi.',
          },
        ],
      },
      {
        id: 'module-3',
        number: '03',
        title: 'Kasir, Keuangan & Verifikasi ZIS',
        icon: 'cashier',
        summary:
          'Otomatisasi pencocokan dana masuk, rekonsiliasi mutasi perbankan, dan eksekusi pencairan kas.',
        features: [
          {
            name: 'Verifikasi ZIS Multi-Kanal',
            desc: 'Validasi pembayaran donasi masuk dari mutasi perbankan, transfer manual, QRIS, dan payment gateway.',
          },
          {
            name: 'Modul Ayat Silang Rekonsiliasi',
            desc: 'Modul rekonsiliasi otomatis antara rekening koran bank dengan buku kas internal lembaga.',
          },
          {
            name: 'Pencairan Dana (Disbursement)',
            desc: 'Eksekusi pembayaran dan transfer permohonan dana yang telah memperoleh otorisasi sah dari pimpinan.',
          },
        ],
      },
      {
        id: 'module-4',
        number: '04',
        title: 'Penyaluran Dana & Monitoring LPJ',
        icon: 'distribution',
        summary:
          'Standardisasi program karitatif dan pemberdayaan mustahik hingga verifikasi bukti fisik.',
        features: [
          {
            name: 'Master Program Penyaluran',
            desc: 'Katalog program pemberdayaan dan karitatif berbasis 5 Pilar Program resmi.',
          },
          {
            name: 'Pengajuan Program & PPD',
            desc: 'Formulir pengajuan Permohonan Penyaluran Dana (PPD) terstandar dari amil atau mitra pelaksana.',
          },
          {
            name: 'Monitoring Pipeline PPD',
            desc: 'Pelacakan status permohonan dana (Diajukan ➔ Ditinjau ➔ Disetujui ➔ Dicairkan Kasir ➔ Selesai LPJ).',
          },
          {
            name: 'Database Penerima Manfaat (Mustahik)',
            desc: 'Master data mustahik individu maupun lembaga binaan lengkap dengan NIK dan riwayat bantuan.',
          },
          {
            name: 'Verifikasi LPJ Ketat',
            desc: 'Pemeriksaan Laporan Pertanggungjawaban program lapangan, kelengkapan berkas fisik, kuitansi riil, serta foto dokumentasi.',
          },
        ],
      },
      {
        id: 'module-5',
        number: '05',
        title: 'Pusat Penyetujuan Terpadu (Approval Center)',
        icon: 'approval',
        summary: 'Alur otorisasi berjenjang bertingkat tanpa dokumen kertas yang lambat.',
        features: [
          {
            name: 'Alur Otorisasi Multi-Level Berjenjang',
            desc: 'Persetujuan fleksibel terstruktur (Manajer, Kepala Divisi, Direktur Eksekutif) sesuai matriks kewenangan nominal.',
          },
          {
            name: 'Persetujuan Permohonan Penyaluran Dana (PPD)',
            desc: 'Otorisasi PPD program lapangan dan kebutuhan operasional kantor.',
          },
          {
            name: 'Persetujuan Surat Perintah Perjalanan Dinas (SPPD)',
            desc: 'Verifikasi kelayakan dinas luar kota dan estimasi biaya amil.',
          },
          {
            name: 'Persetujuan Cuti & Lembur Amil',
            desc: 'Otorisasi pengajuan cuti dan jam kerja lembur pegawai yang terhubung ke absensi.',
          },
        ],
      },
      {
        id: 'module-6',
        number: '06',
        title: 'Akuntansi, RKAT & Budget Control',
        icon: 'accounting',
        summary:
          'Pembukuan syariah nirlaba PSAK 109 terintegrasi dengan pengendalian anggaran operasional.',
        features: [
          {
            name: 'Buku Kas & Jurnal Otomatis PSAK 109',
            desc: 'Sistem pembukuan akuntansi nirlaba berbasis syariah PSAK 109 (pemisahan dana Zakat, Infaq, Sedekah, Wakaf, Amil).',
          },
          {
            name: 'Budget Control Real-Time',
            desc: 'Pengendalian serapan anggaran kegiatan agar tidak melampaui pagu RKAT yang telah disahkan.',
          },
          {
            name: 'Lembar Kerja RKAT 1, 2, dan 3',
            desc: 'Penyusunan dan penyesuaian Rencana Kerja dan Anggaran Tahunan terpadu per divisi.',
          },
          {
            name: 'Reimbursement Amil Lapangan',
            desc: 'Pengajuan klaim pengeluaran amil atas operasional lapangan beserta bukti kuitansi digital.',
          },
          {
            name: 'Manajemen Aset Tetap Lembaga',
            desc: 'Registrasi, inventarisasi, dan perhitungan penyusutan aset tetap inventaris kantor.',
          },
        ],
      },
      {
        id: 'module-7',
        number: '07',
        title: 'SDM, Amil & Tata Kelola Kepegawaian',
        icon: 'hr',
        summary:
          'Pondasi pengelolaan SDM amil yang profesional, akuntabel, dan terjaga spiritualitasnya.',
        features: [
          {
            name: 'Data Amil & Kepegawaian (RBAC)',
            desc: 'Master data amil, struktur jabatan, penempatan kantor cabang, dan Role-Based Access Control.',
          },
          {
            name: 'Presensi Kamera Deteksi Wajah & GPS',
            desc: 'Pencatatan kehadiran masuk & pulang dengan validasi koordinat GPS dan deteksi wajah berbasis kamera.',
          },
          {
            name: 'Laporan Kerja Harian (LKH)',
            desc: 'Catatan akuntabilitas harian amil terhadap capaian tugas pokok dan fungsi.',
          },
          {
            name: 'Evaluasi Ibadah (Mutabaah Yaumiyah)',
            desc: 'Monitoring amalan ibadah harian amil (sholat berjamaah, tilawah, shaum sunnah, infaq personal) untuk membina spiritualitas kerja.',
          },
          {
            name: 'Surat Perjalanan Dinas (SPPD)',
            desc: 'Penerbitan surat tugas, estimasi anggaran perjalanan, dan laporan pertanggungjawaban dinas.',
          },
          {
            name: 'Key Performance Indicators (KPI)',
            desc: 'Evaluasi berkala dan sistem penilaian skor KPI kinerja amil terstandar.',
          },
        ],
      },
      {
        id: 'module-8',
        number: '08',
        title: 'Modul Qurban Modern',
        icon: 'qurban',
        summary:
          'Manajemen operasional musiman ibadah qurban dari pemesanan hingga distribusi daging.',
        features: [
          {
            name: 'Registrasi Shohibul Qurban (Mudhohi)',
            desc: 'Pencatatan data mudhohi dan penetapan hewan qurban (kambing, domba, sapi utuh, atau kolektif 1/7 sapi).',
          },
          {
            name: 'Manajemen RPH & Juru Sembelih',
            desc: 'Pengaturan lokasi titik potong, jadwal penyembelihan, dan alokasi juru sembelih tersertifikasi.',
          },
          {
            name: 'Distribusi Daging Qurban & Mustahik',
            desc: 'Pemantauan kuota paket daging qurban ke kantong-kantong mustahik di pelosok daerah.',
          },
        ],
      },
      {
        id: 'module-9',
        number: '09',
        title: 'WhatsApp Campaign Manager',
        icon: 'whatsapp',
        summary:
          'Saluran komunikasi interaktif otomatis langsung ke layar ponsel para muzaki dan mustahik.',
        features: [
          {
            name: 'Broadcast Pesan Interaktif Otomatis',
            desc: 'Notifikasi konfirmasi donasi berhasil, pengingat donasi rutin berkala, dan kabar penyaluran program.',
          },
          {
            name: 'Pengelompokan Kontak & Segmentasi',
            desc: 'Kategorisasi kontak muzaki berdasarkan preferensi program donasi dan status keaktifan.',
          },
          {
            name: 'Penjadwalan Pesan & Pemantauan Status',
            desc: 'Penjadwalan pesan otomatis dan monitoring status pengiriman pesan (Terkirim, Terbaca).',
          },
        ],
      },
      {
        id: 'module-10',
        number: '10',
        title: 'Website CMS & Portal Donasi',
        icon: 'cms',
        summary:
          'Pintu gerbang publikasi program donasi online dan keterbukaan informasi publik yayasan.',
        features: [
          {
            name: 'Manajemen Campaign Online',
            desc: 'Publikasi program donasi online, pengaturan target nominal, batas waktu, dan paket donasi kelipatan.',
          },
          {
            name: 'Kabar & Pembaharuan Campaign',
            desc: 'Publikasi laporan penyaluran dan update berkala program langsung kepada para donatur terkait.',
          },
          {
            name: 'Berita & Artikel Edukasi ZIS',
            desc: 'CMS literasi zakat dan liputan kegiatan dengan editor visual (WYSIWYG) yang intuitif.',
          },
          {
            name: 'Transaksi Donasi Online Publik',
            desc: 'Penerimaan donasi dari portal web publik yang terhubung otomatis ke payment gateway.',
          },
          {
            name: 'Profil Lembaga & Nisab Terkini',
            desc: 'Informasi legalitas SK formal yayasan, rekening resmi, kurs harga emas nisab zakat, dan saluran pengaduan.',
          },
        ],
      },
      {
        id: 'module-11',
        number: '11',
        title: 'Integritas & Kepatuhan Tata Kelola',
        icon: 'compliance',
        summary:
          'Perisai tata kelola bebas benturan kepentingan untuk menjaga marwah amanah lembaga dakwah.',
        features: [
          {
            name: 'Kanal Laporan Gratifikasi',
            desc: 'Kanal pelaporan integritas amil atas pemberian hadiah pihak ketiga guna mencegah benturan kepentingan (conflict of interest).',
          },
          {
            name: 'Audit Trail Komprehensif',
            desc: 'Rekaman log aktivitas sistem yang tidak dapat diubah (immutable logs) untuk keperluan audit eksternal.',
          },
        ],
      },
    ],

    // Benefits by Stakeholder Role
    roles: [
      {
        id: 'direktur',
        role: 'Pimpinan & Direktur Eksekutif',
        summary:
          'Visibilitas data 360° secara real-time untuk mengambil keputusan strategis tanpa menunggu rekap bulanan.',
        benefits: [
          'Akses Executive Dashboard: saldo kas real-time, capaian RKAT, dan tren muzaki',
          'Approval PPD dan pencairan dana strategis langsung dari smartphone kapan saja',
          'Ketenangan kepatuhan hukum syariah: siap diaudit BAZNAS dan KAP Kemenag',
          'Laporan integritas gratifikasi dan evaluasi KPI amil transparan',
        ],
      },
      {
        id: 'keuangan',
        role: 'Manajer Keuangan & Akuntan',
        summary:
          'Otomatisasi jurnal PSAK 109, rekonsiliasi bank cepat, dan budget control anti-boncos.',
        benefits: [
          'Rekonsiliasi rekening koran bank otomatis dengan modul Ayat Silang',
          'Buku kas dan jurnal nirlaba PSAK 109 terbentuk otomatis dari setiap transaksi',
          'Sistem Budget Control otomatis menolak pengajuan dana yang melampaui pagu RKAT',
          'Pencatatan kasir, reimbursement, dan penyusutan aset tetap rapi dan terukur',
        ],
      },
      {
        id: 'fundraising',
        role: 'Manajer Fundraising & CRM',
        summary:
          'Merawat muzaki eksisting dan menjaring donatur baru dengan otomatisasi omnichannel.',
        benefits: [
          'Master CRM muzaki lengkap dengan profil donasi, tanggal ulang tahun, dan preferensi',
          'Fitur Schedule Donasi menjaga komitmen donasi rutin tanpa amil lupa menyapa',
          'Pipeline telemarketing amil terpantau: jumlah calls, follow-up, dan konversi closing',
          'Broadcast kabar penyaluran program via WhatsApp Campaign mendongkrak retensi',
        ],
      },
      {
        id: 'program',
        role: 'Manajer Program & Lapangan',
        summary:
          'Pengajuan proposal PPD standar, penyaluran tepat sasaran, dan verifikasi LPJ mudah.',
        benefits: [
          'Formulir PPD terstandar: tidak ada lagi proposal tercecer atau salah hitung anggaran',
          'Database mustahik terintegrasi mencegah penyaluran bantuan ganda yang tidak adil',
          'Pelacakan status persetujuan PPD transparan hingga pencairan kasir',
          'Unggah kuitansi riil dan foto penyaluran langsung dari lapangan via ponsel',
        ],
      },
      {
        id: 'sdm',
        role: 'Manajer SDM & Amil',
        summary:
          'Membangun amil yang profesional, berkinerja tinggi, dan kuat nilai spiritualitasnya.',
        benefits: [
          'Presensi anti-fraud menggunakan deteksi wajah kamera dan radius koordinat GPS',
          'Laporan Kerja Harian (LKH) dan penilaian skor Key Performance Indicators (KPI)',
          'Fitur Mutabaah Yaumiyah membina amalan sholat berjamaah, tilawah, dan shaum amil',
          'Otorisasi cuti, jam lembur, dan SPPD terpadu tanpa formulir kertas',
        ],
      },
    ],

    // Testimonials (Set to empty to avoid unverified/fictional reviews)
    testimonials: [],

    // Customization & Implementation Methodology
    customizationHeadline:
      '11 Modul Paket Standar Lengkap, Siap Disesuaikan dengan Tata Kelola Lembaga Anda',
    customizationSubheadline:
      'Setiap lembaga zakat memiliki struktur organisasi, batas otorisasi PPD, dan template rekening yang khas. Kami tidak sekadar memberikan software, melainkan mendampingi adaptasi sistem hingga operasional Anda 100% mandiri.',
    implementationSteps: [
      {
        step: '01',
        title: 'Konsultasi & Penyelarasan Alur Kerja',
        desc: 'Bedah SOP internal lembaga: struktur divisi, matriks batas nominal approval pimpinan, daftar rekening bank, serta bagan akun (COA) akuntansi syariah.',
      },
      {
        step: '02',
        title: 'Konfigurasi Sistem & Penyesuaian Modul',
        desc: 'Setup database dedicated, penyesuaian formulir PPD, konfigurasi batas pagu RKAT, aktivasi kanal payment gateway, dan WhatsApp sender.',
      },
      {
        step: '03',
        title: 'Migrasi Data Historis & Saldo Awal',
        desc: 'Pembersihan dan impor aman data muzaki, master mustahik, neraca saldo awal PSAK 109, serta inventaris aset dari spreadsheet lama Anda.',
      },
      {
        step: '04',
        title: 'Pelatihan Intensif Amil per Divisi',
        desc: 'Workshop praktis untuk kasir, tim fundraising, amil program lapangan, akuntan, HR, hingga pelatihan khusus pimpinan untuk dashboard & approval.',
      },
      {
        step: '05',
        title: 'Go-Live & Pendampingan Penuh',
        desc: 'Pendampingan langsung saat peluncuran operasional perdana, penutupan buku bulan pertama, dan dukungan teknis cepat (SLA responsif).',
      },
    ],

    // FAQ Section addressing buyer objections
    faqs: [
      {
        q: 'Apakah Software ZISWAF ERP sudah sepenuhnya mematuhi standar PSAK 109 dan BAZNAS?',
        a: 'Ya, sistem ini dirancang spesifik dengan arsitektur akuntansi nirlaba syariah berbasis PSAK 109. Alokasi dana Zakat (8 Asnaf), Infaq/Sedekah (terikat & tidak terikat), Wakaf, dan Dana Amil terpisah secara otomatis. Sistem juga memiliki kalkulasi metrik ACR (Allocation to Collection Ratio) sesuai petunjuk teknis BAZNAS.',
      },
      {
        q: 'Bagaimana jika saat ini data muzaki dan transaksi kami masih tersimpan di lembar kerja Excel?',
        a: 'Tim Kriya menyediakan layanan migrasi data menyeluruh. Kami menyediakan template impor terstandar, melakukan pembersihan data (data cleansing), validasi duplikasi data NIK muzaki/mustahik, dan memindahkan saldo buku besar akuntansi ke dalam database ERP secara aman tanpa mengganggu operasional.',
      },
      {
        q: 'Apakah 11 modul yang ada harus digunakan semuanya sekaligus?',
        a: 'Ke-11 modul merupakan paket standar yang sudah saling terhubung, namun implementasi dapat dilakukan secara bertahap (phased implementation). Misalnya, Anda dapat memulai dari modul Fundraising, Kasir, dan Akuntansi PSAK 109 pada bulan pertama, lalu mengaktifkan Approval Center, SDM, dan Modul Qurban di fase berikutnya.',
      },
      {
        q: 'Apakah alur persetujuan PPD dan matriks kewenangan pimpinan bisa disesuaikan?',
        a: 'Tentu. Matriks kewenangan persetujuan bersifat fleksibel. Anda dapat mengatur berjenjang berdasarkan batas nominal (misal: pengajuan di bawah 5 juta cukup Manajer Program, di atas 25 juta memerlukan otorisasi Direktur Eksekutif).',
      },
      {
        q: 'Bagaimana keamanan data donatur dan transaksi lembaga kami terjamin?',
        a: 'Keamanan data adalah prioritas utama. Sistem menerapkan Role-Based Access Control (RBAC) ketat sehingga amil kasir tidak dapat melihat laporan gaji, amil fundraising hanya mengakses muzaki binaannya, dan setiap aktivitas tercatat dalam audit log yang tidak dapat dihapus. Server dilindungi enkripsi data dan backup berkala.',
      },
      {
        q: 'Bagaimana cara meminta sesi presentasi atau demo langsung Software ZISWAF ERP?',
        a: 'Anda dapat langsung mengklik tombol "Minta Demo via WhatsApp" di halaman ini atau menghubungi tim kami di 0851-1742-8800. Tim konsultan kami akan mengatur jadwal sesi demo interaktif secara online (Zoom/Google Meet) atau presentasi offline untuk jajaran pimpinan lembaga Anda.',
      },
    ],
  },
  {
    id: 2,
    slug: 'perluasan-jaringan-internet',
    name: 'Jasa Instalasi dan Perluasan Jaringan Wi-Fi',
    tagline: 'Perencanaan dan Instalasi Jaringan Wi-Fi serta LAN Sesuai Kebutuhan Bangunan',
    category: 'Network Infrastructure & Wireless Roaming',
    schemaType: 'Service',
    badge: 'Infrastruktur & Jaringan',
    navDesc:
      'Layanan perencanaan dan instalasi jaringan Wi-Fi serta LAN untuk rumah, kantor, ruko, dan gudang.',
    title: 'Jasa Instalasi Jaringan Wi-Fi & Perluasan Internet',
    description:
      'Layanan instalasi dan perluasan jaringan Wi-Fi serta LAN untuk rumah, kantor, ruko, dan gudang. Konsultasikan kebutuhan jaringan Anda dengan Kriya.',
    ogimage: '/images/og-solusi-jaringan.png',
    images: {
      hero: '/images/solusi/network-hero.jpg',
    },
    hero: {
      eyebrow: 'Infrastruktur Jaringan & Konektivitas Terpadu',
      headline: 'Jasa Instalasi dan Perluasan Jaringan Wi-Fi untuk Rumah dan Kantor',
      subheadline:
        'Atasi area Wi-Fi yang sulit terjangkau, jaringan kantor yang tidak stabil, dan instalasi kabel yang tidak terstruktur. Kriya membantu merencanakan dan memasang jaringan Wi-Fi serta LAN sesuai kebutuhan bangunan Anda.',
      primaryCta: 'Konsultasikan Kebutuhan Jaringan',
      secondaryCta: 'Lihat Proses Instalasi',
      secondaryCtaHref: '#proses-instalasi',
    },
    waMessage:
      'Halo Kriya, saya ingin berkonsultasi mengenai perluasan jaringan Wi-Fi. Jenis bangunan saya [rumah/kantor/gudang], dengan kendala jaringan [jelaskan kendala].',
    demoButtonLabel: 'Konsultasi Jaringan',
    modulesLabel: 'Lingkup 7 Layanan Rekayasa Jaringan:',

    hardwareEcosystem: [
      {
        name: 'Ubiquiti UniFi',
        badge: 'Enterprise Wi-Fi & Switching',
        specialization:
          'Solusi ekosistem terpadu untuk jangkauan sinyal terencana, fast roaming 802.11k/v/r, dan kontrol visual terpusat.',
        recommendedFor: 'Kantor UKM, ruko bertingkat, coworking space, dan hunian bertingkat.',
        devices: [
          'UniFi U6-Pro / U6+ Wi-Fi 6 AP',
          'UniFi Switch PoE+ Gigabit',
          'UniFi Cloud Gateway',
        ],
        features: [
          'Fast BSS transition untuk transisi sinyal antar lantai yang lebih mulus',
          'Desain ceiling mount minimalis yang menyatu dengan estetika plafon',
          'Dashboard UniFi Controller terpusat untuk monitoring perangkat dan klien',
          'Dukungan multi-SSID dan isolasi VLAN tamu berbasis perangkat keras',
        ],
      },
      {
        name: 'MikroTik RouterOS',
        badge: 'Core Gateway & Bandwidth Shaper',
        specialization:
          'Router performa tinggi untuk pembagian bandwidth teratur, proteksi firewall, dan kestabilan routing.',
        recommendedFor:
          'Perkantoran dengan banyak divisi, sistem kasir POS, gudang logistik, dan manajemen multi-WAN.',
        devices: [
          'MikroTik hEX Series (Gigabit)',
          'MikroTik RB5009 / CCR',
          'MikroTik Cloud Router Switch',
        ],
        features: [
          'Dynamic Queue Tree dan PCQ untuk pembagian bandwidth adil antarpengguna',
          'Prioritas jalur kritis (QoS) untuk sistem kasir POS, database kantor, dan VoIP',
          'Multi-WAN failover untuk mengalihkan koneksi ke ISP cadangan saat ISP utama mengalami gangguan',
          'Firewall filtering untuk pengamanan akses jaringan internal',
        ],
      },
      {
        name: 'Ruijie Reyee',
        badge: 'Cloud-Managed Mesh & Smart Gateway',
        specialization:
          'Perangkat jaringan kelas komersial dengan teknologi Self-Organizing Network (SON) dan kemudahan manajemen berbasis cloud.',
        recommendedFor: 'Ruko bisnis, kafe, penginapan, dan hunian residensial bertingkat.',
        devices: [
          'Reyee RG-RAP Wi-Fi 6 AP',
          'Reyee Smart Managed PoE Switch',
          'Reyee Cloud Gateway Router',
        ],
        features: [
          'Self-Organizing Network untuk konfigurasi dan optimasi sinyal terkoordinasi',
          'Pemantauan status jaringan melalui aplikasi mobile Reyee Cloud',
          'Pemisahan jaringan tamu dengan captive portal selamat datang yang rapi',
          'Performa Wi-Fi 6 stabil dengan efisiensi biaya investasi yang terukur',
        ],
      },
      {
        name: 'Aruba Instant On (HPE)',
        badge: 'Business-Grade Security & Reliability',
        specialization:
          'Infrastruktur nirkabel dari Hewlett Packard Enterprise (HPE) yang dirancang untuk keandalan dan keamanan data tingkat bisnis.',
        recommendedFor:
          'Kantor cabang, klinik kesehatan, studio kreatif, dan bisnis dengan beban koneksi tinggi.',
        devices: [
          'Aruba Instant On AP22 / AP25 Wi-Fi 6',
          'Aruba 1930 Series Smart Switch',
          'PoE Injector Gigabit',
        ],
        features: [
          'Standar enkripsi WPA3 dan fitur keamanan terpasang tanpa biaya lisensi tambahan',
          'Optimasi alokasi untuk voice dan video conference guna meminimalkan jitter',
          'Manajemen ganda melalui aplikasi mobile atau web browser lokal',
          'Kualitas perangkat keras standar bisnis dengan durabilitas jangka panjang',
        ],
      },
    ],

    trustBannerHeading: 'Tipe Bangunan yang Telah Kami Layani',
    clientInstitutions: [
      { name: 'Rumah Tinggal Bertingkat', type: 'Residential 2-4 Lantai' },
      { name: 'Perkantoran UKM & Coworking', type: 'Office Network' },
      { name: 'Ruko Bertingkat & Bisnis Ritel', type: 'Commercial Shophouse' },
      { name: 'Gudang Logistik & Workshop', type: 'Industrial Area' },
      { name: 'Gedung Multilantai & Ruang Kompleks', type: 'Multi-Floor Facility' },
    ],

    stats: [
      { value: '1 Gbps', label: 'Standar Backbone Kabel Cat6' },
      { value: 'Wi-Fi 6', label: 'Dukungan Protokol 802.11ax' },
      { value: '< 50 ms', label: 'Handover Roaming Cepat 802.11k/v/r' },
      { value: 'VLAN', label: 'Isolasi Keamanan Jaringan Tamu' },
    ],

    painPointsTitle: 'Masalah Jaringan yang Kami Tangani',
    painPointsSubtitle:
      'Sebagian besar kendala koneksi berasal dari distribusi jaringan internal bangunan yang belum terencana secara teknis.',
    painPoints: [
      {
        id: 'dead-zone-lantai',
        number: '01',
        title: 'Sinyal Drop di Lantai Atas & Ruang Tertutup',
        desc: 'Router bawaan provider internet diletakkan di sudut lantai bawah. Sinyal radio frekuensi teredam oleh dak beton bertulang dan dinding tebal, meninggalkan area sulit sinyal di lantai atas.',
        impact: 'Koneksi terhambat saat bekerja dari kamar atau ruang rapat lantai atas.',
      },
      {
        id: 'repeater-choke',
        number: '02',
        title: 'Wi-Fi Repeater Colokan Menurunkan Throughput & Menambah Latensi',
        desc: 'Repeater nirkabel beroperasi secara half-duplex dengan membagi kapasitas kanal udara, sehingga throughput dapat menurun drastis dan latensi meningkat tergantung kondisi radio dan jarak.',
        impact:
          'Koneksi terasa lambat dan buffering berkepanjangan pada area yang mengandalkan repeater nirkabel.',
      },
      {
        id: 'roaming-putus',
        number: '03',
        title: 'Koneksi Terputus Saat Berpindah Lantai atau Ruangan',
        desc: 'Tanpa protokol fast roaming (802.11k/v/r), gawai cenderung bertahan pada access point yang jauh (sticky client) meskipun sinyal sudah melemah.',
        impact:
          'Panggilan video meeting atau komunikasi online terganggu saat pengguna berpindah posisi.',
      },
      {
        id: 'bandwidth-rebutan',
        number: '04',
        title: 'Bandwidth Rebutan Tanpa Manajemen Lalu Lintas (QoS)',
        desc: 'Ketika salah satu perangkat melakukan aktivitas unduhan berat, aktivitas transaksi kasir dan aplikasi kantor dapat terhambat karena ketiadaan manajemen alokasi bandwidth.',
        impact: 'Operasional bisnis penting terganggu saat utilisasi trafik jaringan meningkat.',
      },
      {
        id: 'kabel-semrawut',
        number: '05',
        title: 'Kabel Melintang Semrawut & Merusak Estetika Dinding',
        desc: 'Instalasi kabel yang dipasang tanpa pipa conduit, ducting, atau patch panel terlihat kumuh di dinding serta rentan risiko fisik.',
        impact:
          'Mengurangi kerapian interior dan berisiko mengalami kerusakan kabel fisik yang sulit dilacak.',
      },
      {
        id: 'risiko-keamanan-tamu',
        number: '06',
        title: 'Tamu Mengakses Satu Subnet dengan Data Internal',
        desc: 'Memberikan kata sandi Wi-Fi kantor kepada pengunjung tanpa pemisahan jaringan membuka risiko keamanan karena perangkat luar berada di segmen yang sama dengan perangkat kerja.',
        impact: 'Membuka celah keamanan data internal perusahaan dan perangkat operasional.',
      },
    ],

    segments: [
      {
        id: 'rumah-bertingkat',
        badge: 'Residensial & Hunian',
        title: 'Rumah dan Rumah Bertingkat',
        targetSpaces: ['Rumah 2-4 Lantai', 'Klaster Hunian', 'Villa & Paviliun', 'Home Office'],
        description:
          'Solusi jangkauan Wi-Fi merata di seluruh lantai tanpa kabel melintang semrawut di dinding, menjaga kenyamanan keluarga dan estetika interior rumah.',
        problem:
          'Sinyal Wi-Fi teredam oleh dak semen cor bertulang antar lantai, repeater colokan menambah latensi, dan kabel semrawut merusak estetika interior.',
        solution:
          'Instalasi jalur tulang punggung kabel Cat6 tersembunyi di plafon atau pipa conduit, dipadukan dengan access point Wi-Fi 6 berfitur fast roaming 802.11k/v/r.',
        outcome:
          'Koneksi stabil di semua ruangan dan lantai tanpa perlu mengganti nama Wi-Fi secara manual, panggilan video tidak terputus saat bergerak antar ruangan.',
        componentsNeeded: [
          'Access Point Ceiling Wi-Fi 6',
          'Switch PoE Gigabit',
          'Kabel UTP Cat6 Pure Copper',
          'Pipa Conduit & Pelindung Dekoratif',
        ],
        waMessage:
          'Halo Kriya, saya ingin berkonsultasi mengenai instalasi jaringan Wi-Fi untuk rumah bertingkat.',
      },
      {
        id: 'kantor-ruang-kerja',
        badge: 'Perkantoran & Co-working',
        title: 'Kantor dan Ruang Kerja',
        targetSpaces: [
          'Kantor 1-3 Lantai',
          'Co-working Space',
          'Studio Kreatif',
          'Ruang Kerja Bersama',
        ],
        description:
          'Infrastruktur jaringan bisnis yang mengutamakan kelancaran komunikasi video, kapasitas koneksi multi-perangkat bersamaan, dan keamanan data internal perusahaan.',
        problem:
          'Koneksi internet melambat drastis saat jam sibuk, meeting video Zoom terputus-putus, dan router bawaan mudah hang saat banyak gawai terhubung.',
        solution:
          'Penerapan gateway router dengan manajemen alokasi bandwidth dinamis (QoS), access point enterprise berkapasitas konkurensi tinggi, serta isolasi VLAN untuk tamu.',
        outcome:
          'Aplikasi bisnis penting dan panggilan video online tetap lancar, perangkat staf terhubung stabil tanpa saling memonopoli bandwidth.',
        componentsNeeded: [
          'Core Gateway Router (MikroTik/UniFi)',
          'Managed PoE Switch Gigabit',
          'Access Point Enterprise High-Concurrency',
          'Patch Panel & Mini Rack Cabinet',
        ],
        waMessage:
          'Halo Kriya, saya ingin berkonsultasi mengenai perbaikan dan instalasi jaringan Wi-Fi untuk kantor.',
      },
      {
        id: 'ruko-bisnis-ritel',
        badge: 'Ruko & Ritel Komersial',
        title: 'Ruko dan Bisnis Ritel',
        targetSpaces: ['Ruko Bisnis', 'Kafe & Resto', 'Toko Ritel', 'Klinik & Salon'],
        description:
          'Pemisahan jalur koneksi yang aman antara sistem operasional pembayaran kasir dengan fasilitas Wi-Fi publik untuk pengunjung.',
        problem:
          'Transaksi kasir POS dan mesin pembayaran QRIS/EDC tersendat ketika pengunjung kafe atau ruko aktif streaming menggunakan jaringan yang sama.',
        solution:
          'Segmentasi subnet menggunakan Virtual LAN (VLAN 802.1Q) dan pembatasan bandwidth terpisah pada SSID tamu agar tidak mengganggu transaksi kasir.',
        outcome:
          'Sistem kasir dan operasional kas selalu prioritas dan responsif, sementara pelanggan tetap mendapatkan akses Wi-Fi yang stabil.',
        componentsNeeded: [
          'Smart Managed Gateway',
          'Managed Switch VLAN-enabled',
          'Access Point Dual-Band',
          'Konfigurasi Captive Portal Tamu [Opsional]',
        ],
        waMessage:
          'Halo Kriya, saya ingin berkonsultasi mengenai solusi jaringan Wi-Fi untuk ruko atau tempat usaha ritel.',
      },
      {
        id: 'gudang-operasional',
        badge: 'Gudang & Logistik',
        title: 'Gudang dan Bangunan Operasional',
        targetSpaces: [
          'Gudang Logistik',
          'Workshop / Bengkel',
          'Area Loading Dock',
          'Pusat Distribusi',
        ],
        description:
          'Distribusi jaringan tahan banting untuk area industri luas berpartisi rak besi tinggi guna mendukung perangkat pemindai barcode dan kamera CCTV pengawas.',
        problem:
          'Jangkauan sinyal terhalang oleh rak besi tinggi dan barang bertumpuk, menimbulkan blind spot bagi scanner barcode nirkabel dan tablet inventori.',
        solution:
          'Penempatan access point high-power dengan antena terarah strategis, jalur kabel data berpelindung conduit kokoh tahan benturan, dan koneksi CCTV NVR.',
        outcome:
          'Pemindaian barcode barang berjalan tanpa delay di seluruh lorong gudang dan koneksi kamera pemantau keamanan perimeter tetap andal.',
        componentsNeeded: [
          'High-Power Industrial Access Point',
          'Pipa Conduit PVC / Logam Heavy Duty',
          'PoE Switch Gigabit High-Wattage',
          'Jalur Integrasi CCTV NVR',
        ],
        waMessage:
          'Halo Kriya, saya ingin berkonsultasi mengenai instalasi jaringan internet untuk area gudang atau workshop.',
      },
      {
        id: 'gedung-banyak-lantai',
        badge: 'Gedung & Multi-Ruang',
        title: 'Gedung dengan Banyak Ruangan atau Lantai',
        targetSpaces: [
          'Gedung Bertingkat',
          'Penginapan / Guest House',
          'Asrama',
          'Pusat Pelatihan',
        ],
        description:
          'Arsitektur jaringan skala gedung dengan perencanaan kanal frekuensi terstruktur untuk mencegah interferensi antar lantai dan manajemen terpusat.',
        problem:
          'Sinyal saling bertubrukan (interferensi co-channel) antar access point yang diletakkan sembarangan, serta kesulitan memantau perangkat yang tersebar di banyak lantai.',
        solution:
          'Desain topologi bertingkat (Core & Distribution switch), perencanaan kanal 2.4/5 GHz non-overlapping, dan monitoring controller berbasis cloud.',
        outcome:
          'Sinyal Wi-Fi terdistribusi secara rapi dan stabil, serta pengelola gedung memiliki visibilitas penuh terhadap status jaringan melalui satu dasbor terpusat.',
        componentsNeeded: [
          'Core Router & Distribution Switch',
          'Multiple Enterprise Access Point',
          'Cloud / Hardware Network Controller',
          'Server Rack Cabinet & Structured Cabling',
        ],
        waMessage:
          'Halo Kriya, saya ingin berkonsultasi mengenai perancangan jaringan Wi-Fi untuk gedung banyak lantai atau ruangan.',
      },
    ],

    rootCause: {
      headline: 'Mengapa Router Bawaan Provider & Wi-Fi Extender Colokan Sering Bermasalah?',
      subheadline:
        'Router bawaan provider umumnya dirancang untuk satu area terbuka terbatas. Saat harus melayani struktur bertingkat, sekat beton tebal, atau banyak perangkat, kualitas koneksi cenderung menurun.',
      siloTitle: 'Metode Sementara: Router Provider + Extender Nirkabel',
      siloSubtitle: 'Penyebab latensi bertambah, sinyal tidak stabil, dan penurunan throughput',
      siloWarning:
        'Akibatnya: Produktivitas kerja terganggu, transaksi kasir terhambat, dan pengguna sering mengalami disconnect.',
      solutionTitle: 'Solusi Kriya: Backbone Kabel Terstruktur & Access Point Terkelola',
      solutionSubtitle: 'Jalur kabel gigabit fisik dengan manajemen perangkat terpusat',
      solutionResult:
        'Hasil: Penetrasi sinyal lebih stabil di setiap lantai, alokasi bandwidth terjaga, dan transisi roaming lebih mulus.',
      silo: [
        {
          title: 'Router Provider di Lokasi Terisolasi',
          problem:
            'Titik masuk fiber optik biasanya di sudut lantai bawah. Frekuensi 5 GHz mengalami redaman kuat saat berhadapan dengan lantai cor semen.',
        },
        {
          title: 'Repeater Nirkabel Membagi Kanal Udara',
          problem:
            'Extender nirkabel menerima dan memancarkan ulang sinyal pada frekuensi yang sama, berpotensi menurunkan throughput riil secara signifikan.',
        },
        {
          title: 'Banyak Nama SSID Berbeda',
          problem:
            'Muncul nama Wi-Fi terpisah di setiap lantai sehingga gawai harus berpindah jaringan secara manual saat bergerak.',
        },
        {
          title: 'Ketiadaan Manajemen Alokasi Bandwidth',
          problem:
            'Satu perangkat yang melakukan unduhan besar dapat menyerap sebagian besar kuota koneksi seluruh gedung.',
        },
      ],
      erpSolution: [
        {
          title: 'Backbone Kabel Cat6 Tembaga Murni',
          desc: 'Setiap access point terhubung kabel fisik langsung ke switch gigabit guna menjaga pasokan data antarlantai.',
        },
        {
          title: 'Satu Nama SSID untuk Seluruh Area (Unified SSID)',
          desc: 'Pengguna cukup terhubung ke satu nama Wi-Fi di seluruh area, dan sistem mengarahkan gawai ke AP terdekat.',
        },
        {
          title: 'Dukungan Fast Roaming (802.11k/v/r)',
          desc: 'Perpindahan sinyal antar AP terjadi lebih cepat sehingga komunikasi online dan video meeting tetap berjalan lancar.',
        },
        {
          title: 'Quality of Service (QoS) & Traffic Shaper',
          desc: 'Router gateway membagi alokasi kecepatan secara teratur dan memprioritaskan aplikasi esensial bisnis.',
        },
      ],
    },

    comparison: {
      headline: 'Perbandingan Pendekatan Distribusi Jaringan di Dalam Bangunan',
      subheadline:
        'Pahami perbedaan teknis mendasar sebelum memutuskan investasi perangkat jaringan Anda.',
      badge: 'Solusi Kriya',
      columns: [
        'Parameter Kualitas Jaringan',
        'Router Bawaan Provider (ISP)',
        'Wi-Fi Repeater / Extender Colokan',
        'Rekayasa Jaringan Kriya',
      ],
      rows: [
        {
          feature: 'Jalur Penghubung Antar Lantai (Backhaul)',
          manual: 'Tidak ada (hanya menjangkau area sekitar router)',
          ordinary: 'Nirkabel (throughput berpotensi turun drastis)',
          erp: 'Kabel UTP Cat6 Gigabit Dedicated (Throughput Maksimal Kabel)',
        },
        {
          feature: 'Protokol Roaming Saat Berpindah Lantai',
          manual: 'Tidak ada roaming (harus reconnect manual)',
          ordinary: 'Sticky client (gawai tertahan di sinyal lemah)',
          erp: 'Fast Roaming 802.11k/v/r (Transisi Sinyal Antar AP Cepat & Mulus)',
        },
        {
          feature: 'Kapasitas Koneksi Bersamaan (Concurrency)',
          manual: '10 hingga 15 gawai (mudah panas dan freeze)',
          ordinary: '5 hingga 10 gawai (rentan terputus sendiri)',
          erp: '40 hingga 100+ gawai per Access Point Enterprise (Sesuai Tipe)',
        },
        {
          feature: 'Manajemen Bandwidth & Prioritas (QoS)',
          manual: 'Tidak ada pembagian kuota prioritas',
          ordinary: 'Tidak ada fitur pengaturan traffic',
          erp: 'Queue Tree & Dynamic QoS (Prioritas Kasir, Server & Video Call)',
        },
        {
          feature: 'Keamanan Jaringan Tamu (Guest Network)',
          manual: 'Satu kata sandi untuk semua pengguna',
          ordinary: 'Tidak dapat memisahkan subnet jaringan',
          erp: 'VLAN 802.1Q Terisolasi (Tamu terpisah dari data kantor)',
        },
        {
          feature: 'Estetika & Kerapian Jalur Kabel',
          manual: 'Kabel instalasi seadanya melintang',
          ordinary: 'Menghabiskan colokan stopkontak dinding',
          erp: 'Conduit Pipa, Pelindung Kabel & Patch Panel Rapi',
        },
        {
          feature: 'Sentralisasi Manajemen & Monitoring',
          manual: 'Akses terpisah ke dashboard router individual',
          ordinary: 'Tidak ada sistem monitoring terpusat',
          erp: 'Controller Terpusat Berbasis Web / Cloud (UniFi / Ruijie / MikroTik)',
        },
      ],
    },

    deepDivesHeading: 'Pilar Rekayasa Teknis untuk Menjamin Kestabilan Koneksi',
    deepDivesSubheading:
      'Setiap instalasi dikerjakan dengan standar teknis jaringan yang teruji dan terukur.',
    deepDives: [
      {
        id: 'backbone-cat6',
        badge: 'Backbone Fisik',
        domain: 'Kabel Cat6 Tembaga Murni & Switch Gigabit PoE',
        painText:
          'Mengandalkan transmisi nirkabel murni antar lantai membuat sinyal sangat rentan terhadap redaman partisi cor beton.',
        solutionText:
          'Kami membangun jalur tulang punggung (backbone) menggunakan kabel Cat6 tembaga murni dengan pelindung terstandar. Access point ditenagai melalui kabel yang sama (Power over Ethernet / PoE) sehingga tidak memerlukan stopkontak listrik tambahan di plafon.',
        benefits: [
          'Transmisi data hingga 1.000 Mbps sesuai kapasitas gigabit fisik',
          'Power over Ethernet (PoE) praktis tanpa stopkontak di plafon',
          'Terminasi rapi menggunakan modular patch panel standar rak server',
          'Labeling kabel terstruktur untuk kemudahan pelacakan berkala',
        ],
        icon: 'cable',
      },
      {
        id: 'seamless-roaming',
        badge: 'Wireless Roaming',
        domain: 'Fast BSS Transition 802.11k/v/r',
        painText:
          'Koneksi putus setiap kali pengguna bergerak dari ruang rapat ke meja kerja atau dari lantai bawah ke lantai atas.',
        solutionText:
          'Dengan controller terpusat dan protokol 802.11k/v/r aktif, access point saling bertukar informasi sinyal gawai secara proaktif. Gawai akan diarahkan ke access point terdekat dengan sinyal yang lebih baik untuk meminimalkan jeda putus saat berpindah ruangan.',
        benefits: [
          'Handover koneksi antar AP berlangsung cepat untuk meminimalkan jeda panggilan video',
          'Satu nama Wi-Fi (SSID) tunggal untuk seluruh lantai dan area luar',
          'Band steering untuk mengarahkan gawai yang mampu ke kanal frekuensi 5 GHz',
          'Mengurangi kendala sticky client yang menahan koneksi pada sinyal lemah',
        ],
        icon: 'wifi',
      },
      {
        id: 'qos-bandwidth',
        badge: 'Manajemen Lalu Lintas',
        domain: 'Alokasi Bandwidth Dinamis & QoS',
        painText:
          'Operasional kasir atau telekonferensi penting melambat saat pengguna lain melakukan pengunduhan berkas besar.',
        solutionText:
          'Penerapan aturan Quality of Service (QoS) pada router gateway cerdas. Alokasi kuota dibagi secara dinamis: aplikasi prioritas seperti kasir POS, database kantor, dan panggilan video mendapatkan alokasi kuota utama yang terjaga.',
        benefits: [
          'Alokasi kuota prioritas bandwidth untuk kasir POS dan sistem operasional',
          'Pembagian kapasitas secara teratur antarpengguna tanpa monopoli trafik',
          'Prioritas paket VoIP dan video call untuk meminimalkan latensi dan stuttering',
          'Batasan kecepatan khusus pada Wi-Fi tamu agar tidak membebani koneksi utama',
        ],
        icon: 'activity',
      },
      {
        id: 'vlan-security',
        badge: 'Keamanan Jaringan',
        domain: 'Segmentasi Subnet & Isolasi Tamu (VLAN)',
        painText:
          'Tamu dan pengunjung berada dalam satu segmen jaringan yang sama dengan server lokal, CCTV, dan komputer kantor.',
        solutionText:
          'Pemisahan subnet menggunakan Virtual LAN (VLAN 802.1Q). Jaringan staf internal, kamera CCTV, dan Wi-Fi pengunjung dipisahkan ke jalur berbeda yang tidak saling tembus untuk menjaga privasi data perusahaan.',
        benefits: [
          'Isolasi perangkat tamu: hanya dapat mengakses internet luar',
          'Aset database kantor, NAS, dan printer terlindungi dari akses gawai asing',
          'Subnet terpisah untuk kamera CCTV guna menjaga stabilitas rekaman video',
          'Captive portal selamat datang yang rapi untuk login pengunjung [Opsional]',
        ],
        icon: 'shield-check',
      },
      {
        id: 'cable-management',
        badge: 'Kerapian Fisik',
        domain: 'Jalur Kabel Tersembunyi & Estetika Interior',
        painText:
          'Kabel yang dipasang sembarangan merusak kerapian interior ruangan dan rentan rusak karena terinjak atau tersangkut.',
        solutionText:
          'Teknisi Kriya merencanakan penarikan kabel melalui jalur tersembunyi. Kabel dialirkan melalui pipa conduit PVC di balik plafon, pelindung kabel dekoratif sewarna dinding, atau lubang shaft khusus dengan penutup yang rapi.',
        benefits: [
          'Jalur kabel terlindung pipa conduit aman dari risiko gigitan tikus dan benturan',
          'Finishing rapi menjaga estetika interior bangunan rumah atau kantor',
          'Penyusunan kabel di dalam mini rack atau kabinet dinding teratur',
          'Dokumentasi skema penarikan kabel diserahkan kepada pelanggan',
        ],
        icon: 'layers',
      },
      {
        id: 'hardware-controller',
        badge: 'Ekosistem Teruji',
        domain: 'Perangkat Kelas Enterprise (UniFi / MikroTik / Ruijie)',
        painText:
          'Perangkat kelas rumahan murah cepat panas dan sering mengalami gangguan saat digunakan untuk beban kerja yang tinggi.',
        solutionText:
          'Kami mengimplementasikan perangkat enterprise standar industri seperti Ubiquiti UniFi, MikroTik RouterOS, dan Ruijie Reyee. Perangkat memiliki sistem pendingin pasif yang baik, komponen stabil, dan dashboard monitoring terpusat.',
        benefits: [
          'Dirancang untuk operasional beban kerja kontinu dengan sistem disipasi panas yang stabil',
          'Pemantauan status access point dan jumlah klien terhubung via aplikasi mobile atau browser',
          'Pembaruan firmware keamanan berkala dari produsen resmi',
          'Perangkat bergaransi resmi distributor dengan ketersediaan suku cadang',
        ],
        icon: 'cpu',
      },
    ],

    rolesHeading: 'Solusi Berdasarkan Kebutuhan Ruang & Aktivitas Pengguna',
    rolesSubheadline:
      'Konfigurasi jaringan yang disesuaikan dengan aktivitas penghuni dan kebutuhan beban kerja masing-masing area.',
    roles: [
      {
        id: 'sme-owner',
        role: 'Pemilik Bisnis & Pengelola Kantor UKM',
        summary:
          'Operasional lancar tanpa komplain internet mati dari staf, sistem kasir selalu online, dan data perusahaan aman terlindungi.',
        benefits: [
          'Transaksi kasir POS dan payment QRIS tetap cepat di jam sibuk',
          'Meeting online tim dengan klien berjalan lancar tanpa video freeze',
          'Jaringan data rahasia kantor terpisah aman dari akses tamu luar',
          'Satu sentralisasi kontrol untuk mengelola akses internet kantor',
        ],
      },
      {
        id: 'warehouse-manager',
        role: 'Pengelola Gudang, Workshop & Ruko',
        summary:
          'Sinyal kuat menembus area gudang luas dan dinding bata tebal, mendukung scanner barcode dan koordinasi logistik.',
        benefits: [
          'Barcode scanner nirkabel dan tablet logistik tetap terhubung stabil',
          'Jangkauan sinyal merata dari area loading dock hingga kantor lantai 2',
          'Kabel data terlindung conduit kokoh tahan debu dan benturan fisik',
          'Konektivitas kamera CCTV keamanan perimeter gudang lebih andal dan stabil',
        ],
      },
      {
        id: 'home-owner',
        role: 'Pemilik Rumah Tinggal Bertingkat & Keluarga',
        summary:
          'Internet stabil di kamar lantai atas, transisi roaming cepat, dan dinding rumah tetap rapi tanpa kabel semrawut.',
        benefits: [
          'Sinyal Wi-Fi stabil di kamar tidur lantai atas tanpa perlu mengganti nama Wi-Fi',
          'Streaming hiburan keluarga dan komunikasi kerja online berjalan lancar',
          'Instalasi kabel rapi di plafon tanpa merusak keindahan arsitektur interior',
          'Fitur parental control untuk membatasi akses internet anak saat jam belajar',
        ],
      },
    ],

    modulesBadge: 'Lingkup Layanan Terstruktur',
    modulesTitle: 'Lingkup Pekerjaan Rekayasa Jaringan',
    modulesSubtitle:
      'Layanan teknis terencana dari survei lokasi, penarikan kabel, konfigurasi perangkat, hingga verifikasi pengujian.',
    modules: [
      {
        id: 'module-1',
        number: '01',
        title: 'Survei Lokasi & Pemetaan Kebutuhan Jaringan',
        icon: 'radar',
        summary:
          'Inspeksi struktur fisik bangunan, identifikasi ketebalan dinding, serta pengukuran redaman sinyal radio frekuensi di setiap lantai.',
        features: [
          {
            name: 'Pemeriksaan Denah Bangunan',
            desc: 'Analisis material partisi (bata, drywall, beton bertulang) untuk menentukan titik penempatan Access Point yang optimal.',
          },
          {
            name: 'Simulasi Heatmap RF',
            desc: 'Simulasi estimasi sebaran sinyal 2.4 GHz dan 5 GHz untuk meminimalkan area sulit sinyal (blank spot).',
          },
          {
            name: 'Pemeriksaan Jalur Pipa & Plafon',
            desc: 'Identifikasi jalur shaft, ruang plafon, dan pipa conduit eksisting guna merencanakan jalur kabel data yang paling efisien.',
          },
        ],
      },
      {
        id: 'module-2',
        number: '02',
        title: 'Perencanaan Posisi Access Point & Jalur Kabel',
        icon: 'layers',
        summary:
          'Penyusunan denah penempatan access point, skema topologi jaringan kabel, dan penentuan kapasitas perangkat yang sesuai.',
        features: [
          {
            name: 'Penentuan Titik Access Point',
            desc: 'Memilih posisi mounting strategis di plafon untuk mengoptimalkan sebaran gelombang radio nirkabel.',
          },
          {
            name: 'Rancangan Jalur Kabel Tersembunyi',
            desc: 'Merencanakan jalur kabel melalui plafon atau conduit agar tidak merusak estetika interior bangunan.',
          },
          {
            name: 'Perencanaan Kapasitas Beban',
            desc: 'Menghitung estimasi jumlah perangkat bersamaan untuk menentukan spesifikasi switch dan access point.',
          },
        ],
      },
      {
        id: 'module-3',
        number: '03',
        title: 'Instalasi Kabel LAN (Cat6) & Terminasi Rapi',
        icon: 'cable',
        summary:
          'Penarikan kabel UTP Cat6 standar gigabit tembaga murni dengan pelindung pipa conduit serta terminasi modular jack.',
        features: [
          {
            name: 'Kabel UTP Cat6 Pure Copper',
            desc: 'Menggunakan kabel tembaga murni berkualitas standar gigabit yang tahan korosi dan memiliki konduktivitas tinggi.',
          },
          {
            name: 'Pelindung Pipa Conduit & Ducting',
            desc: 'Setiap penarikan kabel fisik dilindungi pipa conduit PVC atau ducting dekoratif yang rapi.',
          },
          {
            name: 'Terminasi Modular & Pelabelan',
            desc: 'Terminasi standar T568B pada patch panel dan faceplate modular dengan pelabelan nomor port terstruktur.',
          },
        ],
      },
      {
        id: 'module-4',
        number: '04',
        title: 'Pemasangan & Konfigurasi Access Point Wi-Fi 6',
        icon: 'wifi',
        summary:
          'Pemasangan access point dual-band di plafon atau dinding dengan suplai daya Power over Ethernet (PoE).',
        features: [
          {
            name: 'Pemasangan Ceiling Mount Rapi',
            desc: 'Bracket plafon kokoh dengan kabel tersembunyi rapi di balik partisi tanpa terlihat menjuntai.',
          },
          {
            name: 'Power over Ethernet (PoE)',
            desc: 'Penyaluran daya listrik dan data melalui satu kabel LAN tanpa memerlukan stopkontak terpisah di plafon.',
          },
          {
            name: 'Konfigurasi Kanal Frekuensi Non-Overlapping',
            desc: 'Pengaturan kanal 2.4 GHz dan 5 GHz yang terpisah untuk meminimalkan interferensi gelombang antar AP.',
          },
        ],
      },
      {
        id: 'module-5',
        number: '05',
        title: 'Konfigurasi Switch, VLAN, & QoS Bandwidth [Sesuai Kebutuhan]',
        icon: 'router',
        summary:
          'Pengaturan router gateway dan switch untuk pembagian bandwidth yang teratur serta pemisahan jaringan tamu.',
        features: [
          {
            name: 'Alokasi Bandwidth Dinamis (QoS)',
            desc: 'Membagi kuota kecepatan secara teratur dan memprioritaskan aplikasi esensial operasional bisnis.',
          },
          {
            name: 'Segmentasi Subnet & VLAN Tamu [Opsional]',
            desc: 'Pemisahan lalu lintas data internal kantor dari Wi-Fi pengunjung untuk menjaga keamanan perangkat lokal.',
          },
          {
            name: 'Multi-WAN Failover [Opsional]',
            desc: 'Konfigurasi 2 jalur provider ISP dengan pengalihan otomatis saat salah satu provider mengalami gangguan.',
          },
        ],
      },
      {
        id: 'module-6',
        number: '06',
        title: 'Pengujian Konektivitas, Throughput, & Cakupan',
        icon: 'activity',
        summary:
          'Verifikasi menyeluruh kecepatan data, kestabilan ping, dan transisi roaming sinyal di setiap ruangan.',
        features: [
          {
            name: 'Pengujian Throughput Lokal (iPerf3)',
            desc: 'Verifikasi kecepatan transmisi data lokal antar titik jaringan untuk memastikan kapasitas kabel gigabit terpenuhi.',
          },
          {
            name: 'Pengujian Handover Roaming',
            desc: 'Pengujian transisi sinyal gawai saat berpindah antar lantai saat panggilan suara atau video berlangsung.',
          },
          {
            name: 'Verifikasi Redaman Sinyal (RSSI)',
            desc: 'Pengukuran kekuatan sinyal radio di sudut-sudut ruangan prioritas untuk memastikan stabilitas koneksi.',
          },
        ],
      },
      {
        id: 'module-7',
        number: '07',
        title: 'Dokumentasi Hasil Pekerjaan (Topologi & Serah Terima)',
        icon: 'check-circle',
        summary:
          'Penyerahan skema topologi jaringan fisik, daftar alokasi IP perangkat, dan kredensial akses administratif.',
        features: [
          {
            name: 'Skema Topologi Jaringan (As-Built Drawing)',
            desc: 'Diagram alur kabel, titik access point, dan posisi switch untuk kemudahan pemeliharaan berkala.',
          },
          {
            name: 'Daftar Alokasi IP & Port Map',
            desc: 'Dokumentasi alamat IP perangkat jaringan dan pemetaan nomor port patch panel.',
          },
          {
            name: 'Serah Terima Kredensial Administrator',
            desc: 'Penyerahan hak akses penuh dashboard controller jaringan kepada pelanggan secara transparan.',
          },
        ],
      },
    ],

    customizationHeadline: 'Tahapan Implementasi Instalasi',
    customizationSubheadline:
      'Detail pelaksanaan dan jadwal disesuaikan dengan lingkup pekerjaan serta persetujuan pelanggan.',
    implementationSteps: [
      {
        step: 'Tahap 1',
        title: 'Konsultasi Kebutuhan',
        desc: 'Diskusi awal mengenai kendala jaringan yang dihadapi, denah tipe bangunan, perkiraan jumlah pengguna, serta target konektivitas yang diinginkan.',
      },
      {
        step: 'Tahap 2',
        title: 'Survei Lokasi & Identifikasi Masalah',
        desc: 'Pemeriksaan langsung kondisi fisik bangunan, ketebalan partisi dinding, jalur kabel yang memungkinkan, dan pengukuran redaman sinyal di area prioritas.',
      },
      {
        step: 'Tahap 3',
        title: 'Rekomendasi Desain & Penawaran',
        desc: 'Penyusunan rancangan topologi jaringan, titik penempatan access point, rincian material kabel atau perangkat, serta estimasi biaya yang transparan untuk disetujui pelanggan.',
      },
      {
        step: 'Tahap 4',
        title: 'Instalasi & Konfigurasi',
        desc: 'Penarikan kabel pelindung conduit secara rapi, terminasi modular patch panel, pemasangan access point, serta konfigurasi router, switch, VLAN, dan QoS.',
      },
      {
        step: 'Tahap 5',
        title: 'Pengujian, Serah Terima, & Dokumentasi',
        desc: 'Pengujian throughput dan roaming di seluruh area, penyerahan dokumentasi topologi serta kredensial admin jaringan kepada pelanggan.',
      },
    ],

    impactHeading: 'Pengujian dan Dokumentasi Hasil Pekerjaan',
    impactSubheading:
      'Verifikasi kualitas dan performa jaringan setelah implementasi selesai dikerjakan.',
    impactHighlights: [
      {
        topic: 'Cakupan & Penetrasi Terukur',
        impact: 'Penempatan access point disesuaikan struktur bangunan',
        desc: 'Melalui analisis denah dan pengukuran redaman sinyal, access point ditempatkan pada titik yang optimal untuk mengurangi sudut blank spot di setiap lantai.',
        metric: 'Audit RF Heatmap Terukur',
      },
      {
        topic: 'Stabilitas Roaming & Konektivitas',
        impact: 'Handover antar AP meminimalkan jeda putus',
        desc: 'Penerapan standar fast roaming 802.11k/v/r membantu gawai berpindah ke access point dengan sinyal lebih baik secara lebih halus saat pengguna berjalan antar ruangan.',
        metric: 'Fast Roaming 802.11k/v/r',
      },
      {
        topic: 'Alokasi Bandwidth & Prioritas Operasional',
        impact: 'Aplikasi bisnis penting terlindungi dari lonjakan trafik',
        desc: 'Penerapan manajemen QoS membagi kuota secara teratur agar transaksi kasir POS dan panggilan video online tetap responsif saat penggunaan internet bersamaan meningkat.',
        metric: 'QoS Prioritas Terkonfigurasi',
      },
    ],

    // Testimonials disabled pending verification from business owner (R-18 & R-36 compliance)
    // TODO: Konfirmasi data klien riil dan izin publikasi testimoni layanan jaringan dengan pemilik bisnis
    testimonials: [],

    faqHeading: 'Pertanyaan Umum Seputar Layanan Jaringan Wi-Fi & LAN',
    faqSubheading:
      'Pertanyaan umum seputar biaya, survei lokasi, penyediaan perangkat, dan jangkauan jaringan.',
    faqs: [
      {
        q: 'Berapa biaya instalasi atau perluasan jaringan Wi-Fi?',
        a: 'Biaya instalasi bergantung pada luas dan kondisi fisik bangunan, jumlah titik tarikan kabel LAN, perangkat keras yang diperlukan, jalur conduit kabel, serta lingkup konfigurasi yang diminta. Penawaran biaya diberikan secara transparan berdasarkan hasil konsultasi kebutuhan dan survei lokasi apabila diperlukan.',
      },
      {
        q: 'Apakah Kriya melayani instalasi Wi-Fi untuk kantor dan gudang?',
        a: 'Ya, Kriya melayani instalasi dan optimasi jaringan untuk rumah bertingkat, perkantoran UKM, ruko bisnis, gudang logistik, serta bangunan komersial lainnya di area layanan operasional kami.',
      },
      {
        q: 'Apakah perlu dilakukan survei lokasi?',
        a: 'Survei lokasi sangat dianjurkan untuk memeriksa denah bangunan, ketebalan dinding cor semen, jalur pipa kabel eksisting, serta potensi interferensi sinyal radio. Sebelum survei, tim kami memerlukan informasi awal seperti denah lokasi, kendala koneksi saat ini, dan perkiraan jumlah pengguna.',
      },
      {
        q: 'Apakah Kriya menyediakan perangkat jaringan?',
        a: 'Kriya dapat menyediakan perangkat keras jaringan (access point, switch PoE, router gateway, patch panel, dan kabel Cat6 tembaga murni) secara lengkap dalam satu paket penawaran, atau Anda dapat menggunakan perangkat yang telah Anda miliki jika spesifikasinya memadai.',
      },
      {
        q: 'Apakah jaringan dapat menjangkau seluruh ruangan?',
        a: 'Cakupan sinyal direncanakan berdasarkan denah bangunan, jumlah lantai, ketebalan sekat dinding, dan penempatan access point yang strategis. Hasil jangkauan aktual diverifikasi melalui pengujian redaman sinyal dan throughput setelah pemasangan.',
      },
      {
        q: 'Apakah jaringan yang dipasang dapat dikembangkan di kemudian hari?',
        a: 'Bisa. Arsitektur jaringan kabel terstruktur yang kami bangun dirancang modular, sehingga penambahan access point, titik kabel LAN baru, atau integrasi perangkat kamera CCTV dapat dilakukan dengan mudah tanpa membongkar topologi utama.',
      },
    ],

    ctaTitle: 'Konsultasikan Kebutuhan Jaringan Anda Bersama Kriya',
    ctaDesc:
      'Rencanakan jaringan Wi-Fi dan LAN yang stabil, terstruktur, dan sesuai kebutuhan bangunan Anda. Hubungi tim kami untuk konsultasi awal.',
    ctaButtonLabel: 'Konsultasikan Kebutuhan Jaringan via WhatsApp',
    ctaNote: 'Konsultasi awal via WhatsApp tanpa komitmen.',
  },
];
