def math():

    n = int(input("enter the integer number: "))
    count = 0

    for i in range(1, n+1):
        if i % 2 == 0:
            count += 1

    print("Sul luwi ricxvia", count)
math()