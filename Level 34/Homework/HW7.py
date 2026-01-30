def shedareba():
    numbers = [1, 3, 2, 5, 4]
    count = 0

    for i in range(len(numbers) - 1):
        if numbers[i + 1] > numbers[i]:
            count += 1

    print("shemdegi ricxvi winaze ramdenjer metia:", count)

shedareba()