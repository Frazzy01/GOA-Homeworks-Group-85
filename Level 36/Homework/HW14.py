# 14) დაწერეთ ფუნქცია, რომელიც მიიღებს ორ პარამეტრს და დააჯამებს ყველა რიცხვს გარკვეულ შუალედში. მაგალითად შეკრიბავს რიცხვებს 5-დან 100-მდე.

def sum_range(start, end):
    total = 0
    for num in range(start, end + 1):
        total += num
    return total

print(sum_range(5, 100)) 