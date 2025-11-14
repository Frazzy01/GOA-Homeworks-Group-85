# მომხმარებელს შემოატანინეთ რიცხვი, ამ რიცხვის ჩათვლით შეკრიბეთ ყველა რიცხვი და გამოიტანეთ საბოლოო პასუხი.

n = int(input("Enter the number: "))

sum_numbers = 0

for i in range(1, n + 1):
    sum_numbers = sum_numbers + i 

print("total is:", sum_numbers)