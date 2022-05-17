def summation(num):
    return sum(range(1, num + 1))


def summation(num):
    return sum(range(num + 1))


def summation(num):
    if num > 1:
        return num + summation(num - 1)
    return 1


summation = lambda num: sum(range(num + 1))
