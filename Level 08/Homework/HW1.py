# 1) მომხმარებელს შემოატანინე ტემპერატურა (რიცხვი) და შემდეგ შეამოწმე:
# თუ ტემპერატურა მეტია 30-ზე -> დაბეჭდე "ძალიან ცხელა!"
# თუ ტემპერატურა მეტია 20-ზე -> დაბეჭდე "სასიამოვნო ამინდია"
# თუ ტემპერატურა მეტია 10-ზე -> დაბეჭდე "ცოტა ცივა"
# თუ ტემპერატურა მეტია 0-ზე -> დაბეჭდე "ცივა, ჩაიცვი თბილად"
# სხვა შემთხვევაში -> "გაიყინები, სახლში დარჩი!"

# P.S. mteli ricxvi tu iqneba magis gamo gamoviyene floati, float- igebs rogorc mtel ricxvebs aseve atwiladebs

temperature = float(input("Enter the temperature: "))

if temperature > 30:
    print("dzalian cxela!")
elif temperature > 20:
    print("sasiamovno amindia")
elif temperature > 10:
    print("cota civa")
elif temperature > 0:
    print("civa, chaicvi tbilad")
else:
    print("gaiyinebi, saxlshi darchi!")