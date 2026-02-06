# 7) შექმენი ფუქნცია რომელიც მომხმარებელს შემოაყვანინებს რაღაც რიცხვს და დააბრუნებს სიტყვას ეს რიცხვი დადებითია უარყოფითია თუ ნულია

def numbernumber():
    number = float(input("Enter number: "))
    if number > 0:
        return "dadebitiaaa"
    elif number < 0:
        return "uaryofitiaaa"
    else:
        return "zero"

print(numbernumber())