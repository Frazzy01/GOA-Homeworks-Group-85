# 4) შექმენით სტრინგის ცვლადი და ცარიელი სია. 
# სტრინგში მყოფი დიდი ასოები გახადეთ პატარა და
# ამ სიაში ჩაამატეთ, ხოლო სტრინგში მყოფი პატარა
# ასოები გახადეთ დიდი და ასევე ჩააგდეთ ამ სიაში.
# დაპრინტეთ საბოლოო სია, გამოიყენეთ while ციკლი.

text = "GOaLORiEnteDAcaDeMy"

my_list = []

i = 0

while i < len(text):
    char = text[i]
    if char.islower():
        my_list.append(char.upper())
    elif char.isupper():
        my_list.append(char.lower())
    i += 1

print(my_list)