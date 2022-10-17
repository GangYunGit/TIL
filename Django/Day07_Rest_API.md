# 2022. 10. 17.

# REST API

## 기본 개념

> HTTP

- Hyper Text Transfer Protocol

- HTML 문서와 같은 리소스(resource)들을 가져올 수 있도록 하는 프로토콜

- 요청 : 클라이언트에 의해 전송되는 메세지

- 응답 : 서버에서 응답으로 전송되는 메세지

> HTTP 특징

- Stateless(무상태)
  - 동일한 연결에서 연속적으로 수행되는 두 요청 사이에 링크가 없음
  - 응답을 마치고 연결을 끊는 순간 클라이언트와 서버 간의 통신이 끝나며 상태 정보가 유지되지 않음

> HTTP Request Methods

- GET, POST, `PUT`, `DELETE`

1. GET
  - 서버에 리소스의 표현을 요청
  - GET을 사용하는 요청은 데이터만 `검색`해야 함

2. POST
  - 데이터를 지정된 리소스에 제출
  - 서버의 상태를 변경

3. PUT
  - 요청한 주소의 리소스를 수정

4. DELETE
  - 지정된 리소스를 삭제

---

## Identifying resources on the Web

> 웹에서의 리소스 식별

- HTTP 요청의 대상을 리소스(resource, 자원)라고 함

- 리소스는 문서, 사진 또는 기타 어떤 것이든 될 수 있음

- 각 리소스는 `URI`로 식별됨

> URI

- Uniform Resource Identifier (통합 자원 식별자)

- 인터넷에서 하나의 리소스를 가리키는 문자열

- 가장 일반적인 URI는 웹 주소로 알려진 URL

- 특정 이름공간에서 이름으로 리소스를 식별하는 URN도 있다
  
> `URL`

- Uniform Resource Locator(통합 자원 `위치`)

- 웹에서 주어진 리소스의 주소

- 네트워크 상에 리소스가 어디 있는지(주소)를 알려주기 위한 약속
  - 이러한 리소스는 HTML, CSS, 이미지 등이 될 수 있음

> URL 구조

- Scheme (or protocol)
  - `https`://www.example.com:80/path/to/myfile.html/?key=value#quick-start
  - 브라우저가 리소스를 요청하는데 사용해야하는 프로토콜
  - URL의 첫 부분은 브라우저가 어떤 규약을 사용하는지 나타냄
  - 기본적으로 웹은 HTTP(S)를 요구하며 메일을 열기위한 mailto:, 파일을 전송하기 위한 ftp: 등 다른 프로토콜도 존재

- Authority
  - Scheme 다음은 문자 패턴 `://`으로 구분된 Authority(권한)이 작성됨
  - Authority는 domain과 port를 모두 포함하며 둘은 `:`(콜론)으로 구분됨
  - 1. Domain Name
    - https://`www.example.com`:80/path/to/myfile.html/?key=value#quick-start
    - 요청 중인 웹 서버를 나타냄
    - 어떤 웹 서버가 요구되는 지를 가리키며 직접 IP 주소를 사용하는 것도 가능. 하지만, 사람이 외우기 어렵기 때문에 주로 Domain Name으로 사용
    - 예를 들어 도메인 google.com의 IP주소는 142.251.42.142
  - 2. Port
    - https://www.example.com:`80`/path/to/myfile.html/?key=value#quick-start
    - 웹 서버의 리소스에 접근하는데 사용되는 기술적인 문(Gate)
    - HTTP 프로토콜의 표준 포트는 다음과 같고 생략이 가능(나머지는 불가능)
    - HTTP - 80, HTTPS - 443
    - Django의 경우 8000(80 + 00)이 기본 포트로 설정되어 있음

- Path
  - https://www.example.com:80`/path/to/myfile.html`/?key=value#quick-start
  - 웹 서버의 리소스 경로
  - 초기에는 실제 파일이 위치한 물리적 위치를 나타냈지만, 오늘날은 실제 위치가 아닌 추상화된 형태의 구조를 표현
  
- Parameters
  - https://www.example.com:80/path/to/myfile.html/`?key=value`#quick-start
  - 웹 서버에 제공하는 추가적인 데이터
  - 파라미터는 `'&'` 기호로 구분되는 key-value 쌍 목록
  - 서버는 리소스를 응답하기 전에 이러한 파라미터를 사용하여 추가작업을 수행할 수 있음

- Anchor
  - https://www.example.com:80/path/to/myfile.html/?key=value`#quick-start`
  - 리소스의 다른 부분에 대한 앵커
  - 리소스 내부 일종의 "북마크"를 나타내며 브라우저에 해당 북마크 지점에 있는 콘텐츠를 표시
  - fragment identifier(부분 식별자)라고 부르는 `'#' 이후 부분은 서버에 전송되지 않음`
  - 서버에 전달되지 않고 `브라우저에게 해당 지점으로 이동할 수 있도록` 한다.
  - 하이퍼링크와 비슷한 기능을 하는 인터넷상의 다른 문서와 연결된 문자 혹은 그림

---

## REST API

> API

- Application Programming Interface

- 애플리케이션과 프로그래밍으로 소통하는 방법
  - 개발자가 복잫반 기능을 보다 쉽게 만들 수 있도록 프로그래밍 언어로 제공되는 구성

- API를 제공하는 애플리케이션과 다른 소프트웨어 및 하드웨어 등의 것들 사이의 간단한 계약이라고 볼 수 있음

- API는 복잡한 코드를 추상화하여 대신 사용할 수 있는 몇 가지 더 쉬운 구문을 제공

> Web API

- 웹 서버 또는 웹 브라우저를 위한 API

- `Open API`를 활용하는 추세

- 대표적인 Third Party Open API 서비스 목록
  - Youtube API
  - Naver Papago API
  - Kakao Map API

- API는 다양한 타입의 데이터를 응답
  - HTML, XML, `JSON` 등

> Open API

- 개발자라면 누구나 사용할 수 있도록 공개된 API

- 개발자에게 사유 응용 소프트웨어나 웹 서비스의 프로그래밍적 권한을 제공

> REST

- Representational State Transfer `표현`에 집중하자

- API Server를 개발하기 위한 일종의 소프트웨어 설계 방법론
  - 2000년 로이 필딩의 박사학위 논문에서 처음으로 소개된 후 네트워킹 문화에 널리 퍼짐
  
- '소프트웨어 아키텍쳐 디자인 제약 모음'

- REST 원리를 따르는 시스템을 `RESTful` 하다고 부름

- REST의 기본 아이디어는 `리소스`
  - `자원을 정의하고 자원에 대한 주소를 지정하는 전반적인 방법을 서술`

> REST에서 자원을 정의하고 주소를 지정하는 방법

- 자원의 `식별` : `URI`

- 자원의 `행위` : `HTTP Method`

- 자원의 `표현` : `JSON으로 표현된 데이터`를 제공

> JSON

- JSON is a lightweight data-interchange format

- JavaScript의 표기법을 따른 단순 문자열

- 파이썬의 dictionary, 자바스크림트의 object처럼 C 계열의 언어가 갖고 있는 자료구조로 쉽게 변환할 수 있는 key-value 형태의 구조를 갖고 있음

- 사람이 읽고 쓰기 쉽고 기계가 파싱(해석 & 분석)하고 만들어내기 쉽기 때문에 현재 API에서 가장 많이 사용하는 데이터 타입

---

## Response JSON

> 개요

- JSON 형태로의 서버 응답 변화

- 다양한 방법의 JSON 응답

> 서버가 응답하는 것

- 이제는 JSON 데이터를 응답하는 서버로의 변환

- JSON 데이터를 받아 화면을 구성하여 사용자에게 보여주는 것은 Front-end Framewor가 담당할 예정

- Vue.js를 사용하게 되면 Django는  더 이상 Template 부분에 대한 역할을 담당하지 않게 되며 `Front-end와 Back-end가 분리`되어 구성되게 됨
  
---

## Response

> 다양한 방법으로 JSON 데이터 응답해보기

1. HTML 응답
2. JsonResponse()객체를 사용한 JSON 응답
3. Django Serializer를 사용한 JSON 응답
4. `Django REST framework를 사용한 JSON 응답`

> 1. HTML 응답

- 문서(HTML) 한 장을 응답하는 서버 확인하기

- 지금까지 Django로 응답해오던 방식

- 응답 확인하기

![image](https://user-images.githubusercontent.com/109258306/196091493-e4ddc77d-7606-4303-a24f-03e8e74fcb80.png)

> 2. JsonResponse()를 사용한 JSON 응답

- 이제는 문서(HTML) 한 장을 응답하는 것이 아닌 JSON 데이터를 응답해보기

- Django가 기본적으로 제공하는 `JsonResponse 객체`를 활용하여 Python 데이터 타입을 손쉽게 JSON으로 변환하여 응답 가능

- JsonResponse()
  - JSON-encoded response를 만드는 클래스
  - `safe` parameter : False로 설정 시 모든 타입의 객체를 serialization 할 수 있음.

- 응답 확인

![image](https://user-images.githubusercontent.com/109258306/196092132-a26279b8-b79c-434a-a6b1-cc59f79a5e12.png)

> 3. Django Serializer를 사용한 JSON 응답

- Django의 내장 HttpResponse()를 활용한 JSON 응답

- 이전에는 JSON의 모든 필드를 하나부터 열까지 작성해야 했지만 이제는 그렇지 않음

- 응답 확인하기

![image](https://user-images.githubusercontent.com/109258306/196092598-3483a3c5-d962-4f4f-8606-3f109641d311.png)

> Serialization이란?

- 데이터 구조나 객체 상태를 동일 혹은 다른 컴퓨터 환경에 저장하고, `나중에 재구성할 수 있는 포맷으로 변환`하는 과정
  
- 즉 `어떠한 언어나 환경에서도` 나중에 `다시 쉽게 사용할 수 있는 포맷으로 변환`하는 과정

- 변환 포맷은 대표적으로 json, xml, yaml이 있으며 `json`이 가장 보편적

> Serializers in Django

- Django의 `serialize()`는 Queryset 및 Model instance와 같은 복잡한 데이터를 JSON, XML 등의 유형으로 쉽게 변환할 수 있는 Python 데이터 타입으로 만들어 줌

> 4. **Django REST framework를 사용한 JSON 응답**

- Djaogn REST framework (DRF)

- Django에서 Restful API 서버를 쉽게 구축할 수 있도록 도와주는 오픈소스 라이브러리

- DRF 설치

![image](https://user-images.githubusercontent.com/109258306/196093384-c9f283c9-4e9b-4c58-9a21-53da8688d921.png)

- ModelForm과 유사한 ModelSerializer 구조 및 사용법 확인하기

```python
# articles/serializers.py

from rest_framework import serializers
from .models import Article


class ArticleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Article
        fields = '__all__'
```

```python
# articles/views.py

# @api_view(['GET'])
@api_view()
def article_json_3(request):
    articles = Article.objects.all()
    serializer = ArticleSerializer(articles, many=True)
    return Response(serializer.data)
```

- 응답 확인하기

![image](https://user-images.githubusercontent.com/109258306/196093847-5fa7e56f-e895-4b7f-9f71-17ca0716c13b.png)

- JSON 데이터를 DRF 전용 템플릿으로 응답함

---

## ModelSerializer

> 사전 준비

- Postman 설치, 샘플 데이터 추가

- DRF 설치, 등록 및 패키지 목록 업데이트

```
$ pip install djangorestframework
```

![image](https://user-images.githubusercontent.com/109258306/196095485-bc157136-d7b7-43b5-b7f7-e5d3e000ee32.png)

> ModelSerializer 작성

- articles/serializers.py 생성
  - 위치나 파일명은 자유롭게 작성 가능

- ModelSerializer 클래스는 모델필드에 해당하는 필드가 있는 Serializer 클래스를 자동으로 만들 수 있는 shortcut을 제공
  - Model 정보에 맞춰 자동으로 필드를 생성
  - serializer에 대한 유효성 검사기를 자동으로 생성(is_valid)
  - -create() 및 .update()의 간단한 기본 구현이 포함됨

> ModelSerializer의 'many' 옵션

- 단일 객체 인스턴스 대신 QuerySet 또는 객체 목록을 serialize 하려면 `many=True`를 작성해야 함

```
queryset = Book.objects.all()
serializer = ArticleListSerializer(queryset, many=True)
serializer.data

#
#   {'id': 0, 'title' : '...'},
#   {'id': 1, 'title' : '...'},
#   {'id': 2, 'title' : '...'},
#
```

---

## Build RESTful API - Article

> URL과 HTTP requests method 설계

|             |     GET      |  POST   |     PUT      |    DELETE    |
| ----------- | :----------: | :-----: | :----------: | :----------: |
| articles/   | 전체 글 조회 | 글 작성 | 전체 글 수정 | 전체 글 삭제 |
| articles/1/ | 1번 글 조회  |    .    |  1번글 수정  | 1번 글 삭제  |

> GET - List

- 게시글 데이터 목록 조회하기

- DRF에서 `api_view 데코레이터 작성은 필수`

```python
# articles/urls.py

urlpatterns = [
    path('articles/', views.article_list)
]
```

```python
# articles/views.py

from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import ArticleListSerializer
from .models import Article


@api_view(['GET'])
def article_list(request):
    articles = Article.objects.all()
    serializer = ArticleListSerializer(articles, many=True)
    return Response(serializer.data)
```

> `'api_view'` decorator

- DRF view 함수가 응답해야하는 HTTP 메서드 목록을 받음

- 기본적으로 GET 메서만 허용되며 다른 메서드 요청에 대해서는 405 Method Not Allowed로 응답

> GET - Detail

- 단일 게시글 데이터 조회하기

- 각 데이터의 상세정보를 제공하는 ArticleSerializer 정의

```python
# articles/serializers.py

class ArticleSerializer(serializers.ModelSerializer):

    class Meta():
        model = Article
        fields = '__all__'
```

- url, view 함수 작성

```python
# articles/urls.py

urlpatterns = [
    ...
    path('articles/<int:article_pk>', views.article_detail),
]

```

```python
# articles/views.py

@api_view(['GET'])
def article_detail(request, article_pk):
    articles = Article.objects.get(pk=article_pk)
    serializer = ArticleSerializer(articles, many=True)
    return Response(serializer.data)
```

> POST

- 게시글 데이터 생성하기

- 요청에 대한 데이터 생성이 성공했을 경우는 201 Created 상태코드를 응답하고 실패했을 경우 400 Bad request를 응답

![image](https://user-images.githubusercontent.com/109258306/196163872-336d5624-0d6c-40d3-bcca-a02055f35e6d.png)

> Raising an exception on invalid data

- is_valid()는 유효성 검사 오류가 있는 경우 ValidationError 예외를 발생시키는 선택적 raise_exception 인자 사용 가능

![image](https://user-images.githubusercontent.com/109258306/196164292-0d51bd1f-2f69-47f1-9498-8e5cee03484d.png)

- DRF에서 제공하는 기본 예외 처리기에 의해 자동으로 처리되며, 기본적으로 HTTP 400 응답을 반환

> DELETE

- 게시글 데이터 삭제하기

- 요청한 데이터 삭제가 성공했을 경우 204 No Content 상태 코드를 응답(명령을 수행했고, 더 이상 제공할 정보가 없는 경우)

```python
# articles/views.py

@api_view(['GET', 'DELETE'])
def article_detail(request, article_pk):
    article = Article.objects.get(pk=article_pk)
    if request.method == 'GET':
        serializer = ArticleSerializer(article)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        article.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
```

- Postman으로 204 응답을 확인해보자

> PUT

- 게시글 데이터 수정하기

- 요청에 대한 데이터 수정이 성공했을 경우 200 OK 상태 코드 응답

```python
# articles/views.py

@api_view(['GET', 'DELETE', 'PUT'])
def article_detail(request, article_pk):
    ...

    elif request.method == 'PUT':
        serializer = ArticleListSerializer(article, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
```

---

## Django REST framework - N : 1 Relation

> GET

- 댓글 데이터 목록 조회

```python
# articles/serializers.py

from .models import Article, Comment


class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = '__all__'
        # 데이터 조회에서는 쓰이지만 유효성 검사에서는 제외됨!
        read_only_fields = ('article',)
```

- url, view 함수 작성

```python
# articles/urls.py

urlpatterns = [
    ...
    path('comments/', views.comment_list),
]
```
```python
from .serializers import ArticleListSerializer, ArticleSerializer, CommentSerializer
from .models import Article, Comment


@api_view(['GET'])
def comment_list(request):
    if request.method == 'GET':
        comments = Comment.objects.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)

```

> 단일 댓글 데이터 조회, POST, DELETE, PUT도 Article과 비슷한 방식으로 진행

---

## N : 1 - 역참조 데이터 조회

> 개요

- 특정 게시글에 작성된 댓글 목록 출력하기 : 기존 필드 override

- 특성 게시글에 작성된 댓글의 개수 출력하기 : 새로운 필드 추가

> 1. 특정 게시글에 작성된 댓글 목록 출력하기

- 기존 필드 override - Article Detail
  - 게시글 조회시 해당 게시글의 댓글 목록까지 함께 출력
  - Serializer는 기존 필드를 overrid하거나 추가적인 필드를 구성할 수 있음

- models.py에서 `related_name`을 통해 이름 변경 가능

- 역참조 시 생성되는 `comment_set을 override` 할 수 있음

> 2. 특정 게시글에 작성된 댓글의 개수 출력하기

- 새로운 필드 추가 - Article Detail
  - 게시글 조회 시 해당 게시글의 댓글 개수까지 함께 출력하기

- `source`
  - serializers field's argument
  - 필드를 채우는 데 사용할 속성의 이름
  - 점 표기법(dotted notation)을 사용하여 속성을 탐색할 수 있음

> 주의! 읽기 전용 필드 지정 이슈

- 특정 필드를 override 혹은 추가한 경우, read_only_fields가 동작하지 않음!

- 테이블에 물리적으로 존재하지 않는 필드들은 read_only_field를 쓰지 말자

```python
# 사용 불가

class ArticleSerializer(serializers.ModelSerializer):
    comment_set = CommentSerializer(many=True)
    comment_count = serializers.IntegerField(source='comment_set.count')

    class Meta:
        model = Article
        fields = '__all__'
        # -------- 이렇게 쓰지 마세요 ---------
        read_only_fields = ('comment_set', 'comment_count',)\
        # ------------------------------------
```

---

## Django shortcuts functions

> 개요

- django.shortcuts 패키지는 개발에 도움 될 수 있는 여러 함수와 클래스를 제공

- 제공되는 shortcuts 목록
  - render(), redirect(), `get_object_or_404()`, `get_list_or_404()`

> get_object_or_404()

- 모델 manager objects에서 get()을 호출하지만, 해당 객체가 없을 땐 기존 DoesNotExist 예외 대신 Http404를 raise 함 

> get_list_or_404()

- 모델 manager objects에서 filter()의 결과를 반환하고 해당 객체 목록이 없을 땐 HTTP 404를 raise

> 왜 사용해야 할까?

- 클라이언트 입장에서 "서버에 오류가 발생하여 요청을 수행할 수 없다(500)"라는 원인이 정확하지 않은 에러를 마주하기 보다는, 서버가 적절한 예외 처리를 하고 클라이언트에게 올바른 에러를 전달하는 것 또한 중요한 요소