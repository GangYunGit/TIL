# 2022. 08. 05.

# Java 알고리즘

- 이클립스 폴더 만들 때 Class 이름은 Solution으로 만들기( 사용하는 클래스명이 Solution 이어야 하므로, 가급적 Solution.java 를 사용할 것) + public static void main 체크!

- 사이트에 붙여넣기 할 때에는 이클립스의 main 블록 내에 있는 코드만 붙여넣기 하면 됨.

> 변수 입력 받기

- 변수 입력 받을 때 Scanner sc는 한 번만 써도 됨

```java
public class Solution {

	  public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
		    int a, b, c;
		    a=sc.nextInt();
        b=sc.nextInt();
        c=sc.nextInt();
	}

}
```