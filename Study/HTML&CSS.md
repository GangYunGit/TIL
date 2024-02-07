# HTML/CSS

## px, em, rem단위

- px(픽셀) : `해상도의 한 화소`로, 화면에 표시되는 가장 작은 단위. 고정된 단위로 크기가 변하지 않음

- em : 상대적인 단위로, `부모요소`의 사이즈에 의해 자식요소의 사이즈가 결정됨.

> 보통 p태그가 `1em = 16px`의 사이즈를 갖는데, 그렇다고 1em이 16px인 것이 아니라 `p태그의 부모 요소인 body가 기본적으로 16px의 사이즈를 갖기 때문`에 그렇다.

- rem : 상대적인 단위, 최상위 요소인 `Root(html)`의 사이즈를 기준으로 사이즈가 결정

## viewport 단위

- viewport란 : 현재 실행중인 화면의 크기에 맞추어 상대적인 크기를 반환하는 단위. 반응형 웹 구성에 사용됨

> - vh = viewport height, 화면의 높이 기준
> - vw = viewport width, 화면의 폭 기준

- vmin, vmax

  - viewport의 길이 중 더 긴것을 기준으로 삼으면 vmax, 더 짧은 길이를 기준으로 삼으면 vmin

- %와 viewport단위의 차이
  - %는 부모 요소의 크기가 기준이고, viewport는 화면의 크기가 기준
  - ex) 스크롤바가 있는 화면에서 viewport는 스크롤바를 포함한 길이를 기준으로 계산됨.

## CSS 적용 우선순위

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

- 📌display: block

  - 블럭처럼 위에서 아래로 쌓이는 특징이 있음.
  - `<div>, <h1>,  <p>,  <ul>,  <ol>, <form>` 등의 요소는 대표적인 block 속성
  - 가로 영역을 모두 차지하기 때문에 block 특성을 가진 요소와 인접된 요소는 양 옆으로 배치될 수 없음.
  - width, height, margin, padding의 설정이 가능

- 📌display: inline

  - 각 요소를 인접된 요소의 양 옆으로 나열할 수 있음.
  - `<span>, <a>, <img>, <svg>` 요소가 대표적인 inline 속성.
  - width, height 설정이 불가능.
  - margin은 left, right 값만 설정 가능.
  - padding은 상하좌우 모두 설정 가능하지만, 상하 부분의 padding은 다른 요소에 영향을 주지 못함.

- 📌display: inline-block
  - 요소의 형태는 block의 특징을 가지고 있고, 요소의 배치는 inline의 특징을 가지고 있음.  
    쉽게 말해 외형을 block처럼 자유롭게 조절할 수 있으며, inline처럼 각 요소를 양 옆으로 배치가 가능.
