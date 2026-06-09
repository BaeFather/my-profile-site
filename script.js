// AOS 초기화
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// 타이핑 애니메이션
const typingTexts = ['풀스택 개발자', '기술 리더', '인프라 엔지니어'];
let currentIndex = 0;
const typingElement = document.getElementById('typing-text');
const speed = 100;
const delayBetweenWords = 2000;

function typeText() {
    const text = typingTexts[currentIndex];
    let charIndex = 0;

    function type() {
        if (charIndex < text.length) {
            typingElement.textContent = text.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(type, speed);
        } else {
            setTimeout(eraseText, delayBetweenWords);
        }
    }

    function eraseText() {
        if (charIndex > 0) {
            typingElement.textContent = text.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseText, speed / 2);
        } else {
            currentIndex = (currentIndex + 1) % typingTexts.length;
            setTimeout(typeText, 500);
        }
    }

    type();
}

typeText();

// 네비게이션 스크롤 감지
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    // 스크롤 시 네비게이션 배경 전환
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // 현재 섹션에 따라 활성 링크 업데이트
    let current = '';
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// 모바일 메뉴 토글
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// 모바일 메뉴 링크 클릭 시 닫기
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});
