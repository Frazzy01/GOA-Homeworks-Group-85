# 3) შექმენით ქვეყნების სია, 
# წაშალეთ pop() ან remove() 
# ფუნქციით ყველა ის სიტყვა რომლის 
# ყველა ასო არის დიდი, ხოლო ყველა 
# სხვა სიტყვას ყველა ასო გაუხადეთ დიდი. 
# დაპრინტეთ საბოლოო შედეგი. გამოიყენეთ while ციკლი.

countries = ["georgia", "USA", "france", "GERMANY", "italy", "SPAIN", "brazil"]

i = 0 

while i < len(countries):
    country = countries[i]
    
    if country == country.upper():
        countries.pop(i)
    else:
        countries[i] = country.upper()
        i += 1

print(countries)