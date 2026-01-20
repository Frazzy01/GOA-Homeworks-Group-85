# 5)შექმენი სია სადაც შეიყვანთ როგორდც დადებით ასევე უარყოფით რიცხვებს,
# შენი დავალებაა გაიგო სიაშ მყოფი დადებით რიცხვების ჯამი და უარყოფით რიცხვების რაოდენობა

numbers = [15, 30, -20, -8, 69, -45, 0]

i = 0
positive_sum = 0
negative_count = 0

while i < len(numbers):
    if numbers[i] > 0:
        positive_sum += numbers[i]
    elif numbers[i] < 0:
        negative_count += 1
    i += 1

print("dadebit ricxvebis jami:", positive_sum)
print("uaryofitis ricxvebis raodenoba:", negative_count)