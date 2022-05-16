from functools import reduce
import math


def find_smallest_int(arr):
    arr.sort()
    return arr[0]


def findSmallestInt(arr):
    return min(arr)


findSmallestInt = lambda arr: min(arr)

findSmallestInt = lambda a: sorted(a)[0]


def findSmallestInt(arr):
    smallest = []
    for i in range(0, len(arr)):
        if (arr[i] < smallest):
            smallest = arr[i]
    return smallest


def findSmallestInt(arr):
    return reduce(lambda x, y: x if x < y else y, arr)
