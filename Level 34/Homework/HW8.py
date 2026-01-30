def sumtotal():
    text = input("enter text: ")
    total = 0

    for char in text:
        if '0' <= char <= '9':
            total += int(char)

    print("teqsti cifruli jami:", total)

sumtotal()