/* =====================================================
   TYPING.JS
   Efek mengetik untuk teks jabatan di Hero section.
   Kata-katanya diambil dari TYPING_WORDS di js/config.js
===================================================== */

function initTypingEffect() {
  const typingElement = document.getElementById("typingText");
  if (!typingElement) return;

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = TYPING_WORDS[wordIndex];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    typingElement.textContent = currentWord.substring(0, charIndex);

    let speed = isDeleting ? SITE_CONFIG.typingDelete : SITE_CONFIG.typingSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      // finished typing the word, pause then start deleting
      speed = SITE_CONFIG.typingPause;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // finished deleting, move to next word
      isDeleting = false;
      wordIndex = (wordIndex + 1) % TYPING_WORDS.length;
      speed = 300;
    }

    setTimeout(type, speed);
  }

  type();
}
