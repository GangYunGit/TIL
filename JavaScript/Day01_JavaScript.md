# 2022. 10. 19.

# JavaScript

## 개요

> Web 기술의 기반이 되는 언어

- HTML 문서의 콘텐츠를 `동적으로 변경`할 수 있는 언어

- Web 공간에서의 채팅, 게임 등 다양한 동작을 할 수 있게 된 기반
  
> 다양한 분야로 확장이 가능한 언어

- JavaScript는 Web을 위해 탄생한 언어로, 초기에는 언어의 특성상 많은 개발자에게 환영 받지 못함

- 단순히 Web 조작을 넘어서 서버 프로그래밍, 모바일 서비스, 컴퓨터 프로그래밍, 블록체인, 게임 등 `다양한 분야에서 활용`이 가능한 언어가 됨

- 웹 브라우저는 JavaScript를 해석하는 엔진을 가지고 있음

- 더 이상 jQuery등의 라이브러리를 사용할 필요가 없음(모든 웹 브라우저가 표준안을 따름)

- 특히 Chrome V8의 경우 JavaScript를 번역하는 속도가 매우 빠름
  - node.js, react.js, electron 등의 내부 엔진으로 사용
  - 그 결과, 백엔드, 모바일, desktop app 등을 모두 JavaScript로 개발이 가능해짐

> Node.js로 실행하기

- 웹 브라우저를 이용하지 않고도 JavaScript를 실행할 수 있음(엔진이 있음)

---

# JavaScript 기초 문법

## 코드 작성법

> 세미콜론 (semicolon)

- 자바스크립트는 세미콜론을 선택적으로 사용 가능

- 세미콜론이 없으면 ASI에 의해 자동으로 세미콜론이 삽입됨
  - ASI(Automatic Semicolon Insertion, 자동 세미콜론 삽입 규칙)

> 세미콜론 예시

```javascript
console.log('hello');
console.log('javascript')
```

> 들여쓰기와 코드 블럭

- python은 4칸 들여쓰기를 사용했으나, JavaScript는 2칸을 사용

- 블럭(block)은 if, for, 함수에서 중괄호`{}` 내부를 말함
  - python은 들여쓰기를 이용해서 코드 블럭을 구분
  - JavaScript는 중괄호 {}를 사용해 코드 블럭을 구분

> 코드 스타일 가이드

- `코드의 품질에 직결`되는 중요한 요소
  - 코드의 가독성, 유지보수 또는 팀원과의 커뮤니키에션등 개발 과정 전체에 영향을 끼침

- 다만 JavaScript는 여러 코드 스타일 가이드가 회사마다 존재하는데, 수업에서는 `Aribnb Style Guide를 기반`으로 사용할 것

> 주석

- 한 줄 주석 : `//`

- 여러 줄 주석 : `/* */`

---

## 변수와 식별자

> 식별자 정의와 특징

- 식별자(identifier)는 변수를 구분할 수 있는 변수명을 말함

- 식별자는 반드시 문자, 달러($)또는 밑줄(_)로 시작

- 대소문자를 구분하며, 클래스명 외에는 모두 소문자로 시작

- 예약어(for, if, function) 사용 불가능

- 카멜 케이스(camelCase, lower-camel-case)
  - 변수, 객체, 함수에 사용

```javascript
// 변수
let dog
let variableName

// 객체
const userInfo = { name: 'Tom', age: 20}

// 함수
funciton add() {}
function getName() {}
```

- 파스칼 케이스(PascalCase, upper-camel-case)
  - 클래스, 생성자에 사용

```js
// 클래스
class User {
  constructor(options) {
    this.name = options.name
  }
}

// 생성자 함수
function User(options) {
  this.name = options.name
}
```

- 대문자 스네이크 케이스(SNAKE_CASE)
  - 상수(constants)에 사용
  - 상수 : 개발자의 의도와 상관없이 변경될 가능성이 없는 값을 의미

```js
// 값이 바뀌지 않을 상수
const API_KEY = 'my-key'
const PI = Math.PI

// 재할당이 일어나지 않는 변수
const NUMBERS = [1, 2, 3]
```

> 변수 선언 키워드

- Python과 다르게 javaScript는 변수를 선언하는 키워드가 정해져 있음

1. `let`
- 블록 스코프 `지역 변수`를 선언 (추가로 동시에 값을 초기화)

2. `const`
- 블록 스코프 `읽기 전용 상수`를 선언 (추가로 동시에 값을 초기화)

3. `var`
- `변수`를 선언 (동시에 값을 초기화)

> 참고) 선언, 할당, 초기화

- 선언(Declaration)
  - 변수를 생성하는 행위 또는 시점

```js
let foo           // 선언
consloe.log(foo)  // undefined라고 출력됨
```

- 할당(Assignment)
  - 선언된 변수에 값을 저장하는 행위 또는 시점

```js
let foo           // 선언
foo == 11         // 할당
consloe.log(foo)  // 11
```

- 초기화(Initialization)
  - 선언된 변수에 처음으로 값을 저장하는 행위 또는 시점

```js
let bar = 0        // 선언 + 할당 (초기화)
consloe.log(foo)   // 0
```

> 참고) 블록 스코프(block scope)

- if, for, 함수 등의 `중괄호({}) 내부`를 가리킴

- 블록 스코프를 가지는 변수는 블록 바깥에서 접근 불가능

```js
let x = 1

if (x === 1) {
  let x = 2
  console.log(x)  // 2
}

console.log(x)    // 1
```

> 변수 선언 키워드 - `let`

- `재할당은 가능`하나 `재선언은 불가능`

- 블록 스코프를 갖는 지역 변수를 선언

```js
let number = 10   // 1. 선언 및 초기값 할당
number = 20       // 2. 재할당
```

```js
let number = 10   // 1. 선언 및 초기값 할당
let number = 20   // 2. 재선언 불가능!!
```

> 변수 선언 키워드 - `const`

- `재할당과 재선언 불가능`

- `선언 시 반드시 초기값을 설정해야 하며`, 이후 값 변경 불가

- let과 동일하게 블록 스코프를 가짐

```js
const number = 10   // 1. 선언 및 초기값 할당
number = 10         // 2. 재할당 불가능!
```

```js
const number = 10   // 1. 선언 및 초기값 할당
const number = 20   // 2. 재선언 불가능!
```

> 변수 선언 키워드 - `var`

- `재할당 가능`, `재선언 가능`

- ES6 이전에 변수를 선언할 때 사용되던 키워드

- "호이스팅"되는 특성으로 인해 예기치 못한 문제 발생 가능
  - 따라서 ES6 이후부터는 `var 대신 const와 let을 사용하는 것을 권장`

- 함수 스코프(funciton scope)를 가짐

> 참고) 함수 스코프(function scope)

- `함수의 중괄호 내부`를 가리킴

- 함수 스코프를 가지는 변수는 함수 바깥에서 접근 불가

```js
function foo() {
  var x = 5
  console.log(x)  // 5
}

// ReferenceError : x is not defined
console.log(x)
```

> 참고) 호이스팅 (hoisting)

- `변수를 선언 이전에 참조할 수 있는 현상`

- var로 선언된 변수는 선언 이전에 참조할 수 있으며, 이러한 현상을 호이스팅이라고 함

- 변수 선언 이전의 위치에서 접근시 undefined를 반환

```js
console.log(name)   // undefined => 선언 이전에 참조

var name = '홍길동' // 선언
```

```js
// 위 코드를 암묵적으로 아래와 같이 이해함
var name  // undefined 로 초기화
console.log(name)

var name = '홍길동'
```

- 즉, JavaScript에서 변수들은 실제 실행시에 코드의 최상단으로 끌어 올려지게 되며, 이러한 이유 때문에 var로 선언된 변수는 선언 시에 undefined로 초기화되는 과정이 동시에 일어남

- 반면 let, const는 호이스팅이 일어나면 에러를 발생시킴

```js
console.log(username)  // undefined
var username = '홍길동'

console.log(email)     // Uncauht ReferenceError
let email = 'gildong@gmail.com'

console.log(age)       // Uncauht ReferenceError
const age = 50
```

> 변수 선언 키워드 정리

- 코드의 논리적인 흐름을 깨뜨리는 행위이기 떄문에 `var는 사용되지 않아야 하는 키워드`

- 다만, 아직까지도 많은 기존의 JavaScript 코드는 ES6 이전의 문법으로 작성되어 있으므로 호이스팅에 대한 이해가 필요

- Airbnb 스타일 가이드에서는 `기본적으로 const 사용을 권장`
  - `재할당`의 경우만 `let`

---

## 데이터 타입

> 데이터 타입

- JavaScript의 모든 값은 특정한 데이터 타입을 가짐

- 크게 `원시 타입(Primitive type)`과 `참조 타입(Reference type)`으로 분류

> Number

- 정수 또는 실수형 숫자를 표현하는 자료형

```js
const a = 13
const b = -5
const c = 3.14        // float 숫자
const d = 2.998e8     // 2.998 * 10^8
const e = Infinity    // 양의 무한대
const f = -Infinity   // 음의 무한대
const g = NaN         // Not a Number
```

- NaN을 반환하는 경우

1. 숫자로서 읽을 수 없음 (parseInt("어쩌구"), Number(undefined))

2. 결과가 허수인 수학 계산식 (Math.sqrt(-1))

3. 피연산자가 NaN (7 ** NaN)

4. 정의할 수 없는 계산식 (0 * Infinity)

5. 문자열을 포함하면서 덧셈이 아닌 계산식 ("가" / 3)

> String

- 문자열을 표현하는 자료형

- 작은 따옴표 또는 큰 따옴표 모두 가능

```js
const sentence1 = 'Ask and go to the blue'
const sentence2 = "Ask and go to the blue"

console.log(sentence1)
console.log(sentence2)
```

- `덧셈`만 `문자열을 붙일 때` 사용 가능

```js
const firstName = 'Tony'
const lastName = 'Stark'
const fullName = firstName + lastName

console.log(fullName)
```

- Quote를 사용하면 선언 시 줄 바꿈이 안됨

- 대신 escape sequence("\\n")사용

- `Template Literal`을 사용하면 줄 바꿈이 되며, 문자열 사이에 변수도 삽입 가능

- 단, escape sequence를 사용할 수 없다 == `Python의 "f-string"`
  
```js
const word = `안녕
들 하세요`
console.log(word)

const age = 10
const message = `홍길동은 ${age}세 입니다.`
console.log(message)
```

> Template literals

- 내장된 표현식을 허용하는 문자열 작성 방식

- ES6+ 부터 지원

- Backtick(\`\`)을 이용하며, 여러 줄에 걸쳐 문자열을 정의할 수도 있고 javaScript의 변수를 문자열 안에 바로 연결할 수 있는 이점이 생김

```js
const age = 10
const message = `홍길동은 ${age}세 입니다.`
```

> Empty Value

- 값이 존재하지 않음을 표현하는 값으로 JavaScript에서는 `null` 과 `undefined`가 존재

- 동일한 역할을 하는 이 두개의 키워드가 존재하는 이유는 단순한 JavaScript의 설계 실수

- 큰 차이는 없으나 interchangeable하게 사용할 수 있도록 권장

> null

- `변수의 값이 없음을 의도적으로 표현`할 때

```js
let lastName = null
console.log(lastName)   // null
```

> undefined

- 변수 선언 이후 `직접 값을 할당하지 않으면 자동으로 할당`됨

```js
let firstName
console.log(firstName)  // undefined
```

> null과 undefined

- 타입을 확인해보자

```js
typeof null       // "object"
typeof undefined  // "undefined"
```

- 이미 null 타입에 의존성을 띄고 있는 많은 프로그램이 망가질 수 있기 때문에 해결하지 못함

> Boolean

- true, false

- 조건문 또는 반복문에서 boolean이 아닌 데이터 타입은 `자동 형변환 규칙`에 따라 true 또는 false로 변환됨

---

## 연산자

> 할당 연산

- 오른쪽에 있는 피연산자의 평가 결과를 왼쪽 피연산자에 할당하는 연산자

```js
let c = 0

c += 10
console.log(c)  // 10

c -= 3
console.log(c)  // 7

c *= 10
console.log(c)  // 70

c++
console.log(c)  // 71

c--
console.log(c)  // 70
```

> 비교 연산자

- 문자열은 유니코드 값을 사용하며 표준 사전 순서를 기반으로 비교

```js
3 > 2 // true
3 < 2 // false

'A' < 'B' // true
'가' < '나' // true
```

> `동등 연산자 (==)`

- 두 연산자가 같은 값으로 비교 후 boolean 값을 반환

- 비교할 때 `암묵적 타입 변환`을 통해 `타입을 일치시킨 후` 같은 값인지 비교

- 두 피연산자가 모두 객체일 경우 메모리의 같은 객체를 바라보는지 판별

- 예상치 못한 결과가 발생할 수 있으므로 특별한 경우를 제외하고 사용하지 않음

```js
const a = 1
const b = '1'

console.log(a == b)   // true
console.log(a == true)    // true

// 자동 형변환 예시
console.log(8 * null)   // 0, null은 0
console.log('5' - 1)    // 4
console.log('5' + 1)    // '51'
console.log('five' * 2)    // NaN
```

> `일치 연산자(===)`

- 두 피연산자의 `값`과 `타입`이 모두 같은 경우 true

- `같은 객체를 가리키거나`, 같은 타입이면서 같은 값인지 비교

- 엄격한 비교가 이루어지며 `암묵적 타입 변환이 발생하지 않음`

```js
const a = 1
const b = '1'

console.log(a === b)  // false
console.log(a === Number(b))  // true
```

> 논리 연산자

- and : `&&`

- or : `||`

- not : `!`

- 단축 평가 지원
  - false && true => false
  - true || false => true

> 삼항 연산자

- 가장 앞의 조건식이 참이면 :(콜론) 앞의 값이 반환되며 그 반대일 경우 콜론 뒤의 값이 반환

```js
const result = Math.PI > 4 ? 'Yep' : 'Nope'
console.log(result)   // Nope
```

---

## 조건문

> `if` statement

```js
const name = 'manager'

if (name === 'admin') {
  console.log('관리자님 환영합니다.')
} else if (name ==='manager') {
  console.log('매니저님 환영합니다.')
} else {
  console.log(`${name}님 환영합니다.`)
}
```

> `switch` statement

- 표현식의 결과값을 이용한 조건문

- 표현식의 결과값과 case문의 오른쪽 값을 비교

- break문이 없는 경우 break문을 만나거나 default문을 실핼할 때까지 다음 조건문 실행

- 블록 스코프 생성

- 아래의 경우 모든 console이 출력(Fall-through 현상)

- case문이 끝나기 전에 `break`를 걸어주어야 함

```js
const name = '홍길동'

switch(name) {
  case '홍길동' : {
    console.log('홍길동님 환영합니다.')
    // break 를 써주자
  }
  case 'manager' : {
    console.log('매니저님 환영합니다.')
    // break 를 써주자
  }
  default : {
    console.log(`${name}님 환영합니다.`)
    // 여기는 쓸 필요없다
  }
}
```

> if vs switch

- 조건이 많은 경우 switch 문을 통해 가독성 향상을 기대할 수 있음

- 일반적으로 중첩 else if 문은 유지보수하기 힘들다는 문제도 있음

---

## 반복문

> 반복문 종류

- while

- for

- for ...in

- for ...of

> while

- 조건문이 참이기만 하면 문장 계속 수행

```js
let i = 0

while (i < 6>) {
  console.log(i)
  i += 1
}

// 0, 1, 2, 3, 4, 5
```

> for

```js
for (let i = 0; i < 6; i++) {
  console.log(i)
}

// 0, 1, 2, 3, 4, 5
```

> for ...in

- 객체(object)의 속성을 순회할 때 사용

- 배열도 순회 가능하지만 `인덱스 순으로 순회한다는 보장이 없으`므로 권장하지 않음

- 예시

```js
const fruits = { a: 'apple', b: 'banana'}

for (const key in fruits) {
  console.log(key)    // a, b
  console.log(fruits[key])    // apple, banana
}
```

> for ...of

- `반복 가능한 객체를 순회`할 때 사용

- iterable 객체 : Array, Set, String 등

```js
const numbers = [0, 1, 2, 3]

for (const number of numbers) {
  console.log(number) // 0, 1, 2, 3
}
```

> for ...in 과 for ...of의 차이

- `for ...in` 은 `속성 이름`을 통해 반복 => 객체에 사용

- `for ...of` 는 `속성 값`을 통해 반복 => 그 나머지

```js
const arr = [3, 5, 7]

for (const i in arr)  {
  console.log(i)  // 0 1 2
}

for (const i of arr)  {
  console.log(i)  // 3 5 7
}
```

> 참고 for ...in, for ...of 와 const

- 일반적 for문 (let i = 0; i < arr.length; i++) {} 의 경우에는 최초 정의한 i를 재할당하면서 사용하기 때문에 conts를 사용하면 에러가 발생

- 다만 for ...in, for...of 의 경우에는 재할당이 아니라 매 반복 시 해당 변수를 새로 정의하여 사용하므로 에러가 발생하지 않음

---

## 함수의 정의

> 함수 선언식

- 예시

```js
function add(num1, num2) {
  return num1 + num2
}

console.log(add(2, 7)) // 9
```

> 함수 표현식

- 표현식 내에서 함수를 정의하는 방식

- 함수 표현식은 함수의 이름을 생략한 익명 함수로 정의 가능

- 예시

```js
const sub = function (num1, num2) {
  return num1 - num2
}

console.log(sub(7, 2)) // 5
```

- 표현식에서 함수 이름을 명시하는 것도 가능

- 다만 이 경우 함수 이름은 호출에 사용되지 못하고 디버깅 용도로 사용됨

```js
const mySub = function nameSub(num1, num2) {
  return num1 - num2
}

mySub(1, 2)   // -1
namedSub(1, 2)    // ReferenceError: namedSub is not defined
```

> 기본 인자(Default arguments)

- 인자 작성 시 '='문자 뒤 기본 인자 선언 가능

```js
const greeting = function (name = 'Anonymous') {
  return `Hi ${name}`
}

greeting()    // Hi Anonymous
```

> 매개변수와 인자의 개수 불일치 허용

- 매개변수보다 인자의 개수가 많을 경우

```js
const noArgs = function() {
  return 0
}

console.log(noArgs(1, 2, 3))  // 0

const twoArgs = function (arg1, arg2) {
  return [arg1, arg2]
}

console.log(twoArgs(1, 2, 3))   // [1, 2]
```

- 매개변수보다 인자의 개수가 적을 경우

```js
const threeArgs = function (arg1, arg2, arg3) {
  return [arg1, arg2, arg3]
}

threeArgs()       // [undefined, undefined, undefined]
threeArgs(1)      // [1, undefined, undefined]
threeArgs(1, 2)   // [1, 2, undefined]
```

> Spread syntax(`...`)

- "전개 구문"

- 전개 구문을 사용하면 배열이나 문자열과 같이 반복 가능한 객체를 배열의 경우는 요소, 함수의 경우는 인자로 확장할 수 있음

1. 배열과의 사용

```js
let parts = ['shoulders', 'knees']
let lyrics = ['head', ...parts, 'and', 'toes']
// ['head', 'shoulders', 'knees', 'and', 'toes']
```

2. 함수와의 사용 (`Rest parameters`)
  - The rest parameter syntax를 사용하여 정해지지 않은 수의 매개변수를 배열로 받을 수 있음

```js
const restOpr = function (arg1, arg2, ...restArgs) {
  return [arg1, arg2, restArgs]
}

console.log(restArgs(1, 2, 3, 4, 5))    // [1, 2, [3, 4, 5]]
console.log(restArgs(1, 2))   // [1, 2, []]
```

---

## 선언식과 표현식

> 함수의 타입

- 선언식 함수와 표현식 함수 타입은 function으로 동일

```js
// 함수 표현식
const add = function (args) { }

// 함수 선언식
function sub(args) { }

console.log(typeof add)   // function
console.log(typeof sub)   // function
```

> 호이스팅 - 선언식

- `함수 선언식으로 정의한 함수`는 `var`로 정의한 변수처럼 `호이스팅`이 발생

- 즉, 함수 호술 이후에 선언해도 동작

```js
console.log(add(2, 7))  // 9

function add(num1, num2) {
  return num1 + num2
}
```

> 호이스팅 - 표현식

- 반면 함수 표현식으로 선언한 함수는 함수 정의 전에 호출 시 에러 발생

- 함수 표현식으로 정의된 함수는 변수로 평가되어 변수의 scope 규칙을 따름

```js
console.log(sub(7, 2)) // Uncaught ReferenceError: Cannot access 'sub' before initialization

const sub = function (num1, num2) {
  return num1 - num2
}
```

- Airbnb Style Guide에서 권장하는 함수 방식 : 표현식

---

## Arrow Funcion

> 화살표 함수 (Arrow Function)

- 함수를 비교적 간결하게 정의할 수 있는 문법

- function 키워드와 중괄호를 이용한 구문을 짧게 사용하기 위해 탄생
  - function 키워드 생략 가능
  - 함수의 매개변수가 하나뿐이라면 '()'도 생략 가능
  - 함수의 내용이 한 줄이라면 '{}'와 'return'도 생략 가능

- 화살표 함수는 항상 익명 함수 => `함수 표현식에서만` 사용 가능

- 변신 과정

```js
// original
const greeting = function (name) {
  return `Hi ${name}`
}

// **1단계 : 가장 많이 보게 됨
const greeting = (name) => {
  return `Hi ${name}`
}

// 2단계(거의 안씀) : 함수의 매개변수가 하나뿐이라면 '()'도 생략 가능
const greeting = name => {
  return `Hi ${name}`
}

// **3단계 : 함수의 body가 return을 포함한 표현식 1개라면 '{ }'와 'return'도 생략 가능
const greeting = name => `Hi ${name}`
```

- 주의! 명확성과 일관성을 위해 항상 인자 주위에는 괄호('()')를 포함하는 것을 권장

> 화살표 함수 응용

```js
// 1. 인자가 없다면 () or _ 로 표시 가능
let noArgs = () => 'No Args'  // 가장 많이 씀
noArgs = _ => 'No Args'

// 2-1. object를 return 한다면 return을 명시적으로 적어준다.
let returnObject = () => { return { key: 'value'} } 

// 2-2. return을 적지 않으려면 괄호를 붙여야 한다.
returnObject = () => ({ key: 'value'})
```

> 즉시 실행 함수(IIFE, Immediately Invoked Function Expression)

- 선언과 동시에 실행되는 함수

- 함수의 선언 끝에 `()`를 추가하여 선언되자마자 실행하는 형태

- `()`에 값을 넣어 인자로 넘겨줄 수 있음

- 즉시 실행 함수는 선언과 동시에 실행되기 때문에 같은 함수를 다시 호출할 수 없음

- 이러한 특징을 살려 초기화 부분에 많이 사용

- 일회성 함수이므로 익명함수로 사용하는 것이 일반적

```js
(function(num) { return nume ** 3}(2))  //8

(num => num ** 3)(2)  // 8
```

---

# Array와 Object

## Array

> 배열 (Array)

- 키와 속성들을 담고 있는 참조 타입의 객체

- 순서를 보장

- 주로 대괄호를 이용하여 생성, 0을 포함한 양의 정수 인덱스로 특정 값에 접근 가능 (음의 정수 인덱싱 불가)

- 배열의 길이는 `array.length`(형태로 접근 가능)

```js
const numbers = [1, 2, 3, 4, 5]

console.log(numbers[0])       // 1
console.log(numbers[-1])      // undefined
console.log(numbers.length)   // 5

console.log(numbers.length - 1)   // 5
console.log(numbers.length - 2)   // 4
console.log(numbers.length - 3)   // 3
console.log(numbers.length - 4)   // 2
console.log(numbers.length - 5)   // 1
```

--- 

## 배열 메서드 기초

> 배열 메서드 기초

| 메서드          | 설명                                             | 비고                     |
| --------------- | ------------------------------------------------ | ------------------------ |
| reverse         | 원본 배열의 요소들의 순서를 반대로 정렬          |                          |
| push & pop      | 배열의 가장 뒤에 요소를 추가 또는 제거           |                          |
| unshift & shift | 배열의 가장 앞에 요소를 추가 또는 제거           |                          |
| includes        | 배열에 특정 값이 존재하는지 판별 후 참/거짓 반환 |                          |
| indexOf         | 배열에 특정 값이 존재하는지 판별 후 인덱스 반환  | 요소가 없을 경우 -1 반환 |
| join            | 배열의 모든 요소를 구분자를 이용하여 연결        | 구분자 생략시 쉼표 기준  |

---

## 배열 메서드 심화

> Array Helper Methods

- 배열을 순회하며 특정 로직을 수행하는 메서드

- 메서드 호출 시 인자로 callback 함수를 받는 것이 특징
  - **callback 함수** : 어떤 함수의 내부에서 실행될 목적으로 인자로 넘겨받는 함수

> forEach

- array.forEach(callback(element[, index[, array]]))

- 인자로 주어지는 함수(콜백 함수)를 배열의 각 요소에 대해 한 번씩 실행
  - 콜백 함수는 `3가지 매개변수로 구성(elemnet, index, array)`

- 반환 값이 없음

- 예시

```js
const colors = ['red', 'blue', 'green']

// 1. 일단 써봐
const printClr = function (color) {
  console.log(color)
}

colors.forEach(printClr)

// 2. 함수 정의를 인자로 넣어보기
colors.forEach(function (color) {
  console.log(color)
})

// 3. 화살표 함수 적용
colors.forEach((color) => {
  console.log(color)
})
```

> map

- array.map(callback(element[, index[, array]]))

- 배열의 각 요소에 대해 콜백 함수를 한 번씩 실행

- 콜백 함수의 반환 값을 요소로 하는 새로운 배열 반환

- `forEach + return` 이라고 생각!

> filter

- array.filter(callback(element[, index[, array]]))

- 배열의 각 요소에 대해 콜백 함수를 한 번씩 실행

- `콜백 함수의 반환 값이 참인 요소들만` 모아서 새로운 배열 반환

- 기본 배열의 요소들을 필터링할 때 유용

> reduce

```js
array.reduce((acc, element, index, array) => {
  // do something
}, initialValue)
```

- array.reduce(callback(acc, element, [index[, array]])[, initialValue])

- 인자로 주어지는 함수(콜백 함수)를 배열의 각 요소에 대해 한 번씩 실행해서 하나의 결과 값을 반환

- 즉, 배열을 하나의 값으로 계산하는 동작이 필요할 때 사용(총합, 평균 등)

- map, filter 등 여러 배열 메서드 동작을 대부분 대체할 수 있음

- reduce 메서드의 주요 매개변수
  - `acc` : 이전 callback 함수의 반환 값이 누적되는 변수
  - `initialValue`(optional) : 최초 callback 함수 호출시 acc에 할당되는 값, defulat값은 배열의 첫 번째 값임

- reduce의 첫 번째 매개변수인 콜백함수의 첫 번째 매개변수(acc)는 누적된 값(전 단계 까지의)

- reduce의 두 번째 매개변수읜 initialValue는 누적될 값의 초기값, 지정하지 않을 시 배열의 첫 번째 값

> find

```js
array.find((element, index, array)) {
  // do something
}
```

- array.find(callbalc(element[, index[, array]]))

- 배열의 각 요소에 대해 콜백 함수를 한 번씩 실행

- 콜백 함수의 반환 값이 참이면, 조건을 만족하는 첫 번째 요소를 반환

- 찾는 값이 배열에 없으면 undefined 반환

> some

- array.some(callback(element[, index[, array]]))

- 배열의 요소 중 하나라도 주어진 판별 함수를 통과하면 참을 반환(or 느낌)

- 모든 요소가 통과하지 못하면 false 반환

- 빈 배열은 항상 false를 반환

> every

- 배열의 모든 요소가 주어진 판별 함수를 통과하면 참을 반환(and 느낌)

- 하나의 요소라도 통과하지 못하면 거짓 반환

- 빈 배열은 항상 true 반환

---

# 객체 (Object)

> 개요

- 객체는 속성(property)의 집합이며, 중괄호 내부에 key와 value의 쌍으로 표현

- key는 문자열 타입만 가능
  - key 이름에 띄어쓰기 등의 구분자가 있다면 따옴표로 묶어서 표현

- value는 모든 타입(함수 포함) 가능

- 객체 요소 접근은 점(.)또는 대괄호([])로 가능
  - key 이름에 띄어쓰기 같은 `구분자가 있으면 대괄호 접근만 가능`

---

## 객체 관련 문법

> 객체 관련 ES6 문법

- 속성명 충약
  
- 메서드명 축약

- 계산된 속성명 사용하기

- 구조 분해 할당

- 객체 전개 구문(Spread Operator)

> 속성명 축약

- 객체를 정의할 때 key와 할당하는 변수의 이름이 같으면 축약 가능

![image](https://user-images.githubusercontent.com/109258306/196616058-f243cd3d-a9f4-419f-95f9-3a5c8ace54df.png)

> 메서드명 축약

- 메서드 선언 시 function 키워드 생략 가능

![image](https://user-images.githubusercontent.com/109258306/196616230-70b5fb34-3713-44fa-80b8-42049242120c.png)

> 계산된 속성

- 객체를 정의할 때 key의 이름을 표현식을 이용하여 동적으로 생성가능

```js
const key = 'country'
const value = ['한국', '미국', '일본', '중국']

const myObj = {
  [key]: value,
}

console.log(myObj)          // { country: [ '한국', '미국', '일본', '중국' ] }
console.log(myObj.country)  // [ '한국', '미국', '일본', '중국' ]
```

> 구조 분해 할당 (destruction assignment)

- 배열 또는 객체를 분해하여 속성을 변수에 쉽게 할당할 수 있는 문법

![image](https://user-images.githubusercontent.com/109258306/196617631-4cb7cb30-8bf1-42fc-8bb9-e3109a10185e.png)

> Spread syntax(...)

- 배열과 마찬가지로 전개구문을 사용해 객체 내부에서 객체 전개 가능

- 얕은 복사에 활용 가능

```js
const obj = {b: 2, c: 3, d: 4}
const newObj = {a: 1, ...obj, e: 5}

console.log(newObj)   // {a: 1, b: 2, c: 3, d: 4, e: 5}
```

> JSON

- JavaScript Object Notation

- Key-Value 형태로 이루어진 자료 표기법

- JavaScript의 Object와 유사한 구조를 가지고 있지만 Object는 그 자체로 타입이고, JSON은 형식이 있는 "문자열"

- 즉, `JSON을 Object로 사용`하기 위해서는 `변환 작업`이 필요

- 예시

```js
const jsonData = {
  coffee: 'Americano',
  iceCream: 'Mint Choco',
}

// Object -> json
const objToJson = JSON.stringify(jsonData)

console.log(objToJson)          // {"coffee":"Americano","iceCream":"Mint Choco"}
console.log(typeof objToJson)   // string

// json -> Object
const jsonToObj = JSON.parse(objToJson)

console.log(jsonToObj)          // { coffee: 'Americano', iceCream: 'Mint Choco' }
console.log(typeof jsonToObj)   // object
console.log(jsonToObj.coffee)   // Americano
console.log(jsonToObj.iceCream) // Mint Choco
```

> 참고) 배열은 객체다

- 배열은 키와 속성들을 담고 있는 참조 타입의 객체

- 배열은 인덱스를 키로 가지며, length 프로퍼티를 갖는 특수한 객체

![image](https://user-images.githubusercontent.com/109258306/196620003-e1859a6e-d9f4-4215-837a-93f85294c5fd.png)
