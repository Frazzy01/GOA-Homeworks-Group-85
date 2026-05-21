# def add(num1, num2):
#     num3 = ""
#     if len(str(num1)) == len(str(num2)):
#         for i in range(len(str(num1))):
#             num3 += str(int(str(num1)[i]) + int(str(num2)[i]))
#         return int(num3)
#     elif len(str(num1)) > len(str(num2)):
#         for i in range(len(str(num2))):
#             num3 += str(int(str(num2)[i]) + int(str(num1)[i + len(str(num1)) - len(str(num2))]))
#         return int(str(num1)[:len(str(num1)) - len(str(num2))] + str(num3))
#     else:
#         for i in range(len(str(num1))):
#             num3 += str(int(str(num1)[i]) + int(str(num2)[i + len(str(num2)) - len(str(num1))]))
#         return int(str(num2)[:len(str(num2)) - len(str(num1))] + str(num3))