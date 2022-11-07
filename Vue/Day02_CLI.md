# 2022. 11. 02.

## Node.js

> Node.js

- 자바스크립트는 브라우저를 조작하는 유일한 언어
  - 하지만 브라우저 밖에서는 구동할 수 없었음

- 자바스크립트를 구동하기 위한 런타임 환경인 Node.js로 인해 브라우저가 아닌 환경에서도 구동할 수 있게 됨
  - Chrome V8 엔진을 제공하여 여러 OS환경에서 실행할 수 있는 환경을 제공
  - Browser만 조작이 가능했으나, Server-side-programming이 가능해짐

> NPM(Node Package Manage)

- 자바스크립트 패키지 관리자
  - Python의 pip, Node.js의 npm

> Vue CLI

- Vue 개발을 위한 표준 도구   

- 프로젝트의 구성을 도와주는 역할

- 확장 플러그인, GUI, Babel등 다양한 tool 제공

> Vue CLI Quick Start

- 설치
  
```
$ npm install -g @vue/cli
```

- `프로젝트` 생성(`vscode 터미널에서` 진행)

```
$ vue create vue-cli
```

---

## Vue CLI 프로젝트 구조

> node_modules - `Babel`

- 자바스크립트의 ES6+ 코드를 구버전으로 번역/변환 해주는 도구

- 자바스크립트의 파편화, 표준화의 영향으로 작성된 코드의 스펙트럼이 매우 다양
  - 최신 문법을 사용해도 브라우저의 버전 별로 동작하지 않는 상황이 발생
  - 버전마다 다른 코드를 사용해야하는 문제를 해결하기 위한 코드
  - 원시 코드(최신 버전)를 목적 코드(구 버전)으로 옮기는 번역기가 등장

> node_modules - `Webpack`

- "staic module bundler"

- 모듈 간의 의존성 문제를 해결하기 위한 도구

- 프로젝트에 필요한 모든 모듈을 매핑하고 내부적으로 종속성 그래프를 빌드함

> `Module`

- 개발하는 애플리케이션의 크기가 커지고 복잡해지면 파일 하나에 모든 기능을 담기가 어려워짐

- 파일을 여러 개로 분리하여 관리를 하게 되었고, 이때 분리된 파일 각각이 module 즉, js파일 하나가 하나의 모듈

- 모듈은 대개 기능 단위로 분리하며, 클래스 하나 혹은 특정한 목적을 가진 복수의 함수로 구성된 라이브러리 하나로 구분됨

> Module 의존성 문제

- 모듈의 수가 많아지고 라이브러리 혹은 모듈 간의 의존성(연결성)이 깊어지면서 특정한 곳에서 발생한 문제가 어떤 모듈 간의 문제인지 파악하기 어려움
  - Webpack은 이 모듈 간의 의존성 문제를 해결하기 위해 등장

> `Bundler`

- 모듈 의존성 문제를 해결해주는 작업이 번들링

- 이러한 일을 해주는 도구가 Bundler이고, Webpack은 다양한 Bundler중 하나

- Bundling된 결과물은 개별 모듈의 실행 순서에 영향을 받지 않고 동작하게 됨

- Vue CLI는 이러한 `Babel, Webpack에 대한 초기 설정이 자동으로 완료`되어 있음.

> pacakage.json

- 프로젝트의 종속성 목록과 지원되는 브라우저에 대한 구성 옵션을 포함

> package-lock.json

- node_modules에 섳리되는 모듈과 관련된 모든 의존성을 설정 및 관리

- 협업 및 배포 환경에서 정확히 동일한 종속성을 설치하도록 보장하는 표현

- 개발 과정 간의 의존성 패키지 충돌 방지

- python의 requirements.txt의 역할

> src

- src/assets : 정적 파일을 저장하는 디렉토리

- src/components : 하위 컴포넌트들이 위치

- src/App.vue : 최상위 컴포넌트. public/index.html과 연결됨

- src/main.js
  - webpack이 빌드를 시작할 때 가장 먼저 불러오는 entry point
  - public/index.html과 scr/App.vue를 연결시키는 작업이 이루어지는 곳
  - Vue 전역에서 활용 할 모듈을 등록할 수 있는 파일

---

## Component

> Component

- UI를 독립적이고 재사용 가능한 조각들로 나눈 것
  - 즉. 기능별로 분화한 코드 조각

- CS에서는 다시 사용할 수 있는 범용성을 위해 개발된 소프트웨어 구성 요소를 의미

- Body tag를 root node로 하는 tree의 구조이다.

- Vue에서는 `scr/App.vue를 root node`로 하는 `트리구조`를 가진다.

- 컴포넌트는 유지보수를 쉽게 만들어주며, 재사용성의 측면에서도 매우 강력한 기능을 제공

> Django에서의 예시

- base.html과 index.html을 분리하여 작성하였지만, 하나의 화면으로 볼 수 있다. 즉, 한 화면은 여러개의 컴포넌트로 이루어 질 수 있음

- base.html을 변경하면 이를 extends하는 모든 화면에 영향을 미침 -> 유지보수가 쉬워짐

> Component based architecture의 특징

- 관리가 용이, 유지 보수 비용이 감소

- 재사용성

- 확장성

- 캡슐화

- 독립적

---

## SFC

> component in Vue

- Vue에서 말하는 component란 무엇일까?
  - Vue instance : new Vue()로 만든 인스턴스

> SFC (Single File Component)

- 하나의 `.vue`파일이 하나의 `Vue instance`이고, 하나의 `컴포넌트`이다.

- Vue instance에서는 HTML, CSS, JavaScript 코드를 한번에 관리
  - 이 Vue instance를 기능 단위로 작성하는 것이 핵심!

> 정리

- HTML, CSS, JavaScript를 .vue라는 확장자를 가진 파일 안에서 관리하며 개발

- 이 파일을 Vue instance, 또는 vue component라고 하며, 기능 단위로 작성

---

## Vue component 구조

- 템플릿(HTML)
  - HTML의 body 부분
  - 눈으로 보여지는 요소 작성
  - 다른 컴포넌트를 HTML 요소처럼 추가 가능

- 스크립트(JavaScript)
  - JavaScript 코드가 작성되는 곳
  - 컴포넌트 정보, 데이터, 메서드 등 vue 인스턴스를 구성하는 대부분이 작성됨

> Vue component 구조 정리

- 컴포넌트들이 tree 구조를 이루어 하나의 페이지를 만듦

- root에 해당하는 최상단의 component가 App.vue

- 이 App.vue를 index.html과 연결

- 결국 index.html 파일 하나만을 rendering => 이것이 SPA

---

## Vue component 실습

> MyComponent.vue

1. scr/components/안에 생성
2. script에 이름 등록
3. template에 요소 추가

- `주의!` template 안에는 반드시 하나의 요소만 추가 가능
  - 비어 있어도 안됨
  - 해당 요소 안에 추가의 요소를 작성해야 함

> Component 등록 3단계(`외울 것`)

1. 불러오기
2. 등록하기
3. 보여주기

```html
<template>
  <div class="border">
    <h1>무 야 호 ~</h1>
    <!-- 3. 보여주기 -->
    <MyComponentItem />
  </div>
</template>

<script>
// 1. 불러오기
// "@"는 ./scr를 축약한 표현
// 맨 뒤의 확장자명 .vue도 생략
import MyComponentItem from "@/components/MyComponentItem";

export default {
  name: "MyComponent",
  // 2. 등록하기
  components: {
    MyComponentItem,
  },
};
</script>

<style>
.border {
  border: solid 1px black;
}
</style>
```

---

## Data in components

> Data in components

- 우리는 정적 웹 페이지가 아니라, 동적 웹 페이지를 만들고 있음

- 한 페이지 내에서 같은 데이터를 공유해야하지만, 페이지들은 component로 구분 되어 있음

- 하위 component에서도 똑같은 data를 정의
  - 부모 컴포넌트의 data와 자식 컴포넌트의 데이터가 동일한 data가 맞는가?
  - 부모 컴포넌트의 datar가 변경된다면 자식 컴포넌트도 같이 변경될까? => 아님
  - 그렇다면 완전히 동일한 data를 서로 다른 Component에서 보여주려면?

- Component는 부모-자식 관계를 가지고 있으므로, 부모-자식 끼리만 데이터를 주고받게 하자!
  - 데이터 흐름을 파악하기 용이
  - 유지 보수가 쉬워짐

> pass props & emit event

- pass `props` 방식 : `부모 => 자식`으로의 데이터 흐름

- `emit` event 방식 : `자식 => 부모`로의 데이터 흐름

---

## Pass Props

> Pass Props

- 요소의 속성(property)을 사용하여 데이터 전달

- props는 부모(상위) 컴포넌트의 정보를 전달하기 위한 사용자 지정 특성

- 자식 컴포넌트는 props 옵션을 사용하여 수신하는 props를 명시적으로 선언해야 함

- Prop 명시

- 데이터를 받은 쪽, 즉 하위 컴포넌트에서도 props에 대해 명시적으로 작성 해주어야 함

- 전달받은 props를 type과 함께 명시

```html
<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>
```

> MyComponent ro MyChild

- MyComponent.vue
  
![image](https://user-images.githubusercontent.com/109258306/199406567-068236a1-1c90-412e-826d-786b474e8837.png)

- MyChild.vue

![image](https://user-images.githubusercontent.com/109258306/199406750-a48f1bd7-8865-444b-9751-aa9ed0989a92.png)

> Pass Props convention

- `부모에서 넘겨`주는 props
  - `kebab-case`(HTML 속섬영은 대소문자를 구분하지 않기 때문)

- `자식에서 받`는 props
  - `camelCase`

- 부모 템플릿(html)에서 kebab-case로 넘긴 변수를 자식의 스크립트(vue)에서 자동으로 CamelCase로 변환하여 인식

> Dynamic props

- 변수를 props로 전달할 수 있음

- `v-bind` directive를 사용해 데이터를 `동적으로 바인딩`

- 부모 컴포넌트의 데이터가 업데이트 => 자식의 컴포넌트로 전달되는 데이터 또한 업데이트

> 컴포넌트의 data 함수

- 각 vue 인스턴스는 같은 data 객체를 공유하므로 새로운 data 객체를 반환(return)하여 사용해야 함

```js
<script>
export default {
  ...
  data: fuction () {
    return {
      // components' data here.
    }
  }
}
</script>
```

> Pass Props

- `:dynamice-props="dynamicProps"` 는 앞의 `key값(dynamic-props)`이라는 이르믕로 뒤의 `dynamicProps`데이터를 전달하겠다는 뜻

- 즉, :dynamice-props="dynamicProps" 로 데이터를 넘긴다면, 자식 컴포넌트에서 myProps로 데이터를 받아야 함

- v-bind로 묶여있는 " "안의 구문은 JavaScript의 구문으로 볼 수 있음
  - 따라서 dynamicProps라고 하는 변수에 대한 data를 전달할 수 있는 것

> quiz : 숫자를 props로 전달하기 위해서 다음 두 방법 중 어떤 것이 맞을까?

```javascript
// 1
<SomeComponent num-props="1"/>

// 2
<SomeComponent num-props="1"/>
```
- 첫 번째 방식은 static props로 string으로서의 `"1"`을 전달

- 두 번째 방식은 dynamic props로 숫자로서의 1을 전달

> 단방향 데이터 흐름

- 모든 props는 `부모에서 자식`으로, 즉 `아래로 단방향 바인딩을 형성`

- 부모 속성이 업데이트되면 자식으로 흐르지만 반대 방향은 아님
  - 부모 컴포넌트가 업데이트 될 때마다 자식 컴포넌트의 모든 prop들이 최신 값으로 새로고침 됨

- 목적
  - 하위 컴포넌트가 `실수`로 상위 컴포넌트 상태를 변경하여 앱의 `데이터 흐름을 이해하기 힘들게 만드는 것을 방지`

- 따라서 하위 컴포넌트에서 prop를 변경하려고 시도해서는 안되며, 그렇게 하면 Vue는 콘솔에서 경고를 출력함

---

## Emit Event

> Emit Event

- 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달할 때는 `이벤트를 발생`시킴

- 데이터를 이벤트 리스너의 **콜백함수의 인자로 전달**

- 상위 컴포넌트는 해당 `이벤트를 통해 데이터를 받는다`

> $emit

- `$emit("event-name")` 형식으로 사용하며 부모 컴포넌트에 "event-name"이라는 이벤트가 발생했다는 것을 알림

- 참고) `$`
  -  기존에 사용하던 변수, 메서드들과 겹치지 않게 하기 위해서 vue는 $emit 로 사용

> Emit Event 흐름 정리

1. 자식 컴포넌트에 있는 버튼 클릭 이벤트를 청취하여 연결된 핸들러 함수(ChildToParent) 호출
2. 호출된 함수어세 $emit을 통해 상위 컴포넌트에 이벤트(child-to-parent) 발생
3. 상위 컴포넌트는 자식 컴포넌트가 발생시킨 이벤트(child-to-parent)를 청취하여 연결된 핸들러 함수(parentGetEvent) 호출

> emit with data

- 이벤트를 발생(emit)시킬 때 인자로 데이터를 전달 가능

![image](https://user-images.githubusercontent.com/109258306/199416875-a72fa0ae-484c-4ccf-95aa-88a44d4ec05c.png)

- 전달한 데이터는 이벤트와 연결된 부모 컴포넌트의 핸들러 함수의 인자로 사용 가능

![image](https://user-images.githubusercontent.com/109258306/199417553-c4b6d9ad-80ce-4ee6-a47e-2dbecb60c99f.png)

> emit with data 흐름

1. 자식 컴포넌트에 있는 버튼 클릭 이벤트를 청취하여 연결된 핸들러 함수(ChildToParent) 호출
2. 호출된 함수에서 $emit을 통해 부모 컴포넌트에 이벤트(child-to-parent)를 발생 => 이벤트 데이터에 (child data)를 함께 전달
3. 부모 컴포넌트는 자식 컴포넌트의 이벤트 (child-to-parent)를 청취하여 연결된 핸들러 함수(parentGetEvent) 호출, 함수의 인자로 전달된 데이터 (child data)가 포함되어 있음
4. 호출된 함수에서 console.log(child data)로 확인해보기