# მომხმარებელს შემოატანინე რიცხვი, მანამ სანამ არ შემოიტანს  ტექტს - 'გამოთვალე საშუალო'. როგორც კი ამ ტექტს შემოიყვანს დაპრინტეთ ყველა შემოტანილი რიცხვის საერთო საშუალო არითმეტიკული.

sum_numbers = 0
count = 0

inp = input("Enter a number or 'Calculate average': ")

while inp != "Calculate average":
    n = int(inp)
    sum_numbers = sum_numbers + n
    count = count + 1
    inp = input("Enter a number or 'Calculate average': ")

if count > 0:
    print("Average is:", sum_numbers / count)
else:
    print("No number entered..")