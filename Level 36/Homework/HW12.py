# 12) დაწერეთ ფუნქცია სახელად sumDigits, რომელიც არგუმენტად იღებს რიცხვს და აბრუნებს მისი ციფრების ჯამს.

def sumDigits(number):
    total = 0
    for i in str(number):
        total += int(i)
    return total

print(sumDigits(12345))
print(sumDigits(987))