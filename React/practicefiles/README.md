# 브라우저 환경에서 React 시작하기

빌드 시스템 설치 없이, 웹 브라우저 환경에서 React를 바로 시작합니다.

- React & ReactDOM API
- JSX & Babel Standalone
- TSX & TypeScript Browser

## Getting Started

[degit](https://github.com/Rich-Harris/degit) 명령을 사용해 저장소를 로컬 컴퓨터로 복사합니다.

```sh
# degit을 전역 설치한 적이 없을 경우 실행합니다.
npm i -g degit

# degit 명령을 사용해 로컬 컴퓨터 환경에 복사합니다.
degit yamoo9/react-browser-starter <로컬_디렉토리_이름>
```

## React API

React API만을 사용해 애플리케이션을 구동합니다.

```html
<script src="https://unpkg.com/react/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom/umd/react-dom.development.js" crossorigin></script>
```

🔗 레퍼런스

- [React CDN](https://unpkg.com/browse/react/)
- [ReactDOM CDN](https://unpkg.com/browse/react-dom/)

## React + Babel Standalone

React + JSX를 활용할 수 있도록, Babel을 사용해 애플리케이션을 구동합니다.

```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js" crossorigin></script>
<script src="./main.js" type="text/jsx" data-type="module"></script>
```

🔗 레퍼런스

- [Babel Standalone](https://babeljs.io/docs/en/babel-standalone)
- [Script Tags](https://babeljs.io/docs/en/babel-standalone#script-tags)

## React + TypeScript Browser

빌드 시스템 설치 없이, 웹 브라우저 환경에서 TypeScript를 사용해 React 애플리케이션을 구동합니다.

```html
<script src="https://unpkg.com/react/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom/umd/react-dom.development.js" crossorigin></script>
<script src="https://klesun-misc.github.io/TypeScript/lib/typescriptServices.js" crossorigin></script>
<script type="module">
  import { loadModule } from 'https://klesun.github.io/ts-browser/src/ts-browser.js';
  loadModule('./main.tsx', { jsx: ts.JsxEmit.React });
</script>
```

<details>
  <summary>libs/react.js</summary>

  ```js
  import 'https://unpkg.com/react/umd/react.development.js';
  export default globalThis.React;
  ```
</details>

<details>
  <summary>libs/react-dom.js</summary>

  ```js
  import 'https://unpkg.com/react/umd/react.development.js';
  import 'https://unpkg.com/react-dom/umd/react-dom.development.js';
  export default globalThis.ReactDOM;
  ```
</details>

<details>
  <summary>main.tsx</summary>

  ```tsx
  import React from './libs/react.js';
  import ReactDOM from './libs/react-dom.js';
  ```
</details>

<br/>

🔗 레퍼런스

- [ts-browser](https://github.com/klesun/ts-browser)
- [ts-browser + React](https://github.com/klesun-misc/ts-browser-react-example/blob/master/index.html#L4-L11)


# 컴파일러 구성

로컬 컴퓨터 환경에 컴파일 환경을 구성합니다.

- **Babel** JavaScript Compiler
- **TypeScript** Programming Language

## React + Babel CLI (Compile)

Babel 컴파일러를 사용해 React 애플리케이션을 구동합니다.

🔗 레퍼런스

- [Babel CLI](https://babeljs.io/setup#installation)
- [Babel Configuration File](https://babeljs.io/docs/en/config-files)
- [Babel Config Options](https://babeljs.io/docs/en/options)
- [Babel Preset Env](https://babeljs.io/docs/en/babel-preset-env)
- [Babel Preset React](https://babeljs.io/docs/en/babel-preset-react)

## React + TypeScript CLI (Compile)

TypeScript 컴파일러를 사용해 React 애플리케이션을 구동합니다.

🔗 레퍼런스

- [Babel Preset TypeScript](https://babeljs.io/docs/en/babel-preset-typescript)
- [Integrating with Build Tools](https://www.typescriptlang.org/ko/docs/handbook/integrating-with-build-tools.html#babel)
- [TypeScript Download](https://www.typescriptlang.org/download)
- [What is a tsconfig.json](https://www.typescriptlang.org/ko/docs/handbook/tsconfig-json.html)
- [TypeScript Configuration](https://www.typescriptlang.org/ko/tsconfig)
- [TypeScript CLI](https://www.typescriptlang.org/ko/docs/handbook/compiler-options.html)