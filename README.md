# 제주반도체 공식 홈페이지 리뉴얼 (Jeju Semiconductor Official Website Renewal)

이 프로젝트는 Vite, React, TypeScript, Tailwind CSS를 기반으로 구축된 제주반도체(Jeju Semiconductor)의 현대적인 B2B 기업 웹사이트 리뉴얼 프로젝트입니다. 반응형 디자인, Firebase를 이용한 문의 폼 연동, 성능 최적화가 적용되어 있습니다.

## 기술 스택 (Tech Stack)
- **프레임워크:** React 19 + Vite
- **언어:** TypeScript
- **스타일링:** Tailwind CSS v4
- **애니메이션:** Framer Motion
- **아이콘:** Lucide React
- **백엔드/DB:** Firebase (Firestore, Hosting)
- **배포:** Vercel

## 프로젝트 구조 (Project Structure)
```
src/
├── components/   # 재사용 가능한 UI 컴포넌트 (Header, Footer 등)
├── layouts/      # 레이아웃 래퍼 컴포넌트
├── pages/        # 페이지 컴포넌트 (Home, Company, Products 등)
├── services/     # API 서비스 로직
├── styles/       # 전역 스타일 (Tailwind 설정 등)
└── firebase.ts   # Firebase 설정 파일
```

## 시작하기 (Getting Started)

1. **의존성 패키지 설치**
   ```bash
   npm install
   ```

2. **환경 변수 설정**
   루트 경로에 `.env` 파일을 생성하고 Firebase 설정 정보를 입력하세요:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

3. **개발 서버 실행**
   ```bash
   npm run dev
   ```

## 배포하기 (Vercel)

1. **GitHub/GitLab에 푸시**
   - 코드를 원격 저장소에 푸시합니다.

2. **Vercel 연결**
   - [Vercel 대시보드](https://vercel.com/dashboard)로 이동합니다.
   - "Add New..." -> "Project"를 클릭합니다.
   - 저장소를 import 합니다.

3. **빌드 설정**
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Environment Variables:** `.env` 파일의 Firebase 키들을 여기에 추가합니다.

4. **배포 (Deploy)**
   - "Deploy" 버튼을 클릭하면 Vercel이 애플리케이션을 빌드하고 배포합니다.

## Firebase 설정

1. Firebase Console에서 새 프로젝트를 생성합니다.
2. **Firestore Database**를 활성화합니다 (테스트 모드 또는 규칙 설정).
3. Contact 폼 데이터를 저장할 `inquiries` 컬렉션을 생성합니다 (생략 가능, 자동 생성됨).
4. 프로젝트 설정에서 웹 앱 구성 정보를 복사하여 `.env` 파일에 적용합니다.

---
© 2026 Jeju Semiconductor Corp.
