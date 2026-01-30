def likemax():
    numbers = [3, 7, 2, 9, 4, 1]
    
    max_number = numbers[0]

    for num in numbers:
        if num > max_number:
            max_number = num

    print("siis yvelaze didi elementi:", max_number)


likemax()