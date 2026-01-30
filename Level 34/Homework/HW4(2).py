def countwnosplit():
    sentence = input("enter sentence: ")
    count = 0
    word_length = 0

    for char in sentence:
        if char != " ":
            word_length += 1
        else:
            if word_length > 4:
                count += 1
            word_length = 0

    if word_length > 4:
        count += 1

    print("4-ze meti sityvis sigrdze:", count)

countwnosplit()