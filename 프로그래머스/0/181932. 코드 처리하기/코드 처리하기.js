function solution(code, mode = 0) {
    return [...code].reduce((acc, c, i) => {    
        if (c === '1') mode = 1 - mode;
        else if (i % 2 === mode) acc += c;
        return acc;
    }, "") || 'EMPTY'
}