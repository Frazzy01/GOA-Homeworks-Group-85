# 6) შექმენი ცარიელი list, მომხმარებელს 5-ჯერ შეაყვანინე რიცხვი, ყველა დაამატე list-ში და საბოლოოდ for loop-ის გამოყენებით დააჯამე რიცხვები რომელიც გექნება ლისტში

numbers = []

for i in range(5):
    num = int(input("enter number: "))
    numbers.append(num)

for number in numbers:
    print(number)