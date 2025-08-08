## 📦 Modal Project

Next.js 15 + React 19 + TailwindCSS + FSD 아키텍처를 기반으로 하는 프로젝트입니다.
본 저장소에서는 모달 기능을 다양한 방식으로 구현하고 있으며, 각 PR은 독립적인 모달 기능을 다룹니다.

### 💡 프로젝트 개요

이 프로젝트는 Next.js 15 App Router 기반의 웹 애플리케이션으로, Feature-Sliced Design 아키텍처를 따릅니다.

---

### 🛠 기술 스택

-   Next.js 15 (App Router)
-   React 19
-   Tailwind CSS v3
-   TypeScript
-   Zustand – 전역 상태 관리 (일부 모달)
-   FSD (Feature-Sliced Design)

---

### 🔧 구조 개요 (FSD 기준)

```
📦 src/
    ├── app/ # App Router 및 page/layout/modal 구성
    ├── entities/ # 핵심 도메인 모델
    ├── features/ # 독립적 기능 단위 (예: useModal)
    ├── widgets/ # UI 구성요소 (예: Modal 컴포넌트)
    ├── shared/ # 공용 유틸리티, 훅 등
```

---

### 📌 PR 소개

✅ PR 1 – useState 기반 모달 관리
특징

useState로 모달 열림/닫힘 상태를 관리

useModal() 훅으로 Promise<boolean> 형태의 확인 모달 처리

외부 클릭 감지를 위한 useOutsideClick() 훅 포함

> 사용 시나리오

간단한 확인/취소 모달

특정 아이템 삭제 전 사용자 확인 필요 시

✅ PR 2 – Next.js Intercepted Routes + Zustand 기반 모달
특징

App Router의 Intercepted Routes를 활용

모달이 경로(/photos/:id)로 열리며 URL 직접 접근 가능

zustand로 전역 삭제 상태를 관리

> 사용 시나리오

포토 ID 별 상세 모달

---

### 🚀 실행 방법

-   의존성 설치

    `pnpm install`

-   개발 서버 실행

    `pnpm run dev`
