# მომხმარებელს შემოატანინეთ რიცხვი, ამ რიცხვის ჩათვლით შეკრიბეთ ყველა რიცხვი და გამოიტანეთ საბოლოო პასუხი.

n = int(input("Enter the number: "))

sum_numbers = 0
i = 1

while i <= n:
    sum_numbers = sum_numbers + i
    i = i + 1

print("total is:", sum_numbers)