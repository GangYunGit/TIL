# 2022. 10. 31.

# Front-end Development

> Front-end Framework
 
- Front-end(FE) 개발이란?
  - 사용자에게 보여주는 화면 만들기

- Web App(SPA)을 만들 때 사용하는 도구
  - SPA - Single Page Application

> Wep App

- 웹 브라우저에서 실행되는 어플리케이션 소프트웨어

- 개발자 도구 -> 디바이스 모드

- 웹 페이지가 그대로 보이는 것이 아닌 `디바이스에 설치된 App`처럼 보이는 것

- 웹 페이지가 디바이스에 맞는 적절한 UX/UI로 표현

> SPA (Single Page Application)

- 이전까지는 사용자의 요청에 적절한 페이지 별 template을 반환

- SPA는 `서버에서 최초의 1장의 HTML만 전달`받아 모든 요청에 대응하는 방식을 의미함
  - `CSR(Client Side Rendering) 방식으로 요청을 처리`하기 때문

> 참고) SSR (Server Side Rendering)

- 기존의 요청 처리 방식은 SSR

- Server가 사용자의 요청에 적합한 HTML을 렌더링하여 제공하는 방식

- 전달 받은 새 문서를 보여주기 위해 브라우저는 새로고침을 진행

> CSR (Client Side Rendering)

- 최초 한 장의 HTML을 받아오는 것은 동일
  - 단, server로부터 최초로 받아오는 문서는 빈 html문서

- 각 요청에 대한 대응을 JavaScript를 사용하여 필요한 부분만 다시 렌더링

1. 새로운 페이지를 서버에 `AJAX`로 요청
2. 서버는 화면을 그리기 위해 필요한 데이터를 JSON 방식으로 전달
3. `JSON`데이터를 JavaScript로 처리, DOM 트리에 반영(렌더링)

> CSR 방식을 사용하는 이유

- 모든 HTML 페이지를 서버로부터 받은 것이 아님
  - `클라이언트 - 서버간 통신(트래픽)이 감소`
  - 응답속도 향상

- 매번 새 문서를 받아 새로고침하는 것이 아니라 필요한 부분만 고쳐 나가므로 각 `요청이 끊김없이 진행`
  - SNS에서 추천을 누를 때마다 첫 페이지로 돌아가면 끔찍..
  - 요청이 자연스럽게 진행이 된다 = UX 향상

- 백엔드와 프론트엔드의 작업 영역을 명확히 분리 가능
  - `협업`이 용이해짐

> CSR의 단점

- `첫 구동 시 필요한 데이터가 많으면` 많을수록 `최초 작동까지 오랜 시간`이 소요

- ex) Naver, Netflix, Disny+ 등 모바일에 설치된 Web-App을 실행하게 되면 잠깐의 로딩 시간이 필요

- 검색 엔진 최적화(SEO, Search Engine Optimization)가 어려움
  - 서버가 제공하는 것은 비어있는 HTML
  - 내용을 채우는 것은 AJAX 요청으로 얻은 JSON 데이터로 클라이언트(브라우저)가 진행

- 대체적으로 HTML에 작성된 내용을 기반으로 하는 검색 엔진에 빈 HTML을 공유하는 SPA 서비스가 노출되기는 어려움

> 참고) SEO(Search Engine Optimization)

- google, bing과 같은 검색 엔진 등에 내 서비스나 제품등이 효율적으로 검색 엔진에 노출되도록 개선하는 과정을 일컫는 작업

- 검색 = 각 사이트가 운용하는 검색 엔진에 의해 이루어지는 작업

- 검색 엔진 = 웹 상에 존재하는 가능한 모든 정보들을 긁어 모으는 방식으로 동작
  - `정보의 대상`은 주로 `HTML`에 작성된 내용
  - JavaScript가 실행된 이후의 결과를 확인하는 과정이 없음

- 최근에는 SPA, 즉 CSR로 구성된 서비스의 비중이 증가
  - SPA 서비스도 검색 대상으로 넓히기 위해 JS를 지원하는 방식으로 발전

- 단, 단순 HTML만을 분석하는 것보다 몇 배의 리소스가 필요한 작업이기에 여전히 CSR의 검색 엔진 최적화 문제가 모두 해결된 것은 아님

> CSR vs SSR

- 내 서비스에 적합한 렌더링 방식을 적절히 활용하자.
  
- SAP 서비스에서도 SSR을 지원하는 Framework도 발전하고 있음
  - Vue의 Nuxt.js
  - React의 Next.js
  - Angular Universal 등

> 여러가지 Frone-end Framework

- Front-end Framework == HTML + CSS + JS를 더 편하게 작업하기 위한 툴
  - React, Angular, svelte, `Vue` 등

---

## Vue

> Vue의 역사

- Evan You라는 사람이 Angular보다 `가볍고, 간편하게 사용할 수 있는 Framework`를 만들기 위해 퇴사

- 2014년 Vue 발표

> Vue의 구조

```html
<template>
  <!-- HTML -->
  <div>
    <p>Hello</p>
  </div>
</template>

<script>
  // JavaScript
</script>

<style>
  /* CSS */
  p {
    color: black;
  }
</style>
```

- 매우 직관적인 구조

- 추후 필요하다면, 다른 FE Framework 학습 시 빠르게 적응 가능

> Vue CDN

- Vue로 작업을 시작하기 위하여 CDN을 가져와야 함

- Vue3가 아닌 `Vue2`를 사용할 것임

> Facebook 예시

![image](https://user-images.githubusercontent.com/109258306/198939681-445540d9-0729-48d1-896c-67c91e684652.png)

- 한 명의 유저가 이름을 변경한다면 화면에서 조작해야 할 영역이 너무 많음

![image](https://user-images.githubusercontent.com/109258306/198939726-82bab08c-d49c-4a29-8c14-3fb9249bab09.png)

- Vue를 통해 관리하면 변경 사항도 한 번에 반영이 가능!

> Vue2

- 2022년 02월 부터 Vue 프레임워크의 기본 버전이 3버전으로 전환

- 하지만 여전히 Vue2가 많이 사용됨 (legacy code)

- 사용된 기간이 긴 만큼 상대적으로 많은 문서의 양, 참고자료

- 안정적인 측면에서는 아직 Vue2가 우세

- 주의! `Vue3 한글화 문서`는 `되도록 읽지 말 것`. 아직 누락된 내용이 많음

---

## Vue Instance

> MVVM Pattern

- 소프트웨어 아키텍처 패턴의 일종

- 마크업 언어로 구현하는 `그래픽 사용자 인터페이스(view)`의 개발을 `Back-end(model)`로부터 분리시켜 view가 어느 특정한 모델 플랫폼에 종속되지 않도록 함

![image](https://user-images.githubusercontent.com/109258306/198940336-04cafe0c-1877-436c-be13-088f5a61669f.png)

- `View` - 우리 눈에 보이는 부분(`DOM`)

- `Model` - 실제 데이터(`JSON`)

- `View Model(Vue)`
  - View를 위한 Model
  - View와 연결(binding) 되어 Action을 주고 받음
  - Model이 변경되면 View Model도 변경되고 바인딩된 View도 변경
  - View에서 사용자가 데이터를 변경하면 View Model의 데이터가 변경되고 바인딩된 다른 View도 변경됨

> MVVM 패턴 정리

- MVC 패턴에서 Controller를 제외하고 View Model을 넣은 패턴

- View는 Model을 모르고, Model도 View를 모른다 == DOM은 Data를 모른다, Data도 DOM을 모른다(독립성 증가, 적은 의존성)

- View에서 데이터를 변경하면 View Model의 데이터가 변경되고, 연관된 다른 View도 함께 변경된다.

> Vue instance

![image](https://user-images.githubusercontent.com/109258306/199006436-32681b16-0826-4f0a-9951-9af3aac88e2e.png)

- Vue instance 자체가 하나의 객체이다.

- 아주 많은 속성과 메서드를 이미 가지고 있고, 이러한 기능들을 사용하는 것

> 참고) 생성자 함수

- 동일한 구조의 객체를 여러 개 만들고 싶다면?

- `new` 연산자로 사용하는 함수

```js
function Member(name, age, sId) {
  this.name = name
  this.age = age
  this.sId = sId
}

const member3 = new Member('isaac', 21, 2022654321)
```

> el (element)

- Vue instance와 DOM을 mount(연결)하는 옵션
  - View와 Model을 연결하는 역할
  - HTML id 혹은 class와 마운트 가능

- `Vue instance와 연결되지 않은` DOM 외부는 Vue의 영향을 받지 않음
  - `Vue 속성 및 메서드 사용 불가`

> data

- Vue instance `데이터 객체` 혹은 `인스턴스 속성`

- 데이터 객체는 반드시 기본 객체 `{}(Object)`여야 함

```html
<div id='app'>
  {{ message }}
</div>

<!-- Vue CDN -->
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: 'Hello, Vue!'
    },
  })
</script>
```

- 객체 내부의 아이템들은 `value`로 `모든 타입의 객체를 가질 수 있음`

- 정의된 속성은 `interpolation{{}}`을 통해 view에 렌더링 가능함


> methods

- Vue instance의 method들을 정의하는 곳

```html
<script>
    const app = new Vue({
      el: '#app',
      data: {
        message: 'Hello, Vue!'
      },
      methods: {  // s가 빠지면 동작이 안됨!!!!!
        print: function () {
          console.log(this.message)
        },
      }
    })
  </script>
```

- methods 객체 정의
  - 객체 내 print method 정의
  - print method 실행 시 Vue instance의 data내 messsage 출력
  - 콘솔창에서 app.print()을 실행하여 결과 확인

```html
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: 'Hello, Vue!'
    },
    methods: {
      ...
      bye: function () {
        this.message = 'Bye, Vue!'
      }, 
    }
  })
```

- method를 호출하여 data 변경 가능
  - 객체 내 bye method 정의
  - print method 실행 시 Vue instance내의 message 변경
  - 콘솔창에서 app.bye()실행 => DOM에 바로 변경된 결과가 반영됨
  - Vue의 강력한 반응성(reactivity)

> 주의! methods with Arrow Function

- `메서드를 정의할 때, Arrow Function을 사용하면 안됨`

- Arrow Function의 this는 함수가 선언될 때 상위 스코프를 가리킴

- 즉, **this의 상위 객체 window**를 가리킴

- 호출은 문제 없이 가능하나, `this로 Vue의 data로 변경하지 못함`

---

## Basic of Syntax

> Template Syntax

- Vue2 guide > Template Syntax 참고

- `렌더링 된 DOM`을 기본 Vue Instance의 data에 `선언적으로 바인딩`할 수 있는 `HTML 기반 template syntax`를 사용
  - 렌더링된 DOM - 브라우저에 의해 보기 좋게 그려질 HTML 코드
  - HTML 기반 template syntax - `HTML 코드에 직접 작성할 수 있는 문법` 제공
  - 선언적으로 바인딩 - `Vue instance와 DOM을 연결`

> Template Interpolation

```html
<div id="app">
  <p>메시지: {{ msg }}</p>
  <p>HTML 메시지 : {{ rawHTML }}</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      msg: 'Text interpolation',
      rawHTML: '<span style="color:red"> 빨간 글씨</span>'
    }
  })
</script>
```

- 가장 기본적인 바인딩(연결) 방법, `HTML을 일반 텍스트로 표현`

- 중괄호 2개로 표기

- DTL과 동일한 형태

> RAW HTML

```html
<div id="app">
  <p>HTML 메시지 : 
    <span v-html="rawHTML"></span>
  </p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      msg: 'Text interpolation',
      rawHTML: '<span style="color:red"> 빨간 글씨</span>'
    }
  })
</script>
```

- v-html directive를 사용하여 data와 바인딩

- directive-HTML 기반 template syntax

- HTML의 기본 속성이 아닌 Vue가 제공하는 특수 속성의 값으로 data를 작성

> JS 표현식

- 표현식 형태로 작성 가능

```html
<div id="app">
  <p>{{ msg.split('').reverse().join('') }}</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      msg: 'Text interpolation',
    }
  })
</script>
```

---

## Directives

> Directives 기본 구성

- v-접두사가 있는 특수 속성에는 값을 할당할 수 있음
  - 값에는 JS 표현식을 작성할 수 있음

- directive의 역할은 `표현식의 값이 변경될 때` `반응적으로 DOM에 적용`하는 것

> Directives 기본 구성 2

![image](https://user-images.githubusercontent.com/109258306/198947148-18ee33d3-83e0-4f7a-a633-3ef9fecd332a.png)

- `:` 을 통해 전달인자를 받을 수 있음

- `.` 으로 표시되는 특수 접미사`-directive`를 특별한 방법으로 바인딩 해야 함

> v-text

```html
<div id="app2">
  <p v-text="message"></p>
  <!-- 같음 -->
  <p>{{ message }}</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
  const app2 = new Vue({
    el: '#app2',
    data: {
      message: 'Hello!',
    }
  })
</script>
```

- Template Interpolation과 함께 가장 기본적인 바인딩 방법

- `{{  }}`와 동일한 역할. 정확히 동일한 것은 아님.

> v-html

- RAW HTML을 표현할 수 있는 방법

- 단, `사용자가 입력`하거나 제공하는 컨텐츠에는 `절대 사용 금지`

> v-show

```html
<div id="app3">
  <p v-show="isActive">보이니? 안보이니?</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app3',
    data: {
      isActive: false
    }
  })
</script>
```

- 표현식에 작성된 값에 따라 element를 보여 줄 것인지 결정
  - boolean 값이 변경 될 때마다 반응

- 대상 element의 display 속성을 기본 속성과 none으로 toggle

- 요소 자체는 항상 DOM에 렌더링 됨

- 값이 false로 설정되었다고 해도 `화면에서만 사라졌을 뿐, DOM에는 존재`한다.
  - display 속성이 변경된 것 뿐

> v-if

```html
<div id="app3">
  <p v-if="isActive">안보이니? 보이니?</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
  const app3 = new Vue({
    el: '#app3',
    data: {
      isActive: false
    }
  })
</script>
```

- v-show와 사용 방법은 동일

- is-Active의 값이 변경될 때 반응

- 단, 값이 `false`인 경우 `DOM에서 사라짐`

- v-if v-else-if v-else의 형태로 사용

> `v-show` vs `v-if`

- v-show (Expensive initial load, cheap toggle)
  - 표현식 결과와 관계 없이 렌더링 되므로 초기 렌더링에 필요한 비용은 v-if 보다 높을 수 있음
  - display 속성 변경으로 표현 여부를 판단하므로 렌더링 후 toggle 비용은 적음

- `v-if` (Cheap initial load, expensive toggle)
  - 표현식 결과가 false인 경우 렌더링조차 되지 않으므로 초기 렌더링 비용은 v-show보다 낮을 수 있음
  - 단, 표현식 값이 자주 변경되는 경우 잦은 재 렌더링으로 비용이 증가할 수 있음

- v-if를 더 자주 보게 될 것임

> v-for

```html
<div id="app">
  <div v-for="(char, index) in myStr" :key="index">
    <p>{{ index }}번째 문자열 {{ char }}</p>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      myStr: 'Hello, World!',
    }
  })
</script>
```

- for .. in .. 형식으로 작성

- 반복한 데이터 타입에 모두 사용 가능

- index를 함께 출력하고자 한다면 (char, index)형태로 사용 가능

> 참고) 특수 속성 key

```html
<body>
<div v-for="(item, index) in myArr2" :key="`arry-${index}`">
  <p>{{ index }}번째 아이템</p>
  <p>{{ item.name }}</p>
</div>
</body>
```

- `v-for 사용시 반드시 key 속성을 각 요소에 작성해야 함!`

- 주로 v-for directive 작성 시 사용

- vue 화면 구성 시 이전과 달라진 점을 확인하는 용도로 활용
  - 따라서 key가 `중복되어서는 안됨`
  - 중복이 되어도 동작은 하지만, Vue가 console창에 경고를 보냄

![image](https://user-images.githubusercontent.com/109258306/198952045-321320db-1356-4dee-b442-47901d9d24cf.png)

- 각 요소가 고유한 값을 가지고 있다면 생략할 수 있음

- 객체 순회 시 value가 할당되어 출력

- 2번째 변수 할당 시 key 출력 가능

> v-on

```html
<div id="app">
  <button v-on:click="number++">increase Number</button>
  <p>{{ number }}</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      number: 0,
    },
  })
</script>
```

- `:` 을 통해 전달받은 인자를 확인

- 값으로 JS 표현식 작성

- `addEventListener`의 첫 번째 인자와 동일한 값들로 구성

- 대기하고 있던 이벤트가 발생하면 할당된 표현식 실행

- method를 통한 data 조작도 가능

- method에 인자를 넘기는 방법은 일반 함수를 호출할 때와 동일한 방식

- `:` 을 통해 전달된 인자에 따라 특별한 modifieds(수식어)가 있을 수 있음
  - ex) v-on:keyup.enter 등

- `@` shortcut 제공 => 많이 쓰임

> v-bind

```html
<div id="app2">
  <!-- v-bind의 속성값들은 script 코드상에서와 같이 모두 *!변수!*임 -->
  <a v-bind:href="url">Go To GOOGLE</a>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app2',
    data: {
      url: 'https://www.google.com/',
    },
  })
</script>
```

- HTML 기본 속성에 Vue data를 연결

- class의 경우 다양한 형태로 연결 가능
  - `조건부 바인딩`
    - {'class Name': '조건 표현식'}
    - 삼항 연산자 가능

  - `다중 바인딩`
    - ['JS표현식1', 'JS표현식2',...]

- v-bind 내부의 속성값들은 `변수`임에 주의하자.

- Vue data의 변화에 반응하여 DOM에 반영하므로 상황에 따라 유동적 할당 가능

- `:` shortcut 제공

> v-model

```html
<div id="app">
  <h3>{{ myMessage2 }}</h3>
  <input v-model="myMessage2" type="text">
  <hr>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app2',
    data: {
      myMessage2: '',
    },
  })
</script>
```

- Vue instance와 DOM의 `양방향 바인딩`

- Vue data 변경 시 v-model로 연결된 사용자 입력 element에도 적용

---

## Vue advanced

- Vue instance가 가진 options 중 하나

- computed 객체에 정의된 함수를 페이지가 최초로 렌더링 될 때 호출하여 계산
  - 계산 결과가 변하기 전까지 `함수를 재호출하는 것이 아닌 계산된 값을 반환`
  - method는 호출해서 값을 계산함

![image](https://user-images.githubusercontent.com/109258306/198957596-50542452-6dd8-4a0c-8386-0ed6c1eaebcb.png)

- 함수의 종속 대상의 변화에 따라 계산 여부가 결정됨

- 종속 대상이 변하지 않으면 항상 저장(캐싱)된 값을 반환

> watch

```html
<script>
  const app = new Vue({
    data: {
      number: 0,
    },
    },
    watch: {
      number: function (val, oldVal) {
        console.log(val, oldVal)
      },
    }
  })
</script>
```

![image](https://user-images.githubusercontent.com/109258306/198959010-0d7da6e8-66d4-4a0f-9545-62c99f708879.png)

- 특정 데이터의 변화를 감지하는 기능
  
- 감시할 대상 data를 지정 후, data가 변할 시 설정된 함수가 실행 됨

- 첫 번째 인자는 변동 전 data, 두 번째 인자는 변동 후 data

- `디버깅` 할 때 자주 쓰임

- Array, Object의 내부 요소 변경 감지를 위해서는 `deep 속성` 추가가 필요

```html
<div id="app">
  <h3>Increase number</h3>
  <p>{{ number }}</p>
  <button @click="number++">+</button>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      number: 0,
    },
    watch: {
      number: function (val, oldVal) {
        console.log(val, oldVal)
      },
    }
  })
</script>
```

> filters

- 텍스트 형식화를 적용할 수 있는 필터

- interplation 혹은 v-bind를 이용할 때 사용 가능

- 필터는 자바스크립트 표현식 마지막에 `|`와 함께 추가되어야 함

- Chaining 가능

```html
<div id="app">
    <p>{{ numbers | getOddNums | getUnderTenNums }}</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    },
    filters: {
      getOddNums: function (nums) {
        const oddNums = nums.filter((num) => {
          return num % 2
        })
        return oddNums
      },

      getUnderTenNums: function (nums) {
        const underTen = nums.filter((num) => {
          return num < 10
        })
        return underTen
      }
    }
  })
</script>
```