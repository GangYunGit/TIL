# 생성자

> 생성자

- 인스턴스가 생성될 때 최초로 한번 수행되는 함수
  
  - new 키워드와 함께 호출
  - 클래스를 생성할 때 반드시 하나의 생성자가 호출됨
  - 성공적으로 실행되면 힙 영역에 객체 생성 후 객체의 번지가 리턴
  - 필드의 초기화, 객체 생성 시 실행되어야 할 작업 작성
  - PascalCase로 작성하는 것이 관례

> 생성자의 특징

- 클래스 명과 이름이 동일(대, 소문자 사용 가능)

- 반환 타입이 없다.(void 조차 작성하지 않음)
  
  ```java
  public class Dog {
      public Dog() {
          System.out.println("기본 생성자!");
          System.out.println("클래스 이름과 동일하고 반환타입X");
      }
  }
  // 객체가 생성될 때 자동으로 출력됨
  ```

> > 기본(default) 생성자

- 클래스 내에 생성자가 하나도 정의되어 있지 않을 경우, JVM이 자동으로 제공하는 생성자

- 매개변수가 없는 형태 : `클래스명() {}`

> > 파라미터가 있는 생성자

- 생성자의 목적이 필드 초기화

- 생성자 호출 시 인자를 꼭 넘겨주어야 함

- 해당 생성자를 작성하면 JVM에서 기본 생성자를 추가하지 않음
  
  ```java
  class Dog {
      String name;
      int age;
      Dog(String n, int a) {
          name = n;
          age = a;
      }
  }
  ```

> 생성자 오버로딩

- 클래스 내에 메소드 이름이 같고 매개변수의 타입 또는 개수가 다른 것
  
  ```java
  class Dog{
      Dog( ) { }
      Dog(String name) { }
      Dog(int age) { }
      Dog(String name, int age) { }
  }
  ```

> this(파이썬의 인스턴스 변수self와 비슷?)

- 참조 변수로써 객체 자신을 가리킴

- this를 이용하여 자신의 멤버 접근 가능

- 지역변수와 필드의 이름이 동일할 경우, 필드임을 식별해줌

- 객체에 대한 참조이므로, static 영역에서 this 사용 불가

> this의 활용

- this.멤버변수
  
  ```java
  class Dog{
      String name;  // this.name이 가리키는 곳
      int age;      // this.age가 가리키는 곳
      Dog(String n, int a) {
          this.name = name   
          this.age = age
      }
  }
  ```

- this([인자값..]) : 생성자 호출
  
  ```java
  class Dog{
      String name;  // this.name이 가리키는 곳
      int age;      // this.age가 가리키는 곳
      Dog( ) {
        // Dog("쫑"); => 오류발생!
          this("쫑");
      }     //   ↓
      Dog (String name) {
  
      }
  }
  ```

- this 생성자 호출 시 제한사항
  
  - 생성자 내에서만 호출이 가능
  - 생성자 내에서 첫번째 구문에 위치해야 함
