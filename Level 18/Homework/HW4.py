# 4)
# მომხმარებელმა შეიყვანოს ტემპერატურა.
# თუ ტემპერატურა მეტია 0-ზე, შიგნით შეამოწმე:

#   თუ მეტია 30-ზე, დაბეჭდე "ცხელა"

#   თუ არა — "ნორმალურია"

# სხვა შემთხვევაში დაუბეჭდე - "ყინვაა"

temp = float(input("enter the temperature: "))

if temp > 0:
    if temp > 30:
        print("cxelia")
    else:
        print("normaluria")
else:
    print("yinvaa")