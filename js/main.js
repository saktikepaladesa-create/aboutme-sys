/* =====================================================
   MAIN.JS
   File utama yang menjalankan semua module lain.
   File ini dimuat PALING TERAKHIR di index.html.
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  // ---- Apply images from config.js ----
  document.getElementById("heroPhoto").src = PROFILE_IMAGE;

  // ---- Build contact / social links from config.js ----
  renderContactLinks();

  // ---- Set footer year automatically ----
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  // ---- Init all modules ----
  initGallery();
  initTypingEffect();
  initParticles();
  initCounters();
  initCardTilt();
  initMagneticButtons();
  initQuotesCarousel();
  initCursorGlow();

  initNavbarScroll();
  initScrollProgress();
  initScrollReveal();
  initActiveNavLink();
  initBackToTop();

  initMobileMenu();
  initPageLoader();
});

// ---- Build the social/contact link buttons from SOCIAL_LINKS ----
function renderContactLinks() {
  const wrapper = document.getElementById("contactLinks");
  if (!wrapper) return;

  const icons = {
    github: "🐙",
    instagram: "📸",
    linkedin: "💼",
    email: "✉️",
    website: "🌐"
  };

  const labels = {
    github: "GitHub",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    email: "Email",
    website: "Website"
  };

  Object.keys(SOCIAL_LINKS).forEach((key) => {
    const url = SOCIAL_LINKS[key];
    if (!url) return; // skip empty links

    const link = document.createElement("a");
    link.href = url;
    link.className = "contact-link magnetic";
    link.target = key === "email" ? "_self" : "_blank";
    link.rel = "noopener";
    link.innerHTML = `<span>${icons[key] || "🔗"}</span> ${labels[key] || key}`;

    wrapper.appendChild(link);
  });
}

// ---- Mobile hamburger menu ----
function initMobileMenu() {
  const burger = document.getElementById("navbarBurger");
  const menu = document.getElementById("navbarMenu");
  if (!burger || !menu) return;

  burger.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  // close menu when a link is clicked
  menu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => menu.classList.remove("open"));
  });
}

// ---- Page loader: hide once everything is ready ----
function initPageLoader() {
  const loader = document.getElementById("pageLoader");
  const barFill = document.querySelector(".loader-bar-fill");
  if (!loader) return;

  if (barFill) barFill.style.transition = "width 0.6s ease";

  window.addEventListener("load", () => {
    requestAnimationFrame(() => {
      if (barFill) barFill.style.width = "100%";
    });

    setTimeout(() => {
      loader.classList.add("loaded");
    }, 500);
  });
}
