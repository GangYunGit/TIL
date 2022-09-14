'''
정정 번호 1 ~ (E + 1)
간선의 수
부모 - 자식 순
4
1 2 1 3 3 4 3 5
'''


def find_root(v):
    for i in range(1, v + 1):
        if parent_idx[i] == 0:  # 부모가 없으면 root
            return i


def preorder(n):
    if n:
        print(n)    # visit(n)
        preorder(child_1[n])
        preorder(child_2[n])


def inorder(n):
    if n:
        inorder(child_1[n])
        print(n)   # visit(n)
        inorder(child_2[n])


def postorder(n):
    if n:
        postorder(child_1[n])
        postorder(child_2[n])
        print(n)   # visit(n)


edge = int(input())
arr = list(map(int, input().split()))
vertex = edge + 1

# 부모를 인덱스로 자식 번호 저장
child_1 = [0] * (vertex + 1)
child_2 = [0] * (vertex + 1)

# 자식을 인덱스로 부모 번호 저장
parent_idx = [0] * (vertex + 1)

for i in range(edge):
    parent, child = arr[i * 2], arr[i * 2 + 1]

    if child_1[parent] == 0:    # 아직 자식이 없으면
        child_1[parent] = child     # 자식1로 저장
    else:
        child_2[parent] = child
    parent_idx[child] = parent

root = find_root(vertex)
print(root)
# preorder(root)
# print()
# inorder(root)
# print()
# postorder(root)