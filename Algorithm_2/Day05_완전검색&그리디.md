# 2022. 09. 21.

## 반복과 재귀

> 재귀적 알고리즘

- 하나 또는 그 이상의 기본 경우(basis case or rule)
  - 집합에 포함되어있는 원소로 induction을 생성하기 위한 시드(seed)역할

- 하나 또는 그 이상의 유도된 경우(indective case or rule)
  - 새로운 집합의 원소를 생성하기 위해 결합되어지는 방법

> 재귀 함수(recursive function)

- 자기 자신을 여러번 호출하는 함수

- 재귀적 정의를 이용 : 기본 부분(basis)와 유도 부분(inductive)로 구성된다.

- 함수 호출은 프로그램 메모리 구조에서 스택을 사용한다. 따라서 재귀호출은 반복적인 스택의 사용을 의미하며, 메모리 및 속도에서 성능저하가 발생한다.

- 예시) 팩토리얼 재귀 함수의 호출

  ![image](https://user-images.githubusercontent.com/109258306/191388235-6b3c35e0-ffd3-494d-ab4a-5d1414326944.png)

> 반복을 쓸까 재귀를 쓸까?

- 재귀는 문제 해결을 위한 알고리즘 설계가 간단하고 자연스럽다.
  - 추상 자료형(List, tree등)의 알고리즘은 재귀적 구현이 간단하고 자연스러운 경우가 많다.

- 일반적으로, 재귀적 알고리즘은 반복보다 더 많은 메모리와 연산을 필요로 한다.

- 입력 값 `n이 커질수록` 재귀 알고리즘은 반복에 비해 비효율적일 수 있다.

---

## 고지식한 방법(brute-force)

- 문제를 해결하기 위한 간단하고 쉬운 접근법

- 상대적으로 빠른 시간에 알고리즘 설계를 할 수 있다.

- 학술적 또는 교육적 목적을 위해 알고리즘의 효율성을 판단하기 위한 척도로 사용된다.

> 완전 검색으로 시작하자

- 모든 경우의 수를 생성하고 테스트하기 때문에 수행속도는 느리지만, 해답을 찾아내지 못할 확률이 적다.

- 문제를 풀 때, `우선 완전 검색으로 접근`하여 해답을 도출한 후, `성능 개선을 위해 다른 알고리즘을 사용`하고 해답을 확인하는 것이 바람직하다.

- 또한 이들은 전형적으로 순열, 조합, 그리고 부분집합(subsets)과 같은 조합적 문제들과 연관된다.

---

## 순열

- 다수의 알고리즘 문제들은 순서화된 요소들의 집합에서 최선의 방법을 찾는 것과 관련 있다.
  - ex) TSP(Traveling Salesman Problem)

---

## 순열 생성 방법

> 단순하게 순열을 생성하는 방법

- ex) {1, 2, 3}을 포함하는 모든 순열을 생성하는 함수

  - 동일한 숫자가 포함되지 않았을 때, 각 자리수 별로 loop을 이용해 표현

```python
for i in range(1, 4):
    for j in range(1, 4):
        if i != j:
            for k in range(1, 4):
                if k != i and k != j:
                    print(i, j, k)
```

> 재귀 호출을 통한 순열 생성

- 예시 코드 1

```python
def permutaion(i, k):
    if i == k:  # 인덱스 i == 원소의 개수라면
        print(p)
    else:
        for j in range(i, k):
            p[i], p[j] = p[j], p[i]
            permutaion(i + 1, k)
            p[i], p[j] = p[j], p[i]


p = [1, 2, 3]
permutaion(0, 3)
```

- 예시 코드 2 : used를 이용하는 방법

```python
def permutation(i, k):
    if i == k:
        print(p)
    else:
        for j in range(k):
            if used[j] == 0:  # a[j]가 아직 사용되지 않았으면
                used[j] = 1  # a[j]를 사용됨 표시
                p[i] = a[j]  # p[i]는 a[j]로 결정
                permutation(i + 1, k)  # p[i + 1]값을 결정하러 이동
                used[j] = 0  # a[j]를 다른 자리에서 쓸 수 있도록 해제


N = 10
a = [i for i in range(1, N + 1)]
used = [0] * N
p = [0] * N

permutation(0, N)
```

- 예시 코드 3 : n개중 r개를 뽑는 순열

```python
def permutation(i, k, r):
    if i == r:
        print(p)
    else:
        for j in range(k):
            if used[j] == 0:  # a[j]가 아직 사용되지 않았으면
                used[j] = 1  # a[j]를 사용됨 표시
                p[i] = a[j]  # p[i]는 a[j]로 결정
                permutation(i + 1, k, r)  # p[i + 1]값을 결정하러 이동
                used[j] = 0  # a[j]를 다른 자리에서 쓸 수 있도록 해제


N = 10
R = 3
a = [i for i in range(1, N + 1)]
used = [0] * N
p = [0] * R

permutation(0, N, R)
```

---

## 부분 집합

- 집합에 포함된 원소들을 선택하는 것이다.

- 다수의 중요 알고리즘들이 원소들의 그룹에서 최적의 부분 집합을 찾는 것이다. ex) 배낭 짐싸기

- N 개의 원소를 포함한 집합
  - 자기 자신과 공집합을 포함한 모든 부분집합의 개수는 2<sup>n</sup>개
  - 원소의 수가 증가하면 부분집합의 개수는 지수적으로 증가

> 바이너리 카운팅을 통한 부분집합 생성

- 부분집합을 생성하기 위한 가장 자연스러운 방법

- 예시 코드 1 : 비트연산을 이용

```python
arr = [3, 6, 7, 1, 5, 4]
n = len(arr)

for i in range(1, 1 << n):
    for j in range(n):
        if i & (1 << j):
            print(arr[j], end=' ')
    print()
```

- 예시 코드 2 : 재귀를 이용

```python
def subset(i, k):
    if i == k:
        for j in range(k):
            if bit[j]:
                print(arr[j], end=' ')
        print()
    else:
        bit[i] = 0
        subset(i + 1, k)
        bit[i] = 1
        subset(i + 1, k)


arr = [3, 6, 7, 1, 5, 4]
n = len(arr)

bit = [0] * n
subset(0, n)
```

---

## 조합

- 서로 다른 n개의 원소 중 r개를 순서 없이 골라낸 것을 조합(combination)이라고 부른다.

> 반복을 이용한 조합 생성

- 10개의 원소 중 3개의 수를 뽑는 조합

```python
N = 10
for i in range(N - 3):
    for j in range(i + 1, N - 2):
        for k in range(j + 1, N - 1):
            print(i, j, k)

```

> 재귀를 이용한 조합 생성

```python
def nCr(n, r, s):
    if r == 0:
        print(*comb)
    else:
        for i in range(s, n - r + 1):
            comb[r - 1] = A[i]
            nCr(n, r - 1, i + 1)


A = [1, 2, 3, 4, 5]
n = len(A)
r = 3
comb = [0] * r
nCr(n, r, 0)
```

---

## 탐욕 알고리즘

> 동작 과정

1. 해 선택 : 현재 상태에서 부분 문제의 최적 해를 구한 뒤, 이를 부분 집합(Solution Set)에 추가한다.

2. 실행 가능성 검사 : 새로운 부분 해 집합이 실행가능한지를 확인한다. 곧, 문제의 제약 조건을 위반하지 않는지를 검사한다.

3. 해 검사 : 새로운 부분 해 집합이 문제의 해가 되는지를 확인한다. 아직 전체 문제의 해가 완성되지 않았다면 1의 해 선택부터 다시 시작한다. 

- 최적해를 반드시 구한다는 보장은 없다.

> 배낭 짐싸기(Knapsack)

- 문제 : 도둑은 부자들의 값진 물건들을 훔치기 위해 보관 창고에 침입하였다. 도둑은 훔친 물건을 배낭에 담아 올 계획이다. 배낭은 담을 수 있는 물건의 총 무게(W)가 정해져 있다. 창고에는 여러 개(n개)의 물건들이 있고 각각의 물건에는 무게와 값이 정해져 있다. 배낭이 수용할 수 있는 무게를 초과하지 않으면서, 값이 최대가 되는 물건들을 담아야 한다.

- Knamsack 문제의 정형적 정의
  - S(물건들의 집합) : {item<sub>1</sub>, item<sub>2</sub>, ..., item<sub>n</sub>}
  - w<sub>i</sub> : item<sub>i</sub>의 무게, P<sub>i</sub> = item<sub>i</sub>의 값
  - W : 배낭이 수용가능한 총 무게

  - 문제 정의 : 내가 선택한 물건들의 조합이 배낭의 무게를 초과하지 않으면서 물건들의 가치의 총합이 최대가 되도록 S의 부분집합 A를 걸정하는 문제!

> Knapsack에 대한 완전검색방법

- 물건들의 집합 S의 모든 부분집합을 구한다.

- 부분집합의 총 무게가 W를 초과하는 집합들은 버리고, 나머지 집합에서 총 값이 가장 큰 집합을 선택한다.

- 물건의 개수가 증가하면 시간복잡도가 지수적으로 증가(2<sub>n</sub>)한다.

> Knapsack에 대한 탐욕적 방법

- 값이 비싼 물건부터 채우거나, 가벼운 물건부터 채운다.

- 둘 다 안되면 무게당 가치가 높은 순서로 물건을 채운다.

- 하지만 최적해는 다른 결과일 수 있다..

> 탐욕 알고리즘의 필수 요소

- 탐욕적 선택 속성(greedy choice property)
  - 탐욕적 선택이 항상 최적해로 갈 수 있는 길임이 보장 되어야 함

- 최적 부분 구조(optimal substructure property)
  - 하나의 선택을 하면 풀어야 할 하나의 하위 문제가 남는다

