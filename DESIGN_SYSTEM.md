# DDAOM Design System

> **서비스명:** 따옴 (DDAOM)  
> **슬로건:** 오늘 따온 걸, 동네에서.  
> **문서 역할:** DDAOM의 모든 화면과 공통 UI에 적용하는 단일 디자인 기준  
> **적용 범위:** iOS·Android 모바일 앱

## 0. 문서 사용 원칙

- 새 화면과 컴포넌트는 이 문서의 제품 정체성, 정보 위계, token, 접근성 기준을 먼저 따른다.
- 정의되지 않은 상황에서는 **수확 시점 → 동네 → 텃밭 → 거래 형태**가 잘 드러나는 방향을 선택한다.
- 반복되는 예외는 화면마다 임의 처리하지 않고 이 문서와 공통 컴포넌트 기준에 반영한다.
- 시각적 유행보다 한국 사용자의 익숙함, 읽기 쉬움, 누르기 쉬움, 거래 상태의 명확성을 우선한다.
- 접근성은 별도 모드가 아니라 모든 화면의 기본 품질이다.

### 현재 단계의 범위

이 문서는 디자인 판단 기준과 현재 앱 Shell·홈 화면 구현의 기준을 정의한다. 현재 구현 범위는 기본 navigation, floating glass Bottom Tab Bar, 홈 화면, Harvest Card, Filter, mock data와 나머지 탭의 placeholder다. 다음 항목은 아직 구현하지 않는다.

- 백엔드, API, Supabase, 상태관리
- 결제, 예약, 정산 기능
- 인증, 실제 위치, 지도, 채팅 backend, push notification

---

## 1. Service

따옴은 취미로 텃밭이나 주말농장을 가꾸는 사람들이 직접 키우고 남은 수확물을 가까운 이웃과 **판매하고, 교환하고, 나눌 수 있는 로컬 수확 플랫폼**이다.

전문 농가 중심의 농산물 쇼핑몰이 아니다. 상품 재고를 효율적으로 판매하는 경험보다, 오늘 이웃이 직접 수확한 것을 발견하고 관계를 이어가는 경험에 집중한다.

### 핵심 사용자

- 50~60대 취미 텃밭 사용자
- 주말농장 사용자
- 소규모로 농작물을 직접 키우는 사람

### 구매 사용자

- 가까운 곳에서 신선한 농산물을 사고 싶은 지역 주민
- 이웃이 직접 키운 농산물을 구매하고 싶은 사용자
- 마음에 드는 텃밭의 다음 수확을 기다리고 싶은 사용자

### Core Experience Loop

`키운다 → 수확한다 → 남는다 → 따옴에 올린다 → 판매·교환·나눔 → 이웃과 거래한다 → 단골 텃밭을 만든다 → 다음 수확 알림을 받는다 → 다시 거래한다`

화면은 단발성 구매뿐 아니라 이 순환이 자연스럽게 이어지도록 설계한다.

---

## 2. Product Identity

앱을 열었을 때 사용자가 느껴야 하는 인상은 “농산물을 사러 왔다”보다 다음 문장에 가깝다.

> **오늘 우리 동네에는 뭐가 따였지?**

따라서 일반 커머스의 상품(Product)보다 **수확(Harvest), 거리(Local), 사람과 텃밭(Grower & Garden)**을 강조한다.

### 핵심 정보 우선순위

1. 무엇을 수확했는가
2. 언제 수확했는가
3. 얼마나 가까운가
4. 판매·교환·나눔 중 무엇인가
5. 얼마인가
6. 누가, 어느 텃밭에서 키웠는가

### 일반 커머스와 다른 점

- 배송, 할인율, 쿠폰, 최저가를 첫 화면의 중심에 두지 않는다.
- 등록 시간보다 **수확 시점**을 더 중요한 freshness 정보로 다룬다.
- 판매자 계정보다 **텃밭의 이름과 이력**을 기억하게 한다.
- 구매 버튼만 강조하지 않고 교환과 나눔도 동등한 거래 방식으로 제공한다.
- 빽빽한 상품 grid보다 가까운 수확물을 빠르게 읽는 local feed를 우선한다.

---

## 3. Korean Mobile App Direction

한국 사용자가 이미 이해하고 있는 모바일 거래 문법을 활용하되, 특정 서비스의 시각 요소나 화면 구조를 복제하지 않는다.

### 당근에서 참고할 원칙

- 동네와 거리가 먼저 보이는 정보 구조
- 직관적인 local feed와 사진 중심의 가로형 거래 카드
- 판매자와 구매자 사이의 자연스러운 채팅 흐름
- 단순한 Bottom Navigation
- 낮은 등록 진입장벽

참고하지 않는 것:

- orange branding
- 중고상품 중심의 정보 위계
- 동일한 카드 레이아웃과 visual styling

### 컬리에서 참고할 원칙

- 음식 사진을 깔끔하고 매력적으로 보여주는 방식
- 정돈된 typography와 충분한 white space
- 이미지, 이름, 가격 사이의 분명한 위계
- 식품 상세 화면의 안정적인 정보 구성

참고하지 않는 것:

- 전형적인 쇼핑몰 구조
- 할인율과 배송 중심 UI
- 빽빽한 다열 commerce grid

### 번개장터에서 참고할 원칙

- 거래 상태의 명확한 표현
- 구매와 판매 CTA의 분명한 구분
- 가격 hierarchy
- 예약, 결제, 거래 과정에서 현재 상태를 이해하기 쉬운 UX

참고하지 않는 것:

- 패션 resale 분위기
- 프로모션 중심 홈
- 복잡한 commerce navigation

### Reference Rule

기존 서비스는 사용자가 이미 익숙한 **행동 문법**만 참고한다. 브랜드 색, 고유 레이아웃, 아이콘 배치, 문구를 그대로 모방하지 않는다. 모든 결과물은 DDAOM의 핵심인 `수확 시점 + 동네 + 텃밭 + 판매·교환·나눔`으로 구별되어야 한다.

---

## 4. Visual Direction

### Keywords

- Apple-like
- Minimal
- Premium
- Calm
- Warm
- Local
- Fresh
- Trustworthy
- Modern
- Human

### 목표 인상

- 깔끔하지만 차갑지 않다.
- 친근하지만 촌스럽지 않다.
- 50~60대가 편하게 사용할 수 있지만 시니어 전용 앱처럼 보이지 않는다.
- 20~30대가 보아도 충분히 현대적인 한국 consumer app이다.
- 사진과 사람이 중심이고 장식은 절제되어 있다.
- 화면은 하나의 warm neutral canvas처럼 이어지고 UI chrome은 콘텐츠보다 조용하다.
- Apple의 인터페이스를 복제하지 않고 Content First, 명확한 위계, 자연스러운 depth와 material 철학을 참고한다.

### 피해야 할 인상

- 농협, 전통시장, 귀농 서비스
- 농업 행정 또는 농촌 체험 서비스
- 전형적인 농산물 쇼핑몰
- 관리자 페이지나 복잡한 dashboard

---

## 5. Brand & Logo

현재 제작된 DDAOM 앱 아이콘을 메인 브랜드 심볼로 사용한다.

### 심볼의 핵심 요소

- 바구니
- 수확물
- 따뜻한 색감
- 부드러운 형태

### 사용 위치

- 앱 아이콘
- Splash
- 로그인 및 온보딩의 브랜드 영역
- 대표적인 일부 empty state
- 브랜드 표시가 필요한 화면

### 사용 원칙

- 바구니나 잎 이미지를 화면 곳곳에 장식처럼 반복하지 않는다.
- 심볼을 늘이거나 기울이거나 임의의 색으로 변경하지 않는다.
- 심볼 주변에 충분한 clear space를 둔다.
- 로고의 색 때문에 화면 전체를 초록색으로 만들지 않는다.
- empty state에서도 같은 화면 안에 여러 번 노출하지 않는다.

---

## 6. Color System

전체 UI는 **White / Warm Neutral**을 중심으로 하고, 농산물 사진이 화면의 주요 색상 역할을 하게 한다.

### 6.1 Base Tokens

| Token | Value | 용도 |
|---|---:|---|
| `color.background.primary` | `#FAFAF8` | 기본 화면 배경 |
| `color.background.secondary` | `#F7F7F5` | 필요한 경우의 보조 배경 |
| `color.surface` | `#FFFFFF` | 카드, 입력, sheet |
| `color.surface.glass` | `rgba(255,255,255,0.68)` | 떠 있는 glass interface의 tint |
| `color.surface.glassHighlight` | `rgba(255,255,255,0.72)` | glass surface의 얇은 highlight |
| `color.surface.glassBorder` | `rgba(255,255,255,0.58)` | glass surface의 약한 border |
| `color.text.primary` | `#191919` | 제목, 본문, 핵심 정보 |
| `color.text.secondary` | `#767676` | 거리, 시간, 보조 설명 |
| `color.text.muted` | `#999999` | 낮은 우선순위 정보, 비활성 보조 문구 |
| `color.divider` | `#EEEEEC` | 섹션·목록 구분선 |
| `color.border` | `#E5E5E2` | 입력, 선택 영역, 필요한 카드 테두리 |
| `color.brand.green` | `#5D8A55` | 브랜드, Primary CTA, 선택 상태 |
| `color.brand.greenPressed` | `#4D7546` | Primary CTA pressed 상태 |
| `color.brand.softGreen` | `#EEF5EC` | 수확·선택 관련 soft surface |
| `color.harvest.coral` | `#F0785A` | 중요한 수확 포인트, 제한적 강조 |
| `color.harvest.softCoral` | `#FFF1EC` | coral badge·보조 surface |
| `color.semantic.danger` | `#E5484D` | 오류, 삭제, 파괴적 행동 |
| `color.semantic.success` | `#4F8050` | 성공, 완료 상태 |

### 6.2 Semantic Rules

- 기본 화면은 `background.primary`를 사용해 하나의 canvas처럼 연결한다. section마다 다른 배경색을 반복하지 않는다.
- 제목과 본문은 `text.primary`, 메타 정보는 `text.secondary`를 사용한다.
- `text.muted`는 핵심 정보나 작은 글자의 유일한 색으로 사용하지 않는다.
- Brand Green은 브랜드, Primary CTA, 선택 상태, 수확 정보에 제한적으로 사용한다.
- Harvest Coral은 한 화면의 작은 핵심 포인트에만 사용하며 Green과 경쟁시키지 않는다.
- Danger와 Success는 정확한 상태 표현에만 사용한다.
- 상태는 색만으로 전달하지 않고 항상 텍스트나 아이콘을 함께 제공한다.

### 6.3 Color Constraints

- 화면 전체를 초록색으로 채우지 않는다.
- 한 화면에서 여러 accent color를 경쟁시키지 않는다.
- 카드마다 다른 배경색을 반복하지 않는다.
- 작은 본문에 Coral을 사용하지 않는다.
- 농산물 사진보다 UI 색이 먼저 보이지 않게 한다.
- 텍스트와 배경은 접근 가능한 명도 대비를 유지한다.

---

## 7. Typography

한국어 가독성을 최우선으로 한다. 기본 폰트는 **Pretendard**, 사용할 수 없는 환경에서는 플랫폼 system font를 fallback으로 사용한다.

| Style | Size | Line height | Weight | 용도 |
|---|---:|---:|---|---|
| Display | 28 | 36 | Bold | 브랜드 메시지, 핵심 onboarding 문구 |
| Page Title | 24 | 32 | Bold | 화면 제목 |
| Section Title | 20 | 28 | Bold | 섹션 제목 |
| Card Title | 17 | 24 | SemiBold | 수확물 이름, 카드 제목 |
| Body | 16 | 24 | Regular | 본문, 입력값 |
| Secondary | 14 | 20 | Regular | 거리, 동네, 시간, 보조 설명 |
| Caption | 13 | 18 | Regular | 낮은 우선순위의 짧은 정보 |
| Price | 18–20 | 24–28 | Bold | 가격과 핵심 거래 정보 |
| Button | 16 | 22 | SemiBold | 버튼 label |

### Typography Rules

- Body는 기본 `16px`로 유지한다.
- 모든 글자를 과도하게 키우지 않고 line-height와 여백으로 가독성을 확보한다.
- 핵심 정보에는 Caption을 사용하지 않는다.
- 한 화면에서 font weight를 과도하게 혼용하지 않는다.
- 긴 수확물 이름은 기본 2줄까지 허용하며 의미가 사라지는 말줄임을 피한다.
- 가격과 수량에는 tabular number 사용을 고려한다.
- 시스템 글자 크기 설정을 존중하고 큰 글자에서 내용과 CTA가 잘리지 않게 한다.

---

## 8. Spacing & Layout

4px 기반 spacing system을 사용한다.

| Token | Value | 대표 용도 |
|---|---:|---|
| `space.1` | 4 | 아이콘과 보조 텍스트 |
| `space.2` | 8 | 밀접한 요소 사이 |
| `space.3` | 12 | 카드 내부의 정보 그룹 |
| `space.4` | 16 | 기본 요소 간격, 넓은 카드 padding |
| `space.5` | 20 | 화면 좌우 padding |
| `space.6` | 24 | 큰 콘텐츠 그룹 사이 |
| `space.8` | 32 | 섹션 사이 |
| `space.10` | 40 | 화면 상하의 큰 여백 |

### Layout Rules

- 기본 화면 좌우 padding은 `20px`이다.
- Section 사이는 `28–32px`를 사용한다.
- Card 내부 padding은 `12–16px`를 사용한다.
- 관련 요소는 가깝게, 목적이 다른 요소는 명확히 떨어뜨린다.
- Safe Area를 존중한다.
- 고정 Bottom Navigation과 CTA가 마지막 콘텐츠를 가리지 않게 하단 여백을 확보한다.
- 정보 밀도를 높이기 위해 좌우 padding이나 글자 크기를 줄이지 않는다.
- 큰 화면에서도 콘텐츠가 과도하게 넓어지지 않도록 읽기 폭을 제한한다.

---

## 9. Radius

| Token | Value | 용도 |
|---|---:|---|
| `radius.small` | 8 | 작은 control, tag |
| `radius.medium` | 12 | 입력, 작은 surface |
| `radius.large` | 16 | Card |
| `radius.xl` | 20 | Modal, Bottom Sheet |
| `radius.button` | 14 | Button |
| `radius.image` | 14 | 수확물 Image |

- pill 형태는 Filter, Badge, Tag에만 사용한다.
- 버튼과 카드 등 모든 요소를 pill 형태로 만들지 않는다.
- 같은 surface 안에서 여러 radius를 이유 없이 혼용하지 않는다.

---

## 10. Elevation

한국 모바일 서비스에서 익숙한 평평하고 정돈된 콘텐츠 UI를 기본으로 한다. 단, navigation·overlay처럼 콘텐츠 위에 실제로 떠 있는 interface layer에는 절제된 translucent material을 사용할 수 있다.

Card와 섹션의 구분 수단은 다음 순서로 검토한다.

1. Whitespace
2. Divider
3. Background difference
4. Border
5. Shadow

### Rules

- 카드마다 자동으로 border나 shadow를 추가하지 않는다.
- Shadow는 Bottom Sheet, Modal, 고정 CTA처럼 실제로 떠 있는 요소에만 매우 약하게 사용한다.
- 강한 drop shadow와 neumorphism은 사용하지 않는다.
- elevation은 장식이 아니라 레이어 관계를 설명해야 한다.

### 10.1 Liquid Glass / Translucent Material

Glass는 스타일 자체를 과시하기 위한 장식이 아니라 콘텐츠와 interface layer의 위계를 만드는 수단이다.

사용할 수 있는 곳:

- Floating Bottom Tab Bar
- Floating Control과 일부 Filter Bar
- Modal, Bottom Sheet, Overlay
- 콘텐츠 위에 떠야 하는 제한적인 Header

사용하지 않는 곳:

- Harvest Card 전체
- 모든 Section과 일반 Text Container
- 긴 Form 전체
- 화면 전체 배경

Glass surface는 translucent white, platform blur, 높은 radius, 매우 얇은 white highlight와 border, 약한 shadow를 조합한다. iOS의 native material을 우선하며 Android에서는 성능과 지원 범위를 확인해 native blur 또는 충분한 대비의 반투명 fallback을 사용한다. 단순히 흰색 box의 opacity만 낮춰 glass라고 부르지 않는다. 텍스트와 아이콘의 대비는 배경 이미지와 관계없이 읽을 수 있어야 한다.

---

## 11. Iconography

Lucide 계열처럼 단순하고 둥글며 이해하기 쉬운 일관된 outline icon을 사용한다.

- 기본 icon size: `22–24px`
- 최소 touch area: `44 × 44px`
- 동일한 stroke와 모서리 style을 유지한다.
- 이모지를 navigation 또는 action icon으로 사용하지 않는다.
- 의미가 불분명한 아이콘은 단독 사용하지 않고 한국어 label을 함께 제공한다.
- 아이콘 단독 버튼에는 접근성 label을 반드시 제공한다.
- 장식용 아이콘을 반복해서 정보 밀도를 높이지 않는다.

---

## 12. Navigation

### Bottom Navigation

1. 홈
2. 동네
3. 올리기
4. 채팅
5. 내 텃밭

### Rules

- Bottom Tab Bar는 화면 좌우와 바닥에서 여백을 두고 떠 있는 큰 rounded glass capsule로 만든다.
- 콘텐츠가 tab bar 아래로 자연스럽게 지나가되, 마지막 콘텐츠가 가려지지 않도록 충분한 bottom padding을 둔다.
- translucent material, background blur, 얇은 highlight와 border, 매우 약한 shadow를 사용한다.
- `올리기`는 핵심 행동으로 가운데 배치하고 다른 탭보다 한 단계 강조한다.
- 강조는 tab bar 안의 조금 더 큰 touch area, subtle tinted glass, Brand Green accent처럼 절제된 방식으로 표현한다.
- 거대한 Floating Action Button처럼 과도하게 떠 보이게 만들지 않는다.
- 모든 탭에 icon과 한국어 label을 함께 제공한다.
- 활성 탭은 색상뿐 아니라 weight 또는 형태 차이로도 구분한다.
- 각 탭은 충분한 touch area를 확보한다.
- 화면 제목과 뒤로가기 동작은 한국 사용자가 익숙한 플랫폼 관례를 따른다.

---

## 13. Harvest Card

Harvest Card는 DDAOM의 가장 중요한 UI Component다. 일반적인 `Product Card`가 아니라 **오늘 이웃이 수확한 것을 발견하는 단위**로 정의한다.

### 정보 우선순위

1. 사진
2. 수확물 이름
3. 가격 또는 나눔·교환
4. 수확 시점
5. 거리와 동네
6. 텃밭

### 기본 콘텐츠 예시

```text
방울토마토 한 바구니
3,000원

● 오늘 오전 수확
갈매동 · 800m

순자네 텃밭
```

### 수확 상태 문구

- 방금 수확
- 오늘 수확
- 어제 수확
- 이번 주 수확 예정

`오늘 수확`은 일반 marketplace의 `몇 분 전 등록`보다 높은 위계로 표시한다. 등록 시간은 꼭 필요한 경우에만 보조 정보로 제공한다.

### 거래 형태와 상태

- 거래 형태: `팔아요`, `바꿔요`, `나눠요`
- 거래 상태: `판매중`, `예약중`, `거래완료`

### Layout Rules

- 홈의 기본 Card는 한국 사용자가 빠르게 읽을 수 있는 **가로형 사진 + 정보 구조**를 우선 검토한다.
- 기본 feed에 2열 쇼핑몰 grid를 사용하지 않는다.
- 이미지는 같은 목록에서 `1:1` 또는 `4:3` 중 하나로 통일한다.
- 이름은 `17px SemiBold`, 가격은 `18–20px Bold`를 사용한다.
- 수확 시점은 Soft Green 또는 절제된 Green indicator로 알아보기 쉽게 표현할 수 있다.
- 긴 설명, 판매자 소개 전문, 거래 안내 전문은 Card에 노출하지 않는다.
- Card 전체를 하나의 명확한 touch target으로 만들고 내부 보조 action과 충돌하지 않게 한다.
- 찜이나 더보기 action이 사진, 수확 시점, 가격보다 먼저 보이지 않게 한다.

---

## 14. Image

실제 수확물 사진은 DDAOM의 가장 중요한 visual element다.

- 목록 비율: `1:1` 또는 `4:3`
- 상세 비율: `4:3`
- 같은 목록에서는 비율과 crop 기준을 통일한다.
- 자연스러운 실제 사진을 우선하고 과도하게 보정된 stock image 느낌을 피한다.
- 사진 위에 가격, 긴 설명, 여러 badge를 과도하게 overlay하지 않는다.
- 사진의 핵심 대상이 잘리지 않도록 crop 위치를 조정한다.
- 이미지가 없거나 로드되지 않을 때 neutral placeholder와 명확한 대체 상태를 제공한다.
- 여러 장일 때 현재 위치와 전체 장수를 알 수 있게 한다.

---

## 15. Transaction Type & Badge

DDAOM의 모든 수확물이 판매 상품일 필요는 없다. 세 가지 거래 형태를 같은 서비스 안에서 동등하게 제공한다.

### 사용자 표현

- `팔아요`
- `바꿔요`
- `나눠요`

내부 enum이나 `sale`, `exchange`, `giveaway` 같은 commerce 용어를 사용자에게 노출하지 않는다.

### Badge Style

- `팔아요`: Soft Green surface + 충분히 진한 Green text
- `바꿔요`: neutral surface + Primary Text
- `나눠요`: Soft Coral surface + Primary Text
- `판매중`: 활성 상태가 명확한 style
- `예약중`: Soft Coral 또는 warm neutral style
- `거래완료`: 낮은 강조의 neutral style

### Badge Rules

- 색만으로 의미를 전달하지 않고 label을 항상 표시한다.
- 한 Card에는 판단에 필요한 badge만 노출한다.
- 거래 형태와 거래 상태가 혼동되지 않게 위치 또는 형태를 구분한다.
- 짧은 한글 명사형 또는 서술형으로 한 줄을 유지한다.

---

## 16. Upload UX

수확물 등록은 DDAOM의 핵심 UX다. 핵심 판매자가 50~60대라는 점을 고려해 일반 중고거래 앱보다도 단순한 등록 경험을 목표로 한다.

### 기본 흐름

1. 사진
2. 무엇을 수확했는지
3. 팔기·바꾸기·나누기
4. 가격 또는 원하는 교환
5. 언제 수확했는지
6. 거래 장소
7. 내용 확인 및 등록

### Rules

- 한 화면에 긴 form 전체를 노출하지 않는다.
- 필요하면 단계별 flow를 사용하고 현재 단계와 남은 과정을 명확히 보여준다.
- 설명 작성은 선택사항으로 고려한다.
- 작은 checkbox나 radio보다 큰 button 또는 selection card를 우선한다.
- 필수와 선택 항목을 분명히 구분한다.
- 이전 단계로 돌아가도 입력 내용이 유지되어야 한다.
- 마지막 단계에서는 실제 게시물에 가까운 preview로 확인하게 한다.
- 오류는 해당 입력 근처에서 쉬운 한국어로 설명한다.
- 완료 CTA는 `등록`보다 `수확물 올리기`처럼 결과가 드러나는 문구를 쓴다.

---

## 17. Detail Screen

### 정보 위계

1. 수확물 사진
2. 수확물 이름과 가격 또는 거래 형태
3. 수확 시점
4. 거리와 동네
5. 판매자 텃밭
6. 수확물 설명
7. 거래 장소와 방법
8. 하단 CTA

### 하단 CTA 예시

```text
♡        채팅하기        3,000원 예약하기
```

### Rules

- CTA 영역은 화면 하단에서 쉽게 접근할 수 있게 한다.
- 사진 위에 정보를 과도하게 overlay하지 않는다.
- 수확 시점과 거리는 가격 다음의 핵심 판단 정보로 명확하게 보여준다.
- 텃밭 영역은 신뢰와 재방문을 만드는 독립된 진입점으로 제공한다.
- 고정 CTA가 본문과 Safe Area를 가리지 않게 한다.
- 향후 예약과 결제가 추가될 수 있도록 CTA 영역은 action과 상태가 확장 가능한 구조로 설계한다.
- 현재 단계에서는 예약과 결제 기능을 구현하지 않는다.

---

## 18. Garden Identity

DDAOM에서 판매자 profile은 단순한 개인 계정이 아니라 **텃밭 identity**다.

### 표현할 정보

- 텃밭 이름
- 동네
- 소개
- 키우는 작물
- 단골 수
- 거래 수
- 현재 수확물
- 지난 수확
- 후기

### Rules

- 사용자는 사람뿐 아니라 좋아하는 텃밭을 `단골`로 등록할 수 있다.
- 이름과 동네를 먼저 보여주고, 숫자 지표가 사람보다 앞서지 않게 한다.
- 현재 수확물과 지난 수확을 구분해 텃밭의 활동과 신뢰를 보여준다.
- 후기와 거래 수는 신뢰를 돕되 경쟁적 ranking처럼 표현하지 않는다.
- 향후 `순자네 텃밭에서 방울토마토를 수확했어요` 같은 다음 수확 알림으로 연결될 수 있는 구조를 고려한다.

---

## 19. Buttons

### Primary Button

- Height: `52–54px`
- Background: `color.brand.green`
- Pressed: `color.brand.greenPressed`
- Text: White, `16px SemiBold`
- Radius: `14px`

### Secondary Button

- Height: `52px`
- Background: White
- Border: `1px solid color.border`
- Text: `color.text.primary`, `16px SemiBold`
- Radius: `14px`

### Destructive Button

- Color: `color.semantic.danger`
- 삭제, 탈퇴, 거래 취소처럼 되돌리기 어려운 행동에만 사용한다.
- 항상 Primary와 같은 시각적 비중을 줄 필요는 없다.

### Button Rules

- 주요 버튼은 한 손으로 쉽게 누를 수 있는 크기와 위치를 확보한다.
- 한 화면에 같은 우선순위의 Primary Button을 여러 개 두지 않는다.
- `확인`보다 `수확물 올리기`, `교환 제안 보내기`처럼 결과가 드러나는 label을 쓴다.
- 로딩 중에는 중복 입력을 막고 진행 상태를 알린다.
- 비활성 상태에는 가능한 경우 이유를 주변 문구로 설명한다.

---

## 20. Form Controls

- Input height: 최소 `52px`
- Touch target: 최소 `44 × 44px`
- Label은 입력 전후에 유지하며 placeholder만으로 항목을 설명하지 않는다.
- 기본 Input은 White surface와 `1px` border를 사용한다.
- Focus 상태는 Green border 등 절제된 방식으로 명확히 표시한다.
- 단위가 있는 값은 `원`, `kg`, `개`를 놓치지 않게 보여준다.
- 거래 형태나 수량처럼 선택지가 적은 항목은 작은 dropdown보다 큰 선택 버튼을 우선한다.

### Placeholder Examples

| Label | Placeholder |
|---|---|
| 수확물 이름 | `예: 방울토마토` |
| 가격 | `예: 3,000원` |

오류 메시지는 입력 항목 가까이에 쉬운 한국어로 원인과 해결 방법을 표시한다.

---

## 21. Future Payment UX

현재 결제를 구현하지 않지만 향후 다음 흐름이 들어갈 수 있음을 구조적으로 고려한다.

`수확물 → 예약 → 결제 → 거래 예약 → 직거래 또는 수령 → 거래 완료 → 판매자 정산`

### 확장 가능한 상태

- 판매중
- 예약중
- 결제완료
- 거래완료
- 정산완료

### Design Rules

- 사용자는 항상 현재 상태와 다음 행동을 알 수 있어야 한다.
- 상태명은 색만으로 구분하지 않고 한글 label로 표시한다.
- 돈과 관련된 화면은 감성적 표현보다 금액, 대상, 시점, 취소 조건을 정확히 표시한다.
- 기존 `예약중`, `거래완료`와 향후 상태가 같은 상태 체계 안에서 확장될 수 있어야 한다.
- 이 문서는 정보 구조의 확장성만 규정하며 결제 기능 자체는 구현하지 않는다.

---

## 22. Feedback, Empty State & Overlay

### Feedback

- 성공 메시지는 완료된 일과 다음 행동을 함께 알린다.
- 오류 메시지는 가능한 범위에서 원인과 해결 방법을 알려준다.
- loading 중에는 중복 action을 막고 진행 중임을 표시한다.
- Skeleton은 실제 콘텐츠 구조와 유사하게 만들고 과도한 animation을 피한다.

### Empty State

- 장식보다 현재 상태와 시작 action을 먼저 보여준다.
- 브랜드 바구니 심볼은 일부 대표 empty state에만 제한적으로 사용한다.
- `데이터 없음` 같은 시스템 문구 대신 사용자가 이해할 수 있는 문장을 쓴다.

### Bottom Sheet & Modal

- 간단한 선택은 Bottom Sheet를 우선 검토한다.
- 중요한 확인과 집중이 필요한 내용은 Modal을 사용한다.
- Bottom Sheet와 Modal은 콘텐츠 위에 떠 있는 layer이므로 가독성이 확보되는 범위에서 translucent material을 사용할 수 있다.
- 제목, 설명, action의 순서가 명확해야 하며 닫는 방법을 숨기지 않는다.
- 파괴적 action은 대상과 결과를 구체적으로 설명한다.
- 큰 글자와 작은 화면에서도 내용이 스크롤되고 주요 action이 보이게 한다.

---

## 23. UX Writing

한국 서비스에서 자연스럽고 존중하는 높임말을 사용한다. 친근함은 유지하되 모든 문구를 감성적으로 만들지는 않는다.

### Voice Principles

- 짧고 쉬운 한국어를 쓴다.
- 내부 enum, 전문 용어, 불필요한 영어를 노출하지 않는다.
- 사용자를 탓하지 않는다.
- 버튼은 행동 결과가 예상되는 동사형으로 쓴다.
- 거리와 수확 시점은 빠르게 이해되는 표현을 사용한다.
- 결제, 신고, 오류, 거래 상태처럼 정확성이 중요한 곳에서는 명료함을 우선한다.

### 권장 문구

- `무엇을 따오셨나요?`
- `어떻게 하실까요?`
- `오늘 따오셨나요?`
- `이웃에게 나눠볼까요?`
- `수확물을 올렸어요.`
- `아직 가까운 수확물이 없어요.`
- `연결이 원활하지 않아요. 잠시 후 다시 시도해 주세요.`

### 피하는 문구

- `상품을 등록하세요.`
- `판매 유형을 선택하세요.`
- `Transaction completed.`
- `데이터 없음`
- `Error 500`

---

## 24. Accessibility

50~60대 사용자를 위한 배려는 앱 전체의 기본 품질로 적용하며, 시니어 전용 visual style로 표현하지 않는다.

- 모든 touch target은 최소 `44 × 44px`를 유지한다.
- Body는 기본 `16px`이며 핵심 정보를 작은 회색 Caption으로 처리하지 않는다.
- 낮은 contrast를 사용하지 않는다.
- 중요한 action을 icon만으로 표현하지 않는다.
- 긴 form과 지나치게 많은 선택지를 피한다.
- 시스템 글자 크기 확대와 화면 확대를 고려한다.
- 큰 글자에서도 label과 CTA가 잘리거나 겹치지 않게 한다.
- 색상 외에 text, icon, shape을 함께 사용해 상태를 전달한다.
- Screen Reader용 label, role, hint를 의미에 맞게 제공한다.
- focus 순서는 시각적 읽기 순서와 일치시킨다.
- motion 감소 설정을 존중한다.
- 햅틱은 중요한 완료나 오류의 보조 피드백으로만 사용한다.

---

## 25. Motion

- 전환은 빠르고 자연스러우며 상태 변화를 이해시키는 경우에만 사용한다.
- button pressed, 단계 이동, 항목 추가처럼 action과 결과의 연결을 설명한다.
- 장식 목적의 반복 animation을 사용하지 않는다.
- 긴 spring, 과도한 bounce, 시선을 빼앗는 parallax를 피한다.
- loading animation은 단순하게 유지한다.
- 시스템의 motion 감소 설정을 존중한다.

---

## 26. Avoid

다음 표현은 사용하지 않는다.

- 화면 전체 또는 모든 카드에 반복되는 glass
- 가독성을 해치는 지나친 transparency와 blur
- glass 자체가 콘텐츠보다 먼저 보이는 장식적 glassmorphism
- neumorphism
- excessive gradient
- rainbow gradient, neon, cyberpunk, excessive glow
- 큰 floating orb와 의미 없는 decorative gradient
- 과도하거나 강한 shadow
- 농촌풍 visual
- 나무 texture
- 종이 texture
- 잎사귀 decoration 남용
- 화면 전체를 채우는 Green
- emoji 기반 interface
- 복잡한 dashboard
- 쇼핑몰식 빽빽한 grid
- 할인율·쿠폰 중심 UI
- 지나치게 작은 typography
- 과도한 animation
- 불필요한 card nesting
- 관리자 페이지 같은 디자인
- 의미 없이 크게 떠 있는 Floating Action Button
- 여러 accent color가 경쟁하는 화면

---

## 27. Screen Decision Checklist

새 화면을 설계하거나 구현한 뒤 아래 기준을 확인한다.

### Product Identity

- [ ] “농산물을 사러 왔다”보다 “오늘 우리 동네에는 뭐가 따였지?”라는 느낌이 드는가?
- [ ] 수확 시점, 동네, 텃밭, 거래 형태가 일반 commerce 정보보다 먼저 보이는가?
- [ ] 할인, 쿠폰, 배송 정보가 불필요하게 중심을 차지하지 않는가?
- [ ] 특정 국내 앱의 복제품처럼 보이지 않는가?

### Information Hierarchy

- [ ] 화면 목적과 가장 중요한 action을 진입 직후 이해할 수 있는가?
- [ ] 사용자가 다음 행동을 추측하지 않아도 되는가?
- [ ] 수확물 사진과 핵심 정보가 장식보다 먼저 보이는가?
- [ ] 불필요한 설명과 card nesting을 제거했는가?

### Readability & Interaction

- [ ] Body는 기본 16px 이상인가?
- [ ] 모든 touch target이 최소 44 × 44px인가?
- [ ] text contrast가 충분한가?
- [ ] 큰 글자에서도 내용과 CTA가 잘리지 않는가?
- [ ] 의미가 불분명한 icon-only action이 없는가?
- [ ] 긴 form이나 한 화면의 과도한 선택지가 없는가?

### Visual Consistency

- [ ] Color, typography, spacing, radius token을 따르는가?
- [ ] Green과 Coral이 제한적으로 사용되었는가?
- [ ] 사진 비율과 crop 방식이 같은 목록 안에서 일관적인가?
- [ ] Card는 우선 whitespace와 divider로 구분했는가?
- [ ] 상태가 색뿐 아니라 한국어 label로도 명확한가?

### Transaction & Trust

- [ ] `팔아요`, `바꿔요`, `나눠요`를 자연스러운 한국어로 보여주는가?
- [ ] 거래 상태와 다음 행동을 쉽게 이해할 수 있는가?
- [ ] 거리, 동네, 텃밭 정보가 신뢰 형성에 충분한가?
- [ ] 파괴적이거나 금전적인 action의 결과가 명확한가?

---

## 28. Final Design Principle

DDAOM의 UI는 “농산물 판매 앱”보다 **“오늘 우리 동네에 뭐가 따였지?”**라는 느낌을 먼저 전달해야 한다.

한국 사용자에게 익숙하고, 식품 사진은 깔끔하고 매력적으로 보이며, 거래 과정은 자연스러워야 한다. 동시에 어떤 기존 앱의 복제품도 아니어야 한다. 첫인상은 “글래스모피즘 앱”이 아니라 **“잘 만든 최신 iPhone 앱”**이어야 하며, glass는 콘텐츠와 navigation hierarchy를 만드는 조용한 수단으로만 사용한다.

DDAOM을 구별하는 핵심은 다음 네 가지다.

> **수확 시점 + 동네 + 텃밭 + 판매·교환·나눔**

모든 디자인 결정은 이 네 가지를 더 잘 발견하고 이해하고 신뢰하게 만드는지로 판단한다.
