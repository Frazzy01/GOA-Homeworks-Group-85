# 5) მომხმარებელს შეაყვანინე რიცხვები, მანამ სანამ არ შეიყვანს 0, 
# ყოველი რიცხვის შემდეგ დაბეჭდე "დადებითია" ან "უარყოფითია".
# დაბეჭდე ბოლოს რიცხვების ჯამი. გამოიყენე while loop.

number = float(input("Enter number (0 for exit): "))
total = 0

while number != 0:
    total += number

    if number > 0:
        print("dadebitia")
    else:
        print("uaryofitia")

    number = float(input("Enter number (0 for exit): "))

print("ricxvebis jami:", total)