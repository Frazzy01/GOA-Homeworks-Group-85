# 1)შექმენი ცვლადი სადაც მომხმარებელს შემოატანინებთ რაიმე რიცხვს

# შექმენი მეორე ცვლადი სადაც მომხმარებელს შემოატანინებთ რაიმე სახელს

# შეამოწმე-->

# თუ შემოყვანილი ასაკი მეტოა 60 ზე მაშინ შეამოწმე შიგნით -->
#     თუ შემოყვანილი სახელი არის --> "kote"  მაშინ დაუპრინტე --> შენი სახელია კოტე და ხარ მოხუცი
#     სხვა შემთხვევაში დაუპრინტე --> შენი სახელი არ არის კოტე მაგრამ ხარ მოხუცი

# თუ ასაკი ნაკლებია 60 ზე მაშინ შეამოწმე შიგნით -->
#     თუ შემოყვანილი სახელი --> "kote" მაშინ დაუპრინტე --> შენი სახელი არის კოტე მაგრამ შენ ხარ ახალგაზრდა:
#     სხვა შემთხვევაში დაუპრინტე --> შენი სახელი არ არის კოტე მაგრამ ხალ ახალგაზრდა


age = int(input("enter you age: "))
name = input("enter your name: ")

if age > 60:
    if name == "kote":
        print("sheni saxelia kote da xar moxuci")
    else:
        print("sheni saxeli ar aris kote magram xar moxuci")
else:
    if name == "kote":
        print("sheni saxeli aris kote magram shen xar axalgazrda")
    else:
        print("sheni saxeli ar aris kote magram xar axalgazrda")