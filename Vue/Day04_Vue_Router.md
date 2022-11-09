# 2022. 11. 09.

# UX & UI

> 개요

- 우리는 비슷한 것끼리 묶거나 내용을 구성해서 인지하는 것이 편하다는 것을 알고 있다. 만약 그렇지 않을 경우 불편하다는 느낌을 받거나 의사결정을 하는데 많은 시간이 걸리기도 한다.

- 단순한 느낌이나 심미적인 부분만 고려하는 것이 아닌 `체계적인 설계를 통해 기획해야 한다`.

> UX(User Experience)

- 유저와 가장 가까이에 있는 분야, 데이터를 기반으로 유저를 조사하고 분석해서 개발자, 디자이너가 이해할 수 있게 소통

- 유저가 느끼는 `느낌, 태도 그리고 행동`을 디자인

- 좋은 UX를 설계하기 위해서는
  - 유저 리서치, 데이터 설계 및 정제, 유저 시나리오, 프로토타입 설계 등이 필요

> UI(User Interface)

- 유저에게 보여지는 `화면`을 디자인

- `UX를 고려한 디자인`을 반영, 이 과정에서 기능 개선 혹은 추가가 필요한 경우 Front-end 개발자와 가장 많이 소통

> Interface

- 서로 다른 두 개의 시스템, 장치 사이에서 정보나 신호를 주고받은 경우의 접점
  - 즉, 사용자가 기기를 쉽게 동작 시키는데 도움을 주는 시스템

- ex) CLI(Command Line Interface), GUI(Graphic User Interface)

- 좋은 UI를 설계를 위해서는
  - 심미적인 부분만 중요하다기보다는 사용자가 보다 쉽고 편리하게 사용할 수 있도록 고려해야 함
  - UI 디자인에 있어 가장 중요한 것은 `협업`

---

## Prototyping

> Software prototyping

- 애플리케이션의 프로토타입을 만드는 것

- 개발 중인 소프트웨어 프로그램의 완성되기 전 버전을 만드는 것

> Figma

- 웹 기반 시스템을 가짐 (웹 환경에서 동작)

- 실시간으로 팀원들이 협업할 수 있는 기능을 제공

- Figma 사용자들이 만든 다양한 플러그인이 존재(VScode 확장 프로그램 등)

- 대부분의 기능이 무료

> 프로젝트를 시작하기 전에...

- 개발부터 시작하지 말고 반드시 `충분한 기획`을 거칠 것

- 우리가 완성하고자 하는 대략적인 모습을 그려보는 과정이 필요(프로토타입)

> 프로젝트와 협업

- 어떻게 효과적으로 잘 협업할 수 있는지 다양한 방법과 도구를 찾아보고 학습하며 여러 프로젝트를 경험하는 과정이 반드시 필요

---

# Vue Router

## Routing

> Routing

- 네트워크에서 경로를 선택하는 프로세스

- 웹 서비스에서의 라우팅
  - 유저가 방문한 URL에 대해 적절한 결과를 응답하는 것

- ex) /articles/index/에 접근하면 게시판의 index에 대한 결과를 보내줌

> Routing in SSR

- Server가 모든 라우팅을 통제

- URL로 요청이 들어오면 응답으로 완성된 HTML 제공
  - Django로 보낸 요청의 응답 HTML은 완성본인 상태였음

- 결론적으로, Routing(URL)에 대한 결정권을 서버가 가짐

- 서버는 하나의 HTML(index.html)만 제공

- 이후에 모든 동작은 하나의 HTML 문서 위에서 JavaScript코드를 활용
  - DOM을 구리는데 필요한 추가적인 데이터가 있다면 axios와 같은 AJAX 요청을 보낼 수 있는 도구를 사용하여 데이터를 가져오고 처리

- 즉, `하나의 URL만 가질 수 있음`

> Why routing

- 동작에 따라 URL이 반드시 바뀌어야 하나?
  - 유저의 사용성 관점에서는 필요하지만, 항상 그렇지는 않다.

- Routing이 없다면?
  - 유저가 URL을 통한 페이지의 변화를 감지할 수 없음
  - 페이지가 무엇을 렌더링 중인지에 대한 상태를 알 수 없음
  - 새로고침시 처음 페이지로 돌아감
  - 링크를 공유할 시 처음 페이지만 공유 가능
  - 브라우저의 뒤로가기 사용 불가

> Vue Router

- SPA 상에서 라우팅을 쉽게 개발할 수 있는 기능을 제공

- 라우트(routes)에 컴포넌트를 매핑한 후, 어떤 URL에서 렌더링 할지 알려줌
  - SPA를 MPA(Mutliple Page Applictaion)처럼 URL을 이동하면서 사용 가능
  - SPA의 단점 중 하나인 `"URL이 변경되지 않는다."`를 해결

> Vue Router 시작하기

```
$ vue create vue-router-app

$ cd vue-router-app

$ vue add router
```

![image](https://user-images.githubusercontent.com/109258306/200708770-c8349686-b92a-4f12-bbce-e5c0ded52f19.png)

- history mode 사용여부 -> Yes

> History mode

- 브라우저의 History API를 활용한 방식
  - 새로고침 없이 URL 이동 기록을 남길 수 있음
- 우리에게 익숙한 URL 구조로 사용 가능
  - http://localhost:8000`/index`

- 참고) History mode를 사용하지 않으면 Default 값인 **hash mode**로 설정됨('#'을 통해 URL을 구분하는 방식)
  - http://localhost:8000`#index`

> router-link

- a 태그와 비슷한 기능 -> URL을 이동시킴
  - routes에 등록된 컴포넌트와 매핑됨
  - 히스토리 모드에서 router-link는 `클릭 이벤트를 차단`하여 a태그와 달리 브라우저가 페이지를 다시 로드하지 않도록 함

- 목표 경로는 `to` 속성으로 지정됨

- 기능에 맞게 HTML에서 a태그로 rendering되지만, 필요에 따라 다른 태그로 바꿀 수 있음

> router-view

- 주어진 URL에 대해 일치하는 컴포넌트를 렌더링하는 컴포넌트

- 실제 component가 DOM에 부착되어 보이는 자리를 의미

- rounter-link를 클릭하면 routes에 매핑된 컴포넌트를 렌더링

- Django에서의 block tag와 비슷함
  - `App.vue는 base.html`의 역할
  - `router-view는 block 태그로 감싼 부분`

> src/Views

- router-view에 들어갈 component 작성

- 기존 컴포넌트를 작성하던 곳은 components 폴더 뿐었지만 이제 두 폴더로 나누어짐

- 각 폴더 안의 .vue 파일들이 기능적으로 다른 것은 아님

> 컴포넌트 배치를 이제 다음과 같이 진행(규약은 아님)

- views/
  - routes에 매핑되는 컴포넌트, 즉 \<router-view>의 위치에 렌더링 되는 컴포넌트를 모아두는 풀더
  - 다른 컴포넌트와 구분하기 위해 View로 끝나도록 만드는 것을 권장
  - ex) App 컴포넌트 내부의 AboutView & HomeView 컴포넌트

- components/
  - routes에 매핑된 컴포넌트의 하위 컴포넌트를 모두 모아두는 폴더
  - ex) HomeView 컴포넌트 내부의 HelloWorld 컴포넌트

---

## Vue Router 실습

> 주소를 이동하는 2가지 방법

1. 선언적 방식 네비게이션
2. 프로그래밍 방식 네비게이션

> 선언적 방식 네비게이션

![image](https://user-images.githubusercontent.com/109258306/200714335-a93bfc19-708e-4f5b-84b9-af7baf146728.png)

- router-link의 `to` 속성으로 주소 전달
  - routes에 등록된 주소와 매핑된 컴포넌트로 이동

> Named Routes

![image](https://user-images.githubusercontent.com/109258306/200714846-6d6ad583-ca01-4345-9c28-945a1e88a75b.png)

- 이름을 가지는 routes
  - Django에서 path 함수의 name 인자의 활용과 같은 방식

- 동적인 값을 사용하기 때문에 v-bind를 사용해야 정상적으로 작동

> 프로그래밍 방식 네비게이션

- Vue 인스턴스 내부에서 라우너 인스턴스에 `$router`로 접근 할 수 있음

- 다른 URL로 이동하려면 `this.$router.push`를 사용
  - history stack에 이동할 URL을 넣는(push)방식
  - history stack에 기록이 남기 때문에 사용자가 브라우저의 뒤로가기 버튼을 클릭하면 이전 URL로 이동할 수 있음

- 결국 \<router-link :to="...">를 클릭하는 것과 $router.push(...)를 호출하는 것은 같은 동작

> Dynamic Route Matching

- URL의 특정 값을 변수처럼 사용할 수 있음 
  - Django의 varialbe routing과 비슷

> lazy-loading

- 모든 파일을 한 번에 로드하려고 하면 모든 걸 다 읽는 시간이 매우 오래걸림

- 미리 로드를 하지 않고 특정 라우트에 방문할 때 매핑된 컴포넌트의 코드를 로드하는 방식을 활용가능
  - 모든 파일을 한 번에 로드하지 않아도 되기 때문에 최초에 로드하는 시간이 빨라짐
  - 당장 사용하지 않을 컴포넌트는 먼저 로드하지 않는 것이 핵심

---

## Navigation Guard

> 네비게이션 가드

- Vue router를 통해 특정 URL에 접근할 때 다른 ulr로 redirect하거나 해당 URL로의 접근을 막는 방법
  - ex) 사용자의 인증정보가 없다면 로그인 페이지로 redirect

> 네비게이션 가드의 종류

- 전역 가드 : 애플리케이션 전역에서 동작

- 라우터 가드 : 특정 URL에서만 동작

- 컴포넌트 가드 : 라우터 컴포넌트 안에 정의

> Global Before Guard

- 다른 url 주소로 이동할 때 항상 실행

- router/index.js에 `router.beforeEach()`를 사용하여 설정

- 콜백 함수의 값으로 3개의 안지랄 받음
  - **to** : 이동할 URL 정보가 담긴 Route 객체
  - **from** : 현재 URL 정보가 담긴 Route 객체
  - **next** : 지정한 URL로 이동하기 위해 호출하는 함수

- URL이 변경되어 화면이 전환되기 전 router.beforeEach()가 호출됨
  - 화면이 전환되지 않고 대기 상태가 됨

- 변경된 URL로 라우팅하기 위해서는 next()를 호출해줘야 함
  - `next()가 호출되기 전까지 화면이 전환되지 않음`

---

## 라우터 가드

> 라우터 가드

- 전체 route가 아닌 특정 route에 대해서만 가드를 설정하고 싶을 때 사용

- beforEnter()
  - route에 진빙했을 때 실행
  - 라우터를 등록한 위치에 추가
  - 단 매개변수, 쿼리, 해시 값이 변경될 때는 실행되지 않고 다른 경로에서 탐색할 때만 실행됨
  - 콜백함수는 to, from, next를 인자로 받음

---

## 컴포넌트 가드

> Params 변화 감지

- 변화를 감지하지 못하는 이유
  - 컴포넌트가 재사용되었기 떄문
  - 기존 컴포넌트를 지우고 새로 만드는 것보다 효율적

- `beforeRouteUpdate()`를 사용해서 처리
  - userName을 이동할 params에 있는 userName으로 재할당

---

## 404 Not Found

> 404 Not Found

- 사용자가 요청한 리소스가 존재하지 않을 때 응답

> 형식은 유효하지만 특정 리소스를 찾을 수 없는 경우

- ex) Django에게 articles/1/로 요청을 보냈지만, 1번 게시글이 삭제된 상태
  - 이때는 path: '*'를 만나 404page가 렌더링 되는 것이 아니라 기존에 명시간 articles/:id/에 대한 components가 렌더링됨
  - 하지만 데이터가 존재하지 않기 때문에 정상적으로 렌더링이 되지 않음

- 해결책
  - 데이터가 없음을 명시
  - 404 page로 이동

---

# Articles with Vue

> 개요

- 지금까지 배운 내용들을 종합하여 Django에서 만들었던 게시판 만들기

- 구현 기능
  - Index
  - Create
  - Detail
  - Delete
  - 404

> Optional chaining(`?.`)

- Optional chaining(`?.`)앞의 평가 대상이 undefined나 null이면 에러가 발생하지 않고 undefined를 반환(ES2020에서 추가된 문법)
