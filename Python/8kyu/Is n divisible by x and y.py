def is_divisible(n, x, y):
    return not n % x and not n % y


def is_divisible(n, x, y):
    return not (n % x or n % y)


def is_divisible(n, x, y):
    return n % x == 0 and n % y == 0


def is_divisible(n, x, y):
    if n % x == 0 and n % y == 0:
        return True
    else:
        return False


is_divisible = lambda n, x, y: not (n % x or n % y)
