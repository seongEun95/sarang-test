# 사역국 찾기 테스트 🙏

청년부 사역국 찾기를 위한 MBTI 스타일의 테스트 웹 애플리케이션입니다.

## 주요 기능 🌟

- MBTI 스타일의 사역국 성향 테스트
- 결과에 따른 추천 사역국 및 팀 매칭
- 결과 공유 기능
- 반응형 디자인으로 모바일/데스크톱 지원
- 애니메이션 효과로 부드러운 UX 제공

## 기술 스택 💻

### Frontend

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **상태관리**: React Context API
- **UI Components**: Shadcn UI

### 주요 라이브러리

- `next/navigation`: 라우팅 처리
- `next/image`: 이미지 최적화

## 프로젝트 구조 📁

## 웹앱 로직 설명 🔄

### 1. 상태 관리

- 사용자의 답변과 진행 상태를 Context API로 관리
- 결과 데이터의 저장을 위한 상태 관리

### 2. 페이지 흐름

1. **메인 페이지** (`page.tsx`)

   - 테스트 소개 및 시작 버튼
   - 반응형 디자인으로 모바일/데스크톱 지원

2. **질문 페이지** (`question/page.tsx`)

   - 동적 라우팅으로 질문 순차적 표시
   - 프로그레스 바로 진행 상태 표시
   - 답변 선택 시 자동 다음 질문으로 이동

3. **결과 페이지** (`result/page.tsx`)
   - 이미지 다운로드
   - 추천 사역국 표시
   - 링크 공유 기능

### 3. 주요 기능 구현

- **질문 로직**

  - 커스텀 훅으로 각 질문에 선택에 따라 각 팀의 점수 부여

- **결과 분석**

  - 사역국 매칭 로직

- **애니메이션**
  - Framer Motion을 활용한 부드러운 전환 효과
  - 페이지 전환 애니메이션
  - 인터랙티브 요소 애니메이션

## 설치 및 실행 방법 🚀

1. 저장소 클론

```bash
git clone [repository-url]
cd sarang-test
```

2. 의존성 설치

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. 개발 서버 실행

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. 브라우저에서 `http://localhost:3000` 접속

## 테스트 구성 📝

테스트는 총 12개의 질문과 각 질문의 4개 선택항목으로 구성되어 있습니다.

## 결과 분석 🔍

모든 질문의 선택에 따라 점수를 부여하고 가장 높은 팀이 결과 페이지에 출력합니다.
