# 2) მომხმარებელს შემოატანინე ორი რიცხვი:
# --> ქულა (score)
# --> დასწრება (attendance პროცენტებში)
# შემდეგ შეამოწმე:
# თუ ქულა მეტია 80-ზე და დასწრება მეტია 90-ზე -> "შენ შესანიშნავად დაწერე გამოცდა"
# თუ ქულა მეტია 50-ზე და დასწრება მეტია 70-ზე -> "საშუალოდ დაწერე გამოცდა"
# თუ ქულა მეტია 30-ზე ან დასწრება მეტია 50-ზე -> "გაჭირვებით, მაგრამ ჩააბარე გამოცდა"
# ყველა სხვა შემთხვევაში → "ჩაიჭერი!"

score = float(input("Enter the score: "))
attendance = float(input("Enter the attendance percent: "))

if score > 80 and attendance > 90:
    print("Shen shesanishnavad dawere gamocda")
elif score > 50 and attendance > 70:
    print("sashualod dawere gamocda")
elif score > 30 or attendance > 50:
    print("gawirvebit, magram chaabare gamocda")
else:
    print("chaiweri!")

