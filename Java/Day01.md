# 2022. 08. 03. Java start

# 자바 가사상 머신(JVM)이란?

- 자바 바이트코드를 실행할 수 있는 주체

- 자바 바이트코드는 `플랫폼에 독립적`이며, 모든 JVM은 자바 가상 머신 규격에 정의된대로 자바 바이트코드를 실행

- JAVA원시 프로그램(.java파일) => 컴파일(사람이 작성한 코드를 컴퓨터가 이해할 수 있게 바꿔주는 행위) => 자바 바이트코드(.class파일) => 각종 플랫폼(MAC, Linux, Windows...)

- Java Runtime Environment(JRE) : JVM이 자바 프로그램을 실행시킬 때 필요한 것들을 가지고 있음

- Java Developement Kit(JDK) : JRE + 개발에 필요한 것

> main method

- 실행 명령인 `java`를 실행 시 가장 먼저 호출되는 부분

- 만약, Application에서 main() 메소드가 없다면 절대로 실행 될 수 없음

- Application의 시작 -> 클래스의 main() 실행

- 형태 (고정된 형태)

  ```java
  public static void main(String[] args){}
  ```

> 주석

- 주석 사용 방식

  ```java
  // 가장 많이 사용하는 주석 방식

  /* 여러줄 주석
  여러줄 주석*/

  /**
  * Documentation API를 위한 주석
  */
  ```

> 출력문

- print, println

- printf
  
  - %d : 정수, %f : 실수, %c : 문자, %s : 문자열

  ```java
  public static void main(String[] args){
      System.out.printf("%d \n", 10)  //정수 (10진수) => 10
      System.out.printf("%o \n", 10)  //정수 (8진수) => 12
      System.out.printf("%X \n", 10)  //정수 (16진수) => A
      System.out.printf("%x \n", 10)  //정수 (16진수) => a

      System.out.printf("%4d \n", 10)  //4칸 확보 후 오른쪽부터 차지 =>   10
      System.out.printf("%-4d \n", 10) //4칸 확보 후 왼쪽부터 차지   => 10
      System.out.printf("%04d \n", 10) //빈칸을 0으로 채움 => 0010

      System.out.printf("%.2f \n", 10.1) //소수점 둘째 자리까지 =. 10.10

      System.out.printf("%s \n", "이강윤") //문자열 => 이강윤
      System.out.printf("%c \n", 'ㅇ')     //문자 => ㅇ
  }
  ```

---

# 자료형 (Data Type)

> 논리형

- boolean : true/false

> 문자형 

- char (2byte)

> 숫자형

- 정수형

  - byte

  - short (2byte)

  - int (4byte)

  - long (8byte)

- 실수형

  - float (4byte)

  - double  (8byte)

---

# 연산자

> 삼항 연산자

- (조건식) ? (식1) : (식2)

- 조건식이 참일 경우 식1, 거짓일 경우 식2 수행
