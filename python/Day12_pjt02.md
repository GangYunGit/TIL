# 2022. 07. 29.

# API와 JSON

> API(Application Programming Interface)

- 프로그램끼리 서로 소통하는 방식

- Client, Server로 구성되어있음

- Client(브라우저)가 서버에 요청(request)를 보내면 응답(response)가 온다.

- 클라이언트가 API를 통해 서버에 정보를 요청!

> JSON

- 문서(데이터)의 형식

- 요청에 대한 응답을 JSON 형태로 보내줌.

- get : 데이터 조회 <= 오늘 프로젝트에서 씀

- post : 데이터 생성, 수정

- put : 데이터 수정

- delete : 데이터 삭제

> URL의 규칙

>> https:// (1) / (2) / (3) / (4)

1. https:// => 프로토콜(약속)
2. base url => 가장 기본이 되는 사이트의 URL (ex. naver.com)
3. path => 경로
4. params => 맨 앞의'?'를 기준으로 나뉘며, key = value & key = value & key = value... 방식으로 나아감. 

- URL을 직접 때려넣지 않고, request.get(URL, params = ???)를 이용하여 쓴다.

- .json()메서드 => 딕셔너리로 바꿔주는 메서드

- 오픈 API

# **파이썬 스타일가이드를 지키자!**

1. 변수, 함수명은 의미있게 짓자.
2. 변수, 함수명은 스네이크 케이스(list_a, user_name) / 클래스는 캐멀 케이스(class: PersonInfo)
3. True/False evaluation -> 빈 컨테이너, Boolean 검사, 단 값은 무조건 그대로
4. else가 필요없는 경우는 쓰지 않는 것이 좋다.
5. 중복된 코드는 함수로 묶자
6. 복잡한 코드는 주석을 달자