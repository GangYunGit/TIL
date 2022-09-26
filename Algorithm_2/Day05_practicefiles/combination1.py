N = 10
for i in range(N - 3):
    for j in range(i + 1, N - 2):
        for k in range(j + 1, N - 1):
            print(i, j, k)
