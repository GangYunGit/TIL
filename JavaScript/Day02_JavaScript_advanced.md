# 2022. 10. 24.

## DOM

> 개요

- JavaScript는 웹 페이지에서 다양한 기능을 구현하는 스크립트 언어

- 정적인 정보만 보여주던 웹 페이지를 `데이터가 주기적으로 갱신`되거나, 사용자와 상호 작용을 하거나, 애니메이션 등이 `동작하게 하는 것을 가능하게 함`


> Browser APIs

- 웹 브라우저에서 내장된 API로, 웹 브라우저가 현재 컴퓨터 환경에 관한 데이터를 제공하거나, 오디오를 재생하는 등 여러가지 유용하고 복잡한 일을 수행할 수 있게 함

- JavaScript로 Browser API들을 사용해서 여러가지 기능을 사용할 수 있음

- 종류
  - `DOM`
  - Geolocation API (지리 정보) => 구글 지도같은 맵 API
  - WebGL (그래픽)

> DOM(Document Object Model)

- 문서의 구조화된 표현을 제공하며 `프로그래밍 언어가 DOM 구조에 접근할 수 있는 방법을 제공`
  - 문서 구조, 스타일, 내용 등을 쉽게 변경할 수 있게 도움
  - HTML 콘텐츠를 추가, 제거, 변경하고, 동적으로 페이지에 스타일을 추가하는 등 HTML/CSS를 조작할 수 있음

- HTML 문서를 구조화하여 각 요소를 `객체(object)`로 취급

- 단순한 속성접근, 메서드 활용 뿐만 아니라 프로그래밍 언어적 특성을 활용한 조작이 가능

- DOM은 문서를 논리 트리로 표현

- DOM메서드를 사용하면 프로그래밍적으로 트리에 접근할 수 있고 이를 통해 문서의 구조, 스타일, 컨텐츠를 변경할 수 있음

- 웹 페이지는 브라우저를 통해 그 내용이 해것되어 화면에 나타나거나 HTML 코드 자체로 나타나기도 함

- DOM은 웹 페이지의 객체 지향 표현이며, JavaScript와 같은 스크립트 언어를 이용해 DOM을 수정할 수 있음

> DOM에 접근하기

- DOM을 사용하기 위해 특별히 해야할 일은 없음

- `DOM의 주요 객체`들을 활용하여 문서를 조작하거나 특정 요소들을 얻을 수 있음

- DOM의 주요 객체
  - `window`
  - `document`
  - navigator, location, history, screen 등

> `window` object

- DOM을 표현하는 창

- 가장 최상위 객체(작성 시 생략 가능)

- 탭 기능이 있는 브라우저에서는 각각의 탭을 각각의 `window 객체`로 나타냄
  
- window 메서드의 예시
  - 새탭 열기 : window.open()
  - 경고 대화상자 표시 : window.alert()
  - 인쇄 대화상자 표시 : window.print()

> `document` object

- 브라우저가 불러온 웹 페이지

- 페이지 컨텐츠의 진입점 역할을 하며, \<body>등과 같은 수많은 다른 요소들을 포함하고 있음

![image](https://user-images.githubusercontent.com/109258306/197453441-76e55f85-9886-445c-b530-1d470cf6a6dc.png)

> document의 속성 예시

- 제목 수정해보기

![image](https://user-images.githubusercontent.com/109258306/197453546-464b0d46-e28d-4c33-8e2f-6f5e1cc50508.png)

> 참고) 파싱(Parsing)

- 구문 분석, 해석

- 브라우저가 문자열을 해석하여 DOM Tree로 만드는 과정

---

## DOM 조작

> 개요

- Document가 제공하는 기능을 사용해 웹 페이지 문서 조작하기

- DOM 조작 순서

1. 선택(Select)
2. 조작(Manipulation) : 생성, 추가, 삭제 등

> 선택 관련 메서드

- document.`querySelector`(selector)
  - 제공한 `선택자`와 일치하는 element 한 개 선택
  - 제공한 CSS selector를 만족하는 `첫 번째 element 객체를 반환`(없다면 null 반환)

- document.querySelectorAll(selector)
  - 제공한 선택자와 일치하는 여러 element를 선택
  - 매칭할 하나 이상의 selector를 포함하는 유요한 `CSS selector`를 인자(문자로 받음)
  - 제공한 CSS selector를 만족하는 `NodeList`를 반환

> 참고) NodeList

- index로만 각 항목에 접근 가능

- 배열의 forEach 메서드 및 다양한 배열 메서드 사용 가능

- querySelectorAll()에 의해 반환되는 `NodeList`는` DOM의 변경사항을 실시간으로 반영하지 않음` => 실시간으로 바꾸지 않고 유지하는 컬렉션을 `정적 컬렉션`이라고 함

- NodeList의 항목을 순회 중이거나, List의 길이를 어디선가 사용하고 있을 때 변경되면 구조가 깨지게 됨

> 조작 관련 메서드(생성)

- document.`createElement`(tagName)
  - 작성한 tagName의 HTML 요소를 생성하여 반환

> 조작 관련 메서드(입력)

- Node.`innerText`
  - Node 객체와 그 자손의 텍스트 컨텐츠(DOMString)을 표현(해당 요소 내부의 raw text)
  - 사람이 읽을 수 있는 요소만 남김
  - 즉, 줄 바꿈을 인식하고 숨겨진 내용을 무시하는 등 최종적으로 스타일링이 적용된 모습으로 표현됨

> 조작 관련 메서드(추가)

- Node.`appendChild()`
  - 한 `Node를 특정 부모로 하는` Node의 `자식 NodeList 중 마지막 자식`으로 삽입
  - 한 번에 오직 하나의 node만 추가할 수 있음
  - 추가된 Node 객체를 `반환`
  - 만약 주어진 node가 이미 문서에 존재하는 다른 node를 참조한다면 현재 위치에서 새로운 위치로 이동

> 조작 관련 메서드(삭제)

- Node.`removeChild`()
  - DOM에서 자식 Node를 제거
  - 제거된 Node를 반환

> 조작 관련 메서드(속성 조회 및 설정)

- Element.`getAttribute`(attributeName)
  - 해당 요소의 지정된 값(문자열)을 반환
  - 인자(attributeName)는 값을 걷고자 하는 속성의 이름

- Element.`setAttribute`(name, value)
  - 지정된 요소의 값을 설정
  - 속성이 `이미 존재하면 값을 갱신`, `존재하지 않으면 지정된 이름과 값으로 새 속성을 추가`

---

## Event

> 개요

- Event란 프로그래밍하고 있는 시스템에서 일어나는 사건(action) 혹은 발생(occurence)으로, 각 이벤트에 대해 조작할 수 있도록 특정 시점을 시스템이 알려주는 것

- 사용자가 웹 페이지의 버튼을 `클릭`한다면 `클릭에 대한 이벤트`가 발생하고 우리는 이벤트를 통해 `클릭이라는 사건에 대한 결과를 받거나, 조작`을 할 수 있음
 
- 다양한 Event가 존재 : 키보드 키 입력, 브라우저 닫기, 데이터 제출, 텍스트 복사 등

> `Event` object

- 네트워크 활동이나 사용자와의 상호작용 같은 사건의 발생을 알리기 위한 객체 

- 마우스를 클릭하거나 키보드를 누르는 사용자 행동으로도 발생 가능, 특정 메서드를 호출하여 프로그래밍적으로도 만들어 낼 수 있음

- DOM 요소는 Evenv를 받고 `"수신"`

- 받은 Event를 `처리`할 수 있음
  - Event 처리는 주로 `addEventListener()`라는 Event처리기(Event handler)를 다양한 html 요소에 `부착`해서 처리

> Event handler - `addEventListener()`

- "`1. 대상`에 `2. 특정 Event`가 발생하면, `3. 할 일을 등록`하자"

- `1. EventTarget`.addEventListener(`2. type`, `3. listener`)

- EventTarget.`addEvetnListener`(type, listener[, options])
  - 지정한 Event가 대상에 전달될 때마다 호출할 함수를 설정
  - Event를 지원하는 모든 객체(Element, Document, Window등)를 대상(EventTarget)으로 지정 가능

> type 파라미터

- EventTarget.addEvetnListener (`type`, listener[, options])

- 반응 할 Event 유형을 나타내는 대소문자 구분 문자열

- 대표 이벤트
  - input, click, submit
  - 다양한 이벤트 목록 [https://developer.mozilla.org/ko/docs/Web/Events]

> listenr 파라미터

- EventTarget.addEvetnListener (type, `listener`[, options])

- 지정된 타입의 Event를 수신할 객체

- `JavaScript function 객체(콜백 함수)`여야 함

- 콜백 함수는 발생한 Event의 데이터를 가진 Event 객체를 유일한 매개변수로 받음

---

## Event 실습

> 01_button.html

- 버튼을 누르면 숫자가 1증가

> 02_input.html

- input에 입력하면 값이 실시간으로 출력

> 03_button_input.html

- input에 입력하면 입력 값을 실시간으로 출력하고 버튼을 클릭하면 출력된 값의 클래스를 토글하기
  
---

## Event 취소

> event.`preventDefault()`

- 04_prevent.html 실습

- 현재 Event의 기본 동작을 중단

- HTML 요소의 기본 동작을 작동하지 않게 막음

- HTML 요소의 기본 동작 예시
  - a태그 : 클릭 시 특정 주소로 이동
  - form 태그 : form 데이터 전송

> 종합 실습

- 05_lotto.html
  - 버튼을 클릭하면 랜덤 로또 번호 6개를 출력하기

> 참고) lodash

- 모듈성, 성능 및 추가 기능을 제공하는 javaScript 유틸리티 라이브러리

- array, object등 자료구조를 다룰 때 사용하는 유용하고 간편한 유틸리티 함수들을 제공

- 함수 예시
  - reverse, sortBy, range, random ...

> 종합 실습 2

- 06_todo.html
  - CREATE, READ 기능을 충족하는 todo app 만들기

---

## this

> this

- 어떠한 object를 가리키는 키워드
  - (java에서의 this와 python에서의 self는 인스턴스 자기자신을 가리킴)

- JavaScript의 함수는 호출될 때 `this를 암묵적으로 전달 받음`

- JavaScript에서의 this는 일반적인 프로그래밍 언어에서의 this와 `조금 다르게 동작`

- JavaScript는 해당 `함수 호출 방식`에 따라 this에 바인딩되는 객체가 달라짐

- 즉, 함수를 선언할 때 this에서 객체가 결정되는 것이 아니고, 함수를 호출할 때 `함수가 "어떻게" 호출 되었는지`에 따라 `동적`으로 결정

> this INDEX

- 전역 문맥에서의 this

- `함수 문맥에서의 this`
  - 단순호출
  - Method(객체의 메서드로서)
  - Nested

> 전역 문맥에서의 this

- `브라우저의 전역 객체`인 `window`를 가리킴
  - 전역객체는 모든 객체의 유일한 최상위 객체를 의미

``` js
console.log(this) // window
```

> `함수 문맥`에서의 this

- 함수의 this 키워드는 다른 언어와 조금 다르게 동작
  - this의 값은 함수를 호출한 방법에 의해 결정
  - 함수 내부에서 this의 값은 함수를 호출한 방법에 의해 좌우됨

1. 단순 호출

   - 전역 객체를 가리킴
   - 전역 브라우저에서는 window, Node.js는 global을 의미

2. Method(Function in Object, 객체의 메서드로서)
   - 메서드로 선언하고 호출한다면, 객체의 메서드이므로 해당 객체가 바인딩

``` js
const myObj = {
  data: 1,
  myFunc() {
    console.log(this) // myObj
    console.log(this.data) // 1
  }
}

myObj.myFunc()  // myObj
```

3. Nested (Function 키워드)

``` js
const myObj = {
  numbers: [1],
  myFunc() {
    console.log(this) // myObj
    this.numbers.forEach(function (number) {
      console.log(number) // 1
      console.log(this) // **window**
    })
  }
}

myObj.myFunc()
```

   - forEach의 콜백 함수에서의 this가 메서드의 객체를 가리키지 못하고 전역 객체 window를 가리킴

   - 단순 호출 방식으로 사용되었기 때문

   - 이를 해결하기 위해 등장한 함수 표현식이 바로 `"화살표 함수"`

``` js
const myObj = {
  numbers: [1],
  myFunc() {
    console.log(this) // myObj
    this.numbers.forEach((number) => {
      console.log(number) // 1
      console.log(this) // **myObj**
    })
  }
}

myObj.myFunc()
```

   - 이전에 일반 function 키워드와 달리 메서드의 객체를 잘 가리킴

   - 화살표 함수에서 this는 자신을 감싼 정적 범위

   - 자동으로 `한 단계 상위의 scope`의 context를 바인딩

> 화살표 함수

- 화살표 함수는 호출의 위치와 상관없이 상위 스코프를 가리킴(Lexical scope this)

- Lexical scope

  - 함수를 어디서 호출하는지가 아니라 `어디에 선언하였는지`에 따라 결정
  - Static scope라고도 하며 대부분의 프로그래밍 언어에서 따르는 방식

- 따라서 `함수 내의 함수 상황`에서 `화살표 함수를 쓰는 것을 권장`

> this와 addEventListener

- addEventListener에서의 콜백 함수는 특별하게 function 키워드의 경우 addEventListener를 호출한 대상(event.target)을 뜻함

- 반면 화살표 함수의 경우 `상위 스코프`를 지칭하기 때문에 `window` 객체가 바인딩 됨

- 결론 : `addEventListener의 콜백 함수는 function 키워드를 사용하자`

> this가 호출되는 순간 결정되는것(런타임)

- 장점 : 함수(메서드)를 하나만 만들어서 여러 객체에서 재사용할 수 있다.

- 단점 : 이런 유연함이 실수로 이어질 수 있다.
