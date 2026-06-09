# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요
Jayson.B의 개인 프로필 웹사이트. 빌드 도구 없는 순수 정적 사이트 (HTML/CSS/JS).

## 실행 방법
빌드 불필요. `index.html`을 브라우저에서 직접 열거나 로컬 서버 사용:
- VS Code Live Server 확장 사용
- 또는 `python -m http.server 8080` 실행 후 http://localhost:8080 접속

## 파일 구조
- `index.html` — 전체 페이지 구조 및 섹션
- `style.css` — 커스텀 CSS (타이핑 커서, 글로우 효과 등 Tailwind 불가 항목)
- `script.js` — 타이핑 애니메이션, 네비게이션 스크롤, AOS 초기화

## CDN 의존성 (인터넷 연결 필요)
- Tailwind CSS CDN
- AOS (Animate on Scroll) 2.3.1
- Google Fonts (Inter)

## 색상 시스템
- 다크 배경: `#0a0f1e` (slate-900)
- 주요 강조: `#3b82f6` (blue-500)
- 보조 강조: `#8b5cf6` (violet-500)
- 포인트: `#10b981` (emerald-500)

## 언어 및 커뮤니케이션 규칙
- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)
