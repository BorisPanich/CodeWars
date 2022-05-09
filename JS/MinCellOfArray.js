class SmallestIntegerFinder {
    function findSmallestInt(args) {
    return Math.min(...args)
}

function findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0]
}

function findSmallestInt(args) {
    return args.sort((a, b) => a - b).shift();
}

function findSmallestInt(args) {
    return args.reduce((acc, cur) => acc < cur ? acc : cur)
}
}