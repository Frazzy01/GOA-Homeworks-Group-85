# 9) შექმენი ფუქნცია რომელიც მიიღებს რიცხვების სიას და დააბრუნებს მხოლოდ ლუწ რიცხვებს

def even(numbers):
    result = []
    for num in numbers:
        if num % 2 == 0:
            result.append(num)
    return result

nums = [64, 52, 3, 69, 5, 44]
print(even(nums))