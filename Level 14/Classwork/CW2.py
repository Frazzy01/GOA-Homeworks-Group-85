# 2) for loop ის გამოყენებით დაბეჭდეთ 1დან 30მდე რიცხვები და ამ რიცხვებს გვერდით მიუწერეთ ლუწია თუ კენტი

for i in range(1, 31):
    if i % 2 == 0:
        print(i, "Luwia")
    else:
        print(i, "Kentia")