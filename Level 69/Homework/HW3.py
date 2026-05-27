# def solve(s):
#     upper = 0
#     lower = 0
#     digits = 0
#     special = 0

#     for ch in s:
#         if ch.isupper():
#             upper += 1
#         elif ch.islower():
#             lower += 1
#         elif ch.isdigit():
#             digits += 1
#         else:
#             special += 1

#     return [upper, lower, digits, special]