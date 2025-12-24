# 5) შექმენი ნებისმიერი list 5 ელემენტით, მომხმარებელს ჰკითხე: გინდა list-ის გასუფთავება? (yes/no), თუ პასუხი "yes"  გამოიყენე clear(), ბოლოს დაბეჭდე list

my_list = [1, 2, 3, 4, 5]

answer = input("ginda list-is gasuftaveba? (yes/no): ")

if answer == "yes":
    my_list.clear()

print("list:", my_list)