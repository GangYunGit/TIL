# 2022. 10. 12.

# M : N relationship

- 한 테이블의 0개 이상의 레코드가 다른 테이블의 0개 이상의 레코드와 관련된 경우

- 양쪽 모두에서 N : 1의 관계를 가짐

> 용어

- target model : 관계 필드를 가지지 않은 모델

- source model : 관계 필드를 가진 모델

- ex) comment(source)와 article(target)

> N : 1의 한계

- 의사와 환자간 예약 시스템?

- 지금까지 배운 N : 1 관계를 적용해보면 한 명의 의사에게 여러 환자가 예약할 수 있다고 모델 관계를 설정

- 각각 2명의 의사와 환자를 생성하고 환자는 서로 다른 의사에게 예약을 했다고 가정

![image](https://user-images.githubusercontent.com/109258306/195222890-dcda8aa8-bbe8-4a8a-85b8-3c9173bf463b.png)

- 1번 환자가 두 의사 모두에게 방문하려고 함
  - 새로운 환자 객체를 생성할 수 밖에 없음

![image](https://user-images.githubusercontent.com/109258306/195223455-44970ff5-9f91-42e1-bbbb-d9d00e384b8c.png)

- 동시에 예약 할 수는 없을까?
  - 외래 키 컬럼에 '1, 2'의 형태로 참조하는 것은 Integer가 아니기 때문에 불가능
  
![image](https://user-images.githubusercontent.com/109258306/195223603-298b8edc-af35-4af0-b011-3adeda83ac16.png)

- 예약 테이블을 따로 만들어보자

> 중개 모델

- 데이터 초기화, model 수정

![image](https://user-images.githubusercontent.com/109258306/195224413-5a1d01ff-d6fc-499b-894e-7334042861ce.png)

- 의사와 환자 생성 후 예약 만들기

![image](https://user-images.githubusercontent.com/109258306/195224508-5bf9e9d4-1c22-4852-8c9a-557295fce583.png)

> Django ManyToManyField

- 데이터 초기화, model 수정

![image](https://user-images.githubusercontent.com/109258306/195225262-35613fcb-f0fe-4c4d-9384-86424efcb1c9.png)

- ManyToManyField를 의사 쪽에 만들거나 환자 쪽에 만들거나 상관은 없다. 종속적인 관계가 아니기 때문이다.

- 생성된 중개 테이블 hospitals_patient_doctors 확인

![image](https://user-images.githubusercontent.com/109258306/195225649-cc8f376d-8813-4f2d-b8c6-e96506b5e6fa.png)

- 의사 1명과 환자 2명 생성 후 환자가 의사를 예약

![image](https://user-images.githubusercontent.com/109258306/195226658-c884e034-bcc8-46c6-9952-95b02176d5e3.png)

- 의사가 환자를 예약

![image](https://user-images.githubusercontent.com/109258306/195226856-c99c5b49-8aec-4173-8177-5fd6658b244f.png)

- 예약 삭제(양쪽 모두 가능)

![image](https://user-images.githubusercontent.com/109258306/195227352-c2e6cdd9-415b-4851-849f-46c06b2eb384.png)

- Django는 ManyToManyField를 통해 중개 테이블을 자동으로 생성함

> `related_name` argument

- target model이 source model을 참조할 때 사용할 manager name

- ForeignKey()의 related_name과 동일

> `through` argument

- 중개 테이블을 수동으로 지정하려는 경우 `through`옵션을 사용하여 사용하려는 중개 테이블을 나타내는 Django 모델을 지정할 수 있음

- `중개테이블에 추가 데이터`를 사용하려는 경우

---

## ManyToManyField

> ManyToManyField란

- ManyToManyField(to, **options)

- 다대다(M : N) 관계 설정 시 사용하는 모델 필드

- 하나의 필수 위치인자가 필요

- 모델 필드의 RelatedManager를 사용하여 관련 개체를 추가, 제거 또는 만들 수 있음

- add(), remove(), create(), clear()...

> 데이터베이스에서의 표현

- 중개 테이블 이름은 ManyToManyField 이름과 이를 포함하는 모델의 테이블 이름을 조합하여 생성됨

- `'db_table' arguments`를 사용하여 중개 테이블의 이름 변경 가능

> ManyToManyField's Arguments

1. related_name

- target model이 source model을 참조할 때 사용할 manager name

2. through

- 중개 테이블을 직접 장성하는 경우, through 옵션을 사용하여 중개 테이블을 나타내는 Django 모델을 지정

3. symmetrical

- 기본값 = True

- ManyToManyField가 동일한 모델(on self)을 가리키는 정의에서만 사용

```python
class Person(models.Model):
    friends = models.ManyToManyField('self')
```

- True일 경우
  - _set 매니저를 추가하지 않음
  - source 모델의 인스턴스가 target모델의 인스턴스를 참조하면 자동으로 target 모델 인스턴스도 source모델 인스턴스를 자동으로 참조하게 됨
  - 팔로우 기능

> Related Manager

- N : 1혹은 M : N 관계에서 사용가능한 문맥(context)

- M : N 관계에서는 관련된 두 객체에서 모두 사용가능

- add(). remove() 등등

> methods

- add()
  - `지정된 객체를 관련 객체 집합에 추가`
  - 이미 존재하는 관계에 사용하면 관계가 복제되지 않음
  - 모델 인스턴스, 필드 값(PK)을 인자로 허용

- remove()
  - `관련 객체 집합에서 지정된 모델 개체를 제거`
  - 내부적으로 QuerySet.delete()를 사용하여 관계를 삭제
  - 모델 인스턴스, 필드 값(PK)을 인자로 허용

---

# M : N (Article - User)

## LIKE

> 모델 관계 설정

- Migration 진행 후 에러 확인

![image](https://user-images.githubusercontent.com/109258306/195233403-fe830057-ec37-486d-9731-675cb76402a7.png)

- `like_users` 필드 생성 시 자동으로 `역참조에는 .article_set 매니저가 생성`됨

- 그러나 이전 N : 1 (Article - User)관계에서 이미 해당 매니저를 사용 중
  - `user가 작성한 글들(user.article_set)`과 `user가 좋아요누른 글(user.article_set)`을 구분할 수 없게 됨

- user와 관계된 ForeignKey 혹은 ManyToManyField중 하나에 related_name 작성이 요구됨

- ManyToManyField에 related_name 작성 후 Migration 진행

![image](https://user-images.githubusercontent.com/109258306/195233962-d1ee83b6-409d-44a1-b624-d63aca92c902.png)

> User - Article간 사용 가능한 related manager 정리

- article.user : 게시글을 작성한 유저 - N : 1

- user.article_set : 유저가 작성한 게시글(역참조) - N : 1

- article.like_users : 게시글을 좋아요한 유저 - M : N

- user.like_articles : 유저가 좋아요한 게시글(역참조) - M : N

> `.exists()`

- `QuerySet에 결과가 포함되어 있으면 True`를 반환하고 그렇지 않으면 False를 반환(in 연산자와 같은 역할)

- 특히 큰 QuerySet에 있는 특정 개체의 존재와 관련된 검색에 유용

> LIKE 구현하기

- urls.py

```python
# articles/urls.py

app_name = 'articles'
urlpatterns = [
    ...
    path('<int:article_pk>/likes/', views.likes, name='likes'),
]
```

- views.py

```python
# articles/views.py

@require_POST
def likes(request, article_pk):
    # 좋아요 추가할지 취소할지 무슨 기준으로 if문을 작성할까?
    # 현재 게시글에 좋아요를 누른 유저 목록에 현재 좋아요를 요청하는 유저가 있는지 없는지 확인
    # if request.user in article.like_users.all():
    if article.like_users.filter(pk=request.user.pk).exists():
        # 좋아요 취소 (remove)
        article.like_users.remove(request.user)
    else:
        # 좋아요 추가 (add)
        article.like_users.add(request.user)
    return redirect('articles:index')
```

- index 템플릿에서 각 게시글에 좋아요 버튼 출력

```html
<!-- articles/index.html -->

{% extends 'base.html' %}

{% block content %}
  <h1>Articles</h1>
  ...
  {% for article in articles %}
    ...
    <div>
      <form action="{% url 'articles:likes' article.pk %}" method="POST">
        {% csrf_token %}
        {% if request.user in article.like_users.all %}
          <input type="submit" value="CANCEL">
        {% else %}
          <input type="submit" value="LIKE">
        {% endif %}
      </form>
    </div>
    <a href="{% url 'articles:detail' article.pk %}">상세 페이지</a>
    <hr>
  {% endfor %}
{% endblock content %}

```

- 데코레이터, 로그인 된 유저 확인 추가

```python
@require_POST
def likes(request, article_pk):
    if request.user.is_authenticated:
        article = Article.objects.get(pk=article_pk)
        if article.like_users.filter(pk=request.user.pk).exists():
            article.like_users.remove(request.user)
        else:
            article.like_users.add(request.user)
        return redirect('articles:index')

    return redirect('accounts:login')

```
---

# M : N (User - User)

## Profile

- User 자기 자신(sef)과의 M : N 관계 설정을 통한 팔로우 기능 구현

> Profile 구현

- urls.py

```python
# accounts/urls.py

app_name = 'accounts'
urlpatterns = [
    ...
    path('profile/<str:username>/', views.profile, name='profile'),
]


```

- views.py

```python
# accounts/views.py

from django.contrib.auth import get_user_model

def profile(request, username):
    User = get_user_model()
    person = User.objects.get(username=username)
    context = {
        'person': person
    }
    return render(request, 'accounts/profile.html', context)
```

- profile 템플릿 작성

```html
{% extends 'base.html' %}

{% block content %}
  <h1>{{ person.username }}님의 프로필</h1>

  <h2>{{ person.username }}님이 작성한 모든 게시글</h2>
  {% for article in person.article_set.all %}
    <div>{{ article.title }}</div>
  {% endfor %}
  <hr>

  <h2>{{ person.username }}님이 작성한 모든 댓글</h2>
  {% for comment in person.comment_set.all %}
    <div>{{ comment.content }}</div>
  {% endfor %}
  <hr>

  <h2>{{ person.username }}님이 좋아한 모든 게시글</h2>
  {% for article in person.like_articles.all %}
    <div>{{ article.title }}</div>
  {% endfor %}
  <hr>

  <a href="{% url 'articles:index' %}">back</a>
{% endblock content %}
```

- bast.html과 index.html의 게시글 작성자에도 profile로 이동할 수 있는 a태그를 작성해주자

---

## Follow

> 모델 관계 설정

- ManyToManyField 작성 및 Migration 진행

```python
# accounts/models.py

class User(AbstractUser):
    followings = model.ManyToManyField('self', symmetrical=False, related_name='followers')
```

- 중개 테이블에서 'self'속성을 사용하여 from, to로 분리된 필드를 볼 수 있음

![image](https://user-images.githubusercontent.com/109258306/195335749-d8de114a-47d6-4ef2-a22a-20f2fa1dfd96.png)

> Follow 구현하기

- urls.py

```python
# accounts/urls.py

app_name = 'accounts'
urlpatterns = [
    ...
    path('<int:user_pk>/follow/', views.follow, name='follow'),
]

```

- views.py

```python
# accounts/views.py

def follow(request, user_pk):
    User = get_user_model()
    me = request.user
    you = User.objects.get(pk=user_pk)
    if me != you:
        # 내가(request.user) 그 사람의 팔로워 목록에 있다면
        if you.followers.filter(pk=me.pk).exists():
            # 언팔로우
            you.followers.remove(me)
        else:
            # 팔로우
            you.followers.add(me)
    return redirect('accounts:profile', you.username)
```

- 프로필 유저의 팔로잉, 팔로워 수, 팔로우 버튼 등을 작성

```html
{% extends 'base.html' %}

{% block content %}
  <h1>{{ person.username }}님의 프로필</h1>
  <div>
    팔로워 : {{ person.followers.all|length }} / 팔로잉 : {{ person.followings.count }}
  </div>

  {% if request.user != person %}
  <div>
    <form action="{% url 'accounts:follow' person.pk %}" method="POST">
      {% csrf_token %}
      {% if request.user in person.followers.all %}
        <input type="submit" value="Unfollow">
      {% else %}
        <input type="submit" value="Follow">
      {% endif %}
    </form>  
  </div>
  {% endif %}
  </div>
```

- 데코레이터 및 로그인 인증 추가로 마무리

---

# Extra

## Fixtures

> 초기 데이터의 필요성

- Django 프로젝트의 앱을 처음 설정할 때 동일하게 준비 된 데이터로 데이터베이스를 미리 채우는 것이 필요한 순간이 있다.

- Django에서는 `fixtures`를 사용해 앱에 `초기 데이터(initial data)를 제공`할 수 있다.

- 즉, migrations와 fixtures를 사용하여 data와 구조를 공유하게 된다.

> fixtures

- Django가 데이터베이스로 가져오는 방법을 알고 있는 데이터 모음

- Django가 직접 만들기 때문에 데이터베이스 구조에 맞추어 작성되어 있음

> fixtures 기본 경로

- app_name/fixtures/

- Django는 설치된 모든 app의 디렉토리에서 fixtures 폴더 이후의 경로로 fixtures 파일을 찾는다.

> fixtures 생성 및 로드

- 생성(추출) : dumpdata

- 로드(불러오기) : loaddata

- 작성 예시

```
$ python manage.py dumpdata --indent 4 articles.arcitle > articles.json
```

