# 6) შექმენით სტრინგებით სავსე სია, 
# წაშალეთ ის სტრინგ მონაცემთა ტიპის 
# ელემენტები რომლებიც არიან 5-ზე მეტი 
# სიგრძეში ან დგანან კენტ ინდექსზე. 
# გამოიყენეთ remove() ფუნქცი

my_list = ["apple", "banana", "kiwi", "grape", "orange", "fig", "melon"]

for item in my_list[:]:
    index = my_list.index(item)
    if len(item) > 5 or index % 2 == 1:
        my_list.remove(item)

print(my_list)