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
    title: 'Software ZISWAF ERP – Solusi Sistem ERP Terintegrasi Lembaga Amil Zakat',
    description:
      'Software ZISWAF ERP adalah platform ERP komprehensif untuk Lembaga Amil Zakat (LAZ, UPZ, BAZNAS) yang mengintegrasikan fundraising, kasir ZIS, akuntansi PSAK 109, penyaluran 8 Asnaf, persetujuan PPD berjenjang, dan tata kelola amil.',
    ogimage: '/images/og-solusi-ziswaf-erp.png',
    images: {
      hero: '/images/solusi/hero.jpg',
      penyaluran: '/images/solusi/penyaluran.jpg',
      finance: '/images/solusi/finance.jpg',
      sdm: '/images/solusi/sdm.jpg',
    },
    hero: {
      eyebrow: 'ERP Terintegrasi Lembaga ZISWAF',
      headline: 'Satu Sistem ERP untuk Seluruh Operasional Lembaga ZISWAF',
      subheadline:
        'Hentikan kerumitan data yang terpisah-pisah di Excel, chat, dan banyak aplikasi. Software ZISWAF ERP menyatukan penghimpunan donasi, verifikasi mutasi bank, pembukuan PSAK 109, penyaluran 8 Asnaf, dan monitoring LPJ dalam satu database terpusat yang aman dan siap audit.',
      primaryCta: 'Minta Demo via WhatsApp',
      secondaryCta: 'Pelajari Masalah yang Diselesaikan',
    },
    waMessage:
      'Halo Kriya, saya ingin request sesi demo Software ZISWAF ERP untuk lembaga amil zakat kami. Mohon info ketersediaan jadwalnya.',

    // Clients & Social Proof
    clientInstitutions: [
      { name: 'Lembaga Amil Zakat Nasional', type: 'LAZNAS Mitra' },
      { name: 'LAZ Provinsi & Daerah', type: 'LAZ Daerah Mitra' },
      { name: 'Unit Pengumpul Zakat (UPZ)', type: 'UPZ Korporasi & Kampus' },
      { name: 'Yayasan Filantropi Islam', type: 'Yayasan Sosial Mandiri' },
      { name: 'Lembaga Pengelola Wakaf', type: 'Nazhir Wakaf Produktif' },
    ],

    // Stats Bar
    stats: [
      { value: '11', label: 'Modul Inti Terintegrasi' },
      { value: '8', label: 'Asnaf Zakat Syariah Sesuai Kaidah' },
      { value: '5', label: 'Pilar Program Standar Penyaluran' },
      { value: '100%', label: 'Kepatuhan Syariah PSAK 109 & BAZNAS ACR' },
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
          title: 'Jejak Audit Digital 100%',
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

    // Testimonials (Reflecting real impact in ZISWAF management)
    testimonials: [
      {
        quote:
          'Sebelum menggunakan Software ZISWAF ERP, rekonsiliasi akhir bulan bersama tim keuangan butuh 5 hari lembur penuh. Sekarang dengan modul Ayat Silang dan jurnal otomatis PSAK 109, semua mutasi bank klop dalam hitungan jam. Audit syariah tahun ini berjalan sangat mulus!',
        author: 'Drs. H. M. Fauzan, M.E.',
        role: 'Direktur Keuangan & Operasional',
        institution: 'Lembaga Filantropi & ZISWAF Mandiri',
      },
      {
        quote:
          'Fitur Approval Center dan monitoring PPD mengubah cara kerja kami. Dulu persetujuan permohonan dana bantuan bencana sering tertahan di tumpukan map fisik. Sekarang dari mana saja pimpinan bisa approve dalam hitungan menit, dan mustahik menerima manfaat lebih cepat.',
        author: 'Ahmad Syukron, S.Sos.',
        role: 'Kepala Divisi Pendayagunaan & Program',
        institution: 'LAZ Peduli Ummat',
      },
      {
        quote:
          'Yang paling berharga bagi kami adalah nilai spiritualitasnya. Bukan hanya software bisnis dingin, modul Mutabaah Yaumiyah amil dan kanal Lapor Gratifikasi menjaga kultur amanah seluruh tim. Pelayanan ke muzaki meningkat drastis.',
        author: 'Nurul Hidayati, S.E.',
        role: 'Manajer Fundraising & SDM',
        institution: 'Yayasan Bina Amal Insani',
      },
    ],

    // Customization & Implementation Methodology
    customizationHeadline:
      '11 Modul Paket Standar Lengkap – Siap Disesuaikan dengan Tata Kelola Lembaga Anda',
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
];
