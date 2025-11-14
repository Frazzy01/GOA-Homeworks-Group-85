# 4) while loop ის გამოყენებით დაბეჭდეთ რიცხვები ერთიდან 20მდე და გვერდით მიუწერეთ ამ რიცხვებს ლუწია თუ კენტი

i = 1

while i < 20:
    if i % 2 == 0:
        print(i, "Luwia")
    else:
        print(i, "Kentia")
    i = i + 1