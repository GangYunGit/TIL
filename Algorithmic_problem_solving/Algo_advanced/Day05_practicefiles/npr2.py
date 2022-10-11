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
