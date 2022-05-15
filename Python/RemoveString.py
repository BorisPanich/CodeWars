def no_space(x):
    return ("".join([y for y in x if y is not " "]))


def no_space(x):
    str_char = ''
    for i in range(len(x)):
        if x[i] == ' ':
            continue
        else:
            str_char = str_char + x[i]
    return str_char


def no_space(x):
    return ''.join(i for i in x if i != ' ')


def no_space(x):
    return x.replace(' ', '')


def no_space(x):
    return "".join(x.split())


no_space = lambda x: "".join([y for y in x if y is not " "])
