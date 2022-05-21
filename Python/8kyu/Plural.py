def plural(n):
    return n != 1


def plural(n):
    return False if n == 1 else True


plural = lambda n: n != 1


def plural(n):
    return [True, False][n == 1]
