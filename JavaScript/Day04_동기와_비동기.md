# 2022. 10. 26.

# 비동기(Asynchronous)

## 동기와 비동기

> 동기(Synchronous)

- 모든 일을 `순서대로 하나씩` 처리하는 것

- `순서대로 == 이전 작업이 끝나면 다음작업을 시작`한다

- 우리가 작성했던 Python 코드가 모두 동기식

```python
print('첫번째 작업')
for i in range(10):
  print('두번째 작업')
  print(i)
print('세번째 작업')
```
- 요청과 응답을 동기식으로 처리한다면?
  - 요청을 보내고 응답이 올 때까지 기다려야 다음 로직을 처리할 수 있음

> 비동기(Asynchronous)

- 작업을 시작한 후 결과를 기다리지 않고 다음 작업을 처리하는 것 (병렬적 수행)

- 시간이 필요한 작업들은 요청을 보낸 뒤 응답이 빨리 오는 작업부터 처리

- 예시) Gmail에서 메일 전송을 누르면 목록 화면으로 전환되지만 실제로 메일을 보내는 작업은 병렬적으로 뒤에서 처리됨

- 예시코드

```js
function slowRequest(callBack) {
  console.log('1. 오래 걸리는 작업 시작 ...')
  setTimeout(function () {  
    callBack()
  }, 3000)
}

function myCallBack() {
  console.log('2. 콜백함수 실행됨')
}

slowRequest(myCallBack)
console.log('3. 다른 작업 실행')
```

> 비동기(Asynchronous)를 사용하는 이유

- `사용자 경험`
  - 아주 큰 데이터를 불러온 뒤 실행되는 앱이 있을 때, 동기로 처리한다면 데이터를 모두 불러온 위에야 앱의 실행 로직이 수행되므로 사용자들은 마치 앱이 멈춘 것과 같은 경험을 겪게 됨
  - `비동기로 처리한다면 먼저 처리되는 부분부터 보여줄 수 있으므`로, 사용자 경험에 긍정적인 효과를 볼 수 있음. 이와 같은 이유로 많은 웹 기능은 비동기 로직을 사용해서 구현되어 있음

---

## JavaScript의 비동기 처리

> Single Thread언어, JavaScript

- JavaScript는 `한 번에 하나의 일만 수행`할 수 있는 `Single Thread 언어`로 동시에 여러 작업을 처리할 수 없음

- 참고) Thread? : 작업을 처리할 때 실제로 작업을 수행하는 주체로, multi-thread라면 업무를 수행할 수 있는 주체가 여러개라는 의미

- 즉, JavaScript는 하나의 작업을 요청한 순서대로 처리할 수 밖에 없다. 그러면 어떻게 Single Thread로 비동기 처리를 할까?

> JavaScript Runtime

- JavaScript 자체는 Single Thread이므로 비동기 처리를 할 수 있도록 도와주는 환경이 필요함

- `특정 언어가 동작할 수 있는 환경`을 `런타임"Runtime"`이라 함

- JavaScript에서 `비동기와 관련한 작업은 브라우저 또는 Node 환경에서 처리`

- 이중에서 브라우저 환경의 비동기 동작은 크게 4가지 요소들로 구성됨
  - JavaScript Engine의 `Call Stack`
  - `Web API`
  - `Task Queue`
  - `Event Loop`

> 비동기 처리 동작 방식

1. 모든 작업은 `Call Stack(LIFO)으로 들어간 후 처리`된다.

2. 오래 걸리는 작업이 Call Stack으로 들어오면 Web API로 보내 별도로 처리하도록 한다.

3. Web API에서 처리가 끝난 작업들은 곧바로 Call Stack으로 들어가지 못하고 Task Queue(FIFO)에 순서대로 들어간다.

4. Event Loop가 Call Stack이 비어있는 것을 계속 체크하고 Call Stack이 빈다면 Task Queue에서 가장 오래된 (가장 앞에 있는) 작업을 Call Stack으로 보낸다.

> 정리

- JavaScript는 한 번에 하나의 작업을 수행하는 Single Thread 언어로 동기적 처리를 하지만, 브라우저 환경에서는 Web API에서 처리된 작업이 지속적으로 Task Queue를 거쳐 Event Loop에 의해 Call Stack에 들어와 순차적으로 실행됨으로써 비동기 작업이 가능한 환경이 됨

---

## Axios

> Axios

- JavaScript의 HTTP 웹 통신을 위한 라이브러리

- node 환경은 npm을 이용하여 설치 후 사용, `browser 환경은 CDN`을 이용하여 사용

> Axios 사용해보기

```js
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script>
axios.get('요청할 URL')
  .then(성공하면 수행할 함수)
  .catch(실패하면 수행할 함수)
</script>
```

- get, post 등 여러 method 사용가능

- `then`을 이용해서 `성공하면 수행할 로직`을 작성

- `catch`를 이용해서 `실패하면 수행할 로직`을 작성

> 고양이 사진 가져오기

- Axios로 요청해 보기 (비동기)

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script>
  console.log('고양이는 야옹')
  const catImageSearchURL = 'https://api.thecatapi.com/v1/images/search'

  // 매우 중요한 코드!!!
  axios.get(catImageSearchURL)
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log('실패했다옹')
    })
  console.log('야옹야옹')
</script>
```

> 실행 결과

- 버튼을 누르면 console.log가 먼저 출력되고 이미지 요청을 보낸다.

- 버튼을 여러 번 누르면 먼저 로딩되는 이미지부터 나온다.

- 이후 같은 방식으로 `Django REST API`로 요청을 보내서 데이터를 받아온 후 처리할 수 있음!

---

## Callback과 Promise

> 비동기 처리의 단점

- 비동기 처리의 핵심은 Web API로 들어오는 순서가 아니라 `작업이 완료되는 순서에 따라 처리`한다는 것

- 그런데 이는 개발자 입장에서 코드의 실행 순서가 불명확하다는 단점이 있음. `실행 결과를 예상하면서 코드 작성이 불가능함`

- `콜백 함수`를 사용하여 해결 가능

> 콜백 함수란?

- `다른 함수의 인자로 전달되는 함수`

- 동기, 비동기 상관없이 사용 가능

- 시간이 걸리는 `비동기 작업이 완료된 후 실행할 작업을 명시하는데 사용`되는 콜백함수를 `비동기 콜백(asynchronous callback)`이라 부름

> 콜백 함수 예시

``` js
const btn = document.querySelector('button')
btn.addEventListener('click', () => {
  alert('Completed')
})
```

``` python
from django.urls import path
from . import views

urlpatterns = [
  path('index/', views.index),
]
```

> 콜백 함수를 사용하는 이유

- 명시적 호출이 아닌 특정한 조건 혹은 행동에 의해 호출되도록 작성할 수 있음

- "요청이 들어오면", "이벤트가 발생하면" 등의 조건으로 이후 로직을 제어할 수 있음

- `비동기 처리를 순차적으로 동작`할 수 있게 함

> 콜백 지옥(Callback Hell)

- 보통 어떤 기능의 실행 결과를 받아서 다른 기능을 수행하기 위해 많이 사용하는데, 이 과정을 작성하다 보면 비슷한 패턴이 계속 발생하게 됨 
  - A를 처리해서 결과가 나오면 첫 번째 콜백 함수 실행 => 첫 번째 콜백함수가 종료되면 두 번째 콜백함수 실행 => 두 번째 콜백함수가 종료되면 세 번째 콜백함수 실행 ...

- 비동기 코드를 작성하다보면 콜백 지옥(callback hell)은 반드시 나타나는 문제. `코드의 가동성을 해치고` `유지보수가 어려워짐`

---

## Promoise

> 프로미스

- Callback Hell 문제를 해결하기 위해 등장한 비동기 처리를 위한 객체

- "작업이 끝나면 실행시켜줄게"라는 약속

- `비동기 작업의 완료 또는 실패를 나타내는 객체`

- Promise 기반의 클라이언트가 바로 이전에 사용한 `Axios` 라이브러리
  - `성공`에 대한 약속 `then()`
  - `실패`에 대한 약속 `catch()`

> then & catch

- then(callback)
  - 요청한 작업이 성공하면 callback 실행
  - callback은 이전 작업의 성공 결과를 인자로 전달 받음

- catch(callback)
  - then()이 하나라도 실패하면 callback 실행
  - callback은 이전 작업의 실패 객체를 인자로 전달 받음

- then과 catch 보두 항상 promise 객체를 반환. 즉, 계속해서 chaining을 할 수 있음
  - 단, then을 chaining할 때에는 `then의 끝에 항상 return`이 있어야함!

- `axios로 처리한 비동기 로직이 항상 promise 객체를 반환` 그래서 then을 계속 이어나가면서 작성이 가능함

```js
axios.get('요청할 URL') // Promise 객체를 return
  .then(성공하면 수행할 1번 콜백함수)
  .then(1번 콜백함수가 성공하면 수행할 2번 콜백함수)  // 1번 콜백함수의 리턴값을 2번 콜백함수가 받음
  .then(2번 콜백함수가 성공하면 수행할 3번 콜백함수)  // 2번 콜백함수의 리턴값을 3번 콜백함수가 받음
  ...
  .catch(실패하면 수행할 콜백함수)  // 상위 콜백함수 중 어떤 것에서 실패하더라도 catch로 빠지게 됨
```

> 비동기 콜백 vs Promise

```js
// 기존의 콜백 함수 작성 방식

work1(function () {
  // 첫번째 작업
  work2(result1, function (result2) {
    // 두번쨰 작업
    work3(result2, function (result3) {
      console.log('최종 결과 :' + result3)
    })
  })
})
```

```js
// promise 방식

work1()
  .then((result1) => {
    // work2
    return result2
  })
  .then((result2) => {
    // work3
    return result3
  })
  .catch((error) => {
    // error handling
  })
```



