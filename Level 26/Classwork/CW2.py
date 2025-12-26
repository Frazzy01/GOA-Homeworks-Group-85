numbers = []

for i in range(1, 11):
    numbers.append(i)

for i in numbers[:]:
    if i % 2 != 0:
        numbers.remove(i)

print(numbers)