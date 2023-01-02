# DI(Dependency Injection)

## 스프링 빈 설정 방식

> XML 문서

![image](https://user-images.githubusercontent.com/109258306/210194319-02082807-3596-42f5-a084-e0fb3e6cc27b.png)

- XML문서 형태로 빈의 설정 메타 정보를 기술
  
- 단순하며 사용하기 쉬움

- \<bean> 태그를 통해 세밀한 제어 가능

> Annotation

![image](https://user-images.githubusercontent.com/109258306/210194449-00747f55-ce62-4cd8-8446-561855bd3a52.png)

- 어플리케이션의 규모가 커지고 빈의 개수가 많아질 경우 XML 파일을 관리하는 것이 번거로움

- 빈으로 사용될 클래스에 특별한 annotation을 부여해 주면 자동으로 빈 등록 가능

- `오브젝트 빈 스캐너`로 `빈 스캐닝`을 통해 자동 등록
  - 빈 스캐너는 기본적으로 클래스 이름을 빈 아이디로 사용
  - 단, `클래스 이름의 첫 글자만 소문자로 바꿔` 사용

![image](https://user-images.githubusercontent.com/109258306/210194510-482375ca-b003-42d3-a425-f84249d2a9f4.png)

- Annotation으로 빈을 설정 할 경우 반드시 `component-scan을 설정` 해야 한다.

> Stereotype annotation 종류

- 빈 자동등록에 사용할 수 있는 annotation

- 빈 자동인식을 위한 annotation이 여러가지인 이유
  - 계층별로 빈의 특성이나 종류를 구분
  - AOP Pointcut 표현식을 사용하면 특정 annotation이 달린 클래스만 설정 가능
  - 특정 계층의 빈에 부가기능을 부여

| Stereotype  | 적용대상                                                                                                                          |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- |
| @Repository | Data Access Layer의 DAO 또는 Repository 클래스에 사용<br>DataAccessException 자동변환과 같은 AOP의 적용 대상을 선정하기 위해 사용 |
| @Service    | Service Layer의 클래스에 사용                                                                                                     |
| @Controller | Presentation Layer의 MVC Controller에 사용.<br>스프링 웹 서블릿에 의해 웹 요청을 처리하는 컨트롤러 빈으로 선정                    |
| @Component  | 위의 Layer 구분을 적용하기 어려운 일반적인 경우에 설정                                                                            |

> Dependency Injection

- 객체 간의 의존관계를 자신이 아닌 외부의 조립기가 수행

- `제어의 역행`이라는 의미로 사용

- DI를 통해 시스템에 있는 각 객체를 조정하는 외부 개체가 객체들에게 생성시에 의존관계를 주어짐

- `느슨한 결합(loose coupling)`의 주요강점
  - 객체는 인터페이스에 의한 의존 관계만을 알고 있으며, 이 의존 관계는 구현 클래스에 대한 차이를 모르는 채 서로 다른 구현으로 대체가 가능

---

## DI - XML

> Spring 설정 : xml

- 기본 설정
  - \<bean> : 스프링 컨테이너가 관리할 Bean 객체를 설정

- 기본 속성
  - name : 주입 받을 곳에서 호출 할 이름 설정
  - id : 주입 받을 곳에서 호출 할 이름(유일 값)
  - class : 주입할 객체의 클래스
  - factory-method : Singleton 패턴으로 작성된 객체의 factory 메서드 호출

![image](https://user-images.githubusercontent.com/109258306/210196627-d46bafa6-cb28-41e4-b1fb-29c6b2fc1e09.png)

- bean 객체 얻기
  - 설정 파일에 설정한 bean을 Container가 제공하는 주입기 역할의 api를 통해 주입 받는다.
  