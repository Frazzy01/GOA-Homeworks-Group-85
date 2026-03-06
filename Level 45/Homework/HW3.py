def to_jaden_case(string):
    words = string.split()
    result = ""
    for w in words:
        result += w.capitalize() + " "
    return result[:-1]