# 6) მომხმარებელს შემოაყვანინე რიცხვები, შექმენი ორი სია დადებითი და უარყოფითი სიებისთვის, 
# დადებითი რიცხვები დაამატე დადებითი რიცხვებისთვის განკუთვნილ სიაში, უარყოფითი რიცხვები კი პირიქით


positive_numbers = []
negative_numbers = [] 

user_input = input("Enter number or 'stop': ")

while user_input != "stop":
    num = int(user_input)

    if num > 0:
        positive_numbers.append(num)
    elif num < 0:
        negative_numbers.append(num)

    user_input = input("Enter number or 'stop': ")

print("posetive numbers:", positive_numbers)
print("negative numbers:", negative_numbers)