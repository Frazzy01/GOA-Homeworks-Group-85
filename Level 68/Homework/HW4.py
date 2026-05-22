# def to_camel_case(text):
#     word = ""
#     words = []
    
#     for i in text:
#         if i == "-" or i == "_":
#             words.append(word)
#             word = ""
    
#         else:
#             word += i
            
#     words.append(word)
#     result = ""
    
#     for i in words[1:]:
#         result += i.capitalize()
        
#     return words[0] + result