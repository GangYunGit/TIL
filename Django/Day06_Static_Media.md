# 2022. 10. 11. 

# Static files

> 정적 파일

- 응답할 때 별도의 처리 없이 파일 내용을 그대로 보여주면 되는 파일
  - 사용자의 요청에 따라 내용이 바뀌는 것이 아니라 요청한 것을 그대로 보여주는 파일

- 파일 자체가 고정되어있고, 서비스 중에도 추가되거나 변경되지 않고 고정되어있음
  - ex) 이미지, 자바스크립트 또는 CSS와 같이 미리 준비된 추가 파일(움직이지 않는)

- Django에서는 이러한 파일들을 `static file`이라고 함
  - Django는 `staticfiles 앱`을 통해 정적 파일과 관련된 기능을 제공

> Media File

- 미디어 파일

- 사용자가 웹에서 업로드하는 정적 파일

- 유저가 업로드한 모든 정적 파일

> 웹 서버와 정적 파일

- 웹 서버의 기본 동작
  - 특정 위치(URL)에 있는 자원을 요청(HTTP request)받아서 응답(HTTPS response)을 처리하고 제공하는 것

- 이는 "자원과 자원에 접근 간으한 주소가 있다."라는 의미
  - 예를 등러, 사진 파일은 자원이고 해당 사진파일을 얻기 위한 경로인 웹 주소(URL)가 존재

- 즉, 웹 서버는 요청받은 URL로 서버에 존재하는 정적자원(static resource)을 제공

---

## Static files 구성하기

> Django에서 정적파일 구성 및 사용 단계

1. INSTALLED_APPS에 `django.contrib.staticfiles가 포함`되어 있는지 확인하기
2. settings.py에서 `STATIC_URL`을 정의하기
3. 앱의 static 폴더에 정적 파일을 위치하기
  - ex) my_app/static/sample_img.jpg (templates 경로 설정하는 것과 같은 방식)
4. 템플릿에서 static 템플릿 태그를 사용하여 지정된 경로에 있는 정적 파일의 URL 만들기

```html
{% load static %}

<img src="{% static 'sample_img.jpg' %}" alt="sample image">
```

> Django template tag

- {% load %} : 특정 라이브러리, 패키지에 등록된 모든 템플릿 태그와 필터를 로드(import같은 개념)

- {% static 'static file 경로' %} : `STATIC_ROOT`에 저장된 정적 파일에 연결

> 참고) 소프트웨어 배포(Deploy)

- 프로그램 및 애플리케이션을 서버와 같은 기기에 설치하여 서비스를 제공하는 것

- 클라우드 컴퓨팅 서비스(AWS, Google Cloud, MS Azure등)에 프로그램 및 애플리케이션을 설치해 제공하는 것

> Static files 관련 Core Settings

1. STATIC_ROOT

- Default: None

- Django 프로젝트에서 사용하는 모든 정적 파일을 한곳에 모아 놓은 경로

- `collectstatic`이 `배포`를 위해 정적 파일을 수집하는 디렉토리의 절대 경로

- `개발 과정에서 settings.py의 DEBUG값이 True로 설정되어있으면 해당 값은 적용되지 않음`

- 실 서비스 환경(배포 환경)에서 Django의 모든 정적 파일을 다른 웹 서버가 직접 제공하기 위해 사용

- 배포 환경에서는 `Django를 직접 실행하는 것이 아니라, 다른 서버에 의해 실행되기 때문`에 실행하는 다른 `서버는 Django에 내장되어 있는 정적 파일들을 인식하지 못함`(내장되어 있는 정적 파일들을 밖으로 꺼내는 이유)

2. STATICFILES_DIRS

- Default: [](Empty list)

- `app/static/` 디렉토리 경로를 사용하는 것(기본 경로) 외에 추가적인 정적 파일 경로 목록을 정의하는 리스트

- 추가 파일 디렉토리에 대한 정체 경로를 포함하는 문자열 목록으로 작성되어야 함

``` python
# 작성 예시

STATICFILES_DIRS = [
    BASE_DIR / 'static',
]
```

3. STATIC_URL

- Defalut: None

- STATIC_ROOT에 있는 정적 파일을 참조할 때 사용할 URL

- 개발 단계에서는 실제 정적 파일들이 저장되어 있는 `app/static/` 경로(기본 경로) 및 `STATICFILES_DIRS`에 정의된 추가 경로들을 탐색

- `실제 파일이나 디렉토리가 아니며, URL로만 존재`

- 비어있지 않는 값으로 설정한다면 반드시 slash(/)로 끝나야 함

```python
# 작성예시

STATIC_URL = '/static/'
```

> static file 가져오기

- Static file을 가져오는 2가지 방법
  - 1. 기본 경로에 있는 static file 가져오기
  - 2. 추가 경로에 있는 static file 가져오기

> 기본경로에 있는 static file 가져오기

- articles/static/articles 경로에 이미지 파일 배치하기

![image](https://user-images.githubusercontent.com/109258306/194973120-d3406ee6-81e2-41ce-b10b-b1b110d2f565.png)

- static tag를 사용해 이미지 파일 출력

```html
<!-- articles/index.html -->

{% extends 'base.html' %}
{% load static %}   <!-- 주의! load태그는 extends태그 밑에 작성!!-->

{% block content %}
  <img src="{% static 'articles/sample_img_1.png' %}" alt="sample img">
  <h1>Articles</h1>
...
```

> 추가 경로에 있는 static file 가져오기

- 추가 경로 작성

```python
# settings.py

STATICFILES_DIRS = [
    BASE_DIR / 'static',
]
```

- static tag를 사용해 이미지 파일 출력하기

```html
<!-- articles/index.html -->

{% extends 'base.html' %}
{% load static %}

{% block content %}
  <img src="{% static 'articles/sample_img_1.png' %}" width="500px" alt="sample img">
  <img src="{% static 'sample_img_2.png' %}" width="500px" alt="sample img">
  <h1>Articles</h1>
...
```

> STATIC_URL 확인하기

- Django가 해당 이미지를 클라이언트에게 응답하기 위해 만든 image url 확인하기
  - 개발자도구 - Inspect 버튼을 통해 확인

- `"STATIC_URL + static file 경로"`로 설정됨
  - http://127.0.0.1:8000/static/sample_img.png

- 개발자도구 - Network에서 Request URL 확인해보기
  - 클라이언트에게 이미지를 응답하기 위한 요청 URL을 만든 것

![image](https://user-images.githubusercontent.com/109258306/194976036-b7e2c3eb-1b0c-43aa-b6d6-b2f0d0124a96.png)

---

## Image Upload

> 개념

- Django ImageField를 사용해 사용자가 업로드한 정적 파일(미디어 파일) 관리하기

> ImageField()

- 이미지 업로드에 사용하는 모델 필드

- `FileField를 상속`받는 서브 클래스이기 때문에 FileField의 모든 속성 및 메서드를 사용 가능

- 더해서 사용자에 의해 업로드 된 객체가 유효한 이미지인지 검사

- ImageField 인스턴스는 `최대 길이가 100자인 문자열`로 DB에 생성되며, max_length 인자를 사용하여 최대 길이를 변경 할 수 있음
  
> FileField()

- FileField(upload to=' ', storage=None, max_length=100, **options)

- 파일 업로드에 사용하는 모델 필드

- 2개의 선택 인자를 가지고 있음 : upload_to, storage

> FileField / ImageField를 사용하기 위한 단계

- settings.py에 `MEDIA_ROOT`, `MEDIA_URL` 설정

- `uploat_to` 속성을 정의하여 업로드 된 파일에 사용할 MEDIA_ROOT의 하위 경로를 지정(선택사항)

> MEDIA_ROOT

- Default: ''(Empty string)

- 사용자가 업로드한 파일들을 보관할 디렉토리의 `절대 경로`

- Django는 성능을 위해 `업로드 파일은 데이터베이스에 저장하지 않음`
  - 데이터베이스에 저장되는 것은 `"파일 경로"`

- MEDIA_ROOT는 STATIC_ROOT와 반드시 다른 경로로 지정해야 함

```python
# settings.py

MEDIA_ROOT = BASE_DIR / 'media'
```

> MEDIA_URL

- Default: ''(Empty string)

- MEDIA_ROOT에서 제공되는 미디어 파일을 처리하는 URL

- 업로드 된 파일의 주소(URL)를 만들어 주는 역할
  - 웹 서버 사용자가 사용하는 public URL

- 비어있지 않은 값으로 설정한다면 반드시 slash(/)로 끝나야 함

- MEDIA_URL은 STATIC_URL과 반드시 다른 경로로 지정해야 함

```python
# settings.py

MEDIA_URL = '/media/'
```

> 개발 단계에서 사용자가 업로드한 미디어 파일 제공하기

```python
# crud/urls.py

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('articles/', include('articles.urls')),
    path('accounts/', include('accounts.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
```

- 사용자로부터 업로드 된 파일이 프로젝트에 업로드 되고나서, 실제로 사용자에게 제공하기 위해서는 업로드 된 파일이 URL이 필요함
  - 업로드된 파일의 URL : settings.MEDIA_URL
  - 위 URL을 통해 참조하는 파일의 실제 위치 : settings.MEDIA_ROOT

---

## CREATE

> ImageField 작성

- 이미지는 반드시 있어야하는 필드는 아니므로, `blank=True` 옵션을 추가하여 빈 값(이미지를 첨부하지 않음)도 is_vaild()로 판별할 때 통과 가능하게 해줌

> blank

- Default : False

- True인 경우 필드를 비워 둘 수 있음
  - 이럴 경우 DB에는 ''(빈 문자열)이 저장됨

- 유효성 검사에서 사용 됨(is_valid())
  - "Validation-related"
  - 필드에 blank=True가 있으면 `form 유효성 검사에서 빈 값을 입력할 수 있음`

> null

- Default: False

- True인 경우 Django는 `빈 값`을 `DB에 NULL로 저장`
  - "Database-related"

> null 관련 주의 사항

- `"CharField, TextField와 같은 문자열 기반 필드에는 null 옵션 사용을 피해야 함"`
  - 문자열 기반 필드에 null=True로 설정 시 데이터 없음에 대한 표현이 "빈 문자열"과 "NULL" 2가지 모두 가능하게 됨

- "데이터 없음"에 대한 표현에 두 개의 가능한 값을 갖는 것은 좋지 않음(데이터의 일관성)

- Django는 문자열 기반 필드에서 NULL이 아닌 빈 문자열을 사용하는 것이 규칙!

- `이미지 속성은 문자열로 표기되므로`, 빈 값을 허용하고 싶으면 `blank속성`을 이용해야 함! 

> Pillow

- 광범위한 파일 형식 지원, 효율적이고 강력한 이미지 처리 기능을 제공하는 라이브러리

> ArticleForm에서 image 필드 출력

- 이미지 업로드가 되지 않네?

- 파일 또는 이미지 업로드 시에는 form 태그에 enctype 속성을 변경해야 함

```html
<!-- articles/create.html -->

{% extends 'base.html' %}

{% block content %}
  <h1>CREATE</h1>
  <form action="" method="POST" enctype="multipart/form-data">
    {% csrf_token %}
    {{ form.as_p }}
    <input type="submit">
  </form>
  ...
```

> 참고) form 태그의 enctype(인코딩) 속성 값

- application/x-www-form-urlencoded
  - 기본 값
  - 모든 문자 인코딩

- multipart/form-data
  - 파일/이미지 업로드 시 반드시 사용해야 함
  - 전송되는 데이터의 형식을 지정
  - \<input type="file">을 사용할 경우 사용

> request.FILES

- 파일 및 이미지는 request의 POST 속성 값으로 넘어가지 않고 FILES 속성 값에 담겨 넘어감

```python
# articles/views.py

@login_required
@require_http_methods(['GET', 'POST'])
def create(request):
    if request.method == 'POST':
        form = ArticleForm(request.POST, request.FILES) 
        if form.is_valid():
            article = form.save(commit=False)
...
```

> 이미지 첨부하기

- 이미지를 첨부하지 않으면 blank=True 속성으로 인해 빈 문자열이 저장되고, 이미지를 첨부한 경우는 MEDIA_ROOT 경로에 이미지가 업로드 됨

- 만약 같은 이름의 파일을 업로드 한다면 Django가 `파일 이름 끝에 임의의 난수 값을 붙여 저장`함

![image](https://user-images.githubusercontent.com/109258306/194981814-93ca352a-7e86-49f2-a655-88a266034fd1.png)

---

## READ

> 업로드 이미지 출력하기

- 업로드 된 파일의 상대 URL은 Django가 제공하는 url 속성을 통해 얻을 수 있음

- article.image.url : 업로드 파일의 경로

- article.image : 업로드 파일의 이름

```html
<!-- articles/detail.html -->
{% extends 'base.html' %}

{% block content %}
  <img src="{{ article.image.url }}" alt="{{ article.image }}">
  <h2>DETAIL</h2>
```

> 이미지를 업로드하지 않은 게시물은 detail 템플릿을 출력할 수 없는 문제 해결하기

- 이미지가 있는 경우만 출력하도록 if문 작성

```html
<!-- articles/detail.html -->
{% extends 'base.html' %}

{% block content %}
  {% if article.image %}
    <img src="{{ article.image.url }}" alt="{{ article.image }}">
  {% endif %}
  <h2>DETAIL</h2>
```

---

## UPDATE

> 개요

- 이미지는 바이너리 데이터이기 때문에 텍스트처럼 일부만 수정하는 것은 불가능

- 때문에 새로운 사진으로 대체하는 방식을 사용

> 1. 문자열 값이나 경로 지정으로 사용자 지정 업로드 경로와 파일 이름 설정하기

- upload_to 인자에 새로운 이미지 저장 경로를 추가 후 migration과정 진행

```python
# articles/models.py

class Article(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=10)
    content = models.TextField()
    # image = models.ImageField(blank=True)
    image = models.ImageField(blank=True, upload_to='images/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
```

- MEDIA_ROOT 이후의 경로가 추가되는 것을 확인

![image](https://user-images.githubusercontent.com/109258306/195086513-3885c05e-e77d-4ba3-994b-c6ac8de71b71.png)


> 2. 함수 호출로 사용자 지정 업로드 경로와 파일 이름 설정하기

- upload_to는 독특하게 함수처럼 호출이 가능하며 해당 함수가 호출되면서 반드시 2개의 인자를 받음

```python
# articles/models.py

def articles_image_path(instance, filename):
    return f'images/{instance.user.username}/{filename}'


# Create your models here.
class Article(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=10)
    content = models.TextField()
    # image = models.ImageField(blank=True)
    # image = models.ImageField(blank=True, upload_to='images/')
    # image = models.ImageField(blank=True, upload_to='%Y/%m/%d/')
    image = models.ImageField(blank=True, upload_to=articles_image_path)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
```

- 1. instance
  - FileField가 정의된 모델의 인스턴스
  - 대부분 이 객체는 아직 `데이터베이스에 저장되기 전이므로` `PK값이 없을 수 있으`니 주의

- 2. filename
  - 기존 파일의 이름

- username이 "test"인 회원이 업로드한 결과

![image](https://user-images.githubusercontent.com/109258306/195000824-4942b313-9509-43a2-a740-66e09c8d14ea.png)

---

## Image Resizing

> 개요

- 실제 원본 이미지를 서버에 그대로 로드 하는 것은 여러 이유로 부담이 큼

- HTML \<img> 태그에서 직접 사이즈를 조정할 수도 있지만, `업로드 될 때 이미지 자체를 resizing`하는 것을 사용해보자!

> django-imagekit 모듈 설치 및 등록

- 이미지 처리를 위한 Django 앱
  - 썸네일, 해상도, 사이즈, 색깔 등을 조정할 수 있음

```
$ pip install django-imagekit
```

```python
# settings.py

INSTALLED_APPS = [
    'articles',
    'accounts',
    'django_extensions',
    'imagekit',
    ...
]
```

> Thumbnail 만들기(원본 이미지를 저장하지 않는 방식)

```python
# articles/modes.py

from imagekit.processors import Thumbnail
from imagekit.models import ProcessedImageField


def articles_image_path(instance, filename):
    return f'images/{instance.user.username}/{filename}'


# Create your models here.
class Article(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=10)
    content = models.TextField()
    # image = models.ImageField(blank=True)
    # image = models.ImageField(blank=True, upload_to='images/')
    # image = models.ImageField(blank=True, upload_to='%Y/%m/%d/')
    # image = models.ImageField(blank=True, upload_to=articles_image_path)
    image = ProcessedImageField(
        blank=True,
        upload_to='thumbnails/',
        processors=[Thumbnail(200,300)],
        format='JPEG',
        options={'quality': 80},
    )
...
```

> Thumbnail 만들기(원본 이미지를 저장하는 방식)

- 이미지가 출력되는 다른 detail 페이지에 이동할 때마다 썸네일이 생성

- ProcessedImageField()의 parameter로 작성된 값들은 makemigrations 후에 변경이 되더라도 다시 해줄 필요없이 즉시 반영된다

```python
# articles/model.py

from imagekit.processors import Thumbnail
from imagekit.models import ProcessedImageField, ImageSpecField


class Article(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=10)
    content = models.TextField()
    # image = models.ImageField(blank=True)
    # image = models.ImageField(blank=True, upload_to='%Y/%m/%d/')
    # image = models.ImageField(blank=True, upload_to=articles_image_path)
    image_thumbnail = ImageSpecField(
        source='image',
        processors=[Thumbnail(200,300)],
        format='JPEG',
        options={'quality': 80},
    )
...
```

- migrate 진행 후 확인해보면 기본적으로 원본 이미지가 업로드 되고 출력됨

```html
<!-- articles/detail.html -->
{% extends 'base.html' %}

{% block content %}
  {% if article.image %}
    <img src="{{ article.image.url }}" alt="{{ article.image }}">
    <img src="{{ article.image_thumbnail.url }}" alt="{{ article.image_thumbnail }}">
  {% endif %}
```

- 썸네일이 사용되었을 때만 resizing한 이미지를 생성(왼쪽 - 원본gif / 오른쪽 - resizing한 이미지)

![image](https://user-images.githubusercontent.com/109258306/195088957-6a3e0f82-cee9-407d-aeac-4b27395f4f60.png)

- 이미지가 출력되는 다른 detail 페이지에 이동할 때마다 썸네일이 생성됨

![image](https://user-images.githubusercontent.com/109258306/195089611-dc35eb07-0757-4a02-8c5b-6d4077122af3.png)
