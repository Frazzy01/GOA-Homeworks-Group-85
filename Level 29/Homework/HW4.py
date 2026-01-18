# 4)შექმენი სია და შეიყვანე სტრიგნები პატარა ასოებით,
# შენი დავალებაა შეამოწმო,თუ სტრინგი შეიცავს 5 ასოზე მეტს მაშინ ასეთი სიტყვები 
# ჩაამატე ახალ სიაში ოღონდ პირველი ასო ქონდეთ დიდი ,
# ხოლო თუ სიტყვა შეიცავს 5 ასოზე ნაკლებს მაშინ დაამატე 
# ეს ელემენტებიც სიაში ოღონდ ყველა ასო ქონდეთ დიდი

words = ["python", "code", "programming", "goa", "developer"]

new_words = []

i = 0
while i < len(words):
    if len(words[i]) > 5:
        new_words.append(words[i].capitalize())
    else:
        new_words.append(words[i].upper())
    i += 1

print(new_words)