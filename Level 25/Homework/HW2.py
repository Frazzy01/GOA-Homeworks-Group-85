# 2) შექმენი list: fruits = ["apple", "banana", "apple", "orange"] მომხმარებელს შეაყვანინე ხილი, 
# თუ list-ში უკვე არის ეს ხილი remove()-ით წაშალე მხოლოდ პირველი შემხვედრი, თუ არ არის ლისტში მაშინ დაბეჭდე შესაბამისი შეტყობინება

fruits = ["apple", "banana", "apple", "orange"]

fruit = input("Enter fruit name: ")

if fruits.count(fruit) > 0:
    fruits.remove(fruit)
    print("New list:", fruits)
else:
    print("this fruit no in list")