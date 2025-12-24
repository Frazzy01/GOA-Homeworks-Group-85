# 9) შექმენი list: nums = [1, 2, 3, 4] მომხმარებელს შეაყვანინე: ინდექსი და რიცხვი, 
# თუ ინდექსი list-ის საზღვრებშია გამოიყენე insert() ჩასამატებლად, თუ ინდექსი ლისტზე დიდია მაშინ გამოიყენე append()

nums = [1, 2, 3, 4]
index = int(input("Enter index: "))
number = int(input("Enter number: "))

count = 0
for item in nums:
    count += 1

if index >= 0 and index < count:
    nums.insert(index, number)
else:
    nums.append(number)

print("New list:", nums)