# 4) მომხმარებელს შემოაყვანინე 5 რიცხვი, დაბეჭდე მათი ჯამი. გამოიყენე for loop და while loop.

total = 0
count = 0

while count < 5:
    number = float(input("Enter number: "))
    total += number
    count += 1

print("ricxvebis jami:", total)