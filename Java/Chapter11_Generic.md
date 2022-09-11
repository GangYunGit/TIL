# Generic

## Generics 

> 다양한 타입의 객체를 다루는 메서드, 컬렉션 클래스에서 컴파일 시에 타입 체크

- 미리 사용할 타입을 명시해서 형 변환을 하지 않아도 되게 함

- 객체의 타입에 대한 안정성 향상 및 형 변환의 번거로움 감소

> 표현

- 클래스 또는 인터페이스 선언 시 `<>`에 `타입 파라미터` 표시
  
  ```java
  // 기존의 클래스, 인터페이스를 선언하는 방법
  public class ClassName1
  public interface InterfaceName1

  // Generic type으로 선언하는 방법
  public class ClassName2<T> {}
  public interface InterfaceName2<T>{}
  ```

> 타입 파라미터

- 특별한 의미는 없고 단순히 임의의 참조형 타입을 말한다.

- T : reference Type

- E : Element

- K : Key

- V : Value

> 객체 생성

- 변수 쪽과 생성 쪽의 타입은 반드시 같아야 함

  ```java
  ClassName<String> generic = new ClassName<String>();
  ClassName<String> generic2 = new ClassName<>;   // 생략이 가능함
  ClassName generic3 = new ClassName<>();
  ```

> 사용

- Object를 파라미터로 사용하여 어떤 객체든지 수용 가능하게 만듬

  ```java
  public class NormalBoxTest {
    
    public static void main(String[] args) {
		// 필드로 Object를 가지고 있으니 무엇이든 저장할 수 있음.
		NormalBox nbox = new NormalBox();
		nbox.setSome("Hello");
    nbox.setSome(new Toy());
		
		Object some = nbox.getSome();

		if(some instanceof Toy) {
			Toy toy = (Toy)some;
      // toy 사용

		}else if(some instanceof Grocery) {
      Grocery grocery = (Grocery)some;
      // grocery 사용
    
    }else {
      System.out.println("알수 없음");
    }
  }
  ```

- 무언가 T로 객체를 한정하여 T의 자식까지만 허용 되도록 만듬

  ```java
  public class UseBoxTest {

    public static void main(String[] args) {
      
      GenericBox<Toy2> gbox1 = new GenericBox<>();

      gbox1.setSome(new Toy2());
      // gbox.setSome(new Grocery2());

      Toy2 toy = gbox1.getSome();
      // toy 사용

      GenericBox<Grocery2> gbox2 = new GenericBox<>();
      gbox2.setSome(new Grocery2());
      Grocery grocery = gbox2.getSome();
      // grocery 사용
    }
  }
  ```

> Type parameter의 제한

- 필요에 따라 구체적인 타입 제한 필요
  
- 인터페이스로 제한할 경우도 extends 사용
  
  ```java
  class TypeRestrict1<T extends Cloneable>{
    ...
  }
  ```

- 클래스와 함께 인터페이스 제걍 조건을 이용할 경우 `&` 로 연결

  ```java
  class TypeRestrict2<T extends Number & Cloneable & Comparable<String>>{
    ...
  }
  ```

> Generic Type 객체를 할당 받을 때 `와일드 카드` 이용이 가능함

- generic type에서 구체적인 타입 대신 사용

  | 표현                      | 설명                                   |
  | ------------------------- | -------------------------------------- |
  | Generic type<?>           | 타입에 재한이 없음                     |
  | Generic type<? extends T> | T 또는 T를 상속받은 타입들만 사용 가능 |
  | Generic type<? super T>   | T 또는 T의 조상 타입만 사용 가능       |

- 예시

  ```java
  class Person {
    
  }

  class Student extends Person {
    
  }

  class PersonBox<T> {
    
  }

  public class WildCardTest {
    public static void main(String[] args) {
      PersonBox<Object> pobj = new PersonBox<>();
      PersonBox<Person> pper = new PersonBox<>();
      PersonBox<Student> pst = new PersonBox<>();
      
      // 뭐든지 다 가능
      PersonBox<?> pAll = pobj;
      pAll = pper;
      pAll = pst;
      
      // Person 또는 상속 받은 경우만 넣을 수 있다.
      PersonBox<? extends Person> pChild = pper;
      pChild = pst;
      // pChild = pobj; => Person을 상속받은 것이 아니기 때문에 불가
      
      // Person 또는 조상만 받을 수 있다.
      PersonBox<? super Person> pSuper = pper;
      pSuper = pobj;
      // pSuper = pst; => Person의 하위 클래스는 사용 불가
    }
    
  }
  ```