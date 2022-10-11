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
