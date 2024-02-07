# HTML/CSS

## px, em, rem단위

- px(픽셀) : `해상도의 한 화소`로, 화면에 표시되는 가장 작은 단위. 고정된 단위로 크기가 변하지 않음

- em : 상대적인 단위로, `부모요소`의 사이즈에 의해 자식요소의 사이즈가 결정됨.

> 보통 p태그가 `1em = 16px`의 사이즈를 갖는데, 그렇다고 1em이 16px인 것이 아니라 `p태그의 부모 요소인 body가 기본적으로 16px의 사이즈를 갖기 때문`에 그렇다.

- rem : 상대적인 단위, 최상위 요소인 `Root(html)`의 사이즈를 기준으로 사이즈가 결정

## viewport 단위

- viewport란
  - 현재 실행중인 화면의 크기에 맞추어 상대적인 크기를 반환하는 단위. 반응형 웹 구성에 사용됨

> - vh = viewport height, 화면의 높이 기준
> - vw = viewport width, 화면의 폭 기준

- vmin, vmax

  - viewport의 길이 중 더 긴것을 기준으로 삼으면 vmax, 더 짧은 길이를 기준으로 삼으면 vmin

- %와 viewport단위의 차이
  - %는 부모 요소의 크기가 기준이고, viewport는 화면의 크기가 기준
  - ex) 스크롤바가 있는 화면에서 viewport는 스크롤바를 포함한 길이를 기준으로 계산됨.

## CSS 적용 우선순위

- CSS란

  - CSS에서 `Cascading`은 '위에서 아래로 흐르는', '상속 또는 종속하는'이라는 의미를 갖고 있다.
  - CSS는 선택자에 적용된 여러 스타일 중 어떤 `우선순위`에 따라 브라우저에 표현할지를 결정해준다.

- CSS 적용 우선순위

  - 1. !important(사용에 주의할 것)
  - 2. inline style (html태그 내부에 사용된 style 속성)
  - 3. id 선택자(#)
  - 4. class 선택자(.), 속성 기반 선택자, 가상 클래스(:hover), 가상 요소(::before)
  - 5. 태그 선택자(body, h1, p, ...)
  - 6. 전체 선택자(\*)

- important = 무조건 우선, 인라인 스타일 = 1000점, id 선택자 = 100점, class 선택자 = 10점, 태그 선택자 = 1점, ... 이렇게 점수를 합산하여 css의 우선순위를 정한다.
- 중요도와 적용 범위가 같다면 가장 나중에 나온 스타일이 덮어쓰기 됨.

## Display 속성

- [mdn 문서 - CSS display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
- display 속성은 요소를 블록 혹은 인라인 요소 중 어떤 방법으로 취급될지와, flow, grid, flex처럼 자식 요소를 배치할 때 사용됨
- display 속성의 값은 block, inline, inline-block, flex, grid 등이 있음.

- **📌display: block**

  - 블럭처럼 위에서 아래로 쌓이는 특징이 있음.
  - `<div>, <h1>,  <p>,  <ul>,  <ol>, <form>` 등의 요소는 대표적인 block 속성
  - 가로 영역을 모두 차지하기 때문에 block 특성을 가진 요소와 인접된 요소는 양 옆으로 배치될 수 없음.
  - width, height, margin, padding의 설정이 가능

- **📌display: inline**

  - 각 요소를 인접된 요소의 양 옆으로 나열할 수 있음.
  - `<span>, <a>, <img>, <svg>` 요소가 대표적인 inline 속성.
  - width, height 설정이 불가능.
  - margin은 left, right 값만 설정 가능.
  - padding은 상하좌우 모두 설정 가능하지만, 상하 부분의 padding은 다른 요소에 영향을 주지 못함.

- **📌display: inline-block**
  - 요소의 형태는 block의 특징을 가지고 있고, 요소의 배치는 inline의 특징을 가지고 있음.  
    쉽게 말해 외형을 block처럼 자유롭게 조절할 수 있으며, inline처럼 각 요소를 양 옆으로 배치가 가능.

## Position 속성

- position속성이란

  - CSS에서 position 속성은 HTML 문서 상에서 요소가 배치되는 방식을 결정함
  - top, bottom, left, right 속성과 함께 사용
  - static, relative, absolute, fixed, sticky 5가지가 존재

- **position: static**

  - position 속성을 별도로 지정해주지 않으면 `기본값으로 static`이 적용
  - position: static이 적용된 요소는 HTML 문서 상 원래 있어야하는 위치에 배치됨. 즉, `HTML에 작성된 순서 그대로 화면에 표시`되며, `top, bottom, left, right 속성값이 적용되지 않음`.

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <div class="container">
          <div class="box">Box 1</div>
          <div class="box">Box 2</div>
          <div class="box">Box 3</div>
        </div>
      </body>
      <style>
        .container {
          width: 400px;
          height: 400px;
          background: darkseagreen;
        }

        .box {
          position: static;
          top: 300px; /* top속성이 무시됨 */
          width: 300px;
          height: 100px;
          border: 1px solid;
          box-sizing: border-box;
          background: tomato;
          text-align: center;
          line-height: 100px;
        }
      </style>
      <script></script>
    </html>
    ```

    ![image](https://github.com/GangYunGit/TIL/assets/109258306/9b24515c-7682-4345-867e-a25f4daa1fc0)

- **position: relative**

  - 요소의 원래 위치를 기준으로 상대적으로 배치해주는 속성
  - top, bottom, left, right 속성을 이용하여 원래의 위치를 기준으로 상하좌우 이동이 가능

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <div class="container">
          <div class="box">Box 1</div>
          <div class="relative-box">Box 2</div>
          <div class="box">Box 3</div>
        </div>
      </body>
      <style>
        .container {
          width: 400px;
          height: 400px;
          background: darkseagreen;
        }

        .box {
          position: static;
          top: 300px; /* top속성이 무시됨 */
          width: 300px;
          height: 100px;
          border: 1px solid;
          box-sizing: border-box;
          background: tomato;
          text-align: center;
          line-height: 100px;
        }
        .relative-box {
          position: relative;
          width: 300px;
          height: 100px;
          border: 1px solid;
          box-sizing: border-box;
          background: blue;
          top: 20px;
          left: 40px;
          opacity: 0.5;
          color: white;
          text-align: center;
          line-height: 100px;
        }
      </style>
      <script></script>
    </html>
    ```

    ![image](https://github.com/GangYunGit/TIL/assets/109258306/1c667f11-18d8-4449-ba53-c090511a8c12)

- **position: absolute**

  - absolute의 뜻이랑은 다르게 절대적인 기준이 아니라, `상위 요소를 기준`으로 배치되는 속성
  - absolute 속성이 적용된 요소는 `HTML 문서 상에서 독립`되어 다른 요소들과 상호작용하지 않는다.
  - DOM을 기준으로 `상위 요소들 중, position 속성이 static이 아닌 가장 가까운 상위요소`가 배치 기준으로 설정됨.
  - 모든 상위 요소에 position 요소가 static이 아닌 요소가 없다면 `<body>`가 배치 기준이 됨

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <div class="container">
          <div class="box">Box 1</div>
          <div class="absolute-box">Box 2</div>
          <div class="box">Box 3</div>
        </div>
      </body>
      <style>
        .container {
          /* absolute-box 부모의 position속성이 static이 아님 */
          /* 여기서 position 속성을 없애면 absolute-box의 배치 기준이 body태그가 됨 */
          position: relative;
          width: 400px;
          height: 400px;
          background: darkseagreen;
        }

        .box {
          position: static;
          top: 300px; /* top속성이 무시됨 */
          width: 300px;
          height: 100px;
          border: 1px solid;
          box-sizing: border-box;
          background: tomato;
          text-align: center;
          line-height: 100px;
        }
        .absolute-box {
          position: absolute;
          width: 300px;
          height: 100px;
          border: 1px solid;
          box-sizing: border-box;
          background: blue;
          bottom: 10px;
          right: 20px;
          opacity: 0.5;
          color: white;
          text-align: center;
          line-height: 100px;
        }
      </style>
      <script></script>
    </html>
    ```

    ![image](https://github.com/GangYunGit/TIL/assets/109258306/4a3300f7-00ea-4ad9-b717-b135d3ee0a88)

- **position: fixed**

  - fixed 속성은 `viewport(브라우저)가 배치 기준`이 된다.
  - absolute 속성과 마찬가지로, fixed 속성이 적용된 요소는 HTML 문서 상에서 독립되어 `다른 요소들과 상호작용하지 않는다.`

- **position: sticky**

  - sticky 속성은 fixed와 달리 `부모 요소 안에서만 고정`되어 스크롤을 따라 움직인다.
  - 헤더, 사이드바와 같은 요소를 제작하는데 사용
  - [sticky요소가 적용되지 않을 때 확인해볼 것](https://coding-factory.tistory.com/951)
    - top, left, right, bottom 중 한개라도 적용이 되어있는지 확인하기
    - 부모 요소에 overflow 속성이 적용되어 있으면 동작하지 않음
    - 부모 요소가 높이를 가지지 않거나, 스크롤 컨테이너가 부모 요소의 크기를 초과하는 경우 동작하지 않을 수 있음
