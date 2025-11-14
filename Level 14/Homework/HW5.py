# მომხმარებელს შემოატანინეთ რიცხვი სანამ თქვენს მიერ ჩაფიქრებულ რიცხვს არ შემოიტანს.

secret = 69
guess = -1

while guess != secret:
    guess = int(input("Enter the number: "))
    if guess != secret:
        print("False, Try again!")
    else:
        print("congratulations! You guess my number")