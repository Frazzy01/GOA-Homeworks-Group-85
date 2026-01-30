def countwsplit():
    sentence = input("entersentence: ")
    words = sentence.split()
    count = 0

    for word in words:
        if len(word) > 4:
            count += 1

    print("4 ze meti raodenoba:", count)


countwsplit()