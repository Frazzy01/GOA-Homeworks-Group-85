# 8) შექმენი list: animals = ["dog", "cat", "horse", "cow"] მომხმარებელს შეაყვანინე ცხოველის სახელი, თუ არსებობს  დაბეჭდე მისი index-იმ, თუ არა  "Animal not found"

animals = ["dog", "cat", "horse", "cow"]

animal_name = input("Enter animal name: ")

if animal_name in animals:
    index = animals.index(animal_name)
    print("cxovelis indexi: " + str(index))
else:
    print("Animal not found")