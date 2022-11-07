# 2022. 11. 07.

## VueX

> State ManageMent

- 상태(State)란?
  - 현재에 대한 정보(data)

- Web Application의 상태는? => 현재 App이 가지고 있는 Data로 표현할 수 있음!

- 우리는 여러 개의 component를 조합해서 하나의 App을 만들고 있음

- 각 component는 독립적이기 때문에 각각의 상태(data)를 가짐

- 따라서 `여러 개의 component가 같은 상태를 유지할 필요`가 있음

> Pass Props & Emit Event

- 지금까지 우리는 props와 event를 이용해서 상태 관리를 하고 있음

- 각 컴포넌트는 독립적으로 데이터를 관리

- 같은 데이터를 공유하고 있으므로, 각 컴포넌트가 동일한 상태를 유지하고 있음

- 데이터의 흐름을 직관적으로 파악 가능

- 그러나 component의 중첩이 깊어지면 데이터 전달이 쉽지 않음

- 공통의 상태를 유지해야하는 component가 많아지면 데이터 전달 구조가 복잡해짐

> Centralized Store

- `중앙 저장소(store)`에 데이터를 모아서 상태 관리

- 각 component는 중앙 저장소의 데이터를 사용

- component의 계층에 상관없이 중앙 저장소에 접근해서 데이터를 얻거나 변경할 수 있음

- 중앙 저장소의 데이터가 변경되면 각각의 component는 해당 데이터의 변화에 반응하여 새로 변경된 데이터를 반영함

- `규모가 크거나 컴포넌트 중첩이 깊은 프로젝트의 관리`가 매우 편리

> Vuex

- "상태관리 패턴 + 라이브러리"

- 중앙 저장소를 통해 상태 관리를 할 수 있도록 하는 라이브러리

- 데이터가 예측 가능한 방식으로만 변경 될 수 있도록하는 `규칙을 설정하며, Vue의 반응성을 효율적으로 사용`하는 상태 관리 기능을 제공

---

## VueX 시작하기

> 프로젝트 with vuex

```
$ vue create vuex=app   // Vue 프로젝트 생성

$ cv vuex-app           // 디렉토리 이름

$ vue add vuex          // Vue CLI를 통해 vuex plugin을 적용
```

- src / store / index.js가 생성됨

- vuex의 핵심 컨셉 4개지
  - state
  - getters
  - mutations
  - actions

> Vue와 Vuex 인스턴스 비교

![image](https://user-images.githubusercontent.com/109258306/200209599-4b25a951-58ef-4a43-a72f-6baf475a8424.png)

> 1. State

- vue 인스턴스의 data에 해당

- `중앙에서 관리하는 모든 상태 정보`

- 개별 component는 state에서 데이터를 가져와서 사용

- state의 데이터가 변화하면 해당 데이터를 사용하는  component를 자동으로 다시 렌더링

- `$store.state`로 state 데이터에 접근

> 2. Mutations

- `실제로 'state를 변경'하는 유일한 방법`

- vue 인스턴스의 methods에 해당하지만 Mutations에서 호출되는 핸들러 함수는 `반드시 동기적`이어야 함
  - 비동기 로직으로 mutations를 사용해서 state를 변경하는 경우, state의 변화의 시기를 특정할 수 없기 때문

- `첫 번째 인자로 state`를 받으며, component 혹은 Actions에서 `commit()메서드로 호출`됨

- mutation, action에서 호출되는 함수를 `handler 함수`라고 함

> 3. Actions

- mutations와 비슷하지만 `비동기 작업을 포함할 수 있음`

- state를 직접 변경하지 않고 commit()메서드로 mutations를 호출해서 state를 변경함

- context 객체를 인자로 받으며, 이 객체를 통해 store.js의 모든 요소와 메서드에 접근할 수 있음

- 즉, `state를 직접 변경할 수 있지만 그러면 안됨!!` (이미 역할을 나누어 놓았기 때문)

- component에서 `dispatch()`메서드에 의해 호출

> 4. Getters

- vue 인스턴스의 computed에 해당

- `state를 활용하여 계산된 값을 얻고자 할 때 사용`

- computed와 마찬가지로 getters의 결과는 cache 되며, 종속된 값이 변경된 경우에만 재계산됨

- getters에서 계산된 값은 state에 영향을 미치지 않음(state 변경의 역할은 mutation!)

- `첫번째 인자로 state`, `두번째 인자로 getter`를 받음

> 그렇다면 이제 모든 데이터를 Vuex로..?

- VueX에서도 여전히 pass props, emit event를 사용하여 상태를 관리할 수 있음

- 개발 환경에 따라 적절하게 사용하는 것이 필요함.

> 정리

- component에서 데이터를 조작하기 위한 데이터의 흐름
  - `component => (actions) => mutations => state`

- component에서 데이터를 사용하기 위한 데이터의 흐름
  - state => (getters) => component

---

## Vuex 실습

> Object method shorthand

- 이제부터는 객체 메서드 축약형을 사용할 것!
  - 콜론(":")과 function 키워드를 제거

```js
// before
const obj1 = {
  addValue: function (value) {
    return value
  },
}

// after
const obj2 = {
  addValue(value) {
    return value
  },
}
```

> state

```js
// store/index.js

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'message in store',
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
```

- 중앙에서 관리하는 모든 상태 정보

- $store.state로 접근 가능

- store의 state에 message 데이터 정의

---

![image](https://user-images.githubusercontent.com/109258306/200216359-59d2f3e2-53cc-4ce8-8e60-140a47586a4b.png)

- $store.state로 바로 접근하기 보다 computed에 정의 후 접근하는 것을 권장

---

![image](https://user-images.githubusercontent.com/109258306/200216634-0e9a7334-fba0-4fe8-a180-e14fbaedba20.png)

- Vue 개발자 도구의 Vuex 메뉴에서 관리되고 있는 state 확인 가능

---

> actions

- state를 변경할 수 있는 `mutations 호출`

- component에서 `dispatch()`에 의해 호출됨

- dispatch(A, B)
  - A : 호출하고자 하는 actions 함수
  - B : 넘겨주는 데이터(payload)

---

![image](https://user-images.githubusercontent.com/109258306/200217122-61b6a03a-20e2-494b-8adc-1d8c21c02c59.png)

- component에서 actions는 `dispatch()`에 의해 호출됨

---

```js
// store/index.js

export default new Vuex.Store({
  ...
  actions: {
    changeMessage(context, newMessage) {
      console.log(context)
      console.log(newMessage)
    }
  },
  ...
})
```

- actions의 첫 번째 인자는 `context`
  - context는 store의 전반적인 속성을 모두 가지고 있으므로 context.state와 context.getters를 통해 mutations를 호출하는 것이 모두 가능
  - dispatch()를 사용해 다른 actions도 호출할 수 있음
  - `단, actions에서 state를 직접 조작하는 것은 삼가야 함`

- actions의 두 번째 인자는 `payload`
  - 넘겨준 데이터를 받아서 사용

---

> mutations

```js
// store/index.js

export default new Vuex.Store({
  ...
  actions: {
    changeMessage(context, newMessage) {
      context.commit('CHANGE_MESSAGE', newMessage)
    }
  },
  ...
})
```

- actions에서 commit()을 통해 mutations 호출하기
  - mutations는 state를 변경하는 유일한 방법!
  - component 또는 actions에서 `commit()`에 의해 호출됨

- `commit(A, B)`
  - A : 호출하고자 하는 mutations 함수
  - B : payload

---

```js
// store/index.js

export default new Vuex.Store({
  ...
  mutations: {
    CHANGE_MESSAGE(state, newMessage) {
      // console.log(state)
      // console.log(newMessage)
      state.message = newMessage
    }
  },
  ...
})
```

- mutation함수의 `첫 번째 인자`는 `state`, `두 번째 인자`는 `payload`

---

> getters

```js
// store/index.js

export default new Vuex.Store({
  ...
  getters: {
    messageLength(state) {
      return state.message.length
    },
  },
  ...
})
```

- `getters는 state를 활용한 새로운 변수`

- getters 함수의 첫 번째 인자는 state, 두 번쨰 인자는 getters

---

```html
<!-- App.vue -->

<script>
  export default new Vuex.Store({
    ...
    computed: {
      message() {
        return this.$store.state.message;
      },
      messageLength() {
        return this.$store.getters.messageLength;
      },
    },
    ...
  })
</script>
```

- getters 역시 state와 마찬가지로 computer에 정의해서 사용하는 것을 권장

---

```html
<!-- App.vue -->

<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <h2>입력된 문자의 길이는 {{ messageLength }}</h2>
    <input type="text" @keyup.enter="changeMessage" v-model="inputData" />
  </div>
</template>
```

![image](https://user-images.githubusercontent.com/109258306/200218675-1e02f176-16e2-412e-ab28-f3fb3b488dd3.png)

---

## Lifecycle Hooks

> Lifecycle Hooks

- 각 Vue 인스턴스는 생성과 소멸의 과정 중 단계별 초기화 과정을 거침
  - Vue 인스턴스가 `생성`된 경우, 인스턴스를 `DOM에 마운트` 하는 경우, `데이터가 변경되어 DOM을 업데이트`하는 경우 등

- 각 단계가 트리거가 되어 특정 로직을 실행할 수 있음

> created

- Vue instance가 `생성된 후 호출`됨

- data, computed 등의 설정이 완료된 상태

- 서버에서 받은 데이터를 vue instance의 data에 할당하는 로직을 구현하기 적합

- 단, mount되지 않아(DOM과 연결되기 전임) 요소에 접근할 수 없음

- 버튼을 누르지 않아도 첫 실행 시 기본 사진이 출력되도록 하고 싶다면? => created 함수에 강아지 사진을 가져오는 함수를 추가하면 됨!

```js
// components/DogComponent.vue

export default {
  ...
  created() {
    this.getDogImage();
    const button = document.querySelector("button");
    button.innerText = "멍멍";
  },
  ...
}
```

> mounted

- Vue instance가 요소에 mount된 후 호출됨

- mount된 요소를 조작할 수 있음

> Lifecycle Hooks의 특징

- instance마다 각각의 Lifecycle을 가지고 있음

- 부모 컴포넌트의 mounted hook이 실행 되었다고 해서 자식 mount 된 것이 아니고, updated hook도 마찬가지.

- `instance마다 각각의 Lifecycle`을 가지고 있기 때문

---

## Todo with Vuex

---

## Local Storage

> Window.`localStorage`

- 브라우저에서 제공하는 저장공간 중 하나인 Local Storage에 관련된 속성

- 만료되지 않고 브라우저를 종료하고 다시 실행해도 데이터가 보존됨

- 데이터가 문자열 형태로 저장됨

- 관련 메서드
  - `setItem(key, value)` - key, value 형태로 데이터 저장
  - `getItem(key)` - key에 해당하는 데이터 조회

