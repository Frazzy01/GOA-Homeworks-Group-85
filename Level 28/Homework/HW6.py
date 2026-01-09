# 6) მომხმარებელს შეაყვანინე ასაკი მანამ, სანამ არ შეიყვანს -1. 
# დაბეჭდე რამდენი ადამიანი იყო არასრულწლოვანი, სრულწლოვანი, 
# პენსიონერი. გამოიყენე while loop + if/elif/else

arasrulwlovani = 0
srulwlovani = 0
pensioneri = 0

age = int(input("Enter age (-1 for exit): "))

while age != -1:
    if age < 18:
        arasrulwlovani += 1
    elif age <= 64:
        srulwlovani += 1
    else:
        pensioneri += 1
    
    age = int(input("Enter age (-1 for exit): "))

print("arasrulwlovani:", arasrulwlovani)
print("srulwlovani:", srulwlovani)
print("pensioneri:", pensioneri)