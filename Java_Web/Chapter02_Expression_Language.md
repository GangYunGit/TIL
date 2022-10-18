# 2022. 10. 18.

# Expression Language

## 소개

> EL (Expression Language)

- 표현언어라고 하며, 값(data)를 웹 페이지에 표시하는데 사용되는 `태그`이다.
  
- JSP 스크립트의 `표현식(<%= %>)`을 대신하여 속성값을 쉽게 출력할 수 있도록 고안된 언어이다.
  
- EL 표현식에서 Map 객체 또는 `Java Bean 객체(데이터를 주고 받기 위한 작은 바구니)`의 경우 도트(.) 연산자를 사용하여 속성을 출력할 수 있다. 이 때 오른쪽의 값은 Map 객체의 경우 key, Java Bean의 경우 Bean property이다.

- JSP 영역 기본 객체 (page, request, session, application) 속성 사용 가능

- 수치, 관계, 논리연산 제공

- 자바 클래스 메서드 호출 기능 제공

- 표현언어 기본 객체 제공(param, paramValues)

> EL (Expression Language) 문법

- 내장객체

![image](https://user-images.githubusercontent.com/109258306/196417405-5f7a3d6f-8d20-4ba6-91fc-143c0d9e49e1.png)

![image](https://user-images.githubusercontent.com/109258306/196417580-2ecf881b-62cf-4171-9c1a-ba13715a9b47.png)

> EL 연산자(Operator)

- EL 식은 연산자를 포함할 수 있으며, 산술, 조건, 논리, 관계 연산을 수행할 수 있다.

- 또한 일반적인 연산 이외에 null 연산을 수행할 수 있다. empty 연산자는 검사할 객체가 null인지 아닌지 검사하기 위해 사용된다. (null, "", 요소가 없는 list, mpa, collection은 True)

![image](https://user-images.githubusercontent.com/109258306/196437991-0a9d5128-a537-4cda-af14-192d1c950c50.png)

- 실습해보기

![image](https://user-images.githubusercontent.com/109258306/196440858-9260c02a-19a0-41f1-b135-7436297d2aeb.png)

![image](https://user-images.githubusercontent.com/109258306/196441035-bccf914f-45fa-4d25-a3f3-82e86ce2d087.png)



> EL로 기본 객체 속성 설정하기 / 요청 파라미터 처리하기

- ex1) request.setAttribute("userInfo", "ssafy");
  - ${requestScope.userInfo}
  - ${pageContext.request.userInfo}
  - ${userInfo} => `property 이름만 사용할 경우 pageScope > requestScope > sessionScope > applicationScope 순서대로 객체를 찾음`

- `name이라는 property의 이름을 사용한 경우` pageScope의 값이 `없음(null)`이므로 그 다음으로 가까운 request.Scope의 값을 가져와 사용한다.
  
![image](https://user-images.githubusercontent.com/109258306/196443166-d2b6bcd5-952b-472d-95e2-7d5a2cded009.png)

- ex2) url?name=ssafy&hobby=등산&hobby=수영
  - ${param.name}
  - ${paramValues.hobby[0]}, ${paramValues.hobby[1]}

- 쿼리스트링을 같은 값으로 보내주었을 때, EL 표현법을 쓰면 `"=="도 equals()메서드 처럼 값을 비교하는 것으로 쓸 수 있다.`

![image](https://user-images.githubusercontent.com/109258306/196452752-9f7c7f60-f12e-4178-a424-ceb896c42642.png)
