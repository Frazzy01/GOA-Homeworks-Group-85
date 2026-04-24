# def is_valid_walk(walk):
#     x = 0
#     y = 0
#     count = 0

#     for step in walk:
#         count += 1

#         if step == 'n':
#             y += 1
#         elif step == 's':
#             y -= 1
#         elif step == 'e':
#             x += 1
#         elif step == 'w':
#             x -= 1

#     return count == 10 and x == 0 and y == 0