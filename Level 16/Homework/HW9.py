# 9)შექმენით კალკულატორი როგორიც ჩვენ გავაკეთეთ,დაუმატეთ სხვა მათემატიკური ოპერატორები,ასევე დაუმატეთ შედარების ოპერატორებიც

num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))
operator = input("Enter the operator (+, -, *, /, %, **, ==, !=, >, <, >=, <=): ")

if operator == "+":
    print(num1 + num2)
elif operator == "-":
    print(num1 - num2)
elif operator == "*":
    print(num1 * num2)
elif operator == "/":
    print(num1 / num2)
elif operator == "%":
    print (num1 % num2)
elif operator == "**":
    print(num1 ** num2)
elif operator == "==":
    print(num1 == num2)
elif operator == "!=":
    print(num1 != num2)
elif operator == ">":
    print(num1 > num2)
elif operator == "<":
    print(num1 < num2)
elif operator == ">=":
    print(num1 >= num2)
elif operator == "<=":
    print(num1 <= num2)
else:
    print("wrong operator!")