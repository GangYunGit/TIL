# Collection Framework

> 개요 

- 객체들을 한 곳에 모아놓고 편리하게 사용할 수 있는 환경을 제공

- 정적 자료구조(Static structure)
  - 고정된 크기의 자료구조
  - 배열이 대표적인 정적 자료구조임
  - 선언 시 크기를 명시하면 바꿀 수 없음

- 동적 자료구조 (Dynamic structure)
  - 요소의 개수에 따라 자료구조의 크기가 동적으로 증가하거나 감소
  - List, Stack, Queue 등

> 자료구조의 종류

- `Collection이라는 인터페이스`를 `List, Set이 상속`받고 있는 구조

- `List`를 상속받아 인터페이스 `ArrayList`, LinkedList, Vector를 구현

- `Set`을 상속받아 인터페이스 `HashSet`, TreeSet을 구현

- `Map` : 파이썬의 Dictionary와 유사한 구조

> java.util 패키지

- 다수의 데이터를 쉽게 처리하는 방법 제공

> Collection Framework 핵심 interface

| interface | 특징                                                                      |
| --------- | ------------------------------------------------------------------------- |
| List      | 순서가 있는 데이터의 집합. 중복을 허락                                    |
| Set       | 순서를 유지하지 않는 데이터의 팁합. 중복을 허락하지 않음                  |
| Map       | Key와 Value의 쌍으로 데이터를 관리하는 집합. key는 중복불가, value는 가능 |

---

## Collection Framwork - List

> 특징 

- 순서가 있고, 중복을 허용

> 구현 클래스

- ArrayList

- LinkedList

> List의 특징

- 내부적으로 배열을 이용하여 데이터를 관리

- 배열과 다르게 크기가 유동적으로 변함(동적 자료구조)

- 배열을 다루는 것과 유사하게 사용할 수 있음

> 배열과 ArrayList

- 배열의 장점
  - 가장 기본적인 형태의 자료구조, 간단하며 사용이 쉬움
  - 접근 속도가 빠름

- 배열의 단점
  - 쿠기를 변경할 수 없어 추가 데이터를 위해 새로운 배열을 만들고 복사해야 함.
  - 비 순차적 데이터의 추가, 삭제에 많은 시간이 걸림

- 배열을 사용하는 ArrayList도 태생적으로 배열의 장단점을 그대로 가져감

---

## Collection Framework - Set

> 특징

- 순서가 없고, 중복을 허용하지 않음

- 장점 : 빠른 속도, 효율적은 중복 데이터 제거 수단

- 단점 : 단순 집합의 개념으로 정렬하려면 별도의 처리가 필요하다.

- 구현 클래스 : HashSet, TreeSet

---

## Collection Framework - Map

- 특징 : Key와 Value를 하나의 Entry로 묶어서 데이터 관리. 순서는 없으며, 키에 대한 중복은 없음

- 장점 : 빠른 속도

- 구현 클래스 : HashMap, TreeMap 

---

## 정렬

- 요소를 특정 기준에 대한 내림차순 또는 오름차순으로 배치하는 것

- 순서를 가지는 Collection들만 정렬 가능

  - `List 계열`
  - Set에서는 SortedSet의 자식 객체
  - Map에서는 SortedMap의 자식 객체(Key 기준) 

- Collections의 sort()를 이용한 정렬

  - sort(List<T> list)
  - 개게가 Comparable을 구현하고 있는 경우 내장 알고리즘을 통해 정렬

> Comparable interface

- 클래스에 작성하여 새로운 객체에 대한 정렬 기준을 세워줄 수 있음

```java
public interface Comparable<T> {
  public int compareTo(T o);
  // 양수 = 자리바꿈, 음수 = 자리유지, o = 동일 위치 
}
```

> Comparator의 활용

- 객체가 Comparable을 구현하고 있지 않거나 사용자 정의 알고리즘으로 정렬하려는 경우

  ``` java
  public class StringLengthComparator implements Comparator<string> {
    @Override
    public int compare(String o1, String o2) {
      int len1 = o1.length();
      int len2 = o2.length();
      return Integer.compare(len1, len2);
    }
  }

  public void stringLengthSort() {
    Collections.sort(names, new StringLengthComparator());
    System.out.println(names);  // [Hi, Java, world, Welcome]
  }
  ```

- 1회성 객체 사용 시 anonymous inner class 사용
- 클래스 정의, 객체 생성을 한번에 처리

  ``` java
  // before
  Collections.sort(names, new StringLengthComparator());

  // after
  Collections.sort(names, new Comparator<String>()) {
			
			@Override
			public int compare(String o1, String o2) {
				
				return Integer.compare(o1.length(), o2.length());
			}
		});
  ```