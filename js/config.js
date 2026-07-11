/* =====================================================
   CONFIG.JS
   INI ADALAH FILE YANG PALING SERING KAMU EDIT.

   - Ganti foto profil di sini.
   - Ganti foto gallery di sini.
   - Ganti link sosial media di sini.
   - Ganti kata-kata typing effect di sini.

   Tidak perlu edit file HTML untuk hal-hal di atas.
===================================================== */

// =====================
// IMAGE CONFIG
// =====================

// Foto profil yang tampil di Hero & About section
const PROFILE_IMAGE =
  "https://i.gyazo.com/bf7036de569c4548bd74db25c59342f7.jpg?q=80&w=800&auto=format&fit=crop";

// Daftar foto Gallery.
// Tinggal tambah/hapus baris untuk menambah/mengurangi foto.
// Tidak perlu edit HTML sama sekali, gallery dibuat otomatis oleh gallery.js
const GALLERY_IMAGES = [
  "https://i.gyazo.com/54a9fc7e5a742d0c3408b029f027726a.jpg?q=80&w=1200&auto=format&fit=crop",
  "https://i.gyazo.com/f7f3f2d6a7145fc1981b09f03770a8e1.jpg?q=80&w=1200&auto=format&fit=crop",
  "https://i.gyazo.com/e9558a1072a04a19079c40252a8175ef.jpg?q=80&w=1200&auto=format&fit=crop",
  "https://i.gyazo.com/4153df521973dbc86dd007df7a01f1bd.jpg?q=80&w=1200&auto=format&fit=crop",
  "https://i.gyazo.com/0ad0c7ba0b7ff240f33abd3428f534a5.jpg?q=80&w=1200&auto=format&fit=crop",
  "https://i.gyazo.com/2c04a99105b7c5cd4fe696c47855d7fd.jpg?q=80&w=1200&auto=format&fit=crop",
  "https://i.gyazo.com/1135261a1cbd71421b1a764f1c1b02b2.jpg?q=80&w=1200&auto=format&fit=crop",
  "https://i.gyazo.com/cccef0e7be70c5c7aa40bb7a22173f9c.jpg?q=80&w=1200&auto=format&fit=crop",
  "https://i.gyazo.com/0f5d4cbc0618a064a0638c3ec9cea5eb.jpg?q=80&w=1200&auto=format&fit=crop"
];

// =====================
// SOCIAL LINKS
// =====================
// Ganti semua link sosial media kamu di sini.
// Kosongkan string ("") jika tidak ingin menampilkan salah satu.
const SOCIAL_LINKS = {
  github: "https://github.com/",
  instagram: "https://instagram.com/",
  linkedin: "https://linkedin.com/",
  email: "mailto:hello@kepaladesa.dev",
  website: "https://kepaladesa.dev"
};

// =====================
// TYPING EFFECT WORDS
// =====================
// Kata-kata yang muncul bergantian di Hero section.
const TYPING_WORDS = [
  "SEO Specialist",
  "Backend Developer",
  "Automation Engineer",
  "Node.js Developer",
  "Python Developer",
  "Technical SEO"
];

// =====================
// GENERAL SITE CONFIG
// =====================
const SITE_CONFIG = {
  name: "Kepala Desa",
  shortName: "KDS",
  role: "SEO Specialist & Backend Developer",
  birthDate: "5 March 2004",
  nationality: "Indonesia",
  typingSpeed: 80,      // kecepatan mengetik (ms per huruf)
  typingDelete: 40,      // kecepatan menghapus (ms per huruf)
  typingPause: 1800      // jeda sebelum kata dihapus (ms)
};
