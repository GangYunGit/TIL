# 2022. 09. 28.

## 그래프

- 그래프는 아이템(사물 또는 추상적 개념)들과 이들 사이의 연결관계를 표현한다.

- 정점(Vertex)들의 집합과 이들을 영ㄴ결하는 간선(Edge)들의 집합으로 구성된 자료구조

- 선형 자료구조나 트리 자료구조로 표현하기 어려운 N : N 관계를 가지는 원소들을 표현하기에 용이하다. 

> `그래프 유형`

- 무향 그래프(Undirected Graph)

  ![image](https://user-images.githubusercontent.com/109258306/192659328-6900537c-202b-4b2a-906b-5726bf02fac1.png)


- 유향 그래프(Directed Graph)
  
  ![image](https://user-images.githubusercontent.com/109258306/192659361-0e1ecb65-a4ee-4d40-8134-484290d7d08c.png)


- 가중치 그래프(Weighted Graph)

  ![image](https://user-images.githubusercontent.com/109258306/192659399-c3c1db76-569c-47ed-9931-6afc880e4827.png)


- 사이클 없는 방향 그래프(DAG, Directed Acyclic Graph)

  ![image](https://user-images.githubusercontent.com/109258306/192659439-c6d9cfde-c1b3-4ef8-bf97-7f0e7ad86dfa.png)

- 완전 그래프
  - 정점들에 대해 가능한 모든 간선들을 가진 그래프
  ![image](https://user-images.githubusercontent.com/109258306/192659513-5c231c69-fc18-41ea-bea5-2d82c0ec8b85.png)

> 인접 정점

- 인접(Adjacency)

  - 두 개의 정점에 간선이 존재(연결됨)하면 서로 인접해 있다고 한다.
  - ex) 완전 그래프에 속한 모든 정점들은 서로 인접해 있다.

> 그래프 경로

  ![image](https://user-images.githubusercontent.com/109258306/192659699-970bac77-a806-442a-93f1-cd3c850eb2cb.png)

- 경로란 간선들을 순서대로 나열한 것
  - 간선들 : (0, 2), (2, 4), (4, 6)
  - 정점들 : 0 - 2 - 4 - 6

- 경로 중 한 정점을 최대한 한번만 지나는 경로를 `단순경로`라고 한다.
  - ex) 0 - 2 - 4 - 6, 0 - 1 - 6

- 시작한 정점에서 끝나는 경로를 `사이클(Cycle)`이라고 한다.
  - ex) 1 - 3 - 5 - 1

> 인접 행렬

- 두 정점을 연결하는 간선의 유무를 행렬로 표현

  ![image](https://user-images.githubusercontent.com/109258306/192660519-db14a294-5d9a-4a1f-81d0-46f193714448.png)

- 무향 그래프 
  - i번째 행의합 = i번째 열의합 = 정점의 차수

- 유행 그래프 
  - 행 i의 합 = 해당 정점의 `진출 차수`
  - 열 i의 합 = 해당 정점의 `진입 차수`

> 인접 리스트

- 무방향 그래프
  
  ![image](https://user-images.githubusercontent.com/109258306/192660907-8d20a817-c8b8-4ff4-9d9d-98a55de2ae47.png)

- 유방향 그래프

  ![image](https://user-images.githubusercontent.com/109258306/192661011-707b9591-1546-445d-8f6a-c424b4991ea3.png)

---

## DFS

- 시작 정점의 한 방향으로 갈 수 있는 경로가 있는 곳까지 깊이 탐색해 가다가 더 이상 갈 곳이 없게 되면, 가장 마지막에 만났던 갈림길 간선이 있는 정점으로 되돌아와서 다른 방향의 정점으로 탐색을 계속 반복하여 결국 모든 정점을 방문하는 순회 방법

- 가장 마지막에 만났던 갈림길의 정점으로 되돌아가서 다시 깊이 우선 탐색을 반복해야하므로 후입선출 구조의 `Stack` 사용

---

## BFS

- 너비 우선 탐색은 탐색 시작점의 인접한 정점들을 먼저 모두 차례로 방문한 후에, 방문했던 정점을 시작점으로 하여 다시 인접한 정점들을 차례로 방문하는 방식

- 인접한 정점들에 대해 탐색을 한 후, 차레로 다시 너비 우선 탐색을 진행해야 하므로, 선입선출 형태의 자료구조인 `Queue`를 활용함.

---

## 서로 소 집합(Disjoint - sets)

- 서로 소 또는 상호배타 집합들은 서로 중복 포함된 원소가 없는 집합들이다. 다시 말해 교집합이 없다.

- 집합에 속한 하나의 특정 멤버를 통해 각 집합들을 구분한다. 이를 대표자(representative)라 한다.

> 상호 배타 집합 표현 - 트리

![image](https://user-images.githubusercontent.com/109258306/192766356-da5adb9d-5ccb-47b4-880d-9310cc4f0bd6.png)

- 하나의 집합(a disjoint set)을 하나의 트리로 표현한다.

- 자식 노드가 부모 노드를 가리키며 로트 노드가 대표자가 된다.

> 상호 배타 집합에 대한 연산

- Make-Set(x) : 유일한 멤버 x를 포함하는 새로운 집합을 생성하는 연산
  
  ![image](https://user-images.githubusercontent.com/109258306/192766623-ff98c4db-a891-447d-ab31-3713da956df6.png)


```python
Make_Set(x):
    p[x] = x
# 그냥 p = [i for i in range(N + 1)]로 만들면 편하다.
```

- Find-Set(x) : x를 포함하는 집합을 찾는 연산

```python
Find_Set(x):
    while x != p[x]
        x = p[x]
    return x
```

- Union(x, y) : x와 y를 포함하는 두 집합을 통하는 연산

  ![image](https://user-images.githubusercontent.com/109258306/192766719-21e11f6c-905e-4705-a375-2abd818fb20c.png)

```python
Union(x, y):
    p[Find_Set(y)] = Find_Set(x)
```
- `p[y] = Find-Set(x)로 쓰는 실수`를 하지 말자. `Find-Set(y)`가 들어가야 한다!!

> 연산의 효율을 높이는 방법

- Rank를 이용한 Union
  - 각 노드는 자신을 루트로 하는 subtree의 높이를 Rank라는 이름으로 저장한다.
  - 두 집합을 합칠 때 rank가 낮은 집합을 rank가 높은 집합에 붙인다.

- Path compression
  - Find-Set을 행하는 과정에서 만나는 모든 노드들이 직접 root를 가리키도록 포인터를 바꾸어 준다.

---

## 최소 신장 트리(Minimum Spannig Tree)

- 그래프에서 최소 비용 문제
  - 모든 정점을 연결하는 간선들의 가중치의 합이 최소가 되는 트리
  - 두 정점 사이의 최소 비용의 경로 찾기

- `신장 트리`
  - n 개의 정점으로 이루어진 `무방향 그래프에서` `n개의 정점과 n-1개의 간선으로 이루어진 트리`
  - 주어진 그래프에서 사이클이 생기게 되는 간선들을 제거하는 방식으로 만들 수 있음!

- 최소 신장 트리(Minumum Spanning Tree)
  - 무방향 가중치 그래프에서 `신장 트리를 구성하는 간선들의 가중치의 합이 최소`인 신장 트리

---

## Prim 알고리즘

- 하나의 정점에서 연결된 간선들 중에 하나씩 선택하면서 MST를 만들어가는 방식

1. 임의의 정점 하나를 선택하여 시작
2. 선택한 정점과 인접한 정점들 중의 최소 비용의 간선이 존재하는 정점을 선택
3. 모든 정점이 선택될 때까지 1, 2과정을 반복

- 서로소인 2개의 집합(2 disjoint-sets)정보를 유지
  - 트리 정점들(tree vertices) : MST를 만들기 위해 선택된 정점들
  - 비트리 정점들(nontree vertices) : 선택되지 않은 정점들

---

## KRUSKAL 알고리즘

- 간선을 하나씩 선택해서 MST를 찾는 알고리즘

1. 최초, 모든 간선을 가중치에 따라 오름차순으로 정렬
2. 가중치가 가장 낮은 간선부터 선택하면서 트리를 증가시킴 => 사이클이 존재하면 다음으로 가중치가 낮은 간선 선택
3. n-1개의 간선이 선택될 때까지 2를 반복

---

## 최단 경로

- 최단 경로의 정의
  - 간선의 가중치가 있는 그래프에서 두 정점 사이의 경로들 중에 간선의 가중치의 합이 최소인 경로

- 하나의 시작 정점에서 끝 정점까지의 최단 경로
  - 다익스트라(dijkstra) 알고리즘 : 음의 가중치를 허용하지 않음
  - 벨만포드(Bellman-Ford) 알고리즘 : 음의 가중치 허용

- 모든 정점들에 대한 최단 경로
  - 플로이드-워샬(Floyd Warshall) 알고리즘

> Dijkstra 알고리즘

- 시작 정점에서 거리가 최소인 정점을 언택해 나가면서 최단 경로를 구하는 방식이다.

- 시작 정점(s)에서 끝정점(t)까지의 최단 경로에 정점 x가 존재한다.

- 이 때, 최단경로는 s에서 x까지의 최단 경로x에서 t까지의 최단경로로 구성된다

- 탐욕 기법을 사용한 알고리즘으로, MST의 프림과 유사하다.