def count_positives_sum_negatives(arr):
    if arr == []:
        return []
    count = 0
    n_count = 0
    for i in arr:
        if i > 0:
            count += 1
        elif i < 0:
            n_count += i
    return [count, n_count]