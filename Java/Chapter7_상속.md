# 상속(Inheritance)

## 상속

- 어떤 클래스의 특성을 그대로 갖는 새로운 클래스를 정의한 것

  ```java
  public class Person {
    String name;
    int age;

    public void eat() {
      system.out.println("음식을 먹는다.");
    }

  // "extends" 키워드를 이용하여 Person 클래스를 상속받음
  public class Student extends Person {
    String major;
    public void study() {
      system.out.println("공부를 한다.");
    }
  }
  ```

## 상속의 특징

> 확장성, 재사용성

- 부모의 생성자와 초기화 블록은 상속받지 않음

> 클래스 선언 시 `extends`키워드를 명시

- 자바는 다중 상속을 허용하지 않음. 단일 상속만 지원

> 관계

- 부모(상위 또는 Super) 클래스
  
- 자식(하위 또는 Sub) 클래스

> 자식 클래스는 부모 클래스의 멤버변수, 메소드를 자신의 것처럼 사용할 수 있다.

- 단, 접근 제한자에 따라 사용 여부가 달라진다.

> Object 클래스는 `모든 클래스의 조상 클래스`

- 별도의 extends가 없는 `extends Object`가 생략된 것임

> `Super`키워드

1. Super를 통해 조상 클래스의 생성자 호출

  ```java
  public class Person {
    String name;
    int age;

    public Person(String name, int age) {
      this.name = name;
      this.age = age;
    }

    public void eat() {
      system.out.println("음식을 먹는다.");
    }
  }

  public class Student extends Person {
    String major;

    public Student(String name, int age, String majof) {
      super(name, age);   // 조상 클래스의 생성자 호출
      this.major = major;
    }

    public void study() {
      system.out.println("공부를 한다.");
    }
  }
  ```

2. super를 통해 조상 클래스의 메서드 호출

  ```java
  public class Person {
    String name;
    int age;

    public Person(String name, int age) {
      this.name = name;
      this.age = age;
    }

    public void eat() {
      system.out.println("음식을 먹는다.");
    }
  }

  public class Student extends Person {
    String major;

    public Student(String name, int age, String majof) {
      super(name, age);   // 조상 클래스의 생성자 호출
      this.major = major;
    }

    public void study() {
      super.eat();    // 조상 클래스의 메서드 호출
      system.out.println("공부를 한다.");
    }
  }
  ```

> `오버라이딩`(재정의, overriding)

- 상위 클래스에 선언된 메서드를 자식 클래스에서 재정의하는 것

- 메서드의 이름, 반환형, 매개변수(타입, 개수, 순서)가 동일해야 한다.

- 하위 클래스의 접근제어자 범위가 상위 클래스보다 크거나 같아야 한다. => 부모가 감추었는데 자식이 오픈하는건 가능, 부모가 오픈했는데 자식이 감추는건 불가능

- 조상보다 더 큰 예외를 던질 수 없다.

- 메서드 오버로딩과 혼돈하지 말 것!
  - Annotation 표시 : `@`를 이용하여 오버라이딩 된 메서드 위에 `@Override`를 붙여주면 코드 실행에는 영향이 없지만 조금 더 안전한 프로그램을 만드는데에 기여할 수 있다. (컴파일러에게 오버라이딩 되었다고 알려줌) 

## Object

> Object 클래스

- 가장 최상위 클래스로, 모든 클래스의 조상

- Object의 멤버는 모든 클래스의 멤버

> toString 메서드

- 객체를 문자열로 변경하는 메서드

> equals 메서드

- 두 객체가 같은지를 비교하는 메서드

- 두 개의 레퍼런스 변수가 같은 객체를 가리키고 있는지 확인 
  

## final 키워드

> final

- 해당 선언이 최종 상태. 결고 수정 될 수 없음

- final 클래스 : 상속 금지

- final 메소드 : overriding 금지

- final 변수 : 더 이상 값을 바꿀 수 없음. 상수화