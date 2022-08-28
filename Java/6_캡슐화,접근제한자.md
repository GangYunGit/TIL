# 캡슐화(Encapsulation)

> 캡슐화

- 객체의 속성(Data fields)과 행위(메서드)를 하나로 묶고, 실제 구현 내용 일부를 외부에 감추어 은닉한다.

---

# 접근 제한자

> 접근 제한자(access modifier)

- 클래스, 멤버 변수, 멤버 메서드 등의 선언부에서 접근 허용 범위를 지정하는 역할의 키워드이다.

- 접근 제한자의 종류
  
  - public : 모든 위치에서 접근 가능
  - protected : 같은 패키지에서 접근이 가능, 다른 패키지에서는 접근 불가능. 단, 다른 패키지의 클래스와 상속관계가 있을 경우 접근 가능
  - (default) : 같은 패키지에서만 접근이 허용. 접근 제한자가 선언이 안되었을 경우 기본 적용
  - private : 자신 클래스에서만 접근 호용

- 그 외의 제한자
  
  - static : 클래스 레벨의 요소 설정
  - final : 요소를 더 이상 수정할 수 없게 함
  - abstract : 추상 메서드 및 추상 클래스 작성

> 접근자(getter) / 설정자(setter)

- 클래스에서 선언된 변수 중 접근제한에 의해 접근할 수 없는 변수의 경우 다른 클래스에서 접근할 수 없기 때문에, 접근하기 위한 `메서드(설정자와 접근자)를 public으로 선언`하여 사용

- 이클립스에서 생성된 객체의 getter와 setter를 편리하게 만들어주는 기능도 있다. 
  
  <img title="" src="객체지향_imagefiles/2022-08-27-16-08-29-image.png" alt="" width="546" data-align="center">

- 예시 코드
  
  ```java
  // 패키지 내의 Car 클래스
  package com.ssafy.modifier01;
  
  public class Car {
    String color;
  
    // 아래의 speed를 private으로 선언하여 외부에서 접근할 수 없게 함
    private int speed;    // 속도를 0~250으로 제한하고 싶은데?
  
    // setter
    public void setSpeed(int speed) {
  
      // int speed = ?  
      // => 이렇게 선언하면 겍체가 가진 speed 멤버 변수인지, 매개변수르 받은 speed인지 구분을 할 수 없다.
  
      if(speed <= 250 && speed >= 0)
        this.speed = speed;
      else
        System.out.println("속도의 범위를 벗어났습니다.");
    }
  
    // getter
    public int getSpeed() {
      return this.speed;
    }
  }
  ```
  
  ```java
  // 동일 패키지 CarTest클래스의 메인 함수에서 Car클래스에 접근
  package com.ssafy.modifier01;
  
  public class CarTest {
    public static void main(String[] args) {
      Car c = new Car();    // 객체 생성
  
      c.color = "Red";
      // c.speed = 100;  => Duplicated local variable
      // System.out.println(c.speed);  => 접근이 불가능
  
      c.setSpeed(250);
      System.out.println(c.getSpeed());
    }
  }
  ```