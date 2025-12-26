animals = ["cat", "elephant", "dog", "tiger", "ox"]
result = []

for word in animals:
    if len(word) >= 4:
        result.append(word)

print(result)