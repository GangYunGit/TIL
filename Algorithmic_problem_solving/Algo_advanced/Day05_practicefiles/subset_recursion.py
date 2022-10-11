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
