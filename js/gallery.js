/* =====================================================
   GALLERY.JS
   Membuat gallery secara OTOMATIS dari array GALLERY_IMAGES
   yang ada di js/config.js. Juga mengatur Lightbox
   (buka foto besar, next, previous, keyboard, swipe).
===================================================== */

let currentLightboxIndex = 0;

function initGallery() {
  const galleryGrid = document.getElementById("galleryGrid");
  if (!galleryGrid) return;

  // ---- Build gallery items from config ----
  GALLERY_IMAGES.forEach((imageUrl, index) => {
    const item = document.createElement("div");
    item.className = "gallery-item reveal-up";
    item.style.setProperty("--delay", (index % 4) * 0.08 + "s");

    item.innerHTML = `
      <div class="gallery-skeleton"></div>
      <img data-src="${imageUrl}" alt="Gallery photo ${index + 1}">
      <div class="gallery-item-overlay">View 0${index + 1}</div>
    `;

    item.addEventListener("click", () => openLightbox(index));
    galleryGrid.appendChild(item);
  });

  lazyLoadGalleryImages();
  initLightboxControls();
}

// ---- Lazy load with Intersection Observer + fade in ----
function lazyLoadGalleryImages() {
  const images = document.querySelectorAll(".gallery-item img");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const skeleton = img.previousElementSibling;

        img.src = img.dataset.src;
        img.onload = () => {
          img.classList.add("loaded");
          if (skeleton) skeleton.style.display = "none";
        };

        obs.unobserve(img);
      }
    });
  }, { rootMargin: "200px" });

  images.forEach((img) => observer.observe(img));
}

// ---- Lightbox open / close / navigate ----
function openLightbox(index) {
  currentLightboxIndex = index;
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const counter = document.getElementById("lightboxCounter");

  lightboxImage.src = GALLERY_IMAGES[index];
  counter.textContent = `${index + 1} / ${GALLERY_IMAGES.length}`;
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}

function showNextImage() {
  currentLightboxIndex = (currentLightboxIndex + 1) % GALLERY_IMAGES.length;
  openLightbox(currentLightboxIndex);
}

function showPrevImage() {
  currentLightboxIndex =
    (currentLightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
  openLightbox(currentLightboxIndex);
}

function initLightboxControls() {
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxNext").addEventListener("click", showNextImage);
  document.getElementById("lightboxPrev").addEventListener("click", showPrevImage);

  const lightbox = document.getElementById("lightbox");

  // click outside image closes lightbox
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // keyboard controls
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNextImage();
    if (e.key === "ArrowLeft") showPrevImage();
  });

  // swipe controls (mobile)
  let touchStartX = 0;

  lightbox.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  lightbox.addEventListener("touchend", (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      diff > 0 ? showNextImage() : showPrevImage();
    }
  });
}
