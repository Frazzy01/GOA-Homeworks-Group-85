# 7) შექმენი list: letters = ["a", "b", "c", "d", "e"] მომხმარებელს შეაყვანინე ინდექსი, pop()-ით წაშალე ამ ინდექსზე მდგომი ელემენტი, დაბეჭდე წაშლილი ელემენტი და list

letters = ["a", "b", "c", "d", "e"]

index = int(input("sheiyvanet indexi (0-dan 4-mde): "))

deleted_item = letters.pop(index)

print("washlili elementi:", deleted_item)
print("darchenili list:", letters)