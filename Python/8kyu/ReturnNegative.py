def make_negative(number):
    if number < 0:
        return number
    return number


def make_negative(number):
    if number < 0:
        return number
    return -number


def make_negative(number):
    return -abs(number)


def make_negative(number):
    return -number if number > 0 else number


make_negative = lambda _: -_ if _ >= 0 else _
