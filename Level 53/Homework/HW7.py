# def pig_it(text):
#     punctuation = "!?.,"
#     words = text.split()
#     result = []
    
#     for word in words:
#         if word in punctuation:
#             result.append(word)
#         else:
#             result.append(word[1:] + word[0] + "ay")
    
#     return " ".join(result)