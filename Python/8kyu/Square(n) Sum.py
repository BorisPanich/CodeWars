import functools
import numbers


def square_sum(numbers):
    sum = 0
    for i in numbers:
        sum += i**2
    return sum


square_sum = lambda n: sum(i**2 for i in numbers)


def square_sum(numbers):
    return sum(map(lambda x: x**2, numbers))


def square_sum(numbers):
    return functools.reduce(lambda x, y: x + y**2, numbers, 0)
