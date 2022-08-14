# 2022. 07 .25.

# 06번 문제 접근방식

- 아스키코드가 범위를 초과해서 문자가 아닌 다른 값이 나오거나, index error가 나는 경우, %연산자를 통해 A~Z 혹은 a~z의 길이인 26으로 나누어주면 N이 26을 초과하더라도 1~26 내에서만 순환하게 만들 수 있다.

# 09~10번 문제 접근방식

- 상하좌우, 델타이동(2차원 리스트 알고리즘 문제에서 많이 사용됨)

- 행과 열에 +, - 를 계속해주면서 변량을 구함

# 데이터 구조

> 데이터 구조 활용

- 데이터 구조를 홀용하기 위해서는 메서드(method)를 활용
  
  - 메서드는 클래스 내부에 정의한 함수, 사실상 함수와 동일
  
  - 쉽게 말하자면 객체의 기능
  
  - `데이터 구조.메서드()` 형태로 활용! => `주어.동사()`로 이해

> 파이썬 공식 문서의 표기법

- python 구문이 아니며, 문법을 표현하기 위한 것임

- `str.replace(old,new[,count])` => old, new는 필수로 들어가야할 인자, [,count]는 선택적 인자를 의미함

### 꿀팁

- 코드 드래그 후 Alt + shift 아래방향키 : 코드 아래줄에 복사

- 코드 드래그 후 Alt 방향키 : 선택한 코드를 아래줄로 이동 

- 원하는 단어 선택하고 ctrl + d : 일치하는 단어에 커서가 모두 생김(한번에 지우거나 바꿀 수 있음) 

---

## 문자열

> 문자열(String Type)

- 문자들의 나열
  
  - 모든 문자는 str 타입(변경 불가능한 immutable)

> 문자열 조회/탐색 및 검증 메서드

|    문법     |                                설명                                 |
| :---------: | :-----------------------------------------------------------------: |
|  s.find(x)  |              x의 첫 번째 위치를 반환. 없으면 -1을 반환              |
| s.index(x)  |              x의 첫 번째 위치를 반환. 없으면 오류 발생              |
| s.isalpha() | 알파벳 문자 여부 *단순 알파벳이 아닌 유니코드 상 Letter한국어 포함) |
| s.isupper() |                             대문자 여부                             |
| s.islower() |                             소문자 여부                             |
| s.istitle() |     타이틀 형식 여부(문장의 첫 문자는 대문자, 나머지는 소문자)      |

> 문자열 관련 검증 메서드

  ```python
  print('abc'.isalpha())  # True
  print('ㄱㄴㄷ'.isalpha()) # True
  print('Ab'.isupper()) # False
  print('ab'.islower()) # True
  print('Titie Title!'.istitle()) # True (문장의 첫 문자가 대문자이면 True)
  ```

- .isdecimal() < .isdigit() < .isnumeric()
  
  - 기준이 애매하긴 하지만 진짜 오리지널 숫자만 있는지 판별하려면 .isdecimal(), 숫자를 의미하는 정도?? 는 .isnumeric(), 그 중간은 .isdigit()라고 알아두자.

> 문자열 변경 메서드

|                문법                |                                       설명                                       |
| :--------------------------------: | :------------------------------------------------------------------------------: |
|     s.replce(old,new[,count])      |                    바꿀 대상 글자를 새로운 글자로 바꿔서 변환                    |
|          s.strip([chars])          |                             공백이나 특수문자를 제거                             |
| s.split(sep = None, maxsplit = -1) |                        공백이나 특정 문자를 기준으로 분리                        |
|    'separator'.join([iterable])    |                             구분자로 iterable을 합침                             |
|           s.capitalize()           |                        가장 첫 번째 글자를 대문자로 변경                         |
|             s.title()              | 문자열 내 띄어쓰기 기준으로 각 단어의 첫 글자는 대문자로, 나머지는 소문자로 반환 |
|             s.upper()              |                                모두 대문자로 변경                                |
|             s.lower()              |                                모두 소문자로 변경                                |
|            s.swapcase()            |                            대문자 ↔ 소문자 서로 변경                             |

> > .split(sep = None, maxsplit = -1)

- 문자열을 `특정한 단위`로 나워 `리스트`로 반환
  
  - sep이 none이거나 지정되지 않으면 연속된 공백문자로 간주하고, 선/후행 공백은 빈 문자열에 포함시키지 않음
  
  - maxsplit이 -1인 경우에는 제한이 없음
  
  ```python
  print('a,b,c'.split(',')) # [a, b, c]
  print('a b c'.split())  # [a, b, c]
  print('이겼닭 오늘 저녁은 치킨이닭'.split(' ', 2))  
  # ['이겼닭', '오늘', '저녁은 치킨이닭']
  print('이겼닭 오늘 저녁은 치킨이닭'.split(' ', -1)
  # ['이겼닭', '오늘', '저녁은', '치킨이닭'] 
  ```

> > .strip([chars])

- 특정한 문자들을 지정하여,양쪽을 제거(.strip), 왼쪽을 제거(.lstrip), 오른쪽을 제거(.rstrip)

- 문자를 지정하지 않을 시 공백을 모두 제거

  ```python
  print('   와우!   \n'.strip()) # '와우!'
  print('   와우!\n'.lstrip()) # '와우!'
  print('   와우!\n'.rtrip()) # '   와우!'   
  ```

- 문자열을 지정하지 않으면 공백을 제거 
  
  ```python
  print('   와우!\n'.strip()) # '와우!'
  print('안녕하세요???\n'.strip('?')) # '안녕하세요'  
  ```

> > 'seperator'.join([iterable])

- 반복가능한(iterable) 컨테이너 요소들을 separator(구분자)로 합쳐 문자열 반환
  
  - iterable에 문자열이 아닌 값이 있으면 Type Error 발생
  
  ```python
  print('!'.join('ssafy'))  # 's!s!a!f!y'
  
  print(' '.join['3', '5']) # '3 5'
  ```

---

## 리스트

> 리스트 메서드

|          문법          |                                           설명                                           |
| :--------------------: | :--------------------------------------------------------------------------------------: |
|      L.append(x)       |                              리스트 마지막에 항목 x를 추가                               |
|     L.insert(i, x)     |                             리스트 인덱스 i에 항목 x를 삽입                              |
|      L.remove(x)       | 리스트 가장 왼쪽에 있는 항목(첫 번째) x를 제거. 항목이 `존재하지 않을 경우, Value Error` |
|        L.pop()         |                  리스트 가장 오른쪽에 있는 항목(마지막)을 반환 후 제거                   |
|        L.pop(i)        |                        리스트 인덱스 i에 있는 항목을 반환 후 제거                        |
|      L.extend(m)       |               순회형 m의 모든 항목들의 리스트 끝에 추가('+='와 같은 기능)                |
| L.index(x, start, end) |              리스트에 있는 항목 중 가장 왼쪽에 있는 항목 x의 인덱스를 반환               |
|      L.reverse()       |                                   리스트를 거꾸로 정렬                                   |
|        L.sort()        |                            리스트를 정렬(매개변수 이용 가능)                             |
|       L.count(x)       |                     리스트에서 항목 x가 몇 개 존재하는지 갯수를 반환                     |

---

> 값 추가 및 삭제

> > .insert(i, x)

- 정해진 위치 i에 x값을 추가함
  
  ```python
  cafe = ['starbucks', 'tomntoms', 'hollys']
  print(cafe)
  cafe.append('banapresso')
  print(cafe) 
  # ['starbucks', 'tomntoms', 'hollys', 'banapresso']
  ```

> > .extend(iterable)

- 리스트에 iterable의 항목을 추가함
  
  ```python
  cafe = ['starbucks', 'tomntoms', 'hollys']
  print(cafe)
  
  # ['starbucks', 'tomntoms', 'hollys'] 
  cafe.extend(['coffee']) # 배열 자체를 extend
  print(cafe)
  # ['starbucks', 'tomntoms', 'hollys', 'coffee'] 
  ```
  
  ```python
  cafe = ['starbucks', 'tomntoms', 'hollys']
  print(cafe)
  # ['starbucks', 'tomntoms', 'hollys']
  
  cafe.extend('cup')  # 문자열도 iterable이므로 하나씩 나누어져 들어감
  print(cafe)
  # ['starbucks', 'tomntoms', 'hollys', 'c', 'u', 'p']
  ```

> > .remove(x)

- 리스트에서 값이 x인 것 삭제
  
  ```python
  numbers = [1, 2, 3, 'hi']
  print(numbers)
  numbers.remove('hi')
  print(numbers)  # [1, 2, 3]
  
  numbers.remove('hi')
  # ValueError: list.remove(x): x not in list
  ```

> > .pop(i)

- 정해진 위치 i에 있는 값을 삭제하고, 그 항목을 반환 `(꺼낸다는 개념)`

- i가 지정되지 않으면, 마지막 항목을 삭제하고 반환함

> > .clear()

- 모든 항목 삭제(빈 리스트를 반환)

---

> 탐색 및 정렬

> > .count(x)

- 원하는 값의 개수를 반환
  
  ```python
  numbers = [1, 2, 3, 1, 1]
  
  print(numbers.count(1)) # 3
  print(numbers.count(100)) # 0
  ```

> > .sort()

- `원본` 리스트를 `정렬`함. None을 반환

- `sorted 함수와 비교`할 것
  
  ```python
  # sort
  numbers = [3, 2, 5, 1]
  result = numbers.sort()
  print(numbers. result)  # [1, 2, 3, 5] None
  
  # sorted
  numbers = [3, 2, 5, 1]
  result = sorted(numbers)
  print(numbers. result)  # [3, 2, 5, 1] [1, 2, 3, 5]
  ```

> > .reverse()

- 순서를 반대로 뒤집음(정렬하는 것은 아님)
  
  ```python
  numbers = [3, 2, 5, 1]
  result = numbers.reverse()
  print(numbers, result)  # [1, 5, 2, 3] None
  ```

---

## 튜플

- 튜플은 변경할 수 없기 때문에 값에 옇양을 미치지 않는 메서드만을 지원

- 리스트 메서드 중 항목을 변경하는 메서드들 을 제외하고 대부분 동일

  ```python
  day_name = ('월', '화', '수', '목', '금')

  print(day_name[-3]) # 수
  print(day_name * 2) # ('월', '화', '수', '목', '금', '월', '화', '수', '목', '금')
  day_name += False,True  # ('월', '화', '수', '목', '금', False, True)

  ```

---

## 연산자(Operaor)

> 멤버십 연산자(Membership Operator)

- 멤버십 연산자 in을 통해 특정 요소가 속해 있는지 여부를 확인
  
  - `in` : 있나요?
  
  - `not in` : 없나요?

> 시퀀스형 연산자(Sequence Type Opertor)

- 산술연산자(+)
  
  - 시퀀스 간의 concatenation
  
  ```python
  # 리스트
  [1, 2] + ['a']  # [1, 2, 'a']
  
  # range
  range(2) + range(2, 5) # TypeError: unsupported operand type(s) for +: 'range' and 'range'
  ```

- 반복연산자(*)
  
  - 시퀀스를 반복
  
  ```python
  # 리스트
  [0] * 8   # [0, 0, 0, 0, 0, 0, 0, 0]
  
  # 튜플
  (1, 2) * 3  # (1, 2, 1, 2, 1, 2)
  
  # range는 Error
  ```

---

# 비시퀀스형 데이터 구조

## 셋(Set)

> 셋 메서드

|      문법       |                                           설명                                           |
| :-------------: | :--------------------------------------------------------------------------------------: |
|    s.copy()     |                                 셋의 얕은 복사본을 반환                                  |
|    s.add(x)     |                              항목 (x)가 셋 s에 없다면 추가                               |
|     s.pop()     | 셋(Set)에서 랜덤하게 항목을 반환하고, 해당 항목을 제거.<br/>set이 비어있을 경우 KeyError |
|   s.remove(s)   |             항목 x를 셋(s)에서 삭제<br/>항목이 존재하지 않을 경우, KeyError              |
|  s. discard(x)  |                  항목 (x)가 셋 s에 있는 경우, 항목 (x)를 셋 s에서 삭제                   |
|   s.update(t)   |                     셋(t)에 있는 모든 항목중 셋 s에 없는 항목을 추가                     |
|    s.clear()    |                                      모든 항목 제거                                      |
| s.isdisjoint(t) |                  셋(s)가 셋 t의 서로 소(겹치는게 없다)일 경우, True반환                  |
|  s.issubset(t)  |                         셋(s)가 셋 t의 하위 셋인 경우, True반환                          |
| s.issuperset()  |                         셋(s)가 셋 t의 상위 셋일 경우, True반환                          |

---

> 추가 및 변경

> > .update(*others)

- 여러 값을 추가
  
  ```python
  a = {'사과', '바나나', '수박'}
  print(a)  # {'바나나', '사과', '수박'}
  
  a.update(['딸기', '바나나', '참외'])
  print(a)  # {'사과', '참외', '딸기', '수박', '바나나'}
  ```

> > .remove(elem)

- set에서 있으면 삭제, 없으면 KeyError(값을 찾아서 삭제)
  
  ```python
  a = {'사과', '바나나', '수박'}
  
  print(a)  # {'사과', '바나나', '수박'}
  a.remove('사과') 
  print(a)  # {'바나나', '수박'}
  a.remove('애플')
  print(a)  # KeyError: '애플'
  ```

> > .discard(elem)

- .remove(elem)와는 다르게 셋에서 없어도 에러가 발생하지 않음('버림'의 개념)

> > .pop()

- 임의의 원소를 제거해 반환
  
  ```python
  a = {'사과', '바나나', '수박'}
  
  print(a)  # {'바나나', '사과', '수박'}
  a.pop() 
  print(a)  # {'사과', '수박'} => 임의의 원소가 삭제됨
  ```

> > .clear

- 모든 항목을 제거

---

> 집합 관련 함수

- s.isdisjoint(t)
  
  - 셋 s가 셋 t의 서로 소인 경우, True반환
  
  ```python
  a = {'사과', '바나나', '수박'}
  b = {'포도', '망고'}
  c = {'사과', '포도', '망고', '수박', '바나나'}
  
  print(a.isdisjoint(b))  # True  a와 b는 서로 소
  ```

- s.issubset(t)
  
  - 셋 s가 셋 t의 하위 셋인 경우, True반환
  
  ```python
  a = {'사과', '바나나', '수박'}
  b = {'포도', '망고'}
  c = {'사과', '포도', '망고', '수박', '바나나'}
  
  print(b.issubset(c))  # True 셋 c에 '포도', '망고'가 존재하므로 포함관계
  ```

- s.issuperset(t)
  
  - 셋 s가 셋 t의 사위 셋인 경우, True반환
  
  ```python
  a = {'사과', '바나나', '수박'}
  b = {'포도', '망고'}
  c = {'사과', '포도', '망고', '수박', '바나나'}
  
  print(a.issuperset(c))  # False
  ```

---

## 딕셔너리

> 조회

> > .get(key[, default])

- Key를 통해 value를 가져옴

- KeyError가 발생하지 않으며, default값 설정이 가능(기본 : None)
  
  ```python
  my_dict = {'apple': '사과', 'banana': '바나나'}
  my_dict['pineapple']  # KeyError: 'pineapple'
  
  my_dict = {'apple': '사과', 'banana': '바나나'}
  print(my_dict.get('pinapple'))  # None
  print(my_dict.get('apple'))  # 사과
  print(my_dict.get('pinapple', 0))  # 0
  ```

---

> 추가 및 삭제

> > .pop(key[, default])

- key가 딕셔너리에 있으면 제거하고 해당값을 반환

- 그렇지 않으면 default를 반환

- default값이 없으면 KeyError
  
  ```python
  my_dict = {'apple': '사과', 'banana': '바나나'}
  data = my_dict.pop('apple')
  print(data, my_dict) # 사과 {'banana': '바나나'}
  data = my_dict.pop('apple', 0)
  print(data) # 0 => default값 반환
  ```
  
  > > .update()
  
  - 값을 제공하는 key, value로 덮어씀
  
  ```python
  my_dict = {'apple': '사', 'banana': '바나나'}
  my_dict.update(apple='사과')  # keyword argument로 들어가기 때문에 apple에 문자열 표시를 해주지 않음
  print(my_dict)  # {'apple': '사과', 'banana': '바나나'} 
  ```

---

# 얕은 복사와 깊은 복사(Shallow Copy & Deep Copy)

## 복사 방법

- 할당(Assignment)

- 얕은 복사

- 깊은 복사

> 할당(assignment)

- 대입 연산자(=)
  
  - 리스트 복사 확인하기
  
  - `대입 연산자를 통한 복사`는 해당 객체에 대한 `객체 참조를 복사`
  
  ```python
  original_list = [1, 2, 3]
  copy_list = original_list
  print(original_list, copy_list) # [1, 2, 3] [1, 2, 3]
  
  copy_list[0] = 'hello'
  print(original_list, copy_list) # ['hello', 2, 3] ['hello', 2, 3]
  ```
  
  <img src="2022_07_25_TIL_imagefiles/2022-07-25-22-18-18-image.png" title="" alt="" width="372">

> 얕은 복사 극복하기

- Slice 연산자를 활용하여 같은 원소를 가진 리스트지만 다른 주소를 가지고 있음
  
  ```python
  a = [1, 2, 3]
  b = [:]
  print(a, b) # [1, 2, 3], [1, 2, 3]
  b[0] = 5
  print(a, b) # [1, 2, 3], [5, 2, 3]
  ```
  
  <img title="" src="2022_07_25_TIL_imagefiles/2022-07-25-22-20-40-image.png" alt="" width="314">

> 얕은 복사(shallow copy) 주의사항

- 복사하는 리스트의 원소가 주소를 참조하는 경우
  
  ```python
  a = [1, 2, ['a', 'b']]
  b = a[:]
  print(a, b) # [1, 2, ['a', 'b']] [1, 2, ['a', 'b']]
  b[2][0] = 0
  print(a, b) # [1, 2, ['a', 'b']] [1, 2, ['a', 'b']]
  ```
  
  <img title="" src="2022_07_25_TIL_imagefiles/2022-07-25-22-23-23-image.png" alt="" width="414">

> 깊은 복사(Deep Copy)

- 리스트 복사 확인하기
  
  - 알고리즘 문제에서 변수 복사할 때 많이 사용

  ```python
  import copy
  a = [1, 2, ['a', 'b']]
  b = copy.deepcopy(a)
  print(a, b) # [1, 2, ['a', 'b']] [1, 2, ['a', 'b']]
  b[2][0] = 0
  print(a, b) # [1, 2, ['a', 'b']] [1, 2, [0, 'b']]
  ```
  
  <img title="" src="2022_07_25_TIL_imagefiles/2022-07-25-22-25-11-image.png" alt="" width="420">
