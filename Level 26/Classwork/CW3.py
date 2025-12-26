scores = [30, 20, 10, 5, 40, 60, 70, 80, 90]

i=0
while 1<len(scores):
    if scores[i]<60:
        scores.pop(1)

    else:
        i=i+1
print(scores)