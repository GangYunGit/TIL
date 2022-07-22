# 2022.07.22.

# 0721 workshop 해설

> List Comprehension과 언패킹

```python
numbers = [i for i in range(1, n + 1) if n % i == 0]

      # ↓numbers = [1, 2, 5, 10] 이 *numbers에 들어감
print(*numbers)
```

> 함수의 return

- 함수에 return값이 없으면 기본적으로 None이 반환된다.

> 2차원 리스트

- 이차원 리스트는 `리스트를 원소로` 가지는 리스트일 뿐이다.

- 이차원 리스트는 `행렬`이다

- `중첩된 리스트도 함수의 parameter로 쓸 수 있다`

```python
def all_list_sum(num_lists):
    lists_sum = 0

    for num_list in num_lists:  # 2차원 리스트에서 순회
        for num in num_list:    # 중첩된 for문에서 내부의 리스트를 각각 순회
            lists_sum += num    # 가장 내부의 원소들을 각각 덧셈

    return lists_sum


print(all_list_sum([[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]]))
```

>> 이중 for문을 이용한 `행 우선 순회`

```python
matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 0, 1, 2]
]

for i inragne(3):   # 행
    for j in range(4):   #열
        print(matrix[i][j], end=' ')
    print()

>>>1 2 3 4
>>>5 6 7 8
>>>9 0 1 2
```

>> 이중 for문을 이용한 `열 우선 순회`

```python
matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 0, 1, 2]
]

for i inragne(4):   # 열
    for j in range(3):   #행
        print(matrix[j][i], end=' ')
    print()

>>>1 5 9
>>>2 6 0
>>>3 7 1
>>>4 8 2
```

>> 참고)pythonic 한 방법으로 행렬 합 구하기

```python
matrix = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1]
]

sum_matrix = sum(map(sum,matrix))
```

> ASCII 코드

- 컴퓨터가 문자를 이해할 수 있게 변환해주는 코드

- ascii코드 관련 파이썬 내장함수

  - ord(string) : 문자 -> 아스키코드(숫자)로 변환하는 내장함수

  - chr(int) : 아스키코드(숫자) -> 문자로 변환하는 내장함수

# 관통 프로젝트 참고 내용

# get method

- a.get('name', ???) => argument에 name이라는 key의 value가 없어도 기본값(None)을 반환

- 기본값을 ???에 입력하면 기본값을 따로 설정해 줄 수 있다.

# 데이터 추출

- 기존의 데이터를 가공하여 새로운 데이터로 반환

# open 및 json 모듈

- open : `파일`을 입력으로 가져올수 있게 해주는 함수
  
  - 파일을 받을 때 `문자열`로 받아야 함

```python
import json
from pprint import pprint

movie = open('sample.json', encoding='utf-8')  # 상대경로
          # '.\sample.json' 이지만 자신의 경로에서는 생략 가능
movie_detail = json.load(movie)  # json -> dict
# json.load를 쓰면 딕셔너리의 형태로 바꿔줌
```

- pprint 함수 : 딕셔너리, 2차원리스트 등 가독성이 떨어지는 출력을 가독성 있게 바꿔줌


