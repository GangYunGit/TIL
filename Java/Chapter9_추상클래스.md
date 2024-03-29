# 추상클래스

## 추상 클래스의 정의

- cook() 메서드는 자손 클래스에서 반드시 재정의해서 사용되기 때문에 조상의 구현이 무의미

- 메서드의 선언부만 남기고 구현부는 ";"(세미콜론)으로 대체

- 구현부가 없으므로 abstract 키워드를 메서드 선언부에 추가

- 객체를 생성할 수 없는 클래스라는 의미로 선언부에 abstract를 추가

  ```java
  // 객체를 생성할 수 없는 abstract 클래스 선언
  public abstract class Chef {
    String name;
    int age;
    String speciality;

    public void eat() {
      System.out.println("음식을 먹는다.");
    }

    // 미완성 메서드임을 밝힌다.
    public abstract void cook();
  }
  ```

  ```java
  public class ChefTest {
    public static void main(String[] args) {
      Chef c = new KFoodChef();   // 가능
      c.cook;   // 가능

      // 추상 클래스는 미완성 설계도이므로, 인스턴스 생성 불가능
      Chef c2 = new Chef();   

      // 미완성된 부분을 만들어 주면 됨
      // 익명 클래스 문법으로 1회 한정으로 구현하고 인스턴스를 만들 수 있음!
      Chef c2 = new Chef() {
        @Override
        public void cook() {
          System.out.println("요리한다.");
        }
      };

      c2.cook();  // 익명 클래스로 인해 가능
    }
  }
  ```

> 추상 메서드를 활용하면 좋은점?

- 부모가 구현하고 싶은 내용이 없다고 해서, 구현 자체를 빼버리면 동적 바인딩에 의해 자식의 오버라이딩된 함수가 실행되는 기회를 없애게 된다. 

- abstract로 만들어 놓으면 자식클래스는 `해당 클래스를 무조건 구현해야하는 의무(강제성)`를 가진다. => 프로그램의 안정성 향상

> 추상 클래스 특징

- abstract 클래스는 상속 전용의 클래스 (미완성된 클래스)

- 클래스에 구현부가 없는 메서드가 있으므로 객체를 생성할 수 없음

- 상위 클래스 타입으로 자식을 참조할 수는 있음
