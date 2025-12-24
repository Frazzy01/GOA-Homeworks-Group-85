# 1) შექმენი list: names = ["nika", "luka", "giorgi"] მომხმარებელს შეაყვანინე: ინდექსი და სახელი, insert()-ის გამოყენებით ჩასვი სახელი მითითებულ ადგილას და დაბეჭდე შედეგი

names = ["nika", "luka", "giorgi"]

index = int(input("Enter index: "))
name = input("Enter Name:")

names.insert(index, name)

print(names)