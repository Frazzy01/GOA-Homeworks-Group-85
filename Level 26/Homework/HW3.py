# 3) შექმენი ცარიელი სია. მომხმარებელს შემოაყვანინე რიცხვები, ყოველი რიცხვი დაამატე სიაში,
# როცა სიაში მყოფი რიცხვების ჯამი გახდება 100-ზე მეტი, შეწყვიტე რიცხვების შეყვანა, 
# ბოლოს დაბეჭდე სია და მათი ჯამი

numbers = []
total = 0 

while total <= 100:
    num = int(input("Enter number: "))
    numbers.append(num)
    total += num

print("list:", numbers)
print("numbers total:", total)