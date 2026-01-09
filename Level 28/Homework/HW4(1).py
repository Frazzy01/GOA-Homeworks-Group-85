# 4) მომხმარებელს შემოაყვანინე 5 რიცხვი, დაბეჭდე მათი ჯამი. გამოიყენე for loop და while loop.

total = 0

for i in range(5):
    number = float(input("sheiyvane " + str(i+1) + "-e ricxvi: "))
    total += number

print("ricxvebis jami:", total)