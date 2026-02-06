# 11) დაწერეთ ფუქნცია, სახელად celsiusToFahrenheit, რომელიც პარამეტრად მიიღებს ცელსიუსს და გადაიყვანს ფარენჰეიტში. ფორმულა - (Celsius * 9/5) + 32

def celsiusToFahrenheit(celsius):
    farengeiti = (celsius * 9/5) + 32
    return farengeiti

temp_c = 25
print(celsiusToFahrenheit(temp_c))