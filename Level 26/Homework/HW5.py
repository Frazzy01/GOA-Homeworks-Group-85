# 5) მომხმარებელს შემოაყვანინე რიცხვები, ეს რიცხვები დაამატე სიაში და გამოითვალე ამ რიცხვების საშუალო არითმეტიკული.

numbers = []

user_input = input("Enter number or 'stop': ")

while user_input != "stop":
    numbers.append(int(user_input))
    user_input = input("Enter number or 'stop': ")

total = 0
for num in numbers:
    total = total + num  

average = total / len(numbers)

print("list numbers:", numbers)
print("avarge calculate:", average)