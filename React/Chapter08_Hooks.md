# Hooks

## Hooks란?

- 리액트 v16.8에 새로 도입된 기능으로 함수 컴포넌트에서도 상태를 관리할 수 있는 useState와 같은 기능을 제공하여 기존의 함수 컴포넌트에서 할 수 없었던 다양한 작업을 할 수 있게 해준다.

## useState

- useState는 가장 기본적인 Hook이며, 함수 컴포넌트에서도 `가변적인 상태`를 지닐 수 있게 해줌

- useState 함수의 파라미터에는 상태의 기본값을 넣어준다.

```js
// Counter.js

import { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>
        현재 카운터의 값은 <b>{value}</b>입니다.
      </p>
      <button onClick={() => setValue(value + 1)}>+ 1</button>
      <button onClick={() => setValue(value - 1)}>- 1</button>
    </div>
  )
}

export default Counter
```

```js
// App.js

import Counter from "./Counter";

const App = () => {
  return <Counter />
}

export default App
```

## useEffect

- `React 컴포넌트가 렌더링될 때마다 특정 작업을 수행`하도록 설정할 수 있는 Hook.

> useEffect 사용해보기

```js
// Info.js

import { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  useEffect(() => {
    console.log('렌더링 완료');
    console.log({
      name,
      nickname
    });
  });

  const onChangeName = e => {
    setName(e.target.value);
  }

  const onChangeNickname = e => {
    setNickname(e.target.value);
  }

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름: </b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>
  )
};

export default Info
```

```js
// App.js

import Info from "./Info"

const App = () => {
  return <Info />
}

export default App
```

![image](https://user-images.githubusercontent.com/109258306/212544724-dbbe98c1-7710-40b1-b931-771afb92344d.png)

> 마운트 될 때에만 실행하고 싶을 때

- useEffect함수의 두 번째 파라미터로 빈 배열 `[]`을 넣어주면 된다.

```js
// Info.js

useEffect(() => {
  console.log('마운트될 때만 실행');
}, [])
```

> 특정 값이 업데이트될 때만 실행하고 싶을 때

- useEffect함수의 두 번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣으면 된다.

- 배열 안에는 useState를 통해 관리하고 있는 상태를 넣어도 되고, props로 전달받은 값을 넣어도 된다.

```js
// Info.js

useEffect(() => {
  console.log(name);
}, [name])
```

> 뒷정리(cleanup)

- 컴포넌트가 언마운트 되기 전이나 업데이트되기 직전에 수행할 작업이 있다면 useEffect에서 `뒷정리(cleanup) 함수를 반환`해주어야 한다.

```js
// Info.js
useEffect(() => {
  console.log('effect');
  console.log(name);
  return () => {
    console.log('cleanup');
    console.log(name);
  }
}, [name]);
```

![image](https://user-images.githubusercontent.com/109258306/212545417-7a4bd75c-95a0-438c-bf57-d7d3e6da3ec3.png)

## useContext

- 기존의 React에 존재하는 Context를 더 편하게 사용가능!

> Context 란?
 
- `데이터 공유가 필요할 때 props를 쓸 필요 없이` context를 이용한다.

- 일반적인 React 어플리케이션에서 데이터는 props를 통해 부모 -> 자식에게 전달

- 어플리케이션 안의 여러 컴포넌트들에게 props를 전달해줘야 하는 경우 context를 이용하면 명시적으로 props를 넘겨주지 않아도 값을 공유할 수 있게 해줌

> context API를 사용하기 위해 알아야 할 3가지 개념
  
- createContext : context 객체를 생성

- Provider : 생성한 context를 하위 컴포넌트에게 전달

- Consumer : context의 변화를 감시하는 컴포넌트

> useContext 예시

```js
// ContextSample.js

import { AppContext } from "./App";

const ContextSample = () => {
  return (
    <AppContext.Consumer>
      {(user) => (
        <>
          <h3>Appcontext에 존재하는 name : {user.name}</h3>
          <h3>Appcontext에 존재하는 job : {user.job}</h3>
        </>
      )}
    </AppContext.Consumer>
  )
};

export default ContextSample;
```

```js
// App.js

import React, { createContext } from "react";
import ContextSample from "./ContextSample";

export const AppContext = createContext();

const App = () => {
  const user = {
    name: "이강윤",
    job: "개발자"
  };

  return (
    <>
      <AppContext.Provider value={user}>
        <div>
          <ContextSample />
        </div>
      </AppContext.Provider>
    </>
  )
}

export default App;
```

## useReducer

- useState를 대체할 수 있는 함수

- 조금 더 복잡한 상태관리가 필요한 경우 reducer를 사용

- `이전 상태와 Action을 합쳐 새로운 state`를 생성

> reducer 함수

```js
function reducer(state, action) {
  return { ... };
}
```

- 리듀서는 현재 상태(state)와 업데이트를 위해 필요한 정보를 담은 액션(action) 값을 전달받아 새로운 상태를 반환

- 리듀서 함수에서 새로운 상태를 만들 때는 꼭 `불변성`을 지켜주어야 함

> dispatch 함수

- reducer 함수를 실행시킴

- action 객체를 인자로 받으며, action 객체는 어떤 행동인지를 나타내는 `type속성`과 해당 `행동과 관련된 데이터(payload)`를 담고 있다.

> useReducer로 Counter 만들기

```js
// CounterReducer.js

import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      throw new Error("unsupported action type: ", action.type)
  }
}

const CounterReducer = () => {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>증가</button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>감소</button>
      <button onClick={() => dispatch({ type: "asdasdasd", payload: 1 })}>에러</button>
    </>
  )
}

export default CounterReducer
```

- useReducer의 `첫 번째 파라미터에는 reducer 함수`, `두 번째 파라미터는 해당 리듀서의 기본값`을 넣어준다.

## useMemo

- 함수형 컴포넌트 내부에서 발생하는 연산을 최적화

- 함수형 컴포넌트에 Memoization을 적용하여 렌더링이 발생했을 때, `이전 렌더링과 현재 렌더링을 비교하여 동일한 값이면 저장해두었던 값을 재사용`하여 렌더링 속도를 향상

> useMemo 사용해보기

```js
// Average.js

import { useMemo, useState } from "react";

const getAverage = numbers => {
  console.log('평균 계산 중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
}

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = e => {
    setNumber(e.target.value);
  };
  const onInsert = () => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  }

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  )
}

export default Average;
```