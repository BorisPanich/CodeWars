def bool_to_word(boolean):
    if boolean:
        return "Yes"
    return "No"


def bool_to_word(boolean):
    return "Yes" if boolean else "No"


def bool_to_word(bool):
    return ['No', 'Yes'][bool]


bool_to_word = {True: 'Yes', False: 'No'}.get

bool_to_word = lambda b: b and "Yes" or "No"

bool_to_word = lambda b: "Yes" if b else "No"
