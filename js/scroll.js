/* =====================================================
   SCROLL.JS
   Semua efek yang berhubungan dengan scroll:
   - Navbar mengecil saat discroll
   - Scroll progress bar di atas
   - Reveal animation saat elemen masuk layar
   - Active link navbar sesuai section aktif
===================================================== */

// ---- Navbar shrink on scroll ----
function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  });
}

// ---- Scroll progress bar ----
function initScrollProgress() {
  const progressBar = document.getElementById("scrollProgress");
  if (!progressBar) return;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + "%";
  });
}

// ---- Reveal elements when they enter the viewport ----
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    ".reveal-up, .reveal-left, .reveal-right"
  );

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );

  revealElements.forEach((el, index) => {
    // small automatic stagger for elements without a manual delay
    if (!el.style.getPropertyValue("--delay")) {
      el.style.setProperty("--delay", (index % 5) * 0.08 + "s");
    }
    observer.observe(el);
  });
}

// ---- Highlight active nav link based on visible section ----
function initActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");

          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach((section) => observer.observe(section));
}

// ---- Back to top button visibility ----
function initBackToTop() {
  const backToTop = document.getElementById("backToTop");
  if (!backToTop) return;

  window.addEventListener("scroll", () => {
    backToTop.style.opacity = window.scrollY > 400 ? "1" : "0.4";
  });
}
