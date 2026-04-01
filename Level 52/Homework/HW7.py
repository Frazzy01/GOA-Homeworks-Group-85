# def points(games):
#     total = 0
#     for game in games:
#         x_str, y_str = game.split(':')
#         x = int(x_str)
#         y = int(y_str)
#         if x > y:
#             total += 3
#         elif x == y:
#             total += 1
#     return total