=====================================================
 PORTFOLIO WEBSITE — PANDUAN PENGGUNAAN
 Kepala Desa — SEO Specialist & Backend Developer
=====================================================

Website ini dibuat 100% menggunakan HTML, CSS, dan
JavaScript murni (tanpa framework). Cukup buka file
index.html di browser, website langsung berjalan.
Tidak perlu install apa pun.


-----------------------------------------------------
1. STRUKTUR FOLDER
-----------------------------------------------------

portfolio/
│
├── index.html            -> semua konten teks & struktur halaman
├── README.txt             -> file ini
│
├── css/
│   ├── variables.css      -> SEMUA WARNA website (edit di sini)
│   ├── style.css          -> tampilan & layout tiap section
│   ├── animations.css     -> semua animasi (keyframes)
│   └── responsive.css     -> tampilan di tablet & HP
│
└── js/
    ├── config.js           -> foto, gallery, link sosial media, kata typing
    ├── main.js              -> menjalankan semua module
    ├── gallery.js            -> logika gallery + lightbox
    ├── typing.js              -> efek mengetik di Hero
    ├── animations.js           -> particle, counter, tilt, magnetic button
    └── scroll.js                -> navbar, progress bar, reveal animation


-----------------------------------------------------
2. CARA MENGGANTI FOTO PROFIL
-----------------------------------------------------

Buka file:  js/config.js

Cari baris:

    const PROFILE_IMAGE = "https://link-foto-profile.jpg";

Ganti link di dalam tanda kutip dengan URL foto kamu.
Bisa pakai foto dari hosting apa saja (imgur, cloudinary,
Google Drive dengan link publik, dsb).


-----------------------------------------------------
3. CARA MENGGANTI / MENAMBAH FOTO GALLERY
-----------------------------------------------------

Masih di file:  js/config.js

Cari array:

    const GALLERY_IMAGES = [
      "https://link-photo1.jpg",
      "https://link-photo2.jpg",
      ...
    ];

- Untuk MENGGANTI foto, cukup ganti link di dalam tanda kutip.
- Untuk MENAMBAH foto, tinggal tambah baris baru dengan
  format yang sama, contoh:

    "https://link-photo11.jpg",

- Untuk MENGHAPUS foto, hapus baris yang tidak diperlukan.

Gallery akan otomatis menyesuaikan jumlah foto.
TIDAK PERLU mengedit index.html sama sekali.


-----------------------------------------------------
4. CARA MENGGANTI NAMA & JABATAN
-----------------------------------------------------

Nama utama ada di index.html, cari bagian:

    <h1 class="hero-title reveal-up">
      Hi, I'm <span class="hero-name gradient-text">Kepala Desa</span>
    </h1>

Ganti tulisan "Kepala Desa" dengan nama kamu.

Untuk jabatan yang berganti-ganti (efek typing), buka:

    js/config.js

Cari:

    const TYPING_WORDS = [
      "SEO Specialist",
      "Backend Developer",
      ...
    ];

Tambah / ganti / hapus kata sesuai kebutuhan.


-----------------------------------------------------
5. CARA MENGGANTI WARNA WEBSITE
-----------------------------------------------------

Buka file:  css/variables.css

Semua warna website ada di sini, contoh:

    --primary: #7c5cff;    -> warna ungu utama
    --secondary: #00e5ff;  -> warna cyan
    --background: #05050a; -> warna latar belakang

Ganti kode warna (hex) sesuai keinginan.
Karena semua file CSS lain memakai variabel ini,
SATU perubahan warna akan otomatis berlaku
di SELURUH halaman (tombol, teks gradient, glow, dsb).


-----------------------------------------------------
6. CARA MENGGANTI / MENAMBAH SKILL
-----------------------------------------------------

Buka index.html, cari bagian:

    <!-- =========================================================
         SKILLS SECTION
    ========================================================= -->

Setiap skill adalah satu blok seperti ini:

    <div class="skill-card reveal-up">
      <span class="skill-icon">🟢</span>
      <span class="skill-name">Node.js</span>
    </div>

Copy-paste blok ini untuk menambah skill baru,
lalu ganti emoji (skill-icon) dan nama skill (skill-name).


-----------------------------------------------------
7. CARA MENGGANTI TIMELINE
-----------------------------------------------------

Buka index.html, cari bagian:

    <!-- =========================================================
         TIMELINE SECTION
    ========================================================= -->

Setiap event adalah satu blok:

    <div class="timeline-item reveal-up">
      <div class="timeline-dot"></div>
      <span class="timeline-year">2024</span>
      <h3 class="timeline-title">Automation & AI</h3>
      <p class="timeline-text">Deskripsi singkat di sini.</p>
    </div>

Copy-paste blok ini untuk menambah tahun / event baru.


-----------------------------------------------------
8. CARA MENGGANTI LINK SOSIAL MEDIA
-----------------------------------------------------

Buka file:  js/config.js

Cari:

    const SOCIAL_LINKS = {
      github: "https://github.com/",
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
      email: "mailto:hello@kepaladesa.dev",
      website: "https://kepaladesa.dev"
    };

Ganti URL di dalam tanda kutip.
Jika tidak ingin menampilkan salah satu link,
kosongkan saja isinya, contoh:

    instagram: "",

Tombol Instagram otomatis tidak akan ditampilkan.


-----------------------------------------------------
9. CARA MENGUBAH ANIMASI
-----------------------------------------------------

Semua animasi ada di:  css/animations.css

Untuk mempercepat/memperlambat animasi, ubah angka
durasi (dalam detik) pada bagian @keyframes atau
pada class yang memakai "animation:", contoh:

    animation: auroraFloat1 18s ease-in-out infinite;

Ubah "18s" menjadi angka lain untuk mengubah kecepatan.

Untuk mematikan efek "reveal saat scroll", buka
js/scroll.js lalu hapus pemanggilan initScrollReveal()
di js/main.js.


-----------------------------------------------------
10. CATATAN PERFORMA
-----------------------------------------------------

- Gambar gallery menggunakan lazy loading (baru dimuat
  saat mendekati layar), jadi loading awal tetap ringan.
- Semua animasi menggunakan CSS transform/opacity agar
  tetap smooth di 60 FPS.
- Website menghormati pengaturan "Reduce Motion" di OS
  pengguna (animasi otomatis dikurangi).


-----------------------------------------------------
SELAMAT MENGEDIT!
-----------------------------------------------------
Jika ingin mengembangkan lebih lanjut (menambah section
baru, mengubah layout, dsb.), ikuti pola penamaan class
yang sudah ada (mis. hero-, about-, skill-, gallery-,
timeline-) agar kode tetap konsisten dan mudah dibaca.
