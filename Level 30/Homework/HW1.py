# 1) შექმენით სახელებით სავსე სია, 
# თუ სიტყვის ყველა ასო არის პატარა და პირველი ასო არის d, 
# მაშინ ახალ სიაში ჩაამატეთ სახელი "NIKA", 
# თუ სიტყვის ყველა ასო არის დიდი ან იწყება ასო K-თი, 
# მაშინ სიაში ჩაამატეთ სახელი "GOGA", სხვა შემთხვევაში სიაში ჩაამატეთ სიტყვა "ლიდერი". 
# დაპრინტეთ მიღებული სია.

names = ["dato", "DAVIT", "goga", "TATO", "dachi", "LEVAN", "KAXA"]

new_list = []

for word in names:
    if word == word.lower() and word[0] == "d":
        new_list.append("NIKA")

    elif word == word.upper() or word[0] == "K":
        new_list.append("GOGA")

    else:
        new_list.append("Lideri")

print(new_list)