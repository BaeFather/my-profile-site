# Jayson.B — 개인 프로필 사이트

풀스택 엔지니어 Jayson.B의 개인 포트폴리오 & 이력서 웹사이트입니다.  
빌드 도구 없는 순수 정적 사이트(HTML/CSS/JS)로 구성되어 있으며,  
Stripe 디자인 언어를 기반으로 한 라이트 UI를 적용했습니다.

배포 주소: `https://baefather.github.io/my-profile-site/`

---

## 페이지 구성

| 섹션 | 설명 |
|------|------|
| Hero | 그라디언트 메시 배경 + 타이핑 애니메이션 + 대시보드 목업 카드 |
| Stats | 주요 수치 (경력·도메인·PG 연동·팀 리딩) 카운터 애니메이션 |
| About | 자기소개 인용구 + 6개 핵심 강점 카드 |
| Skills | Backend / DB / Infra / Frontend / Cloud / AI 스킬 그룹 |
| Career | 주요 경력 타임라인 (테크트리 · 헬로핀테크 · 우정아이티에스 외) |
| Contact | 이메일 · GitHub 연락처 |

---

## 기술 스택

| 구분 | 사용 기술 |
|------|-----------|
| 마크업 | HTML5 |
| 스타일 | 순수 CSS (CSS Custom Properties 기반 디자인 토큰) |
| 스크립트 | Vanilla JavaScript |
| 애니메이션 | Intersection Observer API (자체 구현, 외부 라이브러리 없음) |
| 폰트 | Pretendard (CDN) |

> **인터넷 연결 필요** — Pretendard 폰트 CDN 로드를 위해 온라인 환경이 필요합니다.

---

## 파일 구조

```
my-profile-site/
├── index.html    # 전체 페이지 구조 및 섹션
├── style.css     # 디자인 토큰, 레이아웃, 컴포넌트, 반응형
├── script.js     # Intersection Observer, 카운터, 타이핑 애니메이션, 내비게이션
└── DESIGN.md     # Stripe 영감 디자인 시스템 명세 (색상·타이포·컴포넌트 토큰)
```

---

## 실행 방법

빌드 과정이 없습니다. 아래 방법 중 하나를 사용하세요.

**방법 1 — 브라우저에서 직접 열기**

```
index.html 파일을 브라우저로 드래그 앤 드롭
```

**방법 2 — Python 로컬 서버**

```bash
python -m http.server 8080
# 이후 http://localhost:8080 접속
```

**방법 3 — VS Code Live Server**

`index.html`을 열고 우측 하단 **Go Live** 클릭

---

## 디자인 시스템

`DESIGN.md`에 Stripe 영감 디자인 규칙이 명세되어 있습니다.  
추가 섹션 제작 시 반드시 이 문서를 기준으로 따라야 합니다.

### 주요 색상 토큰

| 역할 | 변수 | HEX |
|------|------|-----|
| Primary (CTA) | `--primary` | `#533afd` |
| 본문 텍스트 | `--ink` | `#0d253d` |
| 보조 텍스트 | `--ink-mute` | `#64748d` |
| 페이지 배경 | `--canvas` | `#ffffff` |
| 섹션 배경 | `--canvas-soft` | `#f6f9fc` |
| 카드 보더 | `--hairline` | `#e3e8ee` |

### 타이포그래피 원칙

- 폰트: **Pretendard** (Sohne 대체)
- 디스플레이 헤딩: `font-weight: 300`, `letter-spacing: -1.4px`
- 본문·라벨: `font-weight: 400`
- 숫자·금액 셀: `font-feature-settings: "tnum"` 적용
- 전역: `font-feature-settings: "ss01"` 적용

### 버튼 / 카드 규칙

- 버튼: `border-radius: 9999px` (pill), padding `8px 16px` 최소
- 카드: `border-radius: 12px`, `border: 1px solid #e3e8ee`, 블루 톤 그림자

---

## 주요 기능

- **그라디언트 메시 히어로** — cream · lavender · indigo · ruby 다층 radial-gradient
- **대시보드 목업 카드** — macOS 스타일 터미널 패널로 기술 스택 시각화 (사진 미사용)
- **타이핑 애니메이션** — 4개 역할 문구 자동 순환
- **스크롤 reveal** — Intersection Observer 기반 섹션별 페이드인 (외부 라이브러리 없음)
- **카운터 애니메이션** — ease-out cubic 이징으로 수치 카운트업
- **스크롤 감지 내비게이션** — 현재 섹션 자동 하이라이트
- **모바일 반응형** — 햄버거 메뉴, 1024 / 768 / 520px 3단계 브레이크포인트

---

## 라이선스

© 2026 Jayson.B. All rights reserved.
