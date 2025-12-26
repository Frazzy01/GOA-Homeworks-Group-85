# 7) მომხმარებელს შემოაყვანინე რიცხვები, ეს რიცხვები დაამატე სიაში, 
# თუ ორი მეზობელი ელემენტის ჯამი <50-ზე მაშინ წაშალე მეორე ელემენტი, დაბეჭდე საბოლოო სია

numbers = []

user_input = input("Enter number or 'stop': ")
while user_input != "stop":
    numbers.append(int(user_input))
    user_input = input("Enter number or 'stop': ")

result = []
i = 0
while i < len(numbers):
    if i == 0:
        result.append(numbers[i])
    else:
        if numbers[i-1] + numbers[i] >= 50:
            result.append(numbers[i])
    i += 1

print("list:", result)