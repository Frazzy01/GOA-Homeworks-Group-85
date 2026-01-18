# 1)შექმენი სია სადაც მოათავსებთ განსხვავებული ტიპის მონაცემებს,
# შენი დავალებაა რომ გაიგო თუ რამდენი ცალი სტრინგ ტიპის მონაცემი გვხვდება სიაში

my_list = ["hello", 25, 3.14, True, "Python", "code"]

i = 0
string_count = 0

while i < len(my_list):
    if type(my_list[i]) == str:
        string_count += 1
    i += 1

print("str raodenoba:", string_count)