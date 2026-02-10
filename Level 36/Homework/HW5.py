# 5) შექმენი ფუქნცია რომელიც იღებს რიცხვების სიას და აბრუნებს მათ საშუალოს

def sia(numbers):
    sul = 0
    for i in numbers:
        sul += i
    return sul / len(numbers)

numbers = [322, 101, 52, 44, 69]
print(sia(numbers))