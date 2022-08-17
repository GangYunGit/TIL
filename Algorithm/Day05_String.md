# 2022. 08. 12

# 문자열(string)

> ASCII 코드와 유니코드

- 지역별로 사용되던 코드의 차이로 인해 글자가 깨지는 현상이 발생
  - 혼동을 피하기 위해 ASCII라는 문자 인코딩 표준이 제정되었다.

- ASCII는 7bit 인코딩으로 128문자를 표현하며 33개의 출력 불가능한 제어문자들과 공백을 비롯한 95개의 출력 가능한 문자들로 이루어져 있다.(1bit의 패리티 비트, 7bit의 출력 문자들)

- 국가간에 정보를 주고받을 때에도 위와 같은 문제가 발생하였다.
  - 다국어 처리를 위해 유니코드라는 문자 인코딩 표준이 제정되었다.

> 인코딩

- 유니코드를 컴퓨터에서 어떻게 변환할 것인가

> 유니코드 인코딩

- UTF - 8 (가변길이 방식)
  - 주로 `웹`에서 쓰임
  - 최소 8bit, 최대 32bit(1 * 4byte)
  - `범위를 넘어가면 1바이트씩 늘어남` => 효율적인 메모리 관리
  - **아스키코드랑 호환이 좋다**

- UTF - 16

- UTF = 32
  
> Python에서의 문자열

- `컨테이너`이자 `시퀀스`이자 `Immutable`이자 `iterable`

- indexing, **`slicing`**

- 메서드가 다양하다!

> 문자열 뒤집기

1. 반복문
2. reverse메서드
3. **`slicing`** => 편하고 빠르다

> atoi(ascii to int)

- **아스키코드 상의 str(숫자)와 `str('0') 기준점!`의 차이가 곧 int(숫자)랑 같다**

  ```python
  def atoi(number):
      int_number = 0

      for char in number:
          int_number *= 10
          int_number += ord(char) - ord('0')

      return int_number


  result = atoi('123')
  print(type(result))
  print(result)
  ```

> itoa(int to ascii)

- 예시 코드

  ```python
  def itoa(number):
      if number == 0:
          return '0'

      # 음수처리
      is_positive = True
      if number < 0:
          is_positive = False
          number = -number

      str_number = ''
      while number > 0:
          number, remainder = number // 10, number % 10  # divmod(number, 10)
          # 숫자를 문자로 바꿔서 계산
          str_number = chr(ord('0') + remainder) + str_number

      if not is_positive:
          str_number = '-' + str_number

      return str_number


  result = itoa(123)
  print(type(result))
  print(result)
  ```

- atoi, itoa 함수보다는 `ascii코드 상에서 문자를 이동할 수 있다는 사실`이 중요!

> 패턴 매칭

- 몰?루
