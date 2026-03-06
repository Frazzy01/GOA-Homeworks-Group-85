def accum(st):
    result = ""
    for i in range(len(st)):
        part = st[i].upper()
        join = 0
        while join < i:
            part += st[i].lower()
            join += 1
        result += part
        if i != len(st) - 1:
            result += "-"
    return result