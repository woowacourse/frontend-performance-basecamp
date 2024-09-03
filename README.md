# 🚀 프론트엔드 성능 베이스캠프

## 성능 오답노트 : memegle 프로젝트 성능 개선하기

예제로 구성한 짤 검색 사이트, 'Memegle' 프로젝트 성능 개선

## 🎯 요구사항

### 개선 목표

> - Lighthouse performance **`95점`** 이상
> - Home 페이지에서 불러오는 스크립트 리소스 크기 **`< 60kb`**
> - 히어로 이미지 크기 **`< 120kb`**
> - **`프랑스 파리`** 에서 **`Fast 3G`** 환경으로 접속했을 때
>   - Home 첫 번째 로드시 LCP **`< 2.5s`**
>   - Home 두 번째 이후 로드시 LCP **`< 1.5s`**

### 작업 목록

### 1. 요청 크기 줄이기

- [ ] 소스코드 크기 줄이기
- [ ] 이미지 크기 줄이기

### 2 필요한 것만 요청하기

- Home 페이지에서 불러오는 스크립트 리소스에 Search 페이지의 소스 코드가 포함되지 않아야 한다.
  - [ ] Home을 켰을 때 Home 페이지의 소스 코드만 포함시키기 (코드 스플리팅)
- **`react-icons`** 패키지에서 실제로 사용하는 아이콘 리소스만 빌드 결과에 포함되어야 한다.
  - [ ] 실제로 사용하는 아이콘 리소스만 빌드 결과에 포함시키기

### 3 같은 건 매번 새로 요청하지 않기

- CDN 적용. 한 번 요청한 리소스는 CDN 캐시에서 불러오기.
  - [ ] S3, CloudFront 캐시 설정 적용
- GIPHY의 trending API를 Search 페이지에 들어올 때마다 새로 요청하지 않기.
  - '검색'을 더 주요 기능으로 취급하여, trending 정보가 '실시간으로' 업데이트될 필요는 없다고 가정.
  - [ ] Search 페이지를 처음 들어올 때만 trending API 요청
  - [ ] 이후에 들어올 때는 캐싱된 응답 데이터 받기

### 4 최소한의 변경만 일으키기

- 검색 결과 > 추가 로드시 추가되는 결과에 대해서만 화면 업데이트가 새로 일어나야 한다.
  - [ ] React DevTools의 Profiler 기준으로 기존에 있던 아이템이 다시 렌더되지 않는지 확인
- Layout Shift 없이 애니메이션이 일어나야 한다.
  - [ ] (대상) CustomCursor, 검색 결과 > hover, 도움말 패널 열고닫기 애니메이션
- Frame Drop이 일어나지 않아야 한다. (Chrome DevTools 기준) Partially Presented Frame 역시 최소로 발생해야 한다.
  - [ ] (대상) 메인 페이지의 CustomCursor, 스크롤 애니메이션

## 🚚 선택 요구 사항

- 도움말 패널 추가 최적화
  - 도움말 패널은 많은 수의 엘리먼트를 포함하고 있습니다. 이 패널 자체를 최적화하는 작업은 위의 요구사항들을 모두 진행한 뒤에 원한다면 추가적으로 시도해보세요 :)
  - **`DUMMY_ARTISTS_LENGTH`** 를 10,000을 넘는 큰 수를 임의로 지정해서 확인해 보세요.
