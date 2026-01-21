# 5) შექმენით სტრინგის ცვლადი და ცარიელი სია, 
# თუ სტრინგის ასო არის პატარა, მაშინ ცარიელ სიაში ჩაამატეთ 
# "%" ნიშანი, ხოლო თუ სტრინგის ასო არის დიდი, მაშინ ცარიელ 
# სიაში ჩაამატეთ "@" ნიშანი. თუ მინუსების რაოდენობა სიაში არის 
# ლუწი, მაშინ წაშალე ყველა "%" ნიშანი, ხოლო თუ მინუსების რაოდენობა 
# სიაში არის კენტი, წაშალე ყველა "@" ნიშანი. "%" და "@" -ების თავიდან 
# სიაში ჩასაგდებად გამოიყენეთ for ციკლი, ხოლო "%" ან "@" -ების წასაშლელად 
# გამოიყენეთ while ციკლი.


my_string = "AbCdeF"

my_list = []

for char in my_string:
    if char.islower():
        my_list.append("%")
    elif char.isupper():
        my_list.append("@")

print("first list:", my_list)

count_percent = my_list.count("%")

if count_percent % 2 == 0:
    i = 0
    while i < len(my_list):
        if my_list[i] == "%":
            my_list.pop(i)
        else:
            i += 1
else:
    i = 0
    while i < len(my_list):
        if my_list[i] == "@":
            my_list.pop(i)
        else:
            i += 1
print("finally list:", my_list)