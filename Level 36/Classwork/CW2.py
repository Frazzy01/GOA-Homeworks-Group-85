def sul_numbers(numbers):
    total = 0
    for number in numbers:
        total += number
    return total

numbers = [10, 20, 30, 100, 200, 500]
print(sul_numbers(numbers))  