# JSTL(JSP Standard Tag Library)

> JSTL

- JavaEE 기반의 웹 어플리케이션 개발을 위한 컴포넌트 모음

- JSP 스크립트와 html 코드가 섞여서 복잡한 구조를 만듬. 이를 간결하게 작성하기 위해서 `자바 코드를 태그 형태로 작성`해 놓은 것

- 유용한 커스텀 태그들을 모아서 표준화 한 것

> JSTL 기능

- 간단한 프로그램 로직 구현 기능 - 변수 선언, if, for문 등

- 데이터 출력 포맷 설정

- DB CRUD 가능
  
- 문자열 처리 함수

- XML 문서 처리

- 위 기능들을 가지고 있는 라이브러리 : `core`, format, sql, functions, xml

> JSTL 사용하기

- maven repository에서 .jar파일 설치하기

![image](https://user-images.githubusercontent.com/109258306/196684676-ff582511-f51b-40c7-95c9-c4c643c911ee.png)

- taglib 지시자를 이용한 태그 사용 선언

```java
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
```
![image](https://user-images.githubusercontent.com/109258306/196707429-823637f0-fdb7-4c99-a779-e0b5b239c74e.png)


- 사용하고자 하는 기능에 따라 어떤 라이브러리를 사용할지 작성한다. (ex: core)

- 사용할 태그를 구분하기 위해서 prefix를 작성해준다.

```java
<c:out value="Hello! JSTL"/>
```

- prefix에 작성한 접두사를 적어주고, 기능에 따른 태그를 선택하여 작성한다.

> JSTL - Core

| 태그        | 설명                                                           |
| ----------- | -------------------------------------------------------------- |
| c:set       | 변수에 값 설정                                                 |
| c:remove    | 변수 제거                                                      |
| c:if        | 조건에 따른 코드 실행                                          |
| c:choose    | when, otherwise tag와 함꼐 쓰인다.<br> if-else와 동일하게 사용 |
| c:forEach   | 배열, collection의 각 요소에 접근하기 위해 사용                |
| c:import    | 외부 자원을 사용하기 위해서 사용                               |
| c:forTokens | 구분자를 이용하여 구분된 토큰을 처리                           |
| c:redirect  | redirect시 사용                                                |
| c:url       | URL 작성                                                       |
| c:out       | 출력                                                           |
| c:catch     | 예외처리                                                       |

> c:set 태그

- 기본형식 : \<c:set var="변수 이름" value="변수 값" scope="page|request|session|application"\/>

| 속성   | 설명                                              |
| ------ | ------------------------------------------------- |
| var    | 변수이름 지정                                     |
| value  | 변수 값 지정                                      |
| scope  | 변수의 유효영역 지정, 지정하지 않으면 기본값 page |
| target | 속성값을 지정할 java bean 객체                    |

- ex) request영역에 name속성을 지정하고 'ssafy'라는 문자열을 저장
  - \<c:set var="name" value="ssafy" scope="request"\/>
  - request.setAttribute("name", "ssafy") 와 동일함
