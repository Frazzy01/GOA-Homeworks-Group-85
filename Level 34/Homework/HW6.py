def longest_word():

    sentence = input("enter words: ")
    
    words = sentence.split()
    
    i = 0
    max_length = 0
    longest = ""
    
    while i < len(words):
        word = words[i]
        if len(word) > max_length:
            max_length = len(word)
            longest = word
        i += 1
    
    print("longest word:", longest)

longest_word()