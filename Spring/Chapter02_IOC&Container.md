# IoC (Inversion of Control) & Container

## IoC (제어의 역행)

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

## Container

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

## IoC개념

> 객체간 강한 결합

- 클래스 호출 방식

- 클래스내에 선언과 구현이 모두 되어있기 때문에 다양한 형태로 변화가 불가능

> 객체 간의 강한 결합을 다형성을 통해 결합도를 낮춤

- 인터페이스 호출 방식
  - 구현 클래스 교체가 용이하여 다양한 형태로 변화가능
  - 하지만 인터페이스 교체 시 호출 클래스도 수정해야 함.

- 팩토리 호출 방식
  - 팩토리 방식은 팩토리가 구현 클래스를 생성하므로 클래스는 팩토리를 호출
  - 인터페이스 변경 시 팩토리만 수정하면 됨. 호출 클래스에는 영향을 미치지 않음
  - 클래스에 팩토리를 호출하는 소스가 들어가야 함. => 팩토리에 의존

- IoC 호출 방식
  - 팩토리 패턴의 장점을 더하여 어떠한 것에도 의존하지 않는 형태
  - 실행시점(Runtime)에 클래스 간의 관계가 형성이 됨.

## Spring DI 용어 정리

> 빈(Bean)

- 스프링이 IoC 방식으로 관리하는 오브젝트

- `스프링이 직접 그 생성과 제어를 담당하는 오브젝트`만을 Bean이라고 부른다.

> 빈 팩토리(Bean Factory)

- 스프링이 IoC를 담당하는 핵심 컨테이너

- Bean을 등록, 생성, 조회, 반환하는 기능을 담당

- 일반적으로 BeanFactory를 바로 사용하지 않고 이를 확장한 `ApplicationContext`를 사용

> ApplicationContext

- BeanFactory를 확장한 IoC 컨테이너

- Bean을 등록하고 관리하는 기본적인 기능은 BeanFactory와 동일

- 스프링이 제공하는 각종 부가 서비스를 추가로 제공(scope, init-method 등등)

- 스프링으로 만들어진 객체는 기본적으로 `singleton`으로 생성된다.
  - xml에 bean을 생성할 때 `scope="prototype"`을 추가해주면 객체를 필요할 때마다 만들어내게 된다.

