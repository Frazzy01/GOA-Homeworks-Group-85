# 4) შექმენი ცარიელი სია. მომხმარებელს შემოაყვანინე რიცხვები, თუ რიცხვი უკვე არსებობს 
# სიაში შეწყვიტე შეყვანა, სხვა შემთხვევაში დაამატე რიცხვები სიაში, ბოლოს დაბეჭდე მთლიანი სია

numbers = []
repeat = False

while repeat == False:
    num = int(input("Enter number: "))

    if num in numbers:
        repeat = True
    else:
        numbers.append(num)

print("list:", numbers)