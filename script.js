// ============================================
// SCROLL REVEAL (Intersection Observer)
// ============================================
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // 한 번만 실행
      }
    });
  },
  { threshold: 0.06 } // rootMargin 제거 — 하단 컷오프 없이 자연스럽게 트리거
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// ============================================
// COUNTER ANIMATION
// ============================================
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const duration = 1600;

      // reveal 트랜지션(0.55s)이 끝난 후 카운터 시작
      setTimeout(() => {
        const start = performance.now();

        function tick(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * target);
          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            el.textContent = target;
          }
        }

        requestAnimationFrame(tick);
      }, 560);

      counterObserver.unobserve(el);
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('.counter').forEach((el) => counterObserver.observe(el));

// ============================================
// TYPING ANIMATION
// ============================================
const typingEl = document.getElementById('typing-text');
const phrases = [
  '풀스택 백엔드 개발자',
  'Tech Leader',
  '인프라 엔지니어',
  'AI 바이브코더',
];

let phraseIdx = 0;
let charIdx = 0;
let erasing = false;

const TYPE_MS  = 80;
const ERASE_MS = 38;
const PAUSE_MS = 2400;

function typeLoop() {
  const phrase = phrases[phraseIdx];

  if (!erasing) {
    typingEl.textContent = phrase.slice(0, charIdx + 1);
    charIdx++;
    if (charIdx === phrase.length) {
      erasing = true;
      setTimeout(typeLoop, PAUSE_MS);
    } else {
      setTimeout(typeLoop, TYPE_MS);
    }
  } else {
    typingEl.textContent = phrase.slice(0, charIdx - 1);
    charIdx--;
    if (charIdx === 0) {
      erasing = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      setTimeout(typeLoop, 320);
    } else {
      setTimeout(typeLoop, ERASE_MS);
    }
  }
}

typeLoop();

// ============================================
// NAVIGATION
// ============================================
const nav      = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

let ticking = false;

window.addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    nav.classList.toggle('scrolled', window.scrollY > 30);

    let current = '';
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 140) {
        current = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === `#${current}`
      );
    });

    ticking = false;
  });
}, { passive: true });

// ============================================
// MOBILE MENU
// ============================================
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('nav-mobile');
const hSpans    = hamburger.querySelectorAll('span');

function openMenu() {
  navMobile.classList.add('open');
  hSpans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
  hSpans[1].style.opacity   = '0';
  hSpans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
}

function closeMenu() {
  navMobile.classList.remove('open');
  hSpans.forEach((s) => { s.style.transform = ''; s.style.opacity = ''; });
}

hamburger.addEventListener('click', () => {
  navMobile.classList.contains('open') ? closeMenu() : openMenu();
});

navMobile.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
