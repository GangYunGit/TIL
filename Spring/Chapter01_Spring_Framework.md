# Spring Framework

> Framework이란?

- 웹 애플리케이션을 개발하기 위해서는 기본 기능에 대한 많은 기능을 설계, 작성해야 한다. (요청처리, 세션관리, 리소스 관리, 멀티 `쓰레드(명령 처리 흐름)` 등) 하지만 `기본적인 공통 구조(framework)`를 제공한다면 개발자는 웹 어플리케이션 기능 자체 개발에만 신경쓰면 되기 때문에 생산성이 높아 진다. 개발자 입장에서는 완성된 구조에 자신이 맡은 코드만 개발해서 넣어주면 되기 때문에 개발 시간을 단축할 수 있다.

> Spring Framework의 등장

- 90년대 말부터, 웹사이트가 복잡해지면서 엔터프라이즈 급 서비스가 필요하게 되었다.
  - 엔터프라이즈 애플리케이션: 지속적인 데이터처리, 막대한 양의 데이터, 많은 수의 동시접속자, 다양한 애플리케이션 통합을 필요로 하는 애플리케이션

- 복잡한 구동환경과 하드웨어 구성이 필요하지 않은 `경량 프레임워크`를 지향하는 방법론이 Spring Framework의 토대가 되었다.

> Spring Framework의 특징

- POJO(Plain Old Java Object) 방식의 프레임워크인 EJB가 기능 작성을 위해서 인터페이스를 구현하거나 상속하는 것에 비해 `일반적인 자바 객체를 이용해서 그대로 사용할 수 있음`을 의미한다.

- `의존성 주입(Dependency Injection)`을 통한 객체관계 구성 :  프레임워크 내부에서 사용되는 객체간 의종선이 존재할 경우, 개발자는 의존성에 관련한 설정만 해주면 실제 의존성 생성은 프레임워크가 담당한다.

- `제어 역전(IoC, Inversion of Control)` : 제어 역전을 통해 객체 및 프로세스의 제어를 프레임워크가 담당한다. 필요에 따라 개발자의 코드를 호출한다.

- 관점지향 프로그래밍(AOP, Aspect Oriented Programming)지원 : 트랜잭션, 로깅 등 여러 모듈에서 `공통적으로 사용하는 기능`에 대해서 별도로 `분리`하여 `작성, 관리`할 수 있는 기능을 제공한다.

- 높은 확장성과 다양한 라이브러리 지원 : 기존의 라이브러리를 스프링에서 사용할 수 있는 기능을 지원하고 있다. 특히 영속성과 관련하여 `MyBatis`, `Hibernate`등의 완성도 높은 데이터베이스  라이브러리와 연결가능한 인터페이스를 제공한다.

---

## DI(Dependency Injection) - 의존성 주입

> 의존성(Dependency)

- ClassA 객체가 어떤 일을 처리하기 위해서 ClassB의 객체의 도움을 받아야만 일을 처리할 수 있다면 `'ClassA는 ClassB에 의존한다.'`라고 표현

![image](https://user-images.githubusercontent.com/109258306/200158423-8191ddd5-d2c5-484d-ac4b-650cda3cdfe5.png)

> 의존성 주입(Dependency Injection)

- 사용 객체에 대하여 직접 의존성을 생성하는 것보다는 생성자, 팩토리 메서드, 세터 등을 이용하여 종속성을 정의하는 방식

![image](https://user-images.githubusercontent.com/109258306/200158480-245ebfae-2aa4-43f0-af96-da216957fe12.png)

- 종속성에 대한 인스턴스화를 직접 제어하지 않고 이를 역전 시키기 때문에 이러한 프로세스를 제어 역전(Inversion of Control)이라 한다.

---

## Spring 라이브러리 세팅하기

> Maiven을 통해서 프로젝트에 Spring 라이브러리 세팅

- mvnrepository에서 Spring Context(5.3.18)를 복사

![image](https://user-images.githubusercontent.com/109258306/200160639-ca2245de-4478-4a67-af14-dff08a317acb.png)

- pom.xml에 \<dependencies>태그를 생성하여 붙여넣기

![image](https://user-images.githubusercontent.com/109258306/200160774-e3fe1b33-c4c9-48b0-af6b-fdaf51cf7070.png)

- pom.xml 저장 후 'Maven Dependencies' 라이브러리가 생기는지 확인

![image](https://user-images.githubusercontent.com/109258306/200160840-add3219d-850d-4def-910c-99721d0455cf.png)