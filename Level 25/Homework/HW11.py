# 11) შექმენი ცარიელი list მომხმარებელს შემოაყვანინე რიცხვები მანამ სანამ არ დაწერს "stop", ყველა რიცხვი დაამატე ლისთში append()ის გამოყენებით და საბოლოოდ დაბეჭდე ლისთი

numbers = []

user_input = input("sheiyvanet ricxvi (weristvis 'stop'): ")
while user_input != "stop":
    numbers.append(int(user_input))
    user_input = input("sheiyvanet (weristvis 'stop'): ")

print("shesul numerebs chamonatvali:", numbers)