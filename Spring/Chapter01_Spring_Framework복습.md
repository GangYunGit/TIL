# 2022. 12. 27.

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

---

## IoC (Inversion of Control) & Container

### IoC (제어의 역행)

- 객체지향 언어에서 Object 간의 연결 관계를 `런타임`에 결정

- 객체 간의 관계가 느슨하게 연결됨 (loose coupling)

- IoC의 구현 방법 중 하나가 DI(Dependency Injection)

> IoC의 유형

- Dependency Lookup
  - JNDI Lookup

- Dependency Injection
  - **Setter Injection**
  - `Constructor Injection`
  - Method Injection

> Dependency Lookup

- 컨테이너가 lookup context를 통해서 필요한 Resource나 Object를 얻는 방식

- Lookup한 Object를 필요한 `타입으로 Casting` 해주어야 함

- Naming Exception을 처리하기 위한 로직이 필요

> Dependency Injection

- Object에 lookup 코드를 사용하지 않고 컨테이너가 직접 의존 구조를 Object에 설정 할 수 있도록 지정해주는 방식

- Object가 컨테이너의 존재 여부를 알 필요가 없음.

- Setter Injection과 Constructor Injection을 주로 사용

### Container

- 객체의 생성, 사용, 소멸에 해당하는 라이프사이클을 담당

- 라이프사이클을 기본으로 애플리케이션 사용에 필요한 주요 기능을 제공

> Container 기능

- 라이프사이클 관리
  
- Dependency 객체 제공

- Thread 관리

- 기타 애플리케이션 실행에 필요한 환경

> Container의 필요성

- 비즈니스 로직 외에 부가적인 기능들에 대해서는 독립적으로 관리되도록 하기 위함
  
- 서비스 lookup이나 Configuration에 대한 일관성을 갖기 위함

- 서비스 객체를 사용하기 위해 각각 Factory 또는 Singleton 패턴을 직접 구현하지 않아도 됨

> IoC Container

- 오브젝트의 생성과 관계설정, 사용, 제거 등의 작업을 애플리케이션 코드 대신 독립된 컨테이너가 담당

- 컨테이너가 코드 대신 오브젝트에 대한 제어권을 갖고 있어 `제어의 역전`이라고 부름

- 이러한 이유로, 스프링 컨테이너를 IoC 컨테이너라고 부르기도 함

- 스프링에서 IoC를 담당하는 컨테이너에는 `BeanFactory`, `ApplicationContext`가 있음

> Spring DI Container

- Spring DI Container가 관리하는 객체를 `Bean`이라 하고, 이 빈들의 생명주기를 관리하는 의미로 `BeanFactory`라 한다.

- BeanFactory에 여러 가지 컨테이너 기능을 추가하여 ApplicationContext라 한다.

- BeanFactory
  - Bean을 등록, 생성, 조회, 반환 관리
  - 일반적으로 BeanFactory보다는 이를 확장한 ApplicationContext를 사용
  - `getBean()` method가 정의되어 있음 => `컨테이너가 만든 객체를 가져와서 사용할 때` 사용!

- ApplicationContext
  - Bean을 등록, 생성, 조회, 반환 관리하는 기능은 BeanFactory와 동일
  - Spring의 각종 부가 서비스를 추가로 제공
  - Spring이 제공하는 ApplicationContext 구현클래스는 여러가지

### IoC개념

> 객체간 강한 결합

- 클래스 호출 방식

- 클래스내에 선언과 구현이 모두 되어있기 때문에 다양한 형태로 변화가 불가능

> 객체 간의 강한 결합을 다형성을 통해 결합도를 낮춤

- 인터페이스 호출 방식

- 구현 클래스 교체가 용이하여 다양한 형태로 변화가능

- 하지만 인터페이스 교체 시 호출 클래스도 수정해야 함.