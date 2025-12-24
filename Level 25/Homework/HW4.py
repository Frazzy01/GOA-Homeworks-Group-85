# 4) შექმენი list: colors = ["red", "blue", "green", "yellow"] მომხმარებელს შეაყვანინე ფერი, თუ არსებობს  დაბეჭდე მისი index(), თუ არა  დაბეჭდე "Not found"

colors = ["red", "blue", "green", "yellow"]

color = input("Enter color: ")

if colors.count(color) > 0:
    print("Index:", colors.index(color))
else:
    print("Not found")