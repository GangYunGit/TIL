# 리액트의 이벤트 시스템

## React event handling

- 리액트의 이벤트 시스템은 웹 브라우저의 HTML 이벤트 인터페이스와 유사함

```js
// Say.js

import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  )
}

export default Say
```

## ⛔이벤트 사용시 주의 사항

- 이벤트 이름은 카멜 표기법으로!
  - 예를 들어 HTML 의 `onclick, onkeyup`은 리액트에서 `onClick, onKeyUp`으로

- 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달
  - 위의 예제에서도 onClickEnter, onClickLeave이라는 함수를 만들어 전달하였음

- DOM 요소에만 이벤트 설정이 가능
  - div, button, input, form, span등의 DOM요소에만!

## onChange 이벤트 핸들링해보기

```js
import React, { Component } from "react";

class EvenPractice extends Component {
  render() {
    return (
      <div>
        <h1>이벤트 핸들링</h1>
        <input
          type="text"
          name="message"
          onChange={
            (e) => {
              console.log(e.target.value)
            }
          }
        />
      </div>
    )
  }
}

export default EvenPractice
```

![image](https://user-images.githubusercontent.com/109258306/211807746-5a92298c-b028-4680-96e2-69af752bc794.png)
