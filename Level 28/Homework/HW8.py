# 8) მომხმარებელს შეაყვანინე 5 რიცხვი while loopით, 
# დაითვალე მათი საშუალო, თუ საშუალო > 50 დაბეჭდე "დიდი საშუალო" 
# წინააღმდეგ შემთხვევაში "პატარა საშუალო"

count = 0
total = 0

while count < 5:
    number = float(input("Enter number "))
    total += number
    count += 1

average = total / 5

if average > 50:
    print("didi sashualo")
else:
    print("patara sashualo")