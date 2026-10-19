# TMANNER · 테이블 주문 플랫폼 앱

React Native와 Expo로 만든 테이블 주문 플랫폼의 모바일 클라이언트입니다. 로그인·회원가입, 메뉴 탐색, 메뉴 수정과 품절 관리 화면을 하나의 내비게이션 흐름으로 구성합니다.

## 화면 구성

| 영역 | 코드에서 살펴볼 부분 |
| --- | --- |
| 진입·로그인 | `HomeScreen`, `LoginScreen` |
| 회원가입 | `SignupIDScreen`, `SignupPWScreen`, `SignupPWConfirmScreen`, `UserVerificationScreen` |
| 메뉴 탐색 | `MainScreen`, `DetailsScreen`, 공통 `TabNavigator` |
| 메뉴 관리 | `MenuEditScreen`, `DetailMenuEditScreen`, `SoldOutScreen` |
| 공통 UI | `Header`, `FormInput` |

화면 등록과 이동 구조는 [App.js](TMANNER/App.js), 메뉴 카테고리 구성은 [data.js](TMANNER/assets/data/data.js)에서 확인할 수 있습니다.

## 기술 구성

- **React Native 0.72.3 / React 18.2.0 / Expo SDK 49**
- **React Navigation 6** 기반 스택·탭 내비게이션
- JavaScript, React Native StyleSheet, 공통 UI 컴포넌트
- SVG 자산 및 커스텀 폰트

위 버전은 저장소의 [package.json](TMANNER/package.json) 기준입니다.

## 로컬 실행

앱 소스와 패키지 설정은 저장소 루트가 아닌 `TMANNER/`에 있습니다.

```sh
git clone https://github.com/yeonsooooooo/TMANNER-APP.git
cd TMANNER-APP/TMANNER
npm install
npm start
```

플랫폼별 실행 명령:

```sh
npm run android
npm run ios
npm run web
```

Android 에뮬레이터나 iOS 시뮬레이터 등 해당 플랫폼의 개발 환경이 필요합니다. 이 저장소는 Expo SDK 49 기반의 기존 프로젝트이므로 실행 환경과 클라이언트의 SDK 호환성을 먼저 확인하세요.

## 코드 구조

```text
TMANNER/
├── App.js                 # NavigationContainer와 화면 등록
├── screens/               # 로그인·회원가입·메뉴·관리 화면
├── components/            # 헤더, 입력 폼, 탭 내비게이션
├── assets/
│   ├── data/              # 메뉴 카테고리 데이터
│   ├── fonts/
│   └── source/            # 이미지 및 SVG
└── package.json           # 의존성과 실행 스크립트
```

## 구현 범위

이 저장소는 모바일 클라이언트의 화면 구성과 코드 구조를 보여줍니다. 화면의 존재만으로 주문·결제·인증 서버의 연동 완료나 운영 배포 상태를 의미하지는 않습니다. 현재 환경에서의 앱 실행과 외부 서비스 연동은 별도 확인이 필요합니다.

