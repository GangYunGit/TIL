# 2022.07.21.

# 함수 내용 정리

> input

- input은 한줄로 입력받고, 기본적으로 문자열이다

> map

- 파이썬의 내장함수 `map(function, iterable)`

- 함수(function) 자리에는 내장 함수뿐만 아니라 직접 만든 함수도 들어갈 수 있다.

  ```python
  map(int, ['1', '2', '3'])   # 정수 1 2 3 을 반환

  map(int,'123')    # 1 2 3
  ```

> print

- print()는 데이터를 `출력`할 수 있는 함수이며, 자동적으로 `줄 바꿈` 발생

  - print함수가 가지고 있는 `기본적인 end옵션`

- 콤마(,)를 이용해 여러 인자를 넣으면 공백을 기준으로 출력 
  
  - print함수가 가지고 있는 `기본적인 sep옵션`

- `end`, `sep` 옵션을 사용하여 출력 조작하기

  ```python
  a = 'happy'
  b = 'hacking'

  print(a, end='@')
  print(b)
  >>> happy@hacking

  print(a, b, sep='\n')
  >>> happy
  >>> hacking

  print(a, b, end='@', sep='@')
  >>> happy@hacking@
  ```
  
> lambda 함수

- 익명 함수, 한 줄로 간단하게 함수를 표현

- `함수이름 = lambda 파라미터: 함수 수식` 꼴로 표현

  ```python
  minus_two = lambda x: x - 2
  result = minus_two(5)
  print(result)

  # map과 같이 사용 가능
  minus_numbers = list(map(lambda x: x - 2, [5, 6]))
  print(minus_numbers)
  ```

> 재귀(Recursive) 함수

- 상위(원래) 문제를 해결하기 위해,그 보다 `좁은 범위의 하위의 문제`를 먼저 해결하는 방법

  ```python
  def factorial(n):
    # 1. base case (재귀탈출조건)
    if n <= 1:
        return 1

    # 2. 점화식(재귀식)
    return n * factorial(n - 1)

  print(factorial(4))  # 24
  ```
  
- 모든 재귀함수는 반복문으로 표현이 가능하다.

- `종료 조건(Base case)`, `점화식(재귀식)`이 필수적으로 있어야 한다.

> 모듈

-

> 가상 환경

- 버전이 다른 파이썬을 동시에 관리할 수 있게 만들어주는 환경

- 가상 환경을 활성화하면 컴퓨터 전체에 설치된 파이썬의 관련 도구들을 할당하지 않고 프로젝트 내에서만 쓸 수 있는 도구들을 받아올 수 있다.