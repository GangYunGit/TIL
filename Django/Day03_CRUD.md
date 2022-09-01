# 2022. 09. 01.

# CREATE 이어서

> 이전까지의 상황에서 2가지 문제점 발생

1. 게시글 작성 후 index 페이지가 출력되지만 게시글은 조회되지 않음
- create 함수에서 index.html 문서를 렌더링할 때 cotext 데이터와 함께 렌더링 하지 않았기 때문

- index 페이지 url로 다시 요청을 보내면 정상적으로 출력됨
2. 게시글 작성 후 URL은 여전히 create에 머물러 있음
- index view 함수를 통해 렌더링 된 것이 아니기 때문

- index view 함수의 반환값이 아닌 단순히 index 페이지만 렌더링 됨

> Django shortcut function - "redirect()"

- 인자에 작성된 곳으로 요청을 보냄

- 사용 가능한 인자
  
  - view name (URL pattern name) `return redirect('articles:index')`
  - absolute or relative URL `return redirect('/articles/')`
  
  <img title="" src="Day03_CRUD%20_imagefiles/2022-09-01-13-58-51-image.png" alt="" data-align="center" width="356">

- 동작을 확인하면 더 이상 create로 페이지가 넘어가지 않는다. 따라서 불필요해진 create.html은 삭제해줌

> Redirect 동작 원리

1. 클라이언트가 create url로 요청을 보냄
2. create view 함수의 redirect함수가 `302 status code`를 응답
3. 응답을 받은 브라우저는 redirect 인자에 담긴 주소(index)로 사용자를 이동시키기 위해 index url로 Django에 재요청
4. index page를 정상적으로 응답 받음 (`200 status code`)

> HTTP response status code

- 클라이언트에게 특정 HTTP 요청이 성공적으로 완료되었는지 여부를 알려줌

- 응답은 5개의 그룹으로 나뉘어짐

1. Informational responses (1xx)
2. Successful responses (2xx)
3. Redirection messages (3xx)
4. Client error responses (4xx)
5. Server error responses (5xx)

> HTTP method GET

- 현재는 게시글이 작성될 때 /artcles/create/?title=1&content=2 와 같은 URL로 요청이 보내짐

- GET은 `쿼리 스트링 파라미터로 데이터를 보내`기 때문에 url을 통해 데이터를 보냄

- CRUD 에서 `R`을 담당

- 하지만 현재 요청은 데이터를 `조회하는 것이 아닌 작성을 원하는 요청`

> HTTP method POST

- 서버로 데이터를 전송할 때 사용

- 서버에 변경사항을 만듦

- GET의 쿼리 스트링 파라미터와 다르게 `URL로 보내지지 않음`

- CRUD에서 `C/U/D`를 담당