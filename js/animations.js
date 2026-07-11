/* =====================================================
   ANIMATIONS.JS
   Semua logika animasi interaktif:
   - Particle di Hero
   - Counter angka di Stats
   - Card tilt
   - Magnetic button
   - Quotes carousel
   - Cursor glow
===================================================== */

// ---- Floating particles in hero background ----
function initParticles() {
  const container = document.getElementById("particles");
  if (!container) return;

  const particleCount = 26;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";

    const size = Math.random() * 2 + 2;
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const duration = Math.random() * 6 + 6;
    const delay = Math.random() * 6;

    particle.style.width = size + "px";
    particle.style.height = size + "px";
    particle.style.left = left + "%";
    particle.style.top = top + "%";
    particle.style.animation = `particleFloat ${duration}s ease-in-out ${delay}s infinite`;

    container.appendChild(particle);
  }
}

// ---- Counter animation for Stats section ----
function initCounters() {
  const counters = document.querySelectorAll(".stat-number");
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const duration = 1600;
      const startTime = performance.now();

      function update(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target);

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = target;
        }
      }

      requestAnimationFrame(update);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach((counter) => observer.observe(counter));
}

// ---- Subtle 3D tilt on cards ----
function initCardTilt() {
  const cards = document.querySelectorAll(".skill-card, .zodiac-card, .profile-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = ((y / rect.height) - 0.5) * -6;
      const rotateY = ((x / rect.width) - 0.5) * 6;

      card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(600px) rotateX(0) rotateY(0) translateY(0)";
    });
  });
}

// ---- Magnetic buttons ----
function initMagneticButtons() {
  const buttons = document.querySelectorAll(".magnetic");

  buttons.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.3}px)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translate(0, 0)";
    });

    // ripple effect on click
    btn.addEventListener("click", (e) => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height);

      ripple.className = "ripple";
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = e.clientX - rect.left - size / 2 + "px";
      ripple.style.top = e.clientY - rect.top - size / 2 + "px";

      btn.style.position = "relative";
      btn.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });
}

// ---- Quotes carousel ----
function initQuotesCarousel() {
  const quotes = document.querySelectorAll(".quote-item");
  if (!quotes.length) return;

  let index = 0;

  setInterval(() => {
    quotes[index].classList.remove("active");
    index = (index + 1) % quotes.length;
    quotes[index].classList.add("active");
  }, 3200);
}

// ---- Cursor glow that follows mouse (desktop only) ----
function initCursorGlow() {
  const glow = document.getElementById("cursorGlow");
  if (!glow) return;

  // skip on touch devices
  if (window.matchMedia("(hover: none)").matches) return;

  document.addEventListener("mousemove", (e) => {
    glow.style.opacity = "1";
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });

  document.addEventListener("mouseleave", () => {
    glow.style.opacity = "0";
  });
}
