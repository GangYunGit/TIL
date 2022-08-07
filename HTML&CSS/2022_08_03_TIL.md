# 2022. 08. 03.

# CSS layout

> CSS layout techniques

- Display
  
- Position 
  
- Float(CSS1, 1996) 
  
- Flexbox(2012) 
  
- Grid(2017)

---

# Float

>Float

- 박스를 왼쪽 혹은 오른쪽으로 이동시켜 텍스트를 포함한 인라인요소들이 주변을 wrapping하도록 함

- 요소가 Noraml flow를 벗어나도록 함

> Float 속성

- none : 기본값

- left : 요소를 왼쪽으로 띄움

- right : 요소를 오른쪽으로 띄움

---

# Flexbox

> CSS Flexible Box Layout

- 행과 열 형태로 아이템들을 배치하는 1차원 레이아웃 모델

- **주의! Internet Explorer 부분지원!!**

- 축

  - main axis (메인 축)

  - cross axis (교차 축)

- 구성 요소

  - Flex Container (부모 요소에 flex를 적용시킴)

  - Flex Item (자식 요소)

- `item에 flex를 적용하는 것이 아니라 부모요소에 적용해야 한다!`


> Flex 속성

- 배치 설정

  - flex-direction

  - flex-wrap

- 공간 나누기

  - justify-content (main axis)

  - align-contetn (cross axis)

- 정렬

  - align-times (모든 아이템을 cross axis 기준으로)

  - align-self (개별 아이템)

>> Flex 속성 : flex-direction

- Main axis 기준 방향 설정

- `역방향`의 경우 HTML `태그 선언 순서와 시각적으로 다르`니 유의

>> Flex 속성 : flex-wrap

- 아이템이 컨테이너를 벗어나는 경우 해당 영역 내에 배치되도록 설정

- 즉, 기본적으로 컨테이너 영역을 벗어나지 않도록 함
  
- flex-direction : Main axis의 방향을 설정

- flex-wrap : 요소들이 강제로 한줄에 배치 되게 할 것인지 여부

  - nowrap : 너비를 무시하고 한 줄에 강제로 배치

  - wrap : 넘치면 그 다음 줄로 배치

- flex-flow

  - flex-direction과 flex-wrap의 shorthand

  - flex-direction과 flex-wrap에 대한 설정 값을 차례로 작성

  - ex) flex-flow: row nowrap;

>> Flex 속성 : justify-content 

- Main axis를 기준으로 컨텐츠를 배치하는 속성

- flex-start, flex-end, center, space-between, space-around, space-evenly

>> Flex 속성 : align-content

- Cross axis를 기준으로 `공간`을 배분

>> Flex 속성 : align-items

- 모든 아이템을 Cross axis를 기준으로 정렬

>> Flex 속성 : align-self

- 개별 아이템을 Cross axis 기준으로 정렬

  - 주의! 해당 속성은 부모에 적용하는 것이 아니라 개별 아이템에 선택자로 적용!

>> Flex 기타 속성

- flex-grow : 남은 여백을 아이템에 분배

- order : 배치 순서

---

# Bootstrap

## CDN

- 컨텐츠(CSS, JS, Image, Text 등)을 효율적으로 전달하기 위해 여로 노드에 가진 네트워크에 데이터를 제공하는 시스템

- 사용하면서 익히자

> Grid system

- 요소들의 디자인과 배치에 도움을 주는 시스템

- 기본 요소

  - Column : 실제 컨텐츠를 포함하는 부분

  - Gutter : 칼럼과 칼럼 사이의 공간

  - Container : Column들을 담고 있는 공간

>> Bootstrap의 Grid system

- Bootstrap의 Grid system은 flexbox로 제작됨

- container, rows, column으로 컨텐츠를 배치하고 정렬

- 반드시 기억해야 할 2가지!

  - 12개의 column, 6개의 break points



