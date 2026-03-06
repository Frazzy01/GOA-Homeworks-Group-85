def solution(text, ending):
    if len(ending) > len(text):
        return False
    for i in range(1, len(ending)+1):
        if text[-i] != ending[-i]:
            return False
    return True