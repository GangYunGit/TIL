# 인터페이스

## 인터페이스의 특징

- 완벽한 추상화된 객체

- 모든 메서드가 abstract 형태

- 설계도

  ```java
  // interface 키워드를 이용하여 선언!
  public interface MyInterface {
    // 선언되는 변수는 모두 상수로 적용됨!!
    publci static final int MEMBER1 = 10;  
    // 여기는 'public static final'이 생략된 것일 뿐, 사실상 위와 똑같음
    int MEMBER2 = 10;  

    // 선언되는 메서드는 모두 추상 메서드로 적용
    public abstract void method1(int param);
    // 여기도 'public abstract'이 생략된 것일 뿐, 사실상 위와 똑같음
    void method(int param);
  }
  ```

- 인터페이스 extends를 이용하여 상속 가능(`다중 상속가능`, 구현부가 없음)

  ```java
  class Circle implements Shape, MyIntf1, MyIntf2 { }
  ```

- 객체 생성이 불가능 (추상 클래스와 동일한 특성)

  ```java
  interface MyInterface {}

  public class Main {
    // !!!!인스턴스 생성 불가능!!!!!!
    MyInterface m = new MyInterface();
  }
  ```

- `클래스가 인터페이스를 상속할 경우`에는 extends 키워드가 아니라 `implements 키워드`를 사용

  ```java
  interface Shape {}
  
  class Circle extends Shape {}     // 틀린 문법
  
  class Circle implements Shape {}  // implements 키워드로 상속!
  ```

- 인터페이스를 상속받는 하위클래스는 추상 메소드를 반드시 오버라이딩(재정의) 해야 한다. 구현하지 않을 경우 abstract 클래스로 표시해야 함.

  ```java
  interface Chef {
    // 'public abstract'가 생략되어있음!
    void cook();
  }

  // 상속받을 경우
  class KFoodChef implements Chef {
    @Override   // 반드시 오버라이딩!!
    public void cook() {
      System.out.println("한식을 요리한다.");
    }
  }

  // 구현하지 않을 경우
  public abstract class JFoodChef implements Chef{
    // abstract 클래스로 표시
  }
  ```

---

## 인터페이스의 필요성

- 구현의 강제로 표준화 처리 (abstract 메서드 사용)

- 인터페이스를 통한 가접적인 클래스 사용으로 손쉬운 모듈 교체 지원

- `서로 상속의 관계가 없는 클래스들에게` 인터페이스를 통한 관계 부여로 `다형성 확장`

- 모듈 간 독립접 프로그래밍 가능 -> 개발 기간 단축

  - "IStudentManager"라는 인터페이스를 사용하면 이후에 새로운 버전의 StudentManager를 만들었을 때 보다 쉽게 교체하여 사용할 수 있다.
  
  ![image](https://user-images.githubusercontent.com/109258306/189313933-8d86e55b-5d0b-442f-8522-63441030ba0e.png)

  ![image](https://user-images.githubusercontent.com/109258306/189314424-8c2ac77e-adc1-43d4-8619-d272d260a8d6.png)

