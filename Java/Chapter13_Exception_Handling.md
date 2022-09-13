# Exception Handling

> 에러와 예외

- 어떤 원인에 의해 오동작하거나 비정상적으로 종료되는 경우

> 심각도에 따른 분류

- Error
  - 메모리 부족, stack overflow와 같이 `일단 발생하면 복구할 수 없는 상황`
  - 프로그램의 비정상적 종료를 막을 수 없음 -> `디버깅 필요`

- Exception
  - 읽으려는 파일이 없거나, 네트워크 연결이 안되는 등 `수습될 수 있는` 비교적 `상태가 약한` 것들
  - 프로그램 코드에 의해 수습될 수 있는 상황

> 예외처리란?

- 예외 발생 시 프로그램의 비정상적인 종료를 막고 정상적인 실행 상태를 유지하는 것

- 예외의 감지 및 예외 발생 시 동작할 코드 작성 필요

> 예외 클래스의 계층

- Checked exception
  - 예외에 대한 `대처 코드가 없으면` `컴파일이 진행되지 않음`

- Unchecked exception (RuntimeException의 하위 클랫)
  - 예외에 대한 `대처 코드가 없더라도` `컴파일은 진행됨`

> 예외 처리 키워드

- 직접 처리
  - try
  - catch
  - finally

- 간접 처리
  - throws
  
- 사용자 정의 예외처리
  - throw

> try ~ catch 구문

- 기본 코드

  ```java
  try {
    // 예외가 발생할 수 있는 코드
  } catch (Excetion e) {
    // 예외가 발생했을 때 처리할 코드
  }
  ```
- 예시
  
  ```java
  public static void main(String[] args) {
    int[] nums = { 10 };

    try {
			System.out.println(nums[2]);
		} catch (ArrayIndexOutOfBoundsException e) {
			System.out.println("배열의 크기 확인 필요 예외 발생");
			e.printStackTrace();
		}

    // 예외처리를 해주었으므로 다음 줄의 코드가 실행됨!
		System.out.println("프로그램을 종료합니다.");
  }
  ```

> Exception 객체의 정보 활용

- Throwable의 주요 메서드

  | 메서드                        | 설명                                                                                                |
  | ----------------------------- | --------------------------------------------------------------------------------------------------- |
  | public String get Message     | 발생된 예외에 대한 구체적인 메세지를 출력                                                           |
  | public Throwable getCause()   | 예외의 원인이 되는 Throwable 객체 또는 null을 반환                                                  |
  | public void printStackTrace() | 예외가 발생된 메서드가 호출되기까지의 메서드 호출 스택을 출력한다. 디버깅의 수단으로 주로 사용된다. |

> try ~ catch 문의 흐름

- try 블록에서 예외가 발생하면

- JVM이 해당 Exception 클래스의 객체 생성 후 던짐(throw) : throw new XXException()

- 던져진 exception을 처리할 수 있는 catch 블록에서 받은 후 처리

- 정상적으로 처리되면 try-catch 블록을 벗어나 다음 문장 진행

- try 블록에서 어떠한 예외도 발생하지 않는 경우 -> catch문을 거치지 않고 다음 문장을 계속 실행

> 다중 exception handling

- try 블록에서 여러 종류의 예외가 발생할 경우

  ```java
  try {
    // exception이 발생할만한 코드
  } catch (XXException e) {
    // XXException 발생 시 처리할 코드
  } catch (YYException e) {
    // YYException 발생 시 처리할 코드
  } catch (Exception e) {
    // Exception 발생 시 처리할 코드
  }
  ```

- 다중 catch 문장 작성 순서 유의 사항
  - JVM이 던진 예외는 catch 문장을 찾을 때 `다형성`이 적용됨
  - 따라서 상위 타입의 예외가 먼저 선언되는 경우 뒤에 등장하는 catch 블록은 동작할 기회가 없음
  - 상속 관계가 없는 경우는 무관
  - 상속 관계에서는 `작은 범위(자식)에서 큰 범위(조상)순으로 정의`할 것

> try ~ catch ~ finally 구문을 이용한 예외 처리

- `finally`는 예외 발생 여부와 상관없이 `언제나 실행`

- 중간에 return을 만나는 경우도 `finally 블록을 먼저 수행 후 return`

  ```java
  public static void main(String[] args) {
		int num = new Random().nextInt(2);
		try {
			System.out.println("code 1, num: " + num);
			int i = 1 / num;
			System.out.println("code 2 - 예외 없음");
			return;
		} catch (ArithmeticException e) {
			System.out.println("code 3 - exception handling 완료");
		} finally {
			System.out.println("code 4 - 언제나 실행");
		}
		System.out.println("code 5");
	}
  ```

- finally를 이용한 자원 정리

  ```java
  InstallApp ap = new InstallApp();
  try {
    app.copy();
    app.install();
  } catch (Exception e) {
    e.printStackTrace();
  } finally{
    // 앱 설치가 완료가 되든 중간에 에러가 나든 간에 임시 폴더에 있는 자료들은 무조건 삭제가 되어야 하므로 finally를 통해 예외 발생여부와 상관없이 항상 실행하도록 함
    app.delete();
  }
  System.out.println("설치 종료");
  ```

> throws 키워드를 통한 처리 위임

- method에서 처리해야 할 하나 이상의 예외를 호출한 곳으로 전달(처리 위임)

- 예외가 없어지는 것이 아니라 단순히 전달됨 => 언젠가는 무조건 처리가 되어야 함
  
- 예외를 전달받은 메서드는 다시 예외 처리의 책임 발생

  ```java
  void excpetionMethod() throws Excpetion1, Exception2 ... {
    // 예외 발생 코드
  }

  void methodCaller() {
    try {

      // 예외 처리의 책임이 전달됨
      exceptionMethod();

    } catch(Exception e) {}
  }
  ```

- 처리하려는 예외의 조상 타입으로 throws 처리가능

> checked exception과 throws

  ```java
  public class CheckedExceptionTest {
    public static void main(String[] args) {
      CheckedExceptionTest c = new CheckedExceptionTest();
      
      // 예외 처리
      try {
        c.method1();
      } catch (ClassNotFoundException e) {
        System.out.printf("exception handling: %s%n", e.getMessage());
      }
    }
    
    public void method1() throws ClassNotFoundException {
      // 전달받은 예외가 throws에 의해 다시 method1로 전달
      method2();
    }
    
    public void method2() throws ClassNotFoundException {
      // ClassNotFoundException이 발생하지만 throws에 의해 예외처리가 method2로 전달
      Class.forName("GangYun");
    }
  }
  ``` 

- checked exception은 반드시 try ~ catch 또는 throws 필요

- 필요한 곳에서 try ~ catch 처리

> unchecked exception과 throws

```java
public class UnCheckedExceptionTest {
	public static void main(String[] args) {
		UnCheckedExceptionTest c = new UnCheckedExceptionTest();
		
    // 아래에서 예외처리를 하지 않았음에도 예외가 전달됨
		try {
			c.method1();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public void method1() {
    // throws로 예외를 전달하지 않았음
		method2();
	}
	
	public void method2() {
    // throws로 예외를 전달하지 않았음
		int i = 1 / 0;
	}
}
```

- unchecked exception은 throws하지 않아도 전달되지만 결국 try~catch로 처리해야 함

> 로그 분석과 예외의 추적

- 예외 종류 : 예외 원인

- 이하로 예외 호출 경로가 나열됨
  - 직접 작성한 코드를 디버깅 대상으로 삼을 것
  - 참조하는 라이브러리는 과감히 건너 뛰기

  ![image](https://user-images.githubusercontent.com/109258306/189897572-2f7e5ddb-d122-4f79-b458-2ea5d355900d.png)


> 메서드 재정의와 throws

- 메서드 재정의 시 조상 클래스 메서드가 던지는 예외보다 상위 클래스 예외를 던질 수 없다.

  ```java
    class Parent {
      void methodA() throws IOException{}
      void methodB() throws ClassNotFoundException{}		
    }
    
    public class OverrindgTest extends Parent {
      
      // FileNotFoundException은 IOException의 자식 클래스이므로 오버라이딩 가능
      @Override
      void methodA() throws FileNotFoundException {
        
      }
      
      // 아래의 코드는 에러가 발생!
      // Exception은 ClassNotFoundExcpeton의 부모 클래스이므로 오버라이딩 불가능 
  		@Override   
  		void methodB() throws Exception {
  			
  		}
      
    }
  ```

> 사용자 정의 예외

- API에 정의된 exception이외에 필요에 따라 사용자 정의 예외 클래스 작성

- 대부분 Exception 또는 RuntimeException 클래스를 상속받아 작성

- 사용자 정의 예외를 만들어 처리하는 장점
  - 객체의 활용 : 필요한 추가정보, 기능 활용 가능
  - 코드의 재사용성 : 동일한 상황에서 예외 객체 재사용 가능
  - throws 메커니즘의 이용 : 중간 호출 단계에서 return 불필요