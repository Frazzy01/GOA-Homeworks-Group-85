def even():
    
    numbers = [5, 4, 8, 69, 22, 42, 11,]
    total = 0
    for num in numbers:
        if num % 2 == 0:
            total += num
    
    print(total)
even()