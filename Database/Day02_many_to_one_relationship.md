# 2022. 10. 05.

# A many-to-one relationship

## 개요

- 관계형 데이터베이스에서의 외래 키 속성을 사용해 모델간 N:1 관계 설정하기

> 관계(Relationship)

- 테이블 간의 상호작용을 기반으로 설정되는 여러 테이블 간의 논리적인 연결

> 외래 키(foreign key, FK)

- 관계형 데이터베이스에서 한 테이블의 필드 중 `다른 테이블의 행을 식별`할 수 있는 키

> RDB에서의 관계

- 1 : 1
  - 한 테이블의 레코드 하나가 다른 테이블의 레코드 단 한개와 관련된 경우

- `N : 1`
  - 한 테이블의 0개 이상의 레코드가 다른 테이블의 레코드 한 개와 관련된 경우
  - 기준 테이블에 따라 (1 : N, One-to-many relationships)이라고도 함

- M : N
  - 한 테이블의 0개 이상의 레코드가 다른 테이블의 0개 이상의 레코드와 관련된 경우
  - 양쪽 모두에서 N : 1 관계

> Many-to-one relationships 예시

![image](https://user-images.githubusercontent.com/109258306/193953317-93fd19eb-3342-4fad-9cf7-8028a58b0695.png)

- 여러 개의 주문 입장에서 각각 어떤 주문에 속해 있는지 표현해야 하므로 고객 테이블의  PK를 주문 테이블에 FK로 집어 넣어 관계를 표현

- 고객(1)은 여러 주문(N)을 진행할 수 있음

---

## Foregn Key

> 개념

- 외래 키(외부 키)

- 관계형 데이터베이스에서 한 테이블의 필드 중 다른 테이블의 행을 식별할 수 있는 키

- `참조하는 테이블에서 1개의 키`에 해당하고, 이는 `참조되는 측 테이블의 PK를 가리킴`

- 참조하는 테이블의 행 1개의 값은, 참조되는 측 테이블의 행 값에 대응됨

- 참조하는 테이블 행 여러 개가, 참조되는 테이블의 동일한 행을 참조할 수 있음

> 특징

- 키를 사용하여 부모 테이블의 유일한 값을 참조(`참조 무결성`)

- 외래 키의 값이 반드시 부모 테이블의 기본 키일 필요는 없지만 유일한 값이어야 함

> 참고) 참조 무결성

- 데이터베이스 관계 모델에서 관련된 2개의 테이블 간의 일관성을 말함

- 외래 키가 선언된 테이블의 외래 키 속성(열)의 값은 그 테이블의 부모가 되는 테이블의 기본 키 값으로 존재해야 함

---

# N : 1 (Comment - Article)

> 개요

- Comment(N) - Article(1)

- Comment 모델과 Article 모델 간 관계 설정

- `0개 이상의 댓글은 1개의 게시글에 작성 될 수 있음`

---

## Django Relationships fields

> Django Relationships fields 종류

- OneToOneFiled()

- `ForeignKey()`

- ManyToManyField()

> ForeignKey(to, on_delete, **options)

- A many-to-one relationship을 담당하는 Django의 모델 필드 클래스

- Django 모델에서 `관계형 데이터베이스의 외래 키 속성을 담당`

- `2개의 필수 위치 인자`가 필요 : `참조하는 model class`, `on_delete 옵션`

> ForeignKey arguments - `on_delete`

- 외래 키가 참조하는 객체가 사라졌을 때, 외래키를 가진 객체를 어떻게 처리할 지를 정의

- 데이터 무결성을 위해서 매우 중요한 설정

- on_delete 옵션들
  - `CASCADE` : `부모 객체(참조된 객체)가 삭제 되었을 때 `이를 `참조하는 객체도 삭제`
  - PROTECT, SET_NULL, SET_DEFAULT, ... 등 여러 옵션이 존재

> 참고) 데이터 무결성

- 데이터의 정확성과 일관성을 유지하고 보증하는 것

- DB나 RDBMS의 중요한 기능

- 무결성 제한의 유형
  - 개체 무결성
  - `참조 무결성`
  - 범위 무결성

> Comment model 정의

![image](https://user-images.githubusercontent.com/109258306/193955042-a162516e-aa1e-4935-8af9-01f3a390e5cf.png)

- 외래 키 필드는 ForeignKey 클래스를 작성하는 위치와 관계없이 필드의 마지막에 작성됨

- ForeignKey() 클래스의 인스턴스 이름은 `참조하는 모델 클래스 이름의 단수형(소문자)`으로 작성하는 것을 권장

---

## 관계 모델 참조

> Related manager

- Related manager는 N : 1 혹은 M : N 관게에서 사용 가능한 문맥(context)

- Django는 모델 간 N : 1 혹은 M : N 관계가 설정되면 `역참조`할 때에 사용할 수 있는 manager를 생성
  - 이전에 모델 생성시 `objecs`라는 매니저를 통해 queryset api를 사용했던 것처럼 related manager를 통해 queryset api를 사용할 수 있게 됨

> 역참조

- 나를 참조하는 테이블(나를 외래 키로 지정한)을 참조하는 것

> article.comment`_set`.method()

- Article 모델이 Comment 모델을 참조(역참조)할 때 사용하는 매니저

- `article.comment 형식`으로는 댓글 객체를 참조할 수 없음
  - 실제로 Article 클래스에는 `comment에 대한 정보가 없다.`

- 대신 Django가 역참조 할 수 있는 `comment_set manager`를 자동으로 생성해 article.comment`_set` 형태로 댓글 객체를 참조할 수 있음
  - N : 1 관계에서 생성되는 Related manager의 이름은 참조하는 `"모델명_set"`이름 규칙으로 만들어짐

- 반면, 참조 상황(Comment -> Article)에서는 실제 ForeignKey 클래스로 작성한 인스턴스가 Comment클래스의 클래스 변수이기 때문에 comment.article 형태로 작성 가능

> ForeignKey arguments - related_name

- 역참조 시 사용하는 매니저 이름(model_set manager)을 변경할 수 있음

- 작성 후, migration 과정이 필요

- 선택 옵션이지만 상황에 따라 반드시 작성해야하는 경우가 생기기도 함

```python
# articles/models.py

class Comment(models.Model):
    article = models.ForeignKey(Article, on_delete=modesl.CASCADE, related_name='comments')
```

- `위와 같이 변경하면 기존 article.comment_set은 더이상 사용할 수 없고, article.comments로 대체`

---

## Comment 구현

> CREATE

- 사용자로부터 댓글 데이터를 입력 받기 위한 CommentForm작성

- detail 페이지에 출력된 CommentForm을 살펴보면 다음과 같이 출력됨

  ![image](https://user-images.githubusercontent.com/109258306/193964291-604c3d79-5725-4c1f-9096-92de81c8104a.png)

- 다음과 같이 출력되는 이유는 Comment 클래스의 외래 키 필드 article 또한 데이터 입력이 필요하기 때문에 출력되고 있는 것

- 하지만, 외래 키 필드는 `사용자의 입력으로 받는 것이 아니`라 `view 함수 내에서 받아` 별도로 처리되어 저장되어야 함

- 외래 키 필드를 출력에서 제외 후 확인

```python
# articles/forms.py

class CommentForm(forms.ModelForm):

    class Meta:
        model = Comment
        exclude = ('article',)
```

> DELETE

- 댓글 삭제 구현하기
  - url의 통일성과 view함수 작성을 편하게 위해 article의 pk와 comment의 pk 두개를 이용한다.

```python
from django.urls import path
from . import views


app_name = 'articles'
urlpatterns = [
    path('', views.index, name='index'),
    path('create/', views.create, name='create'),
    path('<int:pk>/', views.detail, name='detail'),
    path('<int:pk>/delete/', views.delete, name='delete'),
    path('<int:pk>/update/', views.update, name='update'),
    path('<int:pk>/comments', views.comments_create, name='comments_create'),
    # path('<int:comment_pk>/comments/delete/', views.comments_delete, name='comments_delete'),   => delete url은 이렇게 써도 동작은 한다.
    path('<int:article_pk>/comments/<int:comment_pk>/delete/', views.comments_delete, name='comments_delete'),
]
```

- view 함수 작성

```python
def comments_delete(request, article_pk, comment_pk):
    comment = Comment.objects.get(pk=comment_pk)
    comment.delete()    
    return redirect('articles:detail', article_pk)
```

- detail.html에 댓글을 출력할 부분 추가

![image](https://user-images.githubusercontent.com/109258306/194067626-3302b924-f20b-4cba-ac4a-24303cbfb89c.png)


> UPDATE

- 댓글 수정은 나중에...

- 게시글 수정 페이지가 필요했던 것처럼 댓글 수정 페이지가 필요하게 됨

- 하지만 일반적으로 댓글 수정은 수정 페이지로 이동 없이 현재 페이지가 유지된 상태로 댓글 작성 Form 부분만 변경되어 수정 할 수 있도록 함

- 이처럼 `페이지의 일부 내용만 업데이트` 하는 것은 `JavaScript의 영역`이기 때문에 JavaScript를 학습한 후 별도로 진행하도록 함

> 댓글 개수 출력하기

1. DTL filter - `length` 사용

![image](https://user-images.githubusercontent.com/109258306/193984245-0e33074f-83c3-4c1a-afb5-195b0f3a8e07.png)

2. Queryset API - `count()` 사용

![image](https://user-images.githubusercontent.com/109258306/193984296-d859b0a2-89b0-4ede-b19e-8828279a6025.png)

---

# N : 1 (Article - User)

## 개요

- Article(N) - User(1)

- 0개 이상의 게시글은 1개의 회원에 의해 작성될 수 있음

---

## Referencing the User model

> Django에서 User 모델을 참조하는 방법

1. settings.AUTH_USER_MODEL
  - 반환 값: 'accounts.User'(문자열)
  - User모델에 대한 외래 키 또는 M : N 관계를 정의할 때 사용
  - models.py의 모델 필드에서 user 모델을 참조할 때 사용
  
2. get_user_model()
  - 반환 값 : User Object(객체)
  - 현재 활성화(active)된 User 모델을 반환 
  - 커스터마이징한 User 모델이 있을 경우에는 Custom User model을, 그렇지 않으면 User를 반환
  - `models.py가 아닌 다른 모든 곳에서 유저 모델을 참조할 때 사용`

> Article과 User간 모델 관계 설정

- Article모델에 User모델을 참조하는 외래 키 작성

```python
# articles/models.py

from django.conf import settings

class Article(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
```

- Migration 진행

![image](https://user-images.githubusercontent.com/109258306/193986999-69edf25e-3d3f-4f1a-a111-5c728107556a.png)

- 기본적으로 모든 컬럼은 NOT NULL 제약조건이 있기 때문에 데이터가 없이는 새로 추가되는 외래 키 필드 user_id가 생성되지 않음

- 1을 입력하고 Enter 진행 => 다음 화면에서 직접 기본값 1을 입력

> Django에서 User 모델을 참조하는 방법 정리

- 문자열과 객체를 반환하는 특징과 Django의 내부적인 동작 순서 등등.. 때문에 models.py에서 get_user_model()을 쓰면 Django가 인식하지 못한다.

- User 모델을 참조할 때
  - `models.py에서`는 `settings.AUTH_USER_MODEL`
  - 다른 모든 곳에서는 `get_user_model()`

---

## CREATE

> ArticleForm

- ArticleForm 출력을 확인해보면 create 템플릿에서 불필요한 필드(user)가 출력됨

- 이전에 CommentForm에서 외래 키 필드 article이 출력되는 상황과 동일한 상황

- user 필드도 마찬가지로 사용자로부터 받는 것이 아니라 request 객체에서 `request.user`로 받음

> 외래 키 데이터 누락

![image](https://user-images.githubusercontent.com/109258306/193989396-53ebaa97-8319-4951-915b-3e51627b54ac.png)

- 게시글 작성 시 NOT NULL constraint failed 에러 발생

- 게시글 작성 시 외래 키에 저장되어야 할 작성자 정보가 누락되었기 때문

- 게시글 작성 시 작성자 정보가 함께 저장될 수 있도록 save의 commit 옵션을 활용!

```python
# articles/views.py

@login_required
@require_http_methods(['GET', 'POST'])
def create(request):
    if request.method == 'POST':
        form = ArticleForm(request.POST)
        if form.is_valid():
            article = form.save(commit=False)
            article.user = request.user
            article.save()
            return redirect('articles:detail', article.pk)
```

- 수정 후 게시글 작성이 잘 되는지 확인

![image](https://user-images.githubusercontent.com/109258306/193989583-bd48d395-d602-4184-857e-d6e60bf324de.png)

---

## DELETE

- 게시글 삭제 시 작성자 확인

![image](https://user-images.githubusercontent.com/109258306/193989987-71e46482-a785-4a5e-b6fe-cba8c7f6aef1.png)

---

## UPDATE

> 게시글 수정 시 작성자 확인

- 수정을 요청하려는 사람과 게시글을 작성한 사람을 비교하여 본인의 게시글만 수정할 수 있도록 함

![image](https://user-images.githubusercontent.com/109258306/193990517-71a8c354-44ff-4d2b-82c2-f2fee7206898.png)

- 추가로 해당 게시글의 작성자가 아니라면, 수정/삭제 버튼을 출력하지 않도록 함

![image](https://user-images.githubusercontent.com/109258306/193991096-e56fa766-1518-415a-8bfe-91b8b3a6fa00.png)

---

## READ

> 게시글 작성자 출력

- index 템플릿과 detail 템플릿에서 각 게시글의 작성자 출력

![image](https://user-images.githubusercontent.com/109258306/193991554-e9e4ebba-9e0c-494d-979b-db591eb8a3d0.png)

---

# N : 1 (Comment - User)

## 개요

- Comment(N) - User(1)

- Comment 모델과 User 모델 간 관계 설정

- 0개 이상의 댓글은 1개의 회원에 의해 작성 될 수 있음

---

## 모델 관계 설정

> Comment와 User간 모델 관계 설정

- Comment 모델에 User 모델을 참조하는 외래 키 작성

- Migration 진행

- comment 테이블 스키마 변경 및 확인

---

## CREATE

> 개요

- 인증된 회원의 댓글 작성 구현

- 작성하기 전 로그인을 먼저 진행

> CommentForm
  
- 역시나 또 create 템플릿에서 불필요한 user필드가 출력됨

- request.user로 받아 처리

> 외래 키 데이터 누락

- 댓글 작성 시 작섲아 정보가 함께 저장될 수 있도록 save의 commit 옵션 아래에 추가

---

## READ

> 댓글 작성자 출력

- detail 템플릿에서 각 게시글의 작성자 출력

---

## DELETE

> 댓글 삭제 시 작성자 확인

- 이제 댓글에는 작성자 정보가 함께 들어있기 때문에 현재 삭제를 요청하려는 사람과 댓글을 작성한 사람을 비교하여 본인의 댓글만 삭제 할 수 있도록 함

![image](https://user-images.githubusercontent.com/109258306/193995761-998baa96-8964-4aef-a2cd-9ff89296a2fa.png)

---

## 인증된 사용자에 대한 접근 제한하기

> 개요

- is_authenticated 와 View decorator를 활용하여 코드 정리하기

> 인증된 사용자인 겨웅만 댓글 작성 및 삭제하도록

- comment_create 함수

![image](https://user-images.githubusercontent.com/109258306/194068183-4bf455d5-601f-4edb-b7f7-c14f32440a8b.png)

- comment_delete 함수

![image](https://user-images.githubusercontent.com/109258306/194068358-2fc6b17b-386d-42cd-bf68-d60198903210.png)

> 비인증 사용자는 CommentForm을 볼 수 없도록 

- detail.html

![image](https://user-images.githubusercontent.com/109258306/194068636-05db8ef7-73ba-4759-927d-35b0b947c8fb.png)
