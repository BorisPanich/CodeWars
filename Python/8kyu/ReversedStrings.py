def solution(string):
    return string[::-1]


solution = lambda s: s[::-1]


def solution(string):
    temp = list(string)
    temp.reverse()
    return ''.join(temp)


def solution(string):
    return ''.join(i for i in reversed(string))


def solution(string):
    str = [str for str in string]
    return ''.join(str[::-1])