# 2022. 10. 27.

# 동기와 비동기 복습

> JavaScript의 비동기 처리 방식

- 비동기 처리의 2가지 방식

  - 동시성 : 혼자서 여러가지일을 빠르게 진행하여 작업을 동시에 처리하는 것처럼 보임 => 자바스크립트의 방식

  - 벙렬성 : 실제로 여러개의 작업 주체가 작업을 동시에 진행

- 함수가 실행되면 `해당 함수 실행 컨텍스트`가 call stack에 쌓인다.

> Promise 객체가 등장한 배경

- JavaScript의 비동기 방식은 `순서가 보장되지 않는다.`

- 요청을 call back 함수로 보내고, 응답을 받았다면 데이터를 출력하려고 했지만 `응답이 오기도 전에 출력 함수가 실행`되어버려 `undifined가 출력`되는 문제가 발생

- 응답을 받은 후에 출력, 즉 작업의 순서를 보장하기 위해 call back 함수를 중첩시키는 방법을 사용 => call back 지옥이 발생

- call back 지옥을 해결하기 위해 Promise 객체가 등장

> Axios

- XMLhttpRequest 방식을 지원하는 axios로 요청/응답을 쉽게 사용가능

- axios를 이용해서 간단하게 `promise 기반`의 비동기 `요청/응답` 가능

- axios의 내부 로직은 동기 방식
  - axios가 여러개일 때 모든 axios에 대한 요청이 비동기 방식으로 동작 => 먼저 응답하는 axios가 화면에 출력된다

---

## AJAX(Asynchronous Javascript And XML)

> AJAX란?

- 비동기 통신을 통해 페이지를 업데이트 위한 방법론

- 비동기 통신을 이용하면 화면 전체를 새로고침하지 않아도 서버로요청을 보내고, 데이터를 받아 화면의 일부만 업데이트 가능

- 이러한 '비동기 통신 웹 개발 기술'을 AJAX라고 함

- AJAX의 특징
  - `페이지 새로고침 없이` 서버에 요청
  - 서버로부터 응답(데이터)을 받아 작업을 수행

- 이러한 비동기 웹 통신을 위한 라이브버리 중 하나가 Axios
  
## 비동기(Async)로 팔로우 기능 구현해보기

> url에 작성할 user pk는 어떻게 바꿔줘야 할까?

- script 코드를 작성하기 위한 block tag 영역과 axios CND 작성

```html
<!-- base.html -->

<body>
  ...
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  {% block script %}
  {% endblock script %}
</body>
```

- form 요소 선택을 위해 id 속성 지정 및 선택

- 불필요해진 action과 method 속성은 삭제 (요청은 axios에서 보내줄 것이기 때문)

```html
<!-- accounts/profile.html -->

<form id="follow-form">
  ...
</form>
```

```html
<!-- accounts/profile.html -->

<script>
  const form = document.querySelector('#follow-form')
</script>
```

- form 요소에 이벤트 핸들러 작성 및 submit 이벤트 취소

- axios 요청 준비

```html
<!-- accounts/profile.html -->

<script>
  const form = document.querySelector('#follow-form')

  // 이벤트 핸들러
  form.addEventListener('submit', function (event) {

    // submit 이벤트 취소
    event.preventDefault()

    // axios 요청
    axios({
        method: 'post',
        url: `/accounts/${??}/follow/`,
      })
  })
</script>
```

- user pk를 html에서 JavaScript로 가져오는 방법

```html
<!-- accounts/profile.html -->

{% if request.user != person %}
  <div>
    
    <!-- "data-"속성을 form태그에 작성! -->
    <form id="follow-form" data-user-id="{{ person.pk }}">
      ...
    </form>
  ...
  </div>
```

```html
<!-- accounts/profile.html -->

<script>
  const form = document.querySelector('#follow-form')
  
  form.addEventListener('submit', function (event) {
    event.preventDefault()
    
    // form 태그의 속성에서는 "data-user-id"로 쓴거를 "userId"로 바꾸어 사용한다
    // "-"로 이어진 부분을 떼고 시작으로 대문자로 바꿔주면 됨!
    const userId = event.target.dataset.userId
  })
  ...
</script>
```

> 참고) data-* attributes

- 사용자 지정 데이터 특성을 만들어 임의의 데이터를 HTML과 DOM사이에서 교환할 수 있는 방법

- 예시

```html
<div data-my-id="my-data"><div>
<script>
  const myId = event.target.dataset.userId
</script>
```

- 속성명 작성 시 주의사항
  - 대소문자 여부 상관없이 xml로 시작 불가능
  - 세미콜론을 포함해서는 안됨
  - 대문자를 포함해서는 안됨

- 모든 사용자 지정 데이터는 dataset 속성을 통해 사용할 수 있음 [https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/data-*]

> html에서 가져온 user pk를 axios 요청에 담기

- url 작성 마침

![image](https://user-images.githubusercontent.com/109258306/198200412-3d0b5efc-af4c-488f-97fc-d2682efd9101.png)

> csrftoken을 보내는 방법

- 개발자 도구로 csrf값을 가진 태그를 찾아보면 hidden 타입으로 숨겨져 있음

![image](https://user-images.githubusercontent.com/109258306/198201017-086d4619-0160-497d-9337-c46927d588f6.png)

- 숨겨진 input 태그를 선택

![image](https://user-images.githubusercontent.com/109258306/198201184-c7db6554-2d1b-4dab-af49-45290fd9c0c3.png)

- AJAX로 csrftoken을 보내는 방법

![image](https://user-images.githubusercontent.com/109258306/198201271-30da07ce-5df7-4574-a6df-78cd1cb5160c.png)

> view 함수를 통해 팔로우 여부를 파악하고, JSON 타입으로 응답하기

- 팔로우 여부를 확인하기 위한 is_followed 변수 작성 및 JSON 응답

```python
# accounts/views.py

# 응답을 Json 타입으로 반환하기 위해 필요한 함수 import
from django.http import JsonResponse

@require_POST
def follow(request, user_pk):
    if request.user.is_authenticated:
        User = get_user_model()
        me = request.user
        you = User.objects.get(pk=user_pk)
        if me != you:
            # ------------------------------------------- #
            if you.followers.filter(pk=me.pk).exists():
                you.followers.remove(me)
                is_followed = False
            else:
                you.followers.add(me)
                is_followed = True
            context = {
                'is_followed': is_followed,
                'followers_count': you.followers.count(),
                'followings_count': you.followings.count(),
            }
            return JsonResponse(context)
            # -------------------------------------------- #
        return redirect('accounts:profile', you.username)
    return redirect('accounts:login')
```

- view 함수에서 응답한 is_followed를 html에서 넘겨받아 사용

```html
<!-- accounts/profile.html -->

<script>
  ...
    axios({
      method: 'post',
      url: `/accounts/${userId}/follow/`,
      headers: {'X-CSRFToken': csrftoken},
    })
      .then((response) => {
        const isFollowed = response.data.is_followed
        const followButton = document.querySelector('#follow-form > input[type=submit]')
        if (isFollowed) {
          followButton.value = '언팔로우'
        } else {
          followButton.value = '팔로우'
        }
      })
    })
  </script>
```

> 팔로워 & 팔로잉 수 비동기 적용

- 해당 요소를 선택할 수 있도록 span 태그와 id 속성을 작성

```html
<!-- accounts/profile.html -->

{% extends 'base.html' %}

{% block content %}
  <h1>{{ person.username }}님의 프로필</h1>
  <div>
    팔로워 : <span id="followers-count">{{ person.followers.all|length }}</span> /
    팔로잉 : <span id="followings-count">{{ person.followings.all|length }}</span>
  </div>
  ...
```

- 직전에 작성한 span 태그를 script에서 선택

```html

<!-- accounts/profile.html -->
<script>
  ...
    axios({
      method: 'post',
      url: `/accounts/${userId}/follow/`,
      headers: {'X-CSRFToken': csrftoken},
    })
      .then((response) => {
        ...
        const followerCountTag = document.querySelector('#followers-count')
        const followingCountTag = document.querySelector('#followings-count')

      })
</script>
```

- 팔로워, 팔로잉 수 연산은 view 함수에서 진행하여 결과를 응답으로 전달

```python
from django.http import JsonResponse

@require_POST
def follow(request, user_pk):
    ...
            context = {
                'is_followed': is_followed,
                'followers_count': you.followers.count(),
                'followings_count': you.followings.count(),
            }
            return JsonResponse(context)
        return redirect('accounts:profile', you.username)
    return redirect('accounts:login')
```

- view 함수에서 응답한 연산 결과를 사용해 각 태그의 인원 수 값 변경하기

![image](https://user-images.githubusercontent.com/109258306/198202921-1ce2773d-7635-4709-84c6-6f00846ff8ad.png)

