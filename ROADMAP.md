# 프로필 웹사이트 구현 계획

## Context
Jayson.B를 위한 개인 프로필 웹사이트를 처음부터 생성. 풀스택 개발자의 역량과 경험을 모던하고 깔끔하게 표현하는 단일 HTML 파일 사이트를 제작한다.

---

## 구성 파일

| 파일 | 역할 |
|---|---|
| `CLAUDE.md` | Claude Code 작업 가이드 (한국어 규칙 포함) |
| `index.html` | 메인 HTML 구조 + Tailwind CDN |
| `style.css` | Tailwind로 표현 불가한 커스텀 애니메이션/효과 |
| `script.js` | 스크롤 애니메이션, 네비게이션, 타이핑 효과 |

---

## 페이지 구조 (섹션별)

### 1. 네비게이션 (fixed top)
- 좌: 로고 — "Jayson.B" 텍스트 (blue→violet 그라데이션)
- 우: 메뉴 링크 4개 — **About / Skills / Portfolio / Contact**
- 활성 섹션 메뉴 항목: emerald 컬러 하이라이트
- 스크롤 시 배경 `bg-slate-900/80 backdrop-blur-md` 전환
- 모바일: 햄버거 아이콘 → 드롭다운 메뉴

### 2. Hero 섹션
- 풀스크린 높이 (min-h-screen)
- 이름 "Jayson.B" 대형 타이포
- 타이핑 애니메이션: "풀스택 개발자", "기술 리더", "인프라 엔지니어" 순환
- 소개문 두 줄 표시
- CTA 버튼: "포트폴리오 보기" → Portfolio 섹션으로 스크롤
- 배경: 다크 그라데이션 + 미묘한 도트/그리드 패턴

### 3. About 섹션
- 좌: 프로필 아바타(이니셜 기반 SVG 아이콘)
- 우: 역할 소개 텍스트 + 키워드 뱃지
- 키워드 뱃지 예시: #풀스택 #인프라 #기술리더 #RESTful #PG연동

### 4. Skills 섹션
- **핵심 역량** 카드 그룹 (PHP, 서버 운영, Shell, JS/jQuery, Bootstrap, RESTful API, PG사 연동, 네트워크/방화벽)
- **부가 역량** 카드 그룹 (MongoDB, MySQL Replication, htaccess, NextJS, Python, CI/Laravel, ASP, GIT)
- 각 스킬: 아이콘(Devicons 또는 이모지) + 이름 + 간단 설명

### 5. Portfolio 섹션
- 3열 그리드 카드 (반응형 → 모바일 1열)
- **카드 3개 고정 배치** (glassmorphism 스타일):
  - 카드 1: "커머스 플랫폼" — PHP/MySQL/RESTful API 기반 쇼핑몰 구축 + PG사 연동
  - 카드 2: "인프라 자동화" — Ubuntu 서버 세팅 + Shell Script 배포 자동화 + Nginx 구성
  - 카드 3: "관리자 대시보드" — Bootstrap/jQuery 기반 실시간 통계 대시보드
- 각 카드 구성: 상단 컬러 배지(blue/violet/emerald), 프로젝트명, 설명, 기술 태그 뱃지, "자세히 보기" 버튼
- 호버 시 카드 위로 살짝 이동 + glow 효과

### 6. Contact 섹션
- 중앙 정렬 심플 레이아웃
- 이메일 링크 (sori9th@gmail.com) + GitHub 링크 플레이스홀더
- 소셜 아이콘 링크
- "함께 일해요" 톤의 카피

### 7. Footer
- 저작권 텍스트

---

## 디자인 시스템

| 요소 | 값 |
|---|---|
| 색상 테마 | 다크 배경: `#0a0f1e` / 주요 강조: `#3b82f6` (blue-500) / 보조 강조: `#8b5cf6` (violet-500) / 포인트: `#10b981` (emerald-500) |
| 그라데이션 | `from-blue-600 via-violet-600 to-emerald-500` 텍스트 및 버튼에 활용 |
| 폰트 | Google Fonts — Inter (영문) |
| 카드 스타일 | 반투명 glassmorphism (`backdrop-blur`, `bg-white/5`, `border border-white/10`) |
| 애니메이션 | AOS (Animate on Scroll) CDN + CSS Intersection Observer |
| 아이콘 | Heroicons (SVG inline) + 이모지 보완 |

---

## CDN 의존성

```html
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap" rel="stylesheet">
<!-- AOS 애니메이션 -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
```

---

## JavaScript 기능

- `AOS.init()` — 스크롤 진입 시 요소 페이드인
- Typed.js 스타일 타이핑 애니메이션 (직접 구현, 추가 CDN 없이)
- 네비게이션 스크롤 감지 → 배경 전환
- 모바일 햄버거 메뉴 토글
- 현재 섹션 하이라이트 (active nav link)

---

## 검증 방법

1. `index.html`을 브라우저에서 직접 열기 (file:// 프로토콜)
2. 각 섹션 스크롤 진입 애니메이션 확인
3. 모바일 뷰 (375px) 반응형 레이아웃 확인
4. 타이핑 애니메이션 루프 동작 확인
5. CTA 버튼 앵커 스크롤 동작 확인
