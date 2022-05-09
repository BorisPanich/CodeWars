def positive_sum(arr):
    sum = 0
    for e in arr:
        if e > 0:
            sum += e
    return sum


def positive_sum(arr):
    return sum(x for x in arr if x > 0)


# return sum([x for x in arr if x==abs(x)])

positive_sum = lambda a: sum(e for e in a if e > 0)
