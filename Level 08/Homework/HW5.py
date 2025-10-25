# 5) მომხმარებელს შემოატანინე:
# --> მომხმარებლის სახელი (username)
# --> პაროლი (password)
# შეამოწმე:
# თუ მომხმარებელი არის "admin" და პაროლი არის 'superSecretPassword' → "მოგესალმები, ადმინ!"
# თუ მომხმარებელი "guest" და პაროლი არის "1234" → "მოგესალმები, სტუმარო!"
# სხვა შემთხვევაში → "მომხმარებელი არ მოიძებნა!"

username = input("sheiyvane momxmarebelis paroli: ")
password = input("sheiyvane paroli: ")

if username == "admin" and password == "superSecretPassword":
    print("mogesalmebi, admin!")
elif username == "guest" and password == "1234":
    print("mogesalmebi, stumaro!")
else:
    print("momxmarebeli ar moidzebna!")