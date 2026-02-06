# 5) შექმენი ფუქნცია რომელიც იღებს რიცხვების სიას და აბრუნებს მათ საშუალოს

def sia(numbers):
    average = sum(numbers) / len(numbers)
    return average

numbers = [322, 101, 52, 44, 69]
print(sia(numbers))