# Javascript

## 변수 선언, 초기화, 할당

- 자바스크립트 엔진이 코드를 실행하는 과정

  - 1. 소스코드의 평가(Creation)
    - 실행 컨텍스트를 생성
    - 변수, 함수 등의 선언문만 먼저 실행하여 Lexical Scope의 Environment Record에 변수나 함수 식별자를 등록 => 이 과정이 변수, 함수 선언이 스코프의 최상단으로 끌어 올려진 것 같다고 하여 **호이스팅**이라고 함.
  - 2. 소스코드의 실행(Execution)
    - 순차적으로 코드를 실행 = 런타임이 실행
    - 실행에 필요한 정보(변수, 함수의 참조)를 스코프에서 검색하여 얻으며, 변수 값의 변경 등 소스코드의 실행 결과가 다시 실행 컨텍스트가 관리중인 스코프에 등록

- 변수

  - 하나의 값을 저장하기 위해 확보한 메모리 공간, 또는 그 메모리 공간을 식별하기 위해 붙인 이름
  - MDN 문서 : 자바스크립트 어플리케이션에서 값에 상징적인 이름으로 변수를 사용합니다. 변수명은 **식별자(identifier)**라고 불리며 특정 규칙을 따릅니다.

- 선언

  - var, let, const같은 선언 키워드를 통해 이루어짐
  - 변수, 함수를 실행 컨텍스트의 변수 객체에 등록 -> 이 변수 객체는 스코프가 참조하는 대상이 됨
  - 자바스크립트가 실행 전, 코드 전체를 훑으면서 문제가 없는지 확인하는 과정인 **실행 컨텍스트 단계**에서 진행됨

- 초기화

  - 변수에 값을 저장하기 위한 메모리 공간을 할당한다. 선언된 변수에는 **암묵적으로 `undefined`가 할당**됨.
  - var키워드로 선언된 변수가 초기화되는 과정
    - 1. 실행 컨텍스트 단계에서 실행 컨텍스트에 변수가 등록됨
    - 2. 콜 스택의 메모리 저장 공간에 해당 변수를 위한 메모리를 확보
    - 3. 메모리의 주소 값을 실행 컨텍스트에 등록된 변수에 저장
    - 4. 메모리에 undefined를 할당하여 초기화
  - const, let으로 선언된 변수가 초기화되는 과정
    - 1. 실행 컨텍스트 단계에서 변수를 등록
    - 2. var과는 다르게, 런 타임 과정에서 콜 스택의 메모리 저장 공간에 해당 변수를 위한 메모리를 확보 및 undifined로 할당

- 할당

  - undifined로 초기화된 변수에 실제 값을 할당
  - 할당 연산자 `=`를 통해 이루어지며, 모든 선언 키워드의 할당은 런 타임 과정에서 이루어짐

- 정리
  - var키워드 : 실행 컨텍스트 단계에서 선언 및 undifined로 초기화. 이후 런타임 과정에서 값을 할당
  - const, let키워드 : 실행 컨텍스트 단계에서 선언만 이루어짐(메모리 할당도 받지 않은 상태). 런 타임 과정에서 초기화가 진행되어 메모리를 확보하고, undifined가 저장되어있는 주소값을 할당값이 저장된 주소값으로 교체하여 할당

## 실행 컨텍스트

- 실행 컨텍스트의 개념

  - 실행할 코드에 필요한 환경 정보들을 모아놓은 객체
  - 실행 컨텍스트가 활성화되는 시점에 선언된 변수와 함수를 위로 끌어올리고, 외부 환경 정보를 구성하고, this값을 설정하는 등의 동작을 수행
  - 환경 정보를 모아놓은 객체를 콜 스택에 쌓아 올렸다가, 가장 위에 쌓여있는 컨텍스트와 관련된 코드를 실행하는 식으로 전체 코드의 환경과 실행 순서를 보장

- 실행 컨텍스트의 구성
  ![실행 컨텍스트의 구성](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb8GGt2%2FbtrOR2WnrGp%2Fi8gP5eHGjuIlZS37WFMT01%2Fimg.png)

  - Variable Environment

    - 선언 시점에서 수행되어 현재 컨텍스트 내의 식별자들에 대한 정보(Environment Record)와 외부 렉시컬 환경에 대한 참조(Outer Environment Reference)를 담는다. -> 최초 스냅샷이 생성된 이후에는 초기 상태를 그대로 유지한다.
    - 실행 컨텍스트를 생성할 때 Variable Environment에 정보를 먼저 담은 다음 이를 복사하여 Lexical Environment를 만들며, 이후에는 Lexical Environment를 주로 사용한다.

  - LexicalEnvironment

    - 식별자와 식별자에 바인딩 된 값, 상위 스코프에 대한 참조를 기록하는 자료구조
    - 실행 컨텍스트 생성시에 Variable Environment를 복사하여 만들어짐.
    - 이후 변경사항이 실시간으로 반영됨

  - Environment Record(환경 레코드)
    - 코드가 실행되기 전에 현재 컨텍스트와 관련된 식별자 정보(매개변수, 함수, 변수)들이 저장되고 관리되는 곳
    - `즉, 코드가 실행되기 전에 자바스크립트 엔진은 이미 해당 환경에 속한 코드의 변수명을 모두 알고 있게 된다 => 호이스팅`
  - OuterEnvironmentReference(외부 렉시컬 환경에 대한 참조)

    - 현재 실행중인 environment record보다 바깥에 있는 environment record를 참조한다. 즉, 상위 스코프를 가리킨다.
    - 코드 상에서 어떤 변수에 접근하려고하면 현재 컨텍스트의 Lexical Environment를 탐색하여 발견하면 그 값을 반환하고, 발견하지 못할 경우 OuterEnvironmentReference에 담긴 Lexical Environment를 탐색하는 과정을 반복함. 전역 컨텍스트까지 탐색하여도 해당 변수를 찾지 못하면 undifined가 반환됨

  - This Binding
    - this는 현재 컨텍스트를 가리킨다.
    - method에서 사용시 해당 method가 담겨있는 instance혹은 object를 가리키며, 함수 표현식에서 사용시 this를 바인딩하지 않는 이상 전역 객체를 가리킨다.

- 핵심 정리
  - 1. 실행 컨텍스트는 실행할 코드에 제공할 환경 정보를 모아놓은 객체이다. Global 컨텍스트, Eval 및 함수 실행에 의한 컨텍스트가 있다. 실행 컨텍스트는 활성화되는 시점에 Variable Environment, Lexical Environment, This Binding의 세 가지 정보를 수집한다.
  - 2. Lexical Environment는 함수 실행 도중에 변경되는 사항이 즉시 반영되는 반면, Variable Environment는 초기 상태를 유지한다.
  - 3. Variable Environment와 Lexical Environment는 매개변수명, 변수의 식별자, 선언한 함수의 함수명 등을 수집하는 Environment Record와 바로 직전 컨텍스트의 LexicalEnvironment 정보를 참조하는 Outer Environment Reference로 구성되어 있다.
  - 4. `호이스팅`은 코드 해석을 좀 더 수월하게 하기 위해 `environmentRecord의 수집 과정을 추상화한 개념`으로, 실행 컨텍스트가 관여하는 코드 집단의 최상단으로 이들을 '끌어올린다'고 해석하는 것이다.
  - 5. 스코프는 변수의 유효범위를 말한다. outerEnvironmentReference는 해당 함수가 선언된 위치의 LexicalEnvironment를 참조한다.

## 데이터 타입

- Javascript 타입의 특징
  - 동적 타이핑(Dynamic Typing) 언어 : 선언이 아닌 **할당**에 의해 변수의 타입이 결정됨. 재할당에 의해 언제든지 동적으로 타입 변경이 가능

```javascript
let foo = 42; // Number 타입으로 초기화
foo = 'bar'; // String 타입으로 재할당
foo = true; // Boolean 타입으로 재할당
```

- Javascript의 데이터 타입 종류

  - 원시타입 : 변경 불가능한 값(immutable value)
    - 숫자(Number)
    - 문자(String)
    - 불리언(Boolean)
    - undefined
    - null
    - 심볼(Symbol)
    - ECMAScript2020버전에 새로 생긴 BigInt
  - 객체타입 : 참조형(reference) 타입, 변경 가능한 값
    - 객체, 함수, 배열 등
  - 원시 타입을 변수에 할당하면 변수가 확보하고 있는 메모리 공간에는 `실제 값`이 저장되지만, 객체 타입을 변수에 할당하면 `참조 값`이 저장된다.
  - 원시 타입을 갖는 변수를 다른 변수에 할당하면 원본의 `원시 값이 복사되어 전달`되며(pass by value), 객체 타입을 갖는 변수를 다른 변수에 할당하면 원본의 `참조 값이 복사되어 전달`(pass by reference)
  - `원시 타입의 변경은 불가능하다`의 의미 : 이미 원시 타입으로 할당된 메모리 공간은 다른 값으로 대체할 수 없다.
    ![image](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkPXG8QRZaW5vZMkbTXl0LwaJRRoFNC-zoul2PHof2OUm_J1l1g-XWf7WEv-deowggRLs&usqp=CAU)

- Number타입

  - 자바나 C언어의 경우, 정수와 소수를 구분하여 쓰거나 수의 크기에 따라 int, long, float, double과 같은 다양한 자료형을 사용하지만, javascript는 Number타입으로 사용
  - ECMAScript 사양에 따르면 숫자는 64비트 부동소수점 형식을 따르므로, `모든 숫자는 실수로 처리`된다.(정수로 표현하는 타입이 따로 존재하지 않음)
  - 특별한 값도 표기가 가능 : `Infinity`, `-Infinity`, `NaN`(1을 0으로 나누는 것과 같은 유효하지 않은 숫자 연산을 실행했을 때 생성. Not-a-Number)

- String타입

  - '', "", ``(백틱, ES6)으로 텍스트를 감싼 형태
  - 가장 일반적인 방법은 `작은 따옴표('')`
  - 템플릿 리터럴을 이용한 String타입에는 `${}`내부에 표현식을 삽입하여 변수나 수식을 대입할 수 있음

- Boolean타입

  - 논리적인 참, 거짓을 나타내는 `true`, `false`
  - 주로 조건문에서 사용
  - `0, -0, null, false, NaN, undefined, 빈 문자열("")`은 **false**로 간주됨

- undefined

  - 선언 이후 값을 할당하지 않은 변수에 초기화되는 값
  - undefined는 개발자가 의도적으로 선언하는 값이 아니라, Javascript 엔진이 변수를 초기화할 때 쓰는 값이므로 의도적인 undefined할당은 좋은 방법이 아님.
  - typeof연산자로 확인해보면 undefined 타입이 출력됨

- null

  - 의도적으로 변수에 값이 없다는 것을 명시할 때 사용
  - `null값을 할당한 변수의 데이터 타입을 출력해보면 object가 출력`되므로, null타입 변수인지 확인하기 위해서는 일치 연산자로 확인해야함.

- Symbol
  - ECMAScript6에서 등장한 새로운 데이터 타입
  - 이름이 충돌 위험이 없는 객체의 `고유한 프로퍼티 키`를 만들기 위한 데이터 타입
  - 인자값으로 받은 문자열은 생성된 심볼 값에 대한 `설명`으로, 디버깅 용도로만 사용되며 인자 값으로 같은 문자열을 주어도 같은 값으로 생성되지 않는다.

```javascript
const mySymbol = Symbol('mySymbol');
console.log(mySymbol); // Symbol(mySymbol)
console.log(mySymbol.description); // mySymbol
console.log(mySymbol === Symbol('mySymbol')); // false

var obj = {};
obj[key] = 'value';
console.log(obj[key]); // value
```

## this

- this란?

  - 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수

- this의 특징

  - this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있음

    ```javascript
    // 1. 전역
    console.log(this); // window => 전역 객체

    // 2. 일반 함수 내부
    function square(number) {
      console.log(this); // window => 전역 객체
      return number * number;
    }
    square(2);

    // 3. 객체 메서드 내부
    const person = {
      name: 'Lee',
      getName() {
        console.log(this); // {name: 'Lee', getName: ƒ} => 메서드를 호출한 객체
        return this.name;
      },
    };
    console.log(person.getName()); // Lee

    // 4. 생성자 함수
    function Person(name) {
      this.name = name;
      console.log(this); // Person {name: 'Lee'} => 생성자 함수가 생성할 인스턴스
    }
    const me = new Person('Lee');
    ```

  - this는 자바스크립트 엔진에 의해 암묵적으로 생성되며, 함수를 호출하면 인자와 this가 암묵적으로 함수 내부에 전달됨
  - `this가 가리키는 값(this 바인딩)`은 함수가 선언된 방식이 아니라 `함수를 호출하는 방식`에 의해 `동적`으로 결정됨
  - 인자를 지역 변수처럼 사용할 수 있는 것처럼, this도 지역 변수로 사용할 수 있음

- 화살표 함수

  - 콜백 함수 내부에서 this가 전역 객체를 가리키는 문제를 해결하기 위해 등장
  - 일반 함수는 호출 방식에 따라 동적으로 this에 객체가 바인딩 되지만, 화살표 함수는 함수를 선언할 떄 this에 바인딩할 객체가 정적으로 결정
  - 화살표 함수 내부의 this는 언제나 상위 스코프의 this를 가리킴

    ```javascript
    const fn = {
      title: 'Hello World!',
      tags: [1, 2],
      showTags() {
        // 객체 내부 메서드에서의 this = 객체를 가리킴
        this.tags.forEach(function (tag) {
          console.log(tag);
          console.log(this); // window
          // => 콜백 함수가 일반 함수로서 호출되어 전역 객체를 가리킴
        });
      },
    };
    fn.showTags();

    const arrfn = {
      title: 'Hello World!',
      tags: [1, 2],
      showTags() {
        this.tags.forEach((tag) => {
          console.log(tag);
          console.log(this); // {title: 'Hello World!', tags: Array(2), showTags: ƒ}
          // 콜백 함수가 arrow function인 경우 상위 스코프의 this를 가리킴
        });
      },
    };
    arrfn.showTags();
    ```
