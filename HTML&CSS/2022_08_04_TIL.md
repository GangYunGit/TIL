# 2022. 08. 04.

# Flexbox

> flex의 원칙
 
- `부모와 자식 사이에서만` 적용됨. `자손까지 못감!`

- 자손까지 적용시키려면 그 바로 상위의 부모에도 적용을 시켜줘야함!

---

# flex의 속성

- 번외) direction이 reverse가 있는 이유 : 오른쪽에서 왼쪽으로 쓰는 언어들도 있어서

> 부모 컨테이너에 적용

>> flex-wrap 속성

- 기본값은 no-wrap

- no-wrap : item이 많아져서 범위를 초과해도 한 줄에 강제로 끼워넣음

- wrap 적용 시 : item이 많아져서 범위를 초과할 경우 item을 아래로 내려보냄

- wrap-reverse : 쌓는 방향을 반대로

>> `justify`-content 속성

- `메인축` 기준으로 정렬

- 꼬치에 있는 `떡을 움직이는` 것

- 옵션들 : flex-start, flex-end, flex-center

- 옵션들 2 : space-between, space-evenly(item 사이의 모든 여백의 너비가 같다), space-around(각 item 양쪽의 여백이 같다)

>> `align`-items

- `교차축` 기준

- `꼬치 자체`를 움직이는 것

>> 언제 content고 언제 items냐????

- content는 여러 개(또는 여러 줄), items는 한 개(또는 한 줄)

- `justify-items,self는 flexbox에서 무시당함` => 공식 문서에도 나와있음

---

> 자식 컨테이너에 적용

>> flex-grow

- `모두 원래의 크기로 배열 했을 때 남은 여백`을 다시 비율로 나눠서 각 요소에 분배

>> align-items

>> align-self

- 교차축을 기준으로 제각각 다른 위치에 배치하고 싶을 때(start, center, ...)

>> order

- 요소의 순서를 제각각 다르게 배치하고 싶을 때

- 눈으로 보이는 순서만 바뀐다.(동작은 코드 상의 순서에 따른다.)

---

# Bootstrap

- 가장 쉬운 CSS framework!

- 추상화를 통해 각종 class를 사용하기 쉽게 만들어 놓음

- 부모 요소 위치를 잘 확인해서 d-flex 적용하기!
