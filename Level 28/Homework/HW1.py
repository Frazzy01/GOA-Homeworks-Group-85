# 1) მომხმარებელს შემოაყვანინე წინადადება. დაბეჭდე თითოეული სიტყვა ცალ–ცალკე for loop-ის გამოყენებით. 
# თითოეული სიტყვა დაბეჭდე capitalize()-ით.

sentence = input("enter sentence: ")

word = ""
for i in range(len(sentence)):
    if sentence[i] != " ":
        word += sentence[i]
    else:
        if word:    
            print(word.capitalize())
            word = "" 

if word:
    print(word.capitalize())