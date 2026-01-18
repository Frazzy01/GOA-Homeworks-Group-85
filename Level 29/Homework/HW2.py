# 2)შექმენი სია სადაც იქნება ადამიანის სახელები პატარა ასოებით დაწერილი,
# შემდეგ შექმენი ცარიელი სია და ამ ახალ სიაში ჩაამატე ძველი სიიდან იგივე 
# სახელები ოპღონდ დიდი ასოები ქონდეთ დიდი

names = ["gio", "nino", "ana", "luka"]

upper_names = []

i = 0
while i < len(names):
    upper_names.append(names[i].upper())
    i += 1

print(upper_names)