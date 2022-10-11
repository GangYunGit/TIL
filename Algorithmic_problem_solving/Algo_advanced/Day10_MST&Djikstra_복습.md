# 2022. 09. 29.

## 개요

1. 최소 신장 트리(MST)

- 크루스칼 -> 서로소 집합

- 프림

2. 다익스트라

---

## Union-Find

- Union-Find == 서로소 집합 == 상호 배타 집합 == disjoint set

- Find : in, not in (membership 연산)

- Union : 합집합, 교집합, 차집합

> make-set

- 집합을 만드는 과정

> find-set

- 어느 집합에 속해있는지 찾는 과정

- 집합의 이름이 아니라, `대표값`을 통해서 집합을 찾음

> union

- 우선 같은 집합에 속해있는지 확인한다.

- find-set을 했을 때 루트 노드가 다르(서로소 집합)면 집합을 합칠 수 있다.

> union-find 코드

```python
# 1. 반복문
def find_set(node):
    while node != parent[node]:
        node = parent[node]
    return node


# # 2. 재귀
# def find_set(node):
#     if node != parent[node]:
#         return find_set(parent[node])
#     return node


# # 3. 재귀 - 경로 압축(부모 노드를 대표값으로 만듦)
# 처음의 한번은 비효율적일 수 있으나, 재귀 호출이 해제되면서 해당 노드의 부모를 모두 최상단의 루트노드로 바꾸면서 가기 때문에 다음번에 똑같은 대표값을 호출할 때 매우 빨라진다.
# def find_set(node):
#     if node != parent[node]:
#         parent[node] = find_set(parent[node])
#     return parent[node]


n, m = map(int, input().split())  # 정점, 간선(Union 횟수) 개수
parent = list(range(n + 1))

for _ in range(m):
    x, y = map(int, input().split())
    x_root, y_root = find_set(x), find_set(y)  # Find

    # Union
    if x_root != y_root:  # 서로소 집합인 경우만 합집합 연산

        # 루트노드가 가장 작은 쪽을 대표값으로 사용한다
        if x_root < y_root:
            parent[y_root] = x_root
        else:
            parent[x_root] = y_root

# 출력
for i in range(1, n + 1):
    print(find_set(i), end=' ')

print()
print(parent)
```

---

## 크루스칼 (Kruskal)

- `간선을 기준`으로 최소를 찾아가는 방법

- 신장 트리 : 모든 노드를 포함하되, 사이클은 없는 그래프

- 최소 신장 트리(MST) : 신장 트리들 중 간선 비용의 합이 가장 낮은 신장트리(greedy 사고방식)

- 가중치를 기준으로 간선 정보를 정렬하고, 가중치가 가장 낮은 간선부터 시작하여 union-find를 이용하여 서로소이면 경로에 추가하는 방식으로 진행

---

## 프림 (Prim)

- `정점을 기준`으로 최소를 찾아가는 방법

- 과정

1. 임의의 정점 선택
2. 선택된 정점으로 만들어진 MST에서 갈 수 있는 모든 정점들 중 최소비용인 것을 선택
3. 2를 반복

> 코드 작성

- visited 배열 : false로 초기화 
  - visted[v]가 True라면 그 정점(v)이 MST에 포함되어 있음을 의미
  
- distance 배열 : inf로 초기화 
  - distance[v]는 MST에서 해당 정점(v)으로 가는 간선 비용

> Heap 을 이용한 Prim

- 우선순위큐를 만들 때에는 Heap의 원리를 이용한다.

---

## 다익스트라 (Dijkstra)

- 그리디 알고리즘

- 특정 정점 -> 다른 모든 정점을 돌면서 최단거리를 구하는 방법

- 음(-)의 간선 비용이 있으면 안된다.

> 과정

1. 출발지점을 k로 놓는다.
2. distance 배열 : distance[v]는 k번 정점에서 v로 가는 비용. 처음에는 모두 inf로 초기화,
3. 확정된 최단거리를 저장할 visited배열 생성
4. 갱신

> 꿀팁

- 간선이 많으면 프림이 유리

- 정점이 많으면 크루스칼이 유리

- 보통은 크루스칼을 많이 사용함