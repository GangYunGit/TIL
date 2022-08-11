# N = int(input())
# arr = [list(map(int, input().split())) for _ in range(N)]

# s1 = 0
# s2 = 0
# for i in range(N):
#     for j in range(N):
#         if i > j:
#             s1 += arr[i][j]
#         elif i < j:
#             s2 += arr[i][j]
# print(s1, s2)

# s1 = 0
# s2 = 0
# for i in range(N):
#     for j in range(i + 1, N):
#         s2 += arr[i][j]
#         s1 += arr[j][i]
# print(s1, s2)

import sys

sys.stdin = open("input.txt")

T = int(input())

for test_case in range(1, T + 1):
    N, M = map(int, input().split())
    structure = [list(map(int, input().split())) for i in range(N)]
    max_val = 0
    counter_1 = [[0] * M for i in range(N)]
    counter_2 = [[0] * M for j in range(N)]

    for i in range(N):
        count_1 = 0
        count_2 = 0
        for j in range(M):
            if structure[i][j] == 1:
                count_1 += 1
                counter_1[i][j] = count_1
            else:
                count_1 = 0

            if structure[j][i] == 1:
                count_2 += 1
                counter_2[i][j] = count_2
            else:
                count_2 = 0

    for r in range(N):
        for c in range(M):
            if counter_1[r][c] > max_val:
                max_val = counter_1[r][c]
            if counter_2[r][c] > max_val:
                max_val = counter_2[r][c]

    print(f'#{test_case} {max_val}')
