def even_or_odd(number):
    if number % 2 == 0:
        return 'Even'
    else:
        return 'Odd'


def even_or_odd(number):
    return 'Odd' if number % 2 else 'Even'


def even_or_odd(number):
    return 'Even' if number % 2 == 0 else 'Odd'


def even_or_odd(number):
    return ["Even", "Odd"][number % 2]


def even_or_odd(number):
    if number % 2:
        return "Odd"
    return "Even"


def even_or_odd(number):
    if number % 2 == 0: return 'Even'
    return 'Odd'


even_or_odd = lambda n: "Odd" if n % 2 else "Even"
