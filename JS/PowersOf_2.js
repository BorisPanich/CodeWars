function powersOfTwo(n) {
    const result = [];
    for (i = 0; i <= n; i++) {
        result.push(Math.pow(2, i));
    }
    return result;
}


function powersOfTwo(n) {
    var arr = [];

    for (var i = 0; i <= n; ++i) {
        arr.push(Math.pow(2, i));
    }

    return arr;
}


powersOfTwo = n => [...Array(n + 1)].map((e, i) => Math.pow(2, i));