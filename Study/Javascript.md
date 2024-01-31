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
  - 실행 컨텍스트가 활성화되는 시점에 선언된 변수와 함수를 위로 끌어올리로, 외부 환경 정보를 구성하고, this값을 설정하는 등의 동작을 수행
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
