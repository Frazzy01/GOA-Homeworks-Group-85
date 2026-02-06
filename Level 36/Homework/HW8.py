# 8) შექმენი ფუქნცია რომელიც მიიღებს რაღაც ტექსტს და ასევე რაღაც რიცხვს, ტექსტსში ყველა ასოა აქციე დიდად და რიცხვითი მნიშვნელობა გადააქცია სტრინგის ტიპად.

def transform(text, number):
    text_upper = text.upper()
    number_str = str(number)
    return text_upper, number_str

resulttext, resultnumber = transform("hello world", 123)
print(resulttext)   
print(resultnumber) 