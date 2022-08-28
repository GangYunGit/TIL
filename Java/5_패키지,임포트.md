# 패키지

> 패키지

- PC의 많은 파일을 관리하기 위해서 폴더를 이용한다.

- 프로그램의 많은 클래스를 관리하기 위해서 패키지를 이용한다.

- 클래스와 관련 있는 인터페이스들을 모아두기 위한 이름 공간

- 패키지의 구분은 .(dot) 연산자를 이용한다.

- 패키지의 이름은 `시중에 나와 있는 패키지들과 구분`되게 지어야 한다.

- 일반적으로 `소속이나 회사`의 `도메인`을 사용한다.
  
  - com.ssafy.project_이름.module_이름

---

# 임포트(import)

> 임포트

- 다른 패키지에 있는 클래스를 사용하기 위해서는 import 과정이 필요하다.

- import를 선언할 때는 import 키워드 뒤에 package 이름과 클래스 이름을 모두 입력하거나 해당 패키지의 모든 클래스를 포함할 떄는 '*'를 사용하기도 한다.
  
  ```java
  import java.util.Arrays;
  
  import java.util.Scanner;
  
  import java.util.function.*;
  
  public class PackageTest{
      public static void main(string[] args) {
          Scanner sc;
          Arrays arr;
          Function f;
      }
  }
  ```

- 패키지명이 겹칠 때 쓸 수 있는 방법도 있다.
  
  ```java
  import com.ssafy.class03.Person;
  
  public class PackageTest {
      public static void main(string[] args) {
          Person p1;   // class03에 있는 Person 클래스를 가지고 온다.
  
          com.ssafy.class02.Person p2;  //import를 하지 않고 풀패키지명을 작성할 수 도 있다.
      }
  }
  ```

- `ctrl + shift + o` 를 누르면 자동 임포트를 해준다.

- System.out.과 같은 키워드들을 쓸 수 있는 이유는 `java.lang.*;`이 자동으로 임포트 되기 때문이다.
