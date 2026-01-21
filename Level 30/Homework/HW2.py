# 2) შექმენით სიტყვებით სავსე სია, 
# თუ სიტყვის ყველა ასო არის პატარა, 
# ანუ წერია lowercase-ში, 
# ამ სიტყვის ყველა ასო გახადეთ დიდი. 
# თუ სიტყვა შეიცავს თუნდაც ერთ uppercase ასოს, 
# ეს სიტყვა ამოშალეთ სიიდან. ბოლოს დაპრინტეთ მიღებული სია. 
# (არ შექმნათ ახალი სია, იმუშავეთ იგივე სიტყვების სიაში) გამოიყენეთ while ციკლი.

words = ["NIKA", "Goga", "luka", "TAMAR", "levan", "Mari", "tornike"]

i = 0

while i < len(words):
    word = words[i]
    if word != word.lower():
        words.pop(i)
    else:
        words[i] = word.upper()
        i += 1 

print(words)