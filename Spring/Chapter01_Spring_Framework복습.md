# Spring Framework

## Spring Framework의 등장배경

> 웹 사이트가 점점 커지면서 엔터프라이즈급의 서비스가 필요하게 됨

- 세션빈에서 Transaction 관리가 용이

- 로긴, 분산처리, 보안

> 자바 진영에서는 EJB가 엔터프라이즈급 서비스로 각광받게 됨

- EJB스펙에 정의된 인터페이스에 따라 코드를 작성하므로 기존에 작성된 POJO를 변경해야함

- 컨테이너에 배포를 해야 테스트가 가능해 개발속도가 저하

- 배우기 어렵고, 설정할 부분도 많음

- EJB는 RMI를 기반으로하는 서버이므로 무거운 Container

> Rod Johnson이 EJB를 사용하지 않는 엔터프라이즈 어플리케이션을 개발하는 방법을 소개(스프링의 모태)

- AOP나 DI같은 새로운 프로그래밍 방법론으로 가능

- POJO로 전언적인 프로그래밍 모델이 가능해짐

> POJO(Plain Old Java Object)

- 특정 프레임워크나 기술에 의존적이지 않은 자바 객체

- `특정 기술에 종속적이지 않기` 때문에 생산성, 이식성 향상

- Plain : component interface를 상속받지 않아 특정 framework에 종속되지 않는 특징

- Old : EJB 이전의 java class

> 경량 프레임워크

- EJB가 제공하는 서비스를 지원해줄 수 있는 프레임워크 등장

- Hibernate, JDO, MyBatis, Spring

> POJO + Framework

- EJB서버와 같은 거창한 컨테이너 필요 없음

- 오픈소스 프레임워크(무료!)

- 다양한 라이브러리 지원

- 모든 플랫폼에서 사용 가능(Java 기반이라서)

---

## Spring Framework의 구조

> `POJO` (Plain Old Java Object)

- 특정 환경이나 기술에 종속적이지 않은 객체지향 원리에 충실한 자바객체

- 테스트하기가 용이하며, 객체지향 설계를 자유롭게 적용할 수 있다.

> PSA (Portable Service Abstraction)

- 환경과 세부기술의 변경과 관계없이 일관된 방식으로 기술에 접근할 수 있게 해주는 설계 원칙

> IoC / DI (Dependency Injection)

- DI는 유연하게 확장 가능한 객체를 만들어 두고 객체 간의 의존관계는 외부에서 다이나믹하게 설정.

> AOP (Aspect Oriented Programming)

- 관심사의 분리를 통해서 소프트웨어의 모듈성을 향상.

- 공통 모듈(ex. 보안 기능)을 여러 코드에 쉽게 적용가능

> 경량 컨테이너

- 스프링은 자바객체를 담고 있는 컨테이너이다.

- 스프링 컨테이너는 자바 겍체의 `생성`과 `소멸`과 같은 `라이프 사이클을 관리`
  - `new` 키워드가 필요 없어짐
  
- 언제든지 스프링 컨테이너로부터 필요한 객체를 가져와 사용할 수 있다.

> DI(Dependency Injection - 의존성 지원) 패턴 지원

- 스프링은 `설정 파일`이나, `어노테이션`을 통해서 객체 간 의존 관계를 설정할 수 있다.

- 따라서, 객체는 의존하고 있는 객체를 직접 생성하거나 검색할 필요가 없다.

> 영속성과 관렌된 다양한 API를 지원

- 스프링은 JDBC를 비롯하여 MyBatis, Hibernate, JPA등 DB처리를 위해 널리 사용되는 라이브러리와 연동을 지원하고 있다.

> Spring Framework Module

![image](https://user-images.githubusercontent.com/109258306/209666793-526a0602-0299-45e5-a3d9-fd7df7d32c11.png)

