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

> get method

- a.get('name', ???) => argument에 name이라는 key의 value가 없어도 기본값(None)을 반환

- 기본값을 ???에 입력하면 기본값을 따로 설정해 줄 수 있다.

> 데이터 추출

- 기존의 데이터를 가공하여 새로운 데이터로 반환

> open 및 json 모듈

> open : `파일`을 입력으로 가져올수 있게 해주는 함수
  
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


# 관통 프로젝트 README.md

# PJT 01

### 이번 pjt 를 통해 배운 내용

- pjt는 그동안 배웠던 내용을 심화하여 문제를 해결하는 방법을 익히는 과정이다. 
교수님께서는 `'학'`과 `'습'`을 모두 강조하셨는데, 프로젝트를 진행하면서 분명 어떠한 문법을 써야 한다는 것은 느낌이 왔지만 적용이 제대로 되지 않아 문제를 하나 하나 풀기가 힘들었다. 이를 통해 `'습'`이 많이 부족했다는 것을 느꼈다.

- 코드를 긁어서 `ctrl + /`키를 누르면 모든 줄에 `#`이 붙으며 주석으로 변한다. 자주 써먹으니 잊지 말자. 

--- 

## A. 제공되는 영화 데이터 주요내용 수집(problem_a)

- 요구 사항

  - 제공되는 movie.json을 활용

  - movie.json에서 id, title, poster_path, vote_average, overview,
genre_ids 키에 해당하는 값을 추출

  - 추출한 값을 새로운 dictionary로 반환하는 함수 movie_info를 완성
  
- 결과 : movie.json이라는 파일에서 원하는 6개의 정보만 추출하여 반환하였다.
  
  - 문제 접근 방법 및 코드 설명
  
  ```python
  import json
  from pprint import pprint


  def movie_info(movie):    # example02의 내용을 이용하여 데이터를 추출
      new_movie = {
          'id': movie.get('id'),
          'title': movie.get('title'),
          'poster_path': movie.get('poster_path'),
          'vote_average': movie.get('vote_average'),
          'overview': movie.get('overview'),
          'genre_ids': movie.get('genre_ids'),
      }
      return new_movie    # 추출한 딕셔너리 데이터를 반환


  # 아래의 코드는 수정하지 않습니다.
  if __name__ == '__main__':
      movie_json = open('data/movie.json', encoding='utf-8')
      movie_dict = json.load(movie_json)

      pprint(movie_info(movie_dict))
    ```
  
  - 이 문제에서 어려웠던점
  
    - 교수님께서 json파일을 끌어오는 방법을 설명해주시긴 했지만, 이해를 제대로하지 못했던것같다. ~~죄송합니다 교수님ㅠㅠ~~ 코드를 실행해보면서 problem_a.py파일 내부의 `if __name__ = '__main__' ...`코드 덕분에 `movie.json`파일이 현재 디렉토리에 없어도 사용할 수 있었다는 것을 알았다. 

  - 내가 생각하는 이 문제의 포인트

    - 02_example.py 파일 그 자체.

---

## B. 제공되는 영화 데이터의 주요내용 수정(problem_b)

- 요구 사항 : movie.json파일에서 데이터를 추출(a번 문제와 동일), genres.json파일의 데이터를 이용하여 genre_ids의 데이터를 수정하여 새로운 dicionary를 반환
  
- 결과 : 'genre_ids'의 key값을 'genre_names'로 출력시켰고, value 값을 장르 코드가 의미하는 장르의 종류로 변경하였다. 
  
  - 문제 접근 방법 및 코드 설명
  
  ```python
  import json
  from pprint import pprint


  def movie_info(movie, genres):
      new_movie = {
          'id': movie.get('id'),
          'title': movie.get('title'),
          'poster_path': movie.get('poster_path'),
          'vote_average': movie.get('vote_average'),
          'overview': movie.get('overview'),
          'genre_names': movie.get('genre_ids'),  # key값을 'genre_ids'에서 변경 
      }

      genre_list = [genres[i]['id'] for i in range(len(genres))]
      # 장르의 id값으로만 이루어진 리스트를 genre_list에 대입

      new_genres = {genre_list[i]: genres[i]['name'] for i in range(len(genres))}
      # Dictionary Comprehension을 이용하여 ('장르 id' : '장르 이름')으로 이루어진 딕셔너리를 생성

      new_movie['genre_names'] = [new_genres[i] for i in new_movie['genre_names']]
      # list comprehension을 이용하여 기존의 'genre_names' key에 해당하는 value인 [18, 80]을 찾아['Drama', 'Crime']으로 변경 

      return new_movie
      

  # 아래의 코드는 수정하지 않습니다.
  if __name__ == '__main__':
      movie_json = open('data/movie.json', encoding='utf-8')
      movie = json.load(movie_json)

      genres_json = open('data/genres.json', encoding='utf-8')
      genres_list = json.load(genres_json)

      pprint(movie_info(movie, genres_list))
  ```
  
- 이 문제에서 어려웠던점
  
  - problem_a처럼 genres.get()메소드로 genres.json파일의 내용을 받아오려고 했으나, 예시1번의 코드와 같은 형태라는 것을 파악하지 못하는 바람에... get()의 괄호 내부의 값을 바꾸는 것에만 집착하다가 옆자리 용준님이 힌트를 주셨다(이것이 peer learning!). 
  
  - 두 번째 목표는 genres.json을 이용하여 (id : genre)를 원소로 하는 딕셔너리를 만드는 것이었다. 처음에는 List Comprehension을 이용하여 한큐에 new_genres라는 딕셔너리를 만들려고 했지만, `반복문 조건에서 장르의 id내에서만 순환하게 하려면` 장르 id로 이루어진 리스트를 만들어야 한다는 것을 깨달았고, genre_list를 만들어 반복문의 iterable자리에 대입하여 목표를 달성하였다.
  
  - 마지막 목표는 problem_a의 'genre_ids'자리에 'genre_names'를 대입하는 것이었다. 이를 위해 new_movie 딕셔너리의 마지막 key값을 바꿔주고, list comprehension을 이용하여 18번, 80번에 맞는 장르 이름을 바뀐 key인 'genre_names'에 대입하여 해결하였다.

- 내가 생각하는 이 문제의 포인트

    - genres.json파일에서 (key : value) 가 (id : 장르)로 이루어진 딕셔너리로 만들어주는 과정이 관건인것 같다. List,Dictinary Comprehension을 잘 이용하면 코드가 비교적 간결해진다.

---

## C. 다중 데이터 분석 및 수정(problem_c)

- 요구 사항

  - 제공되는 movies.json, gneres.json을 활용

  - problem_b의 함수구조를 재사용
   
  - 새로운 list를 반환하는 함수를 완성
  
- 결과 : movies.json이라는 파일의 모든 정보를 규칙에 맞게 출력하였다.
  
  - 문제 접근 방법 및 코드 설명
  
  ```python
  import json
  from pprint import pprint


  def movie_info(movies, genres):
      new_movies = []   # movies.json 파일의 변수가 list구조이므로 이에 맞추어 준다.
      for i in range(len(movies)):
          new_movies.append(
              {
                  'id': movies[i].get('id'),
                  'title': movies[i].get('title'),
                  'poster_path': movies[i].get('poster_path'),
                  'vote_average': movies[i].get('vote_average'),
                  'overview': movies[i].get('overview'),
                  'genre_names': movies[i].get('genre_ids'),
              }
          )
          '''   
          new_movies는 빈 리스트이므로 append메소드를 이용하여 값을 인덱스마다
          하나씩 추가해준다. 이것을 for문을 이용하여 movies의 길이 만큼 인덱스를
          반복시켜주면 {영화정보 딕셔너리}를 원소로 하는 리스트가 완성된다.
          '''

      genre_list = [genres[i]['id'] for i in range(len(genres))]
      # 장르의 id를 원소로 하는 리스트를 생성 

      new_genres = {genre_list[i]: genres[i]['name'] for i in range(len(genres))}
      # ('장르 id' : '장르 이름')을 원소로 하는 딕셔너리 생성

      for j in range(len(movies)):
          new_movies[j]['genre_names'] = [
              new_genres[i] for i in new_movies[j]['genre_names']
          ]
      # problem_b의 출력 형태를 가져오되, 리스트 내부에 딕셔너리로 출력해야 하므로 
      # for문을 이용하여 리스트에 순차적으로 딕셔너리 원소를 추가한다.
      return new_movies


  # 아래의 코드는 수정하지 않습니다.
  if __name__ == '__main__':
      movies_json = open('data/movies.json', encoding='utf-8')
      movies_list = json.load(movies_json)

      genres_json = open('data/genres.json', encoding='utf-8')
      genres_list = json.load(genres_json)

      pprint(movie_info(movies_list, genres_list))

  ```
  
- 이 문제에서 어려웠던점
  
  - problem_b에서 조금만 수정하면 될 줄 알았지만... new_movies변수에 movies.json파일의 정보를 할당하는 과정에서 변수에 .json파일의 마지막 정보만 계속 담겨 for문을 돌릴 때 자료의 갯수가 맞지 않아 index error가 발생하였다. 루프가 돌 때마다 변수에 값이 순차적으로 저장되는게 아니라 값이 업데이트가 되어 버린다는 것이 가장 큰 문제였다. 이를 append메소드를 이용하여 해결하였다. ~~분명 은연중에 append가 떠올랐었는데 왜 사용할 생각을 안했는지 모르겠다...~~

- 내가 생각하는 이 문제의 포인트

  - 출력이 길어진다고 쫄지 말자. 특히 원하는 자료를 리스트나 딕셔너리의 형태로 뽑아내기 위해서는 Comprehension을 잘 다뤄야 하는 것 같다.

---

## D. 알고리즘을 사용한 데이터 출력(problem_d)

- 요구 사항

  - movies.json과 `movies폴더 내부의 json파일` 활용

  - 반복문을 통해 movies 폴더 내부의 파일들을 오픈해야함

  - 수익이 가장 높은 영화의 제목을 출력하는 `함수 max_revenue` 를 완성
  
- 결과 : 수익이 가장 높은 영화의 제목은 `'반지의 제왕 : 왕의 귀환'`으로 출력되었다.
  
  - 문제 접근 방법 및 코드 설명
  
  ```python
  import json


  def max_revenue(movies):
      id_list = [movies[i]['id'] for i in range(len(movies))]
      # id를 원소로하는 리스트 변수

      movie_detail_list = []
      # movies폴더의 .json파일들을 list로 받기위한 변수 선언

      max_revenue = 0
      # 최대값을 대입할 변수 선언

      for i in id_list:
          movie_id = open(f'data/movies/{i}.json', encoding='utf-8')
          movie_detail_list.append(json.load(movie_id))
      # movies 내부의 파일에 접근하기 위해 f-string 방법을 이용, 반복문에 대입

      movie_revenue_dict = {
          movie_detail_list[i]['revenue']: movie_detail_list[i]['title']
          for i in range(len(id_list))
      }   # 수익과 영화제목을 딕셔너리로 받아 새 변수에 저장

      return movie_revenue_dict[max(movie_revenue_dict.keys())]
      # key값으로 최대값을 찾고, 이에 해당하는 value(영화 제목)를 반환


  # 아래의 코드는 수정하지 않습니다.
  if __name__ == '__main__':
      movies_json = open('data/movies.json', encoding='utf-8')
      movies_list = json.load(movies_json)

      print(max_revenue(movies_list))
  ```
  
- 이 문제에서 어려웠던점
  
  - 교수님께서도 open('어쩌구.json', encoing...)에서 `꼭 문!자!열!`로 쓰라고 강조를 하셨는데 그 이유를 알게 해주는 문제였다. ~~하지만 그 말씀에 `f-string을 이용할 수 있다`는 깊은 뜻이 있는 줄은 몰랐다.~~

- 내가 생각하는 이 문제의 포인트

  - f-string만 생각해 낸다면 크게 어렵지 않다. 이후에는 수익과 영화제목을 딕셔너리로 받아 keys()메서드를 활용하여 max값을 찾고, 이에 해당하는 value값을 출력하게 만든다.
  
---

## E. 알고리즘을 사용한 데이터 출력(problem_e)

- 요구 사항

  - movies.json과 `movies폴더 내부의 json파일` 활용

  - 반복문을 통해 movies 폴더 내부의 파일들을 오픈해야함

  - 개봉일이 12월인 영화들의 제목을 리스트로 출력하는 `함수 dec_movies`를 완성
  
- 결과 : 12월에 개봉되 영화로 `['그린 마일', '인생은 아름다워', '반지의 제왕: 왕의 귀환', '스파이더맨: 뉴 유니버스']`이 출력되었다.
  
  - 문제 접근 방법 및 코드 설명
  
  ```python
  import json


  def dec_movies(movies):
      id_list = [movies[i]['id'] for i in range(len(movies))]
      # id를 원소로 갖는 리스트 변수

      movie_detail_list = []
      # 영화의 세부정보(딕셔너리)를 담을 리스트

      for i in id_list:
          movie_id = open(f'data/movies/{i}.json', encoding='utf-8')
          movie_detail_list.append(json.load(movie_id))
      # movies 내부의 파일에 접근하기 위해 f-string 방법을 이용, 반복문에 대입

      movie_release_month_dict = {
          movie_detail_list[i]['release_date']: movie_detail_list[i]['title']   # 딕셔너리의 형태 => (개봉 날짜 : 영화제목)
          for i in range(len(movie_detail_list))    # list comprehension의 반복 범위 설정
          if movie_detail_list[i]['release_date'][5:7] == '12'    # key의 날짜 정보를 슬라이싱 한 '월'의 값을 '12'와 비교
      }   # 결과적으로 (개봉 날짜(1996.12.??) : 영화제목)의 딕셔너리가 형성

      return list(movie_release_month_dict.values())  # 딕셔너리의 value값만 추출하여 list로 형변환


  # 아래의 코드는 수정하지 않습니다.
  if __name__ == '__main__':
      movies_json = open('data/movies.json', encoding='utf-8')
      movies_list = json.load(movies_json)

      print(dec_movies(movies_list))
  ```
  
- 이 문제에서 어려웠던점
  
  - 날짜에서 몇 월인지 추출하기 위해 slice를 사용하면 될 것이라고 생각했고, 단계적으로 `(개봉 날짜 : 제목) => (개봉 월 : 제목) => 제목` 순으로 코드를 짜보려고 했으나 
    중간에 알 수 없는 이유로 슬라이싱 과정에서 데이터가 누락되는 상황이 발생했다. 해결방법을 찾지 못해 단계를 `((개봉 날짜 => 슬라이싱 => 12월과 비교) : 제목)`으로 변경하여
    코드를 완성할 수 있었다.

  - list로 형 변환이 왜 안되지?하고 아예 코딩을 다시 하려고 했는데 `list[대괄호]`로 묶고 있었다.. 

- 내가 생각하는 이 문제의 포인트

  - problem_d와 흐름은 비슷하다. 이 문제에서는 12월에 해당하는 정보만 추려내기 위한 과정이 관건인것 같다. 
  

# 후기

- 첫 프로젝트인만큼 그동안 배운 내용을 활용하여 문제를 해결하려 했지만 생각처럼 잘 되지 않았다.

- `'습'`이 많이 부족하다는 것을 느꼈다. 내가 부족한 문법 부분의 관련 문제를 찾아보고 많이 풀어봐야겠다.